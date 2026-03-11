"use client";

import { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import HorizontalCarousel from "@/components/ui/HorizontalCarousel";
import { MODULOS } from "@/lib/constants";

function parseBold(text: string): ReactNode[] {
  return text.split("**").map((segment, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {segment}
      </strong>
    ) : (
      <span key={i}>{segment}</span>
    )
  );
}

export default function Modulos() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="O QUE VOCÊ VAI RECEBER" />
          <h2 className="text-2xl font-extrabold text-text leading-tight">
            {parseBold(
              "Ao se inscrever agora, você terá acesso imediato a **tudo** que precisa para desinchar e modelar seu corpo"
            )}
          </h2>
        </div>

        {/* Module Cards Carousel */}
        <HorizontalCarousel>
          {MODULOS.map((mod) => (
            <div
              key={mod.num}
              className="bg-white rounded-xl border border-border overflow-hidden h-full"
            >
              {/* Image Placeholder */}
              <div className="bg-primary-light/30 h-40 flex items-center justify-center">
                <span className="text-text-secondary font-medium">
                  Módulo {mod.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-accent text-xs font-medium uppercase tracking-wide">
                  Módulo {mod.num}:
                </span>
                <h3 className="font-bold text-lg text-text mt-1 mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {mod.desc}
                </p>

                {/* Inline Topics */}
                <p className="text-sm text-text mb-4">
                  {mod.items.map((item, j) => (
                    <span key={j}>
                      <span className="text-accent">✦</span> {item}
                      {j < mod.items.length - 1 && ' · '}
                    </span>
                  ))}
                </p>

                {/* Result Highlight */}
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-text">
                    {mod.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </HorizontalCarousel>
      </div>
    </section>
  );
}
