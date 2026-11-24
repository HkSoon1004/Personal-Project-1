// 원본 시안: docs/design/stitch/u_04_login_signup/code.html
export default function AuthPage() {
  return (
    <>
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-lg py-xxl flex items-start justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl w-full max-w-4xl items-start">
          {/* 1. 로그인 카드 */}
          <section className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-lg">
            <div className="flex flex-col gap-xs">
              <span className="font-eyebrow text-eyebrow text-ink-muted">기존 회원</span>
              <h1 className="font-headline text-headline text-ink">로그인</h1>
            </div>

            <form className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="login-email" className="font-body text-body-sm text-ink">이메일</label>
                <input id="login-email" type="email" placeholder="name@example.com" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="login-password" className="font-body text-body-sm text-ink">비밀번호</label>
                <input id="login-password" type="password" placeholder="비밀번호 입력" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-11 rounded-md hover:opacity-90 mt-xs">
                <span>로그인</span>
              </button>
            </form>

            <p className="font-body text-body-sm text-ink-muted text-center pt-sm border-t border-hairline-soft">
              계정이 없나요? <a href="#signup-card" className="text-ink underline underline-offset-4">회원가입</a>
            </p>
          </section>

          {/* 2. 회원가입 카드 */}
          <section id="signup-card" className="bg-surface-1 border border-hairline rounded-xl p-xl flex flex-col gap-lg">
            <div className="flex flex-col gap-xs">
              <span className="font-eyebrow text-eyebrow text-ink-muted">신규 지원자</span>
              <h2 className="font-headline text-headline text-ink">회원가입</h2>
            </div>

            <form className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="signup-email" className="font-body text-body-sm text-ink">이메일 *</label>
                <input id="signup-email" type="email" required placeholder="name@example.com" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="signup-password" className="font-body text-body-sm text-ink">비밀번호 *</label>
                <input id="signup-password" type="password" required placeholder="8자 이상 영문, 숫자 조합" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="signup-password-confirm" className="font-body text-body-sm text-ink">비밀번호 확인 *</label>
                <input id="signup-password-confirm" type="password" required placeholder="비밀번호 재입력" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="signup-name" className="font-body text-body-sm text-ink">이름 *</label>
                  <input id="signup-name" type="text" required placeholder="홍길동" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="signup-phone" className="font-body text-body-sm text-ink">연락처 *</label>
                  <input id="signup-phone" type="tel" required placeholder="010-1234-5678" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-11 font-body text-body text-ink placeholder:text-ink-muted focus:border-ink focus:ring-0" />
                </div>
              </div>

              <label className="flex items-start gap-sm pt-xs cursor-pointer">
                <input type="checkbox" required className="mt-xxs rounded-xs border-hairline text-primary focus:ring-primary" />
                <span className="font-body text-body-sm text-ink-muted">이용약관 및 개인정보 수집·이용에 동의합니다 (필수)</span>
              </label>

              <button type="submit" className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-11 rounded-md hover:opacity-90 mt-xs">
                <span>가입하기</span>
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
