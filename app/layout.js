
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "বাজার দর | BazarDor",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
