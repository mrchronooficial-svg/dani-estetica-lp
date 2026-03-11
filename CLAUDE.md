# Dani Estética — Desafio Drena 21

Landing page de vendas (single page) para curso de automassagem modeladora feminina. Público 100% mobile vindo do Instagram via Meta Ads. Converte visitantes frios em compradoras a R$197.

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Linguagem:** TypeScript (strict mode)
- **Animações:** Framer Motion
- **Deploy:** Vercel (via GitHub)
- **Package Manager:** npm

## Comandos

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Build produção
npm run lint         # ESLint
npx tsc --noEmit     # Type check
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # Font (Plus Jakarta Sans), metadata
│   ├── page.tsx             # Monta todas as seções em ordem
│   └── globals.css          # Custom properties de cor
├── components/
│   ├── ui/                  # CTAButton, SectionLabel, ScrollReveal,
│   │                        # StaggerContainer, AnimatedCounter, FAQItem
│   └── sections/            # 1 arquivo por seção da LP (Header → Footer)
├── lib/
│   └── constants.ts         # Cores, URLs checkout, textos reutilizáveis
└── public/images/           # Placeholders e assets
```

## Design System

**Fonte única:** Plus Jakarta Sans (400, 500, 700, 800)
**Max-width:** 420px (mobile-first, centralizado em desktop)

| Token | Hex | Uso |
|-------|-----|-----|
| bg | #FAF6F3 | Background geral |
| text | #3D2B1F | Texto principal (chocolate) |
| text-secondary | #6B5548 | Texto secundário |
| primary | #D4A59A | Rose/nude — identidade |
| primary-light | #E8C4B8 | Fundos de cards |
| accent | #C9A96E | Gold — badges, labels |
| cta | #C46A5A | Coral — botões CTA |
| cta-hover | #B35A4A | Hover do CTA |
| border | #EDE6E0 | Bordas e separadores |

**Espaçamento:** py-16 a py-20 entre seções, px-5 horizontal
**Radius:** 12px cards, 24px botões
**Sombra:** `0 2px 12px rgba(61,43,31,0.06)`

## Seções da LP (ordem exata)

```
Header → Hero → Dores → Storytelling → Produto → ProvaSocial →
Diferenciacao → PorQueFunciona → Modulos → Bonus → Ancoragem →
ParaQuemE → SobreDani → Garantia → FAQ → OfertaFinal → Footer
```

Cada seção = 1 componente em `components/sections/`.
Copy completa de cada seção: veja @docs/COPY.md
Efeitos por seção: veja @docs/ANIMACOES.md

## Padrões

- Server Components por padrão, `'use client'` só com interatividade
- 1 seção = 1 componente (nunca monolítico)
- Cores e textos repetidos em `lib/constants.ts`
- Imagens com `next/image` + placeholder blur + lazy loading
- Mobile-first: base = mobile, `md:` / `lg:` = desktop

## Regras de Copy (aplicar em toda LP)

- Parágrafos: máximo 2 linhas no mobile
- **Negrito** só em palavras emocionais, nunca frases inteiras
- Mínimo 6 CTAs (botão sempre a ≤1 scroll)
- Cada CTA com texto diferente (declaração pessoal, não "comprar")
- Emojis permitidos: ✅ ❌ 🎁 ✦ (com moderação)

## Animações (Framer Motion)

- Animar APENAS `transform` e `opacity`
- `viewport: { once: true }` em todos os scroll reveals
- Max 2-3 `backdrop-filter` por viewport
- Duration: 0.4-0.7s | Offset: 30-50px | Stagger: 0.08-0.15s
- Respeitar `prefers-reduced-motion`
- Detalhes completos: veja @docs/ANIMACOES.md

## ⛔ NÃO Fazer

- NÃO usar `any` no TypeScript
- NÃO instalar dependências sem confirmar
- NÃO animar width/height/margin/padding (só transform e opacity)
- NÃO usar cores fora da paleta ou fontes além de Plus Jakarta Sans
- NÃO criar links de navegação na LP (página de venda = zero distrações)
- NÃO esquecer `viewport: { once: true }` nos scroll reveals
- NÃO fazer deploy sem testar mobile

## Workflow

1. Pergunte se algo não estiver claro
2. Proponha plano ANTES de implementar
3. Teste cada seção no mobile antes de prosseguir
4. `npm run build && npx tsc --noEmit` após mudanças grandes
5. Commits frequentes e descritivos

## Documentos Complementares

- @docs/COPY.md — Copy completa de todas as 17 seções
- @docs/ANIMACOES.md — Mapa de efeitos por seção + keyframes + componentes
- @docs/NEGOCIO.md — Contexto do negócio, público, funil, concorrência, tom de voz

## Links

- Framer Motion: https://motion.dev
- Tailwind: https://tailwindcss.com/docs
- Next.js: https://nextjs.org/docs
- Referência visual: ui.aceternity.com
- Referência LP: isabelaschnorr.com
