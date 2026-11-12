"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const marqueeItems = [
  "Family Dentistry",
  "Cosmetic Dentistry",
  "Prosthodontics",
  "Dental Implants",
  "Porcelain Veneers",
  "Teeth Whitening",
  "Sedation Dentistry",
  "Laser Dentistry",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="noise relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[46rem] rounded-full bg-azure/15 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 top-1/3 size-[38rem] rounded-full bg-ocean/45 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42rem] grid-lines opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none font-display text-[24vw] leading-none tracking-[-0.08em] text-white/[0.018] lg:block"
        aria-hidden="true"
      >
        aesthetic
      </div>

      <div className="shell relative flex flex-1 items-center pb-12 pt-32 md:pt-36 lg:pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="relative z-10 lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-sky" />
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mist/70">
                Bismarck, North Dakota
              </p>
              <span
                className="hidden h-px w-10 bg-white/15 sm:block"
                aria-hidden="true"
              />
              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-mist/70 sm:block">
                New patients welcome
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-balance text-[clamp(3.1rem,7.4vw,6.9rem)] leading-[0.9] tracking-[-0.035em] text-porcelain"
            >
              The art of a
              <br />
              <span className="italic text-sky">confident smile.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-[15px] leading-relaxed text-mist/75 md:text-[16px]"
            >
              Thoughtful family, cosmetic, and restorative dentistry — delivered
              with a lighter touch. Meet Dr. Sellers and the team at Aesthetic
              Dental Center.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Magnetic>
                <Button asChild size="lg">
                  <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                    Request an appointment
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    Explore our care
                    <ArrowDown className="size-4 text-sky" />
                  </Link>
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={
                        index < 4
                          ? "size-3.5 fill-azure text-azure"
                          : "size-3.5 fill-azure/40 text-azure/40"
                      }
                    />
                  ))}
                </div>
                <p className="text-[11px] text-mist/75">
                  <span className="font-semibold text-porcelain">4.8</span>{" "}
                  average rating
                </p>
              </div>
              <span className="hidden h-4 w-px bg-white/12 sm:block" />
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-[11px] text-mist/75 transition-colors hover:text-porcelain"
              >
                <Phone className="size-3.5 text-sky" />
                {site.phoneDisplay}
              </a>
              <span className="hidden h-4 w-px bg-white/12 sm:block" />
              <p className="inline-flex items-center gap-2 text-[11px] text-mist/75">
                <Clock3 className="size-3.5 text-sky" />
                Tue – Fri
              </p>
            </motion.div>
          </motion.div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[25rem] lg:ml-auto lg:mr-0"
            >
              <div
                className="absolute -inset-4 rounded-[13rem_13rem_2.5rem_2.5rem] border border-white/10"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12rem_12rem_2rem_2rem] border border-white/15">
                <Image
                  src="/images/hero-smile.jpg"
                  alt="A woman smiling with a natural, confident smile"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 34vw, 80vw"
                  className="object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-transparent mix-blend-multiply" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="glass flex items-center justify-between gap-4 rounded-2xl p-4">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                        Visit us
                      </p>
                      <p className="mt-1 max-w-[19ch] text-[11px] leading-relaxed text-porcelain/90">
                        {site.address.line1}
                        <br />
                        {site.address.city}, {site.address.state}{" "}
                        {site.address.zip}
                      </p>
                    </div>
                    <a
                      href={site.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Driving directions to Aesthetic Dental Center"
                      className="grid size-9 shrink-0 place-items-center rounded-full bg-porcelain text-ink transition-colors hover:bg-sky"
                    >
                      <MapPin className="size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -left-5 top-20 hidden rounded-2xl border border-white/15 bg-ink/60 px-4 py-3 backdrop-blur-xl sm:block lg:-left-10"
              >
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Office hours
                </p>
                <p className="mt-1 text-[11px] font-medium text-porcelain">
                  Tue – Thu <span className="text-mist/75">7–4</span>
                </p>
                <p className="text-[11px] font-medium text-porcelain">
                  Fri <span className="text-mist/75">7–2</span>
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute -right-3 top-6 grid size-24 place-items-center rounded-full border border-white/15 bg-ink/55 text-center backdrop-blur-xl sm:-right-6 sm:size-28"
              >
                <div>
                  <p className="font-display text-2xl leading-none text-porcelain">
                    4.8
                  </p>
                  <div className="mt-1 flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-2 fill-azure text-azure"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-mist/75">
                    Google rating
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-ink/60 py-4 backdrop-blur-md">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist/75">
                {item}
              </span>
              <span className="size-1 rounded-full bg-azure/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-16 right-5 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-mist/70 xl:flex">
        <span>Scroll to explore</span>
        <ArrowDown className="size-3.5" />
      </div>
    </section>
  );
}
