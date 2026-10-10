
"use client";

import Link from "next/link";
import { toast } from "react-toastify";

export default function SignUpPage() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      toast.error("সবগুলো ঘর পূরণ করুন।");
      return;
    }

    if (String(password).length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    toast.info("অ্যাকাউন্ট তৈরি করার সুবিধাটি এখনো সংযুক্ত করা হয়নি।");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <section className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/" className="flex items-center justify-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
            🛒
          </span>
          <span className="text-2xl font-bold text-gray-900">
            বাজার দর
          </span>
        </Link>

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            বাজারদর দেখতে আপনার অ্যাকাউন্ট তৈরি করুন।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              আপনার নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="আপনার নাম লিখুন"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              ইমেইল ঠিকানা
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="আপনার ইমেইল লিখুন"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              placeholder="কমপক্ষে ৮ অক্ষর লিখুন"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-semibold text-green-700 hover:text-green-800">
            সাইন ইন করুন
          </Link>
        </p>

        <Link href="/" className="mt-5 block text-center text-sm text-gray-500 hover:text-green-700">
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}
