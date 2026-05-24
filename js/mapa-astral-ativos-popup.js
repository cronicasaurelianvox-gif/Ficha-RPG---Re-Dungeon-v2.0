/* =========================================================================
   POPUP PREMIUM - ATIVOS DO MAPA ASTRAL
   JavaScript - Lógica e Controle
   ========================================================================= */

class MapaAstralAtivosPopup {
    constructor() {
        this.overlay = document.getElementById('mapa-astral-ativos-overlay');
        this.modal = document.getElementById('mapa-astral-ativos-modal');
        this.closeBtn = document.getElementById('mapa-astral-ativos-close');
        this.ativosBtn = document.getElementById('ativos-btn');
        
        this.isOpen = false;
        this.isAnimating = false;
        this.attributesData = {
            principais: [
                { id: 'forca', icon: '⚔', name: 'FORÇA', value: 0, desc: 'Aumenta o dano físico e a capacidade de carga.' },
                { id: 'vitalidade', icon: '🌿', name: 'VITALIDADE', value: 0, desc: 'Aumenta a vida máxima e a resistência.' },
                { id: 'agilidade', icon: '🪶', name: 'AGILIDADE', value: 0, desc: 'Aumenta a velocidade e a esquiva.' },
                { id: 'inteligencia', icon: '📘', name: 'INTELIGÊNCIA', value: 0, desc: 'Aumenta o dano mágico e a mana máxima.' },
                { id: 'percepcao', icon: '👁', name: 'PERCEPÇÃO', value: 0, desc: 'Aumenta a precisão e o alcance de visão.' },
                { id: 'sorte', icon: '✦', name: 'SORTE', value: 0, desc: 'Aumenta a chance de crítico e eventos positivos.' }
            ],
            secundarios: [
                { icon: '⚡', name: 'PRONTIDÃO', value: 0, desc: 'Aumenta a rapidez ao iniciar ações.' },
                { icon: '🔱', name: 'ATAQUE', value: 0, desc: 'Aumenta o poder ofensivo geral.' },
                { icon: '🛡', name: 'DEFESA', value: 0, desc: 'Reduz o dano recebido de ataques.' },
                { icon: '⚡', name: 'REAÇÃO', value: 0, desc: 'Aumenta a velocidade de resposta.' },
                { icon: '🎯', name: 'PRECISÃO', value: 0, desc: 'Aumenta a chance de acertos.' },
                { icon: '🏃', name: 'EVASÃO', value: 0, desc: 'Aumenta a chance de evitar ataques.' }
            ],
            recursos: [
                { type: 'vida', icon: '❤', name: 'VIDA', value: '0', desc: 'Quantidade total de vida.' },
                { type: 'energia', icon: '⚡', name: 'ENERGIA', value: '0', desc: 'Quantidade total de energia.' },
                { type: 'fadiga', icon: '😴', name: 'FADIGA', value: '0', desc: 'Nível de cansaço acumulado.' }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.attachEventListeners();
        this.populateData();
    }
    
    /**
     * Anexa listeners de eventos
     */
    attachEventListeners() {
        // Debug: Verificar se os elementos foram encontrados
        console.log('MapaAstralAtivosPopup - Elementos encontrados:');
        console.log('  ativosBtn:', this.ativosBtn);
        console.log('  closeBtn:', this.closeBtn);
        console.log('  overlay:', this.overlay);
        console.log('  modal:', this.modal);
        
        // Abrir ao clicar no botão ATIVOS
        if (this.ativosBtn) {
            this.ativosBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Ativos button clicked, opening popup');
                this.open();
            });
        }
        
        // Fechar ao clicar no botão X
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                console.log('Close button clicked, closing popup');
                this.close();
            });
        } else {
            console.warn('Close button (mapa-astral-ativos-close) não foi encontrado!');
        }
        
        // Fechar ao clicar no overlay
        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    /**
     * Popula os dados de atributos no popup
     */
    populateData() {
        // Renderizar atributos principais
        const gridMain = document.getElementById('mapa-astral-ativos-grid-main');
        if (gridMain) {
            gridMain.innerHTML = this.attributesData.principais.map(attr => `
                <div class="mapa-astral-ativos-card ${attr.id}">
                    <span class="mapa-astral-ativos-icon">${attr.icon}</span>
                    <h4 class="mapa-astral-ativos-card-title">${attr.name}</h4>
                    <div class="mapa-astral-ativos-card-value">${attr.value}</div>
                    <p class="mapa-astral-ativos-card-desc">${attr.desc}</p>
                </div>
            `).join('');
        }
        
        // Renderizar atributos secundários
        const gridSecondary = document.getElementById('mapa-astral-ativos-grid-secondary');
        if (gridSecondary) {
            gridSecondary.innerHTML = this.attributesData.secundarios.map(attr => `
                <div class="mapa-astral-ativos-card-secondary">
                    <span class="mapa-astral-ativos-icon">${attr.icon}</span>
                    <h4 class="mapa-astral-ativos-card-title">${attr.name}</h4>
                    <div class="mapa-astral-ativos-card-value">${attr.value}</div>
                    <p class="mapa-astral-ativos-card-desc">${attr.desc}</p>
                </div>
            `).join('');
        }
        
        // Renderizar recursos
        const resources = document.getElementById('mapa-astral-ativos-resources');
        if (resources) {
            resources.innerHTML = this.attributesData.recursos.map(res => `
                <div class="mapa-astral-ativos-resource ${res.type}">
                    <span class="mapa-astral-ativos-icon">${res.icon}</span>
                    <h4 class="mapa-astral-ativos-card-title">${res.name}</h4>
                    <div class="mapa-astral-ativos-card-value">${res.value}</div>
                    <p class="mapa-astral-ativos-card-desc">${res.desc}</p>
                </div>
            `).join('');
        }
    }
    
    /**
     * Abre o popup com animação
     */
    open() {
        if (this.isAnimating || this.isOpen) return;
        
        this.isAnimating = true;
        
        // Mostrar overlay
        if (this.overlay) {
            this.overlay.classList.add('active');
        }
        
        // Mostrar modal
        if (this.modal) {
            this.modal.classList.add('active');
        }
        
        // Bloquear scroll da página
        document.body.style.overflow = 'hidden';
        
        this.isOpen = true;
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }
    
    /**
     * Fecha o popup com animação
     */
    close() {
        if (this.isAnimating || !this.isOpen) return;
        
        this.isAnimating = true;
        
        // Remover classe active do modal
        if (this.modal) {
            this.modal.classList.remove('active');
        }
        
        // Remover classe active do overlay
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
        
        // Restaurar scroll da página
        document.body.style.overflow = '';
        
        this.isOpen = false;
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }
    
    /**
     * Atualiza os valores de um atributo
     * @param {string} attributeId - ID do atributo
     * @param {number} newValue - Novo valor
     */
    updateAttribute(attributeId, newValue) {
        const attr = this.attributesData.principais.find(a => a.id === attributeId);
        if (attr) {
            attr.value = newValue;
            this.populateData();
        }
    }
    
    /**
     * Atualiza recurso (vida, mana, etc)
     * @param {string} resourceType - Tipo do recurso
     * @param {number|string} newValue - Novo valor
     */
    updateResource(resourceType, newValue) {
        const resource = this.attributesData.recursos.find(r => r.type === resourceType);
        if (resource) {
            resource.value = newValue;
            this.populateData();
        }
    }
}

/* =========================================================================
   INICIALIZAÇÃO
   ========================================================================= */

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.mapaAstralAtivosPopup = new MapaAstralAtivosPopup();
    });
} else {
    window.mapaAstralAtivosPopup = new MapaAstralAtivosPopup();
}

// Exportar classe globalmente
window.MapaAstralAtivosPopup = MapaAstralAtivosPopup;
