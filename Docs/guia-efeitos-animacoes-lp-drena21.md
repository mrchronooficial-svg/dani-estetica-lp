# GUIA DE EFEITOS, ANIMAÇÕES E UI PREMIUM — LP DESAFIO DRENA 21
## Referência Técnica para Implementação com Next.js + Tailwind CSS + Framer Motion

**Data:** Março 2026
**Stack:** Next.js 14+ (App Router) + Tailwind CSS + TypeScript + Framer Motion
**Objetivo:** Tornar a LP visualmente profissional, moderna e premium — com cara de empresa grande (inspiração: Apple, Glossier, marcas de luxo acessível)
**Prioridade:** Mobile-first. 100% do tráfego vem do Instagram via celular.

---

# FILOSOFIA DE DESIGN

## Princípios Fundamentais

1. **Menos é mais, mas com intenção** — Cada animação deve ter propósito (guiar o olho, criar hierarquia, gerar emoção). Nunca animar por animar.
2. **Mobile-first sempre** — Toda animação deve ser LEVE no celular. Reduzir blur e complexidade em telas menores.
3. **Performance > Estética** — Lighthouse score > 90 no mobile. Nunca sacrificar velocidade por um efeito bonito.
4. **Consistência > Variedade** — Melhor 3 tipos de animação bem executados do que 10 diferentes sem coerência.
5. **Subtileza premium** — Sites de luxo usam animações SUTIS. Não é parque de diversões — é butique de alta costura.

## O que NÃO fazer

- ❌ Animar TUDO na página (parece amador)
- ❌ Animações longas (> 0.8s para reveals, > 0.3s para hovers)
- ❌ Parallax pesado em mobile (causa lag e enjoo)
- ❌ Scroll-jacking (tomar controle do scroll do usuário)
- ❌ Animações que bloqueiam a leitura do conteúdo
- ❌ Muitos elementos com backdrop-filter simultâneos (máximo 2-3 por viewport)
- ❌ Animar propriedades que causam reflow (width, height, margin, padding)
- ❌ Flash de conteúdo não animado (FOUC)

---

# EFEITO 1 — GLASSMORPHISM (Vidro Fosco)

## O que é
Efeito de "vidro fosco" que cria profundidade com camadas translúcidas, blur de fundo e bordas sutis. Popularizado pela Apple no macOS Big Sur e iOS. Transmite modernidade e premium.

## Onde usar na LP
- **Header sticky** (navbar fixa com blur ao fazer scroll)
- **Cards de bônus** (efeito sutil de vidro)
- **Badge de autoridade** ("✦ Método profissional...")
- **Selo de garantia**

## Implementação CSS Core

```css
/* Classe base de glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

/* Variante para fundo claro (LP da Dani usa fundo off-white) */
.glass-light {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(61, 43, 31, 0.06);
}

/* Header sticky com glass */
.glass-header {
  background: rgba(250, 246, 243, 0.75); /* off-white da paleta */
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(237, 230, 224, 0.5);
}
```

## Implementação Tailwind

```html
<!-- Header sticky com glassmorphism -->
<header class="fixed top-0 w-full z-50 bg-[#FAF6F3]/75 backdrop-blur-xl border-b border-[#EDE6E0]/50 transition-all duration-300">
  <!-- conteúdo -->
</header>

<!-- Card com efeito glass -->
<div class="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6">
  <!-- conteúdo -->
</div>
```

## Regras de Performance
- **Máximo 2-3 elementos com backdrop-filter visíveis ao mesmo tempo**
- **Blur entre 8-16px** (valores maiores são exponencialmente mais caros)
- **NUNCA animar o valor do blur** (é caro demais para GPU)
- **Em mobile, reduzir blur para 8-10px** via media query
- **Sempre incluir fallback** para browsers sem suporte:

```css
@supports not (backdrop-filter: blur(10px)) {
  .glass {
    background: rgba(250, 246, 243, 0.95); /* fallback sólido */
  }
}
```

---

# EFEITO 2 — SCROLL REVEAL ANIMATIONS (Animações ao Scroll)

## O que é
Elementos que aparecem com fade, slide ou zoom conforme o usuário faz scroll. É o efeito mais impactante para landing pages — transforma conteúdo estático em experiência narrativa.

## Onde usar na LP
- **Cada seção inteira** — fade in suave ao entrar no viewport
- **Cards de dores** — stagger (aparecem um a um com delay)
- **Cards de módulos** — slide in lateral alternado
- **Cards de bônus** — stagger com delay
- **Números/métricas** — counter animation ao entrar no viewport
- **Seção NÃO É / É** — items aparecem sequencialmente

## Componente Reutilizável: ScrollReveal

```tsx
// components/ScrollReveal.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // cubic-bezier suave e premium
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

## Componente: StaggerContainer (para listas que aparecem uma a uma)

```tsx
// components/StaggerContainer.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
```

## Uso nas seções da LP

```tsx
{/* Seção de Dores — cada item aparece com stagger */}
<StaggerContainer staggerDelay={0.12}>
  {dores.map((dor, i) => (
    <StaggerItem key={i}>
      <DorCard text={dor} />
    </StaggerItem>
  ))}
</StaggerContainer>

{/* Módulos — slide alternado esquerda/direita */}
{modulos.map((mod, i) => (
  <ScrollReveal
    key={i}
    direction={i % 2 === 0 ? "left" : "right"}
    delay={0.1}
  >
    <ModuleCard {...mod} />
  </ScrollReveal>
))}

{/* Seção inteira — fade simples */}
<ScrollReveal>
  <section className="py-16">
    {/* conteúdo */}
  </section>
</ScrollReveal>
```

## Regras de Uso
- **`once: true` SEMPRE** — O reveal acontece uma vez. Não fica re-animando ao scroll para cima/baixo.
- **Duração entre 0.4s e 0.7s** — Mais rápido que isso fica mecânico, mais lento fica pesado.
- **Offset de 30-50px** — Não usar 100px+ (muito exagerado em mobile)
- **Usar ease customizado** `[0.25, 0.4, 0.25, 1]` — Mais suave que ease-in-out padrão
- **Stagger delay entre 0.08s e 0.15s** — Rápido o suficiente pra parecer fluido, lento o suficiente pra ser perceptível

---

# EFEITO 3 — ANIMATED COUNTER (Números que Contam)

## O que é
Números que "contam" de 0 até o valor final quando entram no viewport. Usado em métricas e dados de autoridade (ex: "5.000+ sessões", "5+ anos", "4cm em 3 sessões").

## Onde usar na LP
- **ProofBar** (barra de métricas abaixo do hero)
- **Seção de autoridade** (sobre a Dani)
- **Ancoragem de preço** (R$4.200 → R$197)

## Implementação com Framer Motion

```tsx
// components/AnimatedCounter.tsx
"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, duration, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
```

## Uso

```tsx
<AnimatedCounter target={5000} suffix="+" prefix="" duration={2.5} />
{/* Renderiza: 5.000+ (contando de 0) */}

<AnimatedCounter target={197} prefix="R$" duration={1.5} />
{/* Renderiza: R$197 (contando de 0) */}
```

---

# EFEITO 4 — BOTÃO CTA COM SHIMMER / GLOW

## O que é
Efeito de "brilho passando" pelo botão CTA, criando sensação de premium e chamando atenção. Pode ser um shimmer (luz que passa horizontalmente) ou um glow pulsante sutil.

## Onde usar na LP
- **Todos os botões CTA** (o efeito principal da LP)
- **Botão do header sticky**

## Implementação: Shimmer Effect no CTA

```tsx
// components/CTAButton.tsx
"use client";
import { motion } from "framer-motion";

interface CTAButtonProps {
  text: string;
  subtext?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({
  text,
  subtext,
  href = "#",
  className = "",
}: CTAButtonProps) {
  return (
    <div className={`w-full flex flex-col items-center gap-3 ${className}`}>
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full max-w-[420px] group overflow-hidden
          bg-[#C46A5A] hover:bg-[#B35A4A]
          text-white font-bold text-base tracking-wide uppercase
          py-4 px-8 rounded-full text-center
          shadow-lg hover:shadow-xl
          transition-colors duration-300
          cursor-pointer block"
      >
        {/* Shimmer effect */}
        <div
          className="absolute top-0 -left-[100%] h-full w-1/2
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            skew-x-[-20deg]
            group-hover:left-[150%]
            transition-all duration-700 ease-in-out"
        />
        <span className="relative z-10">{text}</span>
      </motion.a>

      {subtext && (
        <p className="text-xs text-[#6B5548] text-center">
          {subtext}
        </p>
      )}
    </div>
  );
}
```

## Variante: Glow Pulsante (para o CTA principal do Hero)

```css
/* Glow pulsante atrás do botão */
@keyframes ctaGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(196, 106, 90, 0.3),
                0 0 40px rgba(196, 106, 90, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(196, 106, 90, 0.5),
                0 0 60px rgba(196, 106, 90, 0.2);
  }
}

.cta-glow {
  animation: ctaGlow 2.5s ease-in-out infinite;
}
```

```html
<button class="cta-glow bg-[#C46A5A] text-white ...">
  QUERO DESINCHAR EM 21 DIAS
</button>
```

## Regras
- **Shimmer só no hover** (não ficar rodando em loop — fica barato)
- **Glow pulsante APENAS no CTA principal do Hero** (1 por página)
- **whileHover scale: 1.02** (sutil, não 1.1 que parece botão de jogo)
- **whileTap scale: 0.98** (feedback tátil ao clicar)

---

# EFEITO 5 — TEXT REVEAL / HIGHLIGHT

## O que é
Texto que se revela progressivamente (palavra por palavra ou linha por linha) ao entrar no viewport. Ou texto que ganha um "highlight" (marcador amarelo/dourado) ao scroll.

## Onde usar na LP
- **Headline do Hero** — palavras aparecem com stagger
- **Frase de absolvição** ("A culpa NÃO É SUA") — highlight animado no "NÃO É SUA"
- **Frase de impacto** no storytelling

## Implementação: Text Reveal por Palavra

```tsx
// components/TextRevealByWord.tsx
"use client";
import { motion } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  highlightWords?: string[]; // palavras para destacar
  highlightColor?: string;
}

export default function TextRevealByWord({
  text,
  className = "",
  highlightWords = [],
  highlightColor = "#C9A96E", // gold da paleta
}: TextRevealByWordProps) {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.04, duration: 0.3 },
              },
            }}
            className={`inline-block mr-[0.25em] ${
              isHighlight ? "font-bold" : ""
            }`}
            style={isHighlight ? { color: highlightColor } : {}}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
```

## Implementação: Highlight Animado (marcador que "preenche")

```css
/* Highlight que "preenche" da esquerda pra direita */
.animated-highlight {
  background: linear-gradient(
    to right,
    rgba(201, 169, 110, 0.25) 50%,
    transparent 50%
  );
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.6s ease;
  padding: 2px 4px;
  border-radius: 4px;
}

.animated-highlight.active {
  background-position: left;
}
```

Usar com `useInView` do Framer Motion para ativar a classe `.active` ao entrar no viewport.

---

# EFEITO 6 — SMOOTH SCROLL + HEADER INTELIGENTE

## O que é
Scroll suave entre seções + header que aparece/desaparece conforme a direção do scroll (esconde ao descer, reaparece ao subir).

## Implementação: Header Inteligente

```tsx
// components/StickyHeader.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Esconde ao descer, mostra ao subir
    setIsVisible(latest < previous || latest < 100);
    // Ativa glass effect após 100px de scroll
    setIsScrolled(latest > 100);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "bg-[#FAF6F3]/80 backdrop-blur-xl border-b border-[#EDE6E0]/50 shadow-sm"
          : "bg-transparent"
        }`}
    >
      {/* Conteúdo do header */}
    </motion.header>
  );
}
```

## Smooth Scroll

```css
/* Em globals.css */
html {
  scroll-behavior: smooth;
}
```

---

# EFEITO 7 — CARDS COM HOVER ELEVADO

## O que é
Cards que "flutuam" ao hover, com sombra que aumenta e sutil translação vertical. Dá sensação tátil e tridimensional.

## Onde usar na LP
- **Cards de dores** (✅ items)
- **Cards de módulos**
- **Cards de bônus**
- **Cards de FAQ**

## Implementação Tailwind + Framer Motion

```tsx
// components/HoverCard.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`
        bg-white rounded-2xl p-6
        border border-[#EDE6E0]
        shadow-sm hover:shadow-lg
        transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
```

---

# EFEITO 8 — GRADIENT MESH SUTIL NO BACKGROUND

## O que é
Manchas de cor gradiente suaves no background, criando profundidade e atmosfera sem distrair do conteúdo. Muito usado por Apple, Linear, Stripe.

## Onde usar na LP
- **Fundo do Hero** (mancha rose/gold sutil)
- **Fundo da seção de preço** (mancha dourada sutil)
- **Separação entre seções** (gradientes suaves)

## Implementação CSS

```css
/* Blob de gradiente no background */
.gradient-blob {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}

.gradient-blob-rose {
  background: radial-gradient(circle, #D4A59A, transparent 70%);
}

.gradient-blob-gold {
  background: radial-gradient(circle, #C9A96E, transparent 70%);
}
```

```html
<!-- No Hero, por exemplo -->
<section class="relative overflow-hidden">
  <!-- Blobs decorativos -->
  <div class="gradient-blob gradient-blob-rose absolute -top-40 -right-40" />
  <div class="gradient-blob gradient-blob-gold absolute -bottom-40 -left-40" />

  <!-- Conteúdo da seção (z-index acima) -->
  <div class="relative z-10">
    ...
  </div>
</section>
```

## Variante Animada (leve movimento)

```css
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.05); }
  66% { transform: translate(-10px, 15px) scale(0.95); }
}

.gradient-blob-animated {
  animation: blobFloat 15s ease-in-out infinite;
}
```

## Regras
- **Opacity máxima: 0.15-0.20** — Se for visível demais, fica distrativo
- **Blur alto (60-100px)** — Tem que ser SUTIL, quase subliminar
- **Usar `overflow-hidden` no container** — Evita scroll horizontal
- **Em mobile, reduzir tamanho dos blobs** (400px em vez de 600px)
- **pointer-events: none** — Nunca deve interferir com cliques

---

# EFEITO 9 — FAQ ACCORDION ANIMADO

## O que é
Perguntas que expandem/colapsam com animação suave de altura + rotação do ícone de seta.

## Implementação com Framer Motion

```tsx
// components/FAQItem.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-[#EDE6E0] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between py-5">
        <h3 className="font-bold text-[#3D2B1F] text-base pr-4">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#C9A96E] text-2xl font-light flex-shrink-0"
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#6B5548] text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

# EFEITO 10 — SEÇÃO DIVIDERS PREMIUM

## O que é
Separadores visuais entre seções que não são simples linhas — podem ser gradientes, curvas SVG ou espaçamento generoso com elementos decorativos.

## Implementação: Divider Gradiente

```tsx
// components/SectionDivider.tsx
export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
    </div>
  );
}
```

## Variante: Ornamento decorativo

```tsx
export function OrnamentDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-3 py-8">
      <div className="w-12 h-[1px] bg-[#EDE6E0]" />
      <span className="text-[#C9A96E] text-sm">✦</span>
      <div className="w-12 h-[1px] bg-[#EDE6E0]" />
    </div>
  );
}
```

---

# EFEITO 11 — SEÇÃO LABEL PREMIUM

## O que é
Labels dourados acima dos títulos de seção (ex: "✦ MÉTODO PROFISSIONAL", "✦ APRESENTANDO"). Muito usado por marcas premium para criar hierarquia visual.

## Implementação

```tsx
// components/SectionLabel.tsx
"use client";
import { motion } from "framer-motion";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-1.5
        bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-full
        text-[#C9A96E] text-xs font-medium tracking-widest uppercase
        mb-4"
    >
      <span>✦</span>
      {text}
    </motion.div>
  );
}
```

---

# EFEITO 12 — SCROLL PROGRESS BAR

## O que é
Barra fina no topo da página que mostra o progresso de scroll. Indica ao usuário onde ele está na página e incentiva a continuar descendo.

## Implementação

```tsx
// components/ScrollProgress.tsx
"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A59A] to-[#C9A96E] z-[60]"
    />
  );
}
```

---

# EFEITO 13 — IMAGEM / PLACEHOLDER REVEAL

## O que é
Efeito de "cortina" que revela imagens — um bloco de cor desliza sobre a imagem e desaparece, revelando a foto por baixo.

## Onde usar
- **Fotos antes/depois**
- **Foto da Dani**
- **Imagens dos módulos**

## Implementação

```tsx
// components/ImageReveal.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ImageReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Cortina que revela */}
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0 z-10 bg-[#D4A59A]"
      />

      {/* Conteúdo (imagem) com fade in */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

---

# EFEITO 14 — BADGE/TRUST ICONS COM PULSE

## O que é
Ícones de confiança (🔒 Compra segura, ✅ Garantia 7 dias, etc.) com um pulse sutil que chama atenção sem ser agressivo.

## Implementação Tailwind

```html
<div class="flex items-center gap-2 text-xs text-[#6B5548]">
  <span class="animate-pulse inline-block w-2 h-2 bg-green-400 rounded-full" />
  <span>🔒 Compra 100% segura</span>
</div>
```

---

# RESUMO — MAPA DE EFEITOS POR SEÇÃO DA LP

| Seção | Efeitos a Aplicar |
|-------|-------------------|
| **Header** | Glassmorphism + hide/show inteligente + smooth scroll links |
| **Hero** | Text reveal por palavra + gradient blobs no fundo + CTA glow pulsante + badge com SectionLabel |
| **Dores** | StaggerContainer (items aparecem um a um) + HoverCards |
| **Storytelling** | ScrollReveal (fade up) seção a seção + ImageReveal na foto da Dani |
| **Produto** | ScrollReveal + SectionLabel premium |
| **Prova Social** | StaggerContainer nos screenshots + AnimatedCounter na ProofBar |
| **NÃO É / É** | StaggerContainer com delay entre ❌ e ✅ |
| **Por que Funciona** | Cards numerados com ScrollReveal direction alternado |
| **Módulos** | ScrollReveal alternado left/right + HoverCards |
| **Bônus** | StaggerContainer + HoverCards com shimmer sutil |
| **Preço** | AnimatedCounter nos valores + gradient blob gold no fundo + CTA shimmer |
| **Para Quem É/Não É** | StaggerContainer |
| **Sobre Dani** | ImageReveal na foto + ScrollReveal nos bullets |
| **Garantia** | ScrollReveal + ícone com pulse verde |
| **FAQ** | Accordion animado (AnimatePresence) |
| **Oferta Final** | Gradient blob + CTA glow pulsante + shimmer |
| **Global** | ScrollProgress bar no topo + SectionDividers entre seções |

---

# CONFIGURAÇÃO TAILWIND

Adicionar ao `tailwind.config.ts`:

```ts
module.exports = {
  theme: {
    extend: {
      animation: {
        "cta-glow": "ctaGlow 2.5s ease-in-out infinite",
        "blob-float": "blobFloat 15s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        ctaGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(196,106,90,0.3), 0 0 40px rgba(196,106,90,0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(196,106,90,0.5), 0 0 60px rgba(196,106,90,0.2)",
          },
        },
        blobFloat: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-10px,15px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
};
```

---

# PERFORMANCE CHECKLIST

Antes de fazer deploy, verificar:

- [ ] Lighthouse mobile > 90 em Performance
- [ ] Máximo 2-3 backdrop-filter visíveis por viewport
- [ ] Todas imagens com lazy loading (`loading="lazy"` ou `next/image`)
- [ ] Animações usam APENAS `transform` e `opacity` (GPU-accelerated)
- [ ] Nenhuma animação com `width`, `height`, `margin`, `padding`
- [ ] `prefers-reduced-motion` respeitado:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] Blobs com `pointer-events: none` e `overflow-hidden` no container
- [ ] Fontes carregadas com `font-display: swap`
- [ ] Framer Motion com `viewport={{ once: true }}` em TODOS os reveals

---

# REFERÊNCIAS E INSPIRAÇÃO

## Bibliotecas de Componentes Premium
- **Aceternity UI** (ui.aceternity.com) — Componentes Tailwind + Framer Motion prontos para copiar. Spotlight effect, shimmer borders, floating cards, text generate effect, etc.
- **Magic UI** (magicui.design) — Componentes animados para landing pages.

## Sites de Referência Visual
- **apple.com** — Parallax, sticky scroll, canvas animations, text reveal
- **linear.app** — Glassmorphism, gradient meshes, smooth animations
- **stripe.com** — Gradient backgrounds, grid de features animado
- **glossier.com** — Minimalismo premium, cor de assinatura

## Documentação Técnica
- **Framer Motion Scroll** — motion.dev/docs/react-scroll-animations
- **Framer Motion Animation** — motion.dev/docs/react-animation

---

*Este documento deve ser lido pelo Claude Code ANTES de começar a implementar a LP.
Cada efeito tem código pronto para copiar/adaptar. Seguir o mapa de efeitos por seção
para saber exatamente o que aplicar em cada parte da página.*
