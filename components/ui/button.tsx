import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[0.01em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky",
  {
    variants: {
      variant: {
        primary:
          "bg-porcelain text-ink shadow-[0_18px_45px_-24px_rgba(246,242,233,0.7)] hover:bg-white hover:shadow-[0_22px_55px_-22px_rgba(76,168,224,0.55)]",
        accent:
          "bg-azure text-ink shadow-[0_18px_45px_-24px_rgba(76,168,224,0.8)] hover:bg-sky hover:shadow-[0_22px_60px_-20px_rgba(76,168,224,0.7)]",
        outline:
          "border border-white/20 bg-white/[0.04] text-porcelain backdrop-blur-md hover:border-sky/60 hover:bg-white/[0.08] hover:text-white",
        "outline-dark":
          "border border-ink/15 bg-transparent text-ink hover:border-ink/35 hover:bg-ink/[0.04]",
        ghost:
          "text-porcelain/80 hover:bg-white/[0.06] hover:text-porcelain",
        link: "rounded-none p-0 text-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[15px]",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
