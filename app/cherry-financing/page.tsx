import type { Metadata } from "next";
import { ArrowUpRight, CalendarClock, Check, CreditCard, Phone, ShieldCheck } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cherry Financing",
  description:
    "Flexible dental financing through Cherry at Aesthetic Dental Center in Bismarck, ND. Pay over time with no hard credit checks and 0% APR options.",
  alternates: {
    canonical: "/cherry-financing",
  },
};

const highlights = [
  {
    title: "No hard credit checks",
    copy: "Exploring your options should not feel like a risk. Cherry’s process is designed without a hard credit check.",
    Icon: ShieldCheck,
  },
  {
    title: "0% APR options",
    copy: "Interest-free plans may be available, depending on eligibility. Our team can walk you through the current options.",
    Icon: CreditCard,
  },
  {
    title: "Pay over time",
    copy: "Instead of covering the full cost at once, you can choose a monthly payment plan that fits your budget.",
    Icon: CalendarClock,
  },
];

const steps = [
  {
    number: "01",
    title: "Talk through your plan",
    copy: "We start with the treatment you need and a clear explanation of the cost. No surprises, no pressure.",
  },
  {
    number: "02",
    title: "Review your options",
    copy: "Ask our team about Cherry. You can review the available plans and see what a monthly payment might look like.",
  },
  {
    number: "03",
    title: "Move forward with care",
    copy: "If a plan fits, you can get treatment underway while paying over time according to your agreement.",
  },
];

const faqs = [
  {
    question: "What is Cherry financing?",
    answer:
      "Cherry is a payment option that lets you split the cost of dental treatment into monthly payments. Aesthetic Dental Center offers it as a flexible alternative to paying the full balance at the time of care.",
  },
  {
    question: "Will checking my options affect my credit?",
    answer:
      "Cherry’s process is designed without a hard credit check. Terms, eligibility, and any credit reporting are determined by Cherry, so it is worth reviewing their disclosures before you apply.",
  },
  {
    question: "Are 0% APR options available?",
    answer:
      "Yes, 0% APR options may be available depending on eligibility and the plan you choose. Our team can share the current options, and Cherry will confirm the final terms.",
  },
  {
    question: "Can I use financing for any treatment?",
    answer:
      "Financing can be discussed for many treatment plans. Ask our team about the care you are considering, and we will help you understand what can be included.",
  },
  {
    question: "Who makes the approval decision?",
    answer:
      "Cherry reviews applications and makes all credit decisions. Aesthetic Dental Center does not determine approval, rates, or terms. Financing is subject to eligibility and approval.",
  },
];

export default function CherryFinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cherry financing"
        title={
          <>
            Care now.
            <br />
            <span className="italic text-sky">Pay over time.</span>
          </>
        }
        description="Cost should not be the reason you postpone treatment. Cherry financing offers a flexible way to move forward, with no hard credit checks and 0% APR options."
        image="/images/consult.jpg"
        imageAlt="A dentist discussing a treatment plan with a patient"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Cherry Financing" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                Ask about financing
              </a>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
              Plan a consultation
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-20 size-[28rem] rounded-full bg-azure/10 blur-[110px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="max-w-2xl">
            <span className="eyebrow text-ocean">A practical option</span>
            <h2 className="mt-5 text-4xl leading-[0.98] text-ink sm:text-5xl">
              A plan for the care,
              <br />
              <span className="italic text-azure">
                and a plan for the cost.
              </span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
              Dental treatment is an investment, and the timing is not always
              convenient. Financing lets you separate the decision to get care
              from the decision about how to pay for it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, copy, Icon }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white/50 p-6 transition-colors duration-300 hover:bg-white/75">
                  <span className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ocean">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl leading-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/65">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 rounded-[2rem] border border-ink/10 bg-white/45 p-6 md:p-9 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ocean">
                How it works
              </p>
              <h2 className="mt-3 font-display text-3xl leading-[1.02] text-ink sm:text-4xl">
                Three steps,
                <br />
                <span className="italic text-azure">no guesswork.</span>
              </h2>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-ink/65">
                Our team will help you understand the cost of your plan and the
                financing options available before treatment begins.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-ink/10 bg-porcelain/70 p-5"
                >
                  <span className="font-display text-3xl text-ink/50">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-ink/65">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-ocean">Good to know</span>
              <h2 className="mt-5 text-4xl leading-[0.98] text-ink sm:text-5xl">
                Financing,
                <br />
                <span className="italic text-azure">explained plainly.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink/65">
                The questions patients ask most often before choosing a payment
                plan. If yours is not here, call us — we are happy to talk it
                through.
              </p>
              <Button asChild variant="outline-dark" className="mt-6">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="border-t border-ink/10">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-ink/10 bg-white/40 p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-azure/15 text-ocean">
                <Check className="size-3" />
              </span>
              <p className="text-[11px] leading-relaxed text-ink/65">
                Financing is provided by Cherry and is subject to eligibility,
                credit approval, and the terms of your agreement. Aesthetic
                Dental Center does not make credit decisions. Rates, terms, and
                available plans are set by Cherry and may change. Ask our team
                for current details before applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
