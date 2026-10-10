
"use client";

import { useMemo, useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown from "@/components/SortDropdown";

export default function SortableProductGrid({ products }) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = useMemo(() => {
    const productList = [...products];

    if (sortOrder === "low") {
      return productList.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    }

    if (sortOrder === "high") {
      return productList.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    return productList;
  }, [products, sortOrder]);

  return (
    <div>
      <div className="mb-6">
        <SortDropdown value={sortOrder} onChange={setSortOrder} />
      </div>

      <ProductGrid products={sortedProducts} />
    </div>
  );
}
