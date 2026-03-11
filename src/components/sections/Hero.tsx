'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import GradientText from '@/components/ui/GradientText';
import { CTA_SUBTEXT } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-16 pb-16">
      {/* Gradient blobs */}
      <div
        className="blob-float absolute -top-20 -right-20 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, #D4A59A 0%, transparent 70%)',
          opacity: 0.35,
        }}
      />
      <div
        className="blob-float absolute -bottom-20 -left-20 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)',
          opacity: 0.25,
          animationDelay: '-3s',
        }}
      />

      <div className="relative z-10 max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <SectionLabel text="MÉTODO PROFISSIONAL" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl font-extrabold leading-tight text-text mt-2">
            Até 4cm a menos de cintura{' '}
            <GradientText variant="cta">em 3 sessões.</GradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-base leading-relaxed mt-4">
            Descubra como desinchar e modelar seu corpo em 21 dias em apenas
            19 minutos por dia.
          </p>
        </ScrollReveal>

        {/* Video placeholder — vertical 9:16 */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 mx-auto max-w-[280px] rounded-2xl overflow-hidden border border-border shadow-[0_4px_20px_rgba(61,43,31,0.1)]">
            <div className="relative aspect-[9/16] bg-primary-light flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-cta ml-1" />
              </div>
              <span className="absolute bottom-4 text-text-secondary text-xs font-medium">
                Vídeo de apresentação
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-6">
            <p className="text-sm text-text-secondary">
              ✦ Método de esteticista profissional com 15+ anos e mais de 5.000
              sessões realizadas
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <CTAButton
            text="QUERO DESINCHAR EM 21 DIAS"
            subtext={CTA_SUBTEXT}
            glow={true}
            className="mt-8"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
