import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="noise relative flex min-h-[78vh] items-center overflow-hidden bg-ink pb-24 pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute -right-40 top-0 size-[42rem] rounded-full bg-azure/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 size-[32rem] rounded-full bg-ocean/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="font-display text-[8rem] leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(165,221,247,0.25)] sm:text-[12rem]"
            aria-hidden="true"
          >
            404
          </p>
          <span className="eyebrow justify-center text-azure">
            Page not found
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-[0.94] text-porcelain sm:text-6xl md:text-7xl">
            This page slipped
            <br />
            <span className="italic text-sky">away.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-mist/75">
            The link may have changed, or the page may no longer exist. Your
            smile is still in the right place — let us help you find the way
            back.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="size-4" />
                Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact our team
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] text-mist/75">
            <Link
              href="/services"
              className="transition-colors hover:text-sky"
            >
              Explore services
            </Link>
            <span className="size-1 rounded-full bg-mist/25" aria-hidden="true" />
            <Link
              href="/new-patients"
              className="transition-colors hover:text-sky"
            >
              New patients
            </Link>
            <span className="size-1 rounded-full bg-mist/25" aria-hidden="true" />
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-sky"
            >
              <Phone className="size-3.5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
