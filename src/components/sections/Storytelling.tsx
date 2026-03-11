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

        {/* Intro */}
        <ScrollReveal delay={0.1}>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            👋 Olá, eu sou a Dani. Antes de ser a esteticista que já realizou mais
            de 5.000 sessões de massagem modeladora, eu era você.
          </p>
        </ScrollReveal>

        {/* Busca frustrada */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-3">
            Eu sempre tive uma vida saudável — alimentação regulada, rotina de
            exercícios ativos. Mas percebi que isso não era suficiente para ter
            o corpo dos meus sonhos.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            Já havia tentado de tudo:
          </p>
          <ul className="text-text-secondary text-sm leading-relaxed mb-3 space-y-1 pl-1">
            <li>• Receitas milagrosas</li>
            <li>• Personal trainers</li>
            <li>• Academia todo dia</li>
            <li>• Até caneta de emagrecimento</li>
          </ul>
          <p className="text-text text-sm font-bold leading-relaxed mb-6">
            Tudo sempre voltava para o mesmo lugar: frustração.
          </p>
        </ScrollReveal>

        {/* Ponto de virada — QuoteBox */}
        <ScrollReveal>
          <QuoteBox variant="primary" className="mb-6">
            <p className="text-text-secondary text-sm leading-relaxed">
              Teve um dia em que me arrumei pra sair — coloquei aquele vestido que
              sempre ficou bem — e quando me olhei no espelho,{' '}
              <strong className="text-text">não me reconheci.</strong> O corpo
              inchado, a roupa apertando em lugares que antes não apertava. Tirei
              o vestido, coloquei uma roupa larga e fui assim mesmo.
            </p>
          </QuoteBox>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            No caminho, pensei: &ldquo;eu faço tudo certo — como bem, treino,
            me cuido — e meu corpo não responde.&rdquo;
          </p>
        </ScrollReveal>

        {/* Descoberta — QuoteBox */}
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
          <p className="text-text text-sm font-bold leading-relaxed mb-6">
            Fazer realçar essas curvas se tornou o objetivo da minha vida.
          </p>
        </ScrollReveal>

        {/* Prova pessoal */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Apliquei a sequência completa de movimentos em mim mesma. No final
            da primeira semana, os sinais já eram claros — corpo mais leve,
            menos inchado, silhueta visivelmente diferente.
          </p>
          <p className="text-text text-sm leading-relaxed mb-6">
            Pensei: <strong>&ldquo;se funciona assim em mim, que já me cuido,
            imagina em quem não faz nada?&rdquo;</strong>
          </p>
        </ScrollReveal>

        {/* Resultados nas clientes */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            Comecei a aplicar em poucas clientes. Os resultados vieram rápido.
          </p>
          <p className="text-text text-sm leading-relaxed mb-6">
            • Uma delas reduziu <strong>4cm de cintura em apenas 3 sessões.</strong>
          </p>
        </ScrollReveal>

        {/* Diferencial emocional — QuoteBox */}
        <ScrollReveal>
          <QuoteBox variant="cta" className="mb-6">
            <p className="text-text-secondary text-sm leading-relaxed">
              Uma cliente começou a chorar na primeira sessão. Não de dor — de{' '}
              <strong className="text-text">alívio</strong>. Disse que fazia anos
              que não dedicava 30 minutos só pra cuidar de si mesma. Quando viu o
              resultado no espelho, chorou de novo.
            </p>
          </QuoteBox>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Depois de resultados rápidos e marcantes, passei a ser chamada de{' '}
            <strong>&ldquo;As mãos que curam&rdquo;</strong>.
          </p>
        </ScrollReveal>

        {/* Missão */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Eu cansei de ver mulheres gastando fortunas em sessões que só duram
            uma semana. Por isso, peguei tudo o que aprendi em 5 anos de prática
            profissional e criei o único método que transforma seu corpo com
            prazer.
          </p>
          <p className="text-text text-lg font-bold leading-tight">
            Esse é o Desafio Drena 21.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
