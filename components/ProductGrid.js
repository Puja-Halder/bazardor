import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">
        <p className="text-lg font-semibold text-gray-800">
          কোনো পণ্য পাওয়া যায়নি
        </p>

        <p className="mt-2 text-sm text-gray-500">
          এই মুহূর্তে প্রদর্শন করার মতো কোনো পণ্য নেই।
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}