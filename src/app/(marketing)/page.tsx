import { Hero } from "@/components/sections/home/Hero";
import { RFQBanner } from "@/components/sections/home/RFQBanner";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/common/cta-section";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <RFQBanner />
      <Testimonials />
      <CTASection />
    </>
  );
}
