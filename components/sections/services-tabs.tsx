"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { categories } from "@/lib/services";

export function ServicesTabs() {
  return (
    <Tabs defaultValue={categories[0].slug} className="w-full">
      <TabsList aria-label="Dental care categories">
        {categories.map((category) => (
          <TabsTrigger key={category.slug} value={category.slug}>
            {category.shortName}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.slug} value={category.slug}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-5">
              <Image
                src={category.image}
                alt={category.imageAlt}
                width={900}
                height={1100}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-72 w-full object-cover lg:h-full lg:min-h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-sky">
                  {category.tagline}
                </p>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-porcelain/75">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-2 sm:grid-cols-2">
                {category.treatments.map((treatment, index) => (
                  <Link
                    key={treatment.slug}
                    href={`/services/${category.slug}/${treatment.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-sky/30 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-mist/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="size-4 text-mist/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
                    </div>
                    <div className="mt-8">
                      <h3 className="font-display text-2xl leading-tight text-porcelain">
                        {treatment.menuName ?? treatment.name}
                      </h3>
                      <p className="mt-2 text-[12px] leading-relaxed text-mist/75">
                        {treatment.short}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sky/20 bg-sky/[0.06] p-5 sm:flex-row sm:items-center">
                <p className="max-w-md text-[12px] leading-relaxed text-mist/70">
                  Not sure which appointment is right? Start with a
                  conversation. We will help you find the way in.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-porcelain px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-white"
                >
                  Ask our team
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
