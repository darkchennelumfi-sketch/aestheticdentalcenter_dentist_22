import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { site } from "@/lib/site";
import { slugify } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dental Blog", href: "/blog" },
          { label: post.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-mist/75">
          <span className="inline-flex items-center gap-2">
            <Clock3 className="size-3.5 text-sky" />
            {post.readTime}
          </span>
          <span className="size-1 rounded-full bg-mist/30" />
          <span>Educational article</span>
        </div>
      </PageHero>

      <section className="noise relative overflow-hidden bg-porcelain py-16 text-ink md:py-24">
        <div
          className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl font-display text-2xl leading-[1.4] text-ink/80 md:text-[1.75rem]">
                {post.intro}
              </p>
            </Reveal>

            <div className="mt-10 max-w-2xl border-t border-ink/10 pt-10">
              {post.sections.map((section) => (
                <section
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="mt-10 scroll-mt-28 first:mt-0"
                >
                  <h2 className="font-display text-3xl leading-[1.08] text-ink md:text-4xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-[15px] leading-[1.85] text-ink/65"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-5 space-y-2.5 border-l border-azure/30 pl-5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-[14px] leading-relaxed text-ink/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 max-w-2xl rounded-3xl border border-azure/20 bg-azure/[0.07] p-6 md:p-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ocean">
                The takeaway
              </p>
              <p className="mt-3 font-display text-2xl leading-[1.3] text-ink">
                {post.takeaway}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-3.5" />
                All articles
              </Link>
              <p className="max-w-sm text-[11px] leading-relaxed text-ink/65">
                This article is general education. It does not replace an
                examination or individual advice from your dentist.
              </p>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-ink/10 bg-white/45 p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/65">
                  In this article
                </p>
                <nav aria-label="Article contents" className="mt-4 flex flex-col">
                  {post.sections.map((section) => (
                    <a
                      key={section.heading}
                      href={`#${slugify(section.heading)}`}
                      className="border-b border-ink/10 py-3 text-[12px] leading-snug text-ink/65 transition-colors hover:text-ocean"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-3xl bg-ink p-6 text-porcelain">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-azure/20 blur-[60px]"
                  aria-hidden="true"
                />
                <p className="relative text-[9px] font-semibold uppercase tracking-[0.22em] text-sky">
                  Have a question?
                </p>
                <p className="relative mt-3 font-display text-2xl leading-tight">
                  Your smile is specific. So is the answer.
                </p>
                <p className="relative mt-3 text-[12px] leading-relaxed text-mist/75">
                  If something in this article sounds familiar, our team can
                  help you decide what to do next.
                </p>
                <div className="relative mt-5 space-y-2">
                  <Button asChild size="sm" className="w-full">
                    <a
                      href={site.scheduleUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Request an appointment
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                  <a
                    href={site.phoneHref}
                    className="flex h-10 items-center justify-center gap-2 rounded-full border border-white/15 text-[12px] font-semibold text-porcelain/80 transition-colors hover:border-sky/40 hover:text-porcelain"
                  >
                    <Phone className="size-3.5 text-sky" />
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="noise relative overflow-hidden bg-ice py-20 text-ink md:py-24">
        <div className="shell relative">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-ocean">Keep reading</span>
              <h2 className="mt-4 text-4xl leading-[0.98] text-ink sm:text-5xl">
                More from the <span className="italic text-azure">journal.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-ink"
            >
              View all articles
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/55 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/20 hover:bg-white/85"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ocean">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-[1.1] text-ink">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors group-hover:text-ocean">
                    Read more
                    <ArrowUpRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
