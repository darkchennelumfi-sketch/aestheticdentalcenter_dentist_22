import { Star } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type RatingProps = {
  className?: string;
  dark?: boolean;
  compact?: boolean;
};

export function Rating({ className, dark = false, compact = false }: RatingProps) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-label={`${site.rating} average rating on Google`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "size-3.5 fill-current",
              index < 4 ? "text-azure" : "text-azure/45",
            )}
          />
        ))}
      </div>
      <p
        className={cn(
          "text-[11px] font-medium tracking-[0.02em]",
          dark ? "text-ink/65" : "text-mist",
        )}
      >
        <span className="font-semibold">{site.rating}</span> average rating
        {!compact && " on Google"}
      </p>
    </div>
  );
}
