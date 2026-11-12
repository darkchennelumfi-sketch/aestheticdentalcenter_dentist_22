import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full resize-y rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-[15px] leading-relaxed text-porcelain outline-none transition-colors duration-300 placeholder:text-mist/75 focus:border-sky focus-visible:outline-none aria-[invalid=true]:border-red-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
