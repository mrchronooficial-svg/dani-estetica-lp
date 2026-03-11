'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import ImageReveal from '@/components/ui/ImageReveal';
import QuoteBox from '@/components/ui/QuoteBox';

export default function Storytelling() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[420px] mx-auto px-5">
        <ScrollReveal>
          <SectionLabel text="A MINHA HISTÓRIA" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl font-bold leading-tight text-text mt-2 mb-8">
            Como eu saí da frustração e descobri o segredo que transformou meu
            corpo — e o de centenas de clientes.
          </h2>
        </ScrollReveal>

        {/* Foto placeholder */}
        <ScrollReveal delay={0.2}>
          <ImageReveal className="rounded-2xl mb-8">
            <div className="bg-primary-light rounded-2xl h-80 flex items-center justify-center">
              <span className="text-text-secondary text-sm font-medium">
                Foto da Dani
              </span>
            </div>
          </ImageReveal>
        </ScrollReveal>

        {/* Beat 1 — Frustração */}
        <ScrollReveal delay={0.1}>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            Eu sou a Dani. Antes de ser a esteticista que já realizou mais
            de 5.000 sessões, eu era você — vida saudável, alimentação
            regulada, exercícios ativos. Mas o corpo não respondia.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            Já havia tentado de tudo: receitas milagrosas, personal trainers,
            academia todo dia, até caneta de emagrecimento.
          </p>
          <p className="text-text text-sm font-bold leading-relaxed mb-8">
            Tudo sempre voltava para o mesmo lugar: frustração.
          </p>
        </ScrollReveal>

        {/* Beat 2 — Descoberta */}
        <ScrollReveal>
          <QuoteBox variant="accent" className="mb-6">
            <p className="text-text-secondary text-sm leading-relaxed">
              Foi aí que descobri um{' '}
              <strong className="text-text">método milenar de modelação
              corporal</strong> em que mesmo pessoas que quase não iam para a
              academia conseguiam aplicar e ter resultados extraordinários — de
              forma quase imediata.
            </p>
          </QuoteBox>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Fui polindo a técnica para se encaixar no contexto do{' '}
            <strong>corpo da brasileira</strong> — aquele corpo que possui suas
            curvas naturais e que faz da brasileira o corpo mais desejado do
            mundo.
          </p>
          <p className="text-text text-sm font-bold leading-relaxed mb-8">
            Fazer realçar essas curvas se tornou o objetivo da minha vida.
          </p>
        </ScrollReveal>

        {/* Beat 3 — Prova */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            Comecei a aplicar em poucas clientes. Os resultados vieram rápido.
          </p>
          <p className="text-text text-sm leading-relaxed mb-4">
            Uma delas reduziu <strong>4cm de cintura em apenas 3 sessões.</strong>
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Depois disso, passei a ser chamada de{' '}
            <strong>&ldquo;As mãos que curam&rdquo;</strong>. Por isso, peguei
            tudo o que aprendi em 5 anos de prática profissional e criei o
            único método que transforma seu corpo com prazer.
          </p>
          <p className="text-text text-lg font-bold leading-tight">
            Esse é o Desafio Drena 21.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
