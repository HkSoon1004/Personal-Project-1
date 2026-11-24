import { Link } from "react-router";

// 원본 시안: docs/design/stitch/a_01_admin/code.html
export default function AdminDashboardPage() {
  return (
    <>
      <main className="flex-1 p-xl flex flex-col gap-xl min-w-0">
        <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">대시보드</h1>

        {/* 1. 요약 카드 4개 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          <Link to="/admin/cohorts" className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xs hover:border-ink transition-colors duration-state-change">
            <span className="font-caption text-caption text-ink-muted">모집 중 기수</span>
            <span className="font-display text-display-md text-ink tabular-nums">4</span>
          </Link>
          <Link to="/admin/cohorts/12/applications" className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xs hover:border-ink transition-colors duration-state-change">
            <span className="font-caption text-caption text-ink-muted">심사 대기</span>
            <span className="font-display text-display-md text-ink tabular-nums">28</span>
          </Link>
          <Link to="/admin/cohorts/12/applications" className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xs hover:border-ink transition-colors duration-state-change">
            <span className="font-caption text-caption text-ink-muted">결제 대기</span>
            <span className="font-display text-display-md text-ink tabular-nums">11</span>
          </Link>
          <Link to="/admin/payments" className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xs hover:border-ink transition-colors duration-state-change">
            <span className="font-caption text-caption text-ink-muted">이번 주 환불 요청</span>
            <span className="font-display text-display-md text-ink tabular-nums">2</span>
          </Link>
        </section>

        {/* 2. 모집 중 기수 */}
        <section className="flex flex-col gap-md">
          <h2 className="font-headline text-headline text-ink">모집 중 기수</h2>
          <div className="bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline bg-canvas">
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">과정·기수</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">모집 마감</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">지원</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">합격</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">확정 / 정원</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink">백엔드 12기</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.12.15</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">42</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">28</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">22 / 30</td>
                  <td className="px-lg py-md text-right">
                    <Link to="/admin/cohorts/12/applications" className="inline-flex items-center justify-center bg-primary text-on-primary font-caption text-caption px-sm py-xs rounded-md hover:opacity-90">심사하기</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink">프론트엔드 9기</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.12.20</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">36</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">24</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">18 / 30</td>
                  <td className="px-lg py-md text-right">
                    <Link to="/admin/cohorts/9/applications" className="inline-flex items-center justify-center bg-primary text-on-primary font-caption text-caption px-sm py-xs rounded-md hover:opacity-90">심사하기</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. 최근 결제 */}
        <section className="flex flex-col gap-md">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-headline text-ink">최근 결제</h2>
            <Link to="/admin/payments" className="font-body text-body-sm text-ink-muted hover:text-ink">전체 보기</Link>
          </div>
          <div className="bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline bg-canvas">
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">주문번호</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">회원</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">과정·기수</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">금액</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">결제일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                <tr>
                  <td className="px-lg py-md font-mono text-mono text-ink tabular-nums">ORD-20261124-0102</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">박하늘</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">프론트엔드 9기</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">3,800,000원</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.24</td>
                </tr>
                <tr>
                  <td className="px-lg py-md font-mono text-mono text-ink tabular-nums">ORD-20261123-0098</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">정우성</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">백엔드 12기</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
