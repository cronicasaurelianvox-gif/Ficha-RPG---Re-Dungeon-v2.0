/**
 * 🏆 REPUTAÇÃO V2 - CHEAT SHEET (Referência Rápida)
 * 
 * Um guia super rápido para usar o sistema
 */

// ╔══════════════════════════════════════════════════════╗
// ║  ACESSO RÁPIDO                                      ║
// ╚══════════════════════════════════════════════════════╝

window.reputacaoV2           // ← instância global

// ╔══════════════════════════════════════════════════════╗
// ║  OPERAÇÕES BÁSICAS                                  ║
// ╚══════════════════════════════════════════════════════╝

window.reputacaoV2.abrir()                           // Abre modal
window.reputacaoV2.fechar()                          // Fecha modal
window.reputacaoV2.salvar()                          // Salva dados
window.reputacaoV2.debug()                           // Debug completo

// ╔══════════════════════════════════════════════════════╗
// ║  LEITURA DE DADOS                                   ║
// ╚══════════════════════════════════════════════════════╝

// Status completo
window.reputacaoV2.getStatus()
// → { mundo: {...}, regiao: {...} }

// Valores individuais
window.reputacaoV2.dados.mundo.fama           // 0-100
window.reputacaoV2.dados.mundo.temor          // 0-100
window.reputacaoV2.dados.regiao.fama          // 0-100
window.reputacaoV2.dados.regiao.temor         // 0-100

// ╔══════════════════════════════════════════════════════╗
// ║  MODIFICAÇÃO DE DADOS                               ║
// ╚══════════════════════════════════════════════════════╝

// Aumentar valor
window.reputacaoV2.dados.mundo.fama = 75
window.reputacaoV2.dados.mundo.temor = 30
window.reputacaoV2.atualizarVisao()        // Atualizar UI

// Adicionar valor
window.reputacaoV2.dados.mundo.fama += 10
window.reputacaoV2.atualizarVisao()

// ╔══════════════════════════════════════════════════════╗
// ║  CÁLCULOS                                           ║
// ╚══════════════════════════════════════════════════════╝

// Calcular status (herói/tirano/etc)
window.reputacaoV2.calcularStatusAtual(fama, temor)
// → { nome: '✨ Herói', classe: 'heroi', descricao: '...' }

// Obter nível descritivo
window.reputacaoV2.obterNivel(valor, 'fama')   // ou 'temor'
// → { range: [...], titulo: '💫 Lendário', desc: '...' }

// Calcular efeitos ativos
window.reputacaoV2.calcularEfeitos(valor, 'fama')  // ou 'temor'
// → ['💰 +5% desconto...', '🤝 NPCs amigáveis...', ...]

// ╔══════════════════════════════════════════════════════╗
// ║  TESTES (opcional)                                  ║
// ╚══════════════════════════════════════════════════════╝

window.testesReputacaoV2.executarTodosTestes()          // Todos
window.testesReputacaoV2.teste1_Inicializacao()         // Teste 1
window.testesReputacaoV2.teste2_CalcularStatus()        // Teste 2
window.testesReputacaoV2.teste7_ModalControle()         // Teste 7

// ╔══════════════════════════════════════════════════════╗
// ║  ESTADOS (5 possibilidades)                         ║
// ╚══════════════════════════════════════════════════════╝

// ✨ HERÓI
// Fama >= 40 && Fama > Temor

// 👿 TIRANO
// Temor >= 40 && Temor > Fama

// 🌑 LENDA AMBÍGUA
// Fama >= 40 && Temor >= 40

// 👤 DESCONHECIDO
// Fama < 30 && Temor < 30

// ⚖️ NEUTRO
// Todos os outros casos

// ╔══════════════════════════════════════════════════════╗
// ║  EXEMPLOS RÁPIDOS                                   ║
// ╚══════════════════════════════════════════════════════╝

// Exemplo 1: Herói Lendário
function fazerHeroi() {
    window.reputacaoV2.dados.mundo.fama = 75
    window.reputacaoV2.dados.mundo.temor = 20
    window.reputacaoV2.atualizarVisao()
    window.reputacaoV2.salvar()
}

// Exemplo 2: Tirano Aterrorizante
function fazerTirano() {
    window.reputacaoV2.dados.mundo.temor = 80
    window.reputacaoV2.dados.mundo.fama = 30
    window.reputacaoV2.atualizarVisao()
    window.reputacaoV2.salvar()
}

// Exemplo 3: Lenda Ambígua
function fazerLenda() {
    window.reputacaoV2.dados.mundo.fama = 80
    window.reputacaoV2.dados.mundo.temor = 75
    window.reputacaoV2.atualizarVisao()
    window.reputacaoV2.salvar()
}

// Exemplo 4: Ganhar reputação
function ganharReputacao(tipo = 'fama', amount = 10) {
    const valor = window.reputacaoV2.dados.mundo[tipo]
    window.reputacaoV2.dados.mundo[tipo] = Math.min(valor + amount, 100)
    window.reputacaoV2.atualizarVisao()
    window.reputacaoV2.salvar()
}

// ╔══════════════════════════════════════════════════════╗
// ║  REFERÊNCIA DE LIMIARES                             ║
// ╚══════════════════════════════════════════════════════╝

// Efeitos de FAMA ativam em:
// 20  ← Limiar 1
// 45  ← Limiar 2
// 60  ← Limiar 3
// 75  ← Limiar 4
// 90  ← Limiar 5

// Efeitos de TEMOR ativam em:
// 20  ← Limiar 1
// 45  ← Limiar 2
// 60  ← Limiar 3
// 75  ← Limiar 4
// 90  ← Limiar 5

// ╔══════════════════════════════════════════════════════╗
// ║  NÍVEIS RÁPIDOS                                     ║
// ╚══════════════════════════════════════════════════════╝

// FAMA:       TEMOR:
// 0-10        0-10    Desconhecido/Inofensivo
// 11-20       11-20   Notado/Notável
// 21-30       21-30   Reconhecido/Respeitado
// 31-45       31-45   Famoso/Temido
// 46-60       46-60   Influente/Aterrorizante
// 61-75       61-75   Lendário/Assombração
// 76-90       76-90   Mítico/Encarnação do Mal
// 91-100      91-100  Divindade Viva/Morte Ambulante

// ╔══════════════════════════════════════════════════════╗
// ║  ESTRUTURA DE DADOS                                 ║
// ╚══════════════════════════════════════════════════════╝

// dados = {
//   mundo: {
//     fama: 0-100,
//     temor: 0-100
//   },
//   regiao: {
//     fama: 0-100,
//     temor: 0-100
//   }
// }

// ╔══════════════════════════════════════════════════════╗
// ║  RETORNO DO getStatus()                             ║
// ╚══════════════════════════════════════════════════════╝

// {
//   mundo: {
//     fama: number,
//     temor: number,
//     status: {
//       nome: string,
//       classe: string,
//       descricao: string
//     }
//   },
//   regiao: {
//     fama: number,
//     temor: number,
//     status: {
//       nome: string,
//       classe: string,
//       descricao: string
//     }
//   }
// }

// ╔══════════════════════════════════════════════════════╗
// ║  VERIFICAÇÕES COMUNS                                ║
// ╚══════════════════════════════════════════════════════╝

// Verificar se é herói
if (status.mundo.status.classe === 'heroi') {
    console.log('🎉 Você é um Herói!')
}

// Verificar se é tirano
if (status.mundo.status.classe === 'tirano') {
    console.log('⚠️ Você é um Tirano!')
}

// Verificar se é lenda ambígua
if (status.mundo.status.classe === 'ambiguo') {
    console.log('🌑 Você é uma Lenda Ambígua!')
}

// Verificar se ativou limiar
if (window.reputacaoV2.dados.mundo.fama >= 45) {
    console.log('✨ Você é Influente!')
}

// ╔══════════════════════════════════════════════════════╗
// ║  DICAS & TRUQUES                                    ║
// ╚══════════════════════════════════════════════════════╝

// Resetar para desconhecido
window.reputacaoV2.dados.mundo.fama = 0
window.reputacaoV2.dados.mundo.temor = 0
window.reputacaoV2.atualizarVisao()

// Viajar para nova região (reset local)
window.reputacaoV2.dados.regiao.fama = 0
window.reputacaoV2.dados.regiao.temor = 0
window.reputacaoV2.atualizarVisao()

// Verificar se tem efeitos
const temEfeitos = window.reputacaoV2.calcularEfeitos(
    window.reputacaoV2.dados.mundo.fama,
    'fama'
).length > 0

// ╔══════════════════════════════════════════════════════╗
// ║  DEBUGGING                                          ║
// ╚══════════════════════════════════════════════════════╝

// Ver tudo
window.reputacaoV2.debug()

// Ver dados
console.log(window.reputacaoV2.dados)

// Ver status
console.log(window.reputacaoV2.getStatus())

// Ver efeitos
console.log(window.reputacaoV2.calcularEfeitos(75, 'fama'))

// Ver se modal está aberto
console.log(window.reputacaoV2.isOpen)

// ╔══════════════════════════════════════════════════════╗
// ║  COMPATIBILIDADE COM V1                             ║
// ╚══════════════════════════════════════════════════════╝

// V1 continua funcionando
window.reputacaoModal.getStatus()

// Dados migram automaticamente
// { mundo: 30, regiao: 20 }
// ↓
// { mundo: { fama: 30, temor: 0 }, regiao: { fama: 20, temor: 0 } }

// ╔══════════════════════════════════════════════════════╗
// ║  DOCUMENTAÇÃO LINKS                                 ║
// ╚══════════════════════════════════════════════════════╝

// docs/REPUTACAO_V2_DOCUMENTACAO.md       → API completa
// docs/REPUTACAO_V2_README.md             → Resumo
// docs/REPUTACAO_V2_CHANGELOG.md          → Mudanças
// docs/REPUTACAO_V2_GUIA_VISUAL.md        → Diagramas
// js/reputacao-v2-guia-uso.js             → Exemplos
// js/reputacao-v2-testes.js               → Testes

// ╔══════════════════════════════════════════════════════╗
// ║  QUICK START - MÍNIMO NECESSÁRIO                    ║
// ╚══════════════════════════════════════════════════════╝

// 1. Abrir
window.reputacaoV2.abrir()

// 2. Modificar
window.reputacaoV2.dados.mundo.fama = 75
window.reputacaoV2.atualizarVisao()

// 3. Salvar
window.reputacaoV2.salvar()

// 4. Fechar
window.reputacaoV2.fechar()

// FIM - Desenvolvido com ❤️ para ReDungeon v2.0
