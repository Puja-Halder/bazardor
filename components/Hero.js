import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            প্রতিদিনের বাজারের আপডেট
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            আজকের বাজার দর
            <span className="block text-green-700">
              এক নজরে দেখুন
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            চাল, ডাল, সবজি, মাছ, মাংসসহ প্রয়োজনীয় পণ্যের
            আজকের দাম সহজেই দেখুন এবং বাজার সম্পর্কে আপডেট থাকুন।
          </p>

          <div className="mt-8">
            <Link
              href="#সব-পণ্য"
              className="inline-flex items-center rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              সব পণ্যের দাম দেখুন
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-green-50">
            <Image
              src="/images/bazar-hero.png"
              alt="বাজারের পণ্যের ছবি"
              width={700}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}