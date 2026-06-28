import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
