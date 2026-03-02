"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { CHECKOUT_URL, CTA_SUBTEXT } from "@/lib/constants";

const recapItems = [
  { name: "Desafio Drena 21 Completo", value: "R$497" },
  { name: "Bônus: Protocolo Rosto de Cristal", value: "R$97" },
  { name: "Bônus: Ritual Energético Detox", value: "R$67" },
  { name: "Bônus: Guia Desincha Já (c/ nutricionista)", value: "R$127" },
  { name: "Bônus: Hidratação Profunda Pro", value: "R$67" },
];

export default function OfertaFinal() {
  return (
    <section className="relative overflow-hidden bg-bg py-20">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-8">
            <SectionLabel text="ÚLTIMA CHANCE" />
            <h2 className="text-2xl font-extrabold text-text leading-tight">
              Esta é a sua última chance de garantir seu acesso com essa oferta
              exclusiva
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(61,43,31,0.06)] mb-8">
            <p className="text-sm font-bold text-text mb-4 text-center">
              Tudo que você recebe:
            </p>

            <ul className="space-y-3 mb-6">
              {recapItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 shrink-0 mt-0.5">✅</span>
                  <div className="flex-1 flex justify-between items-baseline gap-2">
                    <span className="text-sm text-text">{item.name}</span>
                    <span className="text-xs text-text-secondary whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-4 text-center">
              <p className="text-sm text-text-secondary mb-1">
                Valor total:{" "}
                <span className="line-through text-text-secondary/60">
                  R$855
                </span>
              </p>
              <p className="text-sm text-text-secondary mb-2">
                Hoje por apenas:
              </p>
              <p className="text-3xl font-extrabold text-cta mb-1">
                12x R$19,70
              </p>
              <p className="text-sm text-text-secondary">
                ou R$197 à vista
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <CTAButton
            text="QUERO MINHA VAGA COM ACESSO IMEDIATO E VITALÍCIO"
            subtext={CTA_SUBTEXT}
            href={CHECKOUT_URL}
            glow={true}
          />

          <p className="text-center text-xs text-text-secondary mt-6 leading-relaxed">
            Isso é menos que R$1 por dia para transformar seu corpo com prazer,
            em casa, em 15 minutos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
