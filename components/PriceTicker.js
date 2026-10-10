
import { getProducts } from "@/lib/api";

function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

export default async function PriceTicker() {
  let products = [];

  try {
    products = await getProducts();
  } catch {
    return null;
  }

  if (!products.length) {
    return null;
  }

  const tickerItems = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-gray-200 bg-gray-50">
      <div className="ticker-track flex w-max">
        {tickerItems.map((product, index) => {
          const isUp = product.changeDirection === "up";
          const isDown = product.changeDirection === "down";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex shrink-0 items-center gap-3 border-r border-gray-200 px-5 py-3 text-sm"
            >
              <span className="text-lg">{product.emoji}</span>
              <span className="font-semibold text-gray-800">{product.name}</span>
              <span className="font-bold text-gray-900">
                ৳{toBanglaNumber(product.price)}
              </span>
              <span className="text-gray-500">/ {product.unitBn}</span>

              {isUp && (
                <span className="font-semibold text-red-600">
                  ▲ {toBanglaNumber(Math.abs(product.change))}%
                </span>
              )}

              {isDown && (
                <span className="font-semibold text-green-600">
                  ▼ {toBanglaNumber(Math.abs(product.change))}%
                </span>
              )}

              {!isUp && !isDown && (
                <span className="font-semibold text-gray-500">
                  অপরিবর্তিত
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
