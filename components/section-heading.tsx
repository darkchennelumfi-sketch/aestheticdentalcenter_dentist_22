import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "eyebrow",
          dark ? "text-ocean" : "text-azure",
          align === "center" && "justify-center",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 max-w-3xl text-balance text-4xl leading-[0.98] sm:text-5xl lg:text-6xl",
          dark ? "text-ink" : "text-porcelain",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {copy && (
        <div
          className={cn(
            "mt-6 max-w-xl text-[15px] leading-relaxed",
            dark ? "text-ink/65" : "text-mist",
            align === "center" && "mx-auto",
          )}
        >
          {copy}
        </div>
      )}
    </div>
  );
}
