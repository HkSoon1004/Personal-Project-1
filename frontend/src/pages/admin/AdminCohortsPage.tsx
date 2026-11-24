// 원본 시안: docs/design/stitch/a_03_admin_cohorts/code.html
export default function AdminCohortsPage() {
  return (
    <>
      <main className="flex-1 p-xl flex flex-col gap-xl min-w-0">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">기수 관리</h1>
          <button type="button" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
            <span>기수 등록</span>
          </button>
        </div>

        {/* 1. 필터 */}
        <div className="flex flex-wrap items-center gap-sm">
          <select aria-label="과정 필터" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink">
            <option>전체 과정</option>
            <option>백엔드 자바 스프링 부트캠프</option>
            <option>프론트엔드 React &amp; TS 부트캠프</option>
          </select>
          <select aria-label="상태 필터" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink">
            <option>전체 상태</option>
            <option>모집예정</option>
            <option>모집중</option>
            <option>교육중</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          {/* 2. 기수 목록 */}
          <section className="lg:col-span-7 bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline bg-canvas">
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">과정·기수</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">모집 기간</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">정원/최소</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">확정</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">가격</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted">상태</th>
                  <th className="px-md py-sm font-caption text-caption text-ink-muted text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                <tr>
                  <td className="px-md py-md font-body text-body-sm text-ink">백엔드 12기</td>
                  <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">11.20~12.15</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">30 / 10</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">22</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                  <td className="px-md py-md font-caption text-caption text-ink">모집중</td>
                  <td className="px-md py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
                <tr>
                  <td className="px-md py-md font-body text-body-sm text-ink">백엔드 11기</td>
                  <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">08.01~08.31</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">30 / 10</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">29</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">4,200,000원</td>
                  <td className="px-md py-md font-caption text-caption text-ink-muted">교육중</td>
                  <td className="px-md py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
                <tr>
                  <td className="px-md py-md font-body text-body-sm text-ink">PM 7기</td>
                  <td className="px-md py-md font-body text-body-sm text-ink-muted tabular-nums">01.10~02.05</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">25 / 8</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">0</td>
                  <td className="px-md py-md font-body text-body-sm text-ink tabular-nums">3,400,000원</td>
                  <td className="px-md py-md font-caption text-caption text-ink-muted">모집예정</td>
                  <td className="px-md py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 3. 기수 등록·수정 폼 */}
          <section className="lg:col-span-5 bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-md">
            <h2 className="font-card text-card-title text-ink">기수 등록 · 수정</h2>
            <form className="flex flex-col gap-md">
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="cohort-course" className="font-caption text-caption text-ink">과정 *</label>
                  <select id="cohort-course" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink">
                    <option>백엔드 자바 스프링</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="cohort-num" className="font-caption text-caption text-ink">기수 번호 *</label>
                  <input id="cohort-num" type="number" defaultValue="12" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="rec-start" className="font-caption text-caption text-ink">모집 시작</label>
                  <input id="rec-start" type="text" defaultValue="2026.11.20" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="rec-end" className="font-caption text-caption text-ink">모집 마감</label>
                  <input id="rec-end" type="text" defaultValue="2026.12.15" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="cap" className="font-caption text-caption text-ink">정원</label>
                  <input id="cap" type="number" defaultValue="30" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="min-cap" className="font-caption text-caption text-ink">최소 인원</label>
                  <input id="min-cap" type="number" defaultValue="10" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="price" className="font-caption text-caption text-ink">가격(원) *</label>
                <input id="price" type="text" defaultValue="4,200,000" className="bg-surface-1 border border-hairline rounded-md px-sm py-xs min-h-10 font-body text-body-sm text-ink tabular-nums" />
              </div>
              <div className="flex items-center gap-lg">
                <label className="inline-flex items-center gap-xs"><input type="radio" name="funding" defaultChecked className="text-primary" /> <span className="font-body text-body-sm text-ink">자비</span></label>
                <label className="inline-flex items-center gap-xs"><input type="radio" name="funding" className="text-primary" /> <span className="font-body text-body-sm text-ink">국비지원</span></label>
              </div>
              <div className="flex items-center gap-sm pt-sm border-t border-hairline-soft">
                <button type="submit" className="flex-1 inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
                  <span>저장</span>
                </button>
                <button type="button" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
                  <span>취소</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
