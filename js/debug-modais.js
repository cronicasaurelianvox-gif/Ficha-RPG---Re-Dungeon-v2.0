/**
 * 🐛 SCRIPT DE DEBUG - ESTADO DOS MODAIS
 * Analisa o estado real dos dados nos modais
 */

window.debugModais = {
    /**
     * Inspecciona todos os modais e seus dados
     */
    inspecionarTudo() {
        console.clear();
        console.log('═══════════════════════════════════════════════════════════════');
        console.log('🐛 DEBUG COMPLETO - ESTADO DOS MODAIS');
        console.log('═══════════════════════════════════════════════════════════════');
        
        this.inspecionarAtributosConfigModal();
        this.inspecionarStatusConfigModal();
        this.inspecionarReputacaoModal();
        this.inspecionarAppState();
        this.inspecionarPersonagem();
        
        console.log('═══════════════════════════════════════════════════════════════');
    },

    /**
     * Inspecciona AtributosConfigModal
     */
    inspecionarAtributosConfigModal() {
        console.log('\n📌 ATRIBUTOS CONFIG MODAL');
        console.log('─────────────────────────────────────────────────────────────');
        
        if (window.atributosConfigModal) {
            console.log('✅ Modal existe');
            console.log('tempValues:', window.atributosConfigModal.tempValues);
            console.log('originalValues:', window.atributosConfigModal.originalValues);
            
            // Verificar valores primários
            const attrs = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte'];
            console.log('\n📊 Primários:');
            attrs.forEach(attr => {
                const val = window.atributosConfigModal.tempValues[attr];
                console.log(`  ${attr}: ${JSON.stringify(val)}`);
            });
        } else {
            console.log('❌ Modal NÃO existe');
        }
    },

    /**
     * Inspecciona StatusConfigModal
     */
    inspecionarStatusConfigModal() {
        console.log('\n📌 STATUS CONFIG MODAL');
        console.log('─────────────────────────────────────────────────────────────');
        
        if (window.statusConfigModal) {
            console.log('✅ Modal existe');
            console.log('state:', window.statusConfigModal.state);
            console.log('state.tempValues:', window.statusConfigModal.state?.tempValues);
        } else {
            console.log('❌ Modal NÃO existe');
        }
    },

    /**
     * Inspecciona ReputacaoModal
     */
    inspecionarReputacaoModal() {
        console.log('\n📌 REPUTAÇÃO MODAL');
        console.log('─────────────────────────────────────────────────────────────');
        
        if (window.reputacaoModal) {
            console.log('✅ Modal existe');
            console.log('tempValues:', window.reputacaoModal.tempValues);
        } else {
            console.log('❌ Modal NÃO existe');
        }
    },

    /**
     * Inspecciona AppState
     */
    inspecionarAppState() {
        console.log('\n📌 APP STATE');
        console.log('─────────────────────────────────────────────────────────────');
        
        if (window.appState) {
            console.log('✅ AppState existe');
            const state = window.appState.getState?.() || window.appState.state || window.appState;
            console.log('state:', state);
            console.log('atributos.primarios:', state.atributos?.primarios);
            console.log('atributos.secundarios:', state.atributos?.secundarios);
        } else {
            console.log('❌ AppState NÃO existe');
        }
    },

    /**
     * Inspecciona elementos do Personagem
     */
    inspecionarPersonagem() {
        console.log('\n📌 PERSONAGEM (ELEMENTOS DOM)');
        console.log('─────────────────────────────────────────────────────────────');
        
        const nome = document.getElementById('personagem-nome');
        const titulo = document.getElementById('personagem-titulo');
        const classe = document.getElementById('personagem-classe');
        const raca = document.getElementById('personagem-raca');
        const imagem = document.getElementById('personagem-imagem');
        
        console.log('Nome:', nome?.textContent || 'NÃO ENCONTRADO');
        console.log('Titulo:', titulo?.textContent || 'NÃO ENCONTRADO');
        console.log('Classe:', classe?.textContent || 'NÃO ENCONTRADO');
        console.log('Raça:', raca?.textContent || 'NÃO ENCONTRADO');
        console.log('Imagem src:', imagem?.src || 'NÃO ENCONTRADO');
    },

    /**
     * Testa a coleta de atributos
     */
    testarColeta() {
        console.log('\n\n🧪 TESTANDO FUNÇÃO DE COLETA');
        console.log('═══════════════════════════════════════════════════════════════');
        
        if (window.sistemaFicha) {
            const resultado = window.sistemaFicha.coletarAtributos();
            console.log('RESULTADO coletarAtributos():', resultado);
        } else {
            console.log('❌ window.sistemaFicha não existe');
        }
    },

    /**
     * Imprime um resumo rápido
     */
    resumo() {
        console.log('\n\n📋 RESUMO RÁPIDO');
        console.log('═══════════════════════════════════════════════════════════════');
        
        const temAtributos = !!window.atributosConfigModal;
        const temStatus = !!window.statusConfigModal;
        const temReputacao = !!window.reputacaoModal;
        const temAppState = !!window.appState;
        
        console.log(`atributosConfigModal: ${temAtributos ? '✅' : '❌'}`);
        console.log(`statusConfigModal: ${temStatus ? '✅' : '❌'}`);
        console.log(`reputacaoModal: ${temReputacao ? '✅' : '❌'}`);
        console.log(`appState: ${temAppState ? '✅' : '❌'}`);
        
        console.log('\n📝 Valores primários:');
        if (temAtributos && window.atributosConfigModal.tempValues) {
            const primarios = window.atributosConfigModal.tempValues;
            console.log(`  Força: ${primarios.forca?.total || 0}`);
            console.log(`  Vitalidade: ${primarios.vitalidade?.total || 0}`);
            console.log(`  Agilidade: ${primarios.agilidade?.total || 0}`);
        }
    }
};

// Adicionar ao window global
console.log('✅ Debug Modais carregado. Use: window.debugModais.inspecionarTudo()');
