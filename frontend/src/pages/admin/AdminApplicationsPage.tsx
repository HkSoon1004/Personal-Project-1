// 원본 시안: docs/design/stitch/a_04_admin_cohorts_id_applications/code.html
export default function AdminApplicationsPage() {
  return (
    <>
      <main className="flex-1 p-xl flex flex-col gap-xl min-w-0">
        <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">지원자 심사 · 백엔드 12기</h1>

        {/* 1. 기수 현황 */}
        <section className="grid grid-cols-3 gap-md">
          <div className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xxs">
            <span className="font-caption text-caption text-ink-muted">확정 / 정원</span>
            <span className="font-headline text-headline text-ink tabular-nums">22 / 30</span>
          </div>
          <div className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xxs">
            <span className="font-caption text-caption text-ink-muted">합격</span>
            <span className="font-headline text-headline text-ink tabular-nums">28</span>
          </div>
          <div className="bg-surface-1 border border-hairline rounded-lg p-lg flex flex-col gap-xxs">
            <span className="font-caption text-caption text-ink-muted">심사 대기</span>
            <span className="font-headline text-headline text-ink tabular-nums">14</span>
          </div>
        </section>

        {/* 2. 상태 탭 */}
        <div role="tablist" aria-label="지원 상태 필터" className="inline-flex flex-wrap items-center gap-xs bg-surface-2 p-xxs rounded-pill w-fit">
          <button role="tab" aria-selected="true" className="bg-surface-1 text-ink font-button text-button px-md py-xs rounded-pill">전체</button>
          <button role="tab" aria-selected="false" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">심사중</button>
          <button role="tab" aria-selected="false" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">합격·결제대기</button>
          <button role="tab" aria-selected="false" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">수강 확정</button>
          <button role="tab" aria-selected="false" className="text-ink-muted font-button text-button px-md py-xs rounded-pill hover:text-ink">불합격</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          {/* 3. 지원자 목록 */}
          <section className="lg:col-span-7 bg-surface-1 border border-hairline rounded-xl flex flex-col overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline bg-canvas">
                    <th className="px-md py-sm font-caption text-caption text-ink-muted">선택</th>
                    <th className="px-md py-sm font-caption text-caption text-ink-muted">이름</th>
                    <th className="px-md py-sm font-caption text-caption text-ink-muted">이메일</th>
                    <th className="px-md py-sm font-caption text-caption text-ink-muted">지원일</th>
                    <th className="px-md py-sm font-caption text-caption text-ink-muted">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline-soft">
                  <tr className="bg-surface-2">
                    <td className="px-md py-md"><input type="checkbox" defaultChecked className="rounded-xs border-hairline text-primary" /></td>
                    <td className="px-md py-md font-body text-body-sm text-ink">김서연</td>
                    <td className="px-md py-md font-mono text-mono text-ink-muted">seoyeon@gmail.com</td>
                    <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.24</td>
                    <td className="px-md py-md font-caption text-caption text-ink">심사중</td>
                  </tr>
                  <tr>
                    <td className="px-md py-md"><input type="checkbox" className="rounded-xs border-hairline text-primary" /></td>
                    <td className="px-md py-md font-body text-body-sm text-ink">이준호</td>
                    <td className="px-md py-md font-mono text-mono text-ink-muted">junho.lee@naver.com</td>
                    <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.22</td>
                    <td className="px-md py-md font-caption text-caption text-ink">합격·결제대기</td>
                  </tr>
                  <tr>
                    <td className="px-md py-md"><input type="checkbox" className="rounded-xs border-hairline text-primary" /></td>
                    <td className="px-md py-md font-body text-body-sm text-ink">정우성</td>
                    <td className="px-md py-md font-mono text-mono text-ink-muted">woosung@kakao.com</td>
                    <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">2026.11.20</td>
                    <td className="px-md py-md font-caption text-caption text-ink">수강 확정</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-md border-t border-hairline bg-canvas flex items-center gap-sm">
              <button type="button" className="bg-primary text-on-primary font-caption text-caption px-sm py-xs rounded-md hover:opacity-90">선택 합격</button>
              <button type="button" className="bg-surface-1 text-ink border border-hairline font-caption text-caption px-sm py-xs rounded-md hover:bg-surface-2">선택 불합격</button>
            </div>
          </section>

          {/* 4. 지원서 상세 */}
          <section className="lg:col-span-5 bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-lg">
            <div className="flex items-center justify-between pb-sm border-b border-hairline-soft">
              <h2 className="font-card text-card-title text-ink">김서연 · 지원서 상세</h2>
              <span className="font-caption text-caption bg-surface-2 text-ink px-xs py-xxs rounded-xs">심사중</span>
            </div>
            <div className="flex flex-col gap-md">
              <div className="flex flex-col gap-xxs">
                <span className="font-caption text-caption text-ink-muted">연락처 · 유입 경로</span>
                <span className="font-body text-body-sm text-ink tabular-nums">010-4821-9034 · 검색 (구글)</span>
              </div>
              <div className="flex flex-col gap-xxs">
                <span className="font-caption text-caption text-ink-muted">지원 동기</span>
                <p className="font-body text-body-sm text-ink text-pretty">
                  컴퓨터공학을 전공하며 기초 CS를 다졌지만, 실제 대용량 트래픽 환경에서의 트랜잭션 제어와 코드 리뷰를 경험해보고 싶어 지원했습니다.
                </p>
              </div>
              <div className="flex flex-col gap-xxs">
                <span className="font-caption text-caption text-ink-muted">관련 경험</span>
                <p className="font-body text-body-sm text-ink text-pretty">
                  Spring Boot 기반 교내 동아리 출석 관리 API 개발 경험 (github.com/seoyeon-dev)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-sm pt-md border-t border-hairline-soft">
              <button type="button" className="flex-1 inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
                <span>합격 (72시간 결제 안내)</span>
              </button>
              <button type="button" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
                <span>불합격</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
