import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Karan Gandhi",
  description: "This is the portfolio website build by Karan Gandhi",
  keywords: "Portfolio, Karan Gandhi, Portfolio Website, Karan Gandhi Portfolio, Karan2906, Karan Bhavesh Gandhi, Karan Gandhi Portfolio Website, Karan, Gandhi, Karan2906 Portfolio, Karan Bhavesh Gandhi Portfolio, website, web development, web developer, front-end developer, front-end, developer, react developer, react, reactjs, nextjs, next.js, tailwindcss, tailwind css, tailwind, javascript, typescript, nodejs, node.js, express, expressjs, express.js, mongodb, back-end developer, back-end"
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
