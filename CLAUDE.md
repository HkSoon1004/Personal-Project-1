# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude(및 AI 코딩 도구)를 위한 프로젝트 안내서다.
상세 요구사항은 `docs/REQUIREMENTS.md`를 기준으로 하며, 이 파일과 충돌하면 요구사항 문서를 따른다.

## 프로젝트 개요

한 교육사가 운영하는 여러 부트캠프 과정(백엔드, 프론트엔드, UI/UX 디자인, PM)을 소개하고,
**지원 → 심사 → 결제 → 수강 확정 → 환불**까지 처리하는 교육 커머스 플랫폼이다.
개인 프로젝트로, 기획부터 프론트엔드·백엔드·배포까지 혼자 진행한다.

- 판매 단위는 **기수(cohort)**다. 과정(course)은 상품의 정체성, 기수는 실제로 정원이 차고 결제되는 단위다.
- 장바구니는 없다. **지원서(application)가 주문 역할**을 하며, 결제는 지원서 단위로 1건이다.

## 기술 스택

| 영역 | 스택 |
| --- | --- |
| 백엔드 | Java 21, Gradle — **Spring 미사용 결정(2026-11-24)**. HTTP 서버·JSON·인증 방식은 미정이며, 이 표의 다른 Spring 관련 항목과 아래 컨벤션도 확정 후 갱신한다 |
| DB | MySQL 8, JDBC 직접 사용(ORM 없음), HikariCP, Flyway (테스트: Testcontainers). 상세는 `docs/db-design.md` |
| 캐시·락 | Redis (2차부터) |
| 프론트엔드 | React, Vite, React Router, TanStack Query (TypeScript 선택) |
| 결제 | PG사 테스트 모드 (예: 토스페이먼츠) |
| 배포 | Docker, GitHub Actions, AWS(EC2/RDS/S3) |
| 문서·테스트 | springdoc(Swagger), JUnit 5, AssertJ, k6 |

## 저장소 구조 (예정)

```
/
├── CLAUDE.md
├── docs/
│   ├── REQUIREMENTS.md      # 요구사항 명세 (기준 문서)
│   ├── db-design.md         # DB 구성, 스키마·JDBC 규칙, 결제·정원 처리 규칙
│   └── erd.md               # ERD (테이블·컬럼·제약 상세)
├── db/                      # SQL 파일
│   └── migration/           # Flyway 마이그레이션 (V1__xxx.sql)
├── backend/                 # Java 백엔드
│   └── src/main/java/.../
│       ├── global/          # 공통 설정, 예외 처리, 보안, 응답 포맷
│       ├── member/
│       ├── course/
│       ├── cohort/
│       ├── application/
│       ├── payment/
│       └── refund/
└── frontend/                # React + Vite
    └── src/
        ├── pages/           # 화면 단위 (U-xx, A-xx)
        ├── components/      # 공통 컴포넌트
        ├── api/             # API 호출 함수
        └── hooks/
```

백엔드 패키지는 **도메인별**로 나누고, 각 도메인 안에서 `controller / service / repository / domain / dto`로 나눈다.

## 자주 쓰는 명령어

```bash
# 백엔드
cd backend && ./gradlew bootRun
cd backend && ./gradlew test
cd backend && ./gradlew build

# 프론트엔드
cd frontend && npm install
cd frontend && npm run dev
cd frontend && npm run build

# 로컬 인프라 (MySQL, Redis)
docker compose up -d
```

## 반드시 지킬 도메인 규칙

1. **지원서 상태 전이**는 엔티티 메서드로만 바꾼다. 허용되지 않은 전이는 예외를 던진다.
   - `SUBMITTED → ACCEPTED | REJECTED | CANCELED`
   - `ACCEPTED → CONFIRMED | EXPIRED`
   - `CONFIRMED → REFUNDED | COMPLETED`
   - `CANCELED, REJECTED, EXPIRED, REFUNDED`는 종료 상태다.
2. **같은 회원은 같은 기수에 한 번만 지원**한다. `(member_id, cohort_id)` 유니크 제약.
3. **정원 선점은 결제 시작 시점**에 한다. 선점은 10분 유지, 승인 시 확정, 실패·만료 시 반환한다.
   - 1차 구현: 원자적 UPDATE
     `UPDATE cohort SET reserved_count = reserved_count + 1 WHERE id = ? AND reserved_count < capacity`
   - 영향받은 행이 0이면 `COHORT_FULL` 예외.
4. **결제 승인 전 서버에서 금액을 검증**한다. 클라이언트가 보낸 금액이 저장된 금액과 다르면 승인하지 않는다.
5. **결제 승인은 멱등**해야 한다. `order_id` 유니크 + 상태 검사로 중복 승인을 막는다.
   PG 승인 성공 후 DB 처리가 실패하면 결제 취소(보상 처리)를 한다.
6. **환불액 계산은 `RefundPolicy`로 분리**하고 경계값 테스트를 반드시 작성한다.
7. 금액은 원 단위 정수(`Long`), 시간은 `Asia/Seoul` 기준으로 통일한다.

## 코딩 컨벤션

- 엔티티에 `@Setter`를 쓰지 않는다. 상태 변경은 의도가 드러나는 메서드(`accept()`, `confirmPayment()`)로 한다.
- 컨트롤러는 DTO만 주고받고, 엔티티를 그대로 응답하지 않는다.
- 트랜잭션은 서비스 계층에서 트랜잭션 도우미(`inTransaction(conn -> ...)`)로 시작하고,
  같은 트랜잭션의 Repository 호출에는 같은 `Connection`을 넘긴다.
- SQL 값은 항상 `PreparedStatement`의 `?`로 넣고, JDBC 자원은 try-with-resources로 연다.
- 스키마 변경은 Flyway 마이그레이션 파일로만 한다. 이미 실행된 마이그레이션 파일은 고치지 않고 새 파일을 추가한다.
- DB 규칙 상세(네이밍, 타입, 테스트)는 `docs/db-design.md`를 따른다.
- 예외는 `BusinessException(ErrorCode)` 하나로 통일하고 `@RestControllerAdvice`에서 처리한다.
  응답 형식: `{ "code": "COHORT_FULL", "message": "..." }`
- API 경로: 사용자 `/api/**`, 관리자 `/api/admin/**`.
- 커밋 메시지: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:` 접두사를 쓴다.

## 테스트 원칙

- 도메인 규칙(상태 전이, 환불 정책, 가격 계산)은 **단위 테스트**로 검증한다.
- 정원 동시성은 `ExecutorService` + `CountDownLatch`로 동시 요청 테스트를 작성한다.
- DB가 필요한 테스트(Repository, 동시성)는 Testcontainers로 띄운 MySQL에서 실행한다. H2는 쓰지 않는다.
- 외부 PG 호출은 인터페이스로 감싸고 테스트에서는 가짜 구현을 쓴다.

## 하지 말 것

- PG 시크릿 키, DB 비밀번호, JWT 시크릿을 코드나 저장소에 넣지 않는다. 환경 변수와 GitHub Secrets를 쓴다.
- `docs/REQUIREMENTS.md`의 단계(1차/2차/3차)를 건너뛰어 2차 기능을 먼저 만들지 않는다.
- 요청받지 않은 대규모 리팩터링이나 라이브러리 추가를 하지 않는다. 필요하면 먼저 제안한다.

## 현재 진행 단계

- [ ] M0. 기획과 시안 (화면 설계서, Stitch 시안, ERD 확정)
  - [x] 1차 ERD 확정 (2026-11-24, `docs/erd.md`, 결제·정원 처리 규칙은 `docs/db-design.md` 8장)
- [ ] M1. 뼈대와 배포 파이프라인 (회원가입·로그인, Docker, GitHub Actions)
- [ ] M2. 과정과 기수
- [ ] M3. 지원과 심사
- [ ] M4. 결제와 환불 (1차 완료)
- [ ] M5~. 2차 기능

진행하면서 이 체크리스트와 결정 사항을 갱신한다.
