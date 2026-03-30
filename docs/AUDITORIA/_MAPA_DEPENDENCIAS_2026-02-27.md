# 🔗 MAPA DETALHADO DE DEPENDÊNCIAS

**Data:** 27 de fevereiro de 2026

---

## CAMADA 1: FUNDAÇÃO (SEM DEPENDÊNCIAS)

### Persistência e Estado
```
localstorage-manager.js
├── Função: Gerenciar persistência local
├── Dependências: Nenhuma
├── Usado por: TODOS os outros módulos
└── Crítico: SIM

state-manager.js
├── Função: Gerenciar estado global
├── Dependências: Nenhuma
├── Usado por: Múltiplos sistemas
└── Crítico: SIM
```

### Roteamento
```
routes-horizontal.js
├── Função: Navegação horizontal (abas)
├── Dependências: Nenhuma
├── Usado por: index.html (inline)
└── Crítico: SIM

routes-vertical.js
├── Função: Navegação vertical
├── Dependências: Nenhuma
├── Usado por: Selecionado
└── Crítico: TALVEZ
```

---

## CAMADA 2: SISTEMA DE ATRIBUTOS

```
atributos.js
├── Dependências: Nenhuma (core)
├── Usado por:
│   ├── svg-atributos.js
│   ├── status-bars-manager.js
│   └── atributos-config-modal.js
└── Crítico: SIM

svg-atributos.js
├── Dependências: atributos.js
├── Função: Renderizar SVG de atributos
└── Crítico: SIM

status-bars-manager.js
├── Dependências: atributos.js
├── Função: Gerenciar barras de status
├── Usado por: 
│   ├── status-config-modal.js
│   └── atualizar-ficha-completa.js
└── Crítico: SIM

status-config-modal.js
├── Dependências: status-bars-manager.js
├── Função: Modal de configuração de status
└── Crítico: SIM

atributos-config-modal.js
├── Dependências: atributos.js
├── Função: Modal de configuração de atributos
└── Crítico: SIM

atualizar-ficha-completa.js
├── Dependências: status-bars-manager.js, atributos.js
├── Função: Atualizar ficha completa
└── Crítico: TALVEZ
```

---

## CAMADA 3: SISTEMA DE APTIDÕES

```
aptidoes-db.js (Base de dados)
├── Dependências: Nenhuma
├── Função: Dados de aptidões
└── Crítico: SIM

aptidoes-manager.js
├── Dependências: aptidoes-db.js, localstorage-manager.js
├── Função: Gerenciar aptidões
└── Crítico: SIM

aptidoes-calculator.js
├── Dependências: aptidoes-manager.js
├── Função: Cálculos de aptidões
└── Crítico: SIM

aptidoes-bonus-sync.js
├── Dependências: aptidoes-manager.js
├── Função: Sincronizar bônus de aptidões
└── Crítico: SIM

vantagens-aptidoes-system.js
├── Dependências: aptidoes-manager.js
├── Função: Sistema de vantagens desbloqueadas
└── Crítico: SIM

render-vantagens-aptidoes.js
├── Dependências: vantagens-aptidoes-system.js
├── Função: Renderizar vantagens
└── Crítico: SIM

aptidoes-modal.js
├── Dependências: aptidoes-manager.js
├── Função: Modal de aptidões
├── Usado por: gerenciar-aptidoes.js
└── Crítico: SIM

gerenciar-aptidoes.js
├── Dependências: aptidoes-modal.js, aptidoes-manager.js
├── Função: Interface de gerenciamento
└── Crítico: SIM

popup-aptidoes.js
├── Dependências: aptidoes-manager.js
├── Função: Popup de informações de aptidões
└── Crítico: TALVEZ

aptidoes-visual-popup.js
├── Dependências: aptidoes-manager.js
├── Função: Popup visual melhorado
└── Crítico: TALVEZ

gerenciar-aptidoes-companheiro.js
├── Dependências: aptidoes-manager.js
├── Função: Aptidões do companheiro
└── Crítico: TALVEZ

bonus-calculator.js
├── Dependências: aptidoes-calculator.js
├── Função: Calcular bônus
└── Crítico: TALVEZ

bonus-opcional-companheiro.js
├── Dependências: companheiros-manager.js
├── Função: Bônus opcional para companheiro
└── Crítico: TALVEZ
```

---

## CAMADA 4: SISTEMA DE HABILIDADES (ARTS)

```
arts-models.js (Base)
├── Dependências: Nenhuma
├── Função: Modelos de Arts
└── Crítico: SIM

arts-rules.js
├── Dependências: arts-models.js
├── Função: Regras de Arts
└── Crítico: SIM

arts-storage.js
├── Dependências: arts-models.js, localstorage-manager.js
├── Função: Persistência de Arts
└── Crítico: SIM

arts-ui.js
├── Dependências: arts-models.js, arts-rules.js
├── Função: Interface de Arts
└── Crítico: SIM

arts-ui-enhancement.js
├── Dependências: arts-ui.js
├── Função: Melhorias visuais
└── Crítico: SIM

arts-main.js
├── Dependências: arts-models.js, arts-storage.js, arts-ui.js
├── Função: Integração principal de Arts
└── Crítico: SIM
```

---

## CAMADA 5: SISTEMA DE RAÇAS

```
racas-data.js
├── Dependências: Nenhuma
├── Função: Dados de raças
└── Crítico: SIM

racas-imagens.js
├── Dependências: racas-data.js
├── Função: Imagens de raças
└── Crítico: SIM

racas-habilidades-basicas-selector.js
├── Dependências: racas-data.js, arts-models.js (possivelmente)
├── Função: Seletor de habilidades básicas
└── Crítico: SIM

racas-ui.js
├── Dependências: racas-data.js, racas-imagens.js
├── Função: Interface de seleção de raças
└── Crítico: SIM

racas-testes.js
├── Dependências: racas-data.js
├── Função: Testes de raças
└── Crítico: NÃO (teste)
```

---

## CAMADA 6: SISTEMA DE CLASSES

```
classes-data.js
├── Dependências: Nenhuma
├── Função: Dados de classes
└── Crítico: SIM

classes-ui.js
├── Dependências: classes-data.js
├── Função: Interface de seleção de classes
└── Crítico: SIM

classes-testes.js
├── Dependências: classes-data.js
├── Função: Testes de classes
└── Crítico: NÃO (teste)
```

---

## CAMADA 7: SISTEMA DE COMPANHEIROS

```
companheiros-manager.js (Core)
├── Dependências: localstorage-manager.js
├── Função: Gerenciar companheiros
└── Crítico: SIM

companheiros-ui.js
├── Dependências: companheiros-manager.js
├── Função: Interface de companheiros
└── Crítico: SIM

companheiros-modal.js
├── Dependências: companheiros-manager.js, companheiros-ui.js
├── Função: Modal de companheiros
└── Crítico: SIM

companheiros-imagem-db.js
├── Dependências: Nenhuma (dados)
├── Função: Base de dados de imagens
└── Crítico: SIM

### ARTS para Companheiros
companheiro-arts-system.js
├── Dependências: arts-models.js, companheiros-manager.js
├── Função: Sistema de Arts para companheiros
└── Crítico: SIM

companheiro-arts-persistence.js
├── Dependências: companheiro-arts-system.js, localstorage-manager.js
├── Função: Persistência de Arts
└── Crítico: SIM

companheiro-arts-modal.js
├── Dependências: companheiro-arts-system.js
├── Função: Modal de Arts
└── Crítico: SIM

companheiro-arts-renderer.js
├── Dependências: companheiro-arts-system.js
├── Função: Renderização de Arts
└── Crítico: SIM

### Inventário para Companheiros
companheiro-inventario-manager-novo.js
├── Dependências: inventario-manager.js, companheiros-manager.js
├── Função: Inventário do companheiro
└── Crítico: SIM

companheiro-inventario-ui-novo.js
├── Dependências: companheiro-inventario-manager-novo.js
├── Função: UI do inventário
└── Crítico: SIM

companheiro-inventario-init-novo.js
├── Dependências: companheiro-inventario-manager-novo.js
├── Função: Inicialização
└── Crítico: SIM

### OBSOLETO (NÃO CARREGADO)
companheiro-inventario-modal.js ❌
companheiro-habilidades-manager.js ❌
companheiro-habilidades-ui.js ❌
```

---

## CAMADA 8: SISTEMA DE INVENTÁRIO

```
inventario-manager.js
├── Dependências: localstorage-manager.js
├── Função: Gerenciar inventário
├── Usado por: 
│   ├── menu-itens-inventario-integration.js
│   └── companheiro-inventario-manager-novo.js
└── Crítico: SIM

inventario-ui.js
├── Dependências: inventario-manager.js
├── Função: Interface de inventário
└── Crítico: SIM

inventario-init.js
├── Dependências: inventario-manager.js, inventario-ui.js
├── Função: Inicialização
└── Crítico: SIM
```

---

## CAMADA 9: SISTEMA DE MENU/ITENS

```
menu-principal.js
├── Dependências: Nenhuma (independente)
├── Função: Menu principal
└── Crítico: SIM

menu-itens-data.js (data/)
├── Dependências: Nenhuma (dados puros)
├── Função: Dados de itens do menu
└── Crítico: SIM

menu-itens-system.js
├── Dependências: menu-itens-data.js
├── Função: Sistema de itens
└── Crítico: SIM

menu-itens-ui.js
├── Dependências: menu-itens-system.js
├── Função: Interface de itens
└── Crítico: SIM

menu-itens-routes-integration.js
├── Dependências: menu-itens-system.js, routes-horizontal.js
├── Função: Integração com rotas
└── Crítico: SIM

menu-itens-inventario-integration.js
├── Dependências: menu-itens-system.js, inventario-manager.js
├── Função: Integração com inventário
└── Crítico: SIM

menu-itens-test.js
├── Dependências: menu-itens-system.js
├── Função: Testes
└── Crítico: NÃO (teste)
```

---

## CAMADA 10: SISTEMAS ESPECIALIZADOS

### Loja da Trapaça
```
loja-trapaça-items.js (data/)
├── Dependências: Nenhuma (dados)
├── Função: Dados de itens da loja
└── Crítico: SIM

loja-trapaça.js
├── Dependências: loja-trapaça-items.js
├── Função: Sistema da loja
└── Crítico: SIM

loja-trapaça-ui.js
├── Dependências: loja-trapaça.js
├── Função: Interface da loja
└── Crítico: SIM

loja-trapaça-test.js
├── Dependências: loja-trapaça.js
├── Função: Testes
└── Crítico: NÃO (teste)
```

### Sistema de Sorte
```
sorte-modal.js
├── Dependências: Nenhuma (independente)
├── Função: Modal de sorte
└── Crítico: SIM

sorte-modal-test.js
├── Dependências: sorte-modal.js
├── Função: Testes
└── Crítico: NÃO (teste)

verificacao-sorte-modal.js
├── Dependências: sorte-modal.js
├── Função: Verificação de sorte
└── Crítico: SIM
```

### Codex Mágico
```
codex-magico.js
├── Dependências: Nenhuma (independente)
├── Função: Sistema de dicas
└── Crítico: TALVEZ

codex-magico-test.js
├── Dependências: codex-magico.js
├── Função: Testes
└── Crítico: NÃO (teste)
```

### Sistema de Condições
```
rd-cond-sistema.js
├── Dependências: Nenhuma (independente)
├── Função: Sistema de condições
└── Crítico: SIM

rd-cond-teste.js
├── Dependências: rd-cond-sistema.js
├── Função: Testes
└── Crítico: NÃO (teste)
```

### Treinamento
```
treinamento-sistema.js
├── Dependências: atributos.js, aptidoes-manager.js
├── Função: Sistema de treinamento
└── Crítico: SIM
```

---

## CAMADA 11: UTILITÁRIOS E UI GENÉRICA

```
image-db-manager.js
├── Dependências: localstorage-manager.js
├── Função: Gerenciar banco de imagens
└── Crítico: TALVEZ

personagem-image-controller.js
├── Dependências: image-db-manager.js
├── Função: Controlar imagem do personagem
└── Crítico: TALVEZ

popup-info-jogador.js
├── Dependências: atributos.js
├── Função: Popup de informações
└── Crítico: TALVEZ

controle-ficha-buttons.js
├── Dependências: Múltiplas (verificar)
├── Função: Botões de controle
└── Crítico: TALVEZ

reputacao-modal.js
├── Dependências: Verificar
├── Função: Modal de reputação
└── Crítico: TALVEZ
```

---

## CAMADA 12: DESCONTINUADOS/ÓRFÃOS ❌

### Cultivação (9 arquivos)
```
❌ cultivacao-data.js
❌ cultivacao-exemplos-uso.js
❌ cultivacao-init.js
❌ cultivacao-integrador-2.0.js
❌ cultivacao-manager.js
❌ cultivacao-nova-arquitetura.js
❌ cultivacao-storage.js
❌ cultivacao-testes.js
❌ cultivacao-tribulacao.js

Status: NÃO CARREGADO - REMOVER
```

### Tricksters Coin (2 arquivos)
```
❌ tricksters-coin-system.js
❌ tricksters-coin-test.js

Status: NÃO CARREGADO - REMOVER
```

### Versões Antigas (6 arquivos)
```
❌ companheiro-inventario-modal.js [Substituída]
❌ companheiro-habilidades-manager.js [Fundida]
❌ companheiro-habilidades-ui.js [Fundida]
❌ persistence-manager.js [Refatorada]
❌ teste-inventario.js [Isolado]
❌ teste-menu-completo.js [Isolado]

Status: NÃO CARREGADO - REMOVER
```

---

## 📊 RESUMO DE DEPENDÊNCIAS

| Camada | Arquivos | Status | Crítico |
|--------|----------|--------|---------|
| Fundação | 3 | ✅ OK | 100% |
| Atributos | 6 | ✅ OK | 100% |
| Aptidões | 11 | ✅ OK | 90% |
| Arts | 6 | ✅ OK | 100% |
| Raças | 5 | ✅ OK | 100% |
| Classes | 3 | ✅ OK | 66% |
| Companheiros | 11 | ✅ OK | 100% |
| Inventário | 3 | ✅ OK | 100% |
| Menu/Itens | 7 | ✅ OK | 85% |
| Sistemas Espec. | 13 | ✅ OK | 85% |
| Utilitários | 5 | ✅ OK | 40% |
| **OBSOLETOS** | **17** | ❌ CRÍTICO | 0% |
| **TOTAL** | **90** | | |

---

**Fim do Mapa de Dependências**
