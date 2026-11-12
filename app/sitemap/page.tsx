import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog";
import { categories } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "A complete directory of pages on the Aesthetic Dental Center website, including care, patient resources, articles, and legal information.",
  alternates: {
    canonical: "/sitemap",
  },
};

const practiceLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Meet the Doctor", href: "/about#doctor" },
  { label: "Meet the Team", href: "/about#team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Dental Blog", href: "/blog" },
  { label: "New Patient Information", href: "/new-patients" },
  { label: "Patient Referral", href: "/patient-referral" },
  { label: "Cherry Financing", href: "/cherry-financing" },
  { label: "What Is Prosthodontics", href: "/prosthodontist" },
  { label: "Contact Us", href: "/contact" },
];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group flex items-center justify-between gap-4 border-b border-ink/10 py-2.5 text-[13px] text-ink/65 transition-colors hover:text-ocean"
          >
            {link.label}
            <ArrowUpRight className="size-3.5 shrink-0 text-ink/65 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title={
          <>
            Every page,
            <br />
            <span className="italic text-sky">in one place.</span>
          </>
        }
        description="A directory of the practice, care, patient resources, articles, and policies on this website. If you cannot find what you need, our team is one call away."
        image="/images/office.jpg"
        imageAlt="Modern treatment room at Aesthetic Dental Center"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
      >
        <Button asChild variant="outline" size="lg">
          <a href={site.phoneHref}>
            <Phone className="size-4 text-sky" />
            {site.phoneDisplay}
          </a>
        </Button>
      </PageHero>

      <section className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-ocean">Practice</span>
              <h2 className="mt-5 text-4xl leading-[0.98] text-ink sm:text-5xl">
                Start with the
                <br />
                <span className="italic text-azure">essentials.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink/65">
                Learn about the practice, plan a first visit, or get in touch.
                New patients are always welcome.
              </p>
              <Reveal className="mt-8">
                <div className="rounded-2xl border border-ink/10 bg-white/45 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                    Visit us
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/65">
                    {site.addressOneLine}
                  </p>
                  <p className="mt-1 text-[13px] text-ink/65">
                    {site.phoneDisplay}
                  </p>
                  <p className="mt-2 text-[11px] text-ink/65">
                    {site.closedDays} closed
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-porcelain transition-colors hover:bg-ocean"
                    >
                      Contact us
                      <ArrowUpRight className="size-3" />
                    </Link>
                    <a
                      href={site.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:border-ink/30 hover:text-ink"
                    >
                      Directions
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <LinkList links={practiceLinks} />
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-ocean">Care</span>
              <h2 className="mt-5 text-4xl leading-[0.98] text-ink sm:text-5xl">
                Explore our
                <br />
                <span className="italic text-azure">services.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink/65">
                Three connected areas of care, with individual pages for each
                treatment. Not sure where to begin? Start with a conversation.
              </p>
              <Button asChild variant="outline-dark" className="mt-6">
                <Link href="/services">
                  All services
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
              {categories.map((category) => (
                <div key={category.slug}>
                  <Link
                    href={`/services/${category.slug}`}
                    className="font-display text-xl leading-tight text-ink transition-colors hover:text-ocean"
                  >
                    {category.shortName}
                  </Link>
                  <ul className="mt-3">
                    {category.treatments.map((treatment) => (
                      <li key={treatment.slug}>
                        <Link
                          href={`/services/${category.slug}/${treatment.slug}`}
                          className="block border-b border-ink/10 py-2 text-[12px] leading-snug text-ink/65 transition-colors hover:text-ocean"
                        >
                          {treatment.menuName ?? treatment.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-ocean">Journal &amp; policies</span>
              <h2 className="mt-5 text-4xl leading-[0.98] text-ink sm:text-5xl">
                The fine print,
                <br />
                <span className="italic text-azure">and the useful notes.</span>
              </h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/65">
                  Dental blog
                </p>
                <LinkList
                  links={blogPosts.map((post) => ({
                    label: post.title,
                    href: `/blog/${post.slug}`,
                  }))}
                />
              </div>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/65">
                  Legal
                </p>
                <LinkList links={[...site.legal]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
