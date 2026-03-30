/**
 * 🧪 TESTE REPUTAÇÃO - SALVAR E IMPORTAR
 * Verifica se a reputação está sendo coletada, salva e restaurada corretamente
 */

window.testeReputacao = {
    /**
     * Verifica estado atual da reputação
     */
    verificarEstado() {
        console.clear();
        console.log('═══════════════════════════════════════════════════════════════');
        console.log('🧪 TESTE REPUTAÇÃO - ESTADO ATUAL');
        console.log('═══════════════════════════════════════════════════════════════');
        
        console.log('\n📌 ReputacaoModal.tempValues:');
        console.log(window.reputacaoModal?.tempValues);
        
        console.log('\n📌 AppState.getReputation():');
        const rep = window.appState?.getReputation?.();
        console.log(rep);
        
        console.log('\n📌 AppState.state.reputation:');
        const state = window.appState?.getState?.();
        console.log(state?.reputation);
    },

    /**
     * Testa coleta de reputação
     */
    testarColeta() {
        console.log('\n\n🧪 TESTANDO COLETA');
        console.log('═══════════════════════════════════════════════════════════════');
        
        if (window.sistemaFicha) {
            const atributos = window.sistemaFicha.coletarAtributos();
            console.log('✅ coletarAtributos():', atributos);
            console.log('   Reputação coletada:', atributos.reputacao);
        }
    },

    /**
     * Simula salvar e restaurar
     */
    simularSaveImport() {
        console.log('\n\n🧪 SIMULANDO SAVE/IMPORT');
        console.log('═══════════════════════════════════════════════════════════════');
        
        if (!window.sistemaFicha) {
            console.error('❌ window.sistemaFicha não existe');
            return;
        }
        
        // 1. Coletar dados
        console.log('\n1️⃣ Coletando dados...');
        const dados = window.sistemaFicha.coletarTodosDados();
        console.log('Reputação antes de salvar:', dados.atributos?.reputacao);
        
        // 2. Converter para JSON
        console.log('\n2️⃣ Convertendo para JSON...');
        const json = JSON.stringify(dados, null, 2);
        console.log('Reputação no JSON:', JSON.parse(json).atributos?.reputacao);
        
        // 3. Simular restauração
        console.log('\n3️⃣ Restaurando...');
        window.sistemaFicha.restaurarAtributos(dados.atributos);
        
        // 4. Verificar estado final
        console.log('\n4️⃣ Estado final:');
        setTimeout(() => {
            console.log('ReputacaoModal.tempValues:', window.reputacaoModal?.tempValues);
            console.log('AppState.reputation:', window.appState?.getState?.()?.reputation);
        }, 500);
    },

    /**
     * Instrução passo-a-passo
     */
    instrucoes() {
        console.log('\n\n📋 INSTRUÇÕES DE TESTE');
        console.log('═══════════════════════════════════════════════════════════════');
        console.log(`
1. Abra o modal de Reputação (Configurar Reputação)
2. Adicione valores para Mundo e Região
3. Clique em SALVAR no modal
4. Execute: window.testeReputacao.verificarEstado()
   - Verifique se tempValues está com os valores corretos

5. Execute: window.testeReputacao.testarColeta()
   - Verifique se a reputação está sendo coletada

6. Clique em "Salvar" ficha (download)
7. Abra o JSON baixado em um editor
   - Procure por "atributos": { "reputacao": ...
   - Verifique se mundo e regiao têm os valores corretos

8. Clique em "Importar" e selecione o JSON
9. Execute: window.testeReputacao.verificarEstado()
   - Verifique se foi restaurado corretamente

10. Abra o modal de Reputação novamente
    - Verifique se os valores aparecem nos inputs
        `);
    }
};

console.log('✅ Teste de Reputação carregado. Use: window.testeReputacao.instrucoes()');
