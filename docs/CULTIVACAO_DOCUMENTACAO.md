# 🌌 Sistema de Cultivação - Documentação Completa

## 📋 Visão Geral

O Sistema de Cultivação é um módulo profissional, modular e escalável que fornece um Códex Espiritual Vivo para o jogo ReDungeon. Ele suporta três mundos diferentes com sistemas de progresso únicos, enquanto mantém elementos universais compartilhados.

### 🎯 Objetivo

Criar uma experiência imersiva e profunda de cultivo espiritual que pareça um **Códex Espiritual Vivo**, elegante, escalável e preparado para desenvolvimento contínuo.

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
📦 Sistema de Cultivação
├── 📄 css/
│   └── cultivacao-sistema.css       (Estilos modular e responsivo)
├── 📄 js/
│   └── cultivacao-sistema.js        (Lógica completa e gerenciamento)
├── 📄 index.html
│   ├── <link> cultivacao-sistema.css
│   ├── <button id="menu-btn-cultivacao">
│   └── <script> cultivacao-sistema.js
└── 📚 docs/
    └── CULTIVACAO_DOCUMENTACAO.md  (Este arquivo)
```

### Organização do Código JavaScript

O sistema é dividido em duas classes principais:

#### 1. **CultivacaoDadosManager**
Gerencia toda a lógica de dados e estado.

**Responsabilidades:**
- Armazenar e recuperar dados do localStorage
- Gerenciar mudanças de mundos
- Executar cálculos de progresso
- Persistir alterações

**Métodos principais:**
```javascript
// Inicialização
new CultivacaoDadosManager()

// Mundo ativo
dados.obter_mundo_ativo()
dados.definir_mundo_ativo(mundo)

// Universal (todos os mundos)
dados.obter_dantian()
dados.obter_meridianos()
dados.obter_tecnica()
dados.obter_mar_espiritual()

// The Elder Gods
dados.obter_elder_gods()
dados.ganhar_xp_elder_gods(quantidade)
dados.rompimento_rank_elder_gods()

// Boreal Line
dados.obter_boreal_line()
dados.obter_cristal(indice)
dados.atualizar_cristal(indice, dados)
dados.avancar_rank_boreal_line()

// Legends of Murim
dados.obter_murim()
dados.ganhar_fragmentos_murim(quantidade)
dados.adicionar_petala_murim()
dados.avancar_estagio_murim()

// Sistema de Risco
dados.calcular_risco_geral()
```

#### 2. **CultivacaoUIManager**
Gerencia toda a interface visual e interação.

**Responsabilidades:**
- Renderizar elementos HTML
- Atualizar visual em tempo real
- Gerenciar eventos de clique
- Animar transições
- Validar entrada do usuário

**Métodos principais:**
```javascript
// Inicialização
new CultivacaoUIManager(dados_manager)

// Visibilidade
ui.abrir()
ui.fechar()

// Navegação
ui.mudar_mundo(mundo)

// Atualização
ui.atualizar_ui()
ui.atualizar_header()
ui.atualizar_universal()
ui.atualizar_mundo_atual()

// Ações (cada mundo)
ui.egods_ganhar_xp()
ui.egods_romper()
ui.bl_avancar()
ui.murim_ganhar_qi()
ui.murim_adicionar_petala()
```

---

## 🎨 Estrutura Visual

### Layout Geral

```
┌─────────────────────────────────────────────┐
│ HEADER (Titulo, Info do Mundo, Botão Close) │
├─────────────────────────────────────────────┤
│ ABAS (The Elder Gods | Boreal Line | Murim) │
├─────────────────────────────────────────────┤
│                                             │
│ SEÇÃO UNIVERSAL (Sempre visível)            │
│ • Dantian (Barra animada)                   │
│ • Meridianos (Barra animada)                │
│ • Técnica de Cultivo (Expansível)           │
│ • Mar Espiritual (Info dinâmica)            │
│                                             │
│ ───────────────────────────────────────────│
│                                             │
│ SEÇÃO DO MUNDO (Muda com as abas)           │
│ [Conteúdo específico por mundo]             │
│                                             │
└─────────────────────────────────────────────┘
```

### Paleta de Cores

```css
--cult-elder-gods: #c084fc      /* Purple - Divindade */
--cult-boreal-line: #38bdf8     /* Cyan - Cristalino */
--cult-murim: #84cc16           /* Lime - Natural */

--cult-bg-primary: #0f1419      /* Fundo escuro */
--cult-bg-secondary: #1a1f2e    /* Fundo secundário */
--cult-energy-glow: #7c3aed     /* Brilho roxo */
```

---

## 🌍 Sistema de Mundos

### 🟣 The Elder Gods (Sistema de Ranks)

**Conceito:** Ascensão espiritual através de 10 ranks diferentes.

**Ranks:**
1. Corpo Temperado
2. Estágio Qi
3. Consolidação
4. Núcleo Formado
5. Imortal
6. Ascendência
7. Soberania
8. Dominação
9. Divindade
10. Deidade

**Mecânica:**
- Cada rank tem 9 níveis
- XP necessário aumenta com o rank
- Ao atingir nível 9, botão "Rompimento" é habilitado
- Ranks 8+ mostram risco de tribulação
- Tabela de progressão visual com benefícios

**Componentes:**
- Rank Card (Info do rank atual)
- Barra de XP (Progresso de nível)
- Tabela de Ranks (Todo o sistema)
- Benefícios (Bonificações por rank)
- Botões de ação (Ganhar XP, Romper)

### 🔵 Boreal Line (Sistema de Cristais)

**Conceito:** Harmonização de cristais internos para reconstrução corporal.

**Ranks:**
1. Cristalização Inicial
2. Cristalização Média
3. Cristalização Superior
4. Reconstrução Corpórea
5. Deus Cristalino

**Cristais (4 principais por rank):**
- **Dantian:** Núcleo energético
- **Coração:** Emoção e vitalidade
- **Mental:** Inteligência e foco
- **Alma:** Essência do ser (ranks altos)

**Propriedades de Cristal:**
- **Integridade:** Resistência estrutural (0-100%)
- **Estabilidade:** Solidez energética (0-100%)
- **Pureza:** Qualidade da energia (0-100%)
- **Sincronização:** Harmonia com o corpo (0-100%)
- **Estado:** Estável / Instável / Corrompido / Perfeito

**Mecânica:**
- Efeito de hover com brilho cristalino
- Cada cristal é um card independente
- Estados visuais diferentes por condição
- Progresso visual com gradientes cian/azul

### 🟢 Legends of Murim (Sistema de Lótus)

**Conceito:** Cultivação através da formação de pétalas e refinamento de Qi.

**Estrutura:**
- **Fragmentos de Qi:** Coletados através de ações (100 = 1 pétala)
- **Lótus do Céu Imortal:** 
  - Pétalas ativas (1-9)
  - Estágios: Inicial → Refinada → Superior → Perfeita
  - Qualidade visual dinâmica por estágio

- **Núcleo Espiritual:**
  - Cor: Cinzento → Verde → Azul → Dourado (por estágio)
  - Potencial: 0-100% (limitante de crescimento)

- **Canais do Dao:**
  - Quantidade desbloqueada por rank
  - Classificação de talento: Baixo → Normal → Raro → Lendário

**Mecânica:**
- Pétalas aparecem visualmente (até 9)
- Cada pétala exibe estágio atual
- Energia verde-jade para efeitos
- Sistema de fragmentação para equilibrio

---

## 🔧 Sistema Universal

Elementos presentes em **TODOS** os mundos:

### 1. Dantian
**O Armazém de Energia**

```
Estrutura:
├── Dantian Inferior (1000 cap)
├── Dantian Médio (2000 cap)
└── Dantian Superior (5000 cap)

Indicadores:
├── Capacidade atual / máxima
└── Barra animada com brilho
```

**Efeitos Visuais:**
- Gradiente roxo → rosa
- Shimmer contínuo
- Glow interno

### 2. Meridianos
**Os Canais de Energia**

```
Estrutura:
├── Total de Meridianos: 314
├── Meridianos Limpos: X / 314
├── Pureza: X%
└── Eficiência: X%

Indicadores:
├── Barra de progresso
├── Percentual numérico
└── Estado visual
```

**Efeitos Visuais:**
- Animação de fluxo
- Cor dinâmica por pureza

### 3. Técnica de Cultivo
**O Pergaminho Espiritual**

```
Formulário Expansível:
├── Nome da Técnica
├── Tipo de Energia
├── Descrição (até 300 caracteres)
├── Afinidade (0-100%)
└── Estabilidade (0-100%)

Design:
├── Card com estilo pergaminho
├── Header com botão expandir
├── Conteúdo com formulários
└── Salvamento automático
```

**Interação:**
- Clique no header para expandir/retrair
- Ícone ▼ rotaciona na expansão
- Campos editáveis

### 4. Mar Espiritual
**O Estado Espiritual Global**

```
Informações:
├── Estado: "Calmo", "Turbulento", "Caótico"
├── Tamanho: Medido em Li (unidade abstrata)
├── Pureza: Porcentagem
└── Estabilidade: Porcentagem

Visual:
├── Card com animação de ondulação
├── Grid de 4 itens informativos
└── Cores dinâmicas por estado
```

---

## ⚡ Sistema de Risco

O sistema calcula um **Risco Geral** baseado em múltiplos fatores:

```javascript
Risco Total = min(
    (eficiencia_meridiano < 50 ? 30 : 0) +
    (risco_tribulacao ? 40 : 0) +
    (cristais_corrompidos ? 50 : 0),
    100
)
```

**Efeitos Visuais:**
- **Risco Baixo (0-30%):** Visual normal
- **Risco Médio (31-60%):** Brilho amarelo-laranja leve
- **Risco Alto (61-100%):** 
  - Borda vermelha
  - Pulsação contínua
  - Animação de alerta

---

## 💾 Persistência de Dados

### localStorage Structure

```javascript
{
  "cultivacao_dados": {
    "mundo_ativo": "elder-gods|boreal-line|murim",
    "universal": {
      "dantian": { inferior, medio, superior },
      "meridianos": { total, limpos, pureza, eficiencia },
      "tecnica": { nome, tipo_energia, descricao, afinidade, estabilidade },
      "mar_espiritual": { estado, tamanho, pureza, estabilidade }
    },
    "elder_gods": { rank, nome_rank, nivel, xp_atual, xp_necessario, xp_total, risco_tribulacao },
    "boreal_line": { rank, nome_rank, cristais: [...] },
    "murim": { rank, nome_rank, qi_acumulado, fragmentos, petalas, estagio_petala, nucleo, canais }
  }
}
```

### Auto-save
Cada alteração via métodos de `CultivacaoDadosManager` é automaticamente salva no localStorage.

---

## 🎮 Como Usar

### Abrir o Sistema

```javascript
// Via botão HTML (id="menu-btn-cultivacao")
// Ou programaticamente:

window.cultivacao.ui.abrir()
```

### Fechar o Sistema

```javascript
window.cultivacao.ui.fechar()
```

### Mudar de Mundo

```javascript
// Via clique nas abas ou:
window.cultivacao.ui.mudar_mundo('elder-gods')
window.cultivacao.ui.mudar_mundo('boreal-line')
window.cultivacao.ui.mudar_mundo('murim')
```

### Manipular Dados

```javascript
// Exemplo: Ganhar XP no Elder Gods
window.cultivacao.dados.ganhar_xp_elder_gods(50)

// Exemplo: Limpar Meridianos
window.cultivacao.dados.atualizar_meridianos(200)

// Exemplo: Adicionar Pétala em Murim
window.cultivacao.dados.adicionar_petala_murim()

// Exemplo: Atualizar Cristal em Boreal Line
window.cultivacao.dados.atualizar_cristal(0, {
    integridade: 95,
    estabilidade: 100,
    estado: 'Perfeito'
})
```

---

## 🛠️ Extensibilidade

### Adicionar um Novo Mundo

1. **Adicione dados padrão em `CultivacaoDadosManager.dados_padrao()`:**
```javascript
novo_mundo: {
    rank: 1,
    nome_rank: "Iniciante",
    // ... seus dados
}
```

2. **Adicione getters/setters:**
```javascript
obter_novo_mundo() {
    return this.dados.novo_mundo;
}

atualizar_novo_mundo(dados) {
    this.dados.novo_mundo = { ...this.dados.novo_mundo, ...dados };
    this.salvar();
}
```

3. **Adicione aba no HTML:**
```html
<button class="cultivacao-aba" data-mundo="novo-mundo">
    <span class="cultivacao-aba-icone">🔮</span>
    <span>Novo Mundo</span>
</button>
```

4. **Adicione seção de conteúdo:**
```html
<div class="cultivacao-mundo novo-mundo-mundo" data-mundo="novo-mundo" id="mundo-novo-mundo">
    <!-- Conteúdo específico -->
</div>
```

5. **Adicione CSS:**
```css
.novo-mundo-mundo {
    /* Estilos específicos */
}
```

6. **Adicione lógica de renderização em `CultivacaoUIManager`:**
```javascript
atualizar_novo_mundo() {
    const dados = this.dados.obter_novo_mundo();
    // Renderizar elementos
}
```

### Adicionar Novo Elemento Universal

1. Adicione em `universal` no `dados_padrao()`
2. Crie getter/setter em `CultivacaoDadosManager`
3. Crie HTML no template universal
4. Crie método de renderização em `atualizar_universal()`
5. Crie CSS modular

---

## 📱 Responsividade

O sistema é totalmente responsivo:

- **Desktop (1024px+):** Layout completo com 3+ colunas
- **Tablet (768-1023px):** Layout ajustado, grids reduzidos
- **Mobile (< 768px):** Layout em coluna única, telas otimizadas

**Breakpoints:**
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px) { /* Celular grande */ }
@media (max-width: 480px) { /* Celular pequeno */ }
```

---

## 🎵 Animações e Efeitos

### Transições Padrão

```css
--cult-transition-fast: 0.15s ease-out        /* Hover rápido */
--cult-transition-normal: 0.3s cubic-bezier   /* Animação padrão */
--cult-transition-slow: 0.5s cubic-bezier     /* Abertura/fechamento */
```

### Animações Especiais

| Animação | Uso |
|----------|-----|
| `cultivacao-slide-in` | Popup abre |
| `cultivacao-shimmer` | Brilho nas barras |
| `cultivacao-pulse` | Cristais pulsam |
| `cultivacao-glow-pulse` | Elementos brilham |
| `cultivacao-water-flow` | Mar ondula |
| `cultivacao-spin` | Botão de cultivo gira |
| `cultivacao-pulse-danger` | Aviso de risco alto |

---

## 🧪 Testes e Debug

### Console do Navegador

```javascript
// Acessar o sistema
window.cultivacao

// Dados
window.cultivacao.dados
window.cultivacao.ui

// Exemplos de teste:
window.cultivacao.dados.ganhar_xp_elder_gods(10)
window.cultivacao.dados.ganhar_fragmentos_murim(50)
window.cultivacao.dados.calcular_risco_geral()
window.cultivacao.ui.abrir()
window.cultivacao.ui.fechar()
```

### Verificar localStorage

```javascript
JSON.parse(localStorage.getItem('cultivacao_dados'))
```

---

## 🐛 Resolução de Problemas

### Popup não abre
- Verificar se o botão tem `id="menu-btn-cultivacao"`
- Verificar se o CSS está carregado
- Verificar console por erros JS

### Dados não salvam
- Verificar se o localStorage está habilitado
- Verificar se há espaço suficiente
- Chamar `dados.salvar()` manualmente

### Estilos não aparecem
- Verificar ordem de carregamento CSS
- Verificar especificidade (CSS specificity)
- Limpar cache do navegador

### Mundo não muda
- Verificar se o `data-mundo` corresponde
- Verificar console por erros
- Testar `ui.mudar_mundo()` manualmente

---

## 📚 Referências

- **Dark Fantasy Design:** Cores escuras com acentos vibrantes
- **Inspiração:** Xianxia, Cultivação, Jogos de RPG
- **Padrões:** Modular CSS, Classes JavaScript, localStorage API

---

## 📝 Changelog

### v1.0.0 (27/02/2026)

**Lançamento Inicial**
- ✅ Estrutura modular completa
- ✅ Três mundos implementados (Elder Gods, Boreal Line, Murim)
- ✅ Sistema universal (Dantian, Meridianos, Técnica, Mar)
- ✅ Persistência em localStorage
- ✅ UI responsiva e animada
- ✅ Sistema de risco integrado
- ✅ Documentação completa

---

## 👨‍💻 Desenvolvimento Futuro

- [ ] API de integração com sistema de combate
- [ ] Sistema de missões de cultivo
- [ ] Efeitos de partículas WebGL
- [ ] Achievements e badges
- [ ] Modo PvP com desafios
- [ ] Banco de dados backend
- [ ] Multiplayer (futuro distante)

---

**Versão:** 1.0.0  
**Data:** 27 de fevereiro de 2026  
**Autor:** Sistema de Cultivação Profissional  
**Status:** Produção
