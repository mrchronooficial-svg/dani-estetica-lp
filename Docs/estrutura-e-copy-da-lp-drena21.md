# ESTRUTURA E COPY DA LP — DESAFIO DRENA 21
## Documento de Execução para Desenvolvimento da Landing Page

**Data:** Março 2026
**Status:** ✅ PRONTO PARA BUILD
**Projeto:** Dani Estética — Desafio Drena 21
**Responsável pelo build:** Claude Code (Next.js + Tailwind CSS + TypeScript + Framer Motion)
**Referência estrutural:** isabelaschnorr.com (LinkedIn em Ação)

---

# INSTRUÇÕES GERAIS PARA O DESENVOLVEDOR

## Design System

```
FONTE: Plus Jakarta Sans (Google Fonts) — fonte única para toda a LP
- Headlines/Títulos: Plus Jakarta Sans Bold/ExtraBold (700-800)
- Corpo/Texto: Plus Jakarta Sans Regular (400)
- Labels/Detalhes: Plus Jakarta Sans Medium (500)
- CTAs/Botões: Plus Jakarta Sans Bold (700), uppercase, letter-spacing: 0.05em

PALETA DE CORES:
- Primária (Rose/Nude): #D4A59A
- Rose claro: #E8C4B8
- Acento (Gold): #C9A96E
- Background: #FAF6F3
- Texto principal (Chocolate): #3D2B1F
- Texto secundário: #6B5548
- CTA primário: #C46A5A (coral quente — alto contraste com fundo)
- CTA hover: #B35A4A
- Branco: #FFFFFF
- Borda/Separadores: #EDE6E0

DESIGN:
- Mobile-first (100% do tráfego vem do Instagram/Meta Ads via celular)
- Max-width do conteúdo: 420px (simular tela mobile mesmo em desktop)
- Border-radius padrão: 12px (cards), 24px (botões grandes)
- Sombras suaves: box-shadow: 0 2px 12px rgba(61,43,31,0.06)
- Espaçamento generoso entre seções (py-16 a py-20)
- Parágrafos máximo 2 linhas (mobile-first)
- Negrito APENAS em palavras emocionais, nunca em frases inteiras
```

## Regras de Copy

```
- Parágrafos curtos (1-2 linhas no mobile)
- Negrito estratégico em palavras emocionais
- Emojis para listas (✅, ❌, 🎁, ✦) — não exagerar
- Mínimo 6 CTAs espalhados pela página (botão nunca está a mais de 1 scroll)
- Cada CTA com texto diferente (declaração pessoal, não "comprar")
- Alternância: frase curta → frase média → frase curta (cria ritmo)
```

## Componentes Reutilizáveis

```
- <CTAButton /> — Botão principal (coral, full-width, uppercase, bold)
- <CTASubtext /> — Texto abaixo do CTA ("R$197 ou 12x de R$19,70 · Garantia 7 dias")
- <SectionLabel /> — Label dourado acima de títulos (ex: "✦ MÉTODO PROFISSIONAL")
- <ProofBar /> — Barra com 3 métricas (5+ anos, 5.000+ sessões, 4cm em 3 sessões)
- <TestimonialCard /> — Card para screenshot/depoimento (placeholder com borda rose)
- <BonusCard /> — Card de bônus com ícone, nome, descrição e valor
- <FAQItem /> — Accordion expandível
- <ModuleCard /> — Card de módulo com imagem placeholder, título e resultado prometido
```

---

# SEÇÃO 1 — HERO (Acima da dobra)

**Referência Isabela:** "Pare de enviar currículos AGORA!" + sub-headline + lista de dores + absolvição

```
[LAYOUT]
- Background: var(--bg) #FAF6F3
- Logo "DANI ESTÉTICA" no topo (Plus Jakarta Sans Light, letter-spacing: 0.08em, uppercase)
- Botão "Começar agora" no canto direito do header (pill, coral)
- Header fixo no scroll (sticky) com blur backdrop
```

### 1.1 — Headline Principal

```html
Pare de sofrer com dieta e academia.
```

### 1.2 — Sub-headline

```html
Descubra como desinchar e modelar seu corpo em 21 dias, 
com apenas 15 minutos de automassagem profissional por dia — em casa.
```

### 1.3 — Badge de autoridade

```html
✦ Método de esteticista profissional com 5+ anos e mais de 5.000 sessões realizadas
```

### 1.4 — CTA #1

```
Botão: QUERO DESINCHAR EM 21 DIAS
Subtexto: R$197 ou 12x de R$19,70 · Garantia incondicional de 7 dias
```

---

# SEÇÃO 2 — IDENTIFICAÇÃO DE DORES

**Referência Isabela:** "Você se identifica com alguma dessas situações?" + lista com bullets

```
[LAYOUT]
- Título da seção centralizado
- Lista de dores com ícone ✅ + texto
- Cada item é um card com fundo branco, borda sutil, border-radius 12px
- Ao final, frase de transição + absolvição
```

### 2.1 — Título

```html
Você se identifica com alguma dessas situações?
```

### 2.2 — Lista de Dores

```html
✅ Você acorda **inchada** todos os dias e não importa o que faça, 
parece que o corpo não responde?

✅ Já **tentou dietas**, exercícios, chás, cremes e nada resolveu 
o inchaço e a retenção de líquido?

✅ Tem **vergonha de usar certas roupas** porque sabe que o corpo 
não está como gostaria?

✅ Sente que a **celulite e a flacidez** só aumentam com o tempo, 
não importa o que faça?

✅ Não tem **tempo nem dinheiro** para sessões profissionais de 
massagem toda semana?

✅ Já pensou em fazer **drenagem em casa** mas não sabe como 
fazer direito e tem medo de fazer errado?

✅ Olha no **espelho** e não reconhece mais o seu corpo — e isso 
afeta sua autoestima todos os dias?
```

### 2.3 — Absolvição (transição)

```html
A verdade é que a culpa **NÃO É SUA.**

Dietas, exercícios e cremes atacam o problema errado. Eles tentam 
queimar gordura. Mas o que **incha** seu corpo, o que dá aquela 
sensação de **peso** e **desconforto** toda manhã, não é gordura — 
é **fluido retido nos seus tecidos**.

E sabe o que resolve retenção de líquido? **Drenagem.** A mesma 
técnica que esteticistas profissionais cobram R$200 por sessão para fazer.

A diferença é que agora **você pode fazer em si mesma.**
```

---

# SEÇÃO 3 — STORYTELLING DA DANI

**Referência Isabela:** "Como eu saí da insegurança e fui abordada pelo Nubank" — história completa com foto

```
[LAYOUT]
- Título emocional da seção
- Foto da Dani (placeholder circular ou retangular com border-radius)
- Texto narrativo com parágrafos curtos
- Bullets para momentos-chave
- Destaque visual no "ponto de virada"
```

### 3.1 — Título

```html
Como eu saí da frustração e descobri o segredo que 
transformou meu corpo — e o de centenas de clientes.
```

### 3.2 — Abertura + Foto

```html
👋 Olá, eu sou a Dani. Antes de ser a esteticista que já realizou 
mais de 5.000 sessões de massagem modeladora, eu era você.

[PLACEHOLDER: Foto da Dani — profissional, acolhedora]
```

### 3.3 — A Busca Frustrada

```html
Eu sempre tive uma vida saudável — alimentação regulada, 
rotina de exercícios ativos. Mas percebi que isso não era 
suficiente para ter o corpo dos meus sonhos.

Já havia tentado de tudo:

• Receitas milagrosas
• Personal trainers
• Academia todo dia  
• Até caneta de emagrecimento

**Tudo sempre voltava para o mesmo lugar: frustração.**
```

### 3.4 — O Ponto de Virada

```html
Teve um dia em que me arrumei pra sair — coloquei aquele 
vestido que sempre ficou bem — e quando me olhei no espelho, 
não me reconheci.

O corpo inchado, a roupa apertando em lugares que antes não 
apertava. Tirei o vestido, coloquei uma roupa larga e fui assim mesmo.

No caminho, pensei: "eu faço tudo certo — como bem, treino, 
me cuido — e meu corpo não responde."

[NOTA PARA DANI: Substituir pelo cenário real quando validado]
```

### 3.5 — A Descoberta

```html
Foi aí que descobri um **método milenar de modelação corporal** 
em que mesmo pessoas que quase não iam para a academia 
conseguiam aplicar e ter resultados extraordinários — de forma 
quase imediata.

Fui polindo a técnica para se encaixar no contexto do **corpo 
da brasileira** — aquele corpo que possui suas curvas naturais 
e que faz da brasileira o corpo mais desejado do mundo.

**Fazer realçar essas curvas se tornou o objetivo da minha vida.**
```

### 3.6 — A Prova Pessoal

```html
Apliquei a sequência completa de movimentos em mim mesma. 
No final da primeira semana, os sinais já eram claros — corpo 
mais leve, menos inchado, silhueta visivelmente diferente.

Pensei: **"se funciona assim em mim, que já me cuido, 
imagina em quem não faz nada?"**
```

### 3.7 — Os Resultados nas Clientes

```html
Comecei a aplicar em poucas clientes. Os resultados vieram rápido.

• Uma delas reduziu **4cm de cintura em apenas 3 sessões.**
```

### 3.8 — O Diferencial Emocional

```html
Uma cliente começou a chorar na primeira sessão. Não de dor 
— de **alívio**. Disse que fazia anos que não dedicava 30 minutos 
só pra cuidar de si mesma. Quando viu o resultado no espelho, 
chorou de novo.

Depois de resultados rápidos e marcantes, passei a ser chamada 
de **"As mãos que curam"**.
```

### 3.9 — A Missão + Transição

```html
Eu cansei de ver mulheres gastando fortunas em sessões que 
só duram uma semana. Por isso, peguei tudo o que aprendi em 
5 anos de prática profissional e criei o único método que 
transforma seu corpo com prazer.

**Esse é o Desafio Drena 21.**
```

---

# SEÇÃO 4 — APRESENTAÇÃO DO PRODUTO

**Referência Isabela:** "Por isso eu criei o LinkedIn em Ação" + descrição da metodologia + "funciona para você"

```
[LAYOUT]
- Nome do produto em destaque (tipografia grande, cor rose/gold)
- Descrição curta da metodologia
- Seção "Funciona mesmo que..." com 3 items
```

### 4.1 — Nome + Descrição

```html
[Label: ✦ APRESENTANDO]

Desafio Drena 21

A técnica profissional de massagem modeladora — a mesma que 
custa R$200 por sessão — adaptada para você fazer em si mesma, 
todos os dias, em casa, em apenas 15 minutos.

Não é drenagem linfática comum. É drenagem + modelagem. 
Não apenas desincha, mas **MODELA** seu corpo. Drena o líquido 
retido E esculpe suas curvas.

Adaptada pela Dani ao longo de 5 anos para ser simples o 
suficiente pra fazer sozinha e eficiente o suficiente pra 
ver resultado rápido.
```

### 4.2 — Funciona Mesmo Que...

```html
O Desafio Drena 21 funciona para você:

**Mesmo que você nunca tenha feito massagem** — Os vídeos são 
passo a passo, como se estivesse no consultório da Dani.

**Mesmo que você ache que "nada funciona no seu corpo"** — 
Automassagem não é dieta, não é exercício. É uma técnica 
diferente de tudo que você já tentou. Grande parte do inchaço 
é fluido retido nos tecidos — e a drenagem resolve isso diretamente.

**Mesmo que você tenha apenas 15 minutos por dia** — É exatamente 
o tempo que você precisa. Menos que um episódio de série.
```

### 4.3 — CTA #2

```
Botão: QUERO COMEÇAR O DESAFIO AGORA
Subtexto: R$197 ou 12x de R$19,70 · Garantia incondicional de 7 dias
```

---

# SEÇÃO 5 — PROVA SOCIAL (Screenshots/Depoimentos)

**Referência Isabela:** "Veja o que profissionais comuns estão falando" + grid de 9 screenshots

```
[LAYOUT]
- Título da seção
- Grid de screenshots (2 colunas no mobile, gap 12px)
- Cada item é um card com imagem (placeholder) + borda rose sutil
- Scroll horizontal opcional se muitos items
```

### 5.1 — Título

```html
Veja o que **mulheres comuns**, que estavam na mesma 
situação que você, estão dizendo:
```

### 5.2 — Screenshots

```
[PLACEHOLDER: 6-8 cards de depoimento]

Cada card deve ter:
- Espaço para screenshot de WhatsApp (imagem)
- Dimensão sugerida: retangular vertical (proporção ~3:4)
- Background branco, borda: 1px solid #EDE6E0, border-radius: 12px
- Padding: 8px
- Texto alternativo quando não há imagem: 
  "Depoimento de cliente real — em breve"
  
[NOTA: Dani vai inserir as imagens reais posteriormente. 
Construir com placeholders que ela possa substituir facilmente.]
```

### 5.3 — Frase de reforço

```html
Se funcionou para clientes presenciais da Dani, com resultados 
como **4cm a menos de cintura em 3 sessões**, imagine o que 
acontece quando VOCÊ faz em si mesma, todos os dias, por 21 dias.
```

### 5.4 — Antes/Depois (Segundo bloco de prova)

```
[LAYOUT]
- Título: "Resultados reais de clientes da Dani"
- Grid de fotos antes/depois (placeholders)
- 2 colunas: antes | depois
- Mesmo estilo de card com borda sutil

[NOTA: Dani vai inserir fotos reais. Construir placeholders.]
```

---

# SEÇÃO 6 — DIFERENCIAÇÃO "NÃO É / É"

**Referência Isabela:** "O LinkedIn em Ação NÃO É mais um curso genérico..." + lista NÃO É/É

```
[LAYOUT]
- Título da seção
- Itens ❌ (NÃO É) com fundo levemente rosado
- Itens ✅ (É) com fundo levemente dourado/destaque
- Separação visual clara entre os blocos
```

### 6.1 — Título

```html
O Desafio Drena 21 é diferente de tudo que você já tentou.
```

### 6.2 — NÃO É

```html
❌ **NÃO É** mais uma dieta restritiva que te faz passar fome 
e depois voltar tudo.

❌ **NÃO É** um programa de exercícios que exige horas na academia.

❌ **NÃO É** teoria sobre emagrecimento que ninguém aplica.

❌ **NÃO É** um creme milagroso ou chá detox.
```

### 6.3 — É

```html
✅ **É** a técnica profissional de massagem modeladora — a mesma 
que custa **R$200 por sessão** — adaptada para você fazer em si mesma.

✅ **É** um desafio de **21 dias**, com vídeos passo a passo, como 
se você estivesse no consultório da Dani.

✅ **É** **15 minutos por dia** de autocuidado que desincha, modela 
e transforma seu corpo.

✅ **É** prazer, relaxamento e resultado — tudo junto.
```

---

# SEÇÃO 7 — POR QUE FUNCIONA (Razões numeradas)

**Referência Isabela:** Seção com 6 blocos numerados (01, 02, 03...) explicando por que o método funciona

```
[LAYOUT]
- Cards numerados (01, 02, 03...) com número grande em gold
- Título do card em bold
- Texto explicativo abaixo
- Background alternado (branco e bg)
```

### 7.1 — Cards

```
01
### Seu Inchaço Não É Gordura — É Fluido Retido
Aquele inchaço que você sente toda manhã não é gordura. O corpo 
humano é mais de 50% água, e quando seu sistema linfático não 
drena esse líquido de forma eficiente, o resultado é inchaço, 
peso e desconforto. A automassagem ativa essa drenagem manualmente.

02
### Resultado Visível nos Primeiros Dias
Diferente de dieta e exercício que levam semanas, a drenagem 
manual atua diretamente no fluido retido nos tecidos. Por isso 
o desinchamento é visível já nos primeiros dias — você não está 
"emagrecendo", está destravando o que já estava preso.

03  
### 15 Minutos é Tudo Que Você Precisa
Sem horas na academia. Sem preparar marmita. São 15 minutos do 
seu dia, no conforto da sua casa, no horário que for melhor pra você.

04
### Técnica Profissional nas Suas Mãos
O que a Dani cobra R$200 por sessão para fazer em clientes, 
você vai aprender a fazer em si mesma. Mesmos movimentos. 
Mesma técnica. Resultado similar.

05
### Prazer no Lugar de Sofrimento
Enquanto dietas pedem restrição e academia pede esforço, 
automassagem é relaxamento, autocuidado e prazer. Você cuida 
do corpo enquanto cuida de si.

06
### 21 Dias Criam um Hábito
Na primeira semana, seu corpo desincha e começa a responder. 
Na segunda, as medidas começam a cair. Na terceira, a técnica 
já virou hábito e os resultados se acumulam. 21 dias é o tempo 
mínimo pra criar uma rotina que fica.
```

---

# SEÇÃO 8 — MÓDULOS DO CURSO

**Referência Isabela:** "Ao se inscrever agora, você terá acesso imediato a tudo" + cards de módulo com imagem, título, conteúdo e resultado prometido

```
[LAYOUT]
- Título da seção
- Cards de módulo (imagem placeholder à esquerda ou topo, texto à direita/baixo)
- Cada card com: imagem, título, lista de tópicos, resultado prometido em destaque
- Alternar layout (imagem esquerda/direita) ou manter consistente mobile
```

### 8.1 — Título

```html
Ao se inscrever agora, você terá acesso imediato a 
**tudo** que precisa para desinchar e modelar seu corpo
```

### 8.2 — Módulo 1

```
[PLACEHOLDER: Imagem do módulo]

Módulo 1: Preparação + Introdução

Este módulo é a sua base. Aqui, a Dani vai te dar as instruções 
exatas para começar com o pé direito.

• O que é o Desafio Drena 21 e como funciona
• Indicação de óleo ou creme (pode usar o que tem em casa)
• Como potencializar seus resultados
• Contraindicações importantes

**Resultado:** Você vai entender exatamente como funciona e 
preparar seu corpo para os 21 dias de transformação.
```

### 8.3 — Módulo 2

```
[PLACEHOLDER: Imagem do módulo]

Módulo 2: Semana 1 — Pernas + Glúteos

Aulas 100% práticas. Você aprende e aplica assistindo junto 
com a Dani, como se estivesse no consultório dela.

• Coxas anteriores e posteriores
• Bumbum Up — técnica de lifting natural
• Joelhos
• Panturrilhas
• Pés

**Resultado:** Pernas mais leves, definidas e glúteos visivelmente 
mais firmes em 7 dias.
```

### 8.4 — Módulo 3

```
[PLACEHOLDER: Imagem do módulo]

Módulo 3: Semana 2 — Abdômen

O módulo mais desejado. Foco na região nº1 de insatisfação feminina.

• Preparação do abdômen
• Manobra 1 — Drenagem profunda
• Manobra 2 — Modelagem abdominal
• Afinar cintura

**Resultado:** Barriga visivelmente menos inchada e cintura 
mais definida.
```

### 8.5 — Módulo 4

```
[PLACEHOLDER: Imagem do módulo]

Módulo 4: Semana 3 — Braços + Corpo Completo

O módulo que fecha o ciclo e consolida todos os resultados.

• Mãos
• Braços

**Resultado:** Silhueta completa modelada. Corpo inteiro 
transformado em 21 dias.
```

---

# SEÇÃO 9 — BÔNUS

**Referência Isabela:** "Para acelerar seus resultados, você vai receber estes presentes exclusivos" + cards com imagem, nome, descrição e VALOR em R$

```
[LAYOUT]
- Título da seção
- Cards de bônus com:
  - Emoji 🎁 + "BÔNUS #N"
  - Imagem placeholder
  - Nome do bônus (em destaque)
  - Descrição (2-3 linhas)
  - Valor original em R$ (com destaque gold)
- Alternar: imagem esquerda/direita em cada bônus
```

### 9.1 — Título

```html
Para acelerar seus resultados e potencializar sua transformação, 
você vai receber estes **presentes exclusivos:**
```

### 9.2 — Bônus #1

```
🎁 BÔNUS #1

[PLACEHOLDER: Imagem do bônus]

Protocolo Rosto de Cristal

Técnica de rolo de gelo para firmeza e rejuvenescimento facial. 
Desinche o rosto, reduza olheiras e tenha uma pele mais firme 
e luminosa em poucos minutos.

**VALOR: R$97**
```

### 9.3 — Bônus #2

```
🎁 BÔNUS #2

[PLACEHOLDER: Imagem do bônus]

Ritual Energético Detox

Banho detox que potencializa a drenagem e elimina toxinas. 
Um ritual de autocuidado que complementa a automassagem 
e acelera seus resultados.

**VALOR: R$67**
```

### 9.4 — Bônus #3

```
🎁 BÔNUS #3

[PLACEHOLDER: Imagem do bônus]

Guia Desincha Já — com Nutricionista

Alimentação anti-inchaço + dicas exclusivas com nutricionista. 
Descubra quais alimentos estão te inchando e quais vão 
potencializar sua drenagem.

**VALOR: R$127**
```

### 9.5 — Bônus #4

```
🎁 BÔNUS #4

[PLACEHOLDER: Imagem do bônus]

Hidratação Profunda Pro

Protocolo profissional de hidratação corporal que deixa 
sua pele de seda. O complemento perfeito para a automassagem.

**VALOR: R$67**
```

---

# SEÇÃO 10 — ANCORAGEM DE PREÇO

**Referência Isabela:** Lista com cada item + valor individual → soma total → "Mas somente agora..." → preço real com desconto

```
[LAYOUT]
- Lista vertical com cada componente + valor em R$ (riscado ou em destaque)
- Separador visual
- Soma total em destaque (R$855)
- Frase de transição
- Preço real GRANDE (R$197 ou 12x R$19,70)
- CTA
```

### 10.1 — Lista de Valores

```html
Se você fosse comprar tudo separadamente, você investiria:

• Desafio Drena 21 Completo .................. R$497
• Protocolo Rosto de Cristal ................. R$97
• Ritual Energético Detox .................... R$67
• Guia Desincha Já (c/ nutricionista) ........ R$127
• Hidratação Profunda Pro .................... R$67

VALOR TOTAL: R$855
```

### 10.2 — Ancoragem com sessões profissionais

```html
Mas se você fizesse 21 sessões de massagem modeladora profissional...

**21 × R$200 = R$4.200**
```

### 10.3 — Transição

```html
Mas, porque eu quero que toda mulher possa cuidar do seu corpo 
com prazer, você não vai pagar nem perto disso.

Somente para você que chegou até aqui, o acesso completo ao 
Desafio Drena 21, incluindo todos os 4 bônus exclusivos, sai por:
```

### 10.4 — Preço Real

```html
De R$855 por apenas:

12x R$19,70

ou R$197 à vista.

Pelo preço de UMA sessão profissional, aprenda a fazer 
sozinha pra sempre.
```

### 10.5 — CTA #3

```
Botão: GARANTIR MINHA VAGA POR APENAS R$197
Subtexto: Acesso imediato + vitalício · Garantia incondicional de 7 dias
Link: [URL do checkout Kiwify]
```

---

# SEÇÃO 11 — PARA QUEM É / NÃO É

**Referência Isabela:** Duas colunas — "Não é para você se:" e "É a solução definitiva se você:"

```
[LAYOUT]
- Duas seções visuais distintas
- "Não é para você" com fundo levemente escuro/cinza e ícones ❌
- "É para você" com fundo rose/gold claro e ícones ✅
- Border-radius nos cards
```

### 11.1 — Título

```html
Até aqui fez sentido, mas... Será que o 
**Desafio Drena 21** é para você?
```

### 11.2 — NÃO É para você se:

```html
❌ Você não está disposta a dedicar 15 minutos por dia ao seu corpo.

❌ Você quer resultado mágico sem fazer nada — sem seguir 
as instruções e sem compromisso.

❌ Você não segue instruções em vídeo e não vai assistir 
as aulas antes de praticar.
```

### 11.3 — É A SOLUÇÃO DEFINITIVA SE VOCÊ:

```html
✅ Está cansada de inchaço e quer desinchar em dias, não em meses.

✅ Quer modelar e realçar suas curvas sem academia e sem dieta.

✅ É mãe, trabalha, cuida da casa e não tem tempo sobrando — 
mas quer dedicar 15 minutos a si mesma.

✅ Já tentou de tudo e nada funcionou — dietas, exercícios, 
cremes, chás.

✅ Quer se olhar no espelho e se sentir bonita e confiante.

✅ Quer parar de gastar R$200 por sessão e aprender a fazer sozinha.
```

---

# SEÇÃO 12 — SOBRE A DANI (Autoridade)

**Referência Isabela:** "Quem é Isabela Schnorr, a recrutadora que vai te ensinar" + foto + lista de credenciais

```
[LAYOUT]
- Título
- Foto da Dani (placeholder grande, retangular, border-radius)
- Lista de credenciais com ícone/bullet
- Tom: autoridade + acolhimento
```

### 12.1 — Título

```html
Quem é **Dani**, a esteticista que vai te ensinar 
a **transformar seu corpo**?
```

### 12.2 — Foto

```
[PLACEHOLDER: Foto da Dani — profissional, sorrindo, acolhedora]
```

### 12.3 — Credenciais

```html
Você não está aprendendo com uma "influencer" que vende teoria. 
Você está aprendendo com quem transforma corpos todos os dias 
com as próprias mãos:

• **5+ anos de experiência** como esteticista profissional, 
  especialista em massagem modeladora.

• **Mais de 5.000 sessões realizadas** — ela sabe exatamente 
  quais movimentos funcionam e como adaptá-los para você 
  fazer em casa.

• **Especialista certificada na técnica Renata França** — 
  a referência nº1 em massagem modeladora no Brasil.

• **Resultados reais:** Clientes com redução de até 4cm de 
  cintura em apenas 3 sessões.

• **"As mãos que curam"** — apelido dado pelas próprias clientes 
  pelo poder de transformação e acolhimento das sessões.

Aprenda com quem faz, não com quem fala.
```

---

# SEÇÃO 13 — GARANTIA

**Referência Isabela:** Selo de garantia visual + texto + "o risco é todo meu"

```
[LAYOUT]
- Card centralizado com destaque visual
- Ícone/selo de garantia (shield ou selo dourado)
- Texto claro e direto
- Fundo levemente diferenciado (branco ou dourado sutil)
```

### 13.1 — Título

```html
RISCO ZERO: A ÚNICA COISA QUE VOCÊ TEM A PERDER É O INCHAÇO
```

### 13.2 — Texto

```html
Eu confio tanto no poder do Desafio Drena 21 e na capacidade 
de transformar seu corpo que o risco é todo meu.

Você tem **7 dias de Garantia Incondicional.**

Acesse o curso, assista às aulas, comece a praticar. 
Se, por qualquer motivo, você achar que o desafio não é 
para você, ou se simplesmente mudar de ideia, basta pedir.

Devolveremos **100% do seu investimento**, sem perguntas 
e sem burocracia.

Você tem 7 dias para testar o método que já transformou 
centenas de corpos. Se não funcionar, você não paga.
```

### 13.3 — CTA #4

```
Botão: SIM! QUERO MODELAR MEU CORPO EM CASA
Subtexto: Acesso imediato · Garantia 7 dias · 12x R$19,70
```

---

# SEÇÃO 14 — FAQ

**Referência Isabela:** "Perguntas Frequentes" com accordion expansível (6 items)

```
[LAYOUT]
- Título da seção
- Accordion items (click para expandir)
- Ícone + ou chevron para indicar expansível
- Fundo branco, borda sutil
```

### 14.1 — Título

```html
Perguntas **Frequentes**
```

### 14.2 — FAQ Items

```
Q: Funciona mesmo?
A: O Desafio Drena 21 usa a mesma técnica profissional que a 
Dani aplica em clientes há mais de 5 anos, com resultados 
comprovados. Além disso, você tem 7 dias de garantia 
incondicional — se não gostar, devolvemos 100% do valor.

---

Q: Não tenho tempo. Quanto tempo por dia preciso dedicar?
A: 15 minutos por dia. Menos que um episódio de série. 
Você pode fazer de manhã, à noite, no horário que for 
melhor pra você.

---

Q: Não sei fazer massagem. Vou conseguir?
A: Se você consegue passar creme no corpo, consegue fazer 
automassagem. Os vídeos são passo a passo, como se você 
estivesse no consultório da Dani. Ela mostra cada movimento 
em detalhes.

---

Q: É caro?
A: Uma sessão profissional de massagem modeladora custa 
R$200 ou mais. O Desafio inteiro, com 21 dias de técnica 
+ 4 bônus, custa R$197 — ou 12x de R$19,70 (menos de R$1 
por dia). E o acesso é vitalício.

---

Q: Quando vou ver resultado?
A: O desinchamento é visível nos primeiros dias. Clientes 
presenciais da Dani relatam redução de 2 a 5cm na região 
abdominal ao longo das sessões. Com automassagem diária, 
a tendência é resultado progressivo ao longo dos 21 dias.

---

Q: Preciso comprar produtos caros?
A: Não. Pode usar óleo de coco ou creme hidratante que 
você já tem em casa. Nada de produto especial ou caro.

---

Q: Já tentei de tudo e nada deu certo. Por que seria diferente?
A: Porque isso não é dieta nem exercício. É uma técnica 
profissional completamente diferente de tudo que você já 
fez. Enquanto dietas tentam queimar gordura, a automassagem 
atua diretamente no fluido retido nos tecidos — por isso 
o resultado é mais rápido e visível.

---

Q: É só pra quem quer emagrecer?
A: Não. O Desafio serve para desinchar, modelar, reduzir 
celulite, relaxar e cuidar de si. Muitas clientes da Dani 
buscam modelagem e definição de silhueta, não emagrecimento.

---

Q: Por quanto tempo terei acesso ao curso?
A: O acesso é VITALÍCIO. Você compra uma vez e pode 
revisar o conteúdo sempre que precisar.
```

---

# SEÇÃO 15 — OFERTA FINAL (Último empurrão)

**Referência Isabela:** "Esta é a sua última chance de garantir seu acesso" + recap completo + preço + CTA final + urgência

```
[LAYOUT]
- Título urgente
- Recap de tudo que está incluso (lista com valores)
- Valor total riscado
- Preço real GRANDE
- CTA final (botão grande, coral, full-width)
- Frase de urgência abaixo
```

### 15.1 — Título

```html
Esta é a sua última chance de garantir seu acesso 
com essa oferta exclusiva
```

### 15.2 — Recap

```html
Seu acesso inclui:

• Desafio Drena 21 — Curso completo com 4 módulos 
  práticos em vídeo (Valor: R$497)
• Bônus: Protocolo Rosto de Cristal (Valor: R$97)
• Bônus: Ritual Energético Detox (Valor: R$67)
• Bônus: Guia Desincha Já com Nutricionista (Valor: R$127)
• Bônus: Hidratação Profunda Pro (Valor: R$67)
```

### 15.3 — Preço

```html
VALOR TOTAL: R$855

Mas, somente agora, nesta página, você leva tudo por:

12x R$19,70

ou R$197 à vista.
```

### 15.4 — CTA #5 (Final)

```
Botão: QUERO MINHA VAGA COM ACESSO IMEDIATO E VITALÍCIO
Link: [URL do checkout Kiwify]
```

### 15.5 — Urgência

```html
Isso é menos que R$1 por dia para transformar seu corpo 
com prazer, em casa, em 15 minutos.
```

---

# SEÇÃO 16 — FOOTER

```
[LAYOUT]
- Minimalista
- Logo "DANI ESTÉTICA" (Plus Jakarta Sans Light, uppercase)
- Texto: "© 2026 Dani Estética. Todos os direitos reservados."
- Links (se houver): Termos de uso | Política de privacidade
- Sem menu de navegação (LP de venda = sem distrações)
```

---

# MAPA DE CTAs (Resumo)

| # | Localização | Texto do Botão | Depois de... |
|---|-------------|----------------|-------------|
| 1 | Hero | QUERO DESINCHAR EM 21 DIAS | Headline + sub |
| 2 | Após Produto | QUERO COMEÇAR O DESAFIO AGORA | Apresentação + "funciona mesmo que" |
| 3 | Após Preço | GARANTIR MINHA VAGA POR APENAS R$197 | Ancoragem de preço |
| 4 | Após Garantia | SIM! QUERO MODELAR MEU CORPO EM CASA | Garantia 7 dias |
| 5 | Oferta Final | QUERO MINHA VAGA COM ACESSO IMEDIATO E VITALÍCIO | Recap completo |
| 6 | Header fixo | Começar agora (pill pequeno) | Sempre visível no scroll |

Todos os CTAs apontam para: **[URL do checkout Kiwify]**
Todos os CTAs têm subtexto: **R$197 ou 12x de R$19,70 · Garantia de 7 dias**

---

# ORDEM DAS SEÇÕES (Top → Bottom)

```
1.  HERO — Headline + Sub + Badge + CTA #1
2.  DORES — "Você se identifica?" + lista + Absolvição
3.  STORYTELLING — História da Dani (completa)
4.  PRODUTO — Apresentação do Desafio Drena 21 + "Funciona mesmo que..." + CTA #2
5.  PROVA SOCIAL — Screenshots + Antes/Depois (placeholders)
6.  DIFERENCIAÇÃO — "NÃO É / É"
7.  POR QUE FUNCIONA — 6 cards numerados
8.  MÓDULOS — O que tem dentro (4 módulos com resultado prometido)
9.  BÔNUS — 4 bônus com nome, descrição e valor
10. ANCORAGEM — Lista de valores + preço real + CTA #3
11. PARA QUEM É / NÃO É — Duas listas contrastantes
12. SOBRE A DANI — Foto + credenciais + autoridade
13. GARANTIA — 7 dias + selo + CTA #4
14. FAQ — 9 perguntas (accordion)
15. OFERTA FINAL — Recap + preço + CTA #5 + urgência
16. FOOTER
```

---

# ASSETS NECESSÁRIOS (Placeholders)

| Asset | Status | Responsável | Nota |
|-------|--------|-------------|------|
| Foto profissional da Dani | Pendente | Dani | Usar placeholder genérico |
| Screenshots WhatsApp (depoimentos) | Pendente | Dani | 6-8 placeholders |
| Fotos antes/depois | Pendente | Dani | 4-6 placeholders |
| Imagem dos módulos (1-4) | Pendente | Rafael | Placeholder com título |
| Imagem dos bônus (1-4) | Pendente | Rafael | Placeholder com título |
| VSL (vídeo vertical) | Não gravada | Rafael + Dani | Placeholder de vídeo |
| Logo Dani Estética | Pendente | Rafael | Usar tipografia por enquanto |
| Selo de garantia 7 dias | Criar | Dev | Shield icon ou selo visual |

---

# NOTAS TÉCNICAS PARA O DESENVOLVEDOR

```
1. FRAMEWORK: Next.js 14+ (App Router) + Tailwind CSS + TypeScript
2. ANIMAÇÕES: Framer Motion (fade-in suave nos scroll, não exagerar)
3. DEPLOY: Vercel (via GitHub)
4. FONTE: Google Fonts — Plus Jakarta Sans (importar apenas 400, 500, 700, 800)
5. IMAGENS: Usar next/image com placeholders blur
6. PERFORMANCE: Lighthouse score > 90 mobile
7. SEO: Meta tags básicas (título, descrição, OG image)
8. PIXEL: Espaço para Meta Pixel no <head> (inserir depois)
9. CHECKOUT: Todos os CTAs linkam para URL Kiwify (placeholder por enquanto)
10. RESPONSIVO: Mobile-first, mas funcionar decentemente em desktop 
    (max-width 420px centralizado, ou expandir com design adaptado)
11. ACESSIBILIDADE: Alt text em todas imagens, contraste adequado
12. SCROLL SUAVE: smooth scroll nos anchor links do header CTA
13. HEADER STICKY: com backdrop-blur, aparece após scroll de 100px
14. FAQ: Accordion com animação suave de expand/collapse
15. LAZY LOADING: em todas as imagens de depoimentos e módulos
```

---

*Documento pronto para execução. Todas as decisões de copy, estrutura, design 
e ordem das seções estão definidas. O desenvolvedor (Claude Code) deve seguir 
este documento como blueprint exato da LP.*
