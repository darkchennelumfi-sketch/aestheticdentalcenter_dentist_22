import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dental Blog",
  description:
    "Practical guidance for a healthier smile from Aesthetic Dental Center in Bismarck, ND — prevention, gum health, comfort, and cosmetic care.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Dental blog"
        title={
          <>
            Notes for a
            <br />
            <span className="italic text-sky">healthier smile.</span>
          </>
        }
        description="Clear, practical guidance on prevention, comfort, and the choices that shape a smile. No jargon, no pressure — just useful context for your next decision."
        image="/images/smile-detail.jpg"
        imageAlt="Close-up of a healthy, natural smile"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Dental Blog" }]}
      />

      <section className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-ocean">The journal</span>
              <h2 className="mt-5 max-w-xl text-4xl leading-[0.98] text-ink sm:text-5xl">
                Read a little.
                <br />
                <span className="italic text-azure">Feel more informed.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-ink/65">
              Educational articles from our practice. They are a starting point
              for a conversation, not a substitute for an examination.
            </p>
          </div>

          <Reveal className="mt-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/50 transition-all duration-500 hover:border-ink/20 hover:bg-white/80 hover:shadow-[0_40px_80px_-48px_rgba(7,28,42,0.45)] lg:grid-cols-12"
            >
              <div className="relative min-h-72 lg:col-span-7 lg:min-h-[30rem]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/35 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-porcelain/90 backdrop-blur-md">
                  Featured
                </span>
              </div>

              <div className="flex flex-col justify-between gap-10 p-6 md:p-9 lg:col-span-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-ocean">
                    <span>{featured.category}</span>
                    <span className="size-1 rounded-full bg-ink/20" />
                    <span className="text-ink/65">{featured.readTime}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl leading-[1.02] text-ink md:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    Read the article
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-ink text-porcelain transition-all duration-300 group-hover:bg-azure group-hover:text-ink">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={0.06 + index * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/45 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/20 hover:bg-white/80 hover:shadow-[0_30px_60px_-38px_rgba(7,28,42,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 768px) 32vw, 100vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-ocean">
                      <span>{post.category}</span>
                      <span className="size-1 rounded-full bg-ink/20" />
                      <span className="text-ink/65">{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-[1.08] text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/65">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65 transition-colors group-hover:text-ocean">
                      Read more
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
