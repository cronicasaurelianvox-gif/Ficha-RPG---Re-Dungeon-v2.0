# 📝 CHANGELOG - REPUTAÇÃO V2 v2.1.0

**Data**: 6 de abril de 2026

---

## 🆕 ALTERAÇÕES PRINCIPAIS

### Sistema de Títulos Expandido

#### ⭐ FAMA (9 níveis com limiares granulares)
```
ANTES (8 níveis):
0-10 → Desconhecido
11-20 → Notado
...
91-100 → Divindade Viva

AGORA (9 níveis):
0-5 → Desconhecido
6-10 → Notado
11-20 → Reconhecido
21-30 → Respeitado
31-45 → Famoso
46-60 → Influente
61-75 → Lendário
76-90 → Mítico
91-100 → Ícone Divino ✨ NOVO
```

#### ☠️ TEMOR (9 níveis com nomenclatura temática)
```
ANTES (8 níveis):
0-10 → Inofensivo
11-20 → Notável
...
91-100 → Morte Ambulante

AGORA (9 níveis):
0-5 → Desconhecido
6-10 → Suspeito ✨ NOVO
11-20 → Perigoso ✨ NOVO
21-30 → Temido ✨ NOVO
31-45 → Ameaça ✨ NOVO
46-60 → Terror ✨ NOVO
61-75 → Flagelo ✨ NOVO
76-90 → Cataclismo ✨ NOVO
91-100 → Entidade do Caos ✨ NOVO
```

### Estados Híbridos Expandidos

#### ANTES (1 estado híbrido)
- 🌑 Lenda Ambígua (Fama ≥ 40 && Temor ≥ 40)

#### AGORA (3 estados híbridos)
- 🌑 Lenda Ambígua (Fama ≥ 50 && Temor ≥ 50) ← Limiar aumentado
- 🌓 Paradoxo Vivo (Fama ≥ 70 && Temor ≥ 70) ✨ NOVO
- ⚡ Entidade Lendária (Fama ≥ 90 && Temor ≥ 90) ✨ NOVO

### Estados Primários com Divisão

#### ANTES (Simples)
- ⭐ Herói (Fama ≥ 40 && Fama > Temor)
- 👿 Tirano (Temor ≥ 40 && Temor > Fama)

#### AGORA (Com Supremos)
- ⭐ Herói (Fama ≥ 30 && Fama > Temor, Fama < 50)
- ✨ Herói Supremo (Fama ≥ 50 && Fama > Temor) ✨ NOVO
- 👿 Tirano (Temor ≥ 30 && Temor > Fama, Temor < 50)
- 💀 Tirano Supremo (Temor ≥ 50 && Temor > Fama) ✨ NOVO

### Efeitos Passivos Refinados

#### Limiares Atualizados
```
ANTES:
- Fama: 20, 45, 60, 75, 90
- Temor: 20, 45, 60, 75, 90

AGORA:
- Fama: 6, 11, 21, 31, 46, 61, 76, 91
- Temor: 6, 11, 21, 31, 46, 61, 76, 91
```

#### Novos Efeitos Adicionados
```
FAMA 6+:   NPCs saudáveis, +2% reconhecimento (NOVO)
FAMA 11+:  Melhor preço em negociações (NOVO)
FAMA 21+:  Redesenhado com mais detalhes
TEMOR 6+:  Desconfiança NPCs (NOVO)
TEMOR 11+: Alguns locais recusam entrada (NOVO)
TEMOR 21+: Redesenhado com pavor
```

### Visuais e Auras

#### Novos Estados CSS
```
.rep-status-heroi-supremo-v2        ✨ NOVO (aura dourada intensa)
.rep-status-tirano-supremo-v2       ✨ NOVO (aura vermelha intensa)
.rep-status-paradoxo-v2             ✨ NOVO (aura roxo intenso)
.rep-status-entidade-lendaria-v2    ✨ NOVO (aura multicolor com animação)
```

#### Animações Novas
```
@keyframes rep-glow-entidade-v2     ✨ NOVO (pulso caótico multicolor)
```

### Documentação Atualizada

#### Novos Arquivos
- `REPUTACAO_V2_TITULOS_NOVO.md` ✨ NOVO (9 níveis + 3 híbridos)

#### Arquivos Atualizados
- `REPUTACAO_V2_DOCUMENTACAO.md` (níveis atualizados)
- `REPUTACAO_V2_CHEATSHEET.md` (referência rápida atualizada)

---

## 📊 COMPARATIVO RESUMIDO

| Aspecto | V2.0 | V2.1 |
|---------|------|------|
| Níveis de Fama | 8 | 9 |
| Níveis de Temor | 8 | 9 |
| Limiares granulares | 5 | 8 |
| Estados Híbridos | 1 | 3 |
| Estados Primários | 4 | 6 |
| Efeitos únicos | ~40 | ~80+ |
| CSS Classes | 4 | 7 |
| Animações | 1 | 2 |

---

## 🔄 COMPATIBILIDADE

✅ **100% Compatível**
- Dados V2.0 funcionam em V2.1
- Dados V1 continuam sendo convertidos
- Sistema V1 ainda funciona
- Sem breaking changes

---

## 🎮 EXEMPLOS DE NOVOS TÍTULOS

### Progressão Herói
```
0-5:   👤 Desconhecido
6-10:  👁️ Notado
11-20: ⭐ Reconhecido
21-30: ✨ Respeitado
31-45: 🌟 Famoso
46-60: 💫 Influente
61-75: 🌠 Lendário
76-90: ✨ Mítico
91-100:👑 Ícone Divino ← NOVO!
```

### Progressão Tirano
```
0-5:   😊 Desconhecido
6-10:  😐 Suspeito ← NOVO!
11-20: ⚠️ Perigoso ← NOVO!
21-30: 😰 Temido ← NOVO!
31-45: 😱 Ameaça ← NOVO!
46-60: 💀 Terror ← NOVO!
61-75: 👿 Flagelo ← NOVO!
76-90: 🌑 Cataclismo ← NOVO!
91-100:⚡ Entidade do Caos ← NOVO!
```

### Novos Estados Híbridos
```
Fama 50+ e Temor 50+  → 🌑 Lenda Ambígua
Fama 70+ e Temor 70+  → 🌓 Paradoxo Vivo ← NOVO!
Fama 90+ e Temor 90+  → ⚡ Entidade Lendária ← NOVO!
```

---

## 📈 BENEFÍCIOS DA ATUALIZAÇÃO

✅ **Mais Granularidade**
- Limiares menores (0-5 em vez de 0-10)
- Progressão mais suave
- Melhor feedback ao jogador

✅ **Nomenclatura Temática**
- Nomes mais narrativos
- Emojis mais expressivos
- Melhor imersão

✅ **Mais Estados**
- 3 estados híbridos em vez de 1
- Oportunidades mais ricas
- Experiência mais variada

✅ **Efeitos Expandidos**
- 80+ efeitos em vez de 40+
- Mais recompensas em cada limiar
- Progressão mais satisfatória

---

## 🔧 MUDANÇAS TÉCNICAS

### JavaScript
```javascript
// Estrutura atualizada
niveisDescritivos.fama: 9 níveis (0-5 a 91-100)
niveisDescritivos.temor: 9 níveis (0-5 a 91-100)

// Novos limiares
efeitosPassivos.fama: [6, 11, 21, 31, 46, 61, 76, 91]
efeitosPassivos.temor: [6, 11, 21, 31, 46, 61, 76, 91]

// Novos estados
calcularStatusAtual(): suporta Paradoxo, Entidade, Herói/Tirano Supremos
```

### CSS
```css
/* Novas classes */
.rep-status-heroi-supremo-v2
.rep-status-tirano-supremo-v2
.rep-status-paradoxo-v2
.rep-status-entidade-lendaria-v2

/* Novas animações */
@keyframes rep-glow-entidade-v2
```

---

## ✅ TESTES INCLUSOS

Todos os 10 testes continuam passando com novos valores:
- ✅ teste1_Inicializacao
- ✅ teste2_CalcularStatus (agora com 7 estados)
- ✅ teste3_NiveisDescritivos (9 níveis)
- ✅ teste4_EfeitosPassivos (8 limiares)
- ✅ teste5_ModificarAtualizar
- ✅ teste6_CompatibilidadeV1
- ✅ teste7_ModalControle
- ✅ teste8_ConversaoDados
- ✅ teste9_CenariosNarrativos (mais riqueza)
- ✅ teste10_Performance

---

## 🚀 PRÓXIMAS SUGESTÕES

1. **Integração com Mecânicas**
   - Aplicar novos efeitos (80+) em sistema de jogo

2. **Visual do Personagem**
   - Mostrar ícone de estado na ficha
   - Aura dinâmica baseada em status

3. **Ganho/Perda**
   - Sistema de eventos que aumentam/diminuem
   - Progressão através de ações

4. **Persistência Expandida**
   - Histórico de mudanças
   - Conquistas desbloqueadas por limiar

---

## 📞 SUPORTE

Para testar os novos títulos:

```javascript
// Ver todos os níveis
window.testesReputacaoV2.teste3_NiveisDescritivos()

// Ver novos efeitos
window.testesReputacaoV2.teste4_EfeitosPassivos()

// Testar cenários com novos estados
window.testesReputacaoV2.teste9_CenariosNarrativos()
```

---

**Status**: ✅ PRONTO PARA PRODUÇÃO  
**Versão**: 2.1.0  
**Data**: 6 de abril de 2026
