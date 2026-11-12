import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/lib/services";

export function ServicesSection() {
  const [family, cosmetic, restorative] = categories;

  return (
    <section className="noise relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 size-[34rem] rounded-full bg-azure/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The care"
            title={
              <>
                One practice.
                <br />
                <span className="italic text-sky">Every chapter</span> of your
                smile.
              </>
            }
            copy="From the first cleaning to the most involved restoration, our care is connected — planned around your comfort, your health, and the way you want to smile."
          />
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-porcelain/70 transition-colors hover:border-sky/40 hover:text-porcelain"
            >
              All services
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <Link
              href={`/services/${family.slug}`}
              className="group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 lg:min-h-[42rem]"
            >
              <Image
                src={family.image}
                alt={family.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                <span className="rounded-full border border-white/20 bg-ink/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-porcelain/80 backdrop-blur-md">
                  01 / Family
                </span>
                <span className="grid size-11 place-items-center rounded-full border border-white/20 bg-ink/25 text-porcelain backdrop-blur-md transition-all duration-300 group-hover:border-sky/50 group-hover:bg-sky group-hover:text-ink">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="relative mt-auto p-6 md:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky">
                  {family.tagline}
                </p>
                <h3 className="mt-3 max-w-md font-display text-4xl leading-[1] text-porcelain md:text-5xl">
                  {family.name}
                </h3>
                <p className="mt-4 max-w-md text-[13px] leading-relaxed text-mist/70">
                  {family.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {family.treatments.slice(0, 4).map((treatment) => (
                    <span
                      key={treatment.slug}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] text-porcelain/70 backdrop-blur-md"
                    >
                      {treatment.menuName ?? treatment.name}
                    </span>
                  ))}
                  <span className="rounded-full border border-sky/30 px-3 py-1.5 text-[10px] text-sky">
                    +{family.treatments.length - 4} more
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {[cosmetic, restorative].map((category, index) => (
            <Reveal
              key={category.slug}
              delay={0.1 + index * 0.08}
              className="lg:col-span-5"
            >
              <Link
                href={`/services/${category.slug}`}
                className="group relative flex min-h-[20rem] overflow-hidden rounded-[1.75rem] border border-white/10"
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/15" />
                <div className="relative flex w-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-ink/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-porcelain/80 backdrop-blur-md">
                      0{index + 2} / {category.shortName}
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-white/20 bg-ink/25 text-porcelain backdrop-blur-md transition-all duration-300 group-hover:border-sky/50 group-hover:bg-sky group-hover:text-ink">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <div className="mt-16">
                    <h3 className="max-w-xs font-display text-3xl leading-tight text-porcelain">
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-mist/70">
                      {category.description}
                    </p>
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky">
                      {category.treatments.length} treatments
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
