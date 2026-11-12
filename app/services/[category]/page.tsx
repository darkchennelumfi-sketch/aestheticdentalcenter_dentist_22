import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { Button } from "@/components/ui/button";
import { TreatmentCard } from "@/components/treatment-card";
import { categories, getCategory } from "@/lib/services";
import { site } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    return { title: "Services" };
  }

  return {
    title: `${category.name} in Bismarck, ND`,
    description: category.description,
    alternates: {
      canonical: `/services/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) notFound();

  const otherCategories = categories.filter(
    (item) => item.slug !== category.slug,
  );
  const categoryWords = category.name.split(" ");
  const categoryAccent = categoryWords.pop() ?? "care.";
  const categoryLead = categoryWords.join(" ");

  return (
    <>
      <PageHero
        eyebrow={category.menuName}
        title={
          <>
            {categoryLead}
            <br />
            <span className="italic text-sky">{categoryAccent}</span>
          </>
        }
        description={category.longDescription}
        image={category.image}
        imageAlt={category.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.shortName },
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
        <div className="shell relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-ocean">Treatments</span>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                What we can do,{" "}
                <span className="italic text-azure">together.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-ink/65">
              Each treatment begins with an assessment. We recommend only what
              fits your health, your goals, and your comfort.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.treatments.map((treatment, index) => (
              <TreatmentCard
                key={treatment.slug}
                treatment={treatment}
                index={index}
              />
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/65">
              Other care paths
            </p>
            <div className="flex flex-wrap gap-3">
              {otherCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:border-ink/35 hover:text-ink"
                >
                  {item.shortName}
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
