"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HoverCard from "@/components/ui/HoverCard";
import { POR_QUE_FUNCIONA } from "@/lib/constants";

export default function PorQueFunciona() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="POR QUE FUNCIONA" />
          <h2 className="text-2xl font-extrabold text-text leading-tight">
            6 razões para confiar no método
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {POR_QUE_FUNCIONA.map((item, i) => (
            <ScrollReveal
              key={item.num}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.05}
            >
              <HoverCard glow>
                <div className="flex items-start gap-4">
                  {/* Number with gradient line */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-3xl font-extrabold text-accent/30 leading-none">
                      {item.num}
                    </span>
                    <div
                      className="w-0.5 h-8 mt-1 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, #C9A96E, transparent)",
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
