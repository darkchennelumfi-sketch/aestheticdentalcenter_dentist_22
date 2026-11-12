import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, HeartHandshake, Phone, UserRound } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Referral",
  description:
    "Good dental care is worth sharing. Refer a friend or family member to Aesthetic Dental Center in Bismarck, ND, and help them find a dental home.",
  alternates: {
    canonical: "/patient-referral",
  },
};

const steps = [
  {
    number: "01",
    title: "Share our name",
    copy: "Tell your friend or family member about your experience at Aesthetic Dental Center. A personal recommendation is often the easiest first step.",
  },
  {
    number: "02",
    title: "Have them call",
    copy: "They can reach our team at 701-214-5552. We will listen to what they need, answer questions, and help them find a time that works.",
  },
  {
    number: "03",
    title: "We take it from there",
    copy: "From the first conversation to the first appointment, we will make sure they feel welcomed and understand what to expect.",
  },
];

const details = [
  "That new patients are welcome",
  "That the first visit is a conversation, not a rush",
  "That we are happy to answer questions before they book",
  "That they can mention your name when they call",
];

export default function PatientReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient referral"
        title={
          <>
            Good care is
            <br />
            <span className="italic text-sky">worth sharing.</span>
          </>
        }
        description="The most meaningful compliment we receive is a patient who trusts us with someone they love. If you have a friend or family member looking for a dental home, we would be glad to meet them."
        image="/images/waiting.jpg"
        imageAlt="A warm, light-filled dental waiting room"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Patient Referral" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                Call {site.phoneDisplay}
              </a>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
              Schedule online
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
        <div className="shell relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <span className="eyebrow text-ocean">A simple introduction</span>
              <h2 className="mt-5 max-w-xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                Help someone find
                <br />
                <span className="italic text-azure">a dental home.</span>
              </h2>
              <div className="prose-editorial mt-7 max-w-xl">
                <p>
                  Looking for a dentist can feel like a chore, especially for
                  someone who has been away from care for a while. A trusted
                  recommendation can make the difference between putting it off
                  and picking up the phone.
                </p>
                <p>
                  If you refer someone to our practice, they will be met the same
                  way you were: with time to talk, clear explanations, and a team
                  that is glad they came in. You do not need to complete any
                  paperwork for them — simply encourage them to call.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white/45 p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                  A few things you can tell them
                </p>
                <ul className="mt-3 space-y-2.5">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-azure/15 text-ocean">
                        <Check className="size-2.5" />
                      </span>
                      <span className="text-[12px] leading-relaxed text-ink/65">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-ink/10 shadow-soft">
                  <Image
                    src="/images/consult.jpg"
                    alt="A dentist speaking warmly with a patient"
                    fill
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-porcelain/90 p-4 backdrop-blur-md">
                    <span className="grid size-9 place-items-center rounded-full bg-ink text-porcelain">
                      <HeartHandshake className="size-4" />
                    </span>
                    <p className="text-[11px] leading-relaxed text-ink/65">
                      A referral is a gesture of trust. We treat it that way.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={site.phoneHref}
                  className="group rounded-2xl border border-ink/10 bg-white/45 p-5 transition-colors hover:bg-white/70"
                >
                  <Phone className="size-4 text-ocean" />
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                    Have them call
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink">
                    {site.phoneDisplay}
                  </p>
                </a>
                <a
                  href={site.scheduleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-ink/10 bg-white/45 p-5 transition-colors hover:bg-white/70"
                >
                  <ArrowUpRight className="size-4 text-ocean" />
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                    Or book online
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink">
                    Schedule a visit
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <span className="eyebrow text-ocean">How it works</span>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white/45 p-6 transition-colors duration-300 hover:bg-white/70">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl text-ink/50">
                        {step.number}
                      </span>
                      <UserRound className="size-4 text-azure" />
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
        </div>
      </section>

      <FinalCta />
    </>
  );
}
