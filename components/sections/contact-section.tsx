import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="noise relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-[34rem] rounded-full bg-azure/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-ocean/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow text-azure">Ask us anything</span>
          <h2 className="mt-6 max-w-md text-5xl leading-[0.98] text-porcelain sm:text-6xl">
            Fill the <span className="italic text-sky">form.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mist/70">
            Tell us what is on your mind — a question, a concern, or a visit you
            would like to plan. Our team will take it from there.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="glass group flex items-start gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-sky/30"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                <MapPin className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Find us
                </span>
                <span className="mt-1 block text-[13px] leading-relaxed text-porcelain/85">
                  {site.addressOneLine}
                </span>
              </span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-mist/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
            </a>

            <a
              href={site.phoneHref}
              className="glass group flex items-start gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-sky/30"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                <Phone className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Call us
                </span>
                <span className="mt-1 block text-[13px] text-porcelain/85">
                  {site.phoneDisplayAlt}
                </span>
              </span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-mist/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
            </a>

            <div className="glass flex items-start gap-4 rounded-2xl p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                <Clock3 className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/75">
                  Office hours
                </span>
                <span className="mt-1.5 grid gap-1 text-[12px] text-porcelain/75">
                  {site.hours.map((hour) => (
                    <span key={hour.day} className="flex justify-between gap-4">
                      <span className="text-mist/75">{hour.day}</span>
                      <span>{hour.time}</span>
                    </span>
                  ))}
                </span>
              </span>
            </div>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-mist/70">
            Prefer to speak with someone? Call{" "}
            <a
              href={site.phoneHref}
              className="text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky"
            >
              {site.phoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href={site.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky"
            >
              schedule online
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="glass relative rounded-3xl p-5 sm:p-8 md:p-10">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="font-display text-2xl text-porcelain">
                  Send a message
                </p>
                <p className="mt-1 text-[11px] text-mist/75">
                  All fields are required.
                </p>
              </div>
              <span className="hidden rounded-full border border-sky/20 bg-sky/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-sky sm:block">
                Replies during office hours
              </span>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
