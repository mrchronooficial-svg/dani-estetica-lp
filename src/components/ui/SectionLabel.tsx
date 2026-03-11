"use client";
import { motion } from "framer-motion";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-1.5 px-3 py-1
        bg-accent/10 border border-accent/20 rounded-full
        text-accent text-[10px] font-medium tracking-widest uppercase
        mb-3"
    >
      <span>✦</span>
      {text}
    </motion.div>
  );
}
