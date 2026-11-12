import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-6 md:py-10">
      <div className="shell">
        <div className="noise relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-20 text-center md:rounded-[2.75rem] md:px-12 md:py-28">
          <Image
            src="/images/hero-smile.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 80rem, 100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ocean/55 to-ink/90" />
          <div
            className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-azure/25 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-sky/20 blur-[110px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-10 size-[26rem] -translate-x-1/2 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-20 size-[20rem] -translate-x-1/2 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow justify-center text-sky">
                Don&apos;t wait any longer
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance text-5xl leading-[0.94] text-porcelain sm:text-6xl md:text-7xl">
                Your New Smile
                <br />
                <span className="italic text-sky">Starts Here.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-porcelain/70">
                Let your first visit be the start of a healthier and more
                confident future. Our welcoming team is here to guide you and
                support you through each step.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Button asChild size="lg">
                    <a
                      href={site.scheduleUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Schedule your visit today
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild variant="outline" size="lg">
                    <a href={site.phoneHref}>
                      <Phone className="size-4 text-sky" />
                      Call us {site.phoneDisplay}
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-porcelain/70">
                {site.addressOneLine}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
