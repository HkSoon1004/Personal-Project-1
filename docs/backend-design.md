# 백엔드 설계 가이드

Spring 없이 **Java 21 + JDK 내장 HttpServer**로 API 서버를 만든다. (2026-11-24 결정)
프레임워크가 대신 해 주던 일(라우팅, JSON 변환, 트랜잭션, 인증, 예외 처리)을 작은 클래스로 직접 만들고,
연결·파싱처럼 직접 만들어도 배울 것이 적고 실수가 잦은 부분만 라이브러리를 쓴다.

DB 관련 내용은 [`db-design.md`](db-design.md), 테이블은 [`erd.md`](erd.md)를 따른다.

## 1. 기술 선택

| 영역 | 선택 | 직접 만드는 것 / 비고 |
| --- | --- | --- |
| HTTP 서버 | JDK 내장 `com.sun.net.httpserver.HttpServer` | 라우터(경로·메서드 매칭, 경로 변수), 요청·응답 도우미 |
| 동시 요청 처리 | Java 21 가상 스레드 (`Executors.newVirtualThreadPerTaskExecutor()`) | 요청 하나당 가상 스레드 하나 |
| JSON | Jackson (`jackson-databind` + `jackson-datatype-jsr310`) | DTO는 `record`로 작성 |
| 인증 | 세션 + DB 저장 (HttpOnly 쿠키) | 세션 발급·조회·만료, 관리자 권한 검사 |
| 비밀번호 | BCrypt 라이브러리 | 해시·검증만 라이브러리에 맡긴다 |
| DB | JDBC + HikariCP + Flyway + MySQL Connector/J | [`db-design.md`](db-design.md) 참고 |
| 의존성 연결 | 직접 연결 (생성자 주입) | `main`에서 객체를 만들어 생성자로 넘긴다. DI 컨테이너 없음 |
| 설정 | 환경 변수 (`System.getenv`) | 로컬 기본값을 둔 `AppConfig` 클래스 |
| 로깅 | SLF4J + Logback | HikariCP·Flyway도 SLF4J로 로그를 남긴다 |
| 입력 검증 | 직접 작성 | 요청 DTO(record)의 생성자에서 검사하고 실패 시 `BusinessException` |
| 스케줄러 | `ScheduledExecutorService` (JDK) | 선점 만료, 결제 기한 만료, 안내 메일, 만료 세션 정리 |
| PG 연동 | `java.net.http.HttpClient` (JDK) | `PaymentGateway` 인터페이스 뒤에 숨기고 테스트는 가짜 구현 |
| 메일 | M4에서 결정 | `MailSender` 인터페이스. 그전까지는 로그만 남기는 구현 |
| 빌드 | Gradle (`application` 플러그인) | `./gradlew run`으로 실행, `installDist`로 배포 묶음 생성 |
| 테스트 | JUnit 5, AssertJ, Testcontainers | API 테스트는 실제 서버를 임의 포트로 띄우고 `HttpClient`로 호출 |

라이브러리 버전과 기본 패키지 이름은 `backend/` 프로젝트를 만들 때 정한다.

## 2. 요청 처리 흐름

```
HttpServer
  → Router            : 메서드 + 경로로 핸들러 찾기 (/api/courses/{courseId})
  → 필터               : 요청 로그 → 인증(세션 조회) → 관리자 권한 검사(/api/admin/**)
  → Controller        : 요청 JSON → DTO 변환, 서비스 호출, 응답 DTO → JSON
  → Service           : 트랜잭션 시작, 도메인 규칙 실행
  → Repository        : SQL 실행
  ← 예외 처리기         : BusinessException → { "code", "message" } + HTTP 상태 코드
                         그 밖의 예외 → 500 INTERNAL_ERROR (상세 내용은 로그에만)
```

- 컨트롤러는 DTO만 주고받는다. 도메인 객체를 그대로 JSON으로 내보내지 않는다.
- 응답 본문은 항상 JSON(`Content-Type: application/json; charset=utf-8`)이다.
- 에러 응답 형식: `{ "code": "COHORT_FULL", "message": "남은 자리가 없습니다." }`
  `ErrorCode`가 HTTP 상태 코드와 기본 메시지를 함께 가진다. 목록은 `REQUIREMENTS.md` 9.1을 따른다.

## 3. 인증 (세션 + DB)

### 3.1 흐름

1. **로그인:** 이메일·비밀번호 확인(BCrypt) → 무작위 세션 토큰 생성 → 토큰의 **해시값**을 `login_session` 테이블에 저장
   → 원래 토큰을 쿠키로 응답한다.
2. **요청마다:** 쿠키의 토큰을 해시해 `login_session`에서 찾는다. 없거나 만료됐으면 비로그인으로 본다.
   로그인이 필요한 API면 `401 UNAUTHORIZED`, 관리자 API에 `USER`가 접근하면 `403 FORBIDDEN`.
3. **로그아웃:** `login_session` 행을 지우고 쿠키를 만료시킨다.
4. **정리:** 만료된 세션은 스케줄러가 주기적으로 지운다.

### 3.2 규칙

- 세션 토큰은 `SecureRandom` 32바이트를 Base64URL로 인코딩한다.
- DB에는 토큰 원문이 아니라 **SHA-256 해시**를 저장한다. DB가 유출돼도 세션을 가로챌 수 없다.
- 세션 유효 기간은 로그인 시점부터 7일이다. (사용할 때마다 연장하지 않는다)
- 쿠키 속성: `HttpOnly; SameSite=Lax; Path=/` (운영 환경에서는 `Secure` 추가)
  - `HttpOnly`: 자바스크립트가 쿠키를 읽지 못해 XSS로 세션을 훔치기 어렵다.
  - `SameSite=Lax`: 다른 사이트에서 보낸 POST 요청에는 쿠키가 붙지 않아 CSRF를 막는다.
- 상태를 바꾸는 요청(POST·PUT·PATCH·DELETE)은 `Content-Type: application/json`만 받는다.
- 비밀번호는 BCrypt 해시(`member.password_hash`)로만 저장하고, 로그에 남기지 않는다.

### 3.3 프론트엔드와 같은 출처로 맞추기

쿠키 인증은 프론트와 API가 **같은 출처(도메인·포트)**일 때 가장 단순하다. 그래서 CORS 설정 없이 다음처럼 맞춘다.

- **로컬 개발:** Vite 개발 서버(5173)가 `/api` 요청을 백엔드(8080)로 넘긴다. (`vite.config.ts`의 `server.proxy`)
- **운영:** 한 도메인 아래에서 `/api/**`는 백엔드로, 나머지는 프론트 정적 파일로 보낸다. 구체적인 구성은 배포 단계(M1)에서 정한다.

## 4. 패키지 구조

```
backend/src/main/java/{기본 패키지}/
├── Application.java       # main: 설정 읽기 → 객체 연결 → 서버 시작
├── global/
│   ├── config/            # AppConfig (환경 변수)
│   ├── http/              # Router, 요청·응답 도우미, 필터, 예외 처리기
│   ├── json/              # Jackson 설정
│   ├── db/                # DataSource, TransactionManager(inTransaction)
│   ├── auth/              # 세션 발급·조회, 로그인 회원 정보, 권한 검사
│   ├── error/             # BusinessException, ErrorCode
│   └── time/              # Clock (Asia/Seoul) — 테스트에서 시간 고정
├── member/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── domain/
│   └── dto/
├── course/  cohort/  application/  payment/  refund/   # member와 같은 구조
```

- 현재 시각은 `LocalDateTime.now()`를 직접 부르지 않고 주입받은 `Clock`으로 구한다. 테스트에서 시간을 고정하기 위해서다.
- 도메인 객체에는 setter를 두지 않는다. 상태 변경은 의도가 드러나는 메서드(`accept()`, `confirmPayment()`)로 한다.

## 5. API 문서

Spring용 문서 도구(springdoc)를 쓰지 않으므로 API 명세는 문서로 직접 관리한다.
`REQUIREMENTS.md` 9장의 API 목록을 기준으로, 구현하면서 요청·응답 예시를 `docs/api.md`에 추가한다.

## 6. 미정 사항

- 기본 패키지 이름, 라이브러리 버전 (`backend/` 생성 시)
- 메일 발송 방식 (M4)
- 운영 환경에서 프론트·API를 한 도메인으로 묶는 방법 (M1 배포)
