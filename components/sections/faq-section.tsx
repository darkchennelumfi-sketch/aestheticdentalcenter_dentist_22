import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call our office at 701-214-5552 or use the Schedule Online link. Our team will help you find a time that works, whether you are booking a cleaning, a consultation, or follow-up care.",
  },
  {
    question: "What are your office hours?",
    answer:
      "We are open Tuesday through Thursday from 7:00 AM to 4:00 PM, and Friday from 7:00 AM to 2:00 PM. We are closed Saturday through Monday.",
  },
  {
    question: "Where are you located?",
    answer:
      "Aesthetic Dental Center is at 1207 West Divide Avenue, Suite 1, Bismarck, ND 58501. Use the Driving Directions link and we will see you when you arrive.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Our Cherry financing option lets you pay over time, with no hard credit checks and 0% APR options. Visit our financing page to learn more, or ask our team during your visit.",
  },
  {
    question: "I feel anxious about dental visits. Can you help?",
    answer:
      "We understand. Our team takes a calm, unhurried approach, and we offer sedation dentistry for patients who would like extra support during treatment. Tell us what you need when you book — we will plan around you.",
  },
  {
    question: "Are you welcoming new patients?",
    answer:
      "Yes. New patients are welcome at Aesthetic Dental Center. Start with a call or a message through the form, and we will help you prepare for your first visit.",
  },
];

export function FaqSection() {
  return (
    <section className="noise relative overflow-hidden bg-ice py-20 text-ink md:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-10 size-[28rem] rounded-full bg-azure/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow text-ocean">Good to know</span>
          <h2 className="mt-6 text-5xl leading-[0.98] text-ink sm:text-6xl">
            A few <span className="italic text-azure">answers.</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/65">
            The questions we hear most often, answered plainly. If yours is not
            here, our team is one call away.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink/30 hover:bg-white/50"
          >
            Ask us anything
            <ArrowUpRight className="size-3.5" />
          </Link>
          <div className="mt-10 rounded-2xl border border-ink/10 bg-white/45 p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
              Prefer to talk?
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-3xl text-ink transition-colors hover:text-ocean"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-[11px] text-ink/65">
              Tuesday – Friday. A real person will answer.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
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
    </section>
  );
}
