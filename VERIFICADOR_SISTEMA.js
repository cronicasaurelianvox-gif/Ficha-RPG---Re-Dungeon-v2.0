/**
 * ═══════════════════════════════════════════════════════════════════════════
 * VERIFICADOR DE SISTEMA - LIMPAR FICHA
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Como usar:
 * 1. Abra F12 (Console)
 * 2. Cole este arquivo inteiro no console
 * 3. Execute
 * 
 * OU copie e cole CADA FUNÇÃO abaixo no console individual
 */

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 1: Verificação Rápida
// ═══════════════════════════════════════════════════════════════════════════

function verificarRapido() {
    console.clear();
    console.log('%c╔════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold');
    console.log('%c║     VERIFICAÇÃO RÁPIDA - SISTEMA DE LIMPEZA       ║', 'color: #00d4ff; font-weight: bold');
    console.log('%c╚════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold');
    
    let ok = 0, erros = 0;
    
    // 1. Botão
    console.log('\n📋 VERIFICAÇÃO 1: Botão');
    const btn = document.getElementById('btn-limpar-ficha');
    if (btn) {
        console.log('%c✅ PASS', 'color: #4caf50; font-weight: bold', '- Botão encontrado');
        ok++;
    } else {
        console.log('%c❌ FAIL', 'color: #f44336; font-weight: bold', '- Botão NÃO encontrado');
        erros++;
    }
    
    // 2. CSS
    console.log('\n📋 VERIFICAÇÃO 2: CSS');
    const styles = document.querySelector('link[href*="limpar-ficha-avancado"]');
    if (styles) {
        console.log('%c✅ PASS', 'color: #4caf50; font-weight: bold', '- CSS carregado');
        ok++;
    } else {
        console.log('%c❌ FAIL', 'color: #f44336; font-weight: bold', '- CSS NÃO carregado');
        erros++;
    }
    
    // 3. Script
    console.log('\n📋 VERIFICAÇÃO 3: Script');
    if (window.limparFichaAvancado) {
        console.log('%c✅ PASS', 'color: #4caf50; font-weight: bold', '- Script carregado');
        ok++;
    } else {
        console.log('%c❌ FAIL', 'color: #f44336; font-weight: bold', '- Script NÃO carregado');
        erros++;
    }
    
    // 4. Modal
    console.log('\n📋 VERIFICAÇÃO 4: Modal');
    const modal = document.getElementById('limpar-ficha-modal-overlay');
    if (modal) {
        console.log('%c✅ PASS', 'color: #4caf50; font-weight: bold', '- Modal criado');
        ok++;
    } else {
        console.log('%c⚠️ INFO', 'color: #ffc107; font-weight: bold', '- Modal será criado dinamicamente');
        ok++;
    }
    
    // 5. localStorage
    console.log('\n📋 VERIFICAÇÃO 5: Storage');
    const tamanho = Object.keys(localStorage).length;
    console.log(`%c✅ PASS`, 'color: #4caf50; font-weight: bold', `- localStorage: ${tamanho} chaves`);
    ok++;
    
    // Resumo
    console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00d4ff');
    console.log(`%c📊 RESULTADO:`, 'color: #00d4ff; font-weight: bold', `${ok} OK, ${erros} ERROS`);
    
    if (erros === 0) {
        console.log('%c✅ SISTEMA PRONTO!', 'color: #4caf50; font-weight: bold; font-size: 14px');
    } else {
        console.log('%c❌ EXISTEM PROBLEMAS', 'color: #f44336; font-weight: bold; font-size: 14px');
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 2: Ver localStorage Formatado
// ═══════════════════════════════════════════════════════════════════════════

function verLocalStorage() {
    console.clear();
    console.log('%c╔════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold');
    console.log('%c║           CONTEÚDO DO LOCALSTORAGE              ║', 'color: #00d4ff; font-weight: bold');
    console.log('%c╚════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold');
    
    const dados = [];
    Object.keys(localStorage).forEach(chave => {
        const valor = localStorage.getItem(chave);
        dados.push({
            'Chave': chave,
            'Tamanho': valor.length + ' chars',
            'Tipo': typeof valor,
            'Preview': valor.substring(0, 50) + (valor.length > 50 ? '...' : '')
        });
    });
    
    console.table(dados);
    
    let totalSize = 0;
    Object.keys(localStorage).forEach(k => totalSize += localStorage[k].length);
    
    console.log(`\n📊 Total: ${Object.keys(localStorage).length} chaves`);
    console.log(`📦 Tamanho: ${(totalSize / 1024).toFixed(2)} KB`);
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 3: Ver Selecionados Atualmente
// ═══════════════════════════════════════════════════════════════════════════

function verSelecionados() {
    console.clear();
    console.log('%c╔════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold');
    console.log('%c║          ITENS SELECIONADOS PARA LIMPEZA          ║', 'color: #00d4ff; font-weight: bold');
    console.log('%c╚════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold');
    
    if (!window.limparFichaAvancado) {
        console.log('%c❌ Sistema ainda não foi inicializado', 'color: #f44336');
        return;
    }
    
    const selecionados = Array.from(window.limparFichaAvancado.selectedItems?.entries() || []);
    
    if (selecionados.length === 0) {
        console.log('%c⚠️ Nenhum item selecionado', 'color: #ffc107');
        return;
    }
    
    console.log(`\n✅ Total de itens: ${selecionados.length}\n`);
    
    selecionados.forEach((item, index) => {
        const [id, section] = item;
        console.log(`  [${index + 1}] ${id} (${section})`);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 4: Testar Clique no Botão
// ═══════════════════════════════════════════════════════════════════════════

function testarBotao() {
    console.clear();
    console.log('%c🖱️ Simulando clique no botão...', 'color: #00d4ff; font-weight: bold; font-size: 14px');
    
    const btn = document.getElementById('btn-limpar-ficha');
    if (!btn) {
        console.log('%c❌ Botão não encontrado!', 'color: #f44336; font-weight: bold');
        return;
    }
    
    console.log('Botão encontrado, disparando clique...');
    btn.click();
    console.log('%c✅ Clique disparado! Verifique se o modal apareceu.', 'color: #4caf50; font-weight: bold');
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 5: Testar Função Individual
// ═══════════════════════════════════════════════════════════════════════════

function testarFuncao(nomeF) {
    console.clear();
    console.log(`%c🧪 Testando função: ${nomeF}`, 'color: #00d4ff; font-weight: bold; font-size: 14px');
    
    if (!window.limparFichaAvancado) {
        console.log('%c❌ Sistema não inicializado', 'color: #f44336');
        return;
    }
    
    if (typeof window.limparFichaAvancado[nomeF] !== 'function') {
        console.log(`%c❌ Função "${nomeF}" não encontrada`, 'color: #f44336');
        console.log('\nFunções disponíveis:');
        Object.getOwnPropertyNames(Object.getPrototypeOf(window.limparFichaAvancado))
            .filter(name => typeof window.limparFichaAvancado[name] === 'function')
            .forEach(name => console.log(`  • ${name}`));
        return;
    }
    
    try {
        console.log(`Executando ${nomeF}()...`);
        window.limparFichaAvancado[nomeF]();
        console.log(`%c✅ ${nomeF}() executado com sucesso!`, 'color: #4caf50; font-weight: bold');
    } catch (e) {
        console.log(`%c❌ Erro: ${e.message}`, 'color: #f44336; font-weight: bold');
        console.log('Stack:', e.stack);
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 6: Estatísticas Completas
// ═══════════════════════════════════════════════════════════════════════════

function verEstatisticas() {
    console.clear();
    console.log('%c╔════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold');
    console.log('%c║           ESTATÍSTICAS DO SISTEMA                ║', 'color: #00d4ff; font-weight: bold');
    console.log('%c╚════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold');
    
    const stats = {
        'Chaves no localStorage': Object.keys(localStorage).length,
        'Chaves no sessionStorage': Object.keys(sessionStorage).length,
        'Tamanho localStorage (KB)': (Object.keys(localStorage).reduce((sum, k) => sum + localStorage[k].length, 0) / 1024).toFixed(2),
        'Tamanho sessionStorage (KB)': (Object.keys(sessionStorage).reduce((sum, k) => sum + sessionStorage[k].length, 0) / 1024).toFixed(2),
        'Sistema inicializado': window.limparFichaAvancado ? 'Sim' : 'Não',
        'Itens selecionados': window.limparFichaAvancado?.selectedItems?.size || 0,
        'Limpeza em progresso': window.limparFichaAvancado?.isRunning ? 'Sim' : 'Não',
        'Botão existe': document.getElementById('btn-limpar-ficha') ? 'Sim' : 'Não',
        'Modal existe': document.getElementById('limpar-ficha-modal-overlay') ? 'Sim' : 'Não',
        'CSS carregado': document.querySelector('link[href*="limpar-ficha"]') ? 'Sim' : 'Não'
    };
    
    console.table(stats);
}

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÃO 7: Menu Interativo
// ═══════════════════════════════════════════════════════════════════════════

function menu() {
    console.clear();
    console.log('%c╔════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold; font-size: 16px');
    console.log('%c║     VERIFICADOR DE SISTEMA - LIMPAR FICHA V2.1    ║', 'color: #00d4ff; font-weight: bold; font-size: 16px');
    console.log('%c╚════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold; font-size: 16px');
    
    console.log('\n%c📋 COMANDOS DISPONÍVEIS:', 'color: #00d4ff; font-weight: bold');
    console.log('\n%c1. verificarRapido()%c\n   Verifica se tudo está configurado corretamente', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c2. verLocalStorage()%c\n   Mostra todo o conteúdo do localStorage', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c3. verSelecionados()%c\n   Mostra quais itens estão marcados para limpeza', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c4. testarBotao()%c\n   Simula um clique no botão de limpeza', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c5. testarFuncao("nomeDaFuncao")%c\n   Testa uma função específica\n   Exemplo: testarFuncao("limparAtributos")', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c6. verEstatisticas()%c\n   Mostra estatísticas do sistema', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    console.log('\n%c7. menu()%c\n   Mostra este menu novamente', 'color: #ffc107; font-weight: bold', 'color: #aaa');
    
    console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00d4ff');
    console.log('%c💡 DICA: Use verificarRapido() para começar!', 'color: #4caf50; font-weight: bold');
}

// ═══════════════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════════════════════

console.log('%c✅ Verificador carregado com sucesso!', 'color: #4caf50; font-weight: bold; font-size: 14px');
console.log('%c📌 Digite: menu()%c para ver os comandos disponíveis', 'color: #00d4ff; font-weight: bold', 'color: #aaa');
console.log('\n%cOu comece com:%c verificarRapido()', 'color: #ffc107; font-weight: bold', 'color: #00d4ff; font-weight: bold');

// Mostrar menu automaticamente
menu();
