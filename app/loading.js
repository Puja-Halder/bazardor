
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-700" />
        <p className="mt-4 text-gray-700">লোড হচ্ছে...</p>
      </div>
    </main>
  );
}
