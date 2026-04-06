# 🏆 SISTEMA DE REPUTAÇÃO V2 - DOCUMENTAÇÃO COMPLETA

**Data**: 5 de abril de 2026  
**Status**: ✅ PRONTO PARA USO  
**Compatibilidade**: 100% com sistema anterior

---

## 📋 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Estrutura de Dados](#estrutura-de-dados)
3. [Conceitos Principais](#conceitos-principais)
4. [Estados do Status](#estados-do-status)
5. [Níveis de Reputação](#níveis-de-reputação)
6. [Efeitos Passivos](#efeitos-passivos)
7. [Interface do Usuário](#interface-do-usuário)
8. [Compatibilidade Backward](#compatibilidade-backward)
9. [API Pública](#api-pública)
10. [Debugging](#debugging)

---

## 🎯 Visão Geral

O Sistema de Reputação V2 transforma a reputação simples (número 0-50) em um sistema complexo com **dois eixos independentes**:

- **⭐ FAMA**: Representa a boa reputação, reconhecimento positivo
- **☠️ TEMOR**: Representa o medo, respeito baseado em poder bruto

Cada eixo vai de **0 a 100** e pode ser controlado independentemente por **mundo** e **região**.

### Diferenças do Sistema Antigo

| Aspecto | V1 | V2 |
|---------|----|----|
| **Escala** | 0-50 | 0-100 |
| **Eixos** | 1 (valor único) | 2 (fama + temor) |
| **Localidades** | mundo, região | mundo (fama+temor), região (fama+temor) |
| **Estados** | Simples (nível 0-5) | Complexo (4 arquétipos) |
| **Efeitos** | Nenhum | Passivos dinâmicos |

---

## 📊 Estrutura de Dados

### Novo Formato (V2)

```javascript
{
  mundo: {
    fama: 0-100,      // Reconhecimento positivo no mundo todo
    temor: 0-100      // Medo inspirado no mundo todo
  },
  regiao: {
    fama: 0-100,      // Reconhecimento positivo na região
    temor: 0-100      // Medo inspirado na região
  }
}
```

### Formato Antigo (V1) - AINDA SUPORTADO

```javascript
{
  mundo: 0-50,  // número simples
  regiao: 0-50  // número simples
}
```

### Conversão Automática

Quando o sistema V2 detecta dados V1, faz a conversão automaticamente:

```javascript
// V1 → V2
{ mundo: 30, regiao: 20 }

// Convertido para:
{ 
  mundo: { fama: 30, temor: 0 },
  regiao: { fama: 20, temor: 0 }
}
```

---

## 🧠 Conceitos Principais

### 1. Dual-Axis (Dois Eixos)

Diferente de um sistema simples linear (1-100), o V2 usa 2 dimensões:

```
FAMA (eixo Y)
  │
  │ ✅ Herói (Alta fama, baixo temor)
  │     
  │     🌑 Lenda Ambígua (Alta fama, alto temor)
  │
  ├─────────────────────────→ TEMOR (eixo X)
  │
  │ 👤 Desconhecido
  │ (Baixa fama, baixo temor)
```

### 2. Identidade vs Poder

- **FAMA**: "O que as pessoas dizem sobre você" → Identidade heroica
- **TEMOR**: "O que as pessoas têm medo de você fazer" → Poder intimidador

Uma pessoa pode ser ambas simultaneamente:
- Um herói temido (ex: conquistador brutal)
- Uma lenda amiga (ex: sábio venerado)

---

## 🎭 Estados do Status

O sistema calcula automaticamente 5 estados baseado na relação entre fama e temor:

### 1. **✨ Herói** (Fama Alta > Temor)
- Condição: `fama >= 40 && fama > temor`
- Aura: Dourada
- Exemplo: "O Herói do Povo"
- Efeitos:
  - +Desconto em lojas
  - +Aliados voluntários
  - +Reconhecimento automático

### 2. **👿 Tirano** (Temor Alto > Fama)
- Condição: `temor >= 40 && temor > fama`
- Aura: Sombria (vermelha/preta)
- Exemplo: "Encarnação do Mal"
- Efeitos:
  - +Intimidação
  - +Inimigos fogem
  - +Critério em combate

### 3. **🌑 Lenda Ambígua** (Ambos Altos)
- Condição: `fama >= 40 && temor >= 40`
- Aura: Mista (roxo/dourado)
- Exemplo: "Conquistador Lendário"
- Efeitos:
  - Combina efeitos de Herói + Tirano
  - +Influência total
  - +Modificadores duplos

### 4. **👤 Desconhecido** (Ambos Baixos)
- Condição: `fama < 30 && temor < 30`
- Aura: Neutra
- Exemplo: "Aventureiro Anônimo"
- Efeitos: Nenhum bônus especial

### 5. **⚖️ Neutro** (Estado Intermediário)
- Condição: Nenhum dos anteriores
- Aura: Azul (neutra)
- Exemplo: "Personagem Comum"
- Efeitos: Bônus menores

---

## 📈 Níveis de Reputação

Cada eixo tem 8 níveis (0-100):

### ⭐ Fama

| Valor | Nível | Título | Descrição |
|-------|-------|--------|-----------|
| 0-10 | 0 | 👤 Desconhecido | Ninguém sabe quem você é |
| 11-20 | 1 | 👁️ Notado | Algumas pessoas já ouviram falar |
| 21-30 | 2 | ⭐ Reconhecido | Muitos conhecem seu nome |
| 31-45 | 3 | ✨ Famoso | Você é bem conhecido |
| 46-60 | 4 | 🌟 Influente | Sua fama abre portas |
| 61-75 | 5 | 💫 Lendário | Histórias sobre você se espalham |
| 76-90 | 6 | 🌠 Mítico | Você é quase uma lenda |
| 91-100 | 7 | 👑 Divindade Viva | Você transcendeu a mortalidade |

### ☠️ Temor

| Valor | Nível | Título | Descrição |
|-------|-------|--------|-----------|
| 0-10 | 0 | 😊 Inofensivo | Você não inspira medo |
| 11-20 | 1 | 😐 Notável | Alguns respeitam seu poder |
| 21-30 | 2 | 😦 Respeitado | Você é levado a sério |
| 31-45 | 3 | 😰 Temido | As pessoas evitam contato |
| 46-60 | 4 | 😱 Aterrorizante | Seu nome causa arrepios |
| 61-75 | 5 | 💀 Assombração | Você é uma ameaça conhecida |
| 76-90 | 6 | 👿 Encarnação do Mal | Você é lenda negra |
| 91-100 | 7 | 💀 Morte Ambulante | Você é o próprio terror |

---

## 🎁 Efeitos Passivos

Os efeitos são calculados baseado no **valor máximo entre mundo e região** para cada eixo.

### Efeitos de FAMA

```javascript
20+ : [
  '💰 +5% desconto em lojas',
  '🤝 NPCs mais amigáveis'
]

45+ : [
  '💳 +10% desconto em lojas',
  '🎁 Acesso a lojas exclusivas',
  '⚔️ Aliados podem se oferecer para ajudar'
]

60+ : [
  '💎 +15% desconto em lojas',
  '🏰 Acesso a áreas nobres',
  '👥 +10% XP de interações sociais'
]

75+ : [
  '👑 +20% desconto em lojas',
  '🎭 NPCs organizam eventos',
  '🌟 Reconhecimento automático'
]

90+ : [
  '⭐ Preço especial em itens raros',
  '🏛️ Acesso a bibliotecas antigas',
  '💫 +20% XP de todas as ações'
]
```

### Efeitos de TEMOR

```javascript
20+ : [
  '💪 +5% em intimidação',
  '😐 NPCs neutros não atacam'
]

45+ : [
  '🔥 +10% em intimidação',
  '🚫 Inimigos fracos evitam você',
  '⚔️ +5% critério em combate'
]

60+ : [
  '💀 +15% em intimidação',
  '🏃 Inimigos fogem automaticamente',
  '⚔️ +10% critério em combate'
]

75+ : [
  '👿 +20% em intimidação',
  '🌑 Aura de medo ao seu redor',
  '⚔️ +15% critério em combate'
]

90+ : [
  '💀 Intimidação infalível',
  '🌑 Ninguém ousa atacar',
  '⚔️ +25% critério em combate'
]
```

---

## 🪟 Interface do Usuário

### Layout Modal (3 Seções)

#### 1️⃣ VISÃO GERAL
- Nome do status atual (Herói, Tirano, etc)
- Aura visual baseada no status
- Barras duplas para mundo:
  - ⭐ Fama (azul/dourado com glow)
  - ☠️ Temor (roxo/vermelho com glow)
- Barras duplas para região
- Animações de pulso nas barras

#### 2️⃣ CONTROLE (Inputs)
Grid com 2 colunas:
- 🌍 MUNDO
  - Input para Fama (0-100)
  - Input para Temor (0-100)
- 📍 REGIÃO
  - Input para Fama (0-100)
  - Input para Temor (0-100)

Atualização em tempo real das barras e status.

#### 3️⃣ IMPACTO (Efeitos Passivos)
Duas colunas:
- ⭐ Efeitos por Fama (lista com itens destacados)
- ☠️ Efeitos por Temor (lista com itens destacados)

Efeitos aparecem dinamicamente conforme valores mudam.

### Cores e Efeitos

- **Herói**: Aura dourada ✨, brilho dourado, border #ffd700
- **Tirano**: Aura sombria 🌑, brilho vermelho/preto, border #8b0000
- **Ambíguo**: Aura mista 🌑, brilho roxo/dourado, border #9370db
- **Desconhecido**: Neutro, brilho suave, border #d4af37
- **Neutro**: Azul, brilho azul, border #6496c8

---

## 🔄 Compatibilidade Backward

### Sistema Antigo Continua Funcionando

O `reputacao-modal.js` original continua carregado e funcional. O novo sistema V2 não quebra nada.

### Dados Antigos São Convertidos Automaticamente

Se você tem dados no formato V1:
```javascript
{ mundo: 25, regiao: 15 }
```

Ao abrir o modal V2, são convertidos para:
```javascript
{
  mundo: { fama: 25, temor: 0 },
  regiao: { fama: 15, temor: 0 }
}
```

### Salvamento Mantém Compatibilidade

Quando o V2 salva, também inclui um campo `valor` para retrocompatibilidade:

```javascript
{
  mundo: {
    fama: 50,
    temor: 30,
    valor: 50  // para V1 ler
  },
  regiao: {
    fama: 40,
    temor: 20,
    valor: 40  // para V1 ler
  }
}
```

---

## 🔌 API Pública

### Instância Global

```javascript
window.reputacaoV2  // Acesso ao sistema V2
window.reputacaoModal  // Sistema V1 (still available)
```

### Métodos Públicos

#### `abrir()`
Abre o modal de reputação.
```javascript
window.reputacaoV2.abrir();
```

#### `fechar()`
Fecha o modal.
```javascript
window.reputacaoV2.fechar();
```

#### `getStatus()`
Retorna o estado completo do sistema.
```javascript
const status = window.reputacaoV2.getStatus();
console.log(status);
// {
//   mundo: { fama: 50, temor: 30, status: {...} },
//   regiao: { fama: 40, temor: 20, status: {...} }
// }
```

#### `calcularStatusAtual(fama, temor)`
Calcula qual é o status baseado em fama e temor.
```javascript
const status = window.reputacaoV2.calcularStatusAtual(60, 40);
// { nome: '🌑 Lenda Ambígua', classe: 'ambiguo', ... }
```

#### `obterNivel(valor, tipo)`
Obtém o nível descritivo para um valor.
```javascript
const nivel = window.reputacaoV2.obterNivel(50, 'fama');
// { range: [46, 60], titulo: '🌟 Influente', ... }
```

#### `salvar()`
Salva os dados atuais.
```javascript
window.reputacaoV2.salvar();
```

#### `debug()`
Imprime informações de debug no console.
```javascript
window.reputacaoV2.debug();
```

---

## 🐛 Debugging

### Console Output

O sistema V2 imprime logs detalhados:

```javascript
🏆 Inicializando ReputacaoV2...
📊 Dados carregados: {...}
✅ ReputacaoV2 pronto!
✅ ReputacaoV2 disponível globalmente
```

### Verificar Status

```javascript
window.reputacaoV2.debug();
// Abre um group com tabelas dos dados
```

### Testar Conversão

```javascript
// Simular dados V1
window.appState.setReputation({ mundo: 30, regiao: 20 });

// Recarregar V2
window.reputacaoV2.carregarDados();
window.reputacaoV2.debug();

// Verá dados convertidos
```

### Verificar Efeitos

```javascript
const efeitos = window.reputacaoV2.calcularEfeitos(60, 'fama');
console.log(efeitos);
// [ '💎 +15% desconto em lojas', '🏰 Acesso a áreas nobres', ... ]
```

---

## 🎮 Exemplos de Uso

### Exemplo 1: Herói Lendário

```javascript
window.reputacaoV2.dados.mundo.fama = 75;
window.reputacaoV2.dados.mundo.temor = 20;
window.reputacaoV2.atualizarVisao();

// Status: ✨ Herói
// Efeitos: +20% desconto, acesso a áreas nobres, reconhecimento automático
```

### Exemplo 2: Tirano Aterrorizante

```javascript
window.reputacaoV2.dados.mundo.temor = 85;
window.reputacaoV2.dados.mundo.fama = 30;
window.reputacaoV2.atualizarVisao();

// Status: 👿 Tirano
// Efeitos: Intimidação infalível, ninguém ousa atacar, +25% critério
```

### Exemplo 3: Lenda Ambígua

```javascript
window.reputacaoV2.dados.mundo.fama = 80;
window.reputacaoV2.dados.mundo.temor = 75;
window.reputacaoV2.atualizarVisao();

// Status: 🌑 Lenda Ambígua
// Efeitos: Combina TODOS os efeitos de herói e tirano
```

### Exemplo 4: Desconhecido

```javascript
window.reputacaoV2.dados.mundo.fama = 10;
window.reputacaoV2.dados.mundo.temor = 5;
window.reputacaoV2.atualizarVisao();

// Status: 👤 Desconhecido
// Efeitos: Nenhum bônus
```

---

## 📝 Notas Técnicas

### Cálculo do Status

```javascript
function calcularStatusAtual(fama, temor) {
  const famaMaiorTemor = fama > temor;
  const ambosAltos = fama >= 40 && temor >= 40;
  const ambosBaixos = fama < 30 && temor < 30;

  if (ambosAltos) return 'Lenda Ambígua';
  else if (famaMaiorTemor && fama >= 40) return 'Herói';
  else if (!famaMaiorTemor && temor >= 40) return 'Tirano';
  else if (ambosBaixos) return 'Desconhecido';
  else return 'Neutro';
}
```

### Atualização em Tempo Real

Os inputs de fama/temor trigam eventos `input` que chamam `atualizarVisao()`:

1. Input muda (usuário digita)
2. Valor é validado (0-100)
3. `atualizarBoxStatus()` é chamado
4. Barras são atualizadas
5. Status é recalculado
6. Efeitos são regenerados

Tudo em tempo real, sem necessidade de clique.

### Persistência

Dados são salvos em:
1. `window.appState` (StateManager)
2. `localStorage` (localStorageManager.saveReputacao)
3. `arquivos .json` (sistema de salvar/importar)

---

## 🚀 Próximos Passos (Sugestões)

1. **Integrar com Mecânicas de Jogo**
   - Modificadores dinâmicos aplicados a testes de perícia
   - Custos de compra/venda modificados pelo sistema
   - Reações de NPCs baseadas em status

2. **Eventos Automáticos**
   - Assaltos de bandidos se temor for muito alto
   - Oportunidades de quests se fama for muito alta
   - Reconhecimento automático em lojas

3. **Progressão de Reputação**
   - Sistema de ganho/perda de reputação
   - Conquistas que desbloqueiam efeitos
   - Narrativa adaptativa baseada em status

4. **Visuais Expandidos**
   - Aura do personagem muda baseado em status
   - Título na ficha mostra status
   - Ícone indica tipo de reputação

---

**Desenvolvido com ❤️ para ReDungeon v2.0**
