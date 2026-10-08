import ProductCard from "@/components/ProductCard";

export default function ProductSection({
  title,
  subtitle,
  products,
  type,
}) {
  const isRising = type === "rising";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="mb-7">
        <div className="flex items-center gap-2">
          <span
            className={`text-xl font-bold ${
              isRising ? "text-red-600" : "text-green-600"
            }`}
          >
            {isRising ? "▲" : "▼"}
          </span>

          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          {subtitle}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center">
          <p className="font-medium text-gray-700">
            এই মুহূর্তে কোনো তথ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </section>
  );
}