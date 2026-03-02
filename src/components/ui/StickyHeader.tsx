"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsVisible(latest < previous || latest < 100);
    setIsScrolled(latest > 100);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 glass-fallback
        ${isScrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-[420px] mx-auto flex items-center justify-between px-5 py-3">
        <span className="text-text font-light text-sm tracking-[0.08em] uppercase">
          Dani Estética
        </span>
        <a
          href="#checkout"
          className="bg-cta hover:bg-cta-hover text-white text-xs font-bold
            py-2 px-4 rounded-full transition-colors duration-300 uppercase tracking-wide"
        >
          Começar agora
        </a>
      </div>
    </motion.header>
  );
}
