
import Link from "next/link";

export default function SignInPage() {
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
            আবার ফিরে আসুন
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            আপনার অ্যাকাউন্টে সাইন ইন করুন।
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            সাইন ইন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            সাইন আপ করুন
          </Link>
        </p>

        <Link
          href="/"
          className="mt-5 block text-center text-sm text-gray-500 hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}
