# frontend

커리어랩 부트캠프 플랫폼의 프론트엔드 (React + Vite + TypeScript + Tailwind CSS v3).

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 타입 검사 + 프로덕션 빌드
npm run lint
```

## 구조

- `src/routes.tsx`: 경로와 화면 매핑. 화면 ID는 `docs/REQUIREMENTS.md` 7장을 따른다.
- `src/layouts/`: 사용자 화면(헤더·푸터)과 관리자 화면(사이드바) 레이아웃
- `src/pages/`: 화면 단위 컴포넌트. 각 파일 상단에 원본 Stitch 시안 경로가 적혀 있다.
- `tailwind.config.js`: Stitch 시안의 디자인 토큰 (색상, 글자 크기, 간격, 모서리)

## 현재 상태

- Stitch 시안(`docs/design/stitch/`)을 화면별로 옮긴 **정적 페이지**다. 화면의 과정명·금액·날짜는 시안의 예시 값이다.
- 로그인 상태는 인증 API가 생기기 전까지 라우트 그룹별로 고정되어 있다 (`routes.tsx`).
- 폼 제출, 탭 전환, 아코디언 같은 동작은 아직 없다.
