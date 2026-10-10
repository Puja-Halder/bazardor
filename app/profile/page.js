
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/signin");
    }
  }, [isPending, session, router]);

  if (isPending || !session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <p className="text-sm text-gray-600">প্রোফাইল লোড হচ্ছে...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/" className="text-sm font-medium text-green-700 hover:text-green-800">
          ← হোম পেজে ফিরে যান
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
            <p className="mt-1 text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য</p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">নাম</p>
            <p className="mt-2 font-semibold text-gray-900">{session.user.name || "নাম দেওয়া হয়নি"}</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500">ইমেইল</p>
            <p className="mt-2 break-all font-semibold text-gray-900">{session.user.email}</p>
          </div>

          <Link
            href="/profile/update"
            className="inline-flex rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            প্রোফাইল আপডেট করুন
          </Link>
        </div>
      </section>
    </main>
  );
}
