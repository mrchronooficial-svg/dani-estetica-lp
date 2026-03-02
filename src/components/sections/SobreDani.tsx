"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageReveal from "@/components/ui/ImageReveal";
import { CREDENCIAIS } from "@/lib/constants";

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function SobreDani() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <div className="text-center mb-8">
          <SectionLabel text="QUEM É A DANI" />
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-text mt-4 leading-tight">
              {parseBold(
                "Quem é **Dani**, a esteticista que vai te ensinar a **transformar seu corpo**?"
              )}
            </h2>
          </ScrollReveal>
        </div>

        {/* Photo placeholder */}
        <ScrollReveal delay={0.1}>
          <ImageReveal className="rounded-2xl mb-8">
            <div className="bg-primary-light rounded-2xl h-96 flex items-center justify-center">
              <span className="text-text-secondary text-sm">Foto da Dani</span>
            </div>
          </ImageReveal>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={0.2}>
          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            Você não está aprendendo com uma &quot;influencer&quot; que vende
            teoria. Você está aprendendo com quem transforma corpos todos os
            dias com as próprias mãos:
          </p>
        </ScrollReveal>

        {/* Credentials */}
        <div className="flex flex-col gap-4">
          {CREDENCIAIS.map((cred, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <p className="text-sm text-text leading-relaxed">
                  {parseBold(cred)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing */}
        <ScrollReveal delay={0.3}>
          <p className="font-bold text-text text-center mt-8">
            Aprenda com quem faz, não com quem fala.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
