/* ================================================= */
/* POPUP-INFO-JOGADOR.JS - Sistema de Informações  */
/* Gerenciamento Completo do Popup do Jogador      */
/* ================================================= */

/**
 * PopupInfoJogador
 * Responsável por:
 * - Gerenciar dados de informações do personagem
 * - Validar e salvar dados
 * - Controlar abas do popup
 * - Sincronizar com atributos principais
 */
class PopupInfoJogador {
    constructor() {
        this.isOpen = false;
        this.activeTab = 'atributos-basicos';
        
        // Dados temporários durante edição
        this.tempValues = {
            nomePersonagem: '',
            tituloPersonagem: '',
            classePersonagem: '',
            racaPersonagem: '',
            origem: '',
            afiliacao: '',
            statusNarrativo: '',
            notasAdicionais: '',
            background: ''
        };

        // Dados originais (para comparação ao cancelar)
        this.originalValues = { ...this.tempValues };

        this.init();
    }

    /**
     * Inicializa o popup
     */
    init() {
        console.log('🔧 Inicializando PopupInfoJogador...');
        this.createPopupHTML();
        this.setupEventListeners();
        this.loadValuesFromState();
        console.log('✅ PopupInfoJogador pronto!');
    }

    /**
     * Cria o HTML do popup inserindo no DOM
     */
    createPopupHTML() {
        const popupHTML = `
            <!-- Popup de Informações do Jogador -->
            <div id="popup-info-jogador-overlay" class="popup-info-jogador-overlay" aria-hidden="true" role="dialog" aria-labelledby="popup-info-jogador-title">
                <div class="popup-info-jogador">
                    <!-- Header -->
                    <div class="popup-info-jogador__header">
                        <h2 id="popup-info-jogador-title" class="popup-info-jogador__title">Informações do Jogador</h2>
                        <div class="popup-info-jogador__header-buttons">
                            <button id="popup-info-jogador-voltar" class="popup-info-jogador__voltar-btn" aria-label="Voltar" title="Voltar">
                                <span aria-hidden="true">↩</span>
                            </button>
                            <button id="popup-info-jogador-close" class="popup-info-jogador__close-btn" aria-label="Fechar popup" title="Fechar">
                                <span aria-hidden="true">✘</span>
                            </button>
                        </div>
                    </div>

                    <!-- Abas de Navegação -->
                    <div class="popup-info-jogador__tabs">
                        <button class="popup-info-jogador__tab popup-info-jogador__tab--active" data-tab="atributos-basicos">
                            Atributos Básicos
                        </button>
                        <button class="popup-info-jogador__tab" data-tab="info-gerais">
                            Informações Gerais
                        </button>
                        <button class="popup-info-jogador__tab" data-tab="background">
                            Background
                        </button>
                    </div>

                    <!-- Conteúdo das Abas -->
                    <div class="popup-info-jogador__content">
                        <!-- Aba 1: Atributos Básicos -->
                        <div class="popup-info-jogador__tab-content popup-info-jogador__tab-content--active" data-tab="atributos-basicos">
                            <div class="popup-info-form">
                                <!-- Nome do Personagem -->
                                <div class="popup-info-form__group">
                                    <label for="info-nome-personagem" class="popup-info-form__label">Nome do Personagem</label>
                                    <input 
                                        type="text" 
                                        id="info-nome-personagem" 
                                        class="popup-info-form__input" 
                                        placeholder="Digite o nome"
                                        maxlength="50">
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>

                                <!-- Título -->
                                <div class="popup-info-form__group">
                                    <label for="info-titulo-personagem" class="popup-info-form__label">Título</label>
                                    <input 
                                        type="text" 
                                        id="info-titulo-personagem" 
                                        class="popup-info-form__input" 
                                        placeholder="Ex: Guerreiro Destemido"
                                        maxlength="50">
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>

                                <!-- Classe (Somente Leitura) -->
                                <div class="popup-info-form__group">
                                    <label for="info-classe-personagem" class="popup-info-form__label">Classe</label>
                                    <input 
                                        type="text" 
                                        id="info-classe-personagem" 
                                        class="popup-info-form__input popup-info-form__input--readonly" 
                                        placeholder="Classe"
                                        readonly>
                                    <span class="popup-info-form__hint">Somente Leitura</span>
                                </div>

                                <!-- Raça (Somente Leitura) -->
                                <div class="popup-info-form__group">
                                    <label for="info-raca-personagem" class="popup-info-form__label">Raça</label>
                                    <input 
                                        type="text" 
                                        id="info-raca-personagem" 
                                        class="popup-info-form__input popup-info-form__input--readonly" 
                                        placeholder="Raça"
                                        readonly>
                                    <span class="popup-info-form__hint">Somente Leitura</span>
                                </div>
                            </div>
                        </div>

                        <!-- Aba 2: Informações Gerais -->
                        <div class="popup-info-jogador__tab-content" data-tab="info-gerais">
                            <div class="popup-info-form">
                                <!-- Origem -->
                                <div class="popup-info-form__group">
                                    <label for="info-geral-origem" class="popup-info-form__label">Origem</label>
                                    <input 
                                        type="text" 
                                        id="info-geral-origem" 
                                        class="popup-info-form__input" 
                                        placeholder="Origem do personagem">
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>

                                <!-- Afiliação -->
                                <div class="popup-info-form__group">
                                    <label for="info-geral-afiliacao" class="popup-info-form__label">Afiliação</label>
                                    <input 
                                        type="text" 
                                        id="info-geral-afiliacao" 
                                        class="popup-info-form__input" 
                                        placeholder="Afiliação">
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>

                                <!-- Status Narrativo -->
                                <div class="popup-info-form__group">
                                    <label for="info-geral-status" class="popup-info-form__label">Status Narrativo</label>
                                    <input 
                                        type="text" 
                                        id="info-geral-status" 
                                        class="popup-info-form__input" 
                                        placeholder="Status narrativo">
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>

                                <!-- Campo Adicional -->
                                <div class="popup-info-form__group">
                                    <label for="info-geral-notas" class="popup-info-form__label">Notas Adicionais</label>
                                    <textarea 
                                        id="info-geral-notas" 
                                        class="popup-info-form__textarea" 
                                        placeholder="Notas adicionais"
                                        rows="4"></textarea>
                                    <span class="popup-info-form__hint">Editável</span>
                                </div>
                            </div>
                        </div>

                        <!-- Aba 3: Background -->
                        <div class="popup-info-jogador__tab-content" data-tab="background">
                            <div class="popup-info-background">
                                <!-- Toolbar de Formatação -->
                                <div class="popup-info-background__toolbar">
                                    <!-- Formatação Básica -->
                                    <button class="popup-info-background__toolbar-btn" id="info-background-bold" title="Negrito (Ctrl+B)">
                                        <strong>B</strong>
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-italic" title="Itálico (Ctrl+I)">
                                        <em>I</em>
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-underline" title="Sublinhado (Ctrl+U)">
                                        <u>U</u>
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-strikethrough" title="Riscado">
                                        <strike>S</strike>
                                    </button>
                                    <div class="popup-info-background__toolbar-separator"></div>
                                    
                                    <!-- Alinhamento -->
                                    <button class="popup-info-background__toolbar-btn" id="info-background-align-left" title="Alinhar à Esquerda">
                                        ⬅
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-align-center" title="Centralizar">
                                        ⬍
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-align-right" title="Alinhar à Direita">
                                        ➡
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-align-justify" title="Justificar">
                                        ═
                                    </button>
                                    <div class="popup-info-background__toolbar-separator"></div>
                                    
                                    <!-- Listas -->
                                    <button class="popup-info-background__toolbar-btn" id="info-background-list-ul" title="Lista com Bolinhas">
                                        •
                                    </button>
                                    <button class="popup-info-background__toolbar-btn" id="info-background-list-ol" title="Lista Numerada">
                                        1.
                                    </button>
                                    <div class="popup-info-background__toolbar-separator"></div>
                                    
                                    <!-- Cores -->
                                    <div class="popup-info-background__color-group">
                                        <label class="popup-info-background__color-label" title="Cor do Texto">
                                            <span class="popup-info-background__color-icon">A</span>
                                            <input type="color" id="info-background-color-text" class="popup-info-background__color-input" value="#d8b4fe">
                                        </label>
                                    </div>
                                    <div class="popup-info-background__color-group">
                                        <label class="popup-info-background__color-label" title="Cor de Fundo">
                                            <span class="popup-info-background__color-icon">■</span>
                                            <input type="color" id="info-background-color-highlight" class="popup-info-background__color-input" value="#2d2a27">
                                        </label>
                                    </div>
                                    <div class="popup-info-background__toolbar-separator"></div>
                                    <!-- Limpar -->
                                    <button class="popup-info-background__toolbar-btn" id="info-background-clear" title="Limpar Formatação">
                                        C
                                    </button>
                                </div>

                                <!-- Editor de Background -->
                                <div class="popup-info-background__editor-wrapper">
                                    <div 
                                        id="info-background-editor" 
                                        class="popup-info-background__editor" 
                                        contenteditable="true"
                                        data-placeholder="Digite o background do personagem aqui... (História, lore, passado e anotações narrativas)"
                                        role="textbox"
                                        aria-label="Editor de background do personagem">
                                    </div>
                                </div>

                                <!-- Contador de Caracteres -->
                                <div class="popup-info-background__footer">
                                    <span class="popup-info-background__char-count">
                                        <span id="info-background-char-count">0</span> caracteres
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Rodapé com Botões -->
                    <div class="popup-info-jogador__footer">
                        <button id="info-btn-cancelar" class="popup-info-jogador__btn popup-info-jogador__btn--cancel">
                            Cancelar
                        </button>
                        <button id="info-btn-salvar" class="popup-info-jogador__btn popup-info-jogador__btn--save">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        `;

        if (!document.getElementById('popup-info-jogador-overlay')) {
            document.body.insertAdjacentHTML('beforeend', popupHTML);
        }
    }

    /**
     * Configura todos os event listeners
     */
    setupEventListeners() {
        console.log('🔌 Configurando event listeners...');

        // Botão de abrir (botão Info na sidebar)
        const btnAbrir = document.querySelector('#route-info');
        if (btnAbrir) {
            btnAbrir.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('🖱️ Clique no botão Info detectado');
                this.open();
            });
        } else {
            console.warn('⚠️ Botão #route-info não encontrado');
        }

        // Botões de fechar
        document.querySelector('#popup-info-jogador-close')?.addEventListener('click', () => this.close());
        document.querySelector('#popup-info-jogador-voltar')?.addEventListener('click', () => this.voltarMenu());
        document.querySelector('#info-btn-cancelar')?.addEventListener('click', () => this.close());

        // Botão de salvar
        document.querySelector('#info-btn-salvar')?.addEventListener('click', () => this.save());

        // Fechar ao clicar no overlay
        document.querySelector('#popup-info-jogador-overlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'popup-info-jogador-overlay') {
                this.close();
            }
        });

        // Abas
        document.querySelectorAll('.popup-info-jogador__tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Inputs de nome e título
        document.querySelector('#info-nome-personagem')?.addEventListener('input', (e) => {
            this.tempValues.nomePersonagem = e.target.value;
        });

        document.querySelector('#info-titulo-personagem')?.addEventListener('input', (e) => {
            this.tempValues.tituloPersonagem = e.target.value;
        });

        // Editor de background
        const backgroundEditor = document.querySelector('#info-background-editor');
        if (backgroundEditor) {
            backgroundEditor.addEventListener('input', () => {
                this.tempValues.background = backgroundEditor.innerHTML;
                this.updateBackgroundCharCount();
            });

            // Ctrl+B para negrito
            backgroundEditor.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'b') {
                    e.preventDefault();
                    document.execCommand('bold');
                }
                // Ctrl+I para itálico
                else if (e.ctrlKey && e.key === 'i') {
                    e.preventDefault();
                    document.execCommand('italic');
                }
                // Ctrl+U para sublinhado
                else if (e.ctrlKey && e.key === 'u') {
                    e.preventDefault();
                    document.execCommand('underline');
                }
            });
        }

        // Botões de formatação
        document.querySelector('#info-background-bold')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('bold');
        });

        document.querySelector('#info-background-italic')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('italic');
        });

        document.querySelector('#info-background-underline')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('underline');
        });

        // Riscado
        document.querySelector('#info-background-strikethrough')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('strikethrough');
        });

        // Alinhamento
        document.querySelector('#info-background-align-left')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('justifyLeft');
        });

        document.querySelector('#info-background-align-center')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('justifyCenter');
        });

        document.querySelector('#info-background-align-right')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('justifyRight');
        });

        document.querySelector('#info-background-align-justify')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('justifyFull');
        });

        // Listas
        document.querySelector('#info-background-list-ul')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('insertUnorderedList');
        });

        document.querySelector('#info-background-list-ol')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('insertOrderedList');
        });

        // Cores de texto
        document.querySelector('#info-background-color-text')?.addEventListener('change', (e) => {
            e.preventDefault();
            document.execCommand('foreColor', false, e.target.value);
        });

        // Cor de fundo
        document.querySelector('#info-background-color-highlight')?.addEventListener('change', (e) => {
            e.preventDefault();
            document.execCommand('backColor', false, e.target.value);
        });

        document.querySelector('#info-background-clear')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.execCommand('removeFormat');
        });

        // Permitir paste (Ctrl+V) no editor
        document.querySelector('#info-background-editor')?.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/html') || e.clipboardData.getData('text/plain');
            if (text) {
                document.execCommand('insertHTML', false, text);
            }
        });

        // Permitir drop (arrastar e colar) no editor
        document.querySelector('#info-background-editor')?.addEventListener('drop', (e) => {
            e.preventDefault();
            const text = e.dataTransfer.getData('text/html') || e.dataTransfer.getData('text/plain');
            if (text) {
                document.execCommand('insertHTML', false, text);
            }
        });

        // Permitir dragover no editor
        document.querySelector('#info-background-editor')?.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        // Inputs da aba Informações Gerais (agora editáveis)
        document.querySelector('#info-geral-origem')?.addEventListener('input', (e) => {
            this.tempValues.origem = e.target.value;
        });

        document.querySelector('#info-geral-afiliacao')?.addEventListener('input', (e) => {
            this.tempValues.afiliacao = e.target.value;
        });

        document.querySelector('#info-geral-status')?.addEventListener('input', (e) => {
            this.tempValues.statusNarrativo = e.target.value;
        });

        document.querySelector('#info-geral-notas')?.addEventListener('input', (e) => {
            this.tempValues.notasAdicionais = e.target.value;
        });

        console.log('✓ Event listeners configurados');
    }

    /**
     * Troca entre abas
     */
    switchTab(tabName) {
        console.log(`📑 Trocando para aba: ${tabName}`);
        
        // Remover classe ativa de todas as abas
        document.querySelectorAll('.popup-info-jogador__tab').forEach(tab => {
            tab.classList.remove('popup-info-jogador__tab--active');
        });

        document.querySelectorAll('.popup-info-jogador__tab-content').forEach(content => {
            content.classList.remove('popup-info-jogador__tab-content--active');
        });

        // Adicionar classe ativa à aba selecionada
        document.querySelector(`[data-tab="${tabName}"].popup-info-jogador__tab`)?.classList.add('popup-info-jogador__tab--active');
        document.querySelector(`[data-tab="${tabName}"].popup-info-jogador__tab-content`)?.classList.add('popup-info-jogador__tab-content--active');

        this.activeTab = tabName;
    }

    /**
     * Carrega valores do state manager
     */
    loadValuesFromState() {
        console.log('📂 Carregando valores do state...');

        // ✅ PRIMEIRO: Tentar carregar do localStorage
        let jogadorInfo = null;
        if (window.localStorageManager) {
            try {
                jogadorInfo = window.localStorageManager.loadJogadorInfo();
                if (jogadorInfo) {
                    console.log('✅ Dados carregados do localStorage');
                }
            } catch (error) {
                console.warn('⚠️ Erro ao carregar do localStorage:', error);
            }
        }

        // ✅ FALLBACK: Se não tiver no localStorage, carrega do atributosManager
        if (!jogadorInfo && typeof atributosManager !== 'undefined') {
            console.log('📂 Carregando valores do AtributosManager (fallback)...');
            const personagemData = atributosManager.personagemData;
            jogadorInfo = {
                nomePersonagem: personagemData.nome || 'Aventureiro Desconhecido',
                tituloPersonagem: personagemData.titulo || 'Sem Título',
                classePersonagem: personagemData.classe || 'Não possui',
                racaPersonagem: this.getRacaDisplayName(personagemData.raca) || 'Não possui',
                origem: personagemData.origem || 'Desconhecida',
                afiliacao: personagemData.afiliacao || 'Nenhuma',
                statusNarrativo: personagemData.statusNarrativo || 'Ativo',
                notasAdicionais: personagemData.notasAdicionais || '',
                background: personagemData.background || ''
            };
        }

        // ✅ Se ainda não tiver nada, usar valores padrão
        if (!jogadorInfo) {
            jogadorInfo = {
                nomePersonagem: 'Aventureiro Desconhecido',
                tituloPersonagem: 'Sem Título',
                classePersonagem: 'Não possui',
                racaPersonagem: 'Não possui',
                origem: 'Desconhecida',
                afiliacao: 'Nenhuma',
                statusNarrativo: 'Ativo',
                notasAdicionais: '',
                background: ''
            };
        }

        // ✅ IMPORTANTE: Buscar classe e raça de campos separados
        // Classe: #personagem-classe
        // Raça: #personagem-raca
        
        const classeElement = document.querySelector('#personagem-classe');
        if (classeElement && classeElement.textContent) {
            const classeExtraida = classeElement.textContent.trim();
            if (classeExtraida && classeExtraida !== 'Classe') {
                jogadorInfo.classePersonagem = classeExtraida;
                console.log(`✅ Classe atualizada de #personagem-classe: ${classeExtraida}`);
            } else {
                console.log(`ℹ️ Nenhuma classe selecionada, exibindo: "Não possui"`);
            }
        } else {
            console.log(`ℹ️ Campo #personagem-classe não encontrado ou vazio`);
        }

        const racaElement = document.querySelector('#personagem-raca');
        if (racaElement && racaElement.textContent) {
            const racaExtraida = racaElement.textContent.trim();
            if (racaExtraida && racaExtraida !== 'Raça') {
                jogadorInfo.racaPersonagem = racaExtraida;
                console.log(`✅ Raça atualizada de #personagem-raca: ${racaExtraida}`);
            } else {
                console.log(`ℹ️ Nenhuma raça selecionada, exibindo: "Não possui"`);
            }
        } else {
            console.log(`ℹ️ Campo #personagem-raca não encontrado ou vazio`);
        }

        // Atualizar tempValues com dados carregados
        this.tempValues = jogadorInfo;
        this.originalValues = { ...this.tempValues };
        
        // ✅ Sincronizar também com AtributosManager para consistência
        if (typeof atributosManager !== 'undefined') {
            atributosManager.personagemData.nome = jogadorInfo.nomePersonagem;
            atributosManager.personagemData.titulo = jogadorInfo.tituloPersonagem;
            atributosManager.personagemData.classe = jogadorInfo.classePersonagem;
            atributosManager.personagemData.background = jogadorInfo.background;
            atributosManager.personagemData.origem = jogadorInfo.origem;
            atributosManager.personagemData.afiliacao = jogadorInfo.afiliacao;
            atributosManager.personagemData.statusNarrativo = jogadorInfo.statusNarrativo;
            atributosManager.personagemData.notasAdicionais = jogadorInfo.notasAdicionais;
            
            // ✅ Sincronizar raça (converter de nome para código)
            const racaCodigo = atributosManager.racaNomeParaCodigo(jogadorInfo.racaPersonagem);
            if (racaCodigo) {
                atributosManager.personagemData.raca = racaCodigo;
            }
        }

        // ✅ Sincronizar também com StateManager para consistência
        if (window.appState) {
            window.appState.setJogadorInfo(jogadorInfo);
            console.log('✅ Sincronizado com StateManager');
        }
        
        // ✅ Renderizar a exibição principal com dados carregados
        if (typeof atributosManager !== 'undefined' && typeof atributosManager.renderizarPersonagem === 'function') {
            try {
                atributosManager.renderizarPersonagem();
                console.log('✅ Exibição principal atualizada com dados carregados');
            } catch (error) {
                console.warn('⚠️ Erro ao renderizar personagem:', error);
            }
        }
        
        this.updateFormInputs();
        console.log('✓ Valores carregados com sucesso');
    }

    /**
     * Obtém o nome de exibição da raça
     */
    getRacaDisplayName(racaCodigo) {
        const racas = {
            'humano': 'Humano',
            'elfo': 'Elfo',
            'anao': 'Anão'
        };
        return racas[racaCodigo] || racaCodigo;
    }

    /**
     * Atualiza os inputs do formulário
     */
    updateFormInputs() {
        // Aba 1: Atributos Básicos
        const nomeInput = document.querySelector('#info-nome-personagem');
        if (nomeInput) nomeInput.value = this.tempValues.nomePersonagem;

        const tituloInput = document.querySelector('#info-titulo-personagem');
        if (tituloInput) tituloInput.value = this.tempValues.tituloPersonagem;

        const classeInput = document.querySelector('#info-classe-personagem');
        if (classeInput) classeInput.value = this.tempValues.classePersonagem;

        const racaInput = document.querySelector('#info-raca-personagem');
        if (racaInput) racaInput.value = this.tempValues.racaPersonagem;

        // Aba 2: Informações Gerais
        const origemInput = document.querySelector('#info-geral-origem');
        if (origemInput) origemInput.value = this.tempValues.origem;

        const afiliacao = document.querySelector('#info-geral-afiliacao');
        if (afiliacao) afiliacao.value = this.tempValues.afiliacao;

        const status = document.querySelector('#info-geral-status');
        if (status) status.value = this.tempValues.statusNarrativo;

        const notas = document.querySelector('#info-geral-notas');
        if (notas) notas.value = this.tempValues.notasAdicionais;

        // Aba 3: Background
        const backgroundEditor = document.querySelector('#info-background-editor');
        if (backgroundEditor) {
            backgroundEditor.innerHTML = this.tempValues.background;
            this.updateBackgroundCharCount();
        }
    }

    /**
     * Atualiza o contador de caracteres do background
     */
    updateBackgroundCharCount() {
        const editor = document.querySelector('#info-background-editor');
        const counter = document.querySelector('#info-background-char-count');
        
        if (editor && counter) {
            const text = editor.innerText || '';
            counter.textContent = text.length;
        }
    }

    /**
     * Valida campos editáveis
     */
    validate() {
        console.log('✓ Validando dados...');

        const nome = this.tempValues.nomePersonagem.trim();
        const titulo = this.tempValues.tituloPersonagem.trim();

        if (!nome) {
            console.warn('⚠️ Nome do personagem está vazio');
            alert('Por favor, digite um nome para o personagem');
            return false;
        }

        if (nome.length > 50) {
            console.warn('⚠️ Nome excede limite de 50 caracteres');
            alert('Nome não pode exceder 50 caracteres');
            return false;
        }

        if (titulo.length > 50) {
            console.warn('⚠️ Título excede limite de 50 caracteres');
            alert('Título não pode exceder 50 caracteres');
            return false;
        }

        return true;
    }

    /**
     * Salva os dados
     */
    save() {
        console.log('💾 Salvando dados...');

        if (!this.validate()) {
            return;
        }

        // Verificar se houve mudanças (em qualquer campo)
        const mudancas = Object.keys(this.tempValues).some(key => 
            this.tempValues[key] !== this.originalValues[key]
        );

        if (!mudancas) {
            console.log('ℹ️ Nenhuma alteração detectada');
            this.close();
            return;
        }

        if (typeof atributosManager === 'undefined') {
            console.warn('⚠️ AtributosManager não encontrado');
            alert('Erro: Sistema de atributos não disponível');
            return;
        }

        // Atualizar dados no AtributosManager
        atributosManager.personagemData.nome = this.tempValues.nomePersonagem;
        atributosManager.personagemData.titulo = this.tempValues.tituloPersonagem;
        atributosManager.personagemData.background = this.tempValues.background;
        atributosManager.personagemData.origem = this.tempValues.origem;
        atributosManager.personagemData.afiliacao = this.tempValues.afiliacao;
        atributosManager.personagemData.statusNarrativo = this.tempValues.statusNarrativo;
        atributosManager.personagemData.notasAdicionais = this.tempValues.notasAdicionais;

        // ✅ PERSISTIR EM LOCALSTORAGE
        if (window.appState && window.localStorageManager) {
            const state = window.appState.getState();
            // Atualizar estado com os novos dados
            const jogadorInfoAtualizado = {
                nomePersonagem: this.tempValues.nomePersonagem,
                tituloPersonagem: this.tempValues.tituloPersonagem,
                classePersonagem: this.tempValues.classePersonagem,
                racaPersonagem: this.tempValues.racaPersonagem,
                origem: this.tempValues.origem,
                afiliacao: this.tempValues.afiliacao,
                statusNarrativo: this.tempValues.statusNarrativo,
                notasAdicionais: this.tempValues.notasAdicionais,
                background: this.tempValues.background
            };
            
            // Salvar no state
            state.jogadorInfo = jogadorInfoAtualizado;
            window.appState.setState(state);
            
            // Salvar em localStorage
            window.localStorageManager.saveJogadorInfo(jogadorInfoAtualizado);
            console.log('💾 Informações do jogador salvos em localStorage');
        }

        // Atualizar exibição na aba de atributos
        this.updateAttributesDisplay();

        // Atualizar valores originais para próxima edição
        this.originalValues = { ...this.tempValues };

        console.log('✓ Dados salvos com sucesso');
        alert('✅ Dados salvos com sucesso!');
        this.close();
    }

    /**
     * Atualiza a exibição na aba de atributos principal
     */
    updateAttributesDisplay() {
        console.log('🎨 Atualizando exibição de atributos...');

        // Atualizar nome
        const nomeElement = document.querySelector('#personagem-nome');
        if (nomeElement) {
            nomeElement.textContent = this.tempValues.nomePersonagem;
        }

        // Atualizar título
        const tituloElement = document.querySelector('#personagem-titulo');
        if (tituloElement) {
            tituloElement.textContent = this.tempValues.tituloPersonagem;
        }

        // Atualizar classe
        const classeElement = document.querySelector('#personagem-classe');
        if (classeElement) {
            const classe = this.tempValues.classePersonagem || 'Classe';
            classeElement.textContent = classe;
        }

        // Atualizar raça
        const racaElement = document.querySelector('#personagem-raca');
        if (racaElement) {
            const raca = this.tempValues.racaPersonagem || 'Raça';
            racaElement.textContent = raca;
        }

        // ✅ Sincronizar com AtributosManager para que renderize corretamente
        if (typeof atributosManager !== 'undefined') {
            atributosManager.personagemData.nome = this.tempValues.nomePersonagem;
            atributosManager.personagemData.titulo = this.tempValues.tituloPersonagem;
            atributosManager.personagemData.classe = this.tempValues.classePersonagem;
            
            // Converter nome da raça para código
            const racaCodigos = {
                'Humano': 'humano',
                'Elfo': 'elfo',
                'Anão': 'anao'
            };
            const racaCodigo = racaCodigos[this.tempValues.racaPersonagem];
            if (racaCodigo) {
                atributosManager.personagemData.raca = racaCodigo;
            }
            
            // Re-renderizar para refletir mudanças
            atributosManager.renderizarPersonagem();
            console.log('✅ AtributosManager sincronizado e re-renderizado');
        }

        console.log('✓ Exibição atualizada');
    }

    /**
     * Abre o popup
     */
    open() {
        if (this.isOpen) return;
        
        console.log('📂 Abrindo popup de informações...');
        this.loadValuesFromState();
        
        const overlay = document.querySelector('#popup-info-jogador-overlay');
        if (overlay) {
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            this.isOpen = true;
            console.log('✓ Popup visível');
        }
    }

    /**
     * Fecha o popup
     */
    close() {
        if (!this.isOpen) return;
        
        console.log('📁 Fechando popup de informações...');
        const overlay = document.querySelector('#popup-info-jogador-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            this.isOpen = false;
        }

        // Restaurar valores originais se não foi salvo
        this.tempValues = { ...this.originalValues };
    }

    /**
     * Volta para o menu principal
     * Mantém todos os dados salvos
     */
    voltarMenu() {
        console.log('🔙 Voltando do popup de info para o menu principal...');
        this.close();
        
        // Aguardar a animação de fechamento
        setTimeout(() => {
            const btnMenu = document.getElementById('btn-menu-principal');
            if (btnMenu) {
                btnMenu.click();
                btnMenu.focus();
                console.log('✅ Voltado com sucesso para o menu principal');
            } else {
                console.warn('⚠️ Botão do menu principal não encontrado');
            }
        }, 300);
    }

    /**
     * Retorna o status atual do popup
     */
    getStatus() {
        return {
            isOpen: this.isOpen,
            activeTab: this.activeTab,
            tempValues: { ...this.tempValues },
            hasChanges: this.tempValues !== this.originalValues
        };
    }

    /**
     * Debug do popup
     */
    debug() {
        console.group('Estado do Popup de Informações');
        console.table(this.getStatus());
        console.groupEnd();
    }
}

/* ================================================= */
/* INICIALIZAÇÃO                                     */
/* ================================================= */

let popupInfoJogador = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('📋 DOMContentLoaded disparado - PopupInfoJogador');
    
    // Aguardar um pequeno delay para garantir que atributosManager está pronto
    setTimeout(() => {
        popupInfoJogador = new PopupInfoJogador();
        window.popupInfoJogador = popupInfoJogador;
        console.log('🎯 popupInfoJogador disponível globalmente');
    }, 100);
});
