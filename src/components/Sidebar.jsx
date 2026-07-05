// src/components/Sidebar.jsx
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export default function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <aside 
      className={`${
        isSidebarOpen ? "w-64" : "w-15"
      } h-screen transition-all duration-300 bg-gray-100 border text-white`}
    >
      {isSidebarOpen ? <h1>Dashboard</h1> : <h1>DB</h1>}
    </aside>
  );
}