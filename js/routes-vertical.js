/* ============================================ */
/* ROUTES-VERTICAL.JS - Gerenciamento das      */
/* Rotas Verticais (Barra Lateral)             */
/* ============================================ */

/**
 * RoutesVertical
 * Responsável por:
 * - Gerenciar cliques nos botões da barra vertical
 * - Mostrar/esconder informações auxiliares
 * - Atualizar estado visual (.active-vertical)
 * - Sincronizar com o StateManager
 * - Preparado para integração com modais/popovers futuros
 */

class RoutesVertical {
    constructor() {
        this.buttonSelector = '.vertical-bar__button';
        this.activeClass = 'active-vertical';
        
        // Inicializar
        this.init();
    }

    /**
     * Inicializa os listeners
     */
    init() {
        // Selecionar todos os botões
        const buttons = document.querySelectorAll(this.buttonSelector);

        if (buttons.length === 0) {
            console.warn('RoutesVertical: Nenhum botão encontrado');
            return;
        }

        // Adicionar event listeners
        buttons.forEach(button => {
            button.addEventListener('click', (e) => this.handleButtonClick(e, button));
            button.addEventListener('keydown', (e) => this.handleButtonKeydown(e, button));
        });

        // Sincronizar com mudanças de estado
        if (window.stateManager && typeof window.stateManager.subscribe === 'function') {
            window.stateManager.subscribe((state) => {
                this.updateActiveButton(state.activeVerticalRoute);
                // ✅ NÃO disparar handleRoute ao restaurar do localStorage
                // A modal só deve abrir se o usuário clicar no botão, não automaticamente
            });
        } else {
            console.warn('RoutesVertical: stateManager não disponível');
        }

        // Definir primeiro botão como ativo por padrão
        this.setActiveRoute('info');

        console.log('✅ RoutesVertical inicializado');
    }

    /**
     * Manipula clique em um botão
     * @param {Event} event - Evento de clique
     * @param {HTMLElement} button - Elemento do botão
     */
    handleButtonClick(event, button) {
        event.preventDefault();
        const routeId = button.getAttribute('data-route-vertical');
        
        if (routeId) {
            this.setActiveRoute(routeId);
            this.handleRoute(routeId);
        }
    }

    /**
     * Manipula navegação por teclado
     * @param {KeyboardEvent} event - Evento de teclado
     * @param {HTMLElement} button - Elemento do botão
     */
    handleButtonKeydown(event, button) {
        const buttons = Array.from(document.querySelectorAll(this.buttonSelector));
        const currentIndex = buttons.indexOf(button);

        // Navegar verticalmente (setas para cima/baixo)
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const nextButton = buttons[currentIndex + 1];
            if (nextButton) {
                nextButton.focus();
                nextButton.click();
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            const prevButton = buttons[currentIndex - 1];
            if (prevButton) {
                prevButton.focus();
                prevButton.click();
            }
        } else if (event.key === 'Home') {
            event.preventDefault();
            const firstButton = buttons[0];
            if (firstButton) {
                firstButton.focus();
                firstButton.click();
            }
        } else if (event.key === 'End') {
            event.preventDefault();
            const lastButton = buttons[buttons.length - 1];
            if (lastButton) {
                lastButton.focus();
                lastButton.click();
            }
        }
    }

    /**
     * Define uma rota como ativa
     * @param {string} routeId - ID da rota (ex: 'info', 'dicas')
     */
    setActiveRoute(routeId) {
        // Atualizar estado
        if (window.stateManager && typeof window.stateManager.setActiveVerticalRoute === 'function') {
            window.stateManager.setActiveVerticalRoute(routeId);
        }

        // ✅ PERSISTIR EM LOCALSTORAGE
        if (window.localStorageManager) {
            window.localStorageManager.saveRotaVertical(routeId);
            console.log(`💾 Rota vertical salva em localStorage: ${routeId}`);
        }
    }

    /**
     * Atualiza o botão visual ativo
     * @param {string} routeId - ID da rota
     */
    updateActiveButton(routeId) {
        const buttons = document.querySelectorAll(this.buttonSelector);

        buttons.forEach(button => {
            const buttonRoute = button.getAttribute('data-route-vertical');
            
            if (buttonRoute === routeId) {
                button.classList.add(this.activeClass);
                button.setAttribute('aria-selected', 'true');
            } else {
                button.classList.remove(this.activeClass);
                button.setAttribute('aria-selected', 'false');
            }
        });
    }

    /**
     * Lógica futura para diferentes rotas
     * Preparado para modais, popovers, painéis, etc.
     * @param {string} routeId - ID da rota
     */
    handleRoute(routeId) {
        // Placeholder para lógica futura
        // Aqui serão implementadas ações específicas para cada rota
        
        switch (routeId) {
            case 'info':
                this.showInfo();
                break;
            case 'dicas':
                this.showTips();
                break;
            case 'aptidao':
                this.showAptidoes();
                break;
            case 'itens':
                this.showItens();
                break;
            case 'classes':
                this.showClasses();
                break;
            case 'racas':
                this.showRacas();
                break;
            case 'condicoes':
                this.showCondicoes();
                break;
            case 'sorte':
                this.showSorte();
                break;
            case 'salvar':
                this.saveCharacter();
                break;
            default:
                console.warn(`Rota vertical desconhecida: ${routeId}`);
        }
    }

    /**
     * Lógica futura: Mostrar informações
     */
    showInfo() {
        // TODO: Implementar lógica de exibição de informações
        console.log('📋 Info clicado');
    }

    /**
     * Lógica futura: Mostrar dicas
     */
    showTips() {
        // Abrir Códex Mágico
        if (window.codexMagico && typeof window.codexMagico.open === 'function') {
            window.codexMagico.open();
            console.log('📖 Códex Mágico aberto');
        } else {
            console.warn('⚠️ CodexMagico não disponível');
        }
    }

    /**
     * Mostrar aptidões - Abre popup visual de enciclopédia
     */
    showAptidoes() {
        // Abrir popup visual isolado
        if (window.aptidoesVisualPopup && typeof window.aptidoesVisualPopup.open === 'function') {
            window.aptidoesVisualPopup.open();
            console.log('📖 Enciclopédia de Aptidões aberta');
        } else {
            console.warn('⚠️ AptidoesVisualPopup não disponível');
        }
    }

    /**
     * Lógica futura: Mostrar itens
     */
    showItens() {
        // TODO: Implementar lógica de exibição de itens
        console.log('🎒 Itens clicado');
    }

    /**
     * Lógica futura: Mostrar classes
     */
    showClasses() {
        // TODO: Implementar lógica de exibição de classes
        console.log('🛡️ Classes clicado');
    }

    /**
     * Lógica futura: Mostrar raças
     */
    showRacas() {
        // TODO: Implementar lógica de exibição de raças
        console.log('👑 Raças clicado');
    }

    /**
     * Mostrar condições
     */
    showCondicoes() {
        if (window.sistemaCondicoes && typeof window.sistemaCondicoes.abrirPopup === 'function') {
            window.sistemaCondicoes.abrirPopup();
            console.log('⚠️ Sistema de Condições aberto');
        } else {
            console.warn('⚠️ Sistema de Condições não disponível');
        }
    }

    /**
     * Mostrar sorte
     */
    showSorte() {
        // Abrir modal de Sorte
        if (window.sorteModal && typeof window.sorteModal.abrirModal === 'function') {
            window.sorteModal.abrirModal();
            console.log('🎲 Modal de Sorte aberto');
        } else {
            console.warn('⚠️ Modal de Sorte não disponível');
        }
    }

    /**
     * Salva o personagem (sincroniza IndexedDB com localStorage)
     */
    async saveCharacter() {
        console.log('💾 [RoutesVertical] Iniciando salvatório do personagem...');

        try {
            // 1. Coletar dados dos atributos
            const atributosData = window.atributosManager?.personagemData || {};
            console.log('📦 Atributos coletados:', atributosData);

            // 2. Coletar dados dos status
            const statusData = window.statusBarsManager?.state || {};
            console.log('📦 Status coletados:', statusData);

            // 3. Coletar informações do jogador
            const jogadorInfo = window.stateManager?.getJogadorInfo?.() || {};
            console.log('📦 Jogador info coletado:', jogadorInfo);

            // 4. Coletar dados de reputação
            const state = window.stateManager?.getState?.() || {};
            const reputacao = {
                mundo: state.reputacao?.mundo || 0,
                regiao: state.reputacao?.regiao || 0
            };
            console.log('📦 Reputação coletada:', reputacao);

            // 5. Coletar aptidões do IndexedDB
            let aptidoesData = {
                personagem: [],
                ganhas: 0
            };

            if (window.aptidoesManager && window.aptidoesDB) {
                try {
                    console.log('🔄 Coletando aptidões do AptidoesManager...');
                    aptidoesData.personagem = window.aptidoesManager.aptidoesPersonagem || [];
                    aptidoesData.ganhas = window.aptidoesManager.configAptidoes?.ganhas || 0;
                    console.log(`📦 Aptidões coletadas: ${aptidoesData.personagem.length} aptidões, ${aptidoesData.ganhas} ganhas`);
                } catch (e) {
                    console.warn('⚠️ Erro ao coletar aptidões:', e);
                }
            } else {
                console.warn('⚠️ AptidoesManager ou AptidoesDB não disponível');
            }

            // 6. Montar estrutura completa para salvar
            const dataToSave = {
                atributos: {
                    primarios: atributosData.atributosPrimarios || {},
                    secundarios: atributosData.atributosSecundarios || {}
                },
                status: {
                    hp: {
                        atual: statusData.hp?.current || 0,
                        maximo: statusData.hp?.max || 101
                    },
                    energia: {
                        atual: statusData.energy?.current || 0,
                        maximo: statusData.energy?.max || 101
                    },
                    fadiga: {
                        atual: statusData.fatigue?.current || 0,
                        maximo: statusData.fatigue?.max || 101
                    }
                },
                reputacao: reputacao,
                jogadorInfo: jogadorInfo,
                aptidoes: aptidoesData
            };

            // ⚠️ PERSISTÊNCIA DESABILITADA - Sistema funciona apenas em RAM

        } catch (error) {
            console.error('❌ ERRO ao salvar personagem:', error);
            alert('❌ Erro ao salvar: ' + error.message);
        }
    }

    /**
     * Loga informações de debug
     */
    debug() {
        if (!window.stateManager) {
            console.warn('stateManager não disponível');
            return;
        }
        const activeRoute = window.stateManager.getActiveVerticalRoute();
        console.log(`📊 Rota Vertical Ativa: ${activeRoute}`);
    }
}

/**
 * Inicializar quando o DOM estiver pronto
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.routesVertical = new RoutesVertical();
    });
} else {
    // DOM já está pronto
    window.routesVertical = new RoutesVertical();
}
