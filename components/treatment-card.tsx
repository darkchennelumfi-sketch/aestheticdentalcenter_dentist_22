import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Treatment } from "@/lib/services";

type TreatmentCardProps = {
  treatment: Treatment;
  index: number;
};

export function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  return (
    <Link
      href={`/services/${treatment.categorySlug}/${treatment.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/20 hover:bg-white/80 hover:shadow-[0_30px_60px_-38px_rgba(7,28,42,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-porcelain/85 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight text-ink">
            {treatment.name}
          </h3>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/65 transition-all duration-300 group-hover:border-azure group-hover:bg-azure group-hover:text-ink">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-ink/65">
          {treatment.short}
        </p>
      </div>
    </Link>
  );
}
