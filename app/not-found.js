
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <section className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-4xl">
          🛒
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-green-700">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-4 leading-7 text-gray-600">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          হোম পেজে ফিরে গিয়ে বাজারদর দেখুন।
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </section>
    </main>
  );
}
