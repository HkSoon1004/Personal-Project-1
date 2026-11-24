import { Link } from "react-router";

type PaymentResultPageProps = {
  result: "success" | "fail";
};

// 원본 시안: docs/design/stitch/u_09_payments_success_fail/code.html
// 시안은 성공·실패를 한 화면에 나란히 그렸다. 실제로는 경로(/payments/success, /payments/fail)에 따라 하나만 보여 준다.
export default function PaymentResultPage({ result }: PaymentResultPageProps) {
  return (
    <main className="flex-1 max-w-[640px] w-full mx-auto px-lg py-xxl">
      {result === "success" ? <PaymentSuccess /> : <PaymentFail />}
    </main>
  );
}

function PaymentSuccess() {
  return (
    <section className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-lg">
      <div className="flex flex-col gap-sm">
        <div className="w-10 h-10 rounded-full bg-primary text-on-primary inline-flex items-center justify-center">
          <span className="material-symbols-outlined text-subhead" aria-hidden="true">check</span>
        </div>
        <h1 className="font-headline text-headline text-ink">결제가 완료되었습니다</h1>
        <p className="font-body text-body text-ink-muted">수강이 확정되었습니다. 개강 안내는 이메일로 드립니다.</p>
      </div>

      <div className="bg-canvas rounded-lg p-lg flex flex-col gap-sm border border-hairline-soft">
        <div className="flex items-center justify-between">
          <span className="font-body text-body-sm text-ink-muted">주문번호</span>
          <span className="font-mono text-mono text-ink tabular-nums">ORD-20261124-0102</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-body-sm text-ink-muted">결제 금액</span>
          <span className="font-button text-button text-ink tabular-nums">3,800,000원</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-body-sm text-ink-muted">결제 일시</span>
          <span className="font-body text-body-sm text-ink tabular-nums">2026.11.24 14:35</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-body text-body-sm text-ink-muted">결제 수단</span>
          <span className="font-body text-body-sm text-ink">신용카드 (현대카드)</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-sm pt-xs">
        <Link to="/my" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
          <span>마이페이지</span>
        </Link>
        <Link to="/" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
          <span>메인으로</span>
        </Link>
      </div>
    </section>
  );
}

function PaymentFail() {
  return (
    <section className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-lg">
      <div className="flex flex-col gap-sm">
        <div className="w-10 h-10 rounded-full bg-surface-2 text-semantic-error inline-flex items-center justify-center">
          <span className="material-symbols-outlined text-subhead" aria-hidden="true">error</span>
        </div>
        <h1 className="font-headline text-headline text-ink">결제에 실패했습니다</h1>
        <p className="font-body text-body text-ink-muted text-balance">
          카드 한도 초과로 승인이 거절되었습니다. 선점했던 자리는 자동으로 반환되었습니다.
        </p>
      </div>

      <div className="bg-canvas rounded-lg p-lg flex flex-col gap-xs border border-hairline-soft">
        <span className="font-caption text-caption text-ink-muted">PG 오류 코드</span>
        <span className="font-mono text-mono text-ink">ERR_CARD_LIMIT_EXCEEDED</span>
      </div>

      <div className="flex flex-wrap items-center gap-sm pt-xs">
        <Link to="/applications/102/pay" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
          <span>다시 결제하기</span>
        </Link>
        <Link to="/my" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
          <span>마이페이지</span>
        </Link>
      </div>
    </section>
  );
}
