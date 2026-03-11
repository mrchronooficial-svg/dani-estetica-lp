'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTAButton from '@/components/ui/CTAButton';
import HoverCard from '@/components/ui/HoverCard';
import GradientText from '@/components/ui/GradientText';
import IconCircle from '@/components/ui/IconCircle';
import { CTA_SUBTEXT } from '@/lib/constants';
import { Check } from 'lucide-react';

const FUNCIONA_ITEMS = [
  {
    title: 'Mesmo que você nunca tenha feito massagem',
    desc: 'Os vídeos são passo a passo, como se estivesse no espaço da Dani.',
  },
  {
    title: 'Mesmo que você ache que "nada funciona no seu corpo"',
    desc: 'Autodrenagem é uma técnica com resultado logo na primeira sessão. Grande parte do inchaço é fluido retido nos tecidos — e a drenagem resolve isso diretamente.',
  },
  {
    title: 'Mesmo que você tenha apenas 19 minutos por dia',
    desc: 'É exatamente o tempo que você precisa. Menos que um episódio de série.',
  },
];

export default function Produto() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <SectionLabel text="APRESENTANDO" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-extrabold mt-2 mb-4">
            <GradientText variant="primary">Desafio Drena 21</GradientText>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            A técnica profissional de autodrenagem — a mesma que custa de
            R$300 a R$350 por sessão — adaptada para você fazer em casa todos
            os dias. Você realizará autodrenagem de qualquer lugar que esteja
            e obterá um resultado satisfatório e rápido.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Não é drenagem linfática comum. É drenagem + modelagem. Não apenas
            desincha, mas <strong>MODELA</strong> seu corpo. Drena o líquido
            retido E esculpe suas curvas.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-text-secondary text-sm leading-relaxed mb-8">
            Adaptada pela Dani ao longo de 15 anos para ser simples o suficiente
            pra fazer sozinha e eficiente o suficiente pra ver resultado rápido.
          </p>
        </ScrollReveal>

        {/* Funciona Mesmo Que */}
        <ScrollReveal delay={0.1}>
          <h3 className="text-lg font-bold text-text mb-6">
            O Desafio Drena 21 funciona para você:
          </h3>
        </ScrollReveal>

        <div className="flex flex-col gap-5 mb-10">
          {FUNCIONA_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <HoverCard accentBar="accent" glow>
                <div className="flex items-start gap-3">
                  <IconCircle icon={Check} variant="accent" size="sm" />
                  <p className="text-text text-sm leading-relaxed">
                    <strong>{item.title}</strong> — {item.desc}
                  </p>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <CTAButton
            text="QUERO COMEÇAR O DESAFIO AGORA"
            subtext={CTA_SUBTEXT}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
