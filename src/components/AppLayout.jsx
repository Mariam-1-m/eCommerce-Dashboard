import { Outlet } from "react-router-dom";
import Header from "./header";
import { SidebarContext } from "../contexts/SidebarContext";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <main className="relative flex flex-1">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;