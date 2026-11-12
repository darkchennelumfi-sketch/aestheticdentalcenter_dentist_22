import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
  href?: string;
};

export function Logo({
  variant = "light",
  className,
  compact = false,
  href = "/",
}: LogoProps) {
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-3",
        variant === "light" ? "text-porcelain" : "text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-500",
          variant === "light"
            ? "border-white/25 group-hover:border-sky/60"
            : "border-ink/20 group-hover:border-azure/70",
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          <path
            d="M7.2 17.8c3 4.6 14.6 4.6 17.6 0"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <path
            d="M11.8 17.4c2-2.9 6.4-2.9 8.4 0"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M23.2 7.4l.55 1.6 1.6.55-1.6.55-.55 1.6-.55-1.6-1.6-.55 1.6-.55.55-1.6z"
            fill="currentColor"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-azure shadow-[0_0_10px_rgba(76,168,224,0.9)]" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[22px] leading-none tracking-[-0.03em]">
            Aesthetic<span className="text-azure">.</span>
          </span>
          <span
            className={cn(
              "mt-1.5 text-[8px] font-semibold uppercase tracking-[0.33em]",
              variant === "light" ? "text-mist/80" : "text-ink/65",
            )}
          >
            Dental Center
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Aesthetic Dental Center — home"
      className="inline-flex rounded-md"
    >
      {content}
    </Link>
  );
}
