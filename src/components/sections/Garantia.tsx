"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import GarantiaSeal from "@/components/ui/GarantiaSeal";
import { CHECKOUT_URL } from "@/lib/constants";

export default function Garantia() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
            <GarantiaSeal className="mb-6" />

            <h2 className="text-xl font-extrabold text-text uppercase mb-6 leading-tight">
              RISCO ZERO: A ÚNICA COISA QUE VOCÊ TEM A PERDER É O INCHAÇO
            </h2>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Eu confio tanto no poder do Desafio Drena 21 e na capacidade
              de transformar seu corpo que o risco é todo meu.
            </p>

            <p className="text-sm text-text leading-relaxed mb-4">
              Você tem{" "}
              <strong>7 dias de Garantia Incondicional.</strong>
            </p>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Acesse o curso, assista às aulas, comece a praticar.
              Se, por qualquer motivo, você achar que o desafio não é
              para você, ou se simplesmente mudar de ideia, basta pedir.
            </p>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Devolveremos{" "}
              <strong className="text-text">100% do seu investimento</strong>,
              sem perguntas e sem burocracia.
            </p>

            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Você tem 7 dias para testar o método que já transformou
              centenas de corpos. Se não funcionar, você não paga.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs text-text-secondary font-medium">
                🔒 Compra 100% segura
              </span>
            </div>

            <CTAButton
              text="SIM! QUERO MODELAR MEU CORPO EM CASA"
              subtext="Acesso imediato · Garantia 7 dias · 12x R$19,70"
              href={CHECKOUT_URL}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
