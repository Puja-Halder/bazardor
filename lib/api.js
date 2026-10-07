const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}