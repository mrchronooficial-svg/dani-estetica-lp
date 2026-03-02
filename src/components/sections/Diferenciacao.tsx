"use client";

import { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import HoverCard from "@/components/ui/HoverCard";
import IconCircle from "@/components/ui/IconCircle";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import { NAO_E, E_SIM } from "@/lib/constants";
import { X, Check } from "lucide-react";

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

export default function Diferenciacao() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="O DIFERENCIAL" />
          <h2 className="text-2xl font-extrabold text-text leading-tight">
            O Desafio Drena 21 é diferente de tudo que você já tentou.
          </h2>
        </div>

        {/* NÃO É */}
        <StaggerContainer staggerDelay={0.1} className="space-y-3 mb-6">
          {NAO_E.map((item, i) => (
            <StaggerItem key={i}>
              <HoverCard accentBar="danger">
                <div className="flex gap-3 items-start">
                  <IconCircle icon={X} variant="cta" size="sm" />
                  <p className="text-sm text-text leading-relaxed">
                    {parseBold(item)}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* É SIM */}
        <StaggerContainer staggerDelay={0.1} className="space-y-3">
          {E_SIM.map((item, i) => (
            <StaggerItem key={i}>
              <HoverCard accentBar="success">
                <div className="flex gap-3 items-start">
                  <IconCircle icon={Check} variant="accent" size="sm" />
                  <p className="text-sm text-text leading-relaxed">
                    {parseBold(item)}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
