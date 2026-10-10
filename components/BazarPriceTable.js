
function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

function formatPrice(value) {
  return `৳${toBanglaNumber(value)}`;
}

export default function BazarPriceTable({ markets = [], unitBn = "কেজি" }) {
  if (!markets.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-600">
        এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-5 py-4 font-semibold">বাজার</th>
            <th className="px-5 py-4 font-semibold">বিভাগ</th>
            <th className="px-5 py-4 font-semibold">
              সর্বনিম্ন দাম
            </th>
            <th className="px-5 py-4 font-semibold">
              সর্বোচ্চ দাম
            </th>
          </tr>
        </thead>

        <tbody>
          {markets.map((market, index) => (
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
                <span className="ml-1 text-xs text-gray-500">
                  /{unitBn}
                </span>
              </td>

              <td className="px-5 py-4 text-gray-900">
                {formatPrice(market.max)}
                <span className="ml-1 text-xs text-gray-500">
                  /{unitBn}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
