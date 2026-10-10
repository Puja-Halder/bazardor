
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children, isAuthenticated }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.info("এই পেজটি দেখতে আগে সাইন ইন করুন।");
      router.replace("/signin");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center px-4">
        <p className="text-sm text-gray-600">
          সাইন ইন পেজে নিয়ে যাওয়া হচ্ছে...
        </p>
      </main>
    );
  }

  return children;
}
