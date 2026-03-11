"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { CHECKOUT_URL, CTA_SUBTEXT } from "@/lib/constants";

const recapLines = [
  { icon: "✅", text: "Curso completo — 4 módulos práticos" },
  { icon: "🎁", text: "4 bônus exclusivos inclusos" },
  { icon: "🔒", text: "Garantia incondicional de 7 dias" },
  { icon: "♾️", text: "Acesso vitalício" },
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
            <ul className="space-y-3 mb-6">
              {recapLines.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-lg shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium text-text">
                    {item.text}
                  </span>
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
            em casa, em 19 minutos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
