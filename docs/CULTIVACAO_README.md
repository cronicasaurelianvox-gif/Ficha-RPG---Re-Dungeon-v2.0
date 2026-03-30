# 🌌 Sistema de Cultivação - README

## ✨ Visão Geral

O **Sistema de Cultivação** é um módulo profissional, modular e escalável que funciona como um **Códex Espiritual Vivo** para o ReDungeon. É um sistema dark fantasy elegante que suporta três mundos diferentes com mecânicas únicas.

## 🎯 Características Principais

✅ **Modular e Escalável** - Fácil adicionar novos mundos  
✅ **Profissional** - Design dark fantasy elegante e responsivo  
✅ **Três Mundos** - The Elder Gods, Boreal Line, Legends of Murim  
✅ **Elementos Universais** - Dantian, Meridianos, Técnica, Mar Espiritual  
✅ **Sistema de Risco** - Detecção automática de instabilidade  
✅ **Persistência** - localStorage automático  
✅ **Animações** - Transições suaves e brilhos dinâmicos  
✅ **Responsivo** - Mobile, Tablet e Desktop  

---

## 🚀 Como Usar

### 1. Abrir o Sistema

Clique no botão **🌌** (bola mágica) que aparece ao lado do botão de reputação na seção de controle de ficha.

Ou use o console:
```javascript
window.cultivacao.ui.abrir()
```

### 2. Mudar Entre Mundos

Clique nas abas: **⭐ The Elder Gods**, **❄️ Boreal Line**, **🌿 Legends of Murim**

Ou via console:
```javascript
window.cultivacao.ui.mudar_mundo('elder-gods')
window.cultivacao.ui.mudar_mundo('boreal-line')
window.cultivacao.ui.mudar_mundo('murim')
```

### 3. Interagir com Elementos

Cada mundo tem botões específicos para ganhar experiência, romper ranks, adicionar pétalas, etc.

---

## 🌍 Os Três Mundos

### 🟣 The Elder Gods
**Sistema de Ranks Hierárquico**

- 10 ranks diferentes (Corpo Temperado → Deidade)
- Cada rank tem 9 níveis
- Ganhe XP para subir de nível
- Ao atingir nível 9, rompa para o próximo rank
- Risks de tribulação em ranks altos

**Benefícios por Rank:**
- +3 atributos cada 3 níveis
- Limite de atributo aumenta
- Acesso a técnicas mais poderosas

### 🔵 Boreal Line
**Sistema de Cristais Evolutivos**

- 4 cristais principais (Dantian, Coração, Mental, Alma)
- Cada cristal tem: Integridade, Estabilidade, Pureza, Sincronização
- Estados visuais: Estável, Instável, Corrompido, Perfeito
- Avanço através de ranks de cristalização
- Efeito visual cristalino com brilho frio

### 🟢 Legends of Murim
**Sistema de Lótus e Fragmentos**

- Colete fragmentos de Qi
- 100 fragmentos = 1 pétala de Lótus
- Máximo 9 pétalas visíveis
- Estágios: Inicial → Refinada → Superior → Perfeita
- Núcleo Espiritual com cor dinâmica
- Canais do Dao para talento

---

## 🔧 Elementos Universais

Presentes em **TODOS** os mundos:

### 🔴 Dantian
Armazém de energia com 3 compartimentos:
- **Inferior:** 1000 cap
- **Médio:** 2000 cap
- **Superior:** 5000 cap

### 🌀 Meridianos
Sistema de canais espirituais:
- 314 meridianos no total
- Mostre quantos estão limpos
- Barra de progresso animada

### 📜 Técnica de Cultivo
Campo expansível para sua técnica pessoal:
- Nome
- Tipo de energia
- Descrição
- Afinidade
- Estabilidade

### 🌊 Mar Espiritual
Estado geral da energia:
- Estado (Calmo, Turbulento, Caótico)
- Tamanho
- Pureza
- Estabilidade

---

## 🧪 Testando o Sistema

### Via Console do Navegador (F12)

**Demonstração Automática:**
```javascript
window.cultivacao.teste.demonstracao_completa()
```

**Testes Específicos:**
```javascript
// Testes individuais
window.cultivacao.teste.testar_elder_gods()
window.cultivacao.teste.testar_boreal_line()
window.cultivacao.teste.testar_murim()
window.cultivacao.teste.testar_universal()
window.cultivacao.teste.testar_risco()
window.cultivacao.teste.testar_storage()
```

**Manipular Dados Diretamente:**
```javascript
// Ganhar XP no Elder Gods
window.cultivacao.dados.ganhar_xp_elder_gods(50)

// Adicionar fragmentos em Murim
window.cultivacao.dados.ganhar_fragmentos_murim(100)

// Atualizar meridianos
window.cultivacao.dados.atualizar_meridianos(200)

// Ver risco geral
window.cultivacao.dados.calcular_risco_geral()
```

---

## 📁 Estrutura de Arquivos

```
📦 Projeto
├── 📄 index.html                     (Link CSS + Botão + Scripts)
├── 📂 css/
│   └── cultivacao-sistema.css        (1000+ linhas, modular)
├── 📂 js/
│   ├── cultivacao-sistema.js         (800+ linhas, 2 classes)
│   └── cultivacao-teste.js           (Script de teste)
└── 📂 docs/
    └── CULTIVACAO_DOCUMENTACAO.md   (Docs técnicas completas)
```

---

## 🎨 Design Visual

### Paleta de Cores
- **Elder Gods:** Roxo vibrante (#c084fc)
- **Boreal Line:** Ciano gelado (#38bdf8)
- **Murim:** Verde limão (#84cc16)
- **Fundo:** Preto muito escuro (#0f1419)

### Animações
- Barras com shimmer (brilho deslizante)
- Transições suaves (0.3s)
- Pulsação de cristais
- Efeitos de ondulação
- Glow dinâmico

### Responsividade
- **Desktop:** Layout completo
- **Tablet:** Grids ajustados
- **Mobile:** Single column

---

## 💾 Dados Persistidos

Todos os dados são salvos automaticamente no localStorage:
- Mundo ativo
- Progresso de cada mundo
- Técnica de cultivo
- Estados universais
- Risco calculado

**Para ver os dados:**
```javascript
JSON.parse(localStorage.getItem('cultivacao_dados'))
```

**Para limpar tudo:**
```javascript
localStorage.removeItem('cultivacao_dados')
```

---

## 📚 Documentação Completa

Veja o arquivo `docs/CULTIVACAO_DOCUMENTACAO.md` para:
- Arquitetura detalhada
- API completa de métodos
- Como estender o sistema
- Resolução de problemas
- Changelog e futuro

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Popup não abre | Verificar se o botão tem `id="menu-btn-cultivacao"` |
| Dados não salvam | Habilitar localStorage no navegador |
| Estilos errados | Limpar cache (Ctrl+Shift+R) |
| Console mostra erro | Verificar ordem de carregamento dos scripts |

---

## 🔮 Funcionalidades Futuras

- [ ] Integração com sistema de combate
- [ ] Missões de cultivação
- [ ] Efeitos de partículas WebGL
- [ ] Achievements
- [ ] PvP com desafios
- [ ] Backend para multiplayer

---

## 📝 Changelog

### v1.0.0 (27/02/2026)
**Lançamento Inicial**
- ✅ Estrutura completa
- ✅ 3 mundos implementados
- ✅ Sistema universal
- ✅ UI responsiva
- ✅ Documentação completa

---

## 👨‍💻 Desenvolvimento

O sistema é feito com:
- **HTML5** - Estrutura semântica
- **CSS3** - Animações e layout modular
- **JavaScript ES6+** - Classes e lógica moderna
- **localStorage API** - Persistência

Sem dependências externas! ✨

---

## 📞 Suporte

Para dúvidas ou sugestões, consulte:
- Documentação: `docs/CULTIVACAO_DOCUMENTACAO.md`
- Console: `window.cultivacao.teste.demonstracao_completa()`
- Código: Bem comentado e estruturado

---

**Versão:** 1.0.0  
**Data:** 27 de fevereiro de 2026  
**Status:** ✅ Produção  
**Qualidade:** ⭐⭐⭐⭐⭐ Profissional

Bem-vindo ao Sistema de Cultivação! 🌌✨
