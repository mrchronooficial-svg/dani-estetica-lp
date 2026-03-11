"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import IconCircle from "@/components/ui/IconCircle";
import { PARA_QUEM_NAO_E, PARA_QUEM_E } from "@/lib/constants";
import { X, Check } from "lucide-react";

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function ParaQuemE() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <div className="text-center mb-10">
          <SectionLabel text="PARA QUEM É" />
          <h2 className="text-2xl font-extrabold text-text mt-4 leading-tight">
            {parseBold("Até aqui fez sentido, mas... Será que o ")}
            <GradientText>Desafio Drena 21</GradientText>
            {" é para você?"}
          </h2>
        </div>

        {/* NOT for you */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-[0_2px_12px_rgba(61,43,31,0.06)] mb-10">
          <div className="h-1.5 bg-cta" />
          <div className="p-6">
            <p className="text-sm font-bold text-text uppercase tracking-wider mb-4">
              NÃO é para você se:
            </p>
            <StaggerContainer className="flex flex-col gap-3">
              {PARA_QUEM_NAO_E.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <IconCircle icon={X} variant="cta" size="sm" />
                    <p className="text-sm text-text leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* IS for you */}
        <div className="bg-accent/5 rounded-2xl border border-accent/20 overflow-hidden shadow-[0_2px_12px_rgba(61,43,31,0.06)]">
          <div className="h-1.5 bg-accent" />
          <div className="p-6">
            <p className="text-sm font-bold text-text uppercase tracking-wider mb-4">
              É A SOLUÇÃO DEFINITIVA SE VOCÊ:
            </p>
            <StaggerContainer className="flex flex-col gap-3">
              {PARA_QUEM_E.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <IconCircle icon={Check} variant="accent" size="sm" />
                    <p className="text-sm text-text leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
