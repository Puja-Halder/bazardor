
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/api";

export default async function Home() {
  let products = [];

  try {
    products = await getProducts();
  } catch {
    products = [];
  }

  const risingProducts = [...products]
    .filter((product) => product.changeDirection === "up")
    .sort((a, b) => Number(b.change) - Number(a.change))
    .slice(0, 6);

  const fallingProducts = [...products]
    .filter((product) => product.changeDirection === "down")
    .sort((a, b) => Number(a.change) - Number(b.change))
    .slice(0, 6);

  return (
    <>
      <Navbar />
      <PriceTicker />

      <main>
        <Hero />

        <ProductSection
          title="আজ দাম বেড়েছে"
          subtitle="আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে।"
          products={risingProducts}
          type="rising"
        />

        <ProductSection
          title="আজ দাম কমেছে"
          subtitle="আজ যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে।"
          products={fallingProducts}
          type="falling"
        />

        <section
          id="সব-পণ্য"
          className="mx-auto max-w-6xl px-4 py-16 sm:py-20"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              বাজারের সব পণ্য
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              সব পণ্য
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              বিভিন্ন প্রয়োজনীয় পণ্যের আজকের বাজারদর একসাথে দেখুন।
            </p>
          </div>

          <ProductGrid products={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}
