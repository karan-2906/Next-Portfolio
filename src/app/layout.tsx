import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Karan Gandhi",
  description: "Portfolio, Karan Gandhi, Portfolio Website, Karan Gandhi Portfolio, Karan2906, Karan Bhavesh Gandhi",
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
