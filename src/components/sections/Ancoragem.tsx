"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTAButton from "@/components/ui/CTAButton";
import { ANCORAGEM_ITEMS, CHECKOUT_URL } from "@/lib/constants";

export default function Ancoragem() {
  return (
    <section className="py-20 bg-bg relative overflow-hidden">
      {/* Gradient blob gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[420px] mx-auto px-5 relative z-10">
        <div className="text-center mb-10">
          <SectionLabel text="OFERTA ESPECIAL" />
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-text mt-4 leading-tight">
              Se você fosse comprar tudo separadamente, você investiria:
            </h2>
          </ScrollReveal>
        </div>

        {/* Item list */}
        <ScrollReveal>
          <div className="bg-white rounded-xl p-6 border border-border shadow-[0_2px_12px_rgba(61,43,31,0.06)]">
            <div className="flex flex-col gap-3">
              {ANCORAGEM_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm text-text">{item.name}</span>
                  <span className="text-accent font-bold text-sm">
                    R${item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="border-t border-border my-4" />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-bold text-text">VALOR TOTAL:</span>
              <AnimatedCounter
                target={855}
                prefix="R$"
                className="text-2xl font-extrabold text-accent"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Professional comparison */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-text-secondary mt-8 text-sm leading-relaxed">
            Mas se você fizesse 21 sessões de autodrenagem
            profissional...
          </p>
          <p className="text-center font-bold text-text text-lg mt-2">
            21 × R$300 = R$6.300
          </p>
        </ScrollReveal>

        {/* Transition */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-secondary mt-6 text-sm leading-relaxed">
            Mas, porque eu quero que toda mulher possa cuidar do seu corpo
            com prazer, você não vai pagar nem perto disso.
          </p>
          <p className="text-center text-text-secondary mt-3 text-sm leading-relaxed">
            Somente para você que chegou até aqui, o acesso completo ao
            Desafio Drena 21, incluindo todos os 4 bônus exclusivos, sai por:
          </p>
        </ScrollReveal>

        {/* Price reveal */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-8">
            <p className="text-text-secondary text-sm">
              De <span className="line-through">R$855</span> por apenas:
            </p>
            <p className="text-3xl font-extrabold text-cta mt-2">
              12x R$19,70
            </p>
            <p className="text-text-secondary text-sm mt-1">
              ou R$197 à vista
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-text font-medium text-sm mt-6 leading-relaxed">
            Pelo preço de UMA sessão profissional, aprenda a fazer sozinha
            pra sempre.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-8">
            <CTAButton
              text="GARANTIR MINHA VAGA POR APENAS R$197"
              subtext="Acesso imediato + vitalício · Garantia incondicional de 7 dias"
              href={CHECKOUT_URL}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
