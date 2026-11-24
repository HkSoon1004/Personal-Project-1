import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_01/code.html
export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        {/* 2. Hero Banner + Product Mockup */}
        <section className="max-w-[1280px] mx-auto px-lg pt-xxl pb-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xxl items-center">
            <div className="lg:col-span-6 flex flex-col items-start gap-lg">
              <span className="font-eyebrow text-eyebrow text-ink-muted">실무 기반 16주 집중 부트캠프</span>
              <h1 className="font-display text-display-xl-mobile lg:text-display-xl text-ink text-balance">
                현업의 기준으로 배우고, 결과로 증명합니다.
              </h1>
              <p className="font-body text-body-lg text-ink-muted max-w-prose text-pretty">
                지원부터 서류 심사, 실무 코드 리뷰, 수료 후 커리어 연결까지. 한 기수 정원 30명의 밀도 있는 학습 경험을 제공합니다.
              </p>
              <div className="flex flex-wrap items-center gap-sm pt-xs">
                <Link to="/courses" className="inline-flex items-center justify-center gap-xs bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md transition-colors duration-state-change ease-state-change hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                  <span>과정 둘러보기</span>
                  <span className="material-symbols-outlined text-body-lg" aria-hidden="true">arrow_forward</span>
                </Link>
                <a href="#recruiting-cohorts" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md transition-colors duration-state-change ease-state-change hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                  <span>모집 일정 확인</span>
                </a>
              </div>
            </div>

            {/* Product-Mockup-Led Hero Visual (Intercom Style) */}
            <div className="lg:col-span-6">
              <div className="bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-lg">
                <div className="flex items-center justify-between border-b border-hairline-soft pb-md">
                  <div className="flex items-center gap-sm">
                    <span className="w-3 h-3 rounded-full bg-hairline" aria-hidden="true"></span>
                    <span className="w-3 h-3 rounded-full bg-hairline" aria-hidden="true"></span>
                    <span className="font-mono text-mono text-ink-muted ml-xs">cohort-workspace / week-08</span>
                  </div>
                  <span role="status" className="inline-flex items-center gap-xs bg-surface-1 text-ink border border-hairline px-sm py-xxs rounded-xs font-caption text-caption">
                    <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                    <span>실시간 심사 진행중</span>
                  </span>
                </div>

                {/* In-product UI snippet: Code Review & Cohort Telemetry */}
                <div className="grid grid-cols-3 gap-sm">
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">수료율</span>
                    <span className="font-card text-card-title text-ink tabular-nums">94.2%</span>
                    <span className="font-caption text-caption text-ink-muted">지난 기수 기준</span>
                  </div>
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">평균 PR 리뷰</span>
                    <span className="font-card text-card-title text-ink tabular-nums">18.4회</span>
                    <span className="font-caption text-caption text-ink-muted">1인당 16주</span>
                  </div>
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">선발 정원</span>
                    <span className="font-card text-card-title text-ink tabular-nums">30명</span>
                    <span className="font-caption text-caption text-ink-muted">소수 정예</span>
                  </div>
                </div>

                <div className="bg-canvas rounded-lg p-md border border-hairline-soft flex flex-col gap-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-body-sm text-ink">OrderServiceTest.java · 멘토 리뷰 코멘트</span>
                    <span className="font-mono text-mono text-ink-muted">14:20 KST</span>
                  </div>
                  <div className="bg-surface-1 rounded-md p-sm border border-hairline-soft font-mono text-mono text-ink-muted overflow-x-auto">
                    <code>@Transactional(isolation = REPEATABLE_READ) // 동시성 테스트 통과 확인</code>
                  </div>
                  <div className="flex items-center justify-between pt-xxs">
                    <span className="font-caption text-caption text-ink-muted">박준호 시니어 멘토 · 네이버페이</span>
                    <span className="inline-flex items-center gap-xs">
                      <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true"></span>
                      <span className="font-caption text-caption text-ink">AI 학습 리포트 연동</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 지금 모집 중인 과정 (Recruiting Cohorts) */}
        <section id="recruiting-cohorts" className="max-w-[1280px] mx-auto px-lg pb-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
            <div className="flex flex-col gap-xs">
              <span className="font-eyebrow text-eyebrow text-ink-muted">모집 현황</span>
              <h2 className="font-display text-display-md-mobile md:text-display-md text-ink">지금 모집 중인 과정</h2>
            </div>
            <Link to="/courses" className="inline-flex items-center gap-xs font-button text-button text-ink hover:text-ink-muted transition-colors duration-state-change">
              <span>전체 과정 보기</span>
              <span className="material-symbols-outlined text-body-lg" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-stretch">
            {/* Cohort Card 1 */}
            <Link to="/courses/backend-spring-12" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg transition-colors duration-state-change ease-state-change hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <div className="flex flex-col gap-sm">
                <div className="flex items-center justify-between gap-xs">
                  <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">백엔드 · 12기</span>
                  <span className="inline-flex items-center gap-xs">
                    <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                    <span className="font-caption text-caption text-ink">모집중</span>
                  </span>
                </div>
                <h3 className="font-card text-card-title text-ink">백엔드 자바 스프링 부트캠프</h3>
                <p className="font-body text-body-sm text-ink-muted">대용량 트래픽 처리와 MSA 설계까지 실무 아키텍처 완성</p>
              </div>

              <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">모집 마감</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">2026.12.15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">남은 자리</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">8 / 30명</span>
                </div>
                <div className="flex items-center justify-between pt-xs">
                  <span className="font-caption text-caption text-ink-muted">수강료</span>
                  <span className="font-button text-button text-ink tabular-nums">4,200,000원</span>
                </div>
              </div>
            </Link>

            {/* Cohort Card 2 */}
            <Link to="/courses/frontend-react-09" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg transition-colors duration-state-change ease-state-change hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <div className="flex flex-col gap-sm">
                <div className="flex items-center justify-between gap-xs">
                  <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">프론트엔드 · 9기</span>
                  <span className="inline-flex items-center gap-xs">
                    <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                    <span className="font-caption text-caption text-ink">모집중</span>
                  </span>
                </div>
                <h3 className="font-card text-card-title text-ink">프론트엔드 React &amp; TS 부트캠프</h3>
                <p className="font-body text-body-sm text-ink-muted">성능 최적화와 디자인 시스템 구축 중심의 웹 엔지니어링</p>
              </div>

              <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">모집 마감</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">2026.12.20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">남은 자리</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">12 / 30명</span>
                </div>
                <div className="flex items-center justify-between pt-xs">
                  <span className="font-caption text-caption text-ink-muted">수강료</span>
                  <span className="font-button text-button text-ink tabular-nums">3,800,000원</span>
                </div>
              </div>
            </Link>

            {/* Cohort Card 3 */}
            <Link to="/courses/uiux-design-07" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg transition-colors duration-state-change ease-state-change hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <div className="flex flex-col gap-sm">
                <div className="flex items-center justify-between gap-xs">
                  <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">UI/UX 디자인 · 7기</span>
                  <span className="inline-flex items-center gap-xs">
                    <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                    <span className="font-caption text-caption text-ink">모집중</span>
                  </span>
                </div>
                <h3 className="font-card text-card-title text-ink">프로덕트 UI/UX 디자인 부트캠프</h3>
                <p className="font-body text-body-sm text-ink-muted">문제 정의부터 디자인 시스템, 개발 협업까지 실전 포트폴리오</p>
              </div>

              <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">모집 마감</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">2026.12.22</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">남은 자리</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">5 / 25명</span>
                </div>
                <div className="flex items-center justify-between pt-xs">
                  <span className="font-caption text-caption text-ink-muted">수강료</span>
                  <span className="font-button text-button text-ink tabular-nums">3,600,000원</span>
                </div>
              </div>
            </Link>

            {/* Cohort Card 4 */}
            <Link to="/courses/pm-product-06" className="h-full bg-surface-1 text-ink border border-hairline rounded-lg p-lg flex flex-col justify-between gap-lg transition-colors duration-state-change ease-state-change hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <div className="flex flex-col gap-sm">
                <div className="flex items-center justify-between gap-xs">
                  <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">PM · 6기</span>
                  <span className="inline-flex items-center gap-xs">
                    <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                    <span className="font-caption text-caption text-ink">모집중</span>
                  </span>
                </div>
                <h3 className="font-card text-card-title text-ink">IT 프로덕트 매니저 부트캠프</h3>
                <p className="font-body text-body-sm text-ink-muted">데이터 기반 가설 검증과 PRD 작성, 팀 프로젝트 리딩</p>
              </div>

              <div className="flex flex-col gap-xs pt-md border-t border-hairline-soft">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">모집 마감</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">2026.12.28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-ink-muted">남은 자리</span>
                  <span className="font-body text-body-sm text-ink tabular-nums">11 / 25명</span>
                </div>
                <div className="flex items-center justify-between pt-xs">
                  <span className="font-caption text-caption text-ink-muted">수강료</span>
                  <span className="font-button text-button text-ink tabular-nums">3,400,000원</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* 4. 분야별로 보기 (Browse by Category) */}
        <section className="max-w-[1280px] mx-auto px-lg pb-section">
          <div className="flex flex-col gap-xs mb-xl">
            <span className="font-eyebrow text-eyebrow text-ink-muted">트랙 탐색</span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-ink">분야별로 보기</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            <Link to="/courses?category=backend" className="bg-surface-1 border border-hairline rounded-lg p-lg flex items-center justify-between gap-md hover:border-ink transition-colors duration-state-change">
              <div className="flex flex-col gap-xxs">
                <span className="font-card text-card-title text-ink">백엔드</span>
                <span className="font-body text-body-sm text-ink-muted">Java · Spring · DB</span>
              </div>
              <span className="material-symbols-outlined text-ink text-subhead" aria-hidden="true">arrow_forward</span>
            </Link>

            <Link to="/courses?category=frontend" className="bg-surface-1 border border-hairline rounded-lg p-lg flex items-center justify-between gap-md hover:border-ink transition-colors duration-state-change">
              <div className="flex flex-col gap-xxs">
                <span className="font-card text-card-title text-ink">프론트엔드</span>
                <span className="font-body text-body-sm text-ink-muted">React · TypeScript</span>
              </div>
              <span className="material-symbols-outlined text-ink text-subhead" aria-hidden="true">arrow_forward</span>
            </Link>

            <Link to="/courses?category=design" className="bg-surface-1 border border-hairline rounded-lg p-lg flex items-center justify-between gap-md hover:border-ink transition-colors duration-state-change">
              <div className="flex flex-col gap-xxs">
                <span className="font-card text-card-title text-ink">UI/UX 디자인</span>
                <span className="font-body text-body-sm text-ink-muted">Figma · Design System</span>
              </div>
              <span className="material-symbols-outlined text-ink text-subhead" aria-hidden="true">arrow_forward</span>
            </Link>

            <Link to="/courses?category=pm" className="bg-surface-1 border border-hairline rounded-lg p-lg flex items-center justify-between gap-md hover:border-ink transition-colors duration-state-change">
              <div className="flex flex-col gap-xxs">
                <span className="font-card text-card-title text-ink">PM</span>
                <span className="font-body text-body-sm text-ink-muted">기획 · 데이터 · 로드맵</span>
              </div>
              <span className="material-symbols-outlined text-ink text-subhead" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* 5. 수료생 후기 (Graduate Testimonials) */}
        <section className="max-w-[1280px] mx-auto px-lg pb-section">
          <div className="flex flex-col gap-xs mb-xl">
            <span className="font-eyebrow text-eyebrow text-ink-muted">수료생 이야기</span>
            <h2 className="font-display text-display-md-mobile md:text-display-md text-ink">수료생 후기</h2>
          </div>

          {/* Featured Inverse Quote Callout Strip */}
          <div className="bg-inverse-canvas text-inverse-ink rounded-xl p-xl lg:p-xxl mb-lg flex flex-col gap-lg">
            <p className="font-headline text-headline text-inverse-ink max-w-3xl text-pretty">
              “단순히 문법을 배우는 것이 아니라, 왜 이 구조를 선택했는지 근거를 대며 코드를 작성하는 습관이 자리 잡았습니다.”
            </p>
            <div className="flex items-center gap-md">
              <img src="https://lh3.googleusercontent.com/aida/ALJJyrAErfjmrwc1wRohZhvVhx_zmnpHR03La5q4P1pNeWaH7kCyLpQKHfRSKZBR8odi9Kf5xb-Aj3rfELR_XlRe-FZA0h-jv4RHGiHcszygJEcQWfgO6ORmtD25vTgSOqA2u0RXkX9xVByGln6WNU42JRThgwVQ5UzWInzh8dPOIxAbGgZ0-QVn5a8brqpo4n4p_ZhfPFHAp5vth3EBqbbBFsDl2Lo9lkSBbSmO4iO0NcLDYJnXVekhfDoqG0PLIQ" alt="김민준 수료생 프로필" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="font-body text-body-sm text-inverse-ink">김민준 · 백엔드 10기 수료</span>
                <span className="font-caption text-caption text-inverse-ink-muted">현 토스페이먼츠 서버 개발자</span>
              </div>
            </div>
          </div>

          {/* 3-up Static Graduate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-stretch">
            <article className="bg-surface-1 rounded-lg p-xl flex flex-col justify-between gap-lg border border-hairline">
              <p className="font-body text-body text-ink text-pretty">
                “매주 현업 시니어의 PR 리뷰를 받으면서 테스트 코드와 예외 처리에 대한 기준이 완전히 달라졌습니다. 실무 면접에서도 그대로 도움이 됐습니다.”
              </p>
              <div className="flex items-center gap-sm pt-md border-t border-hairline-soft">
                <img src="https://lh3.googleusercontent.com/aida/ALJJyrAErfjmrwc1wRohZhvVhx_zmnpHR03La5q4P1pNeWaH7kCyLpQKHfRSKZBR8odi9Kf5xb-Aj3rfELR_XlRe-FZA0h-jv4RHGiHcszygJEcQWfgO6ORmtD25vTgSOqA2u0RXkX9xVByGln6WNU42JRThgwVQ5UzWInzh8dPOIxAbGgZ0-QVn5a8brqpo4n4p_ZhfPFHAp5vth3EBqbbBFsDl2Lo9lkSBbSmO4iO0NcLDYJnXVekhfDoqG0PLIQ" alt="박서준 수료생" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-body text-body-sm text-ink">박서준</span>
                  <span className="font-caption text-caption text-ink-muted">프론트엔드 7기 · 당근마켓</span>
                </div>
              </div>
            </article>

            <article className="bg-surface-1 rounded-lg p-xl flex flex-col justify-between gap-lg border border-hairline">
              <p className="font-body text-body text-ink text-pretty">
                “디자인 토큰부터 개발자와의 핸드오프까지 실제 팀 프로젝트로 경험한 덕분에, 입사 첫 주부터 실무에 바로 투입될 수 있었습니다.”
              </p>
              <div className="flex items-center gap-sm pt-md border-t border-hairline-soft">
                <img src="https://lh3.googleusercontent.com/aida/ALJJyrBX2yZ2HxFA5mv4gGrty3m7CTY-5gbhawxEfLi_uSRNmBqch5TkOBODIIOVIPyO3aVVOW0PK9kyVBPx_0kOfSQO_hYGUyx99AJm3cwSy5D34Aw5fSOsXurh7LlCPczI7gn3GesotOVcBUIEfr8o2lswnwqClzBnCS93EiuBiUJ-3OvSev8CYwA3RP4pHQdXTaAqynHfkQrab6piHruN5NWQq_0LyNpj_8OM9edAT3yvHfu15LR4NpTG1aEGRA" alt="이지연 수료생" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-body text-body-sm text-ink">이지연</span>
                  <span className="font-caption text-caption text-ink-muted">UI/UX 디자인 5기 · 무신사</span>
                </div>
              </div>
            </article>

            <article className="bg-surface-1 rounded-lg p-xl flex flex-col justify-between gap-lg border border-hairline">
              <p className="font-body text-body text-ink text-pretty">
                “막연했던 기획 업무를 지표 설계와 우선순위 프레임워크로 정리할 수 있었고, 개발·디자인 직군과 협업하는 언어를 배웠습니다.”
              </p>
              <div className="flex items-center gap-sm pt-md border-t border-hairline-soft">
                <img src="https://lh3.googleusercontent.com/aida/ALJJyrCO8Eg77O9fu606MDkrTrAcQZD4YiEaSkroQ58vOopWj8aWiJOp17cHGV4Ae48K-RDz1Kqi5be8MmC7oCP4EqQ9yy7xyUXaubF6kgfipLHwbReuhhqutwzG-luOe8tBAGKqzWKwq0Zdrs9gHvxtO9-xPqihjeBa-3DRhzVFK9aTvIYcRqUuKJJfii4ddSCPLZbxauWfbOVue6zWS5lZif3bCY0nX48SbSlXyVbLFWcwvp8dacAX2vn9Qli40Q" alt="최도현 수료생" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-body text-body-sm text-ink">최도현</span>
                  <span className="font-caption text-caption text-ink-muted">PM 4기 · 오늘의집</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
