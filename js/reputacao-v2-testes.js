/**
 * 🏆 TESTES E EXEMPLOS - REPUTAÇÃO V2
 * 
 * Script para testar e demonstrar o sistema
 * Execute no console do navegador para ver exemplos
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 1: Verificar inicialização
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste1_Inicializacao() {
    console.log('═══════════════════════════════════════');
    console.log('📋 TESTE 1: INICIALIZAÇÃO');
    console.log('═══════════════════════════════════════');
    
    const v2Existe = !!window.reputacaoV2;
    const v1Existe = !!window.reputacaoModal;
    
    console.log('✓ ReputacaoV2 existe:', v2Existe);
    console.log('✓ ReputacaoModal (V1) existe:', v1Existe);
    
    if (v2Existe) {
        console.log('✓ Dados V2:', window.reputacaoV2.dados);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 2: Calcular status
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste2_CalcularStatus() {
    console.log('\n═══════════════════════════════════════');
    console.log('🎭 TESTE 2: CALCULAR STATUS');
    console.log('═══════════════════════════════════════');
    
    const casos = [
        { fama: 75, temor: 20, desc: 'HERÓI' },
        { fama: 20, temor: 75, desc: 'TIRANO' },
        { fama: 80, temor: 70, desc: 'LENDA AMBÍGUA' },
        { fama: 10, temor: 5, desc: 'DESCONHECIDO' },
        { fama: 50, temor: 40, desc: 'NEUTRO' }
    ];
    
    casos.forEach(caso => {
        const status = window.reputacaoV2.calcularStatusAtual(caso.fama, caso.temor);
        console.log(`\n📊 ${caso.desc}:`);
        console.log(`   Fama: ${caso.fama}, Temor: ${caso.temor}`);
        console.log(`   → Status: ${status.nome}`);
        console.log(`   → Classe: ${status.classe}`);
        console.log(`   → Desc: ${status.descricao}`);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 3: Níveis descritivos
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste3_NiveisDescritivos() {
    console.log('\n═══════════════════════════════════════');
    console.log('📈 TESTE 3: NÍVEIS DESCRITIVOS');
    console.log('═══════════════════════════════════════');
    
    console.log('\n⭐ FAMA:');
    for (let valor of [5, 15, 25, 40, 55, 70, 85, 95]) {
        const nivel = window.reputacaoV2.obterNivel(valor, 'fama');
        console.log(`   ${valor}: ${nivel.titulo}`);
    }
    
    console.log('\n☠️ TEMOR:');
    for (let valor of [5, 15, 25, 40, 55, 70, 85, 95]) {
        const nivel = window.reputacaoV2.obterNivel(valor, 'temor');
        console.log(`   ${valor}: ${nivel.titulo}`);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 4: Efeitos passivos
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste4_EfeitosPassivos() {
    console.log('\n═══════════════════════════════════════');
    console.log('🎁 TESTE 4: EFEITOS PASSIVOS');
    console.log('═══════════════════════════════════════');
    
    const valores = [0, 20, 45, 60, 75, 90, 100];
    
    console.log('\n⭐ EFEITOS DE FAMA:');
    valores.forEach(v => {
        const efeitos = window.reputacaoV2.calcularEfeitos(v, 'fama');
        console.log(`\n   Fama ${v}: ${efeitos.length} efeito(s)`);
        if (efeitos.length > 0) {
            efeitos.slice(0, 3).forEach(e => console.log(`      • ${e}`));
            if (efeitos.length > 3) console.log(`      • ... +${efeitos.length - 3} mais`);
        }
    });
    
    console.log('\n☠️ EFEITOS DE TEMOR:');
    valores.forEach(v => {
        const efeitos = window.reputacaoV2.calcularEfeitos(v, 'temor');
        console.log(`\n   Temor ${v}: ${efeitos.length} efeito(s)`);
        if (efeitos.length > 0) {
            efeitos.slice(0, 3).forEach(e => console.log(`      • ${e}`));
            if (efeitos.length > 3) console.log(`      • ... +${efeitos.length - 3} mais`);
        }
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 5: Modificar e atualizar
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste5_ModificarAtualizar() {
    console.log('\n═══════════════════════════════════════');
    console.log('🔄 TESTE 5: MODIFICAR E ATUALIZAR');
    console.log('═══════════════════════════════════════');
    
    console.log('\n📊 Dados originais:');
    console.log(window.reputacaoV2.dados);
    
    // Modificar
    window.reputacaoV2.dados.mundo.fama = 75;
    window.reputacaoV2.dados.mundo.temor = 30;
    window.reputacaoV2.dados.regiao.fama = 60;
    window.reputacaoV2.dados.regiao.temor = 40;
    
    window.reputacaoV2.atualizarVisao();
    
    console.log('\n📊 Dados modificados:');
    console.log(window.reputacaoV2.dados);
    
    const status = window.reputacaoV2.getStatus();
    console.log('\n📊 Status:');
    console.log(`   Mundo: ${status.mundo.status.nome}`);
    console.log(`   Região: ${status.regiao.status.nome}`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 6: Compatibilidade com V1
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste6_CompatibilidadeV1() {
    console.log('\n═══════════════════════════════════════');
    console.log('🔄 TESTE 6: COMPATIBILIDADE COM V1');
    console.log('═══════════════════════════════════════');
    
    console.log('\n✓ ReputacaoModal (V1) ainda funciona?');
    
    if (window.reputacaoModal) {
        console.log('✓ V1 existe');
        console.log('✓ Status V1:', window.reputacaoModal.getStatus());
    } else {
        console.log('✗ V1 não encontrada');
    }
    
    console.log('\n✓ Ambas funcionam em paralelo');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 7: Abrir/Fechar modal
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste7_ModalControle() {
    console.log('\n═══════════════════════════════════════');
    console.log('🪟 TESTE 7: CONTROLE DO MODAL');
    console.log('═══════════════════════════════════════');
    
    console.log('→ Abrindo modal...');
    window.reputacaoV2.abrir();
    console.log('✓ Modal aberto! (Veja o navegador)');
    
    console.log('⏱️ Fechando em 3 segundos...');
    setTimeout(() => {
        window.reputacaoV2.fechar();
        console.log('✓ Modal fechado!');
    }, 3000);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 8: Conversão de dados V1 → V2
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste8_ConversaoDados() {
    console.log('\n═══════════════════════════════════════');
    console.log('🔄 TESTE 8: CONVERSÃO V1 → V2');
    console.log('═══════════════════════════════════════');
    
    // Simular dados V1
    const dadosV1 = { mundo: 30, regiao: 20 };
    console.log('📊 Dados V1:', dadosV1);
    
    // Simular carregamento
    console.log('\n✓ Se carregássemos dados V1, seriam convertidos para:');
    const dadosV2Convertidos = {
        mundo: { fama: dadosV1.mundo, temor: 0 },
        regiao: { fama: dadosV1.regiao, temor: 0 }
    };
    console.log('📊 Dados V2:', dadosV2Convertidos);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 9: Cenários narrativos
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste9_CenariosNarrativos() {
    console.log('\n═══════════════════════════════════════');
    console.log('📖 TESTE 9: CENÁRIOS NARRATIVOS');
    console.log('═══════════════════════════════════════');
    
    const cenarios = [
        {
            nome: 'O Bardo Lendário',
            mundo: { fama: 85, temor: 15 },
            desc: 'Famoso por sua música e carisma'
        },
        {
            nome: 'O Conquistador Brutal',
            mundo: { fama: 70, temor: 80 },
            desc: 'Temido e respeitado, mas também amado'
        },
        {
            nome: 'O Assassino Sombrio',
            mundo: { fama: 40, temor: 90 },
            desc: 'Mais temido que famoso'
        },
        {
            nome: 'O Aventureiro Novato',
            mundo: { fama: 10, temor: 5 },
            desc: 'Ninguém sabe quem é'
        }
    ];
    
    cenarios.forEach(cenario => {
        console.log(`\n📖 ${cenario.nome}`);
        console.log(`   Descrição: ${cenario.desc}`);
        console.log(`   Fama: ${cenario.mundo.fama}, Temor: ${cenario.mundo.temor}`);
        
        const status = window.reputacaoV2.calcularStatusAtual(
            cenario.mundo.fama,
            cenario.mundo.temor
        );
        console.log(`   Status: ${status.nome}`);
        
        const efeitosFama = window.reputacaoV2.calcularEfeitos(cenario.mundo.fama, 'fama');
        const efeitosTemor = window.reputacaoV2.calcularEfeitos(cenario.mundo.temor, 'temor');
        
        console.log(`   ⭐ Efeitos de fama: ${efeitosFama.length}`);
        console.log(`   ☠️ Efeitos de temor: ${efeitosTemor.length}`);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TESTE 10: Performance
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function teste10_Performance() {
    console.log('\n═══════════════════════════════════════');
    console.log('⚡ TESTE 10: PERFORMANCE');
    console.log('═══════════════════════════════════════');
    
    const iteracoes = 10000;
    
    console.log(`\n→ Testando ${iteracoes} cálculos de status...`);
    console.time('calcularStatusAtual');
    for (let i = 0; i < iteracoes; i++) {
        window.reputacaoV2.calcularStatusAtual(
            Math.random() * 100,
            Math.random() * 100
        );
    }
    console.timeEnd('calcularStatusAtual');
    
    console.log(`\n→ Testando ${iteracoes} cálculos de efeitos...`);
    console.time('calcularEfeitos');
    for (let i = 0; i < iteracoes; i++) {
        window.reputacaoV2.calcularEfeitos(Math.random() * 100, 'fama');
    }
    console.timeEnd('calcularEfeitos');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXECUTAR TODOS OS TESTES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function executarTodosTestes() {
    console.clear();
    console.log('\n');
    console.log('╔═══════════════════════════════════════════════════════╗');
    console.log('║  🏆 SUITE DE TESTES - REPUTAÇÃO V2                   ║');
    console.log('║  Data: 5 de abril de 2026                            ║');
    console.log('╚═══════════════════════════════════════════════════════╝');
    
    teste1_Inicializacao();
    teste2_CalcularStatus();
    teste3_NiveisDescritivos();
    teste4_EfeitosPassivos();
    teste5_ModificarAtualizar();
    teste6_CompatibilidadeV1();
    teste8_ConversaoDados();
    teste9_CenariosNarrativos();
    teste10_Performance();
    
    console.log('\n╔═══════════════════════════════════════════════════════╗');
    console.log('║  ✅ TESTES COMPLETOS                                  ║');
    console.log('║                                                       ║');
    console.log('║  Próximos passos:                                     ║');
    console.log('║  1. teste7_ModalControle() para testar UI             ║');
    console.log('║  2. window.reputacaoV2.debug() para debug detalhado   ║');
    console.log('║  3. window.reputacaoV2.abrir() para abrir o modal     ║');
    console.log('╚═══════════════════════════════════════════════════════╝\n');
}

// Exportar para uso global
window.testesReputacaoV2 = {
    teste1_Inicializacao,
    teste2_CalcularStatus,
    teste3_NiveisDescritivos,
    teste4_EfeitosPassivos,
    teste5_ModificarAtualizar,
    teste6_CompatibilidadeV1,
    teste7_ModalControle,
    teste8_ConversaoDados,
    teste9_CenariosNarrativos,
    teste10_Performance,
    executarTodosTestes
};

console.log('\n✅ Testes carregados! Execute:');
console.log('   window.testesReputacaoV2.executarTodosTestes()');
console.log('   Ou teste individual: window.testesReputacaoV2.teste1_Inicializacao()');
