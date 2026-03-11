'use client';

import { useRef, useState, useEffect, ReactNode, Children } from 'react';
import { motion } from 'framer-motion';

interface HorizontalCarouselProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalCarousel({ children, className = '' }: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = Children.count(children);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth
        : 1;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, childCount - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [childCount]);

  return (
    <div className={className}>
      <motion.div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {Children.map(children, (child) => (
          <div className="snap-center shrink-0 w-[85vw] max-w-[360px]">
            {child}
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: childCount }).map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para item ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? 'bg-cta' : 'bg-border'
            }`}
            onClick={() => {
              const container = scrollRef.current;
              if (!container || !container.firstElementChild) return;
              const cardWidth = (container.firstElementChild as HTMLElement).offsetWidth;
              const gap = 16;
              container.scrollTo({
                left: i * (cardWidth + gap),
                behavior: 'smooth',
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}
