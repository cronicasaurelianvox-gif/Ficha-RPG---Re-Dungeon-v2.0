# 🌟 VEIAS ASTRAIS - REFATORAÇÃO COMPLETA v2.0

## 📋 Resumo Executivo

O sistema **Veias Astrais** foi completamente refatorado para transformá-lo em uma interface profissional de progressão astral, inspirada em árvores de talentos premium de RPG AAA.

### Principais Melhorias

- ✅ **Mapa Expansivo** (5000x5000px) - Não cabe em uma única tela
- ✅ **Navegação Livre** - Drag, zoom e pan com performance otimizada
- ✅ **5 Árvores Radiais** - Distribuição orgânica ao redor do núcleo
- ✅ **40 Nós Interativos** - Com 4 estados (locked/unlocked/active/maxed)
- ✅ **Núcleo Épico** - Cristal de mana, partículas, runas animadas
- ✅ **Painel Lateral Fixo** - Não se move com o mapa
- ✅ **20+ Animações** - Suaves e fluidas
- ✅ **Performance Otimizada** - Transform/scale, RAF, CSS otimizado

---

## 🏗️ ARQUITETURA

### Estrutura de Diretórios

```
ReDungeon_Ficha/
├── css/
│   ├── veias-astrais-refactor.css      (1100+ linhas) - Layout base e painel
│   ├── veias-astrais-navegacao.css     (400+ linhas)  - Drag, zoom, núcleo
│   └── veias-astrais-nos.css           (550+ linhas)  - Nós, estados, animações
├── js/
│   ├── veias-astrais-sistema.js        (600+ linhas)  - Core logic
│   ├── veias-astrais-navegacao.js      (300+ linhas)  - Navigation engine
│   ├── veias-astrais-modal-refator.js  (100+ linhas)  - Modal handler
│   └── veias-astrais-exemplos-refator.js (300+ linhas) - Console examples
└── index.html                          (nova estrutura)
```

### Fluxo de Inicialização

```
1. index.html carrega
   ↓
2. CSS: refactor.css → navegacao.css → nos.css
   ↓
3. JS: sistema.js → navegacao.js → modal-refator.js
   ↓
4. DOMContentLoaded → VeiasAstraisModal instanciado
   ↓
5. Usuário clica botão "Veias Astrais"
   ↓
6. VeiasAstraisModal.open()
   ↓
7. VeiasAstraisSystem.init() → generateTrees() → generateNodes() → renderUI()
   ↓
8. VeiasAstraisNavigation inicializado (lazy)
   ↓
9. Sistema pronto para interação
```

---

## 🎯 FUNCIONALIDADES PRINCIPAIS

### 1. NAVEGAÇÃO DO MAPA

#### Drag (Arraste)
- Clicar e manter pressionado o mouse
- Arrastar para mover o mapa
- Suporta touch events (mobile)
- Cursor muda para "grabbing"

**Implementação:**
```javascript
viewport.addEventListener('mousedown', startDragging);
viewport.addEventListener('mousemove', onDragging);
viewport.addEventListener('mouseup', stopDragging);
```

#### Zoom
- **Mouse Wheel**: Scroll para zoom
- **Pinch**: Touch de dois dedos em mobile
- **Botões**: UI com +/− para ajuste
- Range: 0.5x a 3x (configurável)

**Implementação:**
```javascript
viewport.addEventListener('wheel', (e) => {
    const delta = e.deltaY > 0 ? -1 : 1;
    this.zoom += delta * 0.15;
});
```

#### Pan
- Armazenado em `panX` e `panY`
- Aplicado via `transform: translate()`
- Performance otimizada com `will-change`

### 2. GERAÇÃO DE NÓS

#### Padrão Radial Expansivo
- 5 árvores em 5 direções (72° entre cada)
- 8 nós por árvore = 40 nós total
- Distribuição crescente em distância
- Variação aleatória para aspecto natural

```javascript
for (let i = 0; i < 8; i++) {
    const distance = 150 + i * 180;  // Aumenta com profundidade
    const angle = treeAngle + random * 0.3; // Variação natural
    
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
}
```

#### Estados dos Nós
1. **🔒 Locked** - Cinza, desabilitado (opacity 0.6)
2. **🔓 Unlocked** - Azul brilhante, clicável
3. **⭐ Active** - Pulsante, com animação
4. **👑 Maxed** - Roxo, coroa animada

#### Cores por Árvore
- **Corpo**: Laranja/Avermelhado (#ea6e4f)
- **Mente**: Amarelo/Ouro (#f1c40f)
- **Espírito**: Verde (#52b788)
- **Arcano**: Roxo (#8b5cf6)
- **Sombra**: Roxo Escuro (#6b21a8)

### 3. CONEXÕES E LINHAS

#### SVG Path
- Renderizado como `<path>` elements
- Curvatura automática (quadratic Bezier)
- Estados: locked/unlocked/active/maxed

```javascript
const pathData = `
    M ${startX} ${startY}
    Q ${midX} ${midY}
    ${endX} ${endY}
`;
```

#### Animações
- **Fluxo de Mana**: stroke-dasharray animated
- **Partículas**: Viajam pela linha
- **Brilho**: Glow aumenta quando ativado

### 4. NÚCLEO CENTRAL

#### Elementos
1. **Cristal de Mana**
   - Gradiente radial
   - Pulsação contínua
   - Brilho com drop-shadow

2. **Anéis de Energia**
   - 3 anéis orbitais
   - Velocidades diferentes
   - Cores gradientes

3. **Runas Flutuantes**
   - Texto "◆◇◆"
   - Animação de flutuação
   - Brilho astral

4. **Partículas Orbitais**
   - 6 partículas dinâmicas
   - Órbita ao redor do núcleo
   - Fadein/fadeout suave

#### Animações
```css
@keyframes core-pulse {
    0%, 100% { box-shadow: 0 0 30px rgba(..., 0.8); }
    50%       { box-shadow: 0 0 50px rgba(..., 1); }
}

@keyframes ring-rotate {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

### 5. PAINEL LATERAL FIXO

#### Componentes
1. **Header**
   - Título "✨ Veias Astrais"
   - Botão de fechar

2. **Recursos**
   - Mana Points (0-100)
   - Ressonância Astral (0-100)
   - Barras com cores

3. **Constelações**
   - Lista de 5 árvores
   - Progresso (X/Y desbloqueados)
   - Clicável para focar

4. **Bônus Ativos**
   - Lista de efeitos ativados
   - Apenas desbloqueados aparecem
   - Scroll próprio

5. **Controles de Navegação**
   - Zoom In/Out
   - Resetar View
   - Info sobre keyboard shortcuts

**CSS:**
```css
.veias-astrais-sidebar {
    position: fixed ou flex com overflow: auto;
    width: 320px;
    border-right: 1px solid rgba(...);
    z-index: 10; /* Acima do mapa */
}
```

### 6. PAINEL DE DETALHES DO NÓ

#### Posicionamento
- Sobreposto (absolute)
- Canto inferior direito
- Fixo no viewport (não se move com mapa)

#### Conteúdo
- Nome e ícone
- Descrição completa
- Requisitos (lista)
- Efeitos (lista)
- Custo em Mana
- Nível atual
- Estado (bloqueado/ativo/máximo)
- Botão "Desbloquear"

```javascript
const panel = document.getElementById('node-detail-panel');
panel.innerHTML = `
    <h3>${node.name}</h3>
    <p>${node.description}</p>
    <button onclick="system.unlockNode(node)">Desbloquear</button>
`;
```

---

## 🛠️ CLASSES E INTERFACES

### VeiasAstraisSystem

```javascript
class VeiasAstraisSystem {
    constructor()
    
    // Inicialização
    init()
    
    // Geração de dados
    generateTrees()
    generateNodes()
    generateConnections()
    
    // Render
    renderUI()
    renderSidebar()
    renderNodes()
    renderConnections()
    
    // Interação
    selectNode(node)
    renderNodeDetails()
    unlockNode(node)
    
    // UI Updates
    updateUI()
    
    // Utilitários
    generateNodeName(treeId, index)
    getRune(treeId, index)
    generateNodeEffect(treeId, index)
    generateNodeDescription(treeId, index)
    focusTree(treeId)
    createCoreParticles()
    
    // Modal
    open()
    close()
}
```

### VeiasAstraisNavigation

```javascript
class VeiasAstraisNavigation {
    constructor(system)
    
    init()
    
    // Drag
    setupDragListeners()
    startDragging(e)
    onDragging(e)
    stopDragging()
    
    // Zoom
    setupZoomListeners()
    
    // Buttons
    setupButtonListeners()
    handleZoomIn()
    handleZoomOut()
    resetView()
    
    // Transform
    updateMapTransform()
    updateZoomIndicator()
    
    // Utils
    screenToMap(screenX, screenY)
    focusOn(mapX, mapY, zoom)
    focusCore()
}
```

### AstralNode

```javascript
class AstralNode {
    id: number
    treeId: string
    name: string
    rune: string
    x: number
    y: number
    level: number
    cost: number
    effect: string
    description: string
    color: string
    state: 'locked' | 'unlocked' | 'active' | 'maxed'
}
```

### VeiasAstraisModal

```javascript
class VeiasAstraisModal {
    constructor()
    init()
    open()
    close()
    closeDetailPanel()
}
```

---

## 🎨 STYLING E ANIMAÇÕES

### CSS Variáveis (Root)
```css
:root {
    --color-primary: #4a9eff;          /* Azul Principal */
    --color-secondary: #8b5cf6;        /* Roxo Secundário */
    --color-accent: #10b981;           /* Verde Destaque */
    
    --color-body: #ea6e4f;             /* Corpo */
    --color-mind: #f1c40f;             /* Mente */
    --color-spirit: #52b788;           /* Espírito */
    --color-arcane: #8b5cf6;           /* Arcano */
    --color-shadow: #6b21a8;           /* Sombra */
    
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.15s ease-out;
}
```

### 20+ Animações

1. **glow-pulse** - Pulsação de brilho
2. **fade-in** - Entrada suave
3. **fade-in-scale** - Entrada com escala
4. **core-pulse** - Pulsação do núcleo
5. **crystal-shine** - Brilho do cristal
6. **crystal-glow-pulse** - Halo pulsante
7. **ring-rotate** - Rotação de anéis
8. **runes-float** - Flutuação de runas
9. **orbit** - Órbita de partículas
10. **node-unlock-glow** - Desbloqueio explosivo
11. **node-active-pulse** - Pulsação ativa
12. **node-maxed-pulse** - Pulsação máxima
13. **node-crown-spin** - Giro da coroa
14. **rune-glow** - Brilho de runa
15. **link-flow** - Fluxo de energia na linha
16. **particle-float** - Flutuação de partícula
17. **zoom-indicator-pop** - Pop do indicador
18. **pulse-indicator** - Pulso de indicador
19. **node-crown-float** - Flutuação da coroa
20. **node-crown-bounce** - Bounce da coroa

### Estados Visuais

```css
/* Bloqueado */
.astral-node.node-locked {
    opacity: 0.6;
    filter: grayscale(80%) brightness(0.8);
    cursor: not-allowed;
}

/* Desbloqueado */
.astral-node.node-unlocked {
    background: radial-gradient(circle, rgba(74, 158, 255, 0.7), ...);
    box-shadow: 0 0 20px rgba(74, 158, 255, 0.5);
}

/* Ativo */
.astral-node.node-active {
    animation: node-active-pulse 1.5s ease-in-out infinite;
}

/* Máximo */
.astral-node.node-maxed {
    animation: node-maxed-pulse 2s ease-in-out infinite;
}
```

---

## 📱 RESPONSIVIDADE

### Breakpoints

```css
@media (max-width: 1200px) { /* Tablets grandes */ }
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px)  { /* Tablets pequenos/Mobile */ }
```

### Adaptações

- **1200px+**: Layout desktop completo
- **1024px-1200px**: Sidebar reduzido
- **768px-1024px**: Sidebar horizontal no topo
- **<768px**: Full-width com painel detail reduzido

---

## ⚡ PERFORMANCE

### Otimizações Implementadas

1. **Transform/Scale** em vez de left/top
2. **Will-change** no mapa para GPU acceleration
3. **Backface-visibility: hidden** em elementos animados
4. **CSS Grid/Flexbox** em vez de floats
5. **Event Delegation** onde possível
6. **Lazy Loading** do sistema
7. **SVG Renderizado Dinamicamente** em vez de inline
8. **CSS Animations** em vez de JS loops
9. **Prefers-reduced-motion** support
10. **Passive Event Listeners** para scroll

### FPS Target
- Mapa: 60 FPS (transform não causa repaint)
- Animações: 60 FPS (hardware accelerated)
- Interação: 60 FPS (event debouncing)

---

## 🎮 COMO USAR

### Abertura
```javascript
// Click no botão da UI
// ou console:
VA.open();
```

### Navegação
- **Drag**: Click + Arrastar
- **Zoom**: Scroll do mouse
- **Botões**: Use +/− do sidebar
- **Teclado**: ESC para fechar

### Desbloqueio de Nós
1. Clique em um nó desbloqueado
2. Painel lateral direito abre
3. Clique "Desbloquear" se tiver mana
4. Nó muda de cor e libera conexões

### Foco em Árvores
- Clique em árvore no sidebar
- Mapa automaticamente foca na primeira constelação

---

## 🧪 TESTE NO CONSOLE

```javascript
// Atalhos globais via window.VA

// Abrir/Fechar
VA.open();
VA.close();

// Informações
VA.stats();                    // Ver estatísticas
VA.nodes('locked');            // Listar nós bloqueados
VA.trees();                    // Ver árvores

// Manipulação
VA.unlock(0);                  // Desbloquear nó 0
VA.unlockAll();                // Desbloquear todos
VA.addMana(50);                // Adicionar mana
VA.setMana(100);               // Definir mana específica

// Navegação
VA.focus(0);                   // Focar em nó 0
VA.focusTree('corpo');         // Focar em árvore
VA.focusCore();                // Voltar ao núcleo
VA.zoom(2);                    // Definir zoom em 2x

// Seleção
VA.select(0);                  // Selecionar nó
VA.selected();                 // Ver nó selecionado

// Teste automático
testarVeiasAstrais();
```

---

## 🔧 EXTENSÕES FUTURAS

### Fáceis de Implementar
1. **Persistência** - localStorage/IndexedDB
2. **Som** - SFX para desbloqueios
3. **Partículas Customizadas** - Efeitos visuais extras
4. **Animação de Tutorial** - Primeira abertura

### Intermediárias
1. **Sinergias Entre Árvores** - Bônus combo
2. **Skill Respec** - Resetar pontos
3. **Árvores Dinâmicas** - Gerar nós proceduralmente
4. **Multiplayer Sync** - Online progression

### Complexas
1. **PvP Leaderboards** - Comparação de builds
2. **Rare Nodes** - Eventos especiais
3. **Mastery System** - Especialização progressiva
4. **Procedural Generation** - Árvores infinitas

---

## 📝 ARQUIVOS CRIADOS/MODIFICADOS

### Novos Arquivos CSS (3)
- ✅ `css/veias-astrais-refactor.css` (1100+ linhas)
- ✅ `css/veias-astrais-navegacao.css` (400+ linhas)
- ✅ `css/veias-astrais-nos.css` (550+ linhas)

### Novos Arquivos JS (4)
- ✅ `js/veias-astrais-sistema.js` (600+ linhas)
- ✅ `js/veias-astrais-navegacao.js` (300+ linhas)
- ✅ `js/veias-astrais-modal-refator.js` (100+ linhas)
- ✅ `js/veias-astrais-exemplos-refator.js` (300+ linhas)

### Arquivos Modificados
- ✅ `index.html` - HTML nova estrutura + links CSS/JS

---

## 🎯 CHECKLIST DE FUNCIONALIDADES

### Mapa e Navegação
- ✅ Mapa expansivo (5000x5000)
- ✅ Drag livre com mouse
- ✅ Zoom interno (0.5x - 3x)
- ✅ Pan com arraste
- ✅ Botões zoom +/−
- ✅ Reset view ao núcleo
- ✅ Indicador de zoom %

### Nós e Estados
- ✅ 40 nós gerados
- ✅ 5 árvores radiais
- ✅ 4 estados visuais
- ✅ Distribuição orgânica
- ✅ Animações de desbloqueio
- ✅ Tooltip ao hover
- ✅ Click para detalhes

### UI e Painel Lateral
- ✅ Painel fixo (não move com mapa)
- ✅ Recursos (mana + ressonância)
- ✅ Lista de árvores com progresso
- ✅ Bônus ativos
- ✅ Controles de navegação
- ✅ Info sobre keyboard shortcuts

### Núcleo Central
- ✅ Cristal de mana pulsante
- ✅ Anéis de energia orbitais
- ✅ Runas flutuantes
- ✅ Partículas dinâmicas
- ✅ Todas as animações

### Conexões
- ✅ 25+ conexões renderizadas
- ✅ SVG com curvatura natural
- ✅ Estados: locked/unlocked/active
- ✅ Animação de fluxo
- ✅ Cores por árvore

### Interação
- ✅ Desbloqueio com custo mana
- ✅ Seleção de nós
- ✅ Painel de detalhes dinâmico
- ✅ Foco em árvores
- ✅ ESC para fechar

### Performance
- ✅ Transform/scale otimizado
- ✅ GPU acceleration (will-change)
- ✅ Lazy loading sistema
- ✅ Event handling eficiente
- ✅ Suporte mobile

### Responsividade
- ✅ Desktop (1920px+)
- ✅ Tablet landscape (1200px)
- ✅ Tablet portrait (768px)
- ✅ Mobile (<768px)

---

## 📊 ESTATÍSTICAS

| Métrica | Valor |
|---------|-------|
| Total CSS | 2050+ linhas |
| Total JS | 1300+ linhas |
| Arquivos CSS | 3 arquivos |
| Arquivos JS | 4 arquivos |
| Total Nós | 40 nós |
| Total Árvores | 5 árvores |
| Total Conexões | 25+ conexões |
| Animações | 20+ keyframes |
| Cores Tema | 9 cores principais |
| Breakpoints | 4 resposivos |

---

## ✨ CONCLUÍDO

O sistema **Veias Astrais v2.0** está completo, testado e pronto para produção.

Todas as funcionalidades de navegação, renderização e interação foram implementadas com otimizações de performance e estética dark fantasy premium.

🚀 **Sistema pronto para uso!**
