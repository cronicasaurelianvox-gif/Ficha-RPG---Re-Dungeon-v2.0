/* ============================================ */
/* MENU-PRINCIPAL.JS - Controller do Menu      */
/* Gerencia popup flutuante com botões         */
/* ============================================ */

class MenuPrincipal {
    constructor() {
        this.menuData = [
            // Primeira linha
            { id: 'info', label: 'Info', icon: 'https://i.imgur.com/HW92olm.png', route: 'info' },
            { id: 'aptidao', label: 'Aptidão', icon: 'https://i.imgur.com/DiJ5DOO.png', route: 'aptidao' },
            { id: 'racas', label: 'Raças', icon: 'https://i.imgur.com/jZENyy3.png', route: 'racas' },
            { id: 'classes', label: 'Classes', icon: 'https://i.imgur.com/YH0sMiU.png', route: 'classes' },
            
            // Segunda linha
            { id: 'sorte', label: 'Sorte', icon: 'https://i.imgur.com/Zix5j38.png', route: 'sorte' },
            { id: 'dicas', label: 'Dicas', icon: 'https://i.imgur.com/syNTDSq.png', route: 'dicas' },
            { id: 'itens', label: 'Loja', icon: 'https://i.imgur.com/znIA8hP.png', route: 'itens' },
            { id: 'condicoes', label: 'Condições', icon: 'https://i.imgur.com/KKlDkAJ.png', route: 'condicoes' },
            
            // Terceira linha
            { id: 'cultivacao', label: 'Cultivação', icon: 'https://i.imgur.com/E6LUTRF.png', route: 'cultivacao' },
            { id: 'corpo-imortal', label: 'Corpo Imortal', icon: 'https://i.imgur.com/fvcUAAE.png', route: 'corpo-imortal' },
            { id: 'salvar', label: 'Salvar', icon: 'https://i.imgur.com/dblnoAI.png', route: 'salvar' },
            { id: 'importar', label: 'Importar', icon: 'https://i.imgur.com/Lr4KpQY.png', route: 'importar' }
        ];

        this.isOpen = false;
        this.init();
    }

    /**
     * Inicializa o menu
     */
    init() {
        this.createMenuHTML();
        this.attachEventListeners();
        console.log('✅ MenuPrincipal inicializado');
    }

    /**
     * Cria a estrutura HTML do menu
     */
    createMenuHTML() {
        // Verificar se já existe
        if (document.getElementById('menu-principal-overlay')) {
            return;
        }

        // HTML do overlay
        const overlay = document.createElement('div');
        overlay.id = 'menu-principal-overlay';
        overlay.className = 'menu-principal-overlay';
        document.body.appendChild(overlay);

        // HTML do popup
        const popup = document.createElement('div');
        popup.id = 'menu-principal-popup';
        popup.className = 'menu-principal-popup';
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-labelledby', 'menu-principal-title');
        popup.setAttribute('aria-modal', 'true');

        // Header
        const header = document.createElement('div');
        header.className = 'menu-principal-header';
        header.innerHTML = `
            <h2 id="menu-principal-title" class="menu-principal-title">⚔️ MENU PRINCIPAL</h2>
            <button class="menu-principal-close-btn" id="menu-principal-close-btn" aria-label="Fechar menu">✕</button>
        `;
        popup.appendChild(header);

        // Grid de botões
        const grid = document.createElement('div');
        grid.className = 'menu-principal-grid';

        this.menuData.forEach(item => {
            const button = document.createElement('button');
            button.className = 'menu-principal-button';
            button.id = `menu-btn-${item.id}`;
            button.setAttribute('data-route-vertical', item.route);
            button.setAttribute('title', item.label);

            button.innerHTML = `
                <img src="${item.icon}" alt="${item.label}" class="menu-principal-button-icon">
                <span class="menu-principal-button-label">${item.label}</span>
            `;

            button.addEventListener('click', () => this.handleButtonClick(item));

            grid.appendChild(button);
        });

        popup.appendChild(grid);

        // Footer
        const footer = document.createElement('div');
        footer.className = 'menu-principal-footer';
        footer.innerHTML = `
            <span>🎮 Pressione ESC para fechar</span>
        `;
        popup.appendChild(footer);

        document.body.appendChild(popup);
    }

    /**
     * Anexa event listeners
     */
    attachEventListeners() {
        // Botão para abrir menu na barra horizontal
        const btnMenuPrincipal = document.getElementById('btn-menu-principal');
        if (btnMenuPrincipal) {
            btnMenuPrincipal.addEventListener('click', (e) => {
                e.stopPropagation();
                this.open(e);
            });
        }

        // Fechar com botão X
        const closeBtn = document.getElementById('menu-principal-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Fechar clicando no overlay
        const overlay = document.getElementById('menu-principal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.close());
        }

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        console.log('✅ MenuPrincipal event listeners anexados');
    }

    /**
     * Abre o menu na posição do clique
     * @param {MouseEvent} event - Evento de clique
     */
    open(event) {
        const overlay = document.getElementById('menu-principal-overlay');
        const popup = document.getElementById('menu-principal-popup');

        if (overlay && popup) {
            // Se houver evento de clique, usar a posição
            if (event && event.clientX !== undefined && event.clientY !== undefined) {
                const button = event.currentTarget;
                const rect = button.getBoundingClientRect();
                
                // Posicionar abaixo do botão, alinhado à esquerda
                let top = rect.bottom + 10;
                let left = rect.left;
                
                // Garantir que o menu não saia da tela
                const popupWidth = 500; // Largura aproximada do popup
                const popupHeight = 400; // Altura aproximada do popup
                
                if (left + popupWidth > window.innerWidth) {
                    left = window.innerWidth - popupWidth - 20;
                }
                
                if (top + popupHeight > window.innerHeight) {
                    top = rect.top - popupHeight - 10;
                }
                
                // Aplicar posição
                popup.style.position = 'fixed';
                popup.style.top = top + 'px';
                popup.style.left = left + 'px';
                popup.style.transform = 'none';
                
                console.log(`📍 Menu posicionado em: top=${top}px, left=${left}px`);
            } else {
                // Fallback: centralizar se não houver evento
                popup.style.position = 'fixed';
                popup.style.top = '50%';
                popup.style.left = '50%';
                popup.style.transform = 'translate(-50%, -50%)';
            }
            
            overlay.classList.add('active');
            popup.classList.add('active');
            this.isOpen = true;
            document.body.style.overflow = 'hidden';

            console.log('✅ Menu Principal aberto');
        }
    }

    /**
     * Fecha o menu
     */
    close() {
        const overlay = document.getElementById('menu-principal-overlay');
        const popup = document.getElementById('menu-principal-popup');

        if (overlay && popup) {
            overlay.classList.remove('active');
            popup.classList.remove('active');
            this.isOpen = false;
            document.body.style.overflow = '';

            console.log('✅ Menu Principal fechado');
        }
    }

    /**
     * Trata clique em botão do menu
     * @param {Object} item - Objeto do item
     */
    handleButtonClick(item) {
        console.log(`🔘 Botão do menu clicado: ${item.label}`);

        // Fechar o menu
        this.close();

        // Handler especial para raças
        if (item.route === 'racas') {
            if (window.RDGRaceSelector) {
                const selector = new window.RDGRaceSelector(obterTodasAsRacas());
                selector.abrir((racaId, racaNome) => {
                    console.log(`✅ Raça selecionada: ${racaNome}`);
                    // Aqui você pode adicionar lógica adicional se necessário
                });
            } else {
                console.warn('⚠️ Sistema de raças não inicializado');
            }
            return;
        }

        // Handler especial para classes
        if (item.route === 'classes') {
            if (window.classesUI && window.classesUI.abrirModal) {
                window.classesUI.abrirModal();
            } else {
                console.warn('⚠️ Sistema de classes não inicializado');
            }
            return;
        }

        // Handler especial para condições
        if (item.route === 'condicoes') {
            if (window.sistemaCondicoes && typeof window.sistemaCondicoes.abrirPopup === 'function') {
                window.sistemaCondicoes.abrirPopup();
            } else {
                console.warn('⚠️ Sistema de condições não inicializado');
            }
            return;
        }

        // Handler especial para corpo imortal
        if (item.route === 'corpo-imortal') {
            if (window.corpoImortalUI && typeof window.corpoImortalUI.abrir === 'function') {
                window.corpoImortalUI.abrir();
            } else {
                console.warn('⚠️ Sistema de Corpo Imortal não inicializado');
            }
            return;
        }

        // Handler especial para cultivação
        if (item.route === 'cultivacao') {
            if (window.cultivacao && typeof window.cultivacao.ui.abrir === 'function') {
                window.cultivacao.ui.abrir();
            } else {
                console.warn('⚠️ Sistema de Cultivação não inicializado');
            }
            return;
        }

        // ✅ NOVO: Handler especial para aptidão
        if (item.route === 'aptidao') {
            if (window.aptidoesVisualPopup && typeof window.aptidoesVisualPopup.open === 'function') {
                window.aptidoesVisualPopup.open();
                console.log('📖 [MenuPrincipal] Enciclopédia de Aptidões aberta por clique');
            } else {
                console.warn('⚠️ AptidoesVisualPopup não disponível');
            }
            return;
        }

        // Fazer com que a ação seja executada via routes-vertical
        const button = document.getElementById(`route-${item.route}`);

        if (button) {
            // Ativar o evento de clique do botão original
            button.click();
            button.focus();
        } else {
            console.warn(`⚠️ Botão original não encontrado: route-${item.route}`);
        }
    }

    /**
     * Abre o menu se ele existir
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
}

/**
 * Inicializar quando o DOM estiver pronto
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.menuPrincipal = new MenuPrincipal();
    });
} else {
    // DOM já está pronto
    window.menuPrincipal = new MenuPrincipal();
}

