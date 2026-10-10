
export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="h-8 w-36 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="animate-pulse">
          <div className="h-4 w-48 rounded bg-gray-200" />
          <div className="mt-5 h-10 max-w-md rounded bg-gray-200 sm:h-12" />
          <div className="mt-3 h-10 max-w-sm rounded bg-gray-200 sm:h-12" />
          <div className="mt-5 h-4 max-w-lg rounded bg-gray-200" />
          <div className="mt-3 h-4 max-w-md rounded bg-gray-200" />
          <div className="mt-8 h-12 w-48 rounded-xl bg-gray-200" />
        </div>

        <div className="mt-10 h-56 animate-pulse rounded-3xl bg-gray-200 sm:h-72" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 h-8 w-56 animate-pulse rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5"
            >
              <div className="h-12 w-12 rounded-xl bg-gray-200" />
              <div className="mt-4 h-4 w-32 rounded bg-gray-200" />
              <div className="mt-3 h-3 w-20 rounded bg-gray-200" />
              <div className="mt-6 h-7 w-24 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
