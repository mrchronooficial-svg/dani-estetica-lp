'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TruncatedCardProps {
  maxHeight: number;
  children: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
}

export default function TruncatedCard({
  maxHeight,
  children,
  expandLabel = 'Ver mais',
  collapseLabel = 'Ver menos',
}: TruncatedCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <motion.div
        animate={{ height: expanded ? 'auto' : maxHeight }}
        initial={false}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {!expanded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="block mx-auto mt-2 text-sm font-medium text-cta hover:text-cta-hover transition-colors"
      >
        {expanded ? collapseLabel : expandLabel}
      </button>
    </div>
  );
}
