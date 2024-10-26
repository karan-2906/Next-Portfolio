import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Karan Gandhi",
  description: "Portfolio For Karan Gandhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
