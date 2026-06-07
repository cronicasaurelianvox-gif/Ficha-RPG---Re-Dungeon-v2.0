# 🔧 Correção: Desbloqueio Sequencial de Nós - Veias Astrais

## 📋 Problema Identificado

Os nós não estavam sendo desbloqueados em sequência correta porque:

1. **Dependência incorreta de `parentId`**: A função `canUnlockNode()` usava apenas `findPathToNode()` que depende do `parentId` do nó
2. **Ignorava conexões laterais**: O sistema não verificava todas as conexões de entrada do nó, apenas a hierarquia pai-filho
3. **Desbloqueio em cascata incorreto**: A função `unlockNode()` tentava desbloquear TODO o caminho do core até o nó alvo, causando desbloqueios simultâneos
4. **Sem validação de predecessores**: Um nó podia ser desbloqueado mesmo que todos seus predecessores estivessem bloqueados

## ✅ Solução Implementada

### 1️⃣ Corrigida função `canUnlockNode()` (Linha ~1020)

**Antes:**
```javascript
const caminho = this.findPathToNode(node);
const pcNecessario = this.calcularPCNecessarioParaCaminho(caminho);
return this.powerCombat >= pcNecessario;
```

**Depois:**
```javascript
// Verifica TODAS as conexões que chegam ao nó
const incomingConnections = this.connections.filter(conn => conn.to === node.id);

// Verifica se PELO MENOS UMA tem seu nó de origem desbloqueado
const temCaminhoDesbloqueado = incomingConnections.some(conn => {
    const sourceNode = this.nodes.find(n => n.id === conn.from);
    if (!sourceNode) return conn.from === 'core'; // Core sempre desbloqueado
    return sourceNode.state === 'unlocked' || sourceNode.state === 'maxed';
});

return temCaminhoDesbloqueado && this.powerCombat >= node.cost;
```

**Impacto:** 
- ✅ Respeita TODAS as conexões do nó (não apenas parentId)
- ✅ Garante que pelo menos um predecessor esteja desbloqueado
- ✅ Verifica apenas o custo do nó individual, não do caminho todo

### 2️⃣ Corrigida função `getUnlockBlockReason()` (Linha ~1050)

**Antes:**
```javascript
const caminho = this.findPathToNode(node);
const pcNecessario = this.calcularPCNecessarioParaCaminho(caminho);
// Mensagem genérica...
```

**Depois:**
```javascript
// Verifica os predecessores e lista quais precisam ser desbloqueados
const incomingConnections = this.connections.filter(conn => conn.to === node.id);
const temCaminhoDesbloqueado = incomingConnections.some(conn => {
    const sourceNode = this.nodes.find(n => n.id === conn.from);
    return sourceNode?.state === 'unlocked' || sourceNode?.state === 'maxed' || conn.from === 'core';
});

if (!temCaminhoDesbloqueado) {
    const nodesPendentes = incomingConnections
        .map(conn => this.nodes.find(n => n.id === conn.from))
        .filter(n => n && n.state === 'locked')
        .map(n => n.name);
    
    return `❌ Desbloqueie primeiro: ${nodesPendentes.join(', ')}`;
}
```

**Impacto:**
- ✅ Mensagens muito mais claras indicando quais nós desbloquear
- ✅ Ajuda o jogador a entender a sequência correta
- ✅ Reduz confusão sobre por que um nó não pode ser desbloqueado

### 3️⃣ Refatorada função `unlockNode()` (Linha ~1220)

**Antes:**
```javascript
const caminho = this.findPathToNode(node);
caminho.forEach(no => {
    if (no.state === 'locked') {
        // Desbloqueia TODOS os nós do caminho automaticamente
        this.powerCombat -= no.cost;
        no.state = 'unlocked';
        // ...
    }
});
```

**Depois:**
```javascript
// Desbloqueia APENAS o nó selecionado
if (this.powerCombat < node.cost) {
    console.warn(`❌ PC insuficiente`);
    return;
}

this.powerCombat -= node.cost;
node.state = 'unlocked';
// Efeitos visuais e bônus...
```

**Impacto:**
- ✅ Desbloqueio individual e controlado
- ✅ Força o jogador a desbloquear em ordem (da raiz para as folhas)
- ✅ Gameplay mais intencional e progressivo

## 🎮 Comportamento Esperado Agora

### Sequência Correta de Desbloqueio

```
Cenário: Tentar desbloquear L3 quando tem PC suficiente

❌ ANTES (ERRADO):
- Clica em L3
- Sistema desbloqueia automaticamente: L1 → L2 → L3
- Pula todas as etapas intermediárias
- Sem progresso real do jogador

✅ DEPOIS (CORRETO):
- Clica em L1 → Desbloqueia L1 (custa 50 PC)
- Clica em L2 → Desbloqueia L2 (custa 30 PC, L1 já está desbloqueado)
- Clica em L3 → Desbloqueia L3 (custa 40 PC, L2 desbloqueado)
  
Se tentar L3 sem L2:
- ❌ "Desbloqueie primeiro: [nome do nó L2]"
- Força seguir a ordem
```

## 🧪 Teste Manual

Para validar a correção:

1. Abra o console (F12)
2. Localize o painel de Veias Astrais
3. Tente clicar em um nó de L3 ou superior
4. Esperado: Botão "Desbloquear" deve estar desativado com mensagem "Desbloqueie primeiro: [nó predecessor]"
5. Desbloqueie o nó predecessor
6. Agora o nó de L3 deve estar disponível

## 📊 Checkpoints da Correção

- ✅ `canUnlockNode()` - Verifica predecessor desbloqueado
- ✅ `getUnlockBlockReason()` - Fornece feedback claro
- ✅ `unlockNode()` - Desbloqueia apenas o nó individual
- ✅ Sem erros de sintaxe
- ✅ Mensagens de log mantidas para debugging

## 🚀 Próximos Passos (Opcional)

1. Adicionar animação visual mostrando o caminho necessário
2. Implementar dica visual dos nós que precisam ser desbloqueados
3. Considerar adicionar "desbloqueio rápido" que destrava automaticamente todo o caminho se houver PC suficiente (opcional)
