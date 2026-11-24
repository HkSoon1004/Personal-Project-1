import { Link } from "react-router";

// 원본 시안: docs/design/stitch/u_08_applications_id_pay/code.html
export default function PaymentPage() {
  return (
    <>
      <main className="flex-1 max-w-4xl w-full mx-auto px-lg py-xxl flex flex-col gap-xl">
        <div className="flex flex-col gap-xs">
          <span className="font-eyebrow text-eyebrow text-ink-muted">수강 확정 결제</span>
          <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">결제</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          <div className="lg:col-span-7 flex flex-col gap-lg">
            {/* 1. 주문 정보 */}
            <section className="bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-sm">
              <span className="font-caption text-caption text-ink-muted">주문 정보</span>
              <h2 className="font-card text-card-title text-ink">프론트엔드 React &amp; TS 부트캠프 · 9기</h2>
              <p className="font-body text-body-sm text-ink-muted tabular-nums">교육 기간 2027.01.11 ~ 2027.05.02</p>
              <p className="font-caption text-caption text-ink-muted pt-xs border-t border-hairline-soft">
                결제 버튼 클릭 시 정원 선점이 10분간 유지되며 PG 결제창으로 이동합니다.
              </p>
            </section>

            {/* 3. 결제 수단 */}
            <section className="bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-sm">
              <span className="font-caption text-caption text-ink-muted">결제 수단</span>
              <p className="font-body text-body text-ink">신용·체크카드, 계좌이체, 간편결제는 PG 결제창에서 선택할 수 있습니다.</p>
            </section>

            {/* 4. 환불 규정 */}
            <section className="bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-md">
              <span className="font-caption text-caption text-ink-muted">환불 규정</span>
              <p className="font-body text-body-sm text-ink-muted">
                개강 전 전액 환불 · 총 교육 기간 1/3 경과 전 2/3 환불 · 1/2 경과 전 1/2 환불 · 이후 환불 없음
              </p>
              <label className="flex items-start gap-sm pt-xs border-t border-hairline-soft cursor-pointer">
                <input type="checkbox" required className="mt-xxs rounded-xs border-hairline text-primary focus:ring-primary" />
                <span className="font-body text-body-sm text-ink">위 환불 규정을 확인했으며 이에 동의합니다 (필수)</span>
              </label>
            </section>
          </div>

          {/* 5. 결제 금액 요약 */}
          <aside className="lg:col-span-5 bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-lg">
            <h2 className="font-card text-card-title text-ink">결제 금액</h2>
            <div className="flex flex-col gap-sm pb-md border-b border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="font-body text-body-sm text-ink-muted">수강료</span>
                <span className="font-body text-body text-ink tabular-nums">3,800,000원</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-body-sm text-ink-muted">할인</span>
                <span className="font-body text-body text-ink tabular-nums">-0원</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-button text-button text-ink">최종 결제 금액</span>
              <span className="font-headline text-headline text-ink tabular-nums shrink-0 whitespace-nowrap">3,800,000원</span>
            </div>
            <Link to="/payments/success" className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-12 rounded-md hover:opacity-90">
              <span>3,800,000원 결제하기</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
}
