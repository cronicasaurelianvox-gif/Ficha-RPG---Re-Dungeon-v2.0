# 🔍 Varredura Profunda - Problema de Importação Apagando Atributos

## 📋 Resumo dos Problemas Encontrados

Foram identificados **3 problemas críticos** que causavam o apagamento de atributos durante importação:

### 1️⃣ **Chaves localStorage Incorretas** ❌

**Localização:** `js/sistema-salvar-importar.js` linhas 1792-1796

**Problema:**
```javascript
// ❌ ERRADO - Usando chaves completas
window.localStorageManager.save('redungeon_ficha_atributos', dados.atributos);
window.localStorageManager.save('redungeon_ficha_status', dados.atributos?.barras);
window.localStorageManager.save('redungeon_ficha_inventario', dados.inventario);
```

O `LocalStorageManager` adiciona automaticamente o prefixo `redungeon_ficha_` quando faz `save()`. Ao chamar com a chave completa, ficava:
- localStorage: `redungeon_ficha_redungeon_ficha_atributos` ❌

**Solução:**
```javascript
// ✅ CORRETO - Usando apenas o nome da chave
window.localStorageManager.save('atributos', dados.atributos);
window.localStorageManager.save('status', dados.atributos?.barras);
window.localStorageManager.save('inventario', dados.inventario);
```

**Chaves Corretas Mapeadas:**
| Chave Errada | Chave Correta |
|---|---|
| `'redungeon_ficha_atributos'` | `'atributos'` |
| `'redungeon_ficha_status'` | `'status'` |
| `'redungeon_ficha_inventario'` | `'inventario'` |

---

### 2️⃣ **setState Fazendo Shallow Merge** ❌

**Localização:** `js/state-manager.js` linhas 147-160

**Problema:**
```javascript
// ❌ ANTES - Spread operator superficial
setState(updates) {
    this.state = { ...this.state, ...updates };
    // ↑ Se updates está INCOMPLETO, sobrescreve dados com undefined/vazio
}
```

**Cenário que causava erro:**
```javascript
// restaurarAtributos chama:
let state = window.appState?.getState() || {}; // ← Pode ser {}
state.atributos.primarios = {...};
window.appState.setState(state); // ← State está incompleto!
// Resultado: Todos os dados do estado que NÃO estão em 'state' são perdidos!
```

**Solução:**
```javascript
// ✅ DEPOIS - Deep merge recursivo
setState(updates) {
    this.state = this.deepMerge(this.state, updates);
    // ↑ Preserva TUDO que não está em 'updates'
}

deepMerge(target, source) {
    // Implementação que faz merge profundo recursivamente
    // Mantém estrutura existente intacta
}
```

---

### 3️⃣ **restaurarAtributos Criando Estado Vazio** ❌

**Localização:** `js/sistema-salvar-importar.js` linhas 1900-1911

**Problema:**
```javascript
// ❌ ANTES - Estado pode ficar vazio
const state = window.appState?.getState() || {}; // ← Pode ser {} se null/undefined
state.atributos = state.atributos || {}; // ← Cria objeto vazio

// Depois modifica apenas primários/secundários:
state.atributos.primarios = {...};
window.appState.setState(state); // ← Falta: jogadorInfo, reputation, aptidoes, etc!
```

**Fluxo de Erro:**
1. Importação começa
2. `restaurarAtributos()` é chamado
3. `appState.getState()` retorna estado INCOMPLETO
4. Modifica apenas `atributos`
5. Chama `setState()` com estado incompleto
6. Deep merge preserva o incompleto, perde o resto! ❌

**Solução:**
```javascript
// ✅ DEPOIS - Validação robusta de estado
let state = window.appState?.getState();
if (!state || typeof state !== 'object') {
    console.warn('⚠️ AppState vazio, criando estrutura mínima');
    state = { atributos: {} };
}

// Garantir que atributos existe
if (!state.atributos || typeof state.atributos !== 'object') {
    state.atributos = {};
}

// Garantir que primarios/secundarios existem ANTES de mergear
if (!state.atributos.primarios || typeof state.atributos.primarios !== 'object') {
    state.atributos.primarios = {};
}
if (!state.atributos.secundarios || typeof state.atributos.secundarios !== 'object') {
    state.atributos.secundarios = {};
}

// Agora sim, fazer merge seguro
state.atributos.primarios = { ...state.atributos.primarios, ...dados.primarios };
state.atributos.secundarios = { ...state.atributos.secundarios, ...dados.secundarios };
window.appState.setState(state); // ✅ Seguro!
```

---

## 🔧 Resumo das Correções Implementadas

### Arquivo: `js/atributos.js`
- ✅ Adicionada função `deepMerge()` para merge profundo
- ✅ Função `atualizarPersonagem()` agora usa `deepMerge()`

### Arquivo: `js/state-manager.js`
- ✅ Adicionada função `deepMerge()` para merge profundo
- ✅ Função `setState()` agora usa `deepMerge()` ao invés de spread simples
- ✅ Deep merge preserva estrutura existente mesmo com atualizações parciais

### Arquivo: `js/sistema-salvar-importar.js`
- ✅ **Linha 1792**: `'redungeon_ficha_atributos'` → `'atributos'`
- ✅ **Linha 1793**: `'redungeon_ficha_status'` → `'status'`
- ✅ **Linha 1794**: `'redungeon_ficha_inventario'` → `'inventario'`
- ✅ **Linha 1900-1911**: Validação robusta do `state` antes de modificar
- ✅ **Linha 2141**: `'redungeon_ficha_status'` → `'status'`

---

## 🧪 Teste de Validação

### Teste 1: Importação com JSON Parcial
```json
{
  "atributos": {
    "primarios": {
      "forca": 10
    }
  }
}
```
**Resultado Esperado:**
- ✅ Força atualizada para 10
- ✅ Outros atributos primários mantidos
- ✅ Secundários preservados
- ✅ Reputação, aptidões, etc. preservadas

### Teste 2: Importação Após Reload
1. Importar JSON
2. Aguardar `location.reload()`
3. Página recarrega
4. **Resultado Esperado:** ✅ Todos os dados ainda lá (localStorage salvou corretamente)

### Teste 3: Estados Vazios
1. Forçar `appState` ficar vazio
2. Importar JSON
3. **Resultado Esperado:** ✅ Sistema cria estrutura mínima e faz merge corretamente

---

## 🚨 Impacto das Correções

| Aspecto | Antes | Depois |
|--------|-------|--------|
| **Salvamento em localStorage** | ❌ Chaves duplicadas/erradas | ✅ Chaves corretas |
| **Carregamento de dados** | ❌ Não encontra dados salvos | ✅ Encontra corretamente |
| **Merge de estado parcial** | ❌ Sobrescreve tudo | ✅ Preserva estrutura |
| **Importação JSON** | ❌ Apaga atributos | ✅ Preserva tudo |
| **Reload após importação** | ❌ Perde dados | ✅ Mantém dados |

---

## 📊 Fluxo Correto de Importação (Após Correções)

```
1. Usuário importa JSON
   ↓
2. importarFicha() lê arquivo
   ↓
3. Valida estrutura JSON
   ↓
4. Define flags: IMPORTACAO_FICHA_ATIVA = true
   ↓
5. restaurarAtributos(dados)
   ├─ Pega estado COMPLETO do appState
   ├─ Valida que atributos/primarios/secundarios existem
   ├─ Faz merge PROFUNDO preservando tudo
   └─ setState() aplica com deep merge ✅
   ↓
6. Salva em localStorage COM CHAVES CORRETAS ✅
   ├─ save('atributos', ...) → localStorage['redungeon_ficha_atributos']
   ├─ save('status', ...) → localStorage['redungeon_ficha_status']
   └─ save('inventario', ...) → localStorage['redungeon_ficha_inventario']
   ↓
7. location.reload()
   ↓
8. Página recarrega
   ├─ StateManager.loadFromLocalStorage()
   ├─ load('atributos') ← encontra localStorage['redungeon_ficha_atributos'] ✅
   ├─ load('status') ← encontra localStorage['redungeon_ficha_status'] ✅
   └─ setState() aplica dados com deep merge ✅
   ↓
9. Renderização mostra TODOS os dados restaurados ✅
```

---

## 🎯 Status Final

**Status:** ✅ RESOLVIDO

Todos os 3 problemas foram identificados e corrigidos:
1. ✅ Chaves localStorage corretas
2. ✅ Deep merge em setState
3. ✅ Validação robusta em restaurarAtributos

A importação de JSON agora preserva completamente todos os atributos!
