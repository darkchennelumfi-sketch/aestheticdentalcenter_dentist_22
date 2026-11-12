import type { Metadata } from "next";

import { CareFinder } from "@/components/sections/care-finder";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PracticeIntro } from "@/components/sections/practice-intro";
import { ServicesSection } from "@/components/sections/services-section";
import { VisitSection } from "@/components/sections/visit-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Aesthetic Dental Center | Dentist in Bismarck, ND",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeIntro />
      <ServicesSection />
      <CareFinder />
      <VisitSection />
      <ContactSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
