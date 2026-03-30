/**
 * DEBUG - Teste os 3 sistemas
 * Abra o console (F12) e execute os comandos abaixo
 */

console.log('='.repeat(60));
console.log('🧪 TESTE DE SALVAMENTO E IMPORTAÇÃO - 6 de março de 2026');
console.log('='.repeat(60));

// ═══════════════════════════════════════════════════════════════════
// 1️⃣ TESTE: SORTE - Fortuna Atual
// ═══════════════════════════════════════════════════════════════════
console.log('\n🎲 [TESTE 1] SORTE - Fortuna Atual\n');

console.log('1. Verificar localStorage de Fortuna:');
const fortunaAtual = localStorage.getItem('redungeon_fortuna_atual');
console.log(`   localStorage['redungeon_fortuna_atual'] = ${fortunaAtual || 'VAZIO'}`);

console.log('\n2. Testar coleta de Sorte:');
if (window.sistemaPrincipal) {
    const sorteColetado = window.sistemaPrincipal.coletarSorte();
    console.log('   Coleta de Sorte:', sorteColetado);
} else {
    console.warn('   ⚠️ window.sistemaPrincipal não disponível');
}

console.log('\n3. Verificar SorteModal:');
if (window.sorteModal) {
    console.log('   ✅ window.sorteModal disponível');
    console.log('   Sorte Data:', window.sorteModal.sorteData);
} else {
    console.warn('   ⚠️ window.sorteModal não disponível');
}

// ═══════════════════════════════════════════════════════════════════
// 2️⃣ TESTE: LOJA - Rokmas Atuais
// ═══════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(60));
console.log('🏪 [TESTE 2] LOJA - Rokmas Atuais\n');

console.log('1. Verificar localStorage de Rokmas (mesmo da Sorte):');
const rokmastorageString = localStorage.getItem('redungeon_fortuna_atual');
console.log(`   localStorage['redungeon_fortuna_atual'] = ${rokmastorageString || 'VAZIO'}`);

console.log('\n2. Verificar elemento HTML do saldo:');
const elementoSaldo = document.getElementById('modal-menu-itens-saldo');
if (elementoSaldo) {
    console.log(`   ✅ Elemento encontrado: modal-menu-itens-saldo`);
    console.log(`   Valor exibido: ${elementoSaldo.textContent}`);
} else {
    console.warn('   ⚠️ Elemento modal-menu-itens-saldo não encontrado');
}

console.log('\n3. Testar coleta de Loja:');
if (window.sistemaPrincipal) {
    const lojaColetada = window.sistemaPrincipal.coletarLoja();
    console.log('   Coleta de Loja:', lojaColetada);
} else {
    console.warn('   ⚠️ window.sistemaPrincipal não disponível');
}

console.log('\n4. Verificar MenuItensUI:');
if (window.menuItensUI) {
    console.log('   ✅ window.menuItensUI disponível');
} else {
    console.warn('   ⚠️ window.menuItensUI não disponível');
}

// ═══════════════════════════════════════════════════════════════════
// 3️⃣ TESTE: CORPO IMORTAL - 4 Fundações
// ═══════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(60));
console.log('🏛️ [TESTE 3] CORPO IMORTAL - 4 Fundações\n');

console.log('1. Verificar objeto global corpoImortalDados:');
if (window.corpoImortalDados) {
    console.log('   ✅ window.corpoImortalDados disponível');
    console.log('   Dados:', window.corpoImortalDados.dados);
} else {
    console.warn('   ⚠️ window.corpoImortalDados NÃO disponível - PROBLEMA!');
}

console.log('\n2. Verificar localStorage de Corpo Imortal:');
const corpoImortalStorage = localStorage.getItem('corpoImortalData');
if (corpoImortalStorage) {
    console.log('   ✅ localStorage["corpoImortalData"] encontrado');
    try {
        const parsed = JSON.parse(corpoImortalStorage);
        console.log('   Dados:', parsed);
    } catch (e) {
        console.error('   ❌ Erro ao parsear JSON:', e);
    }
} else {
    console.log('   ⚠️ localStorage["corpoImortalData"] vazio');
}

console.log('\n3. Testar coleta de Corpo Imortal:');
if (window.sistemaPrincipal) {
    const corpoColetado = window.sistemaPrincipal.coletarCorpoImortal();
    console.log('   Coleta de Corpo Imortal:', corpoColetado);
} else {
    console.warn('   ⚠️ window.sistemaPrincipal não disponível');
}

// ═══════════════════════════════════════════════════════════════════
// 4️⃣ TESTE: SISTEMA COMPLETO - Salvar e Importar
// ═══════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(60));
console.log('✅ [TESTE 4] SISTEMA COMPLETO\n');

console.log('1. Verificar window.sistemaPrincipal:');
if (window.sistemaPrincipal) {
    console.log('   ✅ window.sistemaPrincipal disponível');
    console.log('   Versão:', window.sistemaPrincipal.versao);
} else {
    console.warn('   ⚠️ window.sistemaPrincipal NÃO disponível - PROBLEMA!');
}

console.log('\n2. Testar coleta completa:');
if (window.sistemaPrincipal) {
    const todosDados = window.sistemaPrincipal.coletarTodosDados();
    console.log('   Todos os dados coletados com sucesso!');
    console.log('   - Sorte.fortunaAtual:', todosDados.sorte?.fortunaAtual);
    console.log('   - Loja.rokmasAtuais:', todosDados.loja?.rokmasAtuais);
    console.log('   - Corpo Imortal.dantian:', todosDados.corpoImortal?.dantian);
    console.log('   - Corpo Imortal.meridianos:', todosDados.corpoImortal?.meridianos);
} else {
    console.warn('   ⚠️ Não é possível coletar dados');
}

// ═══════════════════════════════════════════════════════════════════
// 📋 RESUMO DO TESTE
// ═══════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(60));
console.log('📋 RESUMO DO TESTE\n');

const checklist = {
    'window.sistemaPrincipal': !!window.sistemaPrincipal,
    'window.sorteModal': !!window.sorteModal,
    'window.menuItensUI': !!window.menuItensUI,
    'window.corpoImortalDados': !!window.corpoImortalDados,
    'localStorage[redungeon_fortuna_atual]': !!localStorage.getItem('redungeon_fortuna_atual'),
    'localStorage[corpoImortalData]': !!localStorage.getItem('corpoImortalData'),
    'Elemento modal-menu-itens-saldo': !!document.getElementById('modal-menu-itens-saldo')
};

console.table(checklist);

console.log('\n' + '='.repeat(60));
console.log('🎯 PRÓXIMAS AÇÕES:\n');
console.log('1. Se todos ✅: Sistema está funcionando!');
console.log('2. Se algum ❌: Verifique no console a mensagem de erro');
console.log('3. Teste manual: Abra cada modal e faça upgrade');
console.log('4. Salve e importe o JSON');
console.log('='.repeat(60) + '\n');
