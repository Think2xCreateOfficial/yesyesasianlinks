import { constructMetadata } from "@/lib/seo/metadata";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { contactFaqData, CONTACT_FAQ_HEADER } from "@/data/faq";

export const metadata = constructMetadata({
  title: "Contact Us — Get in Touch with YES YES ASIAN LINK",
  description:
    "Contact YES YES ASIAN LINK via WhatsApp, phone, or email for China product sourcing, supplier verification, factory visits, and business tour enquiries.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Form + Info side by side */}
      <section className="py-12 bg-[var(--color-surface)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-8 xl:gap-12 items-start">
            {/* Form — takes most of the width */}
            <div>
              <ContactForm />
            </div>
            {/* Info — fixed width sticky sidebar */}
            <div className="lg:sticky lg:top-28">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
      <FAQSection
        items={contactFaqData}
        eyebrow={CONTACT_FAQ_HEADER.eyebrow}
        heading={CONTACT_FAQ_HEADER.heading}
        description={CONTACT_FAQ_HEADER.description}
      />
    </>
  );
}
