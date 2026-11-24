import type { RouteObject } from "react-router";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import ApplyDonePage from "./pages/ApplyDonePage";
import ApplyPage from "./pages/ApplyPage";
import AuthPage from "./pages/AuthPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseListPage from "./pages/CourseListPage";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import AdminApplicationsPage from "./pages/admin/AdminApplicationsPage";
import AdminCohortsPage from "./pages/admin/AdminCohortsPage";
import AdminCoursesPage from "./pages/admin/AdminCoursesPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminPaymentsPage from "./pages/admin/AdminPaymentsPage";

// 화면 ID는 docs/REQUIREMENTS.md 7장 화면 목록을 따른다.
// 인증 API 연동 전이라 로그인 상태는 라우트 그룹별로 고정한다.
export const routes: RouteObject[] = [
  {
    // 비회원도 보는 화면
    element: <UserLayout loggedIn={false} />,
    children: [
      { path: "/", element: <HomePage /> }, // U-01
      { path: "/courses", element: <CourseListPage /> }, // U-02
      { path: "/courses/:courseId", element: <CourseDetailPage /> }, // U-03
      { path: "/login", element: <AuthPage /> }, // U-04
      { path: "/signup", element: <AuthPage /> }, // U-04
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    // 로그인한 회원 화면
    element: <UserLayout loggedIn />,
    children: [
      { path: "/cohorts/:cohortId/apply", element: <ApplyPage /> }, // U-05
      { path: "/applications/:applicationId/done", element: <ApplyDonePage /> }, // U-06
      { path: "/my", element: <MyPage /> }, // U-07
      { path: "/applications/:applicationId/pay", element: <PaymentPage /> }, // U-08
      { path: "/payments/success", element: <PaymentResultPage result="success" /> }, // U-09
      { path: "/payments/fail", element: <PaymentResultPage result="fail" /> }, // U-09
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> }, // A-01
      { path: "courses", element: <AdminCoursesPage /> }, // A-02
      { path: "cohorts", element: <AdminCohortsPage /> }, // A-03
      { path: "cohorts/:cohortId/applications", element: <AdminApplicationsPage /> }, // A-04
      { path: "payments", element: <AdminPaymentsPage /> }, // A-05
    ],
  },
];
