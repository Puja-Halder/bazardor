const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

const unitLabels = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
};

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  const products = Array.isArray(data)
    ? data
    : Array.isArray(data.products)
      ? data.products
      : Array.isArray(data.data)
        ? data.data
        : [];

  return products.map((product) => ({
    ...product,
    name: product.nameBn,
    emoji: product.image,
    price: product.today,
    change: Number(product.change?.pct || 0),
    changeDirection: product.change?.dir || "same",
    unitBn: unitLabels[product.unit] || product.unit,
  }));
}