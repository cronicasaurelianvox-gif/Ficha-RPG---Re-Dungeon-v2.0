/* ════════════════════════════════════════════════════════════════════════════════ */
/* MANAGER-REGISTRATION.JS - Registro de Managers com StateSynchronization          */
/* ════════════════════════════════════════════════════════════════════════════════ */

/**
 * 🎯 REGISTRO DE MANAGERS
 * 
 * Este script registra todos os managers com o StateSynchronization
 * Deve ser carregado DEPOIS de todos os managers
 * 
 * Cada manager deve ter:
 * - getState() - retorna seu estado atual
 * - setState(estado) - carrega um novo estado
 * - render() - re-renderiza interface
 */

console.log('\n📝 AGUARDANDO MANAGERS E SYNCHRONIZATION...\n');

// Aguarda 500ms para garantir que todos os scripts foram carregados
setTimeout(() => {
    console.log('\n📝 REGISTRANDO MANAGERS COM SYNCHRONIZATION...\n');

    if (!window.stateSynchronization) {
        console.error('❌ StateSynchronization não está disponível');
        return;
    }

/**
 * ATRIBUTOS MANAGER
 */
if (window.atributosManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('atributosManager', window.atributosManager, {
        statePath: 'personagem.atributosPrimarios',
        getState: function() {
            // Retornar estado atual dos atributos
            return {
                forca: { base: this.personagemData?.atributos?.forca?.base || 10, extra: 0, total: 0, bonus: 0 },
                agilidade: { base: this.personagemData?.atributos?.agilidade?.base || 10, extra: 0, total: 0, bonus: 0 },
                resistencia: { base: this.personagemData?.atributos?.resistencia?.base || 10, extra: 0, total: 0, bonus: 0 },
                inteligencia: { base: this.personagemData?.atributos?.inteligencia?.base || 10, extra: 0, total: 0, bonus: 0 },
                sabedoria: { base: this.personagemData?.atributos?.sabedoria?.base || 10, extra: 0, total: 0, bonus: 0 },
                carisma: { base: this.personagemData?.atributos?.carisma?.base || 10, extra: 0, total: 0, bonus: 0 }
            };
        },
        setState: function(estado) {
            if (this.personagemData && this.personagemData.atributos) {
                Object.assign(this.personagemData.atributos, estado);
            }
        },
        render: function() {
            if (this.renderizarAtributos) {
                this.renderizarAtributos();
                this.renderizarPersonagem();
            }
        }
    });
    console.log('✅ atributosManager registrado');
}

/**
 * STATUS BARS MANAGER
 */
if (window.statusBarsManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('statusBarsManager', window.statusBarsManager, {
        statePath: 'personagem.status',
        getState: function() {
            return {
                saude: this.state?.hp || { atual: 100, maxima: 100, percentual: 100 },
                energia: this.state?.energia || { atual: 50, maxima: 50, percentual: 100 },
                fadiga: this.state?.fadiga || { atual: 0, maxima: 100, percentual: 0 }
            };
        },
        setState: function(estado) {
            if (this.state) {
                this.state.hp = estado.saude;
                this.state.energia = estado.energia;
                this.state.fadiga = estado.fadiga;
            }
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ statusBarsManager registrado');
}

/**
 * APTIDÕES MANAGER
 */
if (window.aptidoesManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('aptidoesManager', window.aptidoesManager, {
        statePath: 'personagem.aptidoes',
        getState: function() {
            return {
                lista: this.aptidoesPersonagem || [],
                ganhas: this.configAptidoes?.ganhas || 0,
                maximo: this.configAptidoes?.maximo || 6,
                atributoProxima: this.configAptidoes?.atributoProxima || 10,
                bonusOpcionais: this.configAptidoes?.bonusOpcionais || {}
            };
        },
        setState: function(estado) {
            this.aptidoesPersonagem = estado.lista;
            if (this.configAptidoes) {
                this.configAptidoes.ganhas = estado.ganhas;
                this.configAptidoes.maximo = estado.maximo;
                this.configAptidoes.atributoProxima = estado.atributoProxima;
                this.configAptidoes.bonusOpcionais = estado.bonusOpcionais;
            }
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ aptidoesManager registrado');
}

/**
 * ARTS MANAGER
 */
if (window.artsManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('artsManager', window.artsManager, {
        statePath: 'personagem.habilidades',
        getState: function() {
            return {
                lista: this.personagemArts || [],
                ativas: this.artsAtivas || [],
                categoriasDisponiveis: this.categoriasDisponiveis || {}
            };
        },
        setState: function(estado) {
            this.personagemArts = estado.lista;
            this.artsAtivas = estado.ativas;
            this.categoriasDisponiveis = estado.categoriasDisponiveis;
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ artsManager registrado');
}

/**
 * INVENTÁRIO MANAGER
 */
if (window.inventarioManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('inventarioManager', window.inventarioManager, {
        statePath: 'personagem.inventario',
        getState: function() {
            return {
                itens: this.itens || [],
                armazenamentos: this.armazenamentos || [],
                capacidadeTotal: this.capacidadeTotal || 0,
                espacoUsado: this.espacoUsado || 0,
                espacoLivre: this.espacoLivre || 0,
                pesoPorItem: this.pesoPorItem || {},
                raridades: this.raridades || {}
            };
        },
        setState: function(estado) {
            this.itens = estado.itens;
            this.armazenamentos = estado.armazenamentos;
            this.capacidadeTotal = estado.capacidadeTotal;
            this.espacoUsado = estado.espacoUsado;
            this.espacoLivre = estado.espacoLivre;
            this.pesoPorItem = estado.pesoPorItem;
            this.raridades = estado.raridades;
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ inventarioManager registrado');
}

/**
 * TREINAMENTO MANAGER
 */
if (window.treinamentoManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('treinamentoManager', window.treinamentoManager, {
        statePath: 'personagem.treinamento',
        getState: function() {
            // Obter dados de treinamento do appState
            if (window.appState) {
                const state = window.appState.getState();
                return state.treinamento || {
                    atributos: {
                        forca: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 },
                        vitalidade: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 },
                        agilidade: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 },
                        percepcao: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 },
                        inteligencia: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 },
                        sorte: { nivel: 0, xpAtual: 0, xpNecessaria: 10, obstaculoAtual: 5 }
                    },
                    historico: []
                };
            }
            return {};
        },
        setState: function(estado) {
            // Carregar dados de treinamento no appState
            if (window.appState) {
                window.appState.setState({ treinamento: estado });
                console.log('💾 Dados de treinamento carregados do GlobalState');
            }
        },
        render: function() {
            // Re-renderizar interface de treinamento
            if (this.renderizarAtributos) {
                this.renderizarAtributos();
            }
        }
    });
    console.log('✅ treinamentoManager registrado');
}

/**
 * COMPANHEIROS MANAGER
 */
if (window.companheirosManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('companheirosManager', window.companheirosManager, {
        statePath: 'companheiros',
        getState: function() {
            return {
                lista: this.companheiros || [],
                totalCompanheiros: (this.companheiros || []).length,
                ativoAtual: this.ativoAtual || null
            };
        },
        setState: function(estado) {
            this.companheiros = estado.lista;
            this.ativoAtual = estado.ativoAtual;
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ companheirosManager registrado');
}

/**
 * CULTIVAÇÃO MANAGER
 */
/**
 * CULTIVAÇÃO MANAGER
 * Sincroniza dados de cultivação (alma, dantian, meridianos, técnica, mar espiritual, XP dos mundos)
 */
if (window.cultivacao && window.cultivacao.dados && window.stateSynchronization) {
    window.stateSynchronization.registerManager('cultivacaoDados', window.cultivacao.dados, {
        statePath: 'cultivacao',
        getState: function() {
            // Retornar estado completo de cultivação
            return this.dados || {
                mundo_ativo: 'elder-gods',
                universal: {
                    alma: { atual: 0, maximo: 100 },
                    dantian: { atual: 0, maximo: 50 },
                    meridianos: { limpos: 0, maximo: 314, principais_limpos: 0, principais_maximo: 12 },
                    tecnica: { nome: '', tipo_energia: '', descricao: '', concentracao: '', dado: '' },
                    mar_espiritual: { estado: 'Sereno', tamanho: 0, elemento: 'agua', densidade: 0, descricao: '' }
                },
                elder_gods: { rank: 1, nome_rank: '', nivel: 1, xp_atual: 0, xp_necessario: 100, xp_total: 0 },
                boreal_line: { rank: 1, nome_rank: '', sub_rank: 0, nome_sub_rank: '', fragmentos: 0, qi_acumulado: 0, mana: 0, estagio_mana: '' },
                murim: { rank: 1, nome_rank: '', qi_acumulado: 0, estagio: '', xp_atual: 0, xp_necessario: 100, xp_total: 0 }
            };
        },
        setState: function(estado) {
            // Carregar dados de cultivação
            this.dados = estado;
            // Salvar também no localStorage interno
            if (this.salvar) {
                this.salvar();
            }
            console.log('💾 Dados de cultivação carregados');
        },
        render: function() {
            // Re-renderizar UI de cultivação se disponível
            if (window.cultivacao && window.cultivacao.ui && window.cultivacao.ui.atualizar_ui) {
                window.cultivacao.ui.atualizar_ui();
                console.log('🎨 UI de cultivação re-renderizada');
            }
        }
    });
    console.log('✅ cultivacaoDados registrado');
} else if (!window.cultivacao) {
    console.warn('⚠️ window.cultivacao não encontrado ainda, será registrado mais tarde');
}

/**
 * CORPO IMORTAL MANAGER
 */
if (window.corpoImortalUI && window.corpoImortalUI.dados && window.stateSynchronization) {
    const corpoImortalDados = window.corpoImortalUI.dados;
    window.stateSynchronization.registerManager('corpoImortalManager', corpoImortalDados, {
        statePath: 'corpoImortal',
        getState: function() {
            return this.dados || this.dadosPadrao();
        },
        setState: function(estado) {
            this.dados = estado;
            this.salvar();
        },
        render: function() {
            if (window.corpoImortalUI && window.corpoImortalUI.atualizarUI) {
                window.corpoImortalUI.atualizarUI();
            }
        }
    });
    console.log('✅ corpoImortalManager registrado');
} else if (!window.corpoImortalUI) {
    console.warn('⚠️ window.corpoImortalUI não encontrado ainda, será registrado mais tarde');
}

/**
 * REPUTAÇÃO MANAGER
 */
if (window.reputacaoManager && window.stateSynchronization) {
    window.stateSynchronization.registerManager('reputacaoManager', window.reputacaoManager, {
        statePath: 'reputacao',
        getState: function() {
            return this.dados || {};
        },
        setState: function(estado) {
            this.dados = estado;
        },
        render: function() {
            if (this.render) {
                this.render();
            }
        }
    });
    console.log('✅ reputacaoManager registrado');
}

/**
 * RAÇAS MANAGER
 * Sincroniza seleção de raça do localStorage para GlobalState
 */
if (window.racasUI && window.stateSynchronization) {
    window.stateSynchronization.registerManager('racasUI', window.racasUI, {
        statePath: 'personagem.info.raca',
        getState: function() {
            // Lê raça do localStorage
            try {
                const racaSalva = localStorage.getItem('redungeon_raca_selecionada');
                return racaSalva || 'Humano';
            } catch (e) {
                console.warn('⚠️ Erro ao ler raça do localStorage:', e);
                return 'Humano';
            }
        },
        setState: function(estado) {
            // Escreve raça no localStorage e atualiza UI
            try {
                localStorage.setItem('redungeon_raca_selecionada', estado);
                console.log(`💾 Raça "${estado}" carregada no UI`);
            } catch (e) {
                console.warn('⚠️ Erro ao salvar raça no localStorage:', e);
            }
        },
        render: function() {
            // Raças UI não precisa de render especial
            // As mudanças já são refletidas no localStorage
        }
    });
    console.log('✅ racasUI registrado');
}

/**
 * CLASSES MANAGER
 * Sincroniza seleção de classes do localStorage para GlobalState
 */
if (window.classesUI && window.stateSynchronization) {
    window.stateSynchronization.registerManager('classesUI', window.classesUI, {
        statePath: 'personagem.info.classe',
        getState: function() {
            // Lê classes do localStorage (array)
            try {
                const classesSalvas = localStorage.getItem('redungeon_classes_selecionadas');
                if (classesSalvas) {
                    const arr = JSON.parse(classesSalvas);
                    return arr.length > 0 ? arr : ['Guerreiro'];
                }
                return ['Guerreiro'];
            } catch (e) {
                console.warn('⚠️ Erro ao ler classes do localStorage:', e);
                return ['Guerreiro'];
            }
        },
        setState: function(estado) {
            // Escreve classes no localStorage (array)
            try {
                const arr = Array.isArray(estado) ? estado : [estado];
                localStorage.setItem('redungeon_classes_selecionadas', JSON.stringify(arr));
                console.log(`💾 Classes [${arr.join(', ')}] carregadas no UI`);
            } catch (e) {
                console.warn('⚠️ Erro ao salvar classes no localStorage:', e);
            }
        },
        render: function() {
            // Classes UI não precisa de render especial
            // As mudanças já são refletidas no localStorage
        }
    });
    console.log('✅ classesUI registrado');
}

console.log('\n✅ REGISTRO DE MANAGERS CONCLUÍDO\n');

}, 500); // Fim do setTimeout
