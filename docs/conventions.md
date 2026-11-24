# 코딩 컨벤션

이 프로젝트에서 코드를 작성할 때 지키는 규칙이다.
설계 배경은 [`backend-design.md`](backend-design.md), [`db-design.md`](db-design.md)를 참고한다.
서비스의 핵심 비즈니스 규칙(상태 전이, 정원 선점, 결제 멱등성 등)은 `CLAUDE.md`의 "반드시 지킬 도메인 규칙"에 있다.

## 1. 공통

- 커밋 메시지는 `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:` 접두사를 쓴다.
- PG 시크릿 키, DB 비밀번호 같은 비밀 값은 코드나 저장소에 넣지 않는다. 환경 변수와 GitHub Secrets를 쓴다.
- 금액은 원 단위 정수(`long` / `Long`), 시간은 `Asia/Seoul` 기준으로 통일한다.

## 2. 백엔드

### 2.1 구조

- Spring·JPA 같은 프레임워크를 쓰지 않는다. 라우팅, 트랜잭션, 인증, 예외 처리는 `global/`의 직접 만든 클래스로 한다.
- 패키지는 도메인별(`member`, `course`, `cohort`, `application`, `payment`, `refund`)로 나누고,
  각 도메인 안에서 `controller / service / repository / domain / dto`로 나눈다.
- 객체 연결은 `Application.main`에서 생성자 주입으로 한다. DI 컨테이너나 static 싱글턴을 쓰지 않는다.

### 2.2 도메인과 DTO

- 도메인 객체에 setter를 두지 않는다. 상태 변경은 의도가 드러나는 메서드(`accept()`, `confirmPayment()`)로 한다.
- 컨트롤러는 DTO(`record`)만 주고받고, 도메인 객체를 그대로 응답하지 않는다.
- 현재 시각은 `LocalDateTime.now()` 대신 주입받은 `Clock`(Asia/Seoul)으로 구한다.

### 2.3 API와 예외

- API 경로: 사용자 `/api/**`, 관리자 `/api/admin/**`.
- 예외는 `BusinessException(ErrorCode)` 하나로 통일하고 `global/http`의 공통 예외 처리기에서 응답으로 바꾼다.
  - 응답 형식: `{ "code": "COHORT_FULL", "message": "..." }`
  - 예상하지 못한 예외는 `INTERNAL_ERROR`로 응답하고 상세 내용은 로그에만 남긴다.
- 에러 코드 목록은 `REQUIREMENTS.md` 9.1을 따른다.

### 2.4 인증

- 인증은 세션 쿠키(HttpOnly, SameSite=Lax) + `login_session` 테이블이다.
- 세션 토큰 원문은 저장하지 않고 SHA-256 해시만 저장한다.
- 비밀번호는 BCrypt 해시로만 저장하고, 비밀번호와 세션 토큰은 로그에 남기지 않는다.

## 3. DB (JDBC)

- 트랜잭션은 서비스 계층에서 트랜잭션 도우미(`inTransaction(conn -> ...)`)로 시작하고,
  같은 트랜잭션의 Repository 호출에는 같은 `Connection`을 넘긴다.
- SQL 값은 항상 `PreparedStatement`의 `?`로 넣고, JDBC 자원은 try-with-resources로 연다.
- 스키마 변경은 Flyway 마이그레이션 파일(`db/migration/`)로만 한다.
  이미 실행된 마이그레이션 파일은 고치지 않고 새 파일을 추가한다.
- 테이블 네이밍·타입·제약 이름 규칙은 [`db-design.md`](db-design.md) 4장을 따른다.

## 4. 프론트엔드

- 스타일은 `tailwind.config.js`의 디자인 토큰(`bg-canvas`, `text-ink`, `rounded-md` 등)을 쓴다.
  임의 색상값(`#xxxxxx`)을 직접 쓰지 않는다.
- 디자인 원칙은 `docs/design/stitch/`의 디자인 시스템 문서를 따른다.
- 화면은 `src/pages/`(관리자는 `src/pages/admin/`), 경로는 `src/routes.tsx`에 둔다. 화면 ID는 `REQUIREMENTS.md` 7장을 따른다.
- 여러 화면에서 반복되는 UI는 `src/components/`로 뽑는다.

## 5. 테스트

- 도메인 규칙(상태 전이, 환불 정책, 가격 계산)은 **단위 테스트**로 검증한다.
- 정원 동시성은 `ExecutorService` + `CountDownLatch`로 동시 요청 테스트를 작성한다.
- DB가 필요한 테스트(Repository, 동시성)는 Testcontainers로 띄운 MySQL에서 실행한다. H2는 쓰지 않는다.
- 외부 PG 호출은 인터페이스로 감싸고 테스트에서는 가짜 구현을 쓴다.
- API 테스트는 서버를 임의 포트로 띄우고 `HttpClient`로 호출한다.
