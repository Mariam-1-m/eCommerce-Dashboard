import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LogIn, ShieldCheck } from "lucide-react";
import dashboardLogo from "../../assets/dashboard-logo.png";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("mockAuthToken", "mock-dashboard-preview");
    navigate("/dashboard", { replace: true });
  };

  return (
    <main className="grid min-h-screen place-items-center bg-[#020617] px-5 py-10 text-slate-100">
      <section className="w-full max-w-[520px] rounded-[28px] border border-slate-700 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 sm:p-8">
        <div className="flex items-center gap-4">
          <img
            src={dashboardLogo}
            alt="Koda Store"
            className="h-[60px] w-[134px] bg-white object-contain"
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              Mock Login
            </p>
            <h1 className="text-2xl font-extrabold text-white">
              Dashboard Preview
            </h1>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
          <div className="flex items-center gap-3 font-semibold">
            <ShieldCheck size={19} />
            Frontend-only testing mode
          </div>
          <p className="mt-2 text-cyan-100/80">
            Any email and password will open the local dashboard preview.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <label className="block">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="preview@example.com"
              className="mt-3 h-14 w-full rounded-2xl border border-slate-700 bg-[#050a1a] px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Preview password"
              className="mt-3 h-14 w-full rounded-2xl border border-slate-700 bg-[#050a1a] px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
          </label>

          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 text-base font-extrabold text-white transition hover:bg-cyan-400"
          >
            <LogIn size={20} />
            Login to Dashboard
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
