import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_02_courses/code.html
export default function CourseListPage() {
  return (
    <>
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-lg py-xxl">
        <div className="flex flex-col gap-xs mb-xl">
          <span className="font-eyebrow text-eyebrow text-ink-muted">전체 커리큘럼</span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-ink">전체 과정</h1>
        </div>

        {/* 1. Category Filter Tabs */}
        <div className="mb-xl">
          <div role="tablist" aria-label="과정 분야 필터" className="inline-flex flex-wrap items-center gap-xs bg-surface-2 p-xxs rounded-pill">
            <button role="tab" aria-selected="true" className="bg-surface-1 text-ink font-button text-button px-md py-xs min-h-10 rounded-pill">
              <span>전체</span>
            </button>
            <button role="tab" aria-selected="false" className="bg-transparent text-ink-muted font-button text-button px-md py-xs min-h-10 rounded-pill hover:text-ink">
              <span>백엔드</span>
            </button>
            <button role="tab" aria-selected="false" className="bg-transparent text-ink-muted font-button text-button px-md py-xs min-h-10 rounded-pill hover:text-ink">
              <span>프론트엔드</span>
            </button>
            <button role="tab" aria-selected="false" className="bg-transparent text-ink-muted font-button text-button px-md py-xs min-h-10 rounded-pill hover:text-ink">
              <span>UI/UX 디자인</span>
            </button>
            <button role="tab" aria-selected="false" className="bg-transparent text-ink-muted font-button text-button px-md py-xs min-h-10 rounded-pill hover:text-ink">
              <span>PM</span>
            </button>
          </div>
        </div>

        {/* 2. Course Cards 3-col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg items-stretch">
          {/* Card 1 */}
          <Link to="/courses/backend-spring-12" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">백엔드</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink">모집중</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">자바 스프링 부트캠프</h2>
              <p className="font-body text-body-sm text-ink-muted">대용량 트래픽 처리와 MSA 설계까지 실무 백엔드 아키텍처를 완성합니다.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">다음 기수 (12기)</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.01.04 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">4,200,000원</span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/courses/frontend-react-09" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">프론트엔드</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink">모집중</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">React &amp; TS 부트캠프</h2>
              <p className="font-body text-body-sm text-ink-muted">상태 관리, 성능 최적화, 디자인 시스템 구축까지 실전 웹 엔지니어링.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">다음 기수 (9기)</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.01.11 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">3,800,000원</span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/courses/uiux-design-07" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">UI/UX 디자인</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink">모집중</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">프로덕트 디자인 과정</h2>
              <p className="font-body text-body-sm text-ink-muted">문제 정의부터 디자인 시스템, 개발 협업까지 실무 포트폴리오 완성.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">다음 기수 (7기)</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.01.18 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">3,600,000원</span>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/courses/pm-product-06" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">PM</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink">모집중</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">IT 프로덕트 매니저</h2>
              <p className="font-body text-body-sm text-ink-muted">데이터 기반 가설 검증과 PRD 작성, 팀 프로젝트 리딩을 경험합니다.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">다음 기수 (6기)</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.01.25 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">3,400,000원</span>
              </div>
            </div>
          </Link>

          {/* Card 5 (모집예정) */}
          <Link to="/courses/backend-node-04" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">백엔드</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink">모집예정</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">Node.js &amp; NestJS 실무</h2>
              <p className="font-body text-body-sm text-ink-muted text-balance">TypeScript 기반 확장 가능한 API 서버와 실시간 이벤트 처리.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">다음 기수 (4기)</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.02.15 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">3,900,000원</span>
              </div>
            </div>
          </Link>

          {/* Card 6 (마감) */}
          <Link to="/courses/frontend-next-08" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg hover:border-ink transition-colors duration-state-change">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center justify-between gap-xs">
                <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">프론트엔드</span>
                <span className="inline-flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-ink-tertiary" aria-hidden="true"></span>
                  <span className="font-caption text-caption text-ink-muted">모집 마감</span>
                </span>
              </div>
              <h2 className="font-card text-card-title text-ink">Next.js 풀스택 트랙</h2>
              <p className="font-body text-body-sm text-ink-muted">서버 컴포넌트와 엣지 렌더링 기반 프로덕션 웹 애플리케이션 구축.</p>
            </div>
            <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">8기 (정원 마감)</span>
                <span className="font-body text-body-sm text-ink-muted tabular-nums">2026.12.01 개강</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-caption text-caption text-ink-muted">수강료</span>
                <span className="font-button text-button text-ink tabular-nums">4,000,000원</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
