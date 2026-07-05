import { Outlet } from "react-router-dom";
import Header from "./Header/Header"; // Adjust path if needed
import { ThemeProvider } from "../contexts/ThemeContext";
import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "./Sidebar";



export default function AppLayout() {
  

  return (
    <div className="app-container">
      
      <ThemeProvider>
        <SidebarProvider>
          <Sidebar/>
          <>
      <Header />
      <main>
        <Outlet />
      </main>
      </>
      </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}