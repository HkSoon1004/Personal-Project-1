import { Link, NavLink } from "react-router";
import Logo from "./Logo";

type HeaderProps = {
  /** 로그인 여부. 인증 API가 생기기 전까지는 레이아웃에서 고정값을 넘긴다. */
  loggedIn: boolean;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-body text-body-sm text-ink transition-colors duration-state-change ${
    isActive ? "underline underline-offset-4" : "hover:text-ink-muted"
  }`;

const pillLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-body text-body-sm text-ink px-sm py-xs rounded-md transition-colors duration-state-change ${
    isActive ? "bg-surface-2" : "hover:bg-surface-2"
  }`;

export default function Header({ loggedIn }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-canvas border-b border-hairline-soft">
      <div className="max-w-[1280px] mx-auto px-lg h-14 flex items-center justify-between gap-lg">
        <div className="flex items-center gap-xxl">
          <Link
            to="/"
            className="text-ink rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Logo />
          </Link>
          <nav aria-label="주 메뉴" className="hidden md:flex items-center gap-lg">
            <NavLink to="/courses" className={navLinkClass}>
              과정
            </NavLink>
            {/* 설명회는 2차 기능이라 아직 링크하지 않는다 */}
            <span className="inline-flex items-center gap-xs font-body text-body-sm text-ink-muted">
              <span>설명회</span>
              <span className="font-caption text-caption bg-surface-2 text-ink-muted px-xs py-xxs rounded-xs">
                준비중
              </span>
            </span>
          </nav>
        </div>

        <div className="flex items-center gap-sm">
          {loggedIn ? (
            <>
              <NavLink to="/my" className={pillLinkClass}>
                마이페이지
              </NavLink>
              <Link
                to="/logout"
                className="font-body text-body-sm text-ink-muted px-sm py-xs rounded-md hover:text-ink"
              >
                로그아웃
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/login" className={pillLinkClass}>
                로그인
              </NavLink>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md transition-colors duration-state-change ease-state-change hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
