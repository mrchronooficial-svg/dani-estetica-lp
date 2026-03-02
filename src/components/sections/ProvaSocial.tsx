"use client";

import { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";

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

const testimonials = Array.from({ length: 6 }, (_, i) => i + 1);
const beforeAfter = Array.from({ length: 3 }, (_, i) => i + 1);

export default function ProvaSocial() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="RESULTADOS REAIS" />
          <h2 className="text-2xl font-extrabold text-text leading-tight">
            {parseBold(
              "Veja o que **mulheres comuns**, que estavam na mesma situação que você, estão dizendo:"
            )}
          </h2>
        </div>

        {/* Testimonial Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 gap-3 mb-10"
        >
          {testimonials.map((num) => (
            <StaggerItem key={num}>
              <div className="bg-white rounded-xl border border-border p-2">
                <div className="bg-primary-light/30 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-text-secondary text-sm">
                    Depoimento em breve
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Reinforcement */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-text-secondary text-sm leading-relaxed">
            Essas são{" "}
            <strong className="font-bold text-text">
              mulheres reais
            </strong>
            , com rotinas reais, que dedicaram apenas{" "}
            <strong className="font-bold text-text">
              15 minutos por dia
            </strong>{" "}
            ao próprio corpo.
          </p>
        </ScrollReveal>

        {/* Before/After Block */}
        <div className="text-center mb-8">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-text leading-tight">
              Resultados reais de clientes da Dani
            </h3>
          </ScrollReveal>
        </div>

        <StaggerContainer staggerDelay={0.12} className="space-y-4">
          {beforeAfter.map((num) => (
            <StaggerItem key={num}>
              <div className="bg-white rounded-xl border border-border p-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary-light/30 rounded-lg h-40 flex flex-col items-center justify-center">
                    <span className="text-text-secondary text-xs font-medium uppercase tracking-wide mb-1">
                      Antes
                    </span>
                    <span className="text-text-secondary/50 text-xs">
                      Foto {num}
                    </span>
                  </div>
                  <div className="bg-primary-light/30 rounded-lg h-40 flex flex-col items-center justify-center">
                    <span className="text-text-secondary text-xs font-medium uppercase tracking-wide mb-1">
                      Depois
                    </span>
                    <span className="text-text-secondary/50 text-xs">
                      Foto {num}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
