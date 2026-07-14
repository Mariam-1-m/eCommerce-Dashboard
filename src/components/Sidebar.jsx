
import {
  FileText,
  House,
  Package,
  Plus,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/users", label: "Users", icon: Users },
  { href: "/products", label: "Products", icon: Package },
  { href: "/products/add", label: "Add Product", icon: Plus },
  { href: "/orders", label: "Orders", icon: FileText },
  { href: "/carts", label: "Carts", icon: ShoppingCart },
  { href: "/settings", label: "Settings", icon: Settings },
];

function Sidebar() {
  const { isSidebarOpen } = useSidebar();
  const location = useLocation();

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-40 lg:static lg:block transition-all duration-300
        ${isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white/90 p-5 text-slate-900 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-100">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-500 dark:text-cyan-400">
              Commerce
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              Admin Panel
            </h2>
          </div>
        </div>

        <nav className="space-y-1 hierarchy-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Logic: highlight if current path starts with the href (excluding root "/")
            const isActive = item.href === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors 
                  ${isActive 
                    ? "bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400" 
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/80"}`}
              >
                <Icon size={18} className="opacity-80" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl bg-linear-to-br from-cyan-400 via-sky-500 to-indigo-600 p-4 text-white shadow-lg shadow-cyan-500/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
              Live
            </p>
          </div>
          <p className="mt-2 text-sm font-medium leading-snug">
            Connected to the E-commerce API
          </p>
        </div>
      </aside>
    </div>
  );
}

export default React.memo(Sidebar);