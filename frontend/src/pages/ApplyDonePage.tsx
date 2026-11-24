import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_06_applications_id_done/code.html
export default function ApplyDonePage() {
  return (
    <>
      <main className="flex-1 max-w-3xl w-full mx-auto px-lg py-xxl flex flex-col gap-xl justify-center">
        <section className="bg-surface-1 border border-hairline rounded-xl p-xl md:p-xxl flex flex-col gap-xl">
          {/* 1. 완료 메시지 */}
          <div className="flex flex-col gap-sm">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary inline-flex items-center justify-center">
              <span className="material-symbols-outlined text-subhead" aria-hidden="true">check</span>
            </div>
            <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">지원이 완료되었습니다</h1>
            <p className="font-body text-body-lg text-ink-muted">
              서류 심사 결과는 등록된 이메일과 마이페이지에서 안내합니다.
            </p>
          </div>

          {/* 2. 지원 요약 */}
          <div className="bg-canvas border border-hairline-soft rounded-lg p-lg grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="flex flex-col gap-xxs">
              <span className="font-caption text-caption text-ink-muted">지원 과정</span>
              <span className="font-button text-button text-ink">백엔드 자바 스프링 부트캠프</span>
            </div>
            <div className="flex flex-col gap-xxs">
              <span className="font-caption text-caption text-ink-muted">지원 기수</span>
              <span className="font-button text-button text-ink">12기</span>
            </div>
            <div className="flex flex-col gap-xxs">
              <span className="font-caption text-caption text-ink-muted">지원일</span>
              <span className="font-button text-button text-ink tabular-nums">2026.11.24</span>
            </div>
          </div>

          {/* 3. 진행 단계 */}
          <div className="flex flex-col gap-sm">
            <span className="font-eyebrow text-eyebrow text-ink-muted">선발 진행 단계</span>
            <div className="grid grid-cols-5 gap-xs">
              <div className="bg-primary text-on-primary rounded-md p-sm flex flex-col gap-xxs">
                <span className="font-mono text-mono opacity-80">01</span>
                <span className="font-caption text-caption">지원 완료</span>
              </div>
              <div className="bg-canvas border border-hairline rounded-md p-sm flex flex-col gap-xxs">
                <span className="font-mono text-mono text-ink-muted">02</span>
                <span className="font-caption text-caption text-ink-muted">서류 심사</span>
              </div>
              <div className="bg-canvas border border-hairline rounded-md p-sm flex flex-col gap-xxs">
                <span className="font-mono text-mono text-ink-muted">03</span>
                <span className="font-caption text-caption text-ink-muted">합격 발표</span>
              </div>
              <div className="bg-canvas border border-hairline rounded-md p-sm flex flex-col gap-xxs">
                <span className="font-mono text-mono text-ink-muted">04</span>
                <span className="font-caption text-caption text-ink-muted">결제</span>
              </div>
              <div className="bg-canvas border border-hairline rounded-md p-sm flex flex-col gap-xxs">
                <span className="font-mono text-mono text-ink-muted">05</span>
                <span className="font-caption text-caption text-ink-muted">수강 확정</span>
              </div>
            </div>
          </div>

          {/* 4. 버튼 */}
          <div className="flex flex-wrap items-center gap-sm pt-sm border-t border-hairline-soft">
            <Link to="/my" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
              <span>지원 현황 보기</span>
            </Link>
            <Link to="/" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
              <span>메인으로</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
