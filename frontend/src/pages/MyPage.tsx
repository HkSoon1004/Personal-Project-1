import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_07_my/code.html
export default function MyPage() {
  return (
    <>
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-lg py-xxl grid grid-cols-1 lg:grid-cols-12 gap-xxl items-start">
        {/* 1. 좌측 메뉴 */}
        <aside className="lg:col-span-3 bg-surface-1 border border-hairline rounded-xl p-md flex flex-col gap-xxs">
          <a href="#applications" className="bg-surface-2 text-ink font-button text-button px-md py-sm rounded-md">지원 현황</a>
          <a href="#payments" className="text-ink-muted font-button text-button px-md py-sm rounded-md hover:text-ink hover:bg-canvas">결제·환불 내역</a>
          <a href="#profile" className="text-ink-muted font-button text-button px-md py-sm rounded-md hover:text-ink hover:bg-canvas">내 정보</a>
        </aside>

        <div className="lg:col-span-9 flex flex-col gap-xxl">
          {/* 2. 지원 현황 */}
          <section id="applications" className="flex flex-col gap-lg">
            <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">지원 현황</h1>

            <div className="flex flex-col gap-md">
              {/* 심사중 */}
              <article className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-caption text-caption bg-surface-2 text-ink px-xs py-xxs rounded-xs">심사중</span>
                    <span className="font-caption text-caption text-ink-muted tabular-nums">지원일 2026.11.24</span>
                  </div>
                  <h2 className="font-card text-card-title text-ink">백엔드 자바 스프링 부트캠프 12기</h2>
                </div>
                <button type="button" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
                  <span>지원 취소</span>
                </button>
              </article>

              {/* 합격·결제대기 */}
              <article className="bg-surface-1 border border-ink rounded-lg p-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex flex-wrap items-center gap-xs">
                    <span className="inline-flex items-center gap-xs bg-surface-2 text-ink px-xs py-xxs rounded-xs">
                      <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true"></span>
                      <span className="font-caption text-caption text-ink">합격 · 결제대기</span>
                    </span>
                    <span className="font-caption text-caption text-ink-muted tabular-nums">지원일 2026.11.18</span>
                    <span className="font-mono text-mono text-ink tabular-nums">결제 마감까지 47:52:10</span>
                  </div>
                  <h2 className="font-card text-card-title text-ink">프론트엔드 React &amp; TS 부트캠프 9기</h2>
                </div>
                <Link to="/applications/102/pay" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
                  <span>결제하기</span>
                </Link>
              </article>

              {/* 수강 확정 */}
              <article className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-xs">
                    <span className="inline-flex items-center gap-xs bg-surface-2 text-ink px-xs py-xxs rounded-xs">
                      <span className="w-2 h-2 rounded-full bg-semantic-success" aria-hidden="true"></span>
                      <span className="font-caption text-caption text-ink">수강 확정</span>
                    </span>
                    <span className="font-caption text-caption text-ink-muted tabular-nums">지원일 2026.11.02</span>
                  </div>
                  <h2 className="font-card text-card-title text-ink">프로덕트 UI/UX 디자인 부트캠프 7기</h2>
                </div>
                <button type="button" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
                  <span>환불 요청</span>
                </button>
              </article>

              {/* 기한 만료 */}
              <article className="bg-surface-2 border border-hairline rounded-lg p-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-caption text-caption bg-surface-1 text-ink-muted px-xs py-xxs rounded-xs">기한 만료</span>
                    <span className="font-caption text-caption text-ink-muted tabular-nums">지원일 2026.10.10</span>
                  </div>
                  <h2 className="font-card text-card-title text-ink-muted">IT 프로덕트 매니저 부트캠프 5기</h2>
                </div>
              </article>
            </div>
          </section>

          {/* 3. 결제·환불 내역 */}
          <section id="payments" className="flex flex-col gap-lg">
            <h2 className="font-headline text-headline text-ink">결제·환불 내역</h2>
            <div className="bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline bg-canvas">
                    <th className="px-lg py-sm font-caption text-caption text-ink-muted">결제일</th>
                    <th className="px-lg py-sm font-caption text-caption text-ink-muted">과정·기수</th>
                    <th className="px-lg py-sm font-caption text-caption text-ink-muted">결제 금액</th>
                    <th className="px-lg py-sm font-caption text-caption text-ink-muted">상태</th>
                    <th className="px-lg py-sm font-caption text-caption text-ink-muted">환불액</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline-soft">
                  <tr>
                    <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">2026.11.05</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink">UI/UX 디자인 7기</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">3,600,000원</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink">결제 완료</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">-</td>
                  </tr>
                  <tr>
                    <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">2026.09.12</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink">백엔드 11기</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink-muted">환불 완료</td>
                    <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
