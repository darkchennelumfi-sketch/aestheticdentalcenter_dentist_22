import type { Metadata } from "next";
import { ArrowUpRight, HeartHandshake, MessageCircle, Star, Timer } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Aesthetic Dental Center holds a 4.8 average rating on Google. Read patient reviews, or share your own experience with our Bismarck dental team.",
  alternates: {
    canonical: "/testimonials",
  },
};

const promises = [
  {
    title: "Time to talk",
    copy: "Appointments are built with room for questions, so you are never rushed into a decision you do not understand.",
    Icon: Timer,
  },
  {
    title: "Clarity you can use",
    copy: "We explain what we see and what comes next in plain language, with the choices laid out clearly.",
    Icon: MessageCircle,
  },
  {
    title: "Comfort, considered",
    copy: "From the first greeting to aftercare, we pay attention to how the visit actually feels.",
    Icon: HeartHandshake,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Cared for,
            <br />
            <span className="italic text-sky">in their words.</span>
          </>
        }
        description="The best measure of a dental practice is how people feel when they leave. Our 4.8 average Google rating is a reflection of the visits behind it."
        image="/images/hero-smile.jpg"
        imageAlt="A patient smiling with confidence"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.reviewUrl} target="_blank" rel="noreferrer">
                Read reviews on Google
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Magnetic>
          <div className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < 4
                      ? "size-3.5 fill-azure text-azure"
                      : "size-3.5 fill-azure/45 text-azure/45"
                  }
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-porcelain/75">
              {site.rating} average rating
            </span>
          </div>
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
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/60 p-8 md:p-10">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-azure/15 blur-[60px]"
                    aria-hidden="true"
                  />
                  <p className="relative text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/65">
                    Google rating
                  </p>
                  <p className="relative mt-4 font-display text-[7rem] leading-none tracking-[-0.06em] text-ink">
                    4.8
                  </p>
                  <div
                    className="relative mt-3 flex items-center gap-1.5"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={
                          index < 4
                            ? "size-5 fill-azure text-azure"
                            : "size-5 fill-azure/40 text-azure/40"
                        }
                      />
                    ))}
                  </div>
                  <p className="relative mt-4 text-[13px] leading-relaxed text-ink/65">
                    Based on public patient reviews on Google. Reviews are
                    hosted there in full — we do not edit or curate them.
                  </p>
                  <a
                    href={site.reviewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-porcelain transition-colors hover:bg-ocean"
                  >
                    See the reviews
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <span className="eyebrow text-ocean">The honest measure</span>
              <h2 className="mt-5 max-w-xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                A rating is a number.
                <br />
                <span className="italic text-azure">
                  A good visit is a feeling.
                </span>
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-ink/65">
                <p>
                  We are grateful for every patient who has taken the time to
                  share their experience. The 4.8 average shown here comes from
                  those public reviews — real visits, real people, and the full
                  range of what a dental appointment can be.
                </p>
                <p>
                  We do not ask patients to say anything specific, and we do not
                  publish edited versions of their words. If you want to know
                  what care here is like, the most useful thing you can do is
                  read what patients have written themselves.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <a href={site.reviewUrl} target="_blank" rel="noreferrer">
                    Read patient reviews
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline-dark">
                  <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                    Plan your first visit
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow text-ocean">What we work toward</span>
                <h2 className="mt-5 max-w-2xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                  The experience we hope
                  <br />
                  <span className="italic text-azure">every patient has.</span>
                </h2>
              </div>
              <p className="max-w-sm text-[13px] leading-relaxed text-ink/65">
                These are not quotes. They are the standards we hold ourselves
                to, visit after visit.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {promises.map(({ title, copy, Icon }, index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white/45 p-6 transition-colors duration-300 hover:bg-white/70">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white/60 text-ocean">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/65">
                      {copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-16 md:py-20">
        <div
          className="pointer-events-none absolute -left-32 top-0 size-[26rem] rounded-full bg-azure/10 blur-[110px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky">
                Already a patient?
              </p>
              <h2 className="mt-3 text-3xl leading-[1.02] text-porcelain sm:text-4xl">
                Your experience can help
                <br />
                <span className="italic text-sky">someone else begin.</span>
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-mist/75">
                If you have visited Aesthetic Dental Center, you are welcome to
                leave a review on Google. A few honest sentences can make a
                first appointment feel less uncertain for the next person.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild>
                <a href={site.reviewUrl} target="_blank" rel="noreferrer">
                  Write a review
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  Call {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
