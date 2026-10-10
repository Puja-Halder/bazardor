"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { name: "চাল", href: "/category/chal" },
  { name: "ডাল", href: "/category/dal" },
  { name: "সবজি", href: "/category/shobji" },
  { name: "মাছ", href: "/category/mach" },
  { name: "মাংস", href: "/category/mangsho" },
  { name: "ডিম", href: "/category/dim" },
];

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-2xl">
              🛒
            </span>
            <span className="text-xl font-bold text-gray-900">
              বাজার দর
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
            নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক জায়গায় দেখুন।
            সহজেই জানুন কোন পণ্যের দাম বাড়ছে বা কমছে।
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900">
            পণ্যের বিভাগ
          </h2>

          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {categories.map((category) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="text-sm text-gray-600 transition hover:text-green-700"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900">
            বাজার সম্পর্কে
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            আমাদের লক্ষ্য হলো প্রয়োজনীয় পণ্যের দাম সহজে খুঁজে
            পাওয়ার একটি সুবিধাজনক অভিজ্ঞতা তৈরি করা।
          </p>

          <a
            href="/#সব-পণ্য"
            className="mt-3 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
          >
            সব পণ্য দেখুন →
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} বাজার দর (BazarDor)</p>
          <p>সবার জন্য সহজ বাজারদর</p>
        </div>
      </div>
    </footer>
  );
}