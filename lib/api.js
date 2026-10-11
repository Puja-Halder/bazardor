const BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

const unitLabels = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
};

const categoryAliases = {
  chal: ["chal"],
  dal: ["dal"],
  shobji: ["sobji", "shobji"],
  mach: ["mach"],
  mangsho: ["mangsho"],
  dim: ["dim-dui", "dim"],
  tel: ["tel"],
  mosla: ["mosla"],
};

function normalizeProduct(product) {
  return {
    ...product,
    name: product.nameBn,
    emoji: product.image || product.categoryIcon || "🛒",
    price: product.today,
    change: Number(product.change?.pct || 0),
    changeDirection: product.change?.dir || "flat",
    unitBn: unitLabels[product.unit] || product.unit,
  };
}

function extractProducts(data) {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data.products)) {
    return data.products;
  }

  if (Array.isArray(data.data)) {
    return data.data;
  }

  if (Array.isArray(data.data?.products)) {
    return data.data.products;
  }

  return [];
}

async function fetchJson(url) {
  const response = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getProducts() {
  const data = await fetchJson(`${BASE_URL}/products`);
  const products = extractProducts(data);

  console.log("Products found:", products.length);

  return products.map(normalizeProduct);
}

export async function getProductsByCategory(category) {
  const aliases = categoryAliases[category];

  if (!aliases) {
    return [];
  }

  const products = await getProducts();

  return products.filter((product) =>
    aliases.includes(String(product.category || "").toLowerCase())
  );
}

export async function getProductBySlug(slug) {
  const products = await getProducts();

  return (
    products.find(
      (product) =>
        product.slug === slug || String(product.id) === String(slug)
    ) || null
  );
}