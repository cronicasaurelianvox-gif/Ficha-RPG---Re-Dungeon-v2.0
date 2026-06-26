/**
 * HANDLER DA MODAL VEIAS ASTRAIS
 * Gerencia abertura, fechamento e controle do modal
 */

class VeiasAstraisModal {
    constructor() {
        this.modal = document.getElementById('veias-astrais-modal');
        this.backdrop = document.querySelector('.veias-astrais-backdrop');
        this.btnOpen = document.getElementById('veias-astrais-btn');
        this.btnClose = document.getElementById('btn-veias-astrais-fechar');
        this.detailCloseBtn = document.getElementById('close-detail-btn');
        
        this.system = null;
        
        this.init();
    }

    init() {
        if (this.btnOpen) {
            this.btnOpen.addEventListener('click', () => this.open());
        }

        if (this.btnClose) {
            this.btnClose.addEventListener('click', () => this.close());
        }

        if (this.detailCloseBtn) {
            this.detailCloseBtn.addEventListener('click', () => this.closeDetailPanel());
        }

        if (this.backdrop) {
            this.backdrop.addEventListener('click', () => this.close());
        }

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        });

        // Inicializar listeners de dica
        this.setupDicaListeners();

        console.log('✨ VeiasAstraisModal inicializado');
    }

    /**
     * Configurar listeners do modal de dica
     */
    setupDicaListeners() {
        const btnEntendi = document.getElementById('btn-entendi-dica-veias');
        const btnFechar = document.getElementById('btn-fechar-dica-veias');
        const chkNaoMostrar = document.getElementById('chk-nao-mostrar-dica-veias');

        if (btnEntendi) {
            btnEntendi.addEventListener('click', () => {
                this.fecharDicaEAbrirModal(chkNaoMostrar);
            });
        }

        if (btnFechar) {
            btnFechar.addEventListener('click', () => {
                this.fecharDicaEAbrirModal(chkNaoMostrar);
            });
        }
    }

    /**
     * Fechar dica e abrir modal principal
     */
    fecharDicaEAbrirModal(chkNaoMostrar) {
        const modalDica = document.getElementById('modalDicaVeiasAstrais');
        if (modalDica) {
            modalDica.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Salvar preferência de não mostrar novamente
        if (chkNaoMostrar && chkNaoMostrar.checked) {
            localStorage.setItem('nao-mostrar-dica-veias-astrais', 'true');
            console.log('✅ Preferência salva: dica de Veias Astrais não será mostrada novamente');
        }

        // Abrir modal de Veias Astrais
        if (this.modal) {
            this.modal.classList.remove('hidden');
            
            // Inicializar sistema na primeira abertura (defensivo: usar init se classe ainda não estiver disponível)
            if (!this.system) {
                if (typeof VeiasAstraisSystem === 'function') {
                    this.system = new VeiasAstraisSystem();
                    setTimeout(() => this.system.open(), 100);
                } else if (window.initVeiasAstrais) {
                    this.system = window.initVeiasAstrais();
                    setTimeout(() => this.system.open(), 100);
                } else {
                    // Caso o script ainda não tenha sido carregado, tentar novamente em 200ms
                    setTimeout(() => {
                        if (window.initVeiasAstrais) {
                            this.system = window.initVeiasAstrais();
                            this.system.open();
                        } else {
                            console.warn('⚠️ VeiasAstraisSystem não disponível no momento');
                        }
                    }, 200);
                }
            } else {
                this.system.updateUI();
            }

            // Forçar foco
            this.modal.focus();
        }
    }

    open() {
        // ✨ NOVO: Verificar se deve mostrar dica
        const naoMostrarDica = localStorage.getItem('nao-mostrar-dica-veias-astrais') === 'true';
        
        if (!naoMostrarDica) {
            // Mostrar dica primeiro
            this.mostrarDicaVeiasAstrais();
        } else {
            // Se não mostrar dica, abrir modal diretamente
            this.abrirModalDiretamente();
        }
    }

    /**
     * Mostrar modal de dica para Veias Astrais
     */
    mostrarDicaVeiasAstrais() {
        const modalDica = document.getElementById('modalDicaVeiasAstrais');
        if (!modalDica) {
            console.warn('⚠️ Modal de dica de Veias Astrais não encontrado');
            this.abrirModalDiretamente();
            return;
        }

        // Mostrar modal de dica
        modalDica.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    /**
     * Abrir modal de Veias Astrais diretamente
     */
    abrirModalDiretamente() {
        if (this.modal) {
            this.modal.classList.remove('hidden');
            
            // Inicializar sistema na primeira abertura (defensivo)
            if (!this.system) {
                if (typeof VeiasAstraisSystem === 'function') {
                    this.system = new VeiasAstraisSystem();
                    setTimeout(() => this.system.open(), 100);
                } else if (window.initVeiasAstrais) {
                    this.system = window.initVeiasAstrais();
                    setTimeout(() => this.system.open(), 100);
                } else {
                    setTimeout(() => {
                        if (window.initVeiasAstrais) {
                            this.system = window.initVeiasAstrais();
                            this.system.open();
                        } else {
                            console.warn('⚠️ VeiasAstraisSystem não disponível no momento');
                        }
                    }, 200);
                }
            } else {
                this.system.updateUI();
            }

            // Forçar foco
            this.modal.focus();
        }
    }

    close() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            if (this.system) {
                this.system.close();
            }
        }
    }

    closeDetailPanel() {
        const panel = document.getElementById('node-detail-panel');
        if (panel) {
            panel.classList.add('hidden');
        }
    }
}

// Inicializar ao carregar documento
document.addEventListener('DOMContentLoaded', () => {
    new VeiasAstraisModal();
});

// Exportar para uso global
window.VeiasAstraisModal = VeiasAstraisModal;
