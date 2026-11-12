import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

import { Rating } from "@/components/brand/rating";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { VisitSection } from "@/components/sections/visit-section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Aesthetic Dental Center in Bismarck ND",
  },
  description:
    "Please contact us for more information about our dental services. Dr. Sellers and the team are excited to provide exceptional healthcare for your smile.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aesthetic Dental Center in Bismarck ND",
    description:
      "Please contact us for more information about our dental services. Dr. Sellers and the team are excited to provide exceptional healthcare for your smile.",
    url: "/contact",
    images: ["/images/office.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          className="pointer-events-none absolute -right-40 -top-32 size-[42rem] rounded-full bg-azure/15 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 grid-lines opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-azure">Get in touch with us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-balance text-[clamp(3rem,7vw,6.3rem)] leading-[0.92] text-porcelain">
                <span className="italic text-sky">Contact Us</span> Today!
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-mist/75">
                We are open Tuesday to Friday and offer convenient appointment
                times. Whether you have a question or you are ready to book,
                our team would love to hear from you.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button asChild size="lg">
                    <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                      Schedule Online Here
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild variant="outline" size="lg">
                    <a href={site.phoneHref}>
                      <Phone className="size-4 text-sky" />
                      Call Us {site.phoneDisplay}
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Rating className="mt-9" />
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <div
                className="absolute -inset-4 rounded-[12rem_12rem_2.5rem_2.5rem] border border-white/10"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[11rem_11rem_2rem_2rem] border border-white/15">
                <Image
                  src="/images/office.jpg"
                  alt="Modern treatment room at Aesthetic Dental Center"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 space-y-2">
                  <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                    <MapPin className="size-4 shrink-0 text-sky" />
                    <p className="text-[11px] leading-relaxed text-porcelain/85">
                      {site.addressOneLine}
                    </p>
                  </div>
                  <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                    <Clock3 className="size-4 shrink-0 text-sky" />
                    <p className="text-[11px] text-porcelain/85">
                      Tuesday – Friday, by appointment
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-3 top-8 rounded-full border border-sky/30 bg-ink/50 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur-md sm:-right-6">
                Now welcoming new patients
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VisitSection />
      <ContactSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
