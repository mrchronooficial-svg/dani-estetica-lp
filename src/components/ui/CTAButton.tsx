"use client";
import { motion } from "framer-motion";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  href?: string;
  className?: string;
  glow?: boolean;
}

export default function CTAButton({
  text,
  subtext,
  href = "#checkout",
  className = "",
  glow = false,
}: CTAButtonProps) {
  return (
    <div className={`w-full flex flex-col items-center gap-3 ${className}`}>
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`relative w-full group overflow-hidden
          cta-gradient
          text-white font-bold text-sm tracking-wider uppercase
          py-5 px-8 rounded-3xl text-center
          shadow-lg
          transition-shadow duration-300
          cursor-pointer block
          ${glow ? "cta-glow" : ""}
          hover:shadow-[0_8px_30px_rgba(196,106,90,0.4)]`}
      >
        {/* Shimmer sweep */}
        <div
          className="absolute top-0 -left-[100%] h-full w-1/2
            bg-gradient-to-r from-transparent via-white/25 to-transparent
            skew-x-[-20deg]
            group-hover:left-[150%]
            transition-all duration-700 ease-in-out"
        />
        {/* Bottom highlight edge */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
        <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
          {text}
        </span>
      </motion.a>

      {subtext && (
        <p className="text-xs text-text-secondary text-center">
          {subtext}
        </p>
      )}
    </div>
  );
}
