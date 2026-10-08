export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gray-200" />

              <div>
                <div className="h-4 w-28 rounded bg-gray-200" />

                <div className="mt-2 h-3 w-16 rounded bg-gray-200" />
              </div>
            </div>

            <div className="h-6 w-14 rounded-full bg-gray-200" />
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <div className="h-3 w-16 rounded bg-gray-200" />

              <div className="mt-2 h-7 w-20 rounded bg-gray-200" />
            </div>

            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}