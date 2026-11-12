import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] text-porcelain outline-none transition-colors duration-300 placeholder:text-mist/75 focus:border-sky focus-visible:outline-none aria-[invalid=true]:border-red-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
