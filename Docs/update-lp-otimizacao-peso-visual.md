# UPDATE — OTIMIZAÇÃO DE PESO VISUAL DA LP DRENA 21

## Contexto

Este documento contém alterações ao blueprint principal (`estrutura-e-copy-da-lp-drena21.md`). O objetivo é **reduzir a densidade visual e o volume de texto da LP em ~35%** sem perder a estrutura de persuasão necessária para cold traffic (Meta Ads).

**Motivação:** Análise comparativa com LPs de alto desempenho (ex: AURA/Rafael Gratta) revelou que a LP atual está visualmente pesada — excesso de texto por seção, listas longas demais e seções que poderiam ser compactadas via UI patterns (carrossel, accordion, truncamento).

**Regra geral:** Manter TODAS as 16 seções. Não remover nenhuma. Apenas otimizar copy e layout dentro de cada uma.

---

## MUDANÇA 1 — REMOVER SEÇÃO 7 (POR QUE FUNCIONA)

### O que mudar

Deletar a SEÇÃO 7 inteira — "POR QUE FUNCIONA" com os 6 cards numerados (linhas 456-508 do blueprint original).

### Motivo

Redundante. Os argumentos dos 6 cards já estão cobertos em:
- Seção 2 (Absolvição): "não é gordura, é fluido retido"
- Seção 3 (Storytelling): jornada de descoberta do método
- Seção 4 (Produto): "funciona mesmo que..."
- Seção 6 (Diferenciação NÃO É/É): contraste com dieta/academia

### Impacto

Reduz ~6 cards de texto = elimina ~40 linhas de copy e um scroll inteiro no mobile.

### Nova ordem das seções

```
1.  HERO
2.  DORES
3.  STORYTELLING
4.  PRODUTO + "Funciona mesmo que..." + CTA #2
5.  PROVA SOCIAL
6.  DIFERENCIAÇÃO "NÃO É / É"
7.  MÓDULOS ← era 8, agora é 7
8.  BÔNUS ← era 9, agora é 8
9.  ANCORAGEM ← era 10, agora é 9
10. PARA QUEM É / NÃO É ← era 11, agora é 10
11. SOBRE A DANI ← era 12, agora é 11
12. GARANTIA ← era 13, agora é 12
13. FAQ ← era 14, agora é 13
14. OFERTA FINAL ← era 15, agora é 14
15. FOOTER ← era 16, agora é 15
```

---

## MUDANÇA 2 — REDUZIR SEÇÃO DE DORES DE 7 PARA 5 ITENS

### O que mudar

Na SEÇÃO 2 (IDENTIFICAÇÃO DE DORES), substituir os 7 itens da lista por estes 5:

```html
✅ Você acorda **inchada** todos os dias e parece que o corpo
não responde, não importa o que faça?

✅ Já tentou **dietas, exercícios, chás** e nada resolveu
o inchaço e a retenção?

✅ Tem **vergonha de certas roupas** porque o corpo não está
como gostaria?

✅ Não tem **tempo nem dinheiro** pra sessões profissionais
de massagem toda semana?

✅ Olha no **espelho** e não reconhece mais o seu corpo?
```

### Itens removidos

- "Sente que a celulite e a flacidez só aumentam..." → redundante com item 1 e 3
- "Já pensou em fazer drenagem em casa mas não sabe..." → redundante com a seção de produto que já cobre isso

### Motivo

5 itens é o sweet spot para mobile — suficiente pra gerar identificação sem cansar. Pesquisas de eye-tracking mostram que listas com mais de 5-6 itens têm drop-off de atenção significativo em mobile.

---

## MUDANÇA 3 — STORYTELLING DA DANI: VERSÃO COMPACTA

### O que mudar

Substituir as subseções 3.2 até 3.9 (8 blocos de texto) por uma versão condensada em 3 beats narrativos. Manter o título (3.1) e o layout com foto.

### Nova copy da Seção 3

```html
<!-- 3.2 — Abertura + Foto -->
👋 Eu sou a Dani. Antes de ser a esteticista que já realizou
mais de 5.000 sessões, eu era você.

[PLACEHOLDER: Foto da Dani]

<!-- 3.3 — A Frustração (Beat 1) -->
Alimentação regulada, exercícios, personal trainer,
até caneta de emagrecimento. Tentei de tudo.

**Tudo sempre voltava pro mesmo lugar: frustração.**

<!-- 3.4 — A Descoberta (Beat 2) -->
Até que descobri um **método milenar de modelação corporal**
que funcionava mesmo em quem quase não ia pra academia.

Fui adaptando a técnica pro **corpo da brasileira** — aquele
corpo com curvas que faz da brasileira o corpo mais desejado
do mundo. Realçar essas curvas virou minha missão.

<!-- 3.5 — A Prova (Beat 3) -->
Quando comecei a aplicar em clientes, os resultados vieram rápido.
Uma delas reduziu **4cm de cintura em 3 sessões.**

Não demorou pra começarem a me chamar de **"As mãos que curam."**

Por isso peguei tudo que aprendi em 5 anos e criei o único método
que transforma seu corpo com prazer.

**Esse é o Desafio Drena 21.**
```

### Motivo

A versão original tem 8 subseções com parágrafos de 3-4 linhas cada. No mobile, isso gera um scroll enorme só de texto corrido — exatamente o tipo de conteúdo que causa "preguiça de ler". A versão compacta mantém os 3 beats essenciais de storytelling (frustração → descoberta → prova) em ~50% menos texto.

### Subseções removidas

- 3.4 (Ponto de virada — vestido no espelho): emocional, mas muito longo. O beat de frustração já cobre.
- 3.6 (Prova pessoal — "apliquei em mim mesma"): fundido com beat 3.
- 3.8 (Diferencial emocional — cliente chorou): bonito, mas atrasa o ritmo. Pode virar depoimento na seção 5.

---

## MUDANÇA 4 — MÓDULOS EM CARROSSEL HORIZONTAL

### O que mudar

Na SEÇÃO 8 (agora SEÇÃO 7 — MÓDULOS), trocar o layout de cards empilhados verticalmente para um **carrossel horizontal com scroll snap**.

### Especificação técnica

```tsx
// Componente: <ModuleCarousel />
// Layout: scroll horizontal com snap points
// Comportamento: swipe no mobile, drag ou setas no desktop

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4
               scrollbar-hide -mx-4">
  {modules.map((module) => (
    <div
      key={module.id}
      className="snap-center shrink-0 w-[85vw] max-w-[360px]"
    >
      <ModuleCard {...module} />
    </div>
  ))}
</div>

// CSS adicional necessário:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

// Indicador de scroll: dots ou barra abaixo do carrossel
// Implementar com Framer Motion useMotionValueEvent ou
// IntersectionObserver para tracking do card ativo
```

### Dados dos cards

Cada `<ModuleCard />` exibe:

```tsx
interface ModuleCardProps {
  image: string;        // placeholder ou imagem real
  label: string;        // ex: "MÓDULO 1"
  title: string;        // ex: "Preparação + Introdução"
  subtitle: string;     // ex: "Semana 1"
  result: string;       // ex: "Você vai entender exatamente como funciona"
  topics: string[];     // lista de tópicos (renderizar como texto inline, não bullets)
}
```

### Motivo

4 cards empilhados = 4 scrolls inteiros no mobile. Carrossel reduz pra 1 viewport de altura. O usuário swipa horizontalmente pra ver cada módulo — padrão nativo do Instagram (carrossel de posts), então o público-alvo já tem o muscle memory.

---

## MUDANÇA 5 — BÔNUS EM CARROSSEL HORIZONTAL

### O que mudar

Mesmo pattern da mudança 4, aplicado à SEÇÃO 9 (agora SEÇÃO 8 — BÔNUS).

### Especificação técnica

Reutilizar o mesmo componente de carrossel. Cada card de bônus:

```tsx
interface BonusCardProps {
  emoji: string;        // "🎁"
  label: string;        // "BÔNUS #1"
  image: string;        // placeholder
  title: string;        // "Protocolo Rosto de Cristal"
  description: string;  // 1-2 linhas
  value: string;        // "R$97"
}
```

### Layout do card

```
┌──────────────────────────┐
│  [PLACEHOLDER: Imagem]   │
│                          │
│  🎁 BÔNUS #1             │
│  Protocolo Rosto         │
│  de Cristal              │
│                          │
│  Técnica de rolo de gelo │
│  para firmeza facial.    │
│                          │
│  VALOR: R$97             │
└──────────────────────────┘
```

### Motivo

Mesmo racional dos módulos — 4 bônus empilhados verticalmente ocupam muito scroll. Carrossel compacta sem perder informação.

---

## MUDANÇA 6 — DEPOIMENTOS COM TRUNCAMENTO "VER MAIS"

### O que mudar

Na SEÇÃO 5 (PROVA SOCIAL), implementar truncamento nos cards de depoimento.

### Especificação técnica

```tsx
// Componente: <TestimonialCard />
// Comportamento: mostra preview (2 linhas) + botão "Ver mais"
// Expand: anima a altura do card com Framer Motion

interface TestimonialCardProps {
  image?: string;           // screenshot do WhatsApp (placeholder)
  text?: string;            // texto do depoimento (se não for screenshot)
  name?: string;            // nome da cliente (opcional)
  previewLines?: number;    // default: 3
}

// Estado interno:
const [expanded, setExpanded] = useState(false);

// Render:
<motion.div
  animate={{ height: expanded ? "auto" : "180px" }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="overflow-hidden relative"
>
  {/* conteúdo do depoimento */}

  {!expanded && (
    <div className="absolute bottom-0 left-0 right-0 h-16
                    bg-gradient-to-t from-white to-transparent" />
  )}
</motion.div>

<button
  onClick={() => setExpanded(!expanded)}
  className="text-sm text-[#C46A5A] font-medium mt-2"
>
  {expanded ? "Ver menos" : "Ver mais"}
</button>
```

### Comportamento para screenshots

Se o depoimento for uma imagem (screenshot de WhatsApp), o truncamento funciona assim:
- Mostra a imagem com `max-height: 200px` e `overflow: hidden`
- Gradient fade na base
- "Ver mais" expande pra altura real da imagem

### Motivo

A LP do AURA (Gratta) usa exatamente esse pattern — mostra 2-3 linhas do depoimento + "Leia mais" que abre um popup. Reduz o peso visual dramáticamente. O grid de 6-8 screenshots sem truncamento empurra o resto da LP pra baixo e cria sensação de "parede de texto".

---

## MUDANÇA 7 — SEÇÃO "NÃO É / É": REDUZIR DE 8 PARA 6 ITENS

### O que mudar

Na SEÇÃO 6 (DIFERENCIAÇÃO), reduzir de 4 "NÃO É" + 4 "É" para 3 + 3.

### Nova copy

```html
<!-- NÃO É -->
❌ **NÃO É** mais uma dieta restritiva que te faz passar fome.

❌ **NÃO É** um programa de exercícios que exige horas na academia.

❌ **NÃO É** um creme milagroso ou chá detox.

<!-- É -->
✅ **É** a técnica profissional de massagem modeladora — a mesma
que custa **R$200 por sessão** — adaptada pra você fazer em casa.

✅ **É** um desafio de **21 dias** com vídeos passo a passo, como
se estivesse no consultório da Dani.

✅ **É** 15 minutos de autocuidado que desincha, modela
e transforma seu corpo **com prazer**.
```

### Itens removidos

- ❌ "NÃO É teoria sobre emagrecimento que ninguém aplica" → fraco e genérico
- ✅ "É prazer, relaxamento e resultado — tudo junto" → fundido com o último item ✅

### Motivo

3+3 é mais punchy e scannable. Mantém o contraste claro sem repetir argumentos.

---

## MUDANÇA 8 — FAQ: REDUZIR DE 9 PARA 6 PERGUNTAS

### O que mudar

Na SEÇÃO 14 (agora SEÇÃO 13 — FAQ), manter apenas as 6 perguntas mais fortes.

### Perguntas mantidas

```
1. "Funciona mesmo?" → mantém (objeção #1)
2. "Não tenho tempo. Quanto tempo por dia?" → mantém (objeção de tempo)
3. "Não sei fazer massagem. Vou conseguir?" → mantém (objeção de habilidade)
4. "É caro?" → mantém (objeção de preço — crítica)
5. "Quando vou ver resultado?" → mantém (objeção de expectativa)
6. "Já tentei de tudo e nada deu certo." → mantém (objeção de ceticismo)
```

### Perguntas removidas

```
- "Preciso comprar produtos caros?" → já coberto na resposta de "É caro?"
- "É só pra quem quer emagrecer?" → já coberto na seção "Para quem é"
- "Por quanto tempo terei acesso?" → já mencionado nos CTAs ("acesso vitalício")
```

### Motivo

9 perguntas em accordion no mobile = muitos taps e muito scroll. 6 é o sweet spot — cobre as objeções reais sem sobrecarregar.

---

## MUDANÇA 9 — REGRA GLOBAL DE COPY: PARÁGRAFOS DE 1 LINHA

### O que mudar

Atualizar a regra de copy no Design System de:

```
- Parágrafos máximo 2 linhas (mobile-first)
```

Para:

```
- Parágrafos: 1 linha no mobile como padrão. Máximo absoluto: 2 linhas.
- Frases: curtas e diretas. Se uma frase tem vírgula, considerar quebrar em duas.
- Ritmo: alternar frase de 1 linha → frase de 1 linha → frase de 2 linhas (máx).
- Nunca 3+ linhas corridas sem quebra visual (espaço, bold, emoji ou novo parágrafo).
```

### Motivo

Em telas de 375px (iPhone SE) a 430px (iPhone Pro Max), "2 linhas" pode virar 3-4 linhas reais. A regra de 1 linha garante que o texto respire no mobile real.

---

## MUDANÇA 10 — ESPAÇAMENTO ENTRE SEÇÕES

### O que mudar

Atualizar o espaçamento padrão entre seções no Design System de:

```
- Espaçamento generoso entre seções (py-16 a py-20)
```

Para:

```
- Espaçamento entre seções: py-20 (80px) como MÍNIMO
- Seções com CTA: py-24 (96px) antes da seção seguinte
- Separador visual opcional: linha fina 1px #EDE6E0 com mx-8
  entre seções de natureza diferente (ex: entre prova social e diferenciação)
```

### Motivo

Quando o texto dentro da seção é denso, o py-16 (64px) entre seções não é suficiente pra criar a sensação de "respiração". O py-20 mínimo + separadores visuais criam a sensação de leveza que falta.

---

## MUDANÇA 11 — OFERTA FINAL: VERSÃO COMPACTA

### O que mudar

Na SEÇÃO 15 (agora SEÇÃO 14 — OFERTA FINAL), substituir a lista longa de recap por uma versão visual compacta.

### Novo layout

```html
<!-- Ao invés de listar todos os itens com preço de novo,
     usar um card resumo visual -->

<div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EDE6E0]">

  <p className="text-sm text-[#6B5548] uppercase tracking-wider mb-2">
    Seu acesso inclui
  </p>

  <div className="space-y-2 mb-6">
    <div className="flex items-center gap-2">
      <span>✅</span>
      <span>Curso completo — 4 módulos práticos em vídeo</span>
    </div>
    <div className="flex items-center gap-2">
      <span>🎁</span>
      <span>4 bônus exclusivos</span>
    </div>
    <div className="flex items-center gap-2">
      <span>🔒</span>
      <span>Garantia incondicional de 7 dias</span>
    </div>
    <div className="flex items-center gap-2">
      <span>♾️</span>
      <span>Acesso vitalício</span>
    </div>
  </div>

  <p className="text-sm line-through text-[#6B5548]">De R$855</p>
  <p className="text-3xl font-extrabold text-[#3D2B1F]">12x R$19,70</p>
  <p className="text-sm text-[#6B5548]">ou R$197 à vista</p>

  <!-- CTA #5 aqui dentro do card -->

</div>
```

### Motivo

A versão original repete toda a lista de itens + preços individuais que já apareceu na seção de ancoragem. O usuário que chegou até a oferta final já viu isso — não precisa ler de novo. Um card visual compacto com checkmarks é mais eficiente e menos cansativo.

---

## RESUMO DAS MUDANÇAS

| # | Mudança | Impacto no scroll | Impacto na copy |
|---|---------|-------------------|-----------------|
| 1 | Remover seção "Por que funciona" | -1 seção inteira (~6 cards) | -40 linhas |
| 2 | Dores: 7 → 5 itens | -2 cards | -6 linhas |
| 3 | Storytelling: 8 subseções → 3 beats | -50% do tamanho | -25 linhas |
| 4 | Módulos em carrossel | -3 scrolls verticais | Nenhum (copy igual) |
| 5 | Bônus em carrossel | -3 scrolls verticais | Nenhum (copy igual) |
| 6 | Depoimentos com "ver mais" | -4 scrolls verticais | Nenhum (copy igual) |
| 7 | NÃO É / É: 8 → 6 itens | -2 items | -4 linhas |
| 8 | FAQ: 9 → 6 perguntas | -3 accordions | -15 linhas |
| 9 | Regra de 1 linha por parágrafo | Melhora leiturabilidade | Rewrite parcial |
| 10 | Espaçamento py-20 mínimo | +visual breathing | Nenhum |
| 11 | Oferta final compacta | -1 scroll | -10 linhas |

**Estimativa total:** ~35% menos scroll no mobile, ~100 linhas de copy removidas, mesma estrutura de persuasão.

---

## NOVA ORDEM DAS SEÇÕES (ATUALIZADA)

```
1.  HERO — Headline + Sub + Badge + CTA #1
2.  DORES — 5 itens + Absolvição
3.  STORYTELLING — 3 beats compactos
4.  PRODUTO + "Funciona mesmo que..." + CTA #2
5.  PROVA SOCIAL — Screenshots truncados + Antes/Depois
6.  DIFERENCIAÇÃO — 3 NÃO É + 3 É
7.  MÓDULOS — Carrossel horizontal (4 cards)
8.  BÔNUS — Carrossel horizontal (4 cards)
9.  ANCORAGEM — Lista de valores + preço real + CTA #3
10. PARA QUEM É / NÃO É
11. SOBRE A DANI — Foto + credenciais
12. GARANTIA — 7 dias + selo + CTA #4
13. FAQ — 6 perguntas (accordion)
14. OFERTA FINAL — Card compacto + CTA #5
15. FOOTER
```

---

## NOVO MAPA DE CTAs

| # | Localização | Texto do Botão |
|---|-------------|----------------|
| 1 | Hero | QUERO DESINCHAR EM 21 DIAS |
| 2 | Após Produto | QUERO COMEÇAR O DESAFIO AGORA |
| 3 | Após Ancoragem | GARANTIR MINHA VAGA POR APENAS R$197 |
| 4 | Após Garantia | SIM! QUERO MODELAR MEU CORPO EM CASA |
| 5 | Oferta Final | QUERO MINHA VAGA COM ACESSO IMEDIATO E VITALÍCIO |
| 6 | Header fixo | Começar agora (pill) |

Sem mudanças nos CTAs — apenas renumeração das seções.

---

## COMPONENTES NOVOS A CRIAR

```
- <HorizontalCarousel /> — Componente genérico de carrossel horizontal
  Props: children, showDots?, dotActiveColor?
  Usado por: ModuleCarousel e BonusCarousel

- <TruncatedCard /> — Card com truncamento e "Ver mais"
  Props: maxHeight, children, expandLabel?, collapseLabel?
  Usado por: TestimonialCard
```

---

## PRIORIDADE DE IMPLEMENTAÇÃO

```
1. ALTA — Mudanças 4, 5, 6 (carrosséis e truncamento) → maior impacto visual
2. ALTA — Mudança 3 (storytelling compacto) → segundo maior bloco de texto
3. MÉDIA — Mudanças 1, 2, 7, 8 (remoções e reduções de copy)
4. MÉDIA — Mudanças 9, 10 (regras globais de espaçamento)
5. BAIXA — Mudança 11 (oferta final compacta)
```

---

*Este documento é um patch ao blueprint principal. Onde houver conflito entre este documento e o `estrutura-e-copy-da-lp-drena21.md`, este documento prevalece.*
