// ============================================
// DEBUG SCRIPT - SISTEMA DE TREINAMENTO
// ============================================
// Cole isto no console do navegador (F12) para debugar

// 1. Testar se o sistema existe
console.log('🔍 Verificando sistema de treinamento...');
console.log('window.treinamentoManager existe?', !!window.treinamentoManager);

// 2. Testar elementos HTML
console.log('\n🔍 Verificando elementos HTML...');
console.log('modal-treino:', !!document.getElementById('modal-treino'));
console.log('select-atributo:', !!document.getElementById('select-atributo'));
console.log('btn-iniciar-treino-modal:', !!document.getElementById('btn-iniciar-treino-modal'));
console.log('info-atributo:', !!document.getElementById('info-atributo'));
console.log('input-horas:', !!document.getElementById('input-horas'));
console.log('input-bonus-extra:', !!document.getElementById('input-bonus-extra'));
console.log('resultado-treino:', !!document.getElementById('resultado-treino'));

// 3. Teste manual
console.log('\n🧪 Testando funções...');

// Testar apertura do modal
function testarModal() {
    console.log('Abrindo modal...');
    if (window.treinamentoManager && window.treinamentoManager.abrirModalTreino) {
        window.treinamentoManager.abrirModalTreino();
        console.log('✅ Modal aberto');
    } else {
        console.error('❌ Manager não disponível');
    }
}

// Testar seleção de atributo
function testarSelecao() {
    const select = document.getElementById('select-atributo');
    console.log('Seleção atual:', select?.value);
    const info = document.getElementById('info-atributo');
    console.log('Info visível:', !info?.classList.contains('hidden'));
}

// Testar valores dos inputs
function testarInputs() {
    const horas = document.getElementById('input-horas');
    const bonus = document.getElementById('input-bonus-extra');
    console.log('Horas:', horas?.value);
    console.log('Bônus:', bonus?.value);
}

// Testar clique no botão iniciar (SEM executar treino completo)
function testarBotao() {
    console.log('Simulando clique no botão...');
    const btn = document.getElementById('btn-iniciar-treino-modal');
    if (btn) {
        // Criar e disparar evento de clique
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        btn.dispatchEvent(event);
        console.log('✅ Evento de clique disparado');
    } else {
        console.error('❌ Botão não encontrado');
    }
}

// Função para executar treino com logging
async function testarTreinamento() {
    console.log('\n🏋️ TESTE DE TREINAMENTO');
    console.log('1. Verificando seleção de atributo...');
    const select = document.getElementById('select-atributo');
    const atributo = select?.value;
    console.log('   Atributo selecionado:', atributo);
    
    if (!atributo) {
        console.error('   ❌ Nenhum atributo selecionado!');
        return;
    }
    
    console.log('2. Verificando valores dos inputs...');
    const horas = parseInt(document.getElementById('input-horas')?.value) || 1;
    const bonus = parseInt(document.getElementById('input-bonus-extra')?.value) || 0;
    console.log('   Horas:', horas);
    console.log('   Bônus:', bonus);
    
    console.log('3. Verificando window.appState...');
    console.log('   State disponível?', !!window.appState);
    if (window.appState) {
        const state = window.appState.getState?.();
        console.log('   Atributos base:', state?.atributos?.primarios?.[atributo]?.base);
        console.log('   Sorte total:', state?.atributos?.primarios?.sorte?.total);
    }
    
    console.log('4. Testando rolarDado...');
    if (window.treinamentoManager) {
        const d6 = window.treinamentoManager.rolarDado(6);
        console.log('   1d6 rolado:', d6);
    }
    
    console.log('\n✅ Teste concluído. Verifique os logs acima.');
}

// Exibir guia de comandos
console.log('\n📖 GUIA DE DEBUGGING');
console.log('─────────────────────────────────');
console.log('Execute os seguintes comandos no console:');
console.log('');
console.log('1. testarModal()');
console.log('   → Abre o modal de treinamento');
console.log('');
console.log('2. testarSelecao()');
console.log('   → Verifica atributo selecionado');
console.log('');
console.log('3. testarInputs()');
console.log('   → Mostra valores de horas e bônus');
console.log('');
console.log('4. testarBotao()');
console.log('   → Simula clique no botão iniciar');
console.log('');
console.log('5. await testarTreinamento()');
console.log('   → Testa todo o flow de treinamento');
console.log('');
console.log('Se encontrar erro, copie e compartilhe a mensagem de erro completa!');
