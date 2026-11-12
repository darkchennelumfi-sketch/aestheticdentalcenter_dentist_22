"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 14,
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setPosition({
      x: (x / rect.width) * strength * 2,
      y: (y / rect.height) * strength * 2,
    });
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
