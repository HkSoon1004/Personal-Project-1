import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_03_courses_id/code.html
export default function CourseDetailPage() {
  return (
    <>
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-lg py-xxl">
        {/* 1. Course Header */}
        <div className="flex flex-col gap-md pb-xl border-b border-hairline">
          <div className="flex flex-wrap items-center gap-xs">
            <span className="font-caption text-caption bg-surface-2 text-ink px-sm py-xxs rounded-xs">백엔드</span>
            <span className="font-caption text-caption bg-surface-1 border border-hairline text-ink px-sm py-xxs rounded-xs">16주 과정 · 온라인 실시간</span>
            <span className="font-caption text-caption bg-surface-1 border border-hairline text-ink px-sm py-xxs rounded-xs">자비 수강</span>
          </div>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-ink text-balance">
            백엔드 자바 스프링 부트캠프
          </h1>
          <p className="font-body text-body-lg text-ink-muted max-w-2xl text-pretty">
            Java, Spring Boot, JPA를 기반으로 대용량 트래픽 처리와 MSA 설계까지 현업 시니어 코드 리뷰로 완성하는 16주 집중 과정입니다.
          </p>
        </div>

        {/* Main 2-column layout: Left content + Right Sticky Cohort Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xxl pt-xl items-start">
          <div className="lg:col-span-8 flex flex-col gap-xxl">
            {/* 2. Section Anchor Tabs */}
            <nav aria-label="과정 상세 섹션" className="flex flex-wrap items-center gap-xs bg-surface-2 p-xxs rounded-pill w-fit">
              <a href="#intro" className="bg-surface-1 text-ink font-button text-button px-md py-xs rounded-pill">소개</a>
              <a href="#curriculum" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">커리큘럼</a>
              <a href="#eligibility" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">지원 대상</a>
              <a href="#faq" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">FAQ</a>
            </nav>

            {/* 3. 과정 소개 */}
            <section id="intro" className="flex flex-col gap-lg">
              <h2 className="font-headline text-headline text-ink">과정 소개</h2>
              <div className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">실습 중심 커리큘럼</span>
                    <span className="font-card text-card-title text-ink tabular-nums">640시간</span>
                  </div>
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">시니어 PR 리뷰</span>
                    <span className="font-card text-card-title text-ink tabular-nums">주 2회</span>
                  </div>
                  <div className="bg-canvas rounded-lg p-md flex flex-col gap-xxs">
                    <span className="font-caption text-caption text-ink-muted">팀 파이널 프로젝트</span>
                    <span className="font-card text-card-title text-ink tabular-nums">6주</span>
                  </div>
                </div>
                <p className="font-body text-body text-ink-muted text-pretty">
                  단순 CRUD 구현을 넘어 동시성 제어, 인덱스 튜닝, 분산 락, CI/CD 파이프라인 구축까지 실무에서 마주하는 문제를 직접 해결하며 성장합니다.
                </p>
              </div>
            </section>

            {/* 4. 커리큘럼 (주차별 아코디언) */}
            <section id="curriculum" className="flex flex-col gap-lg">
              <h2 className="font-headline text-headline text-ink">커리큘럼</h2>
              <div className="flex flex-col gap-sm">
                <details open className="bg-surface-1 border border-hairline rounded-lg p-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-card text-card-title text-ink">1~4주차 · Java 핵심과 객체지향 설계</span>
                    <span className="material-symbols-outlined text-ink-muted" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="font-body text-body-sm text-ink-muted mt-md pt-md border-t border-hairline-soft">
                    컬렉션 프레임워크, 제네릭, 함수형 프로그래밍 및 JUnit5 기반 TDD 실전 훈련을 진행합니다.
                  </p>
                </details>
                <details className="bg-surface-1 border border-hairline rounded-lg p-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-card text-card-title text-ink">5~10주차 · Spring Boot, JPA &amp; DB 튜닝</span>
                    <span className="material-symbols-outlined text-ink-muted" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="font-body text-body-sm text-ink-muted mt-md pt-md border-t border-hairline-soft">
                    트랜잭션 격리 수준, N+1 문제 해결, Redis 캐싱 및 대용량 쿼리 최적화를 학습합니다.
                  </p>
                </details>
                <details className="bg-surface-1 border border-hairline rounded-lg p-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-card text-card-title text-ink">11~16주차 · 실무 팀 프로젝트 및 배포</span>
                    <span className="material-symbols-outlined text-ink-muted" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="font-body text-body-sm text-ink-muted mt-md pt-md border-t border-hairline-soft">
                    프론트엔드·디자이너와 협업하여 실제 커머스 서비스를 설계·배포하고 부하 테스트를 수행합니다.
                  </p>
                </details>
              </div>
            </section>

            {/* 5. 지원 대상 · 선발 절차 */}
            <section id="eligibility" className="flex flex-col gap-lg">
              <h2 className="font-headline text-headline text-ink">지원 대상 및 선발 절차</h2>
              <div className="bg-surface-1 border border-hairline rounded-lg p-xl flex flex-col gap-lg">
                <p className="font-body text-body text-ink">
                  평일 09:00 ~ 18:00 풀타임 몰입이 가능하고, 기초 프로그래밍 문법을 이해한 예비 백엔드 개발자를 대상으로 합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-md pt-md border-t border-hairline-soft">
                  <div className="flex flex-col gap-xxs">
                    <span className="font-mono text-mono text-ink-muted">STEP 1</span>
                    <span className="font-button text-button text-ink">지원서 제출</span>
                  </div>
                  <div className="flex flex-col gap-xxs">
                    <span className="font-mono text-mono text-ink-muted">STEP 2</span>
                    <span className="font-button text-button text-ink">서류 심사</span>
                  </div>
                  <div className="flex flex-col gap-xxs">
                    <span className="font-mono text-mono text-ink-muted">STEP 3</span>
                    <span className="font-button text-button text-ink">합격 발표</span>
                  </div>
                  <div className="flex flex-col gap-xxs">
                    <span className="font-mono text-mono text-ink-muted">STEP 4</span>
                    <span className="font-button text-button text-ink">결제 · 확정</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. FAQ 아코디언 */}
            <section id="faq" className="flex flex-col gap-lg">
              <h2 className="font-headline text-headline text-ink">자주 묻는 질문</h2>
              <div className="flex flex-col divide-y divide-hairline-soft border-t border-b border-hairline-soft">
                <details open className="py-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-body text-body text-ink">합격 후 결제는 언제까지 완료해야 하나요?</span>
                    <span className="material-symbols-outlined text-ink-muted" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="font-body text-body-sm text-ink-muted mt-sm">
                    합격 안내 메일 발송 시점으로부터 72시간 이내에 결제를 완료하셔야 수강이 최종 확정됩니다.
                  </p>
                </details>
                <details className="py-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-body text-body text-ink">환불 규정은 어떻게 되나요?</span>
                    <span className="material-symbols-outlined text-ink-muted" aria-hidden="true">expand_more</span>
                  </summary>
                  <p className="font-body text-body-sm text-ink-muted mt-sm">
                    개강 전 전액 환불, 총 교육 기간 1/3 경과 전 2/3 환불, 1/2 경과 전 1/2 환불, 이후에는 환불이 불가합니다.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* 7. 우측 고정 기수 선택 박스 */}
          <aside className="lg:col-span-4 lg:sticky lg:top-20 bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-lg">
            <div className="flex items-center justify-between">
              <span className="font-eyebrow text-eyebrow text-ink-muted">기수 선택</span>
              <span className="inline-flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                <span className="font-caption text-caption text-ink">모집중</span>
              </span>
            </div>

            <div className="flex flex-col gap-xs">
              <label htmlFor="cohort-select" className="font-caption text-caption text-ink-muted">모집 기수</label>
              <select id="cohort-select" className="bg-canvas border border-hairline rounded-md px-sm py-sm font-body text-body-sm text-ink focus:border-ink focus:ring-0">
                <option value="12">12기 (모집중 · 2027.01.04 개강)</option>
                <option value="13">13기 (모집예정 · 2027.03.02 개강)</option>
              </select>
            </div>

            <div className="flex flex-col gap-sm py-md border-t border-b border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-body text-body-sm text-ink-muted">모집 기간</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2026.11.20 ~ 2026.12.15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-body-sm text-ink-muted">교육 기간</span>
                <span className="font-body text-body-sm text-ink tabular-nums">2027.01.04 ~ 2027.04.23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-body-sm text-ink-muted">남은 자리</span>
                <span className="font-body text-body-sm text-ink tabular-nums">8 / 30명</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="font-body text-body-sm text-ink-muted">수강료</span>
              <span className="font-headline text-headline text-ink tabular-nums">4,200,000원</span>
            </div>

            <Link to="/cohorts/12/apply" className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
              <span>지원하기</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
}
