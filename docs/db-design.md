# DB 설계 가이드

이 프로젝트의 DB 구성, 스키마 관리 방법, 코드 작성 규칙을 정리한다.
Spring/JPA 없이 **JDBC로 SQL을 직접 작성**하는 것을 전제로 한다. (2026-11-24 결정)

## 1. 구성

| 항목 | 선택 | 비고 |
| --- | --- | --- |
| DB | MySQL 8 | 로컬은 Docker(`docker compose up -d`), 운영은 AWS RDS |
| DB 접근 | JDBC (`java.sql`) | ORM을 쓰지 않는다 |
| 드라이버 | MySQL Connector/J | |
| 커넥션 풀 | HikariCP | 요청마다 연결을 새로 만들지 않는다 |
| 스키마 관리 | Flyway | SQL 마이그레이션 파일로 테이블을 만들고 바꾼다 |
| 테스트 DB | Testcontainers (MySQL 8 이미지) + JUnit 5 | 동시성·제약 조건은 실제 MySQL에서 검증한다 |

라이브러리 버전은 `backend/` 프로젝트를 만들 때 정한다.

## 2. 환경별 접속 정보

접속 정보는 코드와 저장소에 넣지 않고 환경 변수로만 받는다.

| 환경 변수 | 예시 (로컬) |
| --- | --- |
| `DB_URL` | `jdbc:mysql://localhost:3306/bootcamp?connectionTimeZone=Asia/Seoul` |
| `DB_USERNAME` | `bootcamp` |
| `DB_PASSWORD` | (로컬 `.env` 파일에만 둔다. `.env`는 커밋하지 않는다) |

운영 값은 GitHub Secrets와 서버 환경 변수로 넣는다.

## 3. 스키마 관리 (Flyway)

- SQL 파일은 저장소 루트의 `db/` 폴더에 둔다.
  - `db/migration/`: Flyway 마이그레이션 파일
  - 그 밖의 SQL(로컬용 샘플 데이터 등)은 필요해질 때 `db/` 아래에 용도별 폴더로 추가한다.
- 파일 이름: `V{번호}__{설명}.sql` (밑줄 두 개)
  - 예: `V1__create_member.sql`, `V2__create_course_and_cohort.sql`
- 앱이 시작될 때 아직 실행되지 않은 파일을 번호 순서대로 실행한다.
- **이미 실행된 파일은 절대 고치지 않는다.** 변경이 필요하면 새 번호의 파일을 추가한다.
  (고치면 Flyway가 체크섬 불일치로 실행을 막는다.)
- `db/`는 `backend/` 밖에 있으므로, 백엔드 프로젝트를 만들 때 이 파일들을 빌드 결과물(jar)에 포함하는 방법을 정한다.
  (예: Gradle에서 `db/`를 리소스 폴더로 추가)

## 4. 테이블 작성 규칙 (초안)

| 항목 | 규칙 |
| --- | --- |
| 테이블·컬럼 이름 | 소문자 snake_case, 테이블은 단수형 (`member`, `cohort`) |
| 기본 키 | `id BIGINT AUTO_INCREMENT PRIMARY KEY` |
| 금액 | `BIGINT` (원 단위 정수). Java는 `long` / `Long` |
| 시간 | `DATETIME`, Asia/Seoul 기준으로 저장. Java는 `LocalDateTime` |
| 상태값(enum) | `VARCHAR(30)`. MySQL `ENUM` 타입은 쓰지 않는다 (값 추가 시 테이블 변경이 필요해서) |
| 참/거짓 | `BOOLEAN` (`TINYINT(1)`) |
| 제약 이름 | 유니크 `uk_{테이블}_{컬럼}`, 외래 키 `fk_{테이블}_{참조테이블}` |
| 문자셋·엔진 | `utf8mb4`, InnoDB |
| 공통 컬럼 | 모든 테이블에 `created_at`, `updated_at` (`DATETIME NOT NULL`) |
| 시간 값 넣기 | DB 기본값(`DEFAULT CURRENT_TIMESTAMP`)에 기대지 않고 **애플리케이션이 Asia/Seoul 시각을 넣는다.** 테스트에서 시간을 고정하기 쉽다 |
| 외래 키 | 실제 FK 제약을 건다. 삭제는 막는다(`RESTRICT`, 기본값). 과정은 지우지 않고 `is_public`으로 숨긴다 |
| CHECK 제약 | 값 범위가 명확한 곳(정원, 금액)에 건다. MySQL 8.0.16부터 실제로 검사한다. 애플리케이션 검증을 대신하지 않는 안전망이다 |

테이블과 컬럼 상세는 [`erd.md`](erd.md)를 기준으로 한다.

## 5. JDBC 코드 규칙

- SQL에 값을 넣을 때는 **반드시 `PreparedStatement`와 `?`**를 쓴다. 문자열을 이어 붙여 SQL을 만들지 않는다. (SQL 인젝션 방지)
- `Connection`, `PreparedStatement`, `ResultSet`은 **try-with-resources**로 연다. 닫지 않으면 커넥션 풀이 고갈된다.
- Repository는 도메인마다 하나 두고, 메서드는 `Connection`을 인자로 받는다.
  같은 트랜잭션 안의 작업은 같은 `Connection`을 넘겨서 묶는다.
- 트랜잭션은 서비스 계층에서 트랜잭션 도우미(`inTransaction(conn -> ...)`)로 시작한다.
  도우미는 `setAutoCommit(false)` → 작업 → `commit()`, 예외가 나면 `rollback()` 순서로 처리한다.
- 격리 수준은 MySQL 기본값(`REPEATABLE READ`)을 쓴다. 정원처럼 동시성이 중요한 곳은
  격리 수준에 기대지 않고 원자적 UPDATE(`... WHERE reserved_count < capacity`)로 처리한다.
- `ResultSet` → 객체 변환 코드는 Repository 안에 둔다. 서비스는 SQL을 모른다.

## 6. 테스트

- 상태 전이·환불 정책 같은 도메인 규칙은 DB 없이 **단위 테스트**로 검증한다.
- Repository와 정원 동시성은 **Testcontainers로 띄운 MySQL**에서 검증한다.
  테스트 시작 시 Flyway 마이그레이션을 그대로 실행해 운영과 같은 스키마를 쓴다.
- Testcontainers를 쓰려면 테스트를 돌리는 PC와 CI에 Docker가 있어야 한다.

## 7. ERD

테이블·컬럼·인덱스·CHECK 제약 상세는 [`erd.md`](erd.md)에 있다.

## 8. 결제·정원 처리 규칙 (DB 관점)

### 8.1 `reserved_count`가 세는 것

`reserved_count` = **선점 중(READY)인 결제 수 + 결제 완료(DONE)된 자리 수**

| 사건 | `reserved_count` | 결제 상태 |
| --- | --- | --- |
| 결제 준비 (선점) | +1 (원자적 UPDATE, 실패 시 `COHORT_FULL`) | `READY` 생성 |
| 결제 승인 성공 | 그대로 (선점이 확정으로 바뀜) | `READY → DONE` |
| 결제 실패 | -1 | `READY → FAILED` |
| 선점 10분 만료 | -1 | `READY → EXPIRED` |
| 환불 완료 | -1 | `DONE → CANCELED` 또는 `PARTIAL_CANCELED` |

### 8.2 자리를 두 번 반환하지 않기

자리 반환(-1)은 **결제 상태를 바꾸는 UPDATE가 실제로 1행을 바꿨을 때만** 한다.
스케줄러와 사용자 요청이 같은 결제를 동시에 처리해도 한쪽만 성공한다.

```sql
UPDATE payment SET status = 'EXPIRED', updated_at = ? WHERE id = ? AND status = 'READY';
-- 영향받은 행이 1일 때만 이어서 실행
UPDATE cohort SET reserved_count = reserved_count - 1, updated_at = ? WHERE id = ?;
```

두 UPDATE는 같은 트랜잭션 안에서 실행한다.

### 8.3 지원서 하나에 진행 중인 결제는 하나만

결제 준비와 승인은 **지원서 행을 먼저 잠그고**(`SELECT ... FROM application WHERE id = ? FOR UPDATE`) 시작한다.
잠근 뒤 다음을 확인한다.

- 결제 준비: 지원서가 `ACCEPTED`이고 기한 안인지, 아직 만료되지 않은 `READY` 결제가 있는지.
  있으면 새로 선점하지 않는다. (결제 창을 두 번 열어 자리를 두 개 잡는 것을 막는다)
- 결제 승인: 지원서가 여전히 `ACCEPTED`인지. 그래서 `DONE` 결제는 지원서당 하나만 생긴다.

## 9. 앞으로 이 문서에 추가할 내용

- 2차 테이블 설계는 `erd.md`에 추가한다
- 쿼리 메모, 인덱스 설계 근거 등 DB 관련 결정 기록
