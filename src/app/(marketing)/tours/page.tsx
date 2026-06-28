import { constructMetadata } from "@/lib/seo/metadata";
import { ToursHero } from "@/components/sections/tours/ToursHero";
import { ToursBenefits } from "@/components/sections/tours/ToursBenefits";
import { ToursGrid } from "@/components/sections/tours/ToursGrid";
import { ToursExperience } from "@/components/sections/tours/ToursExperience";
import { ToursGalleryCTA } from "@/components/sections/tours/ToursGalleryCTA";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { toursFaqData, TOURS_FAQ_HEADER } from "@/data/faq";

export const metadata = constructMetadata({
  title: "China Business Tours — Canton Fair, Yiwu & Shenzhen Guided Tours",
  description:
    "Join YES YES ASIAN LINK's exclusive guided business tours to Canton Fair, Guangzhou wholesale markets, Yiwu, and Shenzhen electronics hub. Visa, accommodation, translation, and negotiation included.",
  path: "/tours",
});

export default function Tours() {
  return (
    <>
      <ToursHero />
      <ToursBenefits />
      <ToursGrid />
      <ToursExperience />
      <ToursGalleryCTA />
      <FAQSection
        items={toursFaqData}
        eyebrow={TOURS_FAQ_HEADER.eyebrow}
        heading={TOURS_FAQ_HEADER.heading}
        description={TOURS_FAQ_HEADER.description}
      />
    </>
  );
}
