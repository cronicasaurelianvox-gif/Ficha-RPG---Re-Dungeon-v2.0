/* ═══════════════════════════════════════════════════════════════════════════════════════════════
   CULTIVAÇÃO - TESTE E DEMONSTRAÇÃO
   
   Script para testar e demonstrar o Sistema de Cultivação no console do navegador.
   
   Como usar:
   1. Abra o navegador (F12)
   2. Va até a aba Console
   3. Execute os comandos abaixo
   
   Exemplo:
   > cultivacao.teste.demonstracao_completa()
   
   ═══════════════════════════════════════════════════════════════════════════════════════════════ */

const cultivacao_teste = {
    
    // Teste 1: Abrir e Fechar
    testar_abertura() {
        console.log('🧪 TESTE 1: Abrindo o popup...');
        window.cultivacao.ui.abrir();
        console.log('✅ Popup aberto! Feche com o botão X ou chamar cultivacao.teste.testar_fechamento()');
    },
    
    testar_fechamento() {
        console.log('🧪 TESTE 2: Fechando o popup...');
        window.cultivacao.ui.fechar();
        console.log('✅ Popup fechado!');
    },
    
    // Teste 2: Mudar de Mundo
    testar_mundos() {
        console.log('🧪 TESTE 3: Alternando entre mundos...');
        
        setTimeout(() => {
            window.cultivacao.ui.abrir();
            console.log('⭐ Entrando em: The Elder Gods');
            window.cultivacao.ui.mudar_mundo('elder-gods');
        }, 500);
        
        setTimeout(() => {
            console.log('❄️ Entrando em: Boreal Line');
            window.cultivacao.ui.mudar_mundo('boreal-line');
        }, 2000);
        
        setTimeout(() => {
            console.log('🌿 Entrando em: Legends of Murim');
            window.cultivacao.ui.mudar_mundo('murim');
        }, 4000);
        
        console.log('✅ Rodando demonstração de mundos...');
    },
    
    // Teste 3: Dados do Elder Gods
    testar_elder_gods() {
        console.log('🧪 TESTE 4: Elder Gods - Ganhar XP');
        console.log('Antes:', window.cultivacao.dados.obter_elder_gods());
        
        window.cultivacao.dados.ganhar_xp_elder_gods(50);
        console.log('Depois (ganhou 50 XP):', window.cultivacao.dados.obter_elder_gods());
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('elder-gods');
        console.log('✅ Veja a barra de XP atualizada!');
    },
    
    // Teste 4: Romper Rank
    testar_rompimento() {
        console.log('🧪 TESTE 5: Elder Gods - Rompimento');
        const dados = window.cultivacao.dados.obter_elder_gods();
        
        // Chenar para nível 9
        while (dados.nivel < 9) {
            window.cultivacao.dados.ganhar_xp_elder_gods(1000);
        }
        
        console.log('Antes do rompimento:', window.cultivacao.dados.obter_elder_gods());
        window.cultivacao.dados.rompimento_rank_elder_gods();
        console.log('Depois do rompimento:', window.cultivacao.dados.obter_elder_gods());
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('elder-gods');
        console.log('✅ Rank aumentado!');
    },
    
    // Teste 5: Dados Universais
    testar_universal() {
        console.log('🧪 TESTE 6: Elementos Universais');
        
        console.log('Dantian:', window.cultivacao.dados.obter_dantian());
        console.log('Meridianos:', window.cultivacao.dados.obter_meridianos());
        console.log('Técnica:', window.cultivacao.dados.obter_tecnica());
        console.log('Mar Espiritual:', window.cultivacao.dados.obter_mar_espiritual());
        
        // Atualizar dados
        window.cultivacao.dados.atualizar_dantian('inferior', 500);
        window.cultivacao.dados.atualizar_meridianos(150);
        window.cultivacao.dados.atualizar_tecnica(
            'Técnica Suprema',
            'Essência Ancestral',
            'Uma poderosa técnica',
            85,
            90
        );
        window.cultivacao.dados.atualizar_mar_espiritual('Turbulento', 50, 75, 60);
        
        console.log('✅ Dados atualizados!');
        window.cultivacao.ui.abrir();
        console.log('✅ Veja as mudanças no popup!');
    },
    
    // Teste 6: Boreal Line
    testar_boreal_line() {
        console.log('🧪 TESTE 7: Boreal Line - Cristais');
        console.log('Estado atual:', window.cultivacao.dados.obter_boreal_line());
        
        // Modificar cristais
        window.cultivacao.dados.atualizar_cristal(0, {
            integridade: 95,
            estabilidade: 98,
            pureza: 100,
            sincronizacao: 100,
            estado: 'Perfeito'
        });
        
        window.cultivacao.dados.atualizar_cristal(1, {
            estado: 'Instável'
        });
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('boreal-line');
        console.log('✅ Cristais atualizados!');
    },
    
    // Teste 7: Boreal Line Rank
    testar_boreal_line_rank() {
        console.log('🧪 TESTE 8: Boreal Line - Avançar Rank');
        const dados_antes = window.cultivacao.dados.obter_boreal_line();
        console.log('Antes:', dados_antes);
        
        window.cultivacao.dados.avancar_rank_boreal_line();
        const dados_depois = window.cultivacao.dados.obter_boreal_line();
        console.log('Depois:', dados_depois);
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('boreal-line');
        console.log('✅ Rank avançado!');
    },
    
    // Teste 8: Murim
    testar_murim() {
        console.log('🧪 TESTE 9: Legends of Murim - Fragmentos');
        console.log('Antes:', window.cultivacao.dados.obter_murim());
        
        window.cultivacao.dados.ganhar_fragmentos_murim(150);
        console.log('Depois (ganhou 150 frag):', window.cultivacao.dados.obter_murim());
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('murim');
        console.log('✅ Fragmentos adicionados!');
    },
    
    // Teste 9: Murim Pétala
    testar_murim_petala() {
        console.log('🧪 TESTE 10: Legends of Murim - Adicionar Pétalas');
        const antes = window.cultivacao.dados.obter_murim();
        console.log('Pétalas antes:', antes.petalas);
        
        for (let i = 0; i < 3; i++) {
            window.cultivacao.dados.adicionar_petala_murim();
        }
        
        const depois = window.cultivacao.dados.obter_murim();
        console.log('Pétalas depois:', depois.petalas);
        
        window.cultivacao.ui.abrir();
        window.cultivacao.ui.mudar_mundo('murim');
        console.log('✅ Pétalas adicionadas!');
    },
    
    // Teste 10: Sistema de Risco
    testar_risco() {
        console.log('🧪 TESTE 11: Sistema de Risco');
        const risco = window.cultivacao.dados.calcular_risco_geral();
        console.log(`Risco geral: ${risco}%`);
        
        if (risco > 60) {
            console.log('⚠️ RISCO ALTO! O popup pulsará em vermelho');
        } else if (risco > 30) {
            console.log('⚠️ Risco médio');
        } else {
            console.log('✅ Risco baixo');
        }
        
        window.cultivacao.ui.abrir();
    },
    
    // Teste 11: localStorage
    testar_storage() {
        console.log('🧪 TESTE 12: Verificar localStorage');
        const dados_salvo = JSON.parse(localStorage.getItem('cultivacao_dados'));
        console.log('Dados no localStorage:', dados_salvo);
        console.log('✅ Dados persistidos com sucesso!');
    },
    
    // Teste 12: Limpar dados
    testar_limpar() {
        console.log('🧪 TESTE 13: Limpar dados (CUIDADO!)');
        if (confirm('Tem certeza? Isso vai apagar TODOS os dados de cultivação!')) {
            localStorage.removeItem('cultivacao_dados');
            location.reload();
            console.log('✅ Dados limpos! Página recarregando...');
        } else {
            console.log('❌ Operação cancelada');
        }
    },
    
    // Teste 13: Demonstração completa
    demonstracao_completa() {
        console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         🌌 SISTEMA DE CULTIVAÇÃO - DEMONSTRAÇÃO COMPLETA 🌌   ║
║                                                                ║
║  Este script vai demonstrar todas as funcionalidades do        ║
║  Sistema de Cultivação.                                        ║
║                                                                ║
║  Duração aproximada: 15 segundos                              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
        `);
        
        let tempo = 0;
        const delay = (ms, callback) => {
            setTimeout(callback, ms);
            return ms;
        };
        
        tempo += delay(tempo + 1000, () => {
            console.log('\n📖 1️⃣ Abrindo popup de Cultivação...');
            window.cultivacao.ui.abrir();
        });
        
        tempo += delay(tempo + 2000, () => {
            console.log('\n🌍 2️⃣ Explorando The Elder Gods...');
            window.cultivacao.ui.mudar_mundo('elder-gods');
            window.cultivacao.dados.ganhar_xp_elder_gods(50);
            window.cultivacao.ui.atualizar_ui();
        });
        
        tempo += delay(tempo + 2000, () => {
            console.log('\n❄️ 3️⃣ Explorando Boreal Line...');
            window.cultivacao.ui.mudar_mundo('boreal-line');
            window.cultivacao.dados.atualizar_cristal(0, { integridade: 95 });
            window.cultivacao.ui.atualizar_ui();
        });
        
        tempo += delay(tempo + 2000, () => {
            console.log('\n🌿 4️⃣ Explorando Legends of Murim...');
            window.cultivacao.ui.mudar_mundo('murim');
            window.cultivacao.dados.ganhar_fragmentos_murim(50);
            window.cultivacao.ui.atualizar_ui();
        });
        
        tempo += delay(tempo + 2000, () => {
            console.log('\n🔍 5️⃣ Verificando dados no localStorage...');
            const dados = JSON.parse(localStorage.getItem('cultivacao_dados'));
            console.log('✅ Dados persistidos:', dados);
        });
        
        tempo += delay(tempo + 2000, () => {
            console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    ✅ DEMONSTRAÇÃO CONCLUÍDA!                 ║
║                                                                ║
║  Comandos úteis para continuar testando:                      ║
║  • cultivacao.teste.testar_elder_gods()                       ║
║  • cultivacao.teste.testar_boreal_line()                      ║
║  • cultivacao.teste.testar_murim()                            ║
║  • cultivacao.teste.testar_universal()                        ║
║  • cultivacao.teste.testar_risco()                            ║
║                                                                ║
║  Acessar dados diretamente:                                   ║
║  • window.cultivacao.dados                                    ║
║  • window.cultivacao.ui                                       ║
║                                                                ║
║  Documentação completa em:                                    ║
║  docs/CULTIVACAO_DOCUMENTACAO.md                              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
            `);
        });
    }
};

// Expor globalmente para acesso fácil
if (window.cultivacao) {
    window.cultivacao.teste = cultivacao_teste;
    console.log(`
✨ Sistema de Cultivação Carregado com Sucesso!

Para começar a testar, execute no console:
> window.cultivacao.teste.demonstracao_completa()

Ou teste funções individuais:
> window.cultivacao.teste.testar_elder_gods()
> window.cultivacao.teste.testar_boreal_line()
> window.cultivacao.teste.testar_murim()
    `);
} else {
    console.warn('⚠️ Sistema de Cultivação não foi inicializado. Verifique se cultivacao-sistema.js foi carregado.');
}
