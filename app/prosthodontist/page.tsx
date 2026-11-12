import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Crown,
  HeartHandshake,
  Microscope,
  Phone,
  Smile,
} from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Is Prosthodontics?",
  description:
    "Learn what prosthodontics is and how prosthodontic care restores missing, worn, or damaged teeth at Aesthetic Dental Center in Bismarck, ND.",
  alternates: {
    canonical: "/prosthodontist",
  },
};

const careAreas = [
  {
    title: "Function and bite",
    copy: "Restoring teeth is not only about how they look. The goal is a bite that feels stable, comfortable, and dependable.",
    Icon: Microscope,
  },
  {
    title: "Complex restorations",
    copy: "Crowns, bridges, implants, dentures, and full-mouth plans can be combined into one considered approach.",
    Icon: Crown,
  },
  {
    title: "Long-term thinking",
    copy: "Prosthodontic care considers how a restoration will serve you over time, not just how it looks on the day it is placed.",
    Icon: BookOpen,
  },
  {
    title: "Aesthetics with purpose",
    copy: "The best restoration is the one that fits your face, your smile, and your daily life — and looks natural doing it.",
    Icon: Smile,
  },
];

const careLinks = [
  {
    title: "All-on-4 Implants",
    href: "/services/prosthodontics/all-on-4-implants",
    copy: "A full-arch approach for missing teeth.",
  },
  {
    title: "Dental Crowns",
    href: "/services/prosthodontics/crowns-bridges",
    copy: "Restore strength, shape, and function.",
  },
  {
    title: "Dental Implants",
    href: "/services/prosthodontics/dental-implants",
    copy: "A foundation for replacing a missing tooth.",
  },
  {
    title: "Dentures",
    href: "/services/prosthodontics/dentures",
    copy: "Custom dentures designed for fit and comfort.",
  },
  {
    title: "Full Mouth Restorations",
    href: "/services/prosthodontics/full-mouth-restoration",
    copy: "Comprehensive care for a fully rebuilt smile.",
  },
];

export default function ProsthodontistPage() {
  return (
    <>
      <PageHero
        eyebrow="What is prosthodontics"
        title={
          <>
            The specialty behind
            <br />
            <span className="italic text-sky">a rebuilt smile.</span>
          </>
        }
        description="Prosthodontics is the branch of dentistry focused on restoring missing or damaged teeth — and the function, comfort, and confidence that come with them."
        image="/images/implant.jpg"
        imageAlt="Dental implant model used for restorative treatment planning"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "What Is Prosthodontics" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Request a consultation
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
              <span className="eyebrow text-ocean">A closer look</span>
              <h2 className="mt-5 max-w-xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                More than
                <br />
                <span className="italic text-azure">filling a space.</span>
              </h2>
              <div className="prose-editorial mt-7 max-w-xl">
                <p>
                  Prosthodontics is one of the recognized dental specialties. It
                  focuses on the restoration and replacement of teeth, including
                  complex cases involving many teeth, the bite, and the
                  supporting structures of the mouth.
                </p>
                <p>
                  A prosthodontist completes additional training beyond dental
                  school in this area. At Aesthetic Dental Center, prosthodontic
                  principles guide the way we plan restorative care: the bite,
                  the gum tissue, the bone, and the appearance of the smile are
                  considered together rather than one at a time.
                </p>
                <p>
                  If your needs call for a specialist evaluation beyond what our
                  practice provides, our team will help you understand the
                  options and coordinate the right next step.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href="/services/prosthodontics">
                    Explore restorative care
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline-dark">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    Ask a question
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-ink/10 shadow-soft">
                  <Image
                    src="/images/procedure.jpg"
                    alt="Dental team planning restorative treatment"
                    fill
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-porcelain/90 p-4 backdrop-blur-md">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                      Restorative &amp; prosthodontics
                    </p>
                    <p className="mt-1.5 font-display text-xl text-ink">
                      Function, comfort, and aesthetics — planned together.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {careAreas.map(({ title, copy, Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white/45 p-6 transition-colors duration-300 hover:bg-white/70">
                  <span className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ocean">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl leading-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-ink/65">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-20 md:py-28">
        <div
          className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-azure/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-azure">Care we provide</span>
              <h2 className="mt-5 max-w-md text-4xl leading-[0.98] text-porcelain sm:text-5xl">
                A connected
                <br />
                <span className="italic text-sky">approach to restoration.</span>
              </h2>
              <p className="mt-6 max-w-md text-[14px] leading-relaxed text-mist/75">
                From a single crown to a full-arch plan, the goal is the same:
                care that works with your bite, your health, and the way you
                want to live.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.credentials.slice(0, 4).map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-mist/75"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {careLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between gap-6 border-b border-white/10 py-5 transition-colors hover:border-sky/30"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-mist/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-porcelain md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[12px] text-mist/75">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-mist/75 transition-all duration-300 group-hover:border-azure group-hover:bg-azure group-hover:text-ink">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                <HeartHandshake className="size-4" />
              </span>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Not sure where to start?
                </p>
                <p className="mt-1 max-w-lg font-display text-2xl leading-tight text-porcelain">
                  Bring your questions. We will help you find the right first
                  step.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Request a consultation
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
