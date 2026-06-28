import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { defaultSEO } from "@/data/seo";
import { PageLoader } from "@/components/common/page-loader";
import { FloatingDock } from "@/components/ui/floating-dock";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* Initial page loader and route changes */}
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {/* Page content — PageTransition is now in the marketing layout */}
        {children}
        <FloatingDock />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
