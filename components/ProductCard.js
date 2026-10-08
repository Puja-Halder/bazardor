import Link from "next/link";

function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

export default function ProductCard({ product }) {
  const change = Number(product.change);
  const isUp = change > 0;
  const isDown = change < 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
            {product.emoji}
          </div>

          <div>
            <h3 className="font-bold text-gray-900 transition group-hover:text-green-700">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              প্রতি {product.unitBn}
            </p>
          </div>
        </div>

        {isUp && (
          <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
            ▲ {toBanglaNumber(Math.abs(change))}%
          </span>
        )}

        {isDown && (
          <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
            ▼ {toBanglaNumber(Math.abs(change))}%
          </span>
        )}

        {!isUp && !isDown && (
          <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
            অপরিবর্তিত
          </span>
        )}
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            ৳{toBanglaNumber(product.price)}
          </p>
        </div>

        <span className="text-sm font-medium text-green-700">
          বিস্তারিত →
        </span>
      </div>
    </Link>
  );
}