# 📦 INVENTÁRIO DE ARQUIVOS ÓRFÃOS

**Data:** 27 de fevereiro de 2026  
**Total de Órfãos:** 17 arquivos JS + 5 arquivos CSS = **22 arquivos**

---

## 🔴 ARQUIVOS NÃO CARREGADOS NO index.html

### CATEGORIA 1: SISTEMA DE CULTIVAÇÃO (9 JS + 3 CSS = 12 arquivos)

#### JavaScript (9 arquivos)
```
❌ js/cultivacao-data.js
   Tipo: Base de dados de cultivação
   Tamanho: ~50 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-exemplos-uso.js
   Tipo: Exemplos de uso
   Tamanho: ~15 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-init.js
   Tipo: Inicialização
   Tamanho: ~8 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-integrador-2.0.js
   Tipo: Integração
   Tamanho: ~25 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-manager.js
   Tipo: Gerenciador principal
   Tamanho: ~40 KB
   Status: Nunca carregado (limpeza realizada 27/02)
   Referências: 0 (removidas manualmente)
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-nova-arquitetura.js
   Tipo: Arquitetura alternativa
   Tamanho: ~35 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-storage.js
   Tipo: Persistência
   Tamanho: ~20 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-testes.js
   Tipo: Testes de módulo
   Tamanho: ~30 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ js/cultivacao-tribulacao.js
   Tipo: Submódulo
   Tamanho: ~22 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP
```

**Total JS Cultivação:** 245 KB

#### CSS (3 arquivos)
```
❌ css/cultivacao-modal.css
   Tipo: Estilos do modal
   Tamanho: ~8 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ css/cultivacao-nova.css
   Tipo: Estilos alternativos
   Tamanho: ~6 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ css/cultivacao-tribulacao.css
   Tipo: Estilos de submódulo
   Tamanho: ~4 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP
```

**Total CSS Cultivação:** 18 KB

**SUBTOTAL CULTIVAÇÃO: 263 KB | 12 ARQUIVOS**

---

### CATEGORIA 2: SISTEMA TRICKSTERS COIN (2 JS + 2 CSS = 4 arquivos)

#### JavaScript (2 arquivos)
```
❌ js/tricksters-coin-system.js
   Tipo: Sistema principal
   Tamanho: ~45 KB
   Status: Nunca carregado
   Referências: 0
   Mencionado em: 8+ documentos como "implementado"
   Ação: MOVER PARA BACKUP

❌ js/tricksters-coin-test.js
   Tipo: Testes
   Tamanho: ~12 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP
```

**Total JS Tricksters:** 57 KB

#### CSS (2 arquivos)
```
❌ css/tricksters-coin-panel.css
   Tipo: Painel UI
   Tamanho: ~5 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP

❌ css/tricksters-coin-system.css
   Tipo: Estilos gerais
   Tamanho: ~4 KB
   Status: Nunca carregado
   Referências: 0
   Ação: MOVER PARA BACKUP
```

**Total CSS Tricksters:** 9 KB

**SUBTOTAL TRICKSTERS: 66 KB | 4 ARQUIVOS**

---

### CATEGORIA 3: VERSÕES ANTIGAS/SUBSTITUÍDAS (4 JS)

```
❌ js/companheiro-inventario-modal.js
   Tipo: Modal de inventário (versão antiga)
   Tamanho: ~18 KB
   Status: Substituída por 3 arquivos "novo"
   Referências: 0
   Ação: MOVER PARA BACKUP APÓS CONFIRMAR CONSOLIDAÇÃO

❌ js/companheiro-habilidades-manager.js
   Tipo: Gerenciador de habilidades (versão antiga)
   Tamanho: ~25 KB
   Status: Fundida em companheiro-arts-system.js
   Referências: 0
   Ação: MOVER PARA BACKUP APÓS CONFIRMAR CONSOLIDAÇÃO

❌ js/companheiro-habilidades-ui.js
   Tipo: UI de habilidades (versão antiga)
   Tamanho: ~20 KB
   Status: Fundida em companheiro-arts-renderer.js
   Referências: 0
   Ação: MOVER PARA BACKUP APÓS CONFIRMAR CONSOLIDAÇÃO

❌ js/persistence-manager.js
   Tipo: Persistência (versão antiga)
   Tamanho: ~15 KB
   Status: Refatorada como localstorage-manager.js
   Referências: 0
   Ação: MOVER PARA BACKUP APÓS CONFIRMAR CONSOLIDAÇÃO
```

**Total Versões Antigas JS:** 78 KB

---

### CATEGORIA 4: TESTES ISOLADOS (2 JS)

```
❌ js/teste-inventario.js
   Tipo: Script de teste isolado
   Tamanho: ~8 KB
   Status: Nunca integrado ao HTML
   Referências: 0
   Ação: MOVER PARA BACKUP OU /tests/

❌ js/teste-menu-completo.js
   Tipo: Script de teste isolado
   Tamanho: ~12 KB
   Status: Nunca integrado ao HTML
   Referências: 0
   Ação: MOVER PARA BACKUP OU /tests/
```

**Total Testes Isolados JS:** 20 KB

---

## 📊 RESUMO CONSOLIDADO

### Por Categoria
| Categoria | JS | CSS | Total | Tamanho |
|-----------|----|----|-------|---------|
| Cultivação | 9 | 3 | 12 | 263 KB |
| Tricksters Coin | 2 | 2 | 4 | 66 KB |
| Versões Antigas | 4 | 0 | 4 | 78 KB |
| Testes Isolados | 2 | 0 | 2 | 20 KB |
| **TOTAL** | **17** | **5** | **22** | **427 KB** |

### Por Prioridade de Remoção
| Prioridade | O quê | Quando | Risco |
|-----------|-------|--------|-------|
| 🔴 CRÍTICA | Cultivação (12) | Imediato | BAIXO |
| 🔴 CRÍTICA | Tricksters (4) | Imediato | BAIXO |
| 🟡 ALTA | Versões Antigas (4) | Após validação | MÉDIO |
| 🟢 MÉDIA | Testes (2) | Após decisão | BAIXO |

---

## 📁 CSS ÓRFÃ ADICIONAL (Sem JS equivalente)

```
❌ css/arts-system.css
   Status: Verificar se carregado (pode ser duplicata de arts.css)
   Ação: REVISAR CARREGAMENTO NO HTML

❌ css/companheiros-modal-redesign.css
   Status: Verificar qual versão está ativa
   Ação: CONSOLIDAR OU REMOVER

(Existem 2-3 outros CSS potencialmente órfãos que precisam análise)
```

---

## 🚀 PROCEDIMENTO DE REMOÇÃO

### Passo 1: Confirmar Nenhuma Referência
```bash
# Verificar que não há referências em código ativo
grep -r "cultivacao\|tricksters\|teste-inventario\|teste-menu" \
  --include="*.js" --include="*.html" --include="*.css" \
  --exclude-dir=_backup* \
  js/ css/ index.html

# Resultado esperado: Nenhuma correspondência
```

### Passo 2: Mover para Backup
```bash
# Mover Cultivação
for file in js/cultivacao-*.js css/cultivacao-*.css; do
  [ -f "$file" ] && mv "$file" "_backup_pre_refatoracao_2026-02-27/"
done

# Mover Tricksters Coin
for file in js/tricksters-coin-*.js css/tricksters-coin-*.css; do
  [ -f "$file" ] && mv "$file" "_backup_pre_refatoracao_2026-02-27/"
done

# Mover Versões Antigas (após análise)
for file in js/companheiro-inventario-modal.js \
            js/companheiro-habilidades-*.js \
            js/persistence-manager.js; do
  [ -f "$file" ] && mv "$file" "_backup_pre_refatoracao_2026-02-27/"
done

# Mover Testes Isolados
for file in js/teste-*.js; do
  [ -f "$file" ] && mv "$file" "_backup_pre_refatoracao_2026-02-27/"
done
```

### Passo 3: Validar
```bash
# Confirmar que foram movidos
ls -la _backup_pre_refatoracao_2026-02-27/ | wc -l
# Deve conter ~22 arquivos

# Confirmar que não estão mais em origin
ls -la js/cultivacao-* 2>/dev/null || echo "✓ Cultivação removida"
ls -la js/tricksters-* 2>/dev/null || echo "✓ Tricksters removida"
```

---

## ⚠️ ANTES DE EXECUTAR REMOÇÃO

### Checklist Crítico
- [ ] Pasta de backup `_backup_pre_refatoracao_2026-02-27/` existe e está vazia
- [ ] Git status limpo ou último commit realizado
- [ ] Confirmado que não há referências em código ativo
- [ ] Teste local do aplicativo funcionando perfeitamente
- [ ] Backup manual local do projeto realizado
- [ ] Documentação lida e entendida

### Referências de Recuperação
Se algo der errado:
```bash
# Restaurar de backup
cp _backup_pre_refatoracao_2026-02-27/* js/
cp _backup_pre_refatoracao_2026-02-27/*.css css/

# Ou usar git
git restore js/ css/
```

---

## 📈 IMPACTO DA REMOÇÃO

### Antes
```
Total Projeto: ~2.5 MB (com node_modules)
JS: ~892 KB (92 arquivos)
CSS: ~145 KB (49 arquivos)
```

### Depois
```
Total Projeto: ~2.1 MB (com node_modules)
JS: ~815 KB (75 arquivos)
CSS: ~127 KB (44 arquivos)

Ganho: 16% redução em size
Ganho: 17 arquivos eliminados
Ganho: Clareza e manutenibilidade
```

---

**Fim do Inventário de Arquivos Órfãos**

Data: 27/02/2026 | Documentação de Auditoria

