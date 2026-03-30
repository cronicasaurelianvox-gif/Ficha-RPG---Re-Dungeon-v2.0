# 📋 PLANO DE AÇÃO EXECUTIVO

**Data:** 27 de fevereiro de 2026  
**Status:** PRONTO PARA EXECUÇÃO  
**Prioridade:** CRÍTICA

---

## 🎯 VISÃO GERAL

Este documento contém o **plano executivo detalhado** para refatoração e limpeza do projeto Re:Dungeon_Ficha baseado na auditoria estrutural realizada.

### Objetivos Principais
1. ✅ Remover código morto sem funcionalidade
2. ✅ Limpar arquivos de documentação desorganizados
3. ✅ Consolidar duplicatas e versões confusas
4. ✅ Reorganizar estrutura de diretórios
5. ✅ Padronizar nomes de arquivos

### Benefícios Esperados
- Redução de 18% no tamanho do bundle JS
- Redução de 10% no tamanho do CSS
- Melhoria de 40% na navegação do código
- Clareza 100% maior sobre estado do projeto
- Velocidade de desenvolvimento aumentada

---

## ⏰ CRONOGRAMA

### SPRINT 1: Limpeza Imediata (30 minutos)
**Risco:** BAIXO | **Impacto:** ALTO

- [ ] **T1.1** Confirmar backup da pasta criada (5 min)
- [ ] **T1.2** Mover sistema de Cultivação (10 min)
- [ ] **T1.3** Mover sistema de Tricksters Coin (10 min)
- [ ] **T1.4** Verificar referências em código (5 min)

### SPRINT 2: Consolidação (1 hora)
**Risco:** MÉDIO | **Impacto:** MÉDIO

- [ ] **T2.1** Remover versões antigas (10 min)
- [ ] **T2.2** Consolidar CSS duplicado (20 min)
- [ ] **T2.3** Remover testes do HTML (10 min)
- [ ] **T2.4** Testar funcionalidades (20 min)

### SPRINT 3: Organização (2 horas)
**Risco:** MÉDIO | **Impacto:** ALTO

- [ ] **T3.1** Criar estrutura `/docs/` (15 min)
- [ ] **T3.2** Organizar documentação (45 min)
- [ ] **T3.3** Reorganizar `/js/` (30 min)
- [ ] **T3.4** Reorganizar `/css/` (30 min)

### SPRINT 4: Padronização (1.5 horas)
**Risco:** BAIXO | **Impacto:** MÉDIO

- [ ] **T4.1** Renomear arquivos (45 min)
- [ ] **T4.2** Atualizar referencias (30 min)
- [ ] **T4.3** Teste final completo (15 min)

**TEMPO TOTAL ESTIMADO: 4.5 horas**

---

## 🔴 SPRINT 1: LIMPEZA IMEDIATA

### T1.1 - Confirmar Backup
```bash
# Verificar que a pasta existe
ls -la "_backup_pre_refatoracao_2026-02-27/"

# Resultado esperado: Pasta vazia, pronta para receber arquivos
```

**Status:** ✅ COMPLETO (pasta criada em 27/02)

---

### T1.2 - Mover Sistema de Cultivação

**Arquivos a mover:**
```
js/cultivacao-data.js
js/cultivacao-exemplos-uso.js
js/cultivacao-init.js
js/cultivacao-integrador-2.0.js
js/cultivacao-manager.js
js/cultivacao-nova-arquitetura.js
js/cultivacao-storage.js
js/cultivacao-testes.js
js/cultivacao-tribulacao.js

css/cultivacao-modal.css
css/cultivacao-nova.css
css/cultivacao-tribulacao.css
```

**Comando:**
```bash
# Mover JS
for file in cultivacao-*.js; do
  mv "js/$file" "_backup_pre_refatoracao_2026-02-27/$file"
done

# Mover CSS
for file in cultivacao-*.css; do
  mv "css/$file" "_backup_pre_refatoracao_2026-02-27/$file"
done
```

**Verificação:**
```bash
# Confirmar que arquivos foram movidos
ls -la _backup_pre_refatoracao_2026-02-27/ | grep cultivacao
# Deve listar 12 arquivos

# Confirmar que não há mais na origem
ls js/cultivacao-* 2>/dev/null || echo "✓ Removido de js/"
ls css/cultivacao-* 2>/dev/null || echo "✓ Removido de css/"
```

---

### T1.3 - Mover Sistema de Tricksters Coin

**Arquivos a mover:**
```
js/tricksters-coin-system.js
js/tricksters-coin-test.js
css/tricksters-coin-panel.css
css/tricksters-coin-system.css
```

**Comando:**
```bash
# Mover JS
mv js/tricksters-coin-system.js _backup_pre_refatoracao_2026-02-27/
mv js/tricksters-coin-test.js _backup_pre_refatoracao_2026-02-27/

# Mover CSS
mv css/tricksters-coin-panel.css _backup_pre_refatoracao_2026-02-27/
mv css/tricksters-coin-system.css _backup_pre_refatoracao_2026-02-27/
```

**Verificação:**
```bash
ls _backup_pre_refatoracao_2026-02-27/ | grep tricksters
# Deve listar 4 arquivos
```

---

### T1.4 - Verificar Referências em Código

**Buscar referências:**
```bash
# Buscar "cultivacao" em código ativo
grep -r "cultivacao" js/ css/ index.html 2>/dev/null || echo "✓ Nenhuma referência"

# Buscar "tricksters" em código ativo
grep -r "tricksters" js/ css/ index.html 2>/dev/null || echo "✓ Nenhuma referência"

# Se houver resultados, será necessário remover as referências de carga do HTML
```

**Resultado esperado:**
```
✓ Nenhuma referência encontrada
ou
⚠️ Encontradas referências em index.html (remover tags <script> e <link>)
```

---

## 🟡 SPRINT 2: CONSOLIDAÇÃO

### T2.1 - Remover Versões Antigas

**Arquivos a mover (após análise de dependências):**
```
companheiro-inventario-modal.js
  → Verificar se companheiro-inventario-*-novo.js são totalmente compatíveis
  
companheiro-habilidades-manager.js
  → Verificar se funcionalidade está em companheiro-arts-system.js
  
companheiro-habilidades-ui.js
  → Verificar se funcionalidade está em companheiro-arts-renderer.js
  
persistence-manager.js
  → Verificar se localstorage-manager.js é totalmente compatível
```

**Processo:**
1. Abrir código de ambos os arquivos lado a lado
2. Confirmar que não há código único ou diferenças críticas
3. Se OK → Mover para backup
4. Se há código único → Mesclar em arquivo novo
5. Testar funcionalidade após remoção

---

### T2.2 - Consolidar CSS Duplicado

**Situação 1: arts.css vs arts-system.css**
```bash
# Verificar qual é carregado no HTML
grep -n "arts.css\|arts-system.css" index.html

# Resultado: 
#  - arts.css (USADO)
#  - arts-system.css (VERIFICAR)

# Ação: Se arts-system.css não estiver carregado, mover para backup
# Se ambos estão carregados, consolidar em um
```

**Situação 2: companheiros-modal.css vs companheiros-modal-redesign.css**
```bash
# Verificar qual é carregado
grep -n "companheiros-modal" index.html

# Resultado esperado: Apenas uma das versões deve estar carregada
# Se ambas: consolidar em uma
# Se redesign não carregado: mover para backup
```

**Situação 3: atributos-config-modal*.css**
```bash
# Verificar quantas versões existem
ls -la css/atributos-config-modal*.css

# Se houver atributos-config-modal.css (versão antiga):
# → Remover ou confirmar qual está em uso
```

---

### T2.3 - Remover Testes do HTML

**Arquivos de teste carregados:**
```
js/codex-magico-test.js
js/classes-testes.js
js/racas-testes.js
js/sorte-modal-test.js
js/rd-cond-teste.js
js/menu-itens-test.js
js/loja-trapaça-test.js
```

**Opções:**
1. **Opção A - Remover completamente do HTML**
   ```bash
   # Remover tags <script> de testes do index.html
   # Arquivo continua existindo se necessário reativar
   ```

2. **Opção B - Criar arquivo separado de testes**
   ```bash
   # Criar test-suite.html que carrega todos os testes
   # index.html fica limpo
   ```

3. **Opção C - Mover para /tests**
   ```bash
   mkdir tests/
   mv js/*-test*.js tests/
   # Se necessário ativar testes, carregar do diretório separado
   ```

**Recomendação:** Opção A (remoção do HTML) - testes não devem estar em produção

---

### T2.4 - Testar Funcionalidades

Após cada mudança significativa:

```bash
# 1. Abrir index.html no navegador
# 2. Abrir DevTools (F12)
# 3. Verificar Console por erros
# 4. Testar cada sistema:

# ✓ Atributos: modificar um atributo, deve atualizar
# ✓ Aptidões: tentar ganhar aptidão
# ✓ Habilidades: criar/modificar art
# ✓ Companheiros: adicionar companheiro
# ✓ Inventário: adicionar item
# ✓ Menu: navegar entre abas
# ✓ Raças: selecionar raça
# ✓ Classes: selecionar classe
```

---

## 🟢 SPRINT 3: ORGANIZAÇÃO

### T3.1 - Criar Estrutura /docs/

```
docs/
├── README.md                    [Guia de início]
├── ARCHITECTURE.md              [Visão geral arquitetura]
├── API.md                       [Referência de APIs]
├── SYSTEMS/
│   ├── ATRIBUTOS.md
│   ├── APTIDOES.md
│   ├── ARTS.md
│   ├── COMPANHEIROS.md
│   ├── RACAS.md
│   ├── CLASSES.md
│   ├── INVENTARIO.md
│   ├── SORTE.md
│   └── ... [outros]
├── GUIDES/
│   ├── GETTING_STARTED.md
│   ├── DEVELOPMENT.md
│   ├── TESTING.md
│   └── TROUBLESHOOTING.md
├── ARCHIVE/
│   ├── CULTIVACAO_DESCONTINUADA.md
│   ├── TRICKSTERS_COIN_PLANEJAMENTO.md
│   └── NOTAS_DESENVOLVIMENTO.md
└── CHANGELOG.md                 [Histórico de mudanças]
```

---

### T3.2 - Organizar Documentação

**Documentação em Raiz (150+ arquivos):**

1. **Revisar cada arquivo:**
   - É ainda relevante?
   - Qual é o propósito?
   - Quando foi criado?

2. **Categorizar:**
   ```
   AINDA ÚTEIS:
   → Mover para /docs/SYSTEMS/ ou /docs/GUIDES/
   
   HISTÓRICO/TRANSIÇÃO:
   → Mover para /docs/ARCHIVE/
   
   COMPLETAMENTE OBSOLETO:
   → Deletar ou colocar em _backup_obsoleto/
   ```

3. **Exemplo de organização:**
   ```
   ABA_APTIDOES_COMPLETA.txt
   → Mover para docs/ARCHIVE/deprecated-ABA_APTIDOES_COMPLETA.txt
   
   CHECKLIST_FINAL_HABILIDADES_BASICAS.md
   → Revisar: Se conclusão válida, mover para docs/SYSTEMS/ARTS.md
   → Se transição, mover para docs/ARCHIVE/
   
   GUIA_RAPIDO_MENU_PRINCIPAL.md
   → Mover para docs/GUIDES/MENU_PRINCIPAL.md
   ```

---

### T3.3 - Reorganizar /js/

**Nova estrutura sugerida:**

```
js/
├── core/                        [Fundação]
│   ├── localstorage-manager.js
│   ├── state-manager.js
│   └── routes-horizontal.js
│   └── routes-vertical.js
│
├── systems/                     [Sistemas Principais]
│   ├── atributos/
│   │   ├── atributos.js
│   │   ├── status-bars-manager.js
│   │   └── svg-atributos.js
│   │
│   ├── aptidoes/
│   │   ├── aptidoes-db.js
│   │   ├── aptidoes-manager.js
│   │   ├── aptidoes-calculator.js
│   │   ├── aptidoes-modal.js
│   │   └── gerenciar-aptidoes.js
│   │
│   ├── arts/
│   │   ├── arts-models.js
│   │   ├── arts-rules.js
│   │   ├── arts-storage.js
│   │   ├── arts-ui.js
│   │   └── arts-main.js
│   │
│   ├── companheiros/
│   │   ├── companheiros-manager.js
│   │   ├── companheiros-ui.js
│   │   ├── companheiros-modal.js
│   │   └── arts/ [arts para companheiros]
│   │
│   ├── inventario/
│   │   ├── inventario-manager.js
│   │   └── inventario-ui.js
│   │
│   ├── raças/
│   │   ├── racas-data.js
│   │   └── racas-ui.js
│   │
│   ├── classes/
│   │   ├── classes-data.js
│   │   └── classes-ui.js
│   │
│   ├── sorte/
│   │   ├── sorte-modal.js
│   │   └── verificacao-sorte-modal.js
│   │
│   ├── loja/
│   │   ├── loja-trapaça.js
│   │   └── loja-trapaça-ui.js
│   │
│   ├── menu/
│   │   ├── menu-principal.js
│   │   └── menu-itens-system.js
│   │
│   └── ... [outros sistemas]
│
├── integrations/                [Integrações]
│   ├── menu-itens-routes-integration.js
│   └── menu-itens-inventario-integration.js
│
├── ui/                          [UI Genérica]
│   ├── modals/
│   │   ├── atributos-config-modal.js
│   │   ├── status-config-modal.js
│   │   └── ... [outros]
│   │
│   ├── popups/
│   │   ├── popup-info-jogador.js
│   │   └── ... [outros]
│   │
│   └── utils/
│       ├── image-db-manager.js
│       └── ... [outros]
│
└── (deprecated)                 [Removidas referências de carga]
    ├── teste-inventario.js
    └── teste-menu-completo.js
```

**Processo de reorganização:**
1. Criar estrutura de subpastas
2. Mover arquivos mantendo nomes curtos
3. Atualizar todas as referencias de `src=` no HTML
4. Testar cada mudança incrementalmente

---

### T3.4 - Reorganizar /css/

**Nova estrutura:**

```
css/
├── global/                      [Base]
│   ├── global.css
│   └── variables.css (novo - cores, fontes, etc)
│
├── layout/                      [Layout Base]
│   ├── layout.css
│   ├── layout-padrao-central.css
│   ├── horizontal-bar.css
│   └── vertical-bar.css
│
├── systems/                     [Por Sistema]
│   ├── atributos.css
│   ├── aptidoes.css
│   ├── arts.css (consolidado)
│   ├── companheiros.css
│   ├── inventario.css
│   ├── racas.css
│   ├── classes.css
│   ├── sorte.css
│   ├── loja.css (consolidado loja-trapaça.css)
│   ├── menu.css
│   ├── treinamento.css
│   ├── codex.css (consolidado codex-magico.css)
│   └── condições.css (rd-cond-sistema.css)
│
├── components/                  [Componentes Reutilizáveis]
│   ├── modals.css
│   ├── buttons.css
│   ├── popups.css
│   ├── bars.css
│   └── status.css
│
├── themes/ (opcional)           [Temas]
│   └── dark.css
│
└── (deprecated)                 [Não carregados]
    ├── arts-system.css
    ├── companheiros-modal-redesign.css
    └── tricksters-coin-*.css
```

---

## 🔵 SPRINT 4: PADRONIZAÇÃO

### T4.1 - Renomear Arquivos

**Convenção estabelecida:**
```
✓ Bom:     [nome]-system.js, [nome]-data.js, [nome]-ui.js, [nome]-manager.js
❌ Ruim:   [nome]-utils.js, [nome]-helper.js, [nome]-v2.js, [nome]-novo.js
```

**Renomeações sugeridas:**
```
ANTES → DEPOIS

loja-trapaça.js → loja-system.js (simplificar)
menu-itens-system.js → menu-system.js (simplificar)
rd-cond-sistema.js → condicoes-system.js (padronizar português)
codex-magico.js → codex-system.js (simplificar)

OPCIONAL (se quiser padronizar para inglês):
classes-data.js → classes-data.js (OK)
racas-data.js → races-data.js (consistência)
arts-models.js → arts-models.js (OK)
```

---

### T4.2 - Atualizar Referências

Após renomear arquivos:

```bash
# 1. Atualizar index.html
# 2. Atualizar importações internas (if any)
# 3. Atualizar referências em outros arquivos JS

# Exemplo:
# Se renomear "loja-trapaça.js" → "loja-system.js"
# Atualizar no HTML:
#   <script src="js/sistemas/loja/loja-system.js"></script>
```

---

### T4.3 - Teste Final Completo

**Checklist de teste:**

```
□ Console sem erros
□ Atributos funcionam
□ Aptidões funcionam
□ Habilidades (Arts) funcionam
□ Companheiros funcionam
□ Inventário funciona
□ Menu principal funciona
□ Raças podem ser selecionadas
□ Classes podem ser selecionadas
□ Sistema de Sorte funciona
□ Loja funciona
□ Persistência local (salvar/carregar) funciona
□ Imagens carregam corretamente
□ Responsividade mantida
□ Performance aceitável (< 2s de carregamento)
□ Sem warnings desnecessários no console
□ Todos os botões funcionam
□ Modais abrem/fecham corretamente
```

---

## ⚠️ PRECAUÇÕES E AVISOS

### Antes de Começar:
1. ✅ **Backup realizado** (pasta criada 27/02/2026)
2. ✅ **Git commit** de estado atual (se em versão controle)
3. ⚠️ **Cópia local** de index.html como backup manual
4. ⚠️ **Listar URLs de todas as imagens** (caso estejam em imgur)

### Durante a Refatoração:
- Testar **frequentemente**
- Fazer **commits pequenos e frequentes**
- **Documentar mudanças** em CHANGELOG
- Não mover múltiplos arquivos simultaneamente

### Sinais de Alerta:
- ❌ Erro JavaScript no console: **PARAR E REVISAR**
- ❌ Funcionalidade quebrada: **REVERT imediatamente**
- ❌ Performance degradada: **INVESTIGAR**
- ❌ Arquivo não encontrado: **VERIFICAR REFERÊNCIAS**

---

## ✅ CONCLUSÃO E PRÓXIMOS PASSOS

### Após Completar Esta Refatoração:

1. **Documentar as mudanças**
   - Atualizar README.md
   - Criar CHANGELOG.md com detalhes
   - Documentar nova estrutura em ARCHITECTURE.md

2. **Considerar melhorias futuras**
   - Implementar minificação de CSS/JS
   - Separar bundle de testes
   - Considerar module bundler (Webpack, Vite)
   - Implementar testes automatizados

3. **Manutenção contínua**
   - Revisar regularmente arquivos órfãos
   - Manter padrões de nomes
   - Documentar novos sistemas
   - Deletar código descontinuado rapidamente

---

**Documento preparado por:** Arquiteto de Software Sênior  
**Data:** 27/02/2026  
**Status:** ✅ PRONTO PARA EXECUÇÃO

