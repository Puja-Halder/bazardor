"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const categories = [
  { name: "সব", href: "/" },
  { name: "চাল", href: "/category/chal" },
  { name: "ডাল", href: "/category/dal" },
  { name: "সবজি", href: "/category/shobji" },
  { name: "মাছ", href: "/category/mach" },
  { name: "মাংস", href: "/category/mangsho" },
  { name: "ডিম", href: "/category/dim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [banglaDate, setBanglaDate] = useState("");

  useEffect(() => {
    const date = new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    setBanglaDate(date);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="বাজার দর হোম পেজ"
          >
            <img
              src="/images/logo-icon.png"
              alt="বাজার দর লোগো"
              className="h-11 w-11 rounded-xl object-cover"
            />

            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                বাজার দর
              </h1>

              <p className="mt-0.5 min-h-4 text-xs text-gray-500">
                {banglaDate}
              </p>
            </div>
          </Link>

          <nav className="order-3 w-full overflow-x-auto lg:order-2 lg:w-auto">
            <ul className="flex min-w-max items-center gap-1">
              {categories.map((category) => {
                const isActive =
                  category.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(category.href);

                return (
                  <li key={category.href}>
                    <Link
                      href={category.href}
                      className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-green-700 text-white"
                          : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                      }`}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="order-2 flex items-center gap-2 lg:order-3">
            <Link
              href="/signin"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-green-700 hover:text-green-700 sm:px-4"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-800 sm:px-4"
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}