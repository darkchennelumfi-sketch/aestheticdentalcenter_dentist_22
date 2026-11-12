"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { getTreatment } from "@/lib/services";
import { cn } from "@/lib/utils";

const concerns = [
  {
    label: "A routine check-up",
    category: "family-dentistry",
    treatment: "cleanings-hygiene",
  },
  {
    label: "A brighter smile",
    category: "cosmetic-dentistry",
    treatment: "teeth-whitening",
  },
  {
    label: "Chipped or uneven teeth",
    category: "cosmetic-dentistry",
    treatment: "porcelain-veneers",
  },
  {
    label: "A missing tooth",
    category: "prosthodontics",
    treatment: "dental-implants",
  },
  {
    label: "Denture comfort",
    category: "prosthodontics",
    treatment: "dentures",
  },
  {
    label: "Jaw pain or clenching",
    category: "family-dentistry",
    treatment: "tmj-treatment",
  },
  {
    label: "Snoring or sleep concerns",
    category: "family-dentistry",
    treatment: "sleep-apnea",
  },
  {
    label: "Feeling anxious about a visit",
    category: "family-dentistry",
    treatment: "sedation-dentistry",
  },
] as const;

export function CareFinder() {
  const [selected, setSelected] = React.useState(0);
  const concern = concerns[selected];
  const treatment = getTreatment(concern.category, concern.treatment);

  return (
    <section className="noise relative overflow-hidden bg-sand py-20 text-ink md:py-28">
      <div
        className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow text-ocean">A place to start</span>
          <h2 className="mt-6 text-5xl leading-[0.98] text-ink sm:text-6xl">
            What brings you <span className="italic text-azure">in?</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/65">
            Choose what feels closest to your situation. We will point you to a
            relevant part of our care — no diagnosis, just a helpful first step.
          </p>
          <p className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65">
            <Sparkles className="size-3.5 text-azure" />
            Interactive care finder
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-[1.75rem] border border-white/10 bg-ink p-5 shadow-soft md:p-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-mist/75">
              Select a concern
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {concerns.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                  className={cn(
                    "cursor-pointer rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-300",
                    selected === index
                      ? "border-sky/60 bg-sky text-ink"
                      : "border-white/12 bg-white/[0.03] text-mist/70 hover:border-white/25 hover:text-porcelain",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-7">
              <AnimatePresence mode="wait">
                {treatment && (
                  <motion.div
                    key={`${concern.category}-${concern.treatment}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="grid gap-6 sm:grid-cols-12 sm:items-center"
                  >
                    <div className="sm:col-span-7">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-azure">
                        A good place to begin
                      </p>
                      <h3 className="mt-2 font-display text-3xl leading-tight text-porcelain md:text-4xl">
                        {treatment.name}
                      </h3>
                      <p className="mt-3 max-w-md text-[13px] leading-relaxed text-mist/75">
                        {treatment.short}
                      </p>
                      <Link
                        href={`/services/${concern.category}/${concern.treatment}`}
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-porcelain px-5 py-3 text-[11px] font-semibold text-ink transition-colors hover:bg-white"
                      >
                        Explore this care
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                    <div className="sm:col-span-5">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={treatment.image}
                          alt={treatment.imageAlt}
                          className="h-40 w-full object-cover sm:h-44"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                      </div>
                      <p className="mt-3 text-[10px] leading-relaxed text-mist/70">
                        Not sure? Call {`701-214-5552`} and we will help you find
                        the right appointment.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
