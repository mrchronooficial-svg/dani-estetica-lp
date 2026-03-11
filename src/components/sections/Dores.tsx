'use client';
import { ReactNode } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import HoverCard from '@/components/ui/HoverCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GradientText from '@/components/ui/GradientText';
import IconCircle from '@/components/ui/IconCircle';
import { DORES } from '@/lib/constants';
import {
  Droplets,
  FlaskConical,
  Shirt,
  Clock,
  Eye,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const DORES_ICONS: LucideIcon[] = [
  Droplets,
  FlaskConical,
  Shirt,
  Clock,
  Eye,
];

function parseBold(text: string): ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Dores() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-center text-text mb-8">
            Você se identifica com alguma dessas{' '}
            <GradientText>situações</GradientText>?
          </h2>
        </ScrollReveal>

        <StaggerContainer className="flex flex-col gap-4">
          {DORES.map((dor, index) => (
            <StaggerItem key={index}>
              <HoverCard>
                <div className="flex items-start gap-3">
                  <IconCircle
                    icon={DORES_ICONS[index]}
                    variant="accent"
                    size="sm"
                  />
                  <p className="text-sm text-text leading-relaxed">
                    {parseBold(dor)}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Absolvição */}
        <ScrollReveal delay={0.1} className="mt-10">
          <p className="text-xl font-bold text-text text-center mb-4">
            A verdade é que a culpa{' '}
            <strong>NÃO É SUA.</strong>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Somente dietas e exercícios não vão desinchar o seu corpo. Falta o
            essencial: a <strong>drenagem</strong>. O que <strong>incha</strong>{' '}
            seu corpo, o que dá a sensação de <strong>peso</strong> e{' '}
            <strong>desconforto</strong> o dia inteiro, são os{' '}
            <strong>fluidos retidos nos seus tecidos</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            E sabe o que resolve retenção de líquido?{' '}
            <strong>Drenagem.</strong> A mesma técnica que esteticistas
            profissionais cobram de R$300 a R$350 por sessão para fazer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-text-secondary text-sm leading-relaxed">
            A diferença é que agora{' '}
            <strong>você pode fazer em si mesma.</strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
