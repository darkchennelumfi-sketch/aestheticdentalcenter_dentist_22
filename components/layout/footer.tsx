import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Rating } from "@/components/brand/rating";
import { footerExplore, footerServices } from "@/lib/nav";
import { site } from "@/lib/site";

const socialLinks = [
  {
    label: "Facebook",
    href: site.socials.facebook,
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: site.socials.instagram,
    Icon: Instagram,
  },
  {
    label: "YouTube",
    href: site.socials.youtube,
    Icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-azure/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="shell relative pb-24 pt-16 md:pb-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-mist/75">
              Aesthetic Dental Center brings family, cosmetic, restorative,
              and prosthodontic care together in one considered Bismarck
              practice.
            </p>
            <Rating className="mt-6" />
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/12 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:text-sky"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-azure">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {footerExplore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-mist/75 transition-colors hover:text-porcelain"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-azure">
              Care
            </p>
            <ul className="mt-5 space-y-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-mist/75 transition-colors hover:text-porcelain"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/prosthodontist"
                  className="text-[13px] text-mist/75 transition-colors hover:text-porcelain"
                >
                  What is Prosthodontics
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-azure">
              Visit
            </p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-start gap-3 text-[13px] leading-relaxed text-mist/75 transition-colors hover:text-porcelain"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.city}, {site.address.state}{" "}
                {site.address.zip}
              </span>
            </a>
            <a
              href={site.phoneHref}
              className="mt-4 flex items-center gap-3 text-[13px] text-mist/75 transition-colors hover:text-porcelain"
            >
              <Phone className="size-4 shrink-0 text-sky" />
              {site.phoneDisplay}
            </a>
            <div className="mt-4 flex items-start gap-3 text-[13px] leading-relaxed text-mist/75">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-sky" />
              <div className="space-y-1">
                {site.hours.map((hour) => (
                  <p key={hour.day}>
                    <span className="text-mist/85">{hour.day}</span>{" "}
                    {hour.time}
                  </p>
                ))}
                <p className="pt-1 text-mist/70">{site.closedDays}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mist/75">
                Flexible financing
              </p>
              <p className="mt-1.5 font-display text-lg text-porcelain">
                {site.financing.title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-mist/75">
                {site.financing.detail}
              </p>
              <Link
                href="/cherry-financing"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky"
              >
                Learn more
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-mist/70">
            © 2026 Aesthetic Dental Center. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {site.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] text-mist/75 transition-colors hover:text-mist"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-mist/70">
            Design &amp; development by{" "}
            <a
              href="https://www.elevatedds.com/"
              target="_blank"
              rel="noreferrer"
              className="text-mist underline decoration-white/30 underline-offset-4 hover:text-porcelain hover:decoration-white/60"
            >
              Elevate DDS
            </a>
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none relative -mb-6 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 220"
          className="block h-auto w-full text-white/[0.025]"
          role="presentation"
          focusable="false"
        >
          <text
            x="600"
            y="188"
            textAnchor="middle"
            fill="currentColor"
            className="font-display"
            fontSize="216"
            letterSpacing="-0.06em"
          >
            Aesthetic
          </text>
        </svg>
      </div>
    </footer>
  );
}
