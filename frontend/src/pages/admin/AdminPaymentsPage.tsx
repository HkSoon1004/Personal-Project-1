// 원본 시안: docs/design/stitch/a_05_admin_payments/code.html
export default function AdminPaymentsPage() {
  return (
    <>
      <main className="flex-1 p-xl flex flex-col gap-xl min-w-0">
        <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">결제·환불 관리</h1>

        {/* 1. 필터 */}
        <div className="flex flex-wrap items-center gap-sm">
          <select aria-label="기수 필터" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink">
            <option>전체 기수</option>
            <option>백엔드 12기</option>
            <option>프론트엔드 9기</option>
          </select>
          <select aria-label="상태 필터" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink">
            <option>전체 상태</option>
            <option>결제 완료</option>
            <option>부분 환불</option>
            <option>환불 실패</option>
          </select>
          <input type="text" aria-label="기간" defaultValue="2026.11.01 ~ 2026.11.24" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
        </div>

        {/* 2. 결제 목록 */}
        <section className="bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-hairline bg-canvas">
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">주문번호</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">결제일</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">회원</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">과정·기수</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">금액</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">상태</th>
                <th className="px-lg py-sm font-caption text-caption text-ink-muted">환불액</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline-soft">
              <tr>
                <td className="px-lg py-md font-mono text-mono text-ink tabular-nums">ORD-20261124-0102</td>
                <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.24</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">박하늘</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">프론트엔드 9기</td>
                <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">3,800,000원</td>
                <td className="px-lg py-md font-caption text-caption text-ink">결제 완료</td>
                <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">-</td>
              </tr>
              <tr>
                <td className="px-lg py-md font-mono text-mono text-ink tabular-nums">ORD-20261118-0084</td>
                <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.18</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">강민재</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">PM 6기</td>
                <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">3,400,000원</td>
                <td className="px-lg py-md font-caption text-caption text-ink">부분 환불</td>
                <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">2,266,000원</td>
              </tr>
              <tr>
                <td className="px-lg py-md font-mono text-mono text-ink tabular-nums">ORD-20261115-0071</td>
                <td className="px-lg py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.15</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">윤서진</td>
                <td className="px-lg py-md font-body text-body-sm text-ink">백엔드 12기</td>
                <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                <td className="px-lg py-md font-caption text-caption text-semantic-error">환불 실패</td>
                <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
