
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import { getProductBySlug } from "@/lib/api";

function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

function formatPrice(value) {
  return `৳${toBanglaNumber(value)}`;
}

function ProductLoading() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">
      <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />

      <div className="mt-6 h-56 animate-pulse rounded-3xl bg-gray-200" />

      <div className="mt-10 h-8 w-48 animate-pulse rounded bg-gray-200" />

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-2xl bg-gray-200"
          />
        ))}
      </div>
    </main>
  );
}

async function ProductDetailContent({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isUp = product.changeDirection === "up";
  const isDown = product.changeDirection === "down";

  const priceHistory = [
    { label: "আজকের দাম", price: product.today },
    { label: "গতকালের দাম", price: product.yesterday },
    { label: "গত সপ্তাহের দাম", price: product.lastWeek },
    { label: "গত মাসের দাম", price: product.lastMonth },
  ];

  const marketPrices = Array.isArray(product.markets)
    ? product.markets
    : [];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm font-medium text-green-700 hover:text-green-800"
      >
        ← হোম পেজে ফিরে যান
      </Link>

      <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-5xl">
            {product.emoji || product.categoryIcon || "🛒"}
          </div>

          <div className="flex-1">
            <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
              {product.categoryNameBn || "অন্যান্য"}
            </span>

            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-600">
              প্রতি {product.unitBn}
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-sm text-gray-500">আজকের দাম</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {formatPrice(product.today)}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  isUp
                    ? "bg-red-50 text-red-600"
                    : isDown
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {isUp
                  ? `▲ ${toBanglaNumber(Math.abs(product.change))}%`
                  : isDown
                    ? `▼ ${toBanglaNumber(Math.abs(product.change))}%`
                    : "অপরিবর্তিত"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          দামের ইতিহাস
        </h2>

        <p className="mt-2 text-gray-600">
          বিভিন্ন সময়ের সঙ্গে এই পণ্যের দামের তুলনা করুন।
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priceHistory.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <p className="text-sm text-gray-500">{item.label}</p>

              <p className="mt-3 text-2xl font-bold text-gray-900">
                {formatPrice(item.price)}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                প্রতি {product.unitBn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          বিভিন্ন বাজারের দাম
        </h2>

        <p className="mt-2 text-gray-600">
          API-তে পাওয়া বাজারভিত্তিক সর্বনিম্ন ও সর্বোচ্চ দাম।
        </p>

        {marketPrices.length > 0 ? (
          <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-5 py-4 font-semibold">বাজার</th>
                  <th className="px-5 py-4 font-semibold">বিভাগ</th>
                  <th className="px-5 py-4 font-semibold">সর্বনিম্ন দাম</th>
                  <th className="px-5 py-4 font-semibold">সর্বোচ্চ দাম</th>
                </tr>
              </thead>

              <tbody>
                {marketPrices.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-t border-gray-100"
                  >
                    <td className="px-5 py-4 font-medium text-gray-900">
                      {market.market}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {market.division}
                    </td>

                    <td className="px-5 py-4 text-gray-900">
                      {formatPrice(market.min)}
                    </td>

                    <td className="px-5 py-4 text-gray-900">
                      {formatPrice(market.max)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 text-gray-600">
            এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
          </div>
        )}
      </section>
    </main>
  );
}

export default function ProductDetailPage({ params }) {
  return (
    <>
      <Navbar />
      <PriceTicker />

      <Suspense fallback={<ProductLoading />}>
        <ProductDetailContent params={params} />
      </Suspense>
    </>
  );
}
