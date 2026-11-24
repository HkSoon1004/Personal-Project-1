// 원본 시안: docs/design/stitch/u_05_cohorts_id_apply/code.html
export default function ApplyPage() {
  return (
    <>
      <main className="flex-1 max-w-3xl w-full mx-auto px-lg py-xxl flex flex-col gap-xl">
        <div className="flex flex-col gap-xs">
          <span className="font-eyebrow text-eyebrow text-ink-muted">수강 지원</span>
          <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">지원서 작성</h1>
        </div>

        {/* 1. 기수 요약 */}
        <section className="bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div className="flex flex-col gap-xxs">
            <span className="font-caption text-caption text-ink-muted">백엔드 · 12기</span>
            <h2 className="font-card text-card-title text-ink">백엔드 자바 스프링 부트캠프</h2>
            <span className="font-body text-body-sm text-ink-muted tabular-nums">교육 기간 2027.01.04 ~ 2027.04.23</span>
          </div>
          <div className="flex flex-col md:items-end gap-xxs">
            <span className="font-caption text-caption text-ink-muted">수강료</span>
            <span className="font-headline text-headline text-ink tabular-nums">4,200,000원</span>
          </div>
        </section>

        <form className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-xl">
          {/* 2. 지원자 정보 (읽기 전용) */}
          <section className="flex flex-col gap-md pb-lg border-b border-hairline-soft">
            <h2 className="font-card text-card-title text-ink">지원자 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="applicant-name" className="font-body text-body-sm text-ink-muted">이름 (자동 입력)</label>
                <input id="applicant-name" type="text" defaultValue="김서연" readOnly className="bg-surface-2 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink cursor-not-allowed" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="applicant-phone" className="font-body text-body-sm text-ink-muted">연락처 (자동 입력)</label>
                <input id="applicant-phone" type="tel" defaultValue="010-4821-9034" readOnly className="bg-surface-2 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink tabular-nums cursor-not-allowed" />
              </div>
            </div>
          </section>

          {/* 3. 지원 문항 */}
          <section className="flex flex-col gap-lg">
            <h2 className="font-card text-card-title text-ink">지원 문항</h2>
            <div className="flex flex-col gap-xs">
              <label htmlFor="motivation" className="font-body text-body-sm text-ink">지원 동기 *</label>
              <textarea id="motivation" rows={5} required placeholder="부트캠프에 지원하는 이유와 수료 후 목표를 작성해 주세요." className="bg-surface-1 border border-hairline rounded-md p-sm font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
            </div>
            <div className="flex flex-col gap-xs">
              <label htmlFor="experience" className="font-body text-body-sm text-ink">관련 경험 (선택)</label>
              <textarea id="experience" rows={4} placeholder="학습 경험, 프로젝트, GitHub 주소 등이 있다면 자유롭게 작성해 주세요." className="bg-surface-1 border border-hairline rounded-md p-sm font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
            </div>
            <div className="flex flex-col gap-xs">
              <label htmlFor="channel" className="font-body text-body-sm text-ink">유입 경로</label>
              <select id="channel" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink focus:border-ink focus:ring-0">
                <option value="">선택해 주세요</option>
                <option value="search">검색 (네이버 · 구글)</option>
                <option value="sns">SNS · 개발자 커뮤니티</option>
                <option value="referral">지인 및 수료생 추천</option>
              </select>
            </div>
          </section>

          {/* 4. 동의 & 5. 제출 */}
          <div className="flex flex-col gap-lg pt-md border-t border-hairline-soft">
            <label className="flex items-start gap-sm cursor-pointer">
              <input type="checkbox" required className="mt-xxs rounded-xs border-hairline text-primary focus:ring-primary" />
              <span className="font-body text-body-sm text-ink">개인정보 수집·이용에 동의합니다 (필수)</span>
            </label>
            <button type="submit" className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-12 rounded-md hover:opacity-90">
              <span>지원서 제출</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
