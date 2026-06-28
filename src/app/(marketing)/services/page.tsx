import { constructMetadata } from "@/lib/seo/metadata";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { CTASection } from "@/components/common/cta-section";

export const metadata = constructMetadata({
  title: "Our Services — China Sourcing, Supplier Verification & More",
  description:
    "Explore YES YES ASIAN LINK's full range of China import services: product sourcing, supplier verification, factory visits, import consulting, shipping assistance, and guided business tours.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
