import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, HeartHandshake, Microscope, Timer } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Bismarck Dental Practice",
  description:
    "Meet Dr. Sellers and the team at Aesthetic Dental Center in Bismarck, ND. Thoughtful family, cosmetic, restorative, and prosthodontic care.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Time",
    copy: "Appointments are built with room to talk, ask questions, and understand what comes next.",
    Icon: Timer,
  },
  {
    title: "Clarity",
    copy: "We explain what we see and the choices available, so decisions never feel like a mystery.",
    Icon: Microscope,
  },
  {
    title: "Comfort",
    copy: "From the first greeting to aftercare, we pay attention to how the visit actually feels.",
    Icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Care that sees
            <br />
            the <span className="italic text-sky">whole smile.</span>
          </>
        }
        description="Aesthetic Dental Center brings family, cosmetic, restorative, and prosthodontic dentistry together in one Bismarck practice — with a team that takes the time to know you."
        image="/images/consult.jpg"
        imageAlt="A dentist speaking with a patient in a bright office"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
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
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
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
              <span className="eyebrow text-ocean">Our story</span>
              <h2 className="mt-5 max-w-xl text-5xl leading-[0.96] text-ink sm:text-6xl">
                A practice built
                <br />
                around <span className="italic text-azure">people.</span>
              </h2>
              <div className="prose-editorial mt-7 max-w-xl">
                <p>
                  Dr. Sellers and the team are excited to provide exceptional
                  healthcare for your smile. That simple idea shapes the way we
                  practice: listen first, explain clearly, and treat each person
                  with the care we would want for our own family.
                </p>
                <p>
                  Aesthetic Dental Center is a place where family dentistry,
                  cosmetic refinement, and advanced restorative care belong to
                  the same conversation. Patients do not have to piece their care
                  together across town — the team can plan it together, under one
                  roof, with one standard of attention.
                </p>
                <p>
                  Our office is on West Divide Avenue in Bismarck. It is a calm,
                  light-filled space designed to make dentistry feel a little
                  less clinical and a lot more human.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <a href={site.directionsUrl} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="size-4" />
                    Find the office
                  </a>
                </Button>
                <Button asChild variant="outline-dark">
                  <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                    Schedule a visit
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[12rem_12rem_2rem_2rem] border border-ink/10 shadow-soft">
                    <Image
                      src="/images/procedure.jpg"
                      alt="Dental team caring for a patient"
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-porcelain/90 p-4 backdrop-blur-md">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                        One practice, connected care
                      </p>
                      <p className="mt-1.5 font-display text-xl text-ink">
                        Family. Cosmetic. Restorative.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal
                  delay={0.16}
                  className="absolute -right-3 -top-5 rounded-full border border-ink/10 bg-white/70 px-4 py-2 backdrop-blur-md sm:-right-8"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    Bismarck, North Dakota
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div id="doctor" className="scroll-mt-28 lg:col-span-6">
              <div className="rounded-3xl border border-ink/10 bg-white/45 p-6 md:p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ocean">
                  Meet the doctor
                </p>
                <h3 className="mt-3 font-display text-4xl text-ink">
                  Dr. Sellers
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                  Dr. Sellers practices with a focus on exceptional healthcare
                  for every smile that comes through the door. You will meet Dr.
                  Sellers and the team at your visit — and you will have time to
                  ask questions before any treatment begins.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {site.credentials.slice(0, 3).map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full border border-ink/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-ink/65"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div id="team" className="scroll-mt-28 lg:col-span-6">
              <div className="rounded-3xl border border-ink/10 bg-white/45 p-6 md:p-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ocean">
                  Meet the team
                </p>
                <h3 className="mt-3 font-display text-4xl text-ink">
                  The people behind the care
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                  From the first phone call to the chairside conversation, our
                  team is here to make the experience feel clear and unhurried.
                  We are proud to care for our Bismarck neighbors — and to be a
                  familiar face when you walk in.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Family & Comprehensive", "Cosmetic", "Restorative"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-ink/65"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        <div
          className="pointer-events-none absolute -left-32 top-0 size-[30rem] rounded-full bg-azure/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-azure">What guides us</span>
              <h2 className="mt-5 max-w-md text-4xl leading-[0.98] text-porcelain sm:text-5xl">
                Three things we
                <br />
                <span className="italic text-sky">never rush.</span>
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {values.map(({ title, copy, Icon }, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <Icon className="size-5 text-sky" />
                    <h3 className="mt-8 font-display text-2xl text-porcelain">
                      {title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-mist/75">
                      {copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Professional affiliations
                </p>
                <p className="mt-2 font-display text-2xl text-porcelain">
                  Rooted in continuing education.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {site.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-white/10 px-3.5 py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-mist/75"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FinalCta />
    </>
  );
}
