import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Home,
  LogOut,
} from "lucide-react";
import dashboardLogo from "../assets/dashboard-logo.png";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: Home },
];

function AppLayout() {
  const navigate = useNavigate();
  const displayName = "Admin Account";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("mockAuthToken");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 lg:pl-[360px]">
      <aside className="border-b border-slate-800 bg-[#040817] p-6 lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:w-[360px] lg:flex-col lg:border-b-0 lg:border-r lg:p-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.55em] text-cyan-300">
            Commerce
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-100">
            Admin Panel
          </h2>
        </div>

        <nav className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
                className={({ isActive }) =>
                  `flex min-w-fit items-center gap-4 rounded-[20px] px-5 py-4 text-base font-bold transition duration-200 lg:text-lg ${
                    isActive
                      ? "bg-slate-800 text-white shadow-lg shadow-black/20"
                      : "text-slate-100 hover:bg-slate-900 hover:text-cyan-200"
                  }`
                }
              >
                <Icon size={21} strokeWidth={2.1} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-8 rounded-[28px] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-5 text-white shadow-2xl shadow-sky-950/40 lg:mt-auto">
          <p className="text-sm font-medium uppercase tracking-[0.35em]">
            Live
          </p>
          <p className="mt-3 text-lg font-bold leading-8">
            Dashboard preview mode
          </p>
        </div>
      </aside>

      <div className="min-h-screen">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#050917]/95 backdrop-blur">
          <div className="flex flex-col gap-5 px-6 py-5 sm:px-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={dashboardLogo}
                alt="Koda Store"
                className="h-[60px] w-[134px] bg-white object-contain"
              />
              <div>
                <p className="text-2xl font-extrabold text-white">
                  Koda Dashboard
                </p>
                <p className="text-sm font-medium text-slate-400">
                  E-Commerce Admin Panel
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex min-w-[220px] items-center gap-4 rounded-[20px] border border-slate-700 bg-slate-900 px-4 py-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sky-500 text-lg font-extrabold text-white">
                  AA
                </div>
                <div className="min-w-0">
                  <p className="truncate text-lg font-bold text-white">
                    {displayName}
                  </p>
                  <p className="text-sm font-medium text-slate-300">Admin</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="flex h-14 items-center gap-3 rounded-2xl bg-red-500 px-6 text-base font-bold text-white transition hover:bg-red-400"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1520px] px-6 py-10 sm:px-8 lg:py-12">
          <Outlet />
        </main>

        <footer className="sr-only">Footer</footer>
      </div>
    </div>
  );
}

export default AppLayout;
