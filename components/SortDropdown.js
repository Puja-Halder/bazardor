
"use client";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
      <label
        htmlFor="product-sort"
        className="text-sm font-medium text-gray-700"
      >
        দাম অনুযায়ী সাজান
      </label>

      <select
        id="product-sort"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100 sm:w-52"
      >
        <option value="default">ডিফল্ট</option>
        <option value="low">কম দাম আগে</option>
        <option value="high">বেশি দাম আগে</option>
      </select>
    </div>
  );
}
