"use client";

import { ReactNode } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TruncatedCard from "@/components/ui/TruncatedCard";
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

const depoimentos = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/depoimentos/depoimento-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Depoimento de cliente ${i + 1}`,
}));

const antesDepois = Array.from({ length: 11 }, (_, i) => ({
  src: `/images/antes-depois/antes-depois-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Resultado antes e depois ${i + 1}`,
}));

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

        {/* Testimonial Grid — truncated */}
        <TruncatedCard maxHeight={480}>
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-2 gap-3 mb-4"
          >
            {depoimentos.map((dep) => (
              <StaggerItem key={dep.src}>
                <div className="bg-white rounded-xl border border-border p-2 overflow-hidden">
                  <Image
                    src={dep.src}
                    alt={dep.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </TruncatedCard>

        {/* Reinforcement */}
        <ScrollReveal className="text-center mb-14 mt-6">
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

        {/* Before/After Block — truncated */}
        <div className="text-center mb-8">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-text leading-tight">
              Resultados reais de clientes da Dani
            </h3>
          </ScrollReveal>
        </div>

        <TruncatedCard maxHeight={500}>
          <StaggerContainer staggerDelay={0.12} className="space-y-4">
            {antesDepois.map((item) => (
              <StaggerItem key={item.src}>
                <div className="bg-white rounded-xl border border-border p-3 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </TruncatedCard>
      </div>
    </section>
  );
}
