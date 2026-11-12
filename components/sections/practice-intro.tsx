import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

function RotatingSeal() {
  return (
    <div className="relative grid size-28 place-items-center rounded-full border border-ink/15 bg-porcelain/80 backdrop-blur-md">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-[spin_32s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-path"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-ink/55 text-[6.4px] font-semibold uppercase tracking-[0.22em]">
          <textPath href="#seal-path">
            Aesthetic Dental Center · Bismarck, ND ·
          </textPath>
        </text>
      </svg>
      <Sparkles className="size-5 text-azure" />
    </div>
  );
}

const facts = [
  { value: "4.8", label: "Average patient rating" },
  { value: "03", label: "Connected care paths" },
  { value: "1207", label: "West Divide Avenue" },
  { value: "TUE–FRI", label: "Office hours" },
];

export function PracticeIntro() {
  return (
    <section className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 size-[28rem] rounded-full bg-azure/15 blur-[110px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow text-ocean">The practice</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl text-[3.2rem] leading-[0.94] text-ink sm:text-6xl lg:text-[4.6rem]">
                A calmer kind of
                <br />
                <span className="italic text-azure">dental care.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink/65">
                Dr. Sellers and the team are excited to provide exceptional
                healthcare for your smile. At Aesthetic Dental Center, that
                means thoughtful dentistry delivered with time, clarity, and a
                genuine sense of welcome.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-ink/65">
                Family, cosmetic, and restorative care live under one roof, so
                your smile can be cared for as a whole — not a collection of
                separate appointments.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-porcelain transition-colors hover:bg-ocean"
                >
                  Meet the practice
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/35 hover:text-ink"
                >
                  <MapPin className="size-3.5 text-ocean" />
                  Bismarck, ND
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/10 pt-8 sm:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-2xl leading-none text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:ml-auto">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12rem_12rem_2rem_2rem] border border-ink/10 shadow-soft">
                  <Image
                    src="/images/consult.jpg"
                    alt="Dentist speaking with a patient in a bright, modern office"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                </div>
              </Reveal>

              <Reveal
                delay={0.2}
                className="absolute -bottom-8 -left-4 w-52 sm:-left-10 sm:w-60"
              >
                <div className="overflow-hidden rounded-2xl border border-white/60 bg-porcelain p-2 shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/images/office.jpg"
                      alt="A calm, light-filled treatment room"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2 pb-1 pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                      The space
                    </p>
                    <ShieldCheck className="size-3.5 text-ocean" />
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.28}
                className="absolute -right-2 -top-4 sm:-right-8 sm:-top-8"
              >
                <RotatingSeal />
              </Reveal>

              <div className="absolute -left-3 top-8 hidden rounded-full border border-ink/10 bg-white/70 px-4 py-2 backdrop-blur-md sm:block">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                  Now welcoming new patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
