import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [saving, setIsSaving] = useState(false);

  const onSubmit = async (data) => {
    setIsSaving(true)
    const res = await login(data.email, data.password);
    if (res.success) {
      toast.success(res.message);
      navigate("/dashboard", { replace: true });
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-6 sm:p-10 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <form
        className="w-full max-w-md space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <img
            src="/src/assets/logo.png"
            alt="Store Logo"
            className="mx-auto h-20 rounded-2xl w-auto object-contain drop-shadow-sm"
          />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sign in to your admin dashboard
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
              Email Address
            </label>
            <div className="relative group">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500"
              />
              <input
                type="email"
                placeholder="name@example.com"
                {...register("email", { required: true })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white outline-none transition-all shadow-2xs placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
              Password
            </label>
            <div className="relative group">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-500"
              />
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", { required: true })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white outline-none transition-all shadow-2xs placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/5"
              />

              <button
                type="button"
                onClick={() => setShowPass((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <button
            disabled={saving}
            onDoubleClick={() => null}
            type="submit"
            className="w-full flex justify-center items-center rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] py-3 text-sm font-semibold tracking-wide text-white transition-all shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {saving ? "Signing In" : "Sign In"}
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              OR
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <a
            href="https://e-commerce-api-3wara.vercel.app/auth/google"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Icon"
              className="h-5 w-5"
            />
            Continue with Google
          </a>
        </div>

        <p className="pt-4 text-center text-xs tracking-wider font-semibold text-slate-400 dark:text-slate-500 uppercase flex items-center justify-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Secure Admin Access
        </p>
      </form>
    </div>
  );
}

export default React.memo(LoginForm);
