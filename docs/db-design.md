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

테이블 목록과 컬럼은 `docs/REQUIREMENTS.md`의 "8. 데이터 모델"을 기준으로 한다.

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

## 7. 앞으로 이 문서에 추가할 내용

- M0에서 확정한 ERD와 테이블별 설명
- 쿼리 메모, 인덱스 설계 근거 등 DB 관련 결정 기록
