import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <PriceTicker />

      <main>
        <Hero />

        <section
          id="সব-পণ্য"
          className="mx-auto max-w-6xl px-4 py-20"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              BazarDor
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              সব পণ্য
            </h2>

            <p className="mt-3 text-gray-600">
              শীঘ্রই এখানে সব পণ্যের আজকের দাম দেখা যাবে।
            </p>
          </div>
        </section>
      </main>
    </>
  );
}