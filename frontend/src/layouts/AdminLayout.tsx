import { Outlet } from "react-router";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <Outlet />
    </div>
  );
}
