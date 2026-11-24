import { Link } from "react-router";
import Logo from "./Logo";

const footerLinks = [
  { to: "/terms", label: "이용약관" },
  { to: "/privacy", label: "개인정보처리방침" },
  { to: "/refund", label: "환불 규정" },
];

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="max-w-[1280px] mx-auto px-lg py-xxl flex flex-col md:flex-row justify-between gap-xl">
        <div className="flex flex-col gap-sm">
          <Logo size="sm" />
          <p className="font-caption text-caption text-ink-muted">
            주식회사 커리어랩 · 대표 김태현 · 사업자등록번호 211-88-94510 · 원격평생교육시설 신고번호
            제2026-서울강남-0184호
          </p>
          <p className="font-caption text-caption text-ink-muted tabular-nums">
            고객센터 02-6410-8200 (평일 10:00 ~ 18:00 KST)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-lg">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-caption text-caption text-ink-muted hover:text-ink transition-colors duration-state-change"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
