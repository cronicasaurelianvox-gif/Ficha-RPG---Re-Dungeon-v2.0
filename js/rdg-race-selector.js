/**
 * ReDungeon - Race Selector System
 * Sistema profissional, modular e escalável de seleção de raças
 * 
 * Classe: RDGRaceSelector
 * Prefixo: rdg-race-*
 * 
 * Recursos:
 * - Organização por pastas (categorias) com navegação suave
 * - Sistema de busca em tempo real
 * - Suporte a detalhes completos da raça
 * - Animações premiúm
 * - Totalmente escalável (adicionar novas pastas/raças sem refatoração)
 * - Event-driven com callbacks
 */

class RDGRaceSelector {
    /**
     * Construtor do seletor de raças
     * @param {Array} racas - Array com todos os objetos de raça
     * @param {Object} config - Configuração opcional
     */
    constructor(racas, config = {}) {
        this.racas = racas || [];
        this.config = {
            autoClose: config.autoClose !== false,
            allowMultiple: config.allowMultiple || false,
            ...config
        };

        // Estado interno
        this.selectedRaceId = null;
        this.currentFolder = null;
        this.searchTerm = '';
        this.overlayElement = null;
        this.callback = null;

        // Estrutura de pastas (escalável)
        this._initializeFolders();
    }

    /**
     * Inicializar estrutura de pastas
     * @private
     */
    _initializeFolders() {
        this.folders = [
            {
                id: 'regeron',
                name: "🏰 Re'Geron",
                color: '#8b4513',
                icon: '🏰'
            },
            {
                id: 'chaotical',
                name: '⚡ The Chaotical Gate',
                color: '#9932cc',
                icon: '⚡'
            },
            {
                id: 'wuxia',
                name: '🏯 Wuxia/Xianxia',
                color: '#ff8c00',
                icon: '🏯'
            },
            {
                id: 'onepiece',
                name: '🏴‍☠️ One Piece',
                color: '#1e90ff',
                icon: '🏴‍☠️'
            },
            {
                id: 'bleach',
                name: '⚔️ Bleach',
                color: '#daa520',
                icon: '⚔️'
            }
        ];

        // Definir pasta ativa padrão (primeira)
        this.currentFolder = this.folders[0]?.id || null;
    }

    /**
     * Abrir o seletor com callback
     * @public
     * @param {Function} callback - Função chamada quando raça é selecionada
     */
    abrir(callback) {
        this.callback = callback;
        this._render();
        this._attachEvents();
    }

    /**
     * Fechar o seletor
     * @public
     */
    fechar() {
        if (this.overlayElement) {
            this.overlayElement.style.animation = 'rdg-race-fadeOut 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            setTimeout(() => {
                if (this.overlayElement && this.overlayElement.parentNode) {
                    this.overlayElement.parentNode.removeChild(this.overlayElement);
                }
                this.overlayElement = null;
            }, 250);
        }
    }

    /**
     * Renderizar o modal
     * @private
     */
    _render() {
        // Criar overlay
        this.overlayElement = document.createElement('div');
        this.overlayElement.className = 'rdg-race-overlay';

        // Criar modal
        const modal = document.createElement('div');
        modal.className = 'rdg-race-modal';

        // Construir HTML
        let html = this._buildHeader();
        html += this._buildSearch();
        html += this._buildFolders();
        html += this._buildContent();

        modal.innerHTML = html;
        this.overlayElement.appendChild(modal);
        document.body.appendChild(this.overlayElement);
    }

    /**
     * Construir header do modal
     * @private
     */
    _buildHeader() {
        return `
            <div class="rdg-race-header">
                <div class="rdg-race-header-left">
                    <h2 class="rdg-race-title">Selecione uma Raça</h2>
                    <p class="rdg-race-subtitle">Escolha entre ${this.racas.length} raças incríveis do universo ReDungeon</p>
                </div>
                <button class="rdg-race-close" data-action="close" title="Fechar (ESC)">✕</button>
            </div>
        `;
    }

    /**
     * Construir campo de busca
     * @private
     */
    _buildSearch() {
        return `
            <div class="rdg-race-search-container">
                <input 
                    type="text" 
                    class="rdg-race-search" 
                    data-action="search"
                    placeholder="🔍 Buscar raça por nome..."
                    autocomplete="off"
                />
            </div>
        `;
    }

    /**
     * Construir navegação de pastas
     * @private
     */
    _buildFolders() {
        let html = '<div class="rdg-race-folders">';

        this.folders.forEach(folder => {
            const isActive = folder.id === this.currentFolder ? 'active' : '';
            html += `
                <button 
                    class="rdg-race-folder-btn ${isActive}"
                    data-folder="${folder.id}"
                    style="--folder-color: ${folder.color};"
                    title="${folder.name}"
                >
                    ${folder.name}
                </button>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Construir conteúdo principal (grid de raças)
     * @private
     */
    _buildContent() {
        const racasAtivas = this._getRacesForCurrentFolder();
        const racasFiltradas = this._filterRaces(racasAtivas);

        let html = '<div class="rdg-race-content">';

        if (racasFiltradas.length === 0) {
            html += this._buildEmptyState();
        } else {
            html += '<div class="rdg-race-grid">';

            racasFiltradas.forEach(raca => {
                html += this._buildRaceCard(raca);
            });

            html += '</div>';
        }

        html += '</div>';
        return html;
    }

    /**
     * Construir card individual de raça
     * @private
     */
    _buildRaceCard(raca) {
        const imagemFallback = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22160%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22160%22/%3E%3C/svg%3E';

        return `
            <div class="rdg-race-card" data-raca-id="${raca.id}" title="${raca.nome}">
                <div class="rdg-race-card-header">
                    <div class="rdg-race-card-name">${raca.nome}</div>
                    <span class="rdg-race-card-rarity">${raca.raridade || 'Comum'}</span>
                </div>
                <div class="rdg-race-card-image">
                    <img 
                        src="${raca.imagem}" 
                        alt="${raca.nome}" 
                        onerror="this.src='${imagemFallback}'"
                    />
                </div>
            </div>
        `;
    }

    /**
     * Construir estado vazio
     * @private
     */
    _buildEmptyState() {
        return `
            <div class="rdg-race-empty">
                <div class="rdg-race-empty-content">
                    <div class="rdg-race-empty-icon">⏰</div>
                    <h3 class="rdg-race-empty-title">Em Breve</h3>
                    <p class="rdg-race-empty-text">Novas raças em desenvolvimento para esta categoria</p>
                </div>
            </div>
        `;
    }

    /**
     * Construir modal de detalhes
     * @private
     */
    _buildDetailsModal(raca) {
        const modal = document.createElement('div');
        modal.className = 'rdg-race-overlay';
        modal.style.zIndex = '10001';

        let habilidadesHtml = '';
        (raca.habilidades || []).forEach((hab, idx) => {
            habilidadesHtml += `
                <div class="rdg-race-details-ability">
                    <h4>[${idx + 1}] ${hab.nome}</h4>
                    <p>${hab.desc}</p>
                </div>
            `;
        });

        let atributosHtml = '';
        if (raca.atributos) {
            Object.entries(raca.atributos).forEach(([attr, valor]) => {
                atributosHtml += `<div class="rdg-race-details-attr"><strong>${attr}</strong> ${valor}</div>`;
            });
        }

        const imagemFallback = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22350%22%3E%3Crect fill=%22%23333%22 width=%22280%22 height=%22350%22/%3E%3C/svg%3E';

        const detailsContent = `
            <div class="rdg-race-details-modal">
                <div class="rdg-race-details-header">
                    <div>
                        <h2 class="rdg-race-details-title">${raca.nome}</h2>
                    </div>
                    <span class="rdg-race-details-rarity">${raca.raridade || 'Comum'}</span>
                    <button class="rdg-race-close" data-action="close-details" title="Fechar">✕</button>
                </div>

                <div class="rdg-race-details-body">
                    <div class="rdg-race-details-image">
                        <img 
                            src="${raca.imagem}" 
                            alt="${raca.nome}"
                            onerror="this.src='${imagemFallback}'"
                        />
                    </div>

                    <div class="rdg-race-details-content">
                        <h3>📖 Descrição</h3>
                        <p>${raca.descricao || 'Sem descrição disponível.'}</p>

                        ${atributosHtml ? `
                            <h3>💪 Atributos</h3>
                            <div class="rdg-race-details-attrs">
                                ${atributosHtml}
                            </div>
                        ` : ''}

                        ${raca.limite ? `<h3>🎯 Limite de Atributo: ${raca.limite}</h3>` : ''}

                        ${habilidadesHtml ? `
                            <h3>⚡ Habilidades Raciais</h3>
                            <div class="rdg-race-details-abilities">
                                ${habilidadesHtml}
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="rdg-race-details-footer">
                    <button class="rdg-race-btn rdg-race-btn-secondary" data-action="back-details">← Voltar</button>
                    <button class="rdg-race-btn rdg-race-btn-primary" data-action="select" data-raca-id="${raca.id}" data-raca-nome="${raca.nome}">✓ Selecionar</button>
                </div>
            </div>
        `;

        modal.innerHTML = detailsContent;
        return modal;
    }

    /**
     * Anexar event listeners
     * @private
     */
    _attachEvents() {
        // Fechar ao clicar no overlay
        this.overlayElement.addEventListener('click', (e) => {
            if (e.target === this.overlayElement) {
                this.fechar();
            }
        });

        // Botão fechar
        const closeBtn = this.overlayElement.querySelector('[data-action="close"]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.fechar());
        }

        // Busca em tempo real
        const searchInput = this.overlayElement.querySelector('[data-action="search"]');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this._updateContent();
            });
        }

        // Navegação entre pastas
        const folderBtns = this.overlayElement.querySelectorAll('[data-folder]');
        folderBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const folderId = btn.getAttribute('data-folder');
                this.currentFolder = folderId;
                this.searchTerm = '';
                this._updateContent();
                
                // Atualizar estado visual das abas
                folderBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Clique nos cards de raça
        const raceCards = this.overlayElement.querySelectorAll('.rdg-race-card');
        raceCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const racaId = card.getAttribute('data-raca-id');
                const raca = this.racas.find(r => r.id === racaId);
                if (raca) {
                    this._showDetails(raca);
                }
            });
        });

        // ESC para fechar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlayElement && this.overlayElement.parentNode) {
                this.fechar();
            }
        });
    }

    /**
     * Atualizar conteúdo (usado em busca e filtros)
     * @private
     */
    _updateContent() {
        const contentDiv = this.overlayElement.querySelector('.rdg-race-content');
        if (!contentDiv) return;

        const racasAtivas = this._getRacesForCurrentFolder();
        const racasFiltradas = this._filterRaces(racasAtivas);

        let html = '';

        if (racasFiltradas.length === 0) {
            html = this._buildEmptyState();
        } else {
            html = '<div class="rdg-race-grid">';
            racasFiltradas.forEach(raca => {
                html += this._buildRaceCard(raca);
            });
            html += '</div>';
        }

        contentDiv.innerHTML = html;

        // Reattach card events
        const raceCards = contentDiv.querySelectorAll('.rdg-race-card');
        raceCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const racaId = card.getAttribute('data-raca-id');
                const raca = this.racas.find(r => r.id === racaId);
                if (raca) {
                    this._showDetails(raca);
                }
            });
        });
    }

    /**
     * Mostrar detalhes da raça
     * @private
     */
    _showDetails(raca) {
        const detailsModal = this._buildDetailsModal(raca);
        this.overlayElement.appendChild(detailsModal);

        // Fechar detalhes
        const closeBtn = detailsModal.querySelector('[data-action="close-details"]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                detailsModal.remove();
            });
        }

        // Voltar
        const backBtn = detailsModal.querySelector('[data-action="back-details"]');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                detailsModal.remove();
            });
        }

        // Selecionar
        const selectBtn = detailsModal.querySelector('[data-action="select"]');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => {
                const racaId = selectBtn.getAttribute('data-raca-id');
                const racaNome = selectBtn.getAttribute('data-raca-nome');
                this._selectRace(racaId, racaNome);
            });
        }

        // Fechar detalhes ao clicar no overlay
        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) {
                detailsModal.remove();
            }
        });
    }

    /**
     * Selecionar raça
     * @private
     */
    _selectRace(racaId, racaNome) {
        this.selectedRaceId = racaId;

        if (this.callback && typeof this.callback === 'function') {
            this.callback(racaId, racaNome);
        }

        if (this.config.autoClose) {
            this.fechar();
        }
    }

    /**
     * Obter raças para pasta atual
     * @private
     */
    _getRacesForCurrentFolder() {
        if (!this.currentFolder) return [];
        
        return this.racas.filter(raca => {
            const categoria = raca.categoria || 'regeron';
            return categoria === this.currentFolder;
        });
    }

    /**
     * Filtrar raças por termo de busca
     * @private
     */
    _filterRaces(racas) {
        if (!this.searchTerm) return racas;

        return racas.filter(raca => {
            const nome = (raca.nome || '').toLowerCase();
            const descricao = (raca.descricao || '').toLowerCase();
            const termo = this.searchTerm;

            return nome.includes(termo) || descricao.includes(termo);
        });
    }

    /**
     * Adicionar nova pasta (escalabilidade)
     * @public
     */
    adicionarPasta(folderData) {
        if (!folderData.id || !folderData.name) {
            console.error('Pasta inválida. Precisa ter id e name.');
            return false;
        }

        this.folders.push({
            id: folderData.id,
            name: folderData.name,
            color: folderData.color || '#6496ff',
            icon: folderData.icon || '📁'
        });

        return true;
    }

    /**
     * Obter raça por ID
     * @public
     */
    obterRacaPorId(racaId) {
        return this.racas.find(r => r.id === racaId);
    }

    /**
     * Obter raças selecionadas
     * @public
     */
    obterRacaSelecionada() {
        return this.selectedRaceId ? this.obterRacaPorId(this.selectedRaceId) : null;
    }
}

// Fazer classe disponível globalmente
window.RDGRaceSelector = RDGRaceSelector;
