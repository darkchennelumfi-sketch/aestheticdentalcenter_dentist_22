import { ArrowUpRight, Clock3, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section
      id="visit"
      className="noise relative overflow-hidden bg-porcelain py-20 text-ink md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-20 size-96 rounded-full bg-azure/15 blur-[100px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-ocean">We want to meet you</span>
            <h2 className="mt-6 text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              Visit <span className="italic text-azure">us!</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/65">
              Find us on West Divide Avenue in Bismarck. Use the driving
              directions below, and our team will be ready to welcome you when
              you arrive.
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex items-start gap-4 border-b border-ink/10 pb-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/60 text-ocean">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                    Our location
                  </p>
                  <h3 className="mt-1.5 font-sans text-[15px] font-medium leading-relaxed text-ink">
                    {site.address.line1} {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.state}{" "}
                    {site.address.zip}
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-ink/10 pb-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/60 text-ocean">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                    Call us
                  </p>
                  <h3 className="mt-1.5 font-sans text-[15px] font-medium text-ink">
                    <a
                      href={site.phoneHref}
                      className="transition-colors hover:text-ocean"
                    >
                      {site.phoneDisplayAlt}
                    </a>
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/60 text-ocean">
                  <Clock3 className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/65">
                    Our hours
                  </p>
                  <div className="mt-2 grid max-w-sm gap-1.5 text-[13px] text-ink/70">
                    {site.hours.map((hour) => (
                      <div
                        key={hour.day}
                        className="flex items-baseline justify-between gap-6"
                      >
                        <span>{hour.day}</span>
                        <span className="h-px flex-1 bg-ink/10" />
                        <span className="tabular-nums">{hour.time}</span>
                      </div>
                    ))}
                    <p className="pt-1 text-[11px] text-ink/65">
                      Closed {site.closedDays.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation className="size-4" />
                  Driving directions
                </a>
              </Button>
              <Button asChild variant="outline-dark">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  Call us
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-sand shadow-soft">
              <div className="relative h-[24rem] sm:h-[30rem] lg:h-full lg:min-h-[36rem]">
                <iframe
                  title="Map showing Aesthetic Dental Center at 1207 West Divide Avenue, Bismarck, ND"
                  src={site.mapEmbedUrl}
                  className="absolute inset-0 size-full grayscale-[20%] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="glass-light absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-porcelain">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight text-ink">
                      Aesthetic Dental Center
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink/65">
                      {site.addressOneLine}
                    </p>
                  </div>
                </div>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ocean"
                >
                  Open in Maps
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
