# 🔄 PLANO AJUSTADO - CULTIVAÇÃO [EM_RECONSTRUCAO]

**Data:** 27 de fevereiro de 2026  
**Situação:** Reclassificação crítica  
**Impacto:** Reduz escopo de limpeza e adiciona preservação

---

## ⚠️ MUDANÇA CRÍTICA

**Sistema de Cultivação NÃO será removido definitivamente**

```
Status Anterior: [OBSOLETO] → Remover
Status Novo:    [EM_RECONSTRUCAO] → Preservar em /legacy/
```

---

## 📊 NOVO INVENTÁRIO DE ÓRFÃOS

### Antes (22 arquivos)
```
Cultivação:        12 arquivos
Tricksters Coin:   4 arquivos
Versões Antigas:   4 arquivos
Testes Isolados:   2 arquivos
TOTAL:            22 arquivos
```

### Depois (10 arquivos)
```
Cultivação:        ❌ Não remover (apenas reorganizar)
Tricksters Coin:   ✓ 4 arquivos → Backup
Versões Antigas:   ✓ 4 arquivos → Backup (com validação)
Testes Isolados:   ✓ 2 arquivos → Backup
TOTAL ÓRFÃO:      10 arquivos (autorizado para backup)
```

---

## ✅ AÇÕES AUTORIZADAS

### 1. Mover Cultivação V1 para `/legacy/`

**Criar estrutura:**
```
legacy/
└── cultivacao_v1/
    ├── js/
    │   ├── cultivacao-data.js
    │   ├── cultivacao-exemplos-uso.js
    │   ├── cultivacao-init.js
    │   ├── cultivacao-integrador-2.0.js
    │   ├── cultivacao-manager.js
    │   ├── cultivacao-nova-arquitetura.js
    │   ├── cultivacao-storage.js
    │   ├── cultivacao-testes.js
    │   └── cultivacao-tribulacao.js
    ├── css/
    │   ├── cultivacao-modal.css
    │   ├── cultivacao-nova.css
    │   └── cultivacao-tribulacao.css
    └── README.md [Status: EM_RECONSTRUCAO]
```

**Comando:**
```bash
# Criar diretórios (FEITO ✓)

# Depois mover arquivos (PRÓXIMO)
mv js/cultivacao-*.js legacy/cultivacao_v1/js/
mv css/cultivacao-*.css legacy/cultivacao_v1/css/
```

**Status:** ✅ Diretórios já criados

---

### 2. Mover Tricksters Coin para Backup

```bash
mv js/tricksters-coin-system.js _backup_pre_refatoracao_2026-02-27/
mv js/tricksters-coin-test.js _backup_pre_refatoracao_2026-02-27/
mv css/tricksters-coin-panel.css _backup_pre_refatoracao_2026-02-27/
mv css/tricksters-coin-system.css _backup_pre_refatoracao_2026-02-27/
```

**Status:** ⏳ Autorizado para fazer

---

### 3. Mover Versões Antigas para Backup (COM VALIDAÇÃO)

```bash
# ANTES: Validar que companheiro-inventario-*-novo.js é equivalente
# ANTES: Validar que companheiro-arts-* contém funcionalidades

mv js/companheiro-inventario-modal.js _backup_pre_refatoracao_2026-02-27/
mv js/companheiro-habilidades-manager.js _backup_pre_refatoracao_2026-02-27/
mv js/companheiro-habilidades-ui.js _backup_pre_refatoracao_2026-02-27/
mv js/persistence-manager.js _backup_pre_refatoracao_2026-02-27/
```

**Status:** ⏳ Autorizado (após validação)

---

### 4. Mover Testes Isolados para Backup

```bash
mv js/teste-inventario.js _backup_pre_refatoracao_2026-02-27/
mv js/teste-menu-completo.js _backup_pre_refatoracao_2026-02-27/
```

**Status:** ⏳ Autorizado para fazer

---

## 🚫 NÃO FAÇA

- ❌ Deletar qualquer arquivo permanentemente
- ❌ Remover System de Cultivação (está em reconstrução)
- ❌ Alterar `index.html` sem antes validar referências
- ❌ Mover arquivos CORE para backup

---

## 📋 NOVO CHECKLIST DE EXECUÇÃO

### ETAPA 1: Preservação de Cultivação
- [ ] ✅ Criar `/legacy/cultivacao_v1/` (FEITO)
- [ ] ✅ Criar `/docs/CULTIVACAO_RECONSTRUCAO.md` (FEITO)
- [ ] ⏳ Mover `js/cultivacao-*.js` para `/legacy/cultivacao_v1/js/`
- [ ] ⏳ Mover `css/cultivacao-*.css` para `/legacy/cultivacao_v1/css/`
- [ ] Testar que nenhuma referência ativa quebrou
- [ ] Confirmar que `/legacy/cultivacao_v1/README.md` está ok

### ETAPA 2: Backup de Órfãos Reais
- [ ] ⏳ Validar `companheiro-inventario-*` consolidação
- [ ] ⏳ Validar `companheiro-habilidades-*` consolidação
- [ ] ⏳ Validar `persistence-manager.js` consolidação
- [ ] ⏳ Mover Tricksters Coin (4 arquivos)
- [ ] ⏳ Mover Versões Antigas (4 arquivos)
- [ ] ⏳ Mover Testes Isolados (2 arquivos)
- [ ] Testar que nada quebrou
- [ ] Git commit de segurança

### ETAPA 3: Validação Final
- [ ] Nenhum erro no console
- [ ] Todos os sistemas funcionam
- [ ] Documentação atualizada
- [ ] Roadmap de Cultivação visível

---

## 📊 NOVO RESUMO

| Item | Antes | Depois | Ação |
|------|-------|--------|------|
| Cultivação | [OBSOLETO] 12 arq | [EM_RECONSTRUCAO] /legacy/ | Preservar |
| Tricksters | [OBSOLETO] 4 arq | [BACKUP] | Mover |
| Versões Antigas | [OBSOLETO] 4 arq | [BACKUP] | Validar + Mover |
| Testes | [TESTE] 2 arq | [BACKUP] | Mover |
| **TOTAL ÓRFÃO** | **22 arquivos** | **10 arquivos** | **Reduzido 55%** |

---

## 🎯 RISCO ESTRUTURAL

**Risco de quebra:** ✅ **ZERO**
- Nada será deletado permanentemente
- Tudo preservado em `/legacy/` ou `_backup_*/`
- Recuperação 100% possível

**Risco de funcionalidade:** ✅ **ZERO**
- Cultivação sai do `js/` mas mantém acesso via `/legacy/`
- Órfãos reais (Tricksters, Versões Antigas) não têm dependências
- Testes isolados nunca eram carregados

---

## 📝 PRÓXIMA AÇÃO

1. **AGORA:** Confirmar que `/legacy/cultivacao_v1/` foi criado ✅
2. **PRÓXIMO:** Gerar novo relatório ajustado
3. **DEPOIS:** Executar movimentações com zero risco

---

**Situação:** ✅ Documentação atualizada  
**Risco:** ✅ Zero  
**Roadmap:** ✅ Cultivação ativa

