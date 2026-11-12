import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { site } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  updated = site.legalUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-16 pt-32 md:pb-20 md:pt-40">
        <div
          className="pointer-events-none absolute -right-32 -top-24 size-[34rem] rounded-full bg-azure/15 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 grid-lines opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist/75">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-sky"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/sitemap"
                  className="transition-colors hover:text-sky"
                >
                  Legal
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-mist/75">{title}</li>
            </ol>
          </nav>

          <span className="eyebrow text-azure">{eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-balance text-[2.6rem] leading-[0.98] text-porcelain sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-mist/70">
            {description}
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist/70">
            Last updated {updated}
          </p>
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-porcelain py-16 text-ink md:py-24">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/65">
                Practice policies
              </p>
              <nav aria-label="Legal pages" className="mt-4 flex flex-col">
                {site.legal.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-ink/10 py-2.5 text-[12px] text-ink/65 transition-colors hover:text-ocean"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white/45 p-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                  Questions?
                </p>
                <p className="mt-2 font-display text-xl leading-tight text-ink">
                  Our team can help.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-ocean transition-colors hover:text-ink"
                >
                  <Phone className="size-3.5" />
                  {site.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="mt-3 flex items-center gap-1.5 text-[11px] text-ink/65 transition-colors hover:text-ink"
                >
                  Send a message
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="prose-legal max-w-3xl">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
