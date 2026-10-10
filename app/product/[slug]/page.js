
"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import Navbar from "@/components/Navbar";
import ProductSummary from "@/components/ProductSummary";
import BazarPriceTable from "@/components/BazarPriceTable";
import { getProductBySlug } from "@/lib/api";

function toBanglaNumber(value) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return String(value).replace(/\d/g, (digit) => banglaDigits[digit]);
}

function formatPrice(value) {
  return `৳${toBanglaNumber(value)}`;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const { data: session, isPending } = authClient.useSession();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session?.user) {
      toast.info("পণ্যের বিস্তারিত দেখতে আগে সাইন ইন করুন।");
      router.replace("/signin");
    }
  }, [isPending, session, router]);

  useEffect(() => {
    if (isPending || !session?.user || !slug) {
      return;
    }

    let isActive = true;

    async function loadProduct() {
      setIsLoading(true);

      try {
        const result = await getProductBySlug(String(slug));

        if (isActive) {
          setProduct(result);
        }
      } catch {
        if (isActive) {
          setProduct(null);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      isActive = false;
    };
  }, [slug, session, isPending]);

  if (isPending || !session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <p className="text-sm text-gray-600">সাইন ইন যাচাই করা হচ্ছে...</p>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      {isLoading ? (
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">
          <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-6 h-56 animate-pulse rounded-3xl bg-gray-200" />
          <div className="mt-10 h-8 w-48 animate-pulse rounded bg-gray-200" />
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-28 animate-pulse rounded-2xl bg-gray-200"
              />
            ))}
          </div>
        </main>
      ) : !product ? (
        <main className="mx-auto min-h-[60vh] max-w-6xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            পণ্যটি পাওয়া যায়নি
          </h1>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </main>
      ) : (
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:py-14">
          <Link
            href="/"
            className="text-sm font-medium text-green-700 hover:text-green-800"
          >
            ← হোম পেজে ফিরে যান
          </Link>

          <div className="mt-6">
            <ProductSummary product={product} />
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              দামের ইতিহাস
            </h2>
            <p className="mt-2 text-gray-600">
              বিভিন্ন সময়ের সঙ্গে এই পণ্যের দামের তুলনা করুন।
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "আজকের দাম", price: product.today },
                { label: "গতকালের দাম", price: product.yesterday },
                { label: "গত সপ্তাহের দাম", price: product.lastWeek },
                { label: "গত মাসের দাম", price: product.lastMonth },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-bold text-gray-900">
                    {formatPrice(item.price)}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    প্রতি {product.unitBn}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              বিভিন্ন বাজারের দাম
            </h2>
            <p className="mt-2 text-gray-600">
              বিভিন্ন বাজারের সর্বনিম্ন ও সর্বোচ্চ দাম দেখুন।
            </p>

            <div className="mt-5">
              <BazarPriceTable
                markets={Array.isArray(product.markets) ? product.markets : []}
                unitBn={product.unitBn}
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
