import { constructMetadata } from "@/lib/seo/metadata";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { HowItWorksSection } from "@/components/sections/how-it-works/HowItWorksSection";
import { AboutTrust } from "@/components/sections/about/AboutTrust";
import { CTASection } from "@/components/common/cta-section";

export const metadata = constructMetadata({
  title: "About Us — Your Trusted China Import & Sourcing Partner",
  description:
    "Learn about YES YES ASIAN LINK — your trusted China import and sourcing consultancy with 10+ years on the ground in Guangzhou. 500+ verified factories, $50M+ sourced value.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <HowItWorksSection />
      <AboutTrust />
      <CTASection />
    </>
  );
}
