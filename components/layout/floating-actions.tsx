"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";

import { site } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="fixed inset-x-4 bottom-4 z-40 md:hidden"
        >
          <div className="glass-deep flex items-center gap-2 rounded-full p-1.5 pl-4 shadow-soft">
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-mist/75">
                Ready when you are
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-1.5 text-[12px] font-semibold text-porcelain"
              >
                <Phone className="size-3 text-sky" />
                {site.phoneDisplay}
              </a>
            </div>
            <a
              href={site.scheduleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-porcelain px-5 text-[11px] font-semibold text-ink"
            >
              Book a visit
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
