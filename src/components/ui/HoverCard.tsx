"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const accentBarColors = {
  primary: "bg-primary",
  accent: "bg-accent",
  cta: "bg-cta",
  success: "bg-accent",
  danger: "bg-cta",
} as const;

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  accentBar?: keyof typeof accentBarColors;
}

export default function HoverCard({
  children,
  className = "",
  glow = false,
  accentBar,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`bg-white rounded-xl border border-border overflow-hidden
        shadow-[0_2px_12px_rgba(61,43,31,0.06)]
        hover:shadow-lg transition-shadow duration-300
        ${glow ? "card-glow-hover" : ""}
        ${className}`}
    >
      {accentBar && (
        <div className={`h-1 ${accentBarColors[accentBar]}`} />
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}
