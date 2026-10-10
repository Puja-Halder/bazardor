
export default function CategoryHeader({ title, icon, description, count }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-3xl">
            {icon || "🛒"}
          </div>

          <div>
            <p className="text-sm font-semibold text-green-700">
              বাজারের পণ্য
            </p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {description}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 px-5 py-3 sm:text-center">
          <p className="text-2xl font-bold text-gray-900">
            {count.toLocaleString("bn-BD")}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            টি পণ্য
          </p>
        </div>
      </div>
    </section>
  );
}
