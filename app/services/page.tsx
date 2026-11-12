import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesTabs } from "@/components/sections/services-tabs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services in Bismarck, ND",
  description:
    "Explore family and comprehensive dentistry, cosmetic dentistry, and restorative and prosthodontic care at Aesthetic Dental Center in Bismarck, North Dakota.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The care"
        title={
          <>
            Every chapter
            <br />
            of your <span className="italic text-sky">smile.</span>
          </>
        }
        description="Family and comprehensive care, cosmetic refinement, and advanced restorative and prosthodontic treatment — connected under one roof in Bismarck."
        image="/images/office.jpg"
        imageAlt="A calm, modern treatment room at Aesthetic Dental Center"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Request an appointment
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <a href={site.phoneHref}>
              <Phone className="size-4 text-sky" />
              {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="noise relative overflow-hidden bg-ink py-16 md:py-24">
        <div className="shell relative">
          <ServicesTabs />
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
