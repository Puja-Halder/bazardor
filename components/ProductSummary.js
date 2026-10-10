
function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

export default function ProductSummary({ product }) {
  const change = Number(product.change);
  const isUp = product.changeDirection === "up";
  const isDown = product.changeDirection === "down";

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl">
          {product.emoji || product.categoryIcon || "🛒"}
        </div>

        <div className="flex-1">
          <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            {product.categoryNameBn || "অন্যান্য"}
          </span>

          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            প্রতি {product.unitBn}
          </p>

          <div className="mt-5 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-sm text-gray-500">আজকের দাম</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">
                ৳{toBanglaNumber(product.price)}
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
                ? `▲ ${toBanglaNumber(Math.abs(change))}%`
                : isDown
                  ? `▼ ${toBanglaNumber(Math.abs(change))}%`
                  : "অপরিবর্তিত"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
