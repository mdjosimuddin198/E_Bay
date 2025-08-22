// app/auth/login/page.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowRight,
} from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    alert("sorry not working");
    // try {
    //   await signIn("credentials", {
    //     redirect: true,
    //     email,
    //     password,
    //     callbackUrl: "/products",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Grid shimmer */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(255,255,255,.05)_95%),linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(255,255,255,.05)_95%)] bg-[size:32px_32px]"
      />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="flex flex-col items-center gap-3 px-8 pt-8 text-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-[2px]">
                  <div className="h-full w-full rounded-[14px] bg-slate-950/90 grid place-items-center">
                    <span className="text-lg font-black tracking-widest">
                      W.S
                    </span>
                  </div>
                </div>
                <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 animate-ping rounded-full bg-fuchsia-500 opacity-60" />
                <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 rounded-full bg-fuchsia-400" />
              </div>
              <h1 className="text-2xl font-semibold sm:text-3xl">Login</h1>
              <p className="mb-2 max-w-xs text-sm text-slate-300">
                Sign in to your account to access the dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 px-8 pb-8">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-slate-200"
                >
                  Email Address
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none ring-0 transition focus:border-fuchsia-400/40 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px] focus:shadow-fuchsia-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-slate-200"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs text-slate-300 underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                    <Lock className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-cyan-400/40 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px] focus:shadow-cyan-500/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 hover:bg-white/5"
                  >
                    {showPass ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Terms */}
              <div className="flex items-center justify-between gap-3">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-fuchsia-500 focus:ring-0"
                  />
                  Remember me
                </label>
                <span className="text-xs text-slate-400">
                  By logging in, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-4">
                    Terms
                  </Link>
                  .
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:brightness-110 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                {loading ? (
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    Login
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative py-3 text-center">
                <span className="relative z-10 bg-slate-950 px-3 text-xs text-slate-400">
                  Or
                </span>
                <div className="absolute left-0 right-0 top-1/2 -z-0 h-px -translate-y-1/2 bg-white/10" />
              </div>

              {/* Social Auth */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  <Chrome className="h-4 w-4" />
                  Sign in with Google
                </button>
                <button
                  type="button"
                  onClick={() => signIn("github")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Sign in with GitHub
                </button>
              </div>

              {/* Footer */}
              <p className="pt-2 text-center text-sm text-slate-300">
                New user?{" "}
                <Link
                  href="#"
                  className="font-medium text-white underline underline-offset-4"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>

          {/* Small tips */}
          <div className="mt-6 space-y-2 text-center text-xs text-slate-400">
            <p>
              Tip: Connect the form handler to your API or NextAuth{" "}
              <code>signIn()</code> function.
            </p>
            <p>
              This component is dark-theme friendly; enabling{" "}
              <code>darkMode</code> in Tailwind config improves visuals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
