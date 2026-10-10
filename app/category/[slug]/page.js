
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import CategoryHeader from "@/components/CategoryHeader";
import SortableProductGrid from "@/components/SortableProductGrid";
import ProductSkeleton from "@/components/ProductSkeleton";
import { getProductsByCategory } from "@/lib/api";

const categories = {
  chal: {
    title: "চাল",
    icon: "🍚",
    description: "বিভিন্ন ধরনের চালের আজকের বাজারদর দেখুন।",
  },
  dal: {
    title: "ডাল",
    icon: "🫘",
    description: "বিভিন্ন ধরনের ডালের আজকের বাজারদর দেখুন।",
  },
  shobji: {
    title: "সবজি",
    icon: "🥦",
    description: "প্রয়োজনীয় সবজির আজকের বাজারদর দেখুন।",
  },
  mach: {
    title: "মাছ",
    icon: "🐟",
    description: "বিভিন্ন ধরনের মাছের আজকের বাজারদর দেখুন।",
  },
  mangsho: {
    title: "মাংস",
    icon: "🍗",
    description: "মাংসের আজকের বাজারদর দেখুন।",
  },
  dim: {
    title: "ডিম",
    icon: "🥚",
    description: "ডিমের আজকের বাজারদর দেখুন।",
  },
};

async function CategoryPageContent({ params }) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    notFound();
  }

  let products = [];

  try {
    products = await getProductsByCategory(slug);
  } catch {
    products = [];
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:py-12">
      <CategoryHeader
        title={category.title}
        icon={category.icon}
        description={category.description}
        count={products.length}
      />

      <section className="mt-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {category.title}র সব পণ্য
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            দাম অনুযায়ী সাজিয়ে আপনার প্রয়োজনীয় পণ্যটি খুঁজুন।
          </p>
        </div>

        <SortableProductGrid products={products} />
      </section>
    </main>
  );
}

export default function CategoryPage({ params }) {
  return (
    <>
      <Navbar />
      <PriceTicker />

      <Suspense
        fallback={
          <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">
            <div className="mb-8 h-36 animate-pulse rounded-3xl bg-gray-200" />
            <ProductSkeleton />
          </main>
        }
      >
        <CategoryPageContent params={params} />
      </Suspense>
    </>
  );
}
