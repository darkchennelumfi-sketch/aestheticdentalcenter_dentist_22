import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
  children,
  className,
  imageClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "noise relative overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-24 size-[38rem] rounded-full bg-azure/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 size-[28rem] rounded-full bg-ocean/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 grid-lines opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]"
        aria-hidden="true"
      />

      <div className="shell relative">
        {breadcrumb && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-9">
              <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                {breadcrumb.map((item, index) => (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-sky"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-mist/75">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-azure">{eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-balance text-[2.75rem] leading-[0.96] text-porcelain sm:text-6xl lg:text-[5.1rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-mist/75 md:text-base">
                {description}
              </p>
            </Reveal>
            {children && (
              <Reveal delay={0.24}>
                <div className="mt-9">{children}</div>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -inset-3 rounded-[12rem_12rem_2.5rem_2.5rem] border border-white/10"
                aria-hidden="true"
              />
              <div
                className="absolute -right-5 -top-5 size-24 rounded-full border border-sky/20 bg-sky/5 backdrop-blur-md"
                aria-hidden="true"
              />
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-[11rem_11rem_2rem_2rem] border border-white/15",
                  imageClassName,
                )}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-60" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-sky" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-porcelain/85">
                      Now welcoming new patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
