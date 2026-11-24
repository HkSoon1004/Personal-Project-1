import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

type UserLayoutProps = {
  /** 인증 API 연동 전까지는 라우트 그룹별로 로그인 상태를 고정한다. */
  loggedIn: boolean;
};

export default function UserLayout({ loggedIn }: UserLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header loggedIn={loggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
}
