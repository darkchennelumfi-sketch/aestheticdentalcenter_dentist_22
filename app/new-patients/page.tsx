import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Phone } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "New patients are welcome at Aesthetic Dental Center in Bismarck, ND. Here is what to expect from your first visit and how to get started.",
  alternates: {
    canonical: "/new-patients",
  },
};

const visitSteps = [
  {
    number: "01",
    title: "Get in touch",
    copy: "Call us or request an appointment online. We will ask a few simple questions and help you find a time that fits.",
  },
  {
    number: "02",
    title: "Meet your team",
    copy: "Your first visit is a conversation as much as an exam. We will listen, look carefully, and answer your questions.",
  },
  {
    number: "03",
    title: "Leave with a plan",
    copy: "You will leave understanding what we found, what we recommend, and what the next step looks like — in plain language.",
  },
];

const bring = [
  "A photo ID",
  "Your dental insurance card, if you have one",
  "A list of medications or health conditions you want us to know about",
  "Any questions you have been saving up",
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            Your first visit,
            <br />
            <span className="italic text-sky">made simple.</span>
          </>
        }
        description="A new dental home should feel like a relief, not a test. Here is how we make the first visit clear, comfortable, and genuinely useful."
        image="/images/waiting.jpg"
        imageAlt="A calm, light-filled dental waiting room"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "New Patients" },
        ]}
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

      <section className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <span className="eyebrow text-ocean">Before you arrive</span>
              <h2 className="mt-5 max-w-xl text-5xl leading-[0.96] text-ink sm:text-6xl">
                Come as you are.
                <br />
                <span className="italic text-azure">We will take it from there.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/65">
                There is no need to have everything figured out before your first
                appointment. Tell us what is on your mind, and we will help you
                find the right starting point.
              </p>

              <ul className="mt-8 space-y-3">
                {bring.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-azure/15 text-ocean">
                      <Check className="size-3" />
                    </span>
                    <span className="text-[13px] leading-relaxed text-ink/65">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                    Schedule online
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline-dark">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    Call {site.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-ink/10 shadow-soft">
                  <Image
                    src="/images/consult.jpg"
                    alt="A dentist welcoming and speaking with a patient"
                    fill
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-porcelain/90 p-4 backdrop-blur-md">
                    <span className="grid size-9 place-items-center rounded-full bg-ink text-porcelain">
                      <Check className="size-4" />
                    </span>
                    <p className="text-[11px] leading-relaxed text-ink/65">
                      New patients are welcome. A warm welcome is the first part
                      of the care.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            {visitSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white/45 p-6 transition-colors duration-300 hover:bg-white/70">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-ink/50">
                      {step.number}
                    </span>
                    <span className="size-2 rounded-full bg-azure" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/65">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
