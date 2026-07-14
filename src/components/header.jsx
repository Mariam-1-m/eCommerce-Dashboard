import { LogOut, Moon, Sun, Bell, TextAlignJustify, Menu } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
import { ThemeContext } from "../contexts/ThemeContext";
import { SidebarContext } from "../contexts/SidebarContext";
import React, { useContext, useState } from "react";

 function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const isLight = theme === "light";
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const { logout, user } = useAuth();
  const [saving, setIsSaving] = useState(false);
  const handleLogout = async (e) => {
    setIsSaving(true)
    const res = await logout();
    if (res.success) {
      toast.success(res.message);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/20">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 lg:hidden"
            aria-label="Toggle Sidebar"
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 p-1.5">
              <img
                src="/src/assets/logo.png"
                alt="Store Logo"
                className="size-full rounded-xl bg-size-[100%_100%] object-fit"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <h1 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                Store Dashboard
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                E-Commerce Admin Panel
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">

          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100">
            <Bell size={18} />
            <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block" />

          {user && (
            <div className="hidden md:flex items-center gap-3 rounded-xl border border-slate-200/60 bg-slate-50/50 p-1.5 pr-3 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-8 w-8 items-center rounded-full justify-center overflow-hidden bg-linear-to-br from-cyan-500 to-blue-600 shadow-xs">
                {user.avatar ? (
                  <img src={user.avatar} className="size-full rounded-full object-cover" alt="" />
                ) : (
                  <span className="text-xs font-bold text-white uppercase rounded-full">{user.username[0]}</span>
                )}
              </div>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  {user.username}
                </p>
                <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                  {user.email}
                </p>
              </div>
            </div>
          )}

          <button
            disabled={saving}
            onClick={handleLogout}
            onDoubleClick={() => null}
            className="hidden md:flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-red-50 hover:text-red-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-red-950/40 dark:hover:text-red-400"
          >
            <LogOut size={14} />
            {saving ? "login out" : "Logout"}
          </button>


        </div>
      </div>
    </header>
  );
}

export default React.memo(Header)