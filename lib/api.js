
const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

const unitLabels = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
};

const categoryAliases = {
  chal: ["চাল", "rice", "rices"],
  dal: ["ডাল", "lentil", "lentils", "pulse", "pulses"],
  shobji: ["সবজি", "vegetable", "vegetables", "veggie", "veggies"],
  mach: ["মাছ", "fish", "fishes"],
  mangsho: ["মাংস", "meat"],
  dim: ["ডিম", "egg", "eggs"],
};

function normalizeProduct(product) {
  return {
    ...product,
    name: product.nameBn,
    emoji: product.image,
    price: product.today,
    change: Number(product.change?.pct || 0),
    changeDirection: product.change?.dir || "same",
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

  return [];
}

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return extractProducts(data).map(normalizeProduct);
}

export async function getProductsByCategory(category) {
  const products = await getProducts();
  const aliases = categoryAliases[category];

  if (!aliases) {
    return [];
  }

  const acceptedValues = aliases.map((value) =>
    value.toLowerCase().trim()
  );

  return products.filter((product) => {
    const categoryValue = String(product.category || "")
      .toLowerCase()
      .trim();

    const categoryName = String(product.categoryNameBn || "")
      .toLowerCase()
      .trim();

    return (
      acceptedValues.includes(categoryValue) ||
      acceptedValues.includes(categoryName)
    );
  });
}

export async function getProductBySlug(slug) {
  const products = await getProducts();

  const product = products.find(
    (item) => item.slug === slug || String(item.id) === slug
  );

  return product || null;
}
