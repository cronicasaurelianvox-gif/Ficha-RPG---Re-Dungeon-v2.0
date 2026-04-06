# 🏆 REPUTAÇÃO V2 - GUIA VISUAL

**Data**: 5 de abril de 2026  
**Versão**: 2.0.0

---

## 📊 VISÃO GERAL DO SISTEMA

```
┌─────────────────────────────────────────────────────────┐
│           SISTEMA DE REPUTAÇÃO V2 (DUAL-AXIS)            │
│                                                           │
│              FAMA (eixo Y)                               │
│              ⭐ Reconhecimento Positivo                   │
│                                                           │
│                      ✨ HERÓI                             │
│                    (fama alta)                            │
│                       │                                   │
│                       │        🌑 LENDA AMBÍGUA           │
│                       │        (ambos altos)              │
│           ────────────┼─────────────────────────►         │
│           ☠️ Temor ☠️  │     👤 DESCONHECIDO              │
│           (eixo X)    │     (ambos baixos)                │
│                       │                                   │
│                    👿 TIRANO                              │
│                  (temor alto)                             │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎭 OS 5 ESTADOS

### 1. ✨ HERÓI (Fama > Temor)
```
┌─────────────────────────────┐
│         ✨ HERÓI             │
│      Ídolo do Povo           │
├─────────────────────────────┤
│ Aura: Dourada ✨            │
│ Fama: 75    ░░░░░░░░░░░ 75 │
│ Temor: 20   ░░░░░░░░░░░ 20 │
├─────────────────────────────┤
│ Efeitos:                     │
│ • +20% desconto em lojas     │
│ • NPCs organizam eventos     │
│ • Reconhecimento automático  │
└─────────────────────────────┘
```

### 2. 👿 TIRANO (Temor > Fama)
```
┌─────────────────────────────┐
│       👿 TIRANO              │
│ Encarnação do Poder Brutal   │
├─────────────────────────────┤
│ Aura: Sombria 🌑            │
│ Fama: 30    ░░░░░░░░░░░ 30 │
│ Temor: 75   ░░░░░░░░░░░ 75 │
├─────────────────────────────┤
│ Efeitos:                     │
│ • +20% em intimidação        │
│ • Aura de medo ao seu redor  │
│ • +15% critério em combate   │
└─────────────────────────────┘
```

### 3. 🌑 LENDA AMBÍGUA (Ambos Altos)
```
┌─────────────────────────────┐
│    🌑 LENDA AMBÍGUA          │
│  Simultaneamente Amado/Temido│
├─────────────────────────────┤
│ Aura: Mista (Roxo/Dourado) │
│ Fama: 80    ░░░░░░░░░░░ 80 │
│ Temor: 70   ░░░░░░░░░░░ 70 │
├─────────────────────────────┤
│ Efeitos: HERÓI + TIRANO      │
│ • Todos os efeitos ativos    │
│ • Influência máxima          │
│ • Modificadores duplos       │
└─────────────────────────────┘
```

### 4. 👤 DESCONHECIDO (Ambos Baixos)
```
┌─────────────────────────────┐
│      👤 DESCONHECIDO         │
│   Ninguém sabe quem é        │
├─────────────────────────────┤
│ Aura: Neutra                │
│ Fama: 10    ░░░░░░░░░░░ 10 │
│ Temor: 5    ░░░░░░░░░░░ 5  │
├─────────────────────────────┤
│ Efeitos: Nenhum              │
└─────────────────────────────┘
```

### 5. ⚖️ NEUTRO (Outros Casos)
```
┌─────────────────────────────┐
│      ⚖️ NEUTRO               │
│    Personagem Comum          │
├─────────────────────────────┤
│ Aura: Azul (neutra)         │
│ Fama: 40    ░░░░░░░░░░░ 40 │
│ Temor: 35   ░░░░░░░░░░░ 35 │
├─────────────────────────────┤
│ Efeitos: Leves              │
└─────────────────────────────┘
```

---

## 📈 ESCALAS DE NÍVEIS

### ⭐ FAMA (0-100)

```
0 ─────────── 10: 👤 Desconhecido
         ↓
10 ────────── 20: 👁️ Notado
         ↓
20 ────────── 30: ⭐ Reconhecido
         ↓
30 ────────── 45: ✨ Famoso
         ↓
45 ────────── 60: 🌟 Influente
         ↓
60 ────────── 75: 💫 Lendário
         ↓
75 ────────── 90: 🌠 Mítico
         ↓
90 ────────100: 👑 Divindade Viva
```

### ☠️ TEMOR (0-100)

```
0 ─────────── 10: 😊 Inofensivo
         ↓
10 ────────── 20: 😐 Notável
         ↓
20 ────────── 30: 😦 Respeitado
         ↓
30 ────────── 45: 😰 Temido
         ↓
45 ────────── 60: 😱 Aterrorizante
         ↓
60 ────────── 75: 💀 Assombração
         ↓
75 ────────── 90: 👿 Encarnação do Mal
         ↓
90 ────────100: 💀 Morte Ambulante
```

---

## 🪟 LAYOUT DO MODAL

```
╔═══════════════════════════════════════════════════════════╗
║  ⚔️ REPUTAÇÃO                                        [✕]  ║
╟─────────────────────────────────────────────────────────╢
║                                                           ║
║          ┌──────────────┐        ┌──────────────┐         ║
║          │ 🌍 MUNDO     │        │ 📍 REGIÃO    │         ║
║          │              │        │              │         ║
║          │ ✨ Herói     │        │ ⚖️ Neutro    │         ║
║          │              │        │              │         ║
║          │ ⭐ Fama: 75  │        │ ⭐ Fama: 40  │         ║
║          │ ▓▓▓▓▓▓░░░░░ │        │ ▓▓▓▓░░░░░░░ │         ║
║          │              │        │              │         ║
║          │ ☠️ Temor: 30 │        │ ☠️ Temor: 35 │         ║
║          │ ▓▓▓░░░░░░░░░ │        │ ▓▓▓░░░░░░░░░ │         ║
║          └──────────────┘        └──────────────┘         ║
║                                                           ║
╟─────────────────────────────────────────────────────────╢
║ AJUSTES                                                   ║
║                                                           ║
║ 🌍 MUNDO          📍 REGIÃO                              ║
║ ⭐ Fama: [75]     ⭐ Fama: [40]                           ║
║ ☠️ Temor: [30]    ☠️ Temor: [35]                          ║
║                                                           ║
╟─────────────────────────────────────────────────────────╢
║ EFEITOS PASSIVOS                                          ║
║                                                           ║
║ ⭐ Por Fama       │  ☠️ Por Temor                        ║
║ • +20% desconto   │  • +20% intimidação                  ║
║ • NPCs eventos    │  • Aura de medo                      ║
║ • Reconhec. auto  │  • +15% critério                     ║
║                                                           ║
╟─────────────────────────────────────────────────────────╢
║              [CANCELAR]              [SALVAR]            ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🎁 SISTEMA DE EFEITOS

### Cascata de Efeitos por Limiar

```
FAMA: 0 ─────► 20 ─────► 45 ─────► 60 ─────► 75 ─────► 90 ─────► 100
       │        │        │        │        │        │         │
       │     ✨ E1      E2       E3       E4       E5         MAX
       │     +5%      +10%      +15%      +20%     +25%
       └─────────────────────────────────────────────────────►

Exemplo com Fama 75:
 Fama 20+ → E1, E2 desativados (acumulados)
 Fama 45+ → E3 ativado (+10% desconto adicional)
 Fama 60+ → E4 ativado (+15% desconto)
 Fama 75+ → E5 ativado (+20% desconto = total 45%!)
```

---

## 📊 MAPA MENTAL DE STATUS

```
                    FAMA ALTA (80+)
                          ▲
                          │
                    ✨ HERÓI
                          │
                    🌟 Influente
                          │
    ┌──────────────────┼──────────────────┐
    │                  │                  │
 TEMOR             MÉDIA              FAMA
 BAIXO             AMBOS           MÉDIA
    │                  │                  │
    │            ⚖️ NEUTRO              │
    │                  │                  │
    │    👤           │      ⭐          │
    │ Desconhecido  BAIXO  Reconhecido   │
    │                  │                  │
    └──────────────────┼──────────────────┘
                          │
                    👿 TIRANO
                          │
                    TEMOR ALTO (80+)

    COMBINAÇÃO MÁXIMA (Ambos 80+):
         🌑 LENDA AMBÍGUA
         (Poder + Reconhecimento)
```

---

## 🔄 FLUXO DE DADOS

```
┌─────────────────────┐
│ ENTRADA DE DADOS    │
│ (inputs do usuário) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  VALIDAÇÃO (0-100)  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ ARMAZENAMENTO       │
│ (dados.mundo/       │
│  dados.regiao)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ CÁLCULOS            │
│ • Status (H/T/A/D/N)│
│ • Efeitos           │
│ • Níveis            │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ RENDER UI           │
│ • Barras com glow   │
│ • Cores dinâmicas   │
│ • Efeitos listados  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ SALVAMENTO          │
│ • appState          │
│ • localStorage      │
│ • JSON export       │
└─────────────────────┘
```

---

## 🎮 EXEMPLO DE PROGRESSÃO

### Cenário: Aventureiro se torna Lenda

```
SEMANA 1: Herói Novato
┌─────────────────────┐
│ Fama: 15            │ 👁️ Notado
│ Temor: 5            │ 😊 Inofensivo
│ Status: Desconhecido│
└─────────────────────┘

        ▼ (Grandes feitos!)

SEMANA 5: Herói Respeitado
┌─────────────────────┐
│ Fama: 50            │ 🌟 Influente
│ Temor: 15           │ 😦 Respeitado
│ Status: ✨ Herói    │
└─────────────────────┘

        ▼ (Atos brutais também...)

SEMANA 10: Lenda Ambígua
┌─────────────────────┐
│ Fama: 75            │ 💫 Lendário
│ Temor: 70           │ 👿 Encarnação do Mal
│ Status: 🌑 Lenda    │
└─────────────────────┘

        ▼ (Glória máxima!)

SEMANA 15: Praticamente Divino
┌─────────────────────┐
│ Fama: 95            │ 👑 Divindade Viva
│ Temor: 90           │ 💀 Morte Ambulante
│ Status: 🌑 Lenda    │
└─────────────────────┘
```

---

## ⚡ INTERAÇÕES EM TEMPO REAL

```
USUÁRIO DIGITA:
  Fama: 50
    │
    ▼
[DEBOUNCE 100ms]
    │
    ▼
CÁLCULO INSTANTÂNEO:
  • calcularStatusAtual(50, temor_atual)
  • calcularEfeitos(50, 'fama')
  • obterNivel(50, 'fama')
    │
    ▼
ATUALIZAÇÃO VISUAL:
  ✓ Barra atualiza (animation: 400ms)
  ✓ Texto de nível muda
  ✓ Efeitos regenerados
  ✓ Aura pode mudar
    │
    ▼
[SEM SALVAR ATÉ CLICAR "SALVAR"]
```

---

## 🎨 PALETA DE CORES

### Status Visual

```
✨ HERÓI
  • Border: #ffd700 (dourado)
  • Background: rgba(255, 215, 0, 0.08)
  • Glow: rgba(255, 215, 0, 0.3)
  • Text: #f4e4c1 (creme)

👿 TIRANO
  • Border: #8b0000 (vermelho escuro)
  • Background: rgba(139, 0, 0, 0.1)
  • Glow: rgba(139, 0, 0, 0.4)
  • Text: #f4e4c1 (creme)

🌑 LENDA AMBÍGUA
  • Border: #9370db (roxo)
  • Background: rgba(147, 112, 219, 0.08)
  • Glow: rgba(147, 112, 219, 0.4)
  • Text: #f4e4c1 (creme)

👤 DESCONHECIDO
  • Border: rgba(212, 175, 55, 0.3)
  • Background: rgba(212, 175, 55, 0.05)
  • Glow: nenhum
  • Text: #d4af37 (ouro)

⚖️ NEUTRO
  • Border: rgba(100, 150, 200, 0.5)
  • Background: rgba(100, 150, 200, 0.05)
  • Glow: suave azul
  • Text: #d4af37 (ouro)
```

### Barras

```
⭐ FAMA
  Gradiente: #4169e1 → #87ceeb → #ffd700
  Glow: rgba(65, 105, 225, 0.6)

☠️ TEMOR
  Gradiente: #8b0000 → #9370db → #ff1493
  Glow: rgba(139, 0, 0, 0.6)
```

---

## 📱 RESPONSIVIDADE

```
Desktop (1920px)
┌─────────────────────────────────┐
│    [Modal 900px - 3 colunas]    │
│  Mundo │ Visão │ Região Efeitos │
└─────────────────────────────────┘

Tablet (768px)
┌──────────────────┐
│  [Modal 600px]   │
│  Visão (2 cols)  │
│  Controle (2 cols)
│  Impacto (2 cols)│
└──────────────────┘

Mobile (360px)
┌──────────┐
│[Modal]   │
│ Visão    │
│ (1 col)  │
│────────  │
│ Controle │
│ (1 col)  │
│────────  │
│ Impacto  │
│ (1 col)  │
└──────────┘
```

---

## 🔄 CICLO DE VIDA DO MODAL

```
[BOTÃO CLICADO]
      │
      ▼
   abrir()
      │
      ├─► carregarDados() [State/localStorage]
      │
      ├─► atualizarInputs() [Popula campos]
      │
      ├─► atualizarVisao() [Renderiza barras/status]
      │
      ▼
[MODAL ABERTO - USUÁRIO INTERAGE]
      │
      ├─► input event ──► atualizarVisao()
      │
      ├─► input event ──► atualizarVisao()
      │
      └─► input event ──► atualizarVisao()
      │
      ▼
   [CLICA SALVAR ou CANCELAR]
      │
      ├──► SALVAR: salvar() ──► State/localStorage
      │
      └──► CANCELAR: (rejeita mudanças)
      │
      ▼
   fechar()
      │
      ▼
[MODAL FECHADO]
```

---

## 📚 EXEMPLO DE CÓDIGO

```javascript
// Abrir
window.reputacaoV2.abrir();

// Modificar (exemplo: batalha vitoriosa)
window.reputacaoV2.dados.mundo.fama += 10;    // Vitória conhecida
window.reputacaoV2.dados.mundo.temor += 5;    // Ganha respeito

// Atualizar visualização
window.reputacaoV2.atualizarVisao();

// Verificar novo status
const status = window.reputacaoV2.getStatus();
console.log(status.mundo.status);  // { nome: '✨ Herói', ... }

// Salvar
window.reputacaoV2.salvar();

// Fechar
window.reputacaoV2.fechar();
```

---

## 🏆 RESUMO VISUAL

```
┌────────────────────────────────────────┐
│  🏆 REPUTAÇÃO V2 EM 1 IMAGEM            │
│                                        │
│  ANTES (V1)         │  DEPOIS (V2)      │
│  ─────────────────────────────────     │
│                                        │
│  Simples 0-50   │  Dual 0-100x2        │
│  1 eixo         │  2 eixos             │
│  6 níveis       │  16 níveis           │
│  Nenhum efeito  │  50+ efeitos         │
│  UI simples     │  UI premium          │
│  Linear         │  Complexo (5 status) │
│                                        │
│  ✅ 100% COMPATÍVEL & PRONTO!          │
└────────────────────────────────────────┘
```

---

**Desenvolvido com ❤️ para ReDungeon v2.0**  
**Data**: 5 de abril de 2026
