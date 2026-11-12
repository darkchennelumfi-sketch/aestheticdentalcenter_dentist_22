import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { site } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "A conversation",
    copy: "We start by listening — to your goals, your concerns, and what has brought you in. No assumptions, no rush.",
  },
  {
    number: "02",
    title: "A clear plan",
    copy: "We explain what we see and walk through your options in plain language, so you can make a decision that feels right.",
  },
  {
    number: "03",
    title: "Care at your pace",
    copy: "Treatment happens in steps that make sense for you. Questions are welcome at every stage, and comfort always comes first.",
  },
];

export function ProcessSection() {
  return (
    <section className="noise relative overflow-hidden bg-ink-2 py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full bg-azure/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-azure">How it works</span>
            <h2 className="mt-5 max-w-2xl text-4xl leading-[0.98] text-porcelain sm:text-5xl">
              Good care begins with a{" "}
              <span className="italic text-sky">good conversation.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-porcelain/70 transition-colors hover:border-sky/40 hover:text-porcelain"
          >
            Start a conversation
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((step) => (
            <RevealItem key={step.number} className="bg-ink-2">
              <div className="group relative h-full p-7 transition-colors duration-500 hover:bg-white/[0.03] md:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-white/35">
                    {step.number}
                  </span>
                  <span className="size-2 rounded-full bg-azure/60 transition-all duration-500 group-hover:bg-sky group-hover:shadow-[0_0_18px_rgba(76,168,224,0.8)]" />
                </div>
                <h3 className="mt-12 font-display text-2xl text-porcelain">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-mist/75">
                  {step.copy}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-[10px] text-mist/70">
          Questions before you book?{" "}
          <a
            href={site.phoneHref}
            className="text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky"
          >
            Call {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
