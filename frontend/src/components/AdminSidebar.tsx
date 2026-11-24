import { Link, NavLink } from "react-router";
import Logo from "./Logo";

// TODO: 지원자 심사 메뉴의 기수 ID(12)는 시안의 예시 값이다. API 연동 시 기수 선택 흐름으로 바꾼다.
const menus = [
  { to: "/admin", label: "대시보드" },
  { to: "/admin/courses", label: "과정 관리" },
  { to: "/admin/cohorts", label: "기수 관리" },
  { to: "/admin/cohorts/12/applications", label: "지원자 심사" },
  { to: "/admin/payments", label: "결제·환불 관리" },
];

const menuClass = ({ isActive }: { isActive: boolean }) =>
  `font-body text-body-sm px-sm py-sm rounded-md ${
    isActive ? "bg-surface-2 text-ink" : "text-ink-muted hover:text-ink hover:bg-canvas"
  }`;

export default function AdminSidebar() {
  return (
    <aside className="w-60 shrink-0 bg-surface-1 border-r border-hairline min-h-screen flex flex-col justify-between p-lg">
      <div className="flex flex-col gap-xl">
        <Link to="/admin" className="inline-flex items-center gap-xs text-ink">
          <Logo />
          <span className="font-caption text-caption bg-surface-2 text-ink-muted px-xs py-xxs rounded-xs">
            관리자
          </span>
        </Link>
        <nav aria-label="관리자 메뉴" className="flex flex-col gap-xxs">
          {menus.map((menu) => (
            // end: 하위 경로(/admin/cohorts/12/...)에서 상위 메뉴까지 함께 강조되지 않게 한다
            <NavLink key={menu.to} to={menu.to} end className={menuClass}>
              {menu.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="pt-md border-t border-hairline-soft flex items-center justify-between">
        <span className="font-body text-body-sm text-ink">운영자 김민수</span>
        <Link to="/logout" className="font-caption text-caption text-ink-muted hover:text-ink">
          로그아웃
        </Link>
      </div>
    </aside>
  );
}
