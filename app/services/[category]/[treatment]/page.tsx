import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import {
  allTreatments,
  getCategory,
  getRelatedTreatments,
  getTreatment,
} from "@/lib/services";
import { site } from "@/lib/site";

type TreatmentPageProps = {
  params: Promise<{ category: string; treatment: string }>;
};

const steps = [
  {
    title: "Talk it through",
    copy: "We begin with your goals, your history, and any concerns. A short conversation often shapes the whole plan.",
  },
  {
    title: "See the plan",
    copy: "We explain what we find, what the options are, and what each one involves — in language that makes sense.",
  },
  {
    title: "Move at your pace",
    copy: "Treatment is scheduled around you, with comfort checks and clear aftercare at every step.",
  },
];

export function generateStaticParams() {
  return allTreatments.map((treatment) => ({
    category: treatment.categorySlug,
    treatment: treatment.slug,
  }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { category: categorySlug, treatment: treatmentSlug } = await params;
  const treatment = getTreatment(categorySlug, treatmentSlug);

  if (!treatment) {
    return { title: "Treatment" };
  }

  return {
    title: `${treatment.name} in Bismarck, ND`,
    description: treatment.description,
    alternates: {
      canonical: `/services/${treatment.categorySlug}/${treatment.slug}`,
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { category: categorySlug, treatment: treatmentSlug } = await params;
  const category = getCategory(categorySlug);
  const treatment = getTreatment(categorySlug, treatmentSlug);

  if (!category || !treatment) notFound();

  const related = getRelatedTreatments(treatment);

  return (
    <>
      <PageHero
        eyebrow={category.menuName}
        title={
          <>
            {treatment.name}
            <br />
            <span className="italic text-sky">in Bismarck.</span>
          </>
        }
        description={treatment.short}
        image={treatment.image}
        imageAlt={treatment.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.shortName, href: `/services/${category.slug}` },
          { label: treatment.menuName ?? treatment.name },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                Request an appointment
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
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-ocean">The approach</span>
            <h2 className="mt-5 max-w-2xl text-4xl leading-[0.98] text-ink sm:text-5xl">
              Considered care,{" "}
              <span className="italic text-azure">start to finish.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/65">
              {treatment.description}
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {treatment.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-ink/10 bg-white/45 p-4"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-azure/15 text-ocean">
                    <Check className="size-3.5" />
                  </span>
                  <p className="mt-3 text-[12px] font-medium leading-relaxed text-ink/70">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-14 font-display text-3xl text-ink">
              What to expect
            </h3>
            <div className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-3 py-5 sm:grid-cols-12">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-azure sm:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-xl text-ink sm:col-span-4">
                    {step.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-ink/65 sm:col-span-6">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                Part of {category.name}
              </p>
              <Link
                href={`/services/${category.slug}`}
                className="group mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-ink/70 transition-colors hover:text-ocean"
              >
                Explore all {category.shortName.toLowerCase()} treatments
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-porcelain shadow-soft">
              <div className="relative border-b border-white/10 p-6">
                <div
                  className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-azure/20 blur-[70px]"
                  aria-hidden="true"
                />
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-azure">
                  Ready when you are
                </p>
                <p className="mt-3 font-display text-3xl leading-tight">
                  Book a conversation.
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-mist/75">
                  No pressure and no obligation. We will help you decide whether
                  this care is the right next step.
                </p>
                <Button asChild className="mt-5 w-full" size="md">
                  <a href={site.scheduleUrl} target="_blank" rel="noreferrer">
                    <CalendarCheck className="size-4" />
                    Request an appointment
                  </a>
                </Button>
              </div>

              <div className="space-y-4 p-6">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-[12px] text-porcelain/80 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-sky" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-[12px] leading-relaxed text-porcelain/80 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
                  {site.addressOneLine}
                </a>
                <div className="flex items-start gap-3 text-[12px] leading-relaxed text-porcelain/70">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-sky" />
                  <div className="space-y-0.5">
                    {site.hours.map((hour) => (
                      <p key={hour.day}>
                        <span className="text-mist/75">{hour.day}</span>{" "}
                        {hour.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-ink/10 bg-white/45 p-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                A note on care
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-ink/65">
                Treatment recommendations are made after an in-person
                assessment. This page is general information, not a substitute
                for a diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative overflow-hidden bg-ink py-16 md:py-24">
          <div className="shell relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow text-azure">Keep exploring</span>
                <h2 className="mt-5 text-3xl leading-tight text-porcelain sm:text-4xl">
                  Related care
                </h2>
              </div>
              <Link
                href={`/services/${category.slug}`}
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-mist/75 transition-colors hover:text-porcelain"
              >
                All {category.shortName.toLowerCase()}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.categorySlug}/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-sky/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl text-porcelain">
                      {item.menuName ?? item.name}
                    </h3>
                    <ArrowUpRight className="size-4 text-mist/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-mist/75">
                    {item.short}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
