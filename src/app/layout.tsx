import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Karan Gandhi",
  description: "Portfolio of Karan Gandhi",
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
        <SpeedInsights />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
