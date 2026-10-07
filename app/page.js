import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";

export default function Home() {
  return (
    <>
      <Navbar />

      <PriceTicker />

      <main className="min-h-screen">
        <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 py-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
              BazarDor
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              বাজার দর
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>
        </section>
      </main>
    </>
  );
}