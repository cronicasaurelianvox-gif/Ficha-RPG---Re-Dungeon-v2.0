# 🧪 Guia de Teste - Sistema de Treinamento Refatorado

## Checklist de Testes

### ✅ Carregamento
- [ ] Modal carrega sem erros no console
- [ ] CSS novo (`treinamento-novo.css`) é carregado
- [ ] Nenhum conflito de classes CSS
- [ ] Animações de entrada funcionam (slideDown)

### ✅ Funcionamento Básico
- [ ] Botão "Treinar Atributo" abre o modal
- [ ] Modal fecha ao clicar X
- [ ] Modal fecha ao clicar overlay
- [ ] Modal reseta ao abrir (input-horas = 1, input-bonus = 0)

### ✅ Card 1 - Seleção de Atributo
- [ ] Select dropdown está visível
- [ ] Opções carregam corretamente (6 atributos)
- [ ] Seleção dispara `atualizarInfoAtributo()`
- [ ] Hover mostra efeito visual (borda mais clara)
- [ ] Focus mostra glow dourado

### ✅ Card 2 - Status do Atributo
- [ ] Card aparece após selecionar atributo
- [ ] Nível mostra valor correto (sincronizado com aba de atributos)
- [ ] Dificuldade/Obstáculo calcula corretamente (5 + (nível/25 * 2))
- [ ] XP Atual mostra valor armazenado
- [ ] XP Necessária mostra conforme tabela
- [ ] Barra de progresso anima corretamente
  - [ ] Largura atualiza: (XP atual / XP necessária) * 100%
  - [ ] Shimmer animation roda continuamente
  - [ ] Glow aparece na borda direita

### ✅ Card 3 - Tempo de Treinamento
- [ ] Botão − reduz horas (mínimo 1)
- [ ] Botão + aumenta horas (máximo 12)
- [ ] Input direto aceita valores 1-12
- [ ] Botões mostram efeito hover (scale 110%)
- [ ] Input mostra foco com brilho azul

### ✅ Card 4 - Bônus do Mestre
- [ ] Input aceita valores 0-20
- [ ] Hover mostra brilho roxo
- [ ] Focus mostra caixa de sombra
- [ ] Range "(0–20)" está visível

### ✅ Card 5 - Botão Iniciar
- [ ] Botão está visível e centralizado
- [ ] Gradiente verde → dourado aparece
- [ ] Hover mostra translateY(-3px)
- [ ] Ícone ▶ se move ao lado em hover
- [ ] Texto está em UPPERCASE
- [ ] Clique dispara `executarTreino()`

### ✅ Execução de Treino
- [ ] Validação de atributo selecionado
- [ ] Rolagem 1d6 funciona
- [ ] Bônus de aptidão calcula
- [ ] Bônus de sorte calcula (sorte / 25)
- [ ] Resultado é comparado com obstáculo
- [ ] XP é rolado conforme dado definido
- [ ] Card de resultado aparece
- [ ] Resultado mostra:
  - [ ] Rolagem 1d6 + Bônus
  - [ ] Obstáculo
  - [ ] Dado Definido
  - [ ] Rolagem Final
  - [ ] Bônus/Penalidade
  - [ ] XP Ganho (destacado em verde)

### ✅ Resultado Visual
- [ ] Items coloridos apropriadamente
- [ ] XP Ganho tem box-shadow
- [ ] Botão "Concluir" fecha resultado
- [ ] Resultado oculta ao fechar modal

### ✅ Responsividade

#### Desktop (> 768px)
- [ ] Modal tem 620px max-width
- [ ] Cards têm espaçamento adequado
- [ ] Grid de atributos tem 3 colunas
- [ ] Todos elementos são claros

#### Tablet (768px)
- [ ] Modal se adapta a 95% width
- [ ] Grid de atributos muda para 2 colunas
- [ ] Status grid fica em 1 coluna
- [ ] Padding dos cards reduz

#### Mobile (< 480px)
- [ ] Modal ocupa 98% width
- [ ] Grid de atributos fica 1 coluna
- [ ] Cards têm padding mínimo
- [ ] Resultado em flex column
- [ ] Botões possuem altura adequada

### ✅ Efeitos Visuais

- [ ] Animação slideDown ao abrir modal (0.4s)
- [ ] Shimmer na barra de XP (2s loop)
- [ ] Hover em cards mostra glow (0.3s transition)
- [ ] Botões circular do tempo têm scale effect
- [ ] Inputs mostram focus glow (0.3s)
- [ ] Close button rotate em hover (90deg)

### ✅ Compatibilidade JavaScript

Verificar que NENHUMA função foi quebrada:
- [ ] `abrirModalTreino(atributo)` funciona
- [ ] `fecharModal()` funciona
- [ ] `atualizarInfoAtributo(atributo)` funciona
- [ ] `ajustarHoras(delta)` funciona
- [ ] `executarTreino()` funciona
- [ ] `renderizarAtributos()` funciona
- [ ] Listeners de eventos funcionam
- [ ] Eventos de click nos botões funcionam

### ✅ Console
- [ ] Nenhum erro de JavaScript
- [ ] Nenhum erro de CSS
- [ ] Nenhum erro de 404 (recursos)
- [ ] Nenhuma warning de deprecação

---

## 🔍 Testes de Cenário

### Cenário 1: Primeiro Treinamento
1. [ ] Abrir modal (clicar botão Treinar)
2. [ ] Selecionar "Força"
3. [ ] Verificar dados carregam (nível, xp)
4. [ ] Deixar 1 hora (padrão)
5. [ ] Deixar 0 bônus (padrão)
6. [ ] Clicar "Iniciar Treinamento"
7. [ ] Verificar resultado
8. [ ] Clicar "Concluir"
9. [ ] Verificar que XP foi adicionado

### Cenário 2: Múltiplas Horas
1. [ ] Abrir modal
2. [ ] Selecionar qualquer atributo
3. [ ] Aumentar horas para 5
4. [ ] Clicar iniciar
5. [ ] Verificar que 5 dados são rolados
6. [ ] XP total deve ser 5x o resultado de 1 dado

### Cenário 3: Bônus do Mestre
1. [ ] Abrir modal
2. [ ] Selecionar atributo
3. [ ] Definir bônus extra = 10
4. [ ] Iniciar treino
5. [ ] Verificar que rolagem = d6 + aptidão + 10 + sorte
6. [ ] Resultado deve ser afetado pelo bônus

### Cenário 4: Falha vs Sucesso
1. [ ] Treinar atributo com nível baixo (< obstáculo)
   - [ ] Resultado deve ser "Falha" ou reduzido
   - [ ] Vermelha no resultado
2. [ ] Treinar atributo com alta sorte
   - [ ] Resultado deve ter bônus
   - [ ] Verde no resultado

### Cenário 5: Modal em Mobile
1. [ ] Abrir em tela menor (480px)
2. [ ] Modal deve ocupar quase toda a tela
3. [ ] Nenhuma informação é cortada
4. [ ] Todos botões são clickáveis
5. [ ] Status grid em coluna única

---

## 📊 Performance

- [ ] Modal abre em < 100ms
- [ ] Animações rodam em 60fps
- [ ] Nenhum lag ao interagir
- [ ] Sem memory leaks visíveis
- [ ] Barra de XP anima suavemente

---

## 🎨 Verificação Visual

### Cores
- [ ] Dourado (#ffd700) é consistente
- [ ] Azul (#2196F3) para botões de tempo
- [ ] Roxo (#9C27B0) para bônus
- [ ] Verde (#4CAF50) para status
- [ ] Fundos dark escuros (#0f1319)

### Tipografia
- [ ] Títulos em UPPERCASE e weight 900
- [ ] Labels em weight 600-700
- [ ] Valores em tamanho maior
- [ ] Espaçamento de letras consistente

### Espaçamento
- [ ] Gap entre cards: 20px
- [ ] Padding dos cards: 24px
- [ ] Margin-bottom cards: 20px
- [ ] Padding do modal: 40px

---

## ❌ Problemas Conhecidos (Se houver)

Se encontrar algum problema, notar aqui:

1. **Problema:** _________________
   **Local:** _________________
   **Severidade:** [ ] Crítica [ ] Alta [ ] Média [ ] Baixa

2. **Problema:** _________________
   **Local:** _________________
   **Severidade:** [ ] Crítica [ ] Alta [ ] Média [ ] Baixa

---

## ✅ Teste Final

- [ ] **PASSAR:** Todos os testes acima foram completados com sucesso
- [ ] **DADOS INTACTOS:** Nenhum dado do jogador foi afetado
- [ ] **COMPATIBILIDADE:** Sistema funciona em navegadores testados
- [ ] **PRONTO:** Sistema está pronto para produção

**Data do Teste:** _________________
**Testado por:** _________________
**Navegador:** _________________
**Resolução:** _________________

---

## 📝 Notas Adicionais

```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

---

**Última atualização:** 6 de Abril de 2026
**Versão:** 1.0
**Status:** ✅ Pronto para Testes
