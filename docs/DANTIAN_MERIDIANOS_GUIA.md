/* ═══════════════════════════════════════════════════════════════════════════════════════════════
   DANTIAN & MERIDIANOS - GUIA DE USO RÁPIDO
   
   Sistema Avançado de Cultivação integrado ao ReDungeon
   Data: 28 de fevereiro de 2026
   ═══════════════════════════════════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════════════════════════════════
   1. COMO USAR PELO CONSOLE DO NAVEGADOR
   ═══════════════════════════════════════════════════════════════════════════════════════════════ */

// Acessar o sistema de dados
window.dantian_sistema

// Acessar a interface de usuário
window.dantian_ui

// ─────────────────────────────────────────────────────────────────────────────────────────────
// OPERAÇÕES BÁSICAS DE DANTIAN
// ─────────────────────────────────────────────────────────────────────────────────────────────

// Rolar Dantian inicial (2d25 + Vitalidade÷2)
window.dantian_sistema.rolar_dantian_inicial()
// Resultado:
// {
//   rol1: 15,           // Primeiro d25
//   rol2: 18,           // Segundo d25
//   resultado_dados: 33,
//   bonus_vitalidade: 5, // Se Vitalidade = 10
//   total: 38,
//   vitalidade_usada: 10
// }

// Expandir Dantian ao subir um nível (+1d12)
window.dantian_sistema.expandir_dantian_nivel(1)  // Nível 1
window.dantian_sistema.expandir_dantian_nivel(2)  // Nível 2
// Resultado: 7 (por exemplo)

// Expandir Dantian ao alcançar novo Reino (+2d16)
window.dantian_sistema.expandir_dantian_reino(1)  // Reino 1
window.dantian_sistema.expandir_dantian_reino(2)  // Reino 2
// Resultado: {rol1: 8, rol2: 14, total: 22}

// ─────────────────────────────────────────────────────────────────────────────────────────────
// OPERAÇÕES BÁSICAS DE MERIDIANOS
// ─────────────────────────────────────────────────────────────────────────────────────────────

// Definir quantos meridianos estão desbloqueados (0-12)
window.dantian_sistema.definir_meridianos_desbloqueados(5)

// Simular crítico natural para desbloquear 1-3 meridianos extras
window.dantian_sistema.simular_critico_natural()
// Resultado:
// {
//   sucesso: true,
//   meridianos_desbloqueados: 2,
//   total_meridianos: 7
// }

// ─────────────────────────────────────────────────────────────────────────────────────────────
// CONSULTAR DADOS
// ─────────────────────────────────────────────────────────────────────────────────────────────

// Ver todos os dados armazenados
window.dantian_sistema.dados

// Obter resumo completo formatado
window.dantian_sistema.obter_resumo()
// Resultado:
// {
//   dantian: {
//     base: 38,
//     total_atual: 65,
//     expansoes_nivel: 2,
//     expansoes_reino: 1,
//     ultima_rolagem: "28/02/2026 14:30:45"
//   },
//   meridianos: {
//     desbloqueados: 7,
//     critico_disponivel: false,
//     total_criticos_usados: 1
//   },
//   eficiencia: {
//     bonus_meridiano: 35,
//     bonus_estabilidade: 13,
//     eficiencia_cultivo: 135
//   },
//   tribulacao: {
//     resistencia_total: 125,
//     risco: "alto"
//   }
// }

// Ver histórico de expansões por nível
window.dantian_sistema.dados.dantian.expansoes_nivel
// [{nivel: 1, resultado: 7, data: "..."}, {nivel: 2, resultado: 4, data: "..."}]

// Ver histórico de expansões por reino
window.dantian_sistema.dados.dantian.expansoes_reino
// [{reino: 1, resultado: 22, rol1: 8, rol2: 14, data: "..."}]

// Ver histórico de desbloqueamentos de meridianos
window.dantian_sistema.dados.meridianos.historico_desbloqueamentos
// [{tipo: 'manual', anterior: 5, novo: 7, data: "..."}]

// ─────────────────────────────────────────────────────────────────────────────────────────────
// MÉTODOS UTILITÁRIOS
// ─────────────────────────────────────────────────────────────────────────────────────────────

// Obter valor de Vitalidade dos atributos
window.dantian_sistema.obter_vitalidade_atributo()
// Resultado: 10 (por exemplo)

// Rolar um dado (ex: 1d20)
window.dantian_sistema.rolar_dado(20)
// Resultado: 14

// Rolar múltiplos dados (ex: 3d6)
window.dantian_sistema.rolar_dados(3, 6)
// Resultado: 12

// Salvar dados manualmente
window.dantian_sistema.salvar()
// Resultado: true

// Limpar TODOS os dados (⚠️ CUIDADO!)
window.dantian_sistema.limpar_tudo()

// ─────────────────────────────────────────────────────────────────────────────────────────────
// ABRIR POPUPS PELA UI
// ─────────────────────────────────────────────────────────────────────────────────────────────

// Abrir popup de Dantian
window.dantian_ui.abrir_popup_dantian()

// Abrir popup de Meridianos
window.dantian_ui.abrir_popup_meridianos()

// Fechar popup aberto
window.dantian_ui.fechar_popup()

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// 2. ESTRUTURA DE DADOS ARMAZENADA NO LOCALSTORAGE
// ═══════════════════════════════════════════════════════════════════════════════════════════════

{
  "dantian": {
    "base": 38,                    // Valor inicial (2d25 + Vit/2)
    "expansoes_nivel": [           // Histórico de expansões por nível
      {
        "nivel": 1,
        "resultado": 7,
        "data": "28/02/2026 14:30:45"
      }
    ],
    "expansoes_reino": [           // Histórico de expansões por reino
      {
        "reino": 1,
        "resultado": 22,
        "rol1": 8,
        "rol2": 14,
        "data": "28/02/2026 15:00:00"
      }
    ],
    "total_atual": 67,             // Base + todas as expansões
    "maxima_capacidade": 67,       // Para limites de fase
    "ultima_rolagem": "28/02/2026 14:30:45",
    "historico_criticos": []       // Registro de críticos naturais
  },
  "meridianos": {
    "desbloqueados": 7,            // 0-12 principais
    "critico_natural_usado": false,
    "desbloqueamentos_critico": 2,
    "historico_desbloqueamentos": [
      {
        "data": "28/02/2026 14:45:00",
        "tipo": "manual",
        "anterior": 5,
        "novo": 7,
        "diferenca": 2
      }
    ]
  },
  "eficiencia": {
    "bonus_meridiano": 35,         // Bônus em % (5% por meridiano)
    "bonus_estabilidade": 13,      // Bônus em % (cada 5 dantian)
    "eficiencia_cultivo": 135      // 100% + bonus_meridiano
  },
  "tribulacao": {
    "resistencia_base": 105,       // 15 por meridiano
    "modificador_dantian": 33,     // Dantian÷2
    "risco_tribulacao": "alto"     // "baixo", "moderado", "alto", "critico"
  }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// 3. FÓRMULAS E CÁLCULOS
// ═══════════════════════════════════════════════════════════════════════════════════════════════

// DANTIAN INICIAL
// Dantian = 2d25 + (Vitalidade ÷ 2)
// Exemplo: Se rolar 15 e 18, e ter 10 de Vitalidade:
//          = 15 + 18 + 5 = 38

// EXPANSÃO POR NÍVEL
// Expansão = +1d12 (por nível)
// Cada vez que sobe de nível, rola 1d12 e adiciona ao total

// EXPANSÃO POR REINO
// Expansão = +2d16 (por reino)
// Cada vez que alcança um novo reino, rola 2d16 e adiciona ao total

// BÔNUS DE MERIDIANO
// Bonus Eficiência = Meridianos × 5%
// Exemplo: 7 meridianos = +35% de eficiência

// BÔNUS DE ESTABILIDADE
// Bonus Estabilidade = floor(Dantian ÷ 5)
// Exemplo: Dantian de 67 = +13% de estabilidade

// RESISTÊNCIA À TRIBULAÇÃO
// Resistência = (Meridianos × 15) + (Dantian ÷ 2)
// Exemplo: 7 meridianos + 67 dantian = 105 + 33 = 138 de resistência

// RISCO DE TRIBULAÇÃO
// Baseado em Eficiência Total:
// - Eficiência < 80%:    BAIXO (seguro)
// - Eficiência 80-120%:  MODERADO (normal)
// - Eficiência 120-150%: ALTO (perigoso)
// - Eficiência ≥ 150%:   CRÍTICO (muito perigoso)

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// 4. INTEGRAÇÃO COM OUTROS SISTEMAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════

// O sistema é inteiramente integrado, mas pode ser acessado manualmente:

// Integração com Atributos
// A Vitalidade é automaticamente puxada de window.personagem_state.atributos.primarios.vitalidade
// Se não conseguir acessar, usa 0

// Integração com Cultivação (Em Desenvolvimento)
// Futura integração com o módulo cultivacao-sistema.js para:
// - Refletir mudanças em Jan/Fev/Mar de Espiritual
// - Afetar velocidade de cultivo
// - Impactar chances de sucesso em tribulações

// Integração com Tribulação (Em Desenvolvimento)
// Futura integração com sistema de tribulações para:
// - Usar resistência em cálculos de dano
// - Determinar dificuldade de tribulação
// - Afetar chances de sucesso/falha crítica

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// 5. EXEMPLOS PRÁTICOS DE FLUXO COMPLETO
// ═══════════════════════════════════════════════════════════════════════════════════════════════

// EXEMPLO 1: Criar um novo personagem com Dantian e Meridianos
console.log("=== Criando novo personagem ===");
window.dantian_sistema.rolar_dantian_inicial();
window.dantian_sistema.definir_meridianos_desbloqueados(3);
console.log(window.dantian_sistema.obter_resumo());

// EXEMPLO 2: Subir de nível (expandir Dantian)
console.log("=== Subindo para Nível 2 ===");
window.dantian_sistema.expandir_dantian_nivel(2);
console.log(`Novo Dantian: ${window.dantian_sistema.dados.dantian.total_atual}`);

// EXEMPLO 3: Alcançar novo Reino (expansão grande)
console.log("=== Alcançando Reino 1 ===");
const expansao_reino = window.dantian_sistema.expandir_dantian_reino(1);
console.log(`Ganhou +${expansao_reino.total} de Dantian (${expansao_reino.rol1}+${expansao_reino.rol2})`);

// EXEMPLO 4: Simular crítico natural
console.log("=== Conseguiu Crítico Natural! ===");
const critico = window.dantian_sistema.simular_critico_natural();
console.log(`${critico.meridianos_desbloqueados} meridianos desbloqueados!`);
console.log(`Total: ${critico.total_meridianos}/12`);

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// 6. NOTES IMPORTANTES
// ═══════════════════════════════════════════════════════════════════════════════════════════════

// ✓ Todos os dados são salvos automaticamente no localStorage
// ✓ Os popups têm UI completa e responsiva
// ✓ O sistema valida limites (meridianos máx 12, critico pode ser usado apenas 1x)
// ✓ Histórico completo é mantido com datas e valores
// ✓ Modificadores são calculados em tempo real
// ✓ Integração com atributos é automática quando disponível
// ✓ Suporta múltiplos navegadores (Chrome, Firefox, Safari, Edge)

// CUIDADO:
// ⚠️ window.dantian_sistema.limpar_tudo() apaga TODOS os dados permanentemente
// ⚠️ Não há desfazer - cuidado ao chamar operações diretas
// ⚠️ Crítico natural só pode ser usado UMA VEZ por personagem

// ═══════════════════════════════════════════════════════════════════════════════════════════════
