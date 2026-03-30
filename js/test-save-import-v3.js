/* ════════════════════════════════════════════════════════════════════════════════ */
/* TEST-SAVE-IMPORT-V3.JS - Testes Automatizados do Sistema V3.0                    */
/* ════════════════════════════════════════════════════════════════════════════════ */

/**
 * 🧪 TESTES AUTOMATIZADOS PARA SISTEMA V3.0
 * 
 * Executar no console do navegador:
 * 
 * // Executar todos os testes
 * window.testSaveImportV3.executarTodosTestes();
 * 
 * // Executar teste específico
 * window.testSaveImportV3.testarGlobalState();
 * window.testSaveImportV3.testarSalvamento();
 * window.testSaveImportV3.testarImportacao();
 */

class TestSaveImportV3 {
    constructor() {
        this.resultados = [];
        this.passados = 0;
        this.falhados = 0;
    }

    /**
     * Executar todos os testes
     */
    async executarTodosTestes() {
        console.log('\n' + '═'.repeat(80));
        console.log('🧪 INICIANDO TESTES DO SISTEMA V3.0');
        console.log('═'.repeat(80) + '\n');

        try {
            await this.testarGlobalState();
            await this.testarSalvamento();
            await this.testarImportacao();
            await this.testarValidacao();
            await this.testarIntegracao();
            
            this.exibirRelatorioFinal();
        } catch (erro) {
            console.error('❌ Erro crítico nos testes:', erro);
        }
    }

    /**
     * Teste 1: GlobalState
     */
    async testarGlobalState() {
        console.log('\n📋 TESTE 1: Global State');
        console.log('─'.repeat(80));

        try {
            // Verificar se existe
            this.assert(
                window.globalState !== undefined,
                'GlobalState deve existir'
            );

            // Verificar estrutura
            this.assert(
                window.globalState.state !== undefined,
                'GlobalState.state deve existir'
            );

            // Verificar meta
            this.assert(
                window.globalState.state.meta !== undefined,
                'Meta deve existir'
            );

            // Verificar versão
            this.assert(
                window.globalState.state.meta.versaoSistema === '3.0.0',
                'Versão deve ser 3.0.0'
            );

            // Verificar personagem
            this.assert(
                window.globalState.state.personagem !== undefined,
                'Personagem deve existir'
            );

            // Verificar atributos primários
            this.assert(
                Object.keys(window.globalState.state.personagem.atributosPrimarios).length > 0,
                'Atributos primários devem existir'
            );

            // Verificar métodos
            this.assert(
                typeof window.globalState.getState === 'function',
                'Método getState deve existir'
            );

            this.assert(
                typeof window.globalState.updatePart === 'function',
                'Método updatePart deve existir'
            );

            this.assert(
                typeof window.globalState.loadState === 'function',
                'Método loadState deve existir'
            );

            console.log('✅ TESTE 1 PASSADO\n');
        } catch (erro) {
            console.error('❌ TESTE 1 FALHOU:', erro.message, '\n');
        }
    }

    /**
     * Teste 2: Salvamento
     */
    async testarSalvamento() {
        console.log('\n💾 TESTE 2: Salvamento');
        console.log('─'.repeat(80));

        try {
            // Verificar se existe
            this.assert(
                window.saveSystemV3 !== undefined,
                'SaveSystemV3 deve existir'
            );

            // Verificar métodos
            this.assert(
                typeof window.saveSystemV3.sincronizarDados === 'function',
                'Método sincronizarDados deve existir'
            );

            this.assert(
                typeof window.saveSystemV3.gerarJSON === 'function',
                'Método gerarJSON deve existir'
            );

            // Testar sincronização
            window.saveSystemV3.sincronizarDados();
            console.log('  ✓ Sincronização executada com sucesso');

            // Testar geração de JSON
            const json = window.saveSystemV3.gerarJSON();
            this.assert(
                json !== undefined && json.length > 0,
                'JSON gerado deve ter conteúdo'
            );

            // Validar JSON
            const dados = JSON.parse(json);
            this.assert(
                dados.meta !== undefined,
                'JSON deve conter meta'
            );

            this.assert(
                dados.personagem !== undefined,
                'JSON deve conter personagem'
            );

            // Validar tamanho
            const tamanhoKB = (json.length / 1024).toFixed(2);
            console.log(`  ✓ Tamanho do JSON: ${tamanhoKB} KB`);

            console.log('✅ TESTE 2 PASSADO\n');
        } catch (erro) {
            console.error('❌ TESTE 2 FALHOU:', erro.message, '\n');
        }
    }

    /**
     * Teste 3: Importação
     */
    async testarImportacao() {
        console.log('\n📥 TESTE 3: Importação');
        console.log('─'.repeat(80));

        try {
            // Verificar se existe
            this.assert(
                window.importSystemV3 !== undefined,
                'ImportSystemV3 deve existir'
            );

            // Verificar métodos
            this.assert(
                typeof window.importSystemV3.validarEstrutura === 'function',
                'Método validarEstrutura deve existir'
            );

            this.assert(
                typeof window.importSystemV3.rerenderizarInterface === 'function',
                'Método rerenderizarInterface deve existir'
            );

            // Criar arquivo de teste
            const arquivoTeste = window.globalState.getState();
            arquivoTeste.personagem.info.nome = 'Teste Importação';

            // Testar validação
            window.importSystemV3.validarEstrutura(arquivoTeste);
            console.log('  ✓ Validação de estrutura passou');

            console.log('✅ TESTE 3 PASSADO\n');
        } catch (erro) {
            console.error('❌ TESTE 3 FALHOU:', erro.message, '\n');
        }
    }

    /**
     * Teste 4: Validação
     */
    async testarValidacao() {
        console.log('\n🛡️ TESTE 4: Validação de Arquivo');
        console.log('─'.repeat(80));

        try {
            const validarCampo = (objeto, caminho, descricao) => {
                const partes = caminho.split('.');
                let valor = objeto;
                for (const parte of partes) {
                    valor = valor?.[parte];
                }
                this.assert(valor !== undefined && valor !== null, descricao);
            };

            const estado = window.globalState.getState();

            // Validar meta
            validarCampo(estado, 'meta.versaoSistema', 'Meta: versão');
            validarCampo(estado, 'meta.formato', 'Meta: formato');

            // Validar personagem
            validarCampo(estado, 'personagem.info.nome', 'Personagem: nome');
            validarCampo(estado, 'personagem.atributosPrimarios', 'Personagem: atributos');
            validarCampo(estado, 'personagem.status.saude', 'Personagem: saúde');

            // Validar sistemas
            validarCampo(estado, 'cultivacao', 'Cultivação existe');
            validarCampo(estado, 'corpoImortal', 'Corpo Imortal existe');
            validarCampo(estado, 'reputacao', 'Reputação existe');
            validarCampo(estado, 'companheiros', 'Companheiros existe');

            console.log('✅ TESTE 4 PASSADO\n');
        } catch (erro) {
            console.error('❌ TESTE 4 FALHOU:', erro.message, '\n');
        }
    }

    /**
     * Teste 5: Integração
     */
    async testarIntegracao() {
        console.log('\n🔗 TESTE 5: Integração com Managers');
        console.log('─'.repeat(80));

        try {
            const managers = [
                { nome: 'AtributosManager', obj: 'atributosManager' },
                { nome: 'AptidoesManager', obj: 'aptidoesManager' },
                { nome: 'StatusBarsManager', obj: 'statusBarsManager' },
                { nome: 'InventarioManager', obj: 'inventarioManager' },
                { nome: 'CompanheirosManager', obj: 'companheirosManager' }
            ];

            let encontrados = 0;
            for (const manager of managers) {
                if (window[manager.obj] !== undefined) {
                    console.log(`  ✓ ${manager.nome} encontrado`);
                    encontrados++;
                } else {
                    console.log(`  ⚠️ ${manager.nome} não carregado`);
                }
            }

            this.assert(
                encontrados > 0,
                `Pelo menos ${encontrados} managers devem estar carregados`
            );

            console.log(`✅ TESTE 5 PASSADO (${encontrados} managers encontrados)\n`);
        } catch (erro) {
            console.error('❌ TESTE 5 FALHOU:', erro.message, '\n');
        }
    }

    /**
     * Função auxiliar para asserções
     */
    assert(condicao, mensagem) {
        if (condicao) {
            console.log(`  ✓ ${mensagem}`);
            this.passados++;
            this.resultados.push({ tipo: 'PASSOU', mensagem });
        } else {
            console.error(`  ❌ ${mensagem}`);
            this.falhados++;
            this.resultados.push({ tipo: 'FALHOU', mensagem });
            throw new Error(mensagem);
        }
    }

    /**
     * Exibir relatório final
     */
    exibirRelatorioFinal() {
        console.log('\n' + '═'.repeat(80));
        console.log('📊 RELATÓRIO FINAL DOS TESTES');
        console.log('═'.repeat(80));
        console.log(`\n✅ Testes Passados: ${this.passados}`);
        console.log(`❌ Testes Falhados: ${this.falhados}`);
        console.log(`📈 Taxa de Sucesso: ${((this.passados / (this.passados + this.falhados)) * 100).toFixed(2)}%`);
        console.log('\n' + '═'.repeat(80) + '\n');

        if (this.falhados === 0) {
            console.log('🎉 TODOS OS TESTES PASSARAM! Sistema V3.0 está funcionando corretamente.');
        } else {
            console.log('⚠️ Alguns testes falharam. Verifique os erros acima.');
        }
    }

    /**
     * Teste de ciclo completo (salvar + importar)
     */
    async testarCicloCompleto() {
        console.log('\n🔄 TESTE EXTRA: Ciclo Completo (Salvar + Importar)');
        console.log('─'.repeat(80));

        try {
            // Modificar um dado
            const nomeOriginal = window.globalState.state.personagem.info.nome;
            window.globalState.state.personagem.info.nome = 'Teste Ciclo';

            // Salvar
            const json = window.saveSystemV3.gerarJSON();
            const dadosSalvos = JSON.parse(json);

            // Verificar se foi salvo
            this.assert(
                dadosSalvos.personagem.info.nome === 'Teste Ciclo',
                'Nome deve ser salvo como "Teste Ciclo"'
            );

            // Modificar novamente
            window.globalState.state.personagem.info.nome = 'Outro Nome';

            // Importar
            window.globalState.loadState(dadosSalvos);

            // Verificar se foi restaurado
            this.assert(
                window.globalState.state.personagem.info.nome === 'Teste Ciclo',
                'Nome deve ser restaurado como "Teste Ciclo" após importar'
            );

            // Restaurar original
            window.globalState.state.personagem.info.nome = nomeOriginal;

            console.log('✅ TESTE EXTRA PASSADO\n');
        } catch (erro) {
            console.error('❌ TESTE EXTRA FALHOU:', erro.message, '\n');
        }
    }
}

/**
 * Instância global para testes
 */
if (typeof window !== 'undefined') {
    window.testSaveImportV3 = new TestSaveImportV3();
    console.log('✅ TestSaveImportV3 carregado. Use: window.testSaveImportV3.executarTodosTestes()');
}
