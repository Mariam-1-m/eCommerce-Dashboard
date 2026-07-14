// Only abdelrahman can edit this file

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { User,  UserPlus, Plus, Mail, Lock, Phone, X, Eye, EyeOff } from "lucide-react";

function CreateUser({ onClose }) {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [saving, setSaving] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSaving(true);

      console.log(data);

      toast.success("User created successfully");

      reset({
  username: "",
  email: "",
  password: "",
  phone: "",
});

onClose?.();

    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 p-4">
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl rounded-3xl border border-[var(--border-main)] bg-[var(--background)] shadow-2xl"
      >
            
                  <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                          <UserPlus className="text-blue-600 dark:text-blue-400" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold text-[var(--text-primary)] ">
                            Create New User
                          </h2>

                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Fill in the details below to add a new user.
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onClose?.()}
                        className="rounded-xl p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                      >
                        <X size={22} />
                      </button>
                    </div>

                    <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Username */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                          Username <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="text"
                            autoComplete="off"
                            placeholder="Enter username"
                            {...register("username", {
                              required: "Username is required",
                            })}
                            className="w-full rounded-xl border  py-3 pl-11 pr-4 bg-[var(--background)] text-[var(--text-primary)] border-[var(--border-main)] placeholder:text-slate-400 transition-all focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>

                        {errors.username && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.username.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                          Email <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="email"
                            autoComplete="off"
                            placeholder="Enter email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                              },
                            })}
                            className="w-full rounded-xl border  py-3 pl-11 pr-4 bg-[var(--background)] text-[var(--text-primary)] border-[var(--border-main)] placeholder:text-slate-400 transition-all focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                          
                        </div>

                        {errors.email && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Password */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                          Password <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                          <Lock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type={showPass ? "text" : "password"}
                            autoComplete="off"
                            placeholder="Enter password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                              },
                            })}
                            className="w-full rounded-xl border  py-3 pl-11 pr-4 bg-[var(--background)] text-[var(--text-primary)] border-[var(--border-main)] placeholder:text-slate-400 transition-all focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                            <button
                              type="button"
                              onClick={() => setShowPass((prev) => !prev)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                            >
                              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>

                        {errors.password && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
                          Phone
                        </label>

                        <div className="relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="text"
                            placeholder="Enter phone number"
                            {...register("phone")}
                            autoComplete="off"
                            className="w-full rounded-xl border  py-3 pl-11 pr-4 bg-[var(--background)] text-[var(--text-primary)] border-[var(--border-main)] placeholder:text-slate-400 transition-all focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                    <div className="flex items-center justify-end gap-4 border-t border-[var(--border-main)] px-6 py-5">

                              <button
                                type="button"
                                onClick={() =>
                                reset({
                                  username: "",
                                  email: "",
                                  password: "",
                                  phone: "",
                                })
                                }
                                disabled={saving}
                                className="rounded-xl border bg-[var(--background)] border-[var(--border-main)] text-[var(--text-primary)] px-6 py-3 text-sm font-semibold  transition-all hover:bg-slate-100 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                Clear
                              </button>

                              <button
                                  type="submit"
                                  disabled={saving}
                                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                                >
                                  <Plus size={18} />

                                  {saving ? "Creating..." : "Create User"}
                              </button>

                        </div>

      </form>

      </div>
    
  )
}

export default CreateUser
