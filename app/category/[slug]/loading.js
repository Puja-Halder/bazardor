
import ProductSkeleton from "@/components/ProductSkeleton";

export default function CategoryLoading() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:py-12">
      <div className="animate-pulse rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gray-200" />
          <div className="flex-1">
            <div className="h-4 w-28 rounded bg-gray-200" />
            <div className="mt-3 h-8 w-40 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-64 max-w-full rounded bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="mb-6 mt-10">
        <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
        <div className="mt-3 h-4 w-64 max-w-full animate-pulse rounded bg-gray-200" />
      </div>

      <ProductSkeleton />
    </main>
  );
}
