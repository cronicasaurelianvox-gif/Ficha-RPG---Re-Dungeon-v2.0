/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LIMPAR-FICHA-AVANCADO.JS (VERSÃO 2.0)
 * Sistema Avançado de Gerenciamento de Limpeza da Ficha
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * NOVO SISTEMA:
 * - Modal com seleção granular de categorias
 * - Limpeza segmentada por módulo
 * - Resumo antes de confirmar
 * - Confirmação final com segurança
 * - Reutiliza lógica existente do limpar-ficha-isolado.js
 */

class LimparFichaAvancado {
    constructor() {
        this.isRunning = false;
        this.selectedItems = new Map();
        this.lastSelection = null;
        this.confirmationStep = false;
        
        console.log('🧹 [LimparFichaAvancado] Criando instância...');
        this.init();
    }

    init() {
        console.log('🧹 [LimparFichaAvancado] Inicializando...');
        
        const btn = document.getElementById('btn-limpar-ficha');
        if (!btn) {
            console.warn('⏳ [LimparFichaAvancado] Botão não encontrado, tentando novamente...');
            setTimeout(() => this.init(), 500);
            return;
        }

        console.log('✅ [LimparFichaAvancado] Botão encontrado');
        
        // Remover listeners antigos
        btn.onclick = null;
        
        // Criar modal
        this.criarModal();
        
        // Adicionar listener novo
        btn.addEventListener('click', (e) => {
            console.log('🖱️ Clique no botão detectado');
            e.preventDefault();
            e.stopPropagation();
            this.abrirModal();
        });
        
        console.log('✅ [LimparFichaAvancado] Pronto para usar!');
    }

    /**
     * Cria a estrutura HTML do modal
     */
    criarModal() {
        // Verificar se já existe
        if (document.getElementById('limpar-ficha-modal-overlay')) {
            return;
        }

        const html = `
            <div id="limpar-ficha-modal-overlay" class="limpar-ficha-modal-overlay">
                <div class="limpar-ficha-modal">
                    <!-- HEADER -->
                    <div class="limpar-ficha-modal-header">
                        <h2>Gerenciar Limpeza da Ficha</h2>
                        <button class="limpar-ficha-modal-close" id="limpar-ficha-close">&times;</button>
                    </div>

                    <!-- BODY -->
                    <div class="limpar-ficha-modal-body">
                        <div class="limpar-ficha-descricao">
                            <strong>ℹ️ Como usar:</strong> Selecione os dados que deseja apagar. O sistema limpará apenas o que foi marcado.
                        </div>

                        <!-- SEÇÕES -->
                        <div id="limpar-ficha-sections"></div>
                    </div>

                    <!-- FOOTER -->
                    <div class="limpar-ficha-modal-footer">
                        <div class="limpar-ficha-resumo">
                            <div class="limpar-ficha-resumo-title">Resumo da Limpeza</div>
                            <div class="limpar-ficha-resumo-content" id="limpar-ficha-resumo">
                                <span class="limpar-ficha-resumo-vazio">Nada selecionado</span>
                            </div>
                        </div>
                        <div class="limpar-ficha-btn-group">
                            <button class="limpar-ficha-btn limpar-ficha-btn-cancel" id="limpar-ficha-cancel">Cancelar</button>
                            <button class="limpar-ficha-btn limpar-ficha-btn-primary" id="limpar-ficha-confirmar" disabled>Confirmar Limpeza</button>
                        </div>
                    </div>

                    <!-- CONFIRMAÇÃO FINAL (ESCONDIDA) -->
                    <div class="limpar-ficha-confirmation" id="limpar-ficha-confirmation">
                        <div class="limpar-ficha-confirmation-title">⚠️ CONFIRMAÇÃO FINAL</div>
                        <div class="limpar-ficha-confirmation-text" id="limpar-ficha-confirmation-text">
                            Você está prestes a apagar os dados selecionados. Esta ação não pode ser desfeita!
                        </div>
                        <div class="limpar-ficha-confirmation-buttons">
                            <button class="limpar-ficha-btn-abort" id="limpar-ficha-abort">Cancelar</button>
                            <button class="limpar-ficha-btn-danger" id="limpar-ficha-delete">Apagar Tudo</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- POPUP DE CONFIRMAÇÃO (MODAL SOBRE MODAL) -->
            <div id="limpar-ficha-confirmation-popup-overlay" class="limpar-ficha-popup-overlay">
                <div class="limpar-ficha-confirmation-popup">
                    <div class="limpar-ficha-popup-header">
                        <h3>⚠️ Confirmar Exclusão</h3>
                        <button class="limpar-ficha-popup-close" id="limpar-ficha-popup-close">&times;</button>
                    </div>
                    <div class="limpar-ficha-popup-body">
                        <p style="color: #ff6b6b; font-weight: bold; margin-bottom: 16px;">⚠️ Esta ação NÃO pode ser desfeita!</p>
                        <p style="margin-bottom: 16px;">Você está prestes a apagar os seguintes itens:</p>
                        <div id="limpar-ficha-popup-items" class="limpar-ficha-popup-items"></div>
                    </div>
                    <div class="limpar-ficha-popup-buttons">
                        <button class="limpar-ficha-btn limpar-ficha-btn-cancel" id="limpar-ficha-popup-cancel">Cancelar</button>
                        <button class="limpar-ficha-btn limpar-ficha-btn-danger" id="limpar-ficha-popup-confirm">Sim, Apagar Tudo</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', html);
        this.setupModalListeners();
        this.renderSections();
    }

    /**
     * Setup dos listeners do modal
     */
    setupModalListeners() {
        const overlay = document.getElementById('limpar-ficha-modal-overlay');
        const closeBtn = document.getElementById('limpar-ficha-close');
        const cancelBtn = document.getElementById('limpar-ficha-cancel');
        const abortBtn = document.getElementById('limpar-ficha-abort');
        const confirmarBtn = document.getElementById('limpar-ficha-confirmar');
        const deleteBtn = document.getElementById('limpar-ficha-delete');

        // Fechar ao clicar no X
        closeBtn.addEventListener('click', () => this.fecharModal());

        // Fechar ao clicar fora do modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.fecharModal();
        });

        // Cancelar
        cancelBtn.addEventListener('click', () => this.fecharModal());
        abortBtn.addEventListener('click', () => this.voltarSeleção());

        // Confirmar
        confirmarBtn.addEventListener('click', () => this.mostrarConfirmacao());

        // Deletar
        deleteBtn.addEventListener('click', () => this.executarLimpeza());

        // ========== LISTENERS DO POPUP ==========
        const popupOverlay = document.getElementById('limpar-ficha-confirmation-popup-overlay');
        const popupClose = document.getElementById('limpar-ficha-popup-close');
        const popupCancel = document.getElementById('limpar-ficha-popup-cancel');
        const popupConfirm = document.getElementById('limpar-ficha-popup-confirm');

        // Fechar popup ao clicar no X
        popupClose.addEventListener('click', () => this.fecharPopupConfirmacao());

        // Fechar popup ao clicar no botão Cancelar
        popupCancel.addEventListener('click', () => this.fecharPopupConfirmacao());

        // Fechar popup ao clicar fora dele
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) this.fecharPopupConfirmacao();
        });

        // Confirmar e executar limpeza
        popupConfirm.addEventListener('click', () => this.executarLimpeza());
    }

    /**
     * Renderiza as seções de seleção
     */
    renderSections() {
        const sectionsContainer = document.getElementById('limpar-ficha-sections');
        const sections = this.obterSeccoes();

        sectionsContainer.innerHTML = sections.map(section => `
            <div class="limpar-ficha-section collapsed" data-section="${section.id}">
                <div class="limpar-ficha-section-title">
                    <span class="limpar-ficha-section-toggle">▶</span>
                    <span>${section.icon} ${section.nome}</span>
                </div>
                <div class="limpar-ficha-section-content">
                    ${section.items.map(item => `
                        <label class="limpar-ficha-checkbox-item">
                            <input type="checkbox" data-item="${item.id}" data-section="${section.id}">
                            <span class="limpar-ficha-checkbox-label">
                                <strong>${item.nome}</strong>
                                ${item.descricao ? `<span class="desc">${item.descricao}</span>` : ''}
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Adicionar listeners aos checkboxes
        document.querySelectorAll('.limpar-ficha-checkbox-item input').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.atualizarSeleção());
        });

        // Adicionar listeners aos títulos (collapse)
        document.querySelectorAll('.limpar-ficha-section-title').forEach(title => {
            title.addEventListener('click', (e) => {
                e.stopPropagation();
                const section = title.closest('.limpar-ficha-section');
                section.classList.toggle('collapsed');
            });
        });

        // Adicionar listeners aos botões de ação
        this.renderBotoesAção();
    }

    /**
     * Renderiza botões de ação (Selecionar Tudo, etc)
     */
    renderBotoesAção() {
        const body = document.querySelector('.limpar-ficha-modal-body');
        
        // Verificar se já existe
        if (document.getElementById('limpar-ficha-botoes-acao')) {
            return;
        }

        const botoesHtml = `
            <div id="limpar-ficha-botoes-acao" class="limpar-ficha-actions">
                <button class="limpar-ficha-btn limpar-ficha-btn-secondary" id="limpar-ficha-select-all">✓ Selecionar Tudo</button>
                <button class="limpar-ficha-btn limpar-ficha-btn-secondary" id="limpar-ficha-deselect-all">✗ Desmarcar Tudo</button>
                <button class="limpar-ficha-btn limpar-ficha-btn-secondary" id="limpar-ficha-restore-default">⟲ Restaurar Padrão</button>
            </div>
        `;

        body.insertAdjacentHTML('beforeend', botoesHtml);

        // Listeners
        document.getElementById('limpar-ficha-select-all').addEventListener('click', () => this.selecionarTudo());
        document.getElementById('limpar-ficha-deselect-all').addEventListener('click', () => this.desmarcarTudo());
        document.getElementById('limpar-ficha-restore-default').addEventListener('click', () => this.restaurarPadrão());
    }

    /**
     * Define as seções e itens disponíveis
     */
    obterSeccoes() {
        return [
            {
                id: 'dados-principais',
                icon: '📋',
                nome: 'Dados Principais',
                items: [
                    { id: 'info-geral', nome: 'Informações Gerais do Personagem', descricao: 'Nome, título, classe, raça' },
                    { id: 'atributos', nome: 'Atributos', descricao: 'FOR, VIT, AGI, PER, INT, SOR' },
                    { id: 'aptidoes', nome: 'Aptidões / Perícias', descricao: 'Todas as aptidões ganhas' },
                    { id: 'habilidades', nome: 'Habilidades', descricao: 'Arts, núcleos de cultivação' },
                    { id: 'inventario', nome: 'Inventário', descricao: 'Itens e armazenamentos' },
                    { id: 'treinamento', nome: 'Treinamento', descricao: 'Progressão e histórico' },
                    { id: 'reputacao', nome: 'Reputação', descricao: 'Pontos de reputação' },
                    { id: 'cultivacao', nome: 'Cultivo', descricao: 'Sistema de cultivação completo' },
                    { id: 'corpo-imortal', nome: 'Corpo Imortal', descricao: 'Dados do sistema de corpo imortal' }
                ]
            },
            {
                id: 'companheiros',
                icon: '👥',
                nome: 'Companheiros',
                items: [
                    { id: 'companheiros-todos', nome: 'Todos os Companheiros', descricao: 'Remove todos os companheiros' },
                    { id: 'companheiros-dados', nome: 'Apenas Dados dos Companheiros', descricao: 'Mantém inventários intactos' },
                    { id: 'companheiros-inventario', nome: 'Apenas Inventários dos Companheiros', descricao: 'Remove itens dos companheiros' },
                    { id: 'companheiros-habilidades', nome: 'Apenas Habilidades dos Companheiros', descricao: 'Remove arts e habilidades' }
                ]
            },
            {
                id: 'midia',
                icon: '🖼️',
                nome: 'Mídia / Arquivos',
                items: [
                    { id: 'img-personagem', nome: 'Imagens do Personagem', descricao: 'Avatar armazenado no IndexedDB' },
                    { id: 'img-companheiros', nome: 'Imagens dos Companheiros', descricao: 'Avatares dos companheiros' }
                ]
            },
            {
                id: 'sistema',
                icon: '⚙️',
                nome: 'Sistema',
                items: [
                    { id: 'cache-session', nome: 'Cache Temporário / Session', descricao: 'Dados de sessão (sessionStorage)' },
                    { id: 'import-temp', nome: 'Dados de Importação Temporários', descricao: 'Arquivos temporários de import' },
                    { id: 'indexeddb', nome: 'IndexedDB / Bancos Locais', descricao: 'Bancos de dados locais' }
                ]
            }
        ];
    }

    /**
     * Atualiza estado de seleção
     */
    atualizarSeleção() {
        this.selectedItems.clear();

        document.querySelectorAll('.limpar-ficha-checkbox-item input:checked').forEach(checkbox => {
            const itemId = checkbox.getAttribute('data-item');
            const sectionId = checkbox.getAttribute('data-section');
            this.selectedItems.set(itemId, sectionId);
        });

        this.atualizarResumo();
    }

    /**
     * Atualiza o resumo de seleção
     */
    atualizarResumo() {
        const resumoDiv = document.getElementById('limpar-ficha-resumo');
        const confirmarBtn = document.getElementById('limpar-ficha-confirmar');

        if (this.selectedItems.size === 0) {
            resumoDiv.innerHTML = '<span class="limpar-ficha-resumo-vazio">Nada selecionado</span>';
            confirmarBtn.disabled = true;
        } else {
            const items = Array.from(this.selectedItems.keys());
            const itemsHtml = items.map(itemId => {
                const item = this.obterItemPorId(itemId);
                return item ? `<div class="limpar-ficha-resumo-item">${item.nome}</div>` : '';
            }).join('');

            resumoDiv.innerHTML = itemsHtml;
            confirmarBtn.disabled = false;
        }
    }

    /**
     * Obtém item por ID
     */
    obterItemPorId(itemId) {
        const sections = this.obterSeccoes();
        for (const section of sections) {
            const item = section.items.find(i => i.id === itemId);
            if (item) return item;
        }
        return null;
    }

    /**
     * Seleciona todos os checkboxes
     */
    selecionarTudo() {
        document.querySelectorAll('.limpar-ficha-checkbox-item input').forEach(checkbox => {
            checkbox.checked = true;
        });
        this.atualizarSeleção();
    }

    /**
     * Desmarca todos os checkboxes
     */
    desmarcarTudo() {
        document.querySelectorAll('.limpar-ficha-checkbox-item input').forEach(checkbox => {
            checkbox.checked = false;
        });
        this.atualizarSeleção();
    }

    /**
     * Restaura seleção padrão (recomendada)
     */
    restaurarPadrão() {
        // Padrão: limpar dados principais mas manter mídia
        const padraoIds = [
            'info-geral', 'atributos', 'aptidoes', 'habilidades', 
            'inventario', 'treinamento', 'reputacao', 'cultivacao', 
            'corpo-imortal', 'companheiros-todos', 'cache-session', 
            'import-temp', 'indexeddb'
        ];

        document.querySelectorAll('.limpar-ficha-checkbox-item input').forEach(checkbox => {
            const itemId = checkbox.getAttribute('data-item');
            checkbox.checked = padraoIds.includes(itemId);
        });

        this.atualizarSeleção();
    }

    /**
     * Abre o modal
     */
    abrirModal() {
        if (this.isRunning) {
            console.warn('⏳ Limpeza já em progresso');
            return;
        }

        const overlay = document.getElementById('limpar-ficha-modal-overlay');
        this.confirmationStep = false;
        overlay.classList.add('ativo');
        document.body.style.overflow = 'hidden';

        // Resetar confirmação
        document.getElementById('limpar-ficha-confirmation').classList.remove('ativo');
    }

    /**
     * Fecha o modal
     */
    fecharModal() {
        const overlay = document.getElementById('limpar-ficha-modal-overlay');
        overlay.classList.remove('ativo');
        document.body.style.overflow = '';
        this.confirmationStep = false;

        // Resetar confirmação
        document.getElementById('limpar-ficha-confirmation').classList.remove('ativo');
    }

    /**
     * Mostra tela de confirmação final
     */
    mostrarConfirmacao() {
        if (this.selectedItems.size === 0) return;

        const items = Array.from(this.selectedItems.keys());
        const itemsFormatados = items
            .map(id => this.obterItemPorId(id)?.nome)
            .filter(Boolean);

        // Montar lista de itens
        const itemsHTML = itemsFormatados
            .map(nome => `<div class="limpar-ficha-popup-item">✓ ${nome}</div>`)
            .join('');

        // Preencher popup
        const popupItems = document.getElementById('limpar-ficha-popup-items');
        popupItems.innerHTML = itemsHTML;

        // Mostrar popup
        const popupOverlay = document.getElementById('limpar-ficha-confirmation-popup-overlay');
        popupOverlay.classList.add('ativo');
        this.confirmationStep = true;
    }

    /**
     * Volta para tela de seleção
     */
    voltarSeleção() {
        const confirmation = document.getElementById('limpar-ficha-confirmation');
        confirmation.classList.remove('ativo');
        this.confirmationStep = false;
    }

    /**
     * Fecha o popup de confirmação
     */
    fecharPopupConfirmacao() {
        const popupOverlay = document.getElementById('limpar-ficha-confirmation-popup-overlay');
        popupOverlay.classList.remove('ativo');
        this.confirmationStep = false;
    }

    /**
     * Executa a limpeza
     */
    async executarLimpeza() {
        console.log('═══════════════════════════════════════════════');
        console.log('⚙️ [executarLimpeza] INICIANDO LIMPEZA');
        console.log('═══════════════════════════════════════════════');

        if (this.isRunning) {
            console.warn('⏳ AVISO: Limpeza já em progresso!');
            return;
        }

        if (this.selectedItems.size === 0) {
            console.warn('⏳ AVISO: Nenhum item selecionado!');
            alert('❌ Selecione pelo menos um item para apagar.');
            return;
        }

        this.isRunning = true;
        const deleteBtn = document.getElementById('limpar-ficha-delete');
        if (deleteBtn) deleteBtn.disabled = true;

        try {
            console.log('🔥 INICIANDO LIMPEZA GRANULAR');
            console.log(`📊 Total de itens: ${this.selectedItems.size}`);
            console.log('📋 Itens selecionados:', Array.from(this.selectedItems.keys()));

            // Mapa de funções de limpeza
            const limpadoras = {
                'info-geral': () => this.limparInfoGeral(),
                'atributos': () => this.limparAtributos(),
                'aptidoes': () => this.limparAptidoes(),
                'habilidades': () => this.limparHabilidades(),
                'inventario': () => this.limparInventario(),
                'treinamento': () => this.limparTreinamento(),
                'reputacao': () => this.limparReputacao(),
                'cultivacao': () => this.limparCultivacao(),
                'corpo-imortal': () => this.limparCorpoImortal(),
                'companheiros-todos': () => this.limparCompanheirosCompleto(),
                'companheiros-dados': () => this.limparCompanheiroDados(),
                'companheiros-inventario': () => this.limparCompanheiroInventario(),
                'companheiros-habilidades': () => this.limparCompanheiroHabilidades(),
                'img-personagem': () => this.limparImgPersonagem(),
                'img-companheiros': () => this.limparImgCompanheiros(),
                'cache-session': () => this.limparCacheSession(),
                'import-temp': () => this.limparImportTemp(),
                'indexeddb': () => this.limparIndexedDB()
            };

            let contador = 0;
            let erros = 0;

            // Executar cada limpeza selecionada
            for (const [itemId, sectionId] of this.selectedItems) {
                const limpadora = limpadoras[itemId];
                if (!limpadora) {
                    console.warn(`⚠️ Nenhuma função de limpeza para: ${itemId}`);
                    continue;
                }

                try {
                    console.log(`\n  [${++contador}/${this.selectedItems.size}] ⚙️ Limpando: ${itemId}`);
                    await limpadora();
                    console.log(`  ✅ Sucesso: ${itemId}`);
                } catch (e) {
                    erros++;
                    console.error(`  ❌ ERRO em ${itemId}:`, e.message);
                    console.error('  Stack:', e.stack);
                }
            }

            console.log('\n───────────────────────────────────────────────');
            console.log(`📝 Operações completadas: ${contador}`);
            console.log(`❌ Erros encontrados: ${erros}`);

            // Limpar DOM se necessário
            if (this.selectedItems.has('info-geral') || this.selectedItems.has('atributos')) {
                console.log('📝 Limpando DOM...');
                this.limparDOM();
                console.log('✅ DOM limpo');
            }

            // ⚠️ VERIFICAÇÃO FINAL - Garantir que localStorage realmente mudou
            console.log('\n🔍 VERIFICAÇÃO FINAL:');
            const beforeCount = this.selectedItems.size;
            const afterCount = Object.keys(localStorage).length;
            console.log(`  Itens selecionados para apagar: ${beforeCount}`);
            console.log(`  Chaves restantes em localStorage: ${afterCount}`);
            
            // Se alguma chave importante ainda existe, avisar
            const chavesImportantes = [
                'redungeon_ficha_atributos',
                'redungeon_ficha_aptidoes',
                'inventario',
                'redungeon_companheiros'
            ];
            
            let chavasRestantes = [];
            chavesImportantes.forEach(chave => {
                if (localStorage.getItem(chave)) {
                    chavasRestantes.push(chave);
                }
            });
            
            if (chavasRestantes.length > 0) {
                console.warn('⚠️ ATENÇÃO: Algumas chaves importantes ainda existem:');
                chavasRestantes.forEach(chave => {
                    console.warn(`    └─ ${chave}`);
                });
            } else {
                console.log('✅ Todas as chaves importantes foram removidas!');
            }

            console.log('\n═══════════════════════════════════════════════');
            console.log('✅ LIMPEZA COMPLETADA COM SUCESSO!');
            console.log('═══════════════════════════════════════════════\n');
            
            // 🔒 BLOQUEIO CRÍTICO: Impedir carregamento de dados ao recarregar
            console.log('🔒 [CRÍTICO] Ativando bloqueio de carregamento para reload...');
            sessionStorage.setItem('LIMPEZA_FICHA_ATIVA', 'true');
            console.log('✅ Bloqueio ativado');
            
            // Fechar popup e recarregar (sem alert)
            this.fecharPopupConfirmacao();
            setTimeout(() => {
                window.location.reload();
            }, 300);

        } catch (error) {
            console.error('═══════════════════════════════════════════════');
            console.error('❌ ERRO CRÍTICO NA LIMPEZA');
            console.error('═══════════════════════════════════════════════');
            console.error('Mensagem:', error.message);
            console.error('Stack:', error.stack);
            console.error('═══════════════════════════════════════════════\n');
            alert('❌ Erro durante a limpeza.\n\nAbra o console (F12) e procure pela seção com "ERRO CRÍTICO"');
            if (deleteBtn) deleteBtn.disabled = false;
        } finally {
            this.isRunning = false;
        }
    }

    // ═════════════════════════════════════════════════════════════════
    // FUNÇÕES DE LIMPEZA ESPECÍFICAS
    // ═════════════════════════════════════════════════════════════════

    limparInfoGeral() {
        const keys = ['redungeon_ficha_jogador_info', 'redungeon_classe_selecionada', 'redungeon_raca_selecionada', 'redungeon_classes_selecionadas'];
        const removidos = [];
        keys.forEach(k => {
            if (localStorage.getItem(k)) {
                removidos.push(k);
                localStorage.removeItem(k);
            }
        });
        console.log(`    └─ ${removidos.length} chaves removidas:`, removidos);
    }

    limparAtributos() {
        console.log('    └─ Removendo: redungeon_ficha_atributos');
        localStorage.removeItem('redungeon_ficha_atributos');
        if (window.localStorageManager) {
            window.localStorageManager.saveAtributos(null);
            console.log('    └─ LocalStorageManager resetado');
        }
    }

    limparAptidoes() {
        console.log('    └─ Removendo: redungeon_ficha_aptidoes');
        localStorage.removeItem('redungeon_ficha_aptidoes');
        if (window.aptidoesManager) {
            window.aptidoesManager.aptidoesPersonagem = [];
            window.aptidoesManager.configAptidoes = { ganhas: 0 };
            console.log('    └─ AptidoesManager resetado');
        }
    }

    limparHabilidades() {
        const keys = ['redungeon_character', 'redungeon_character_backup', 'redungeon_notifications'];
        const removidos = [];
        keys.forEach(k => {
            if (localStorage.getItem(k)) {
                removidos.push(k);
                localStorage.removeItem(k);
            }
        });
        console.log(`    └─ ${removidos.length} chaves de habilidades removidas:`, removidos);
        
        if (window.artsSystem?.character) {
            window.artsSystem.character.cores = [];
            window.artsSystem.character.arts = [];
            console.log('    └─ ArtsSystem resetado');
        }
    }

    limparInventario() {
        console.log('    └─ Removendo: inventario');
        localStorage.removeItem('inventario');
        if (window.inventarioManager?.inventario) {
            window.inventarioManager.inventario.itens = [];
            window.inventarioManager.inventario.armazenamentos = [];
            console.log('    └─ InventarioManager resetado');
        }
    }

    limparTreinamento() {
        console.log('    └─ Removendo: treinamento');
        localStorage.removeItem('treinamento');
        if (window.appState) {
            window.appState.setState({ treinamento: { atributos: {}, historico: [] } });
            console.log('    └─ AppState resetado');
        }
    }

    limparReputacao() {
        const keys = ['redungeon_ficha_reputacao', 'redungeon_fortuna_atual', 'redungeon_ultima_rolagem_sorte'];
        const removidos = [];
        keys.forEach(k => {
            if (localStorage.getItem(k)) {
                removidos.push(k);
                localStorage.removeItem(k);
            }
        });
        console.log(`    └─ ${removidos.length} chaves de reputação removidas:`, removidos);
    }

    limparCultivacao() {
        const keys = Object.keys(localStorage).filter(k => k.includes('cultivacao'));
        keys.forEach(k => localStorage.removeItem(k));
        console.log(`    └─ ${keys.length} chaves de cultivação removidas`);
    }

    limparCorpoImortal() {
        console.log('    └─ Removendo: corpoImortalData');
        localStorage.removeItem('corpoImortalData');
    }

    limparCompanheirosCompleto() {
        console.log('    └─ Removendo: redungeon_companheiros + inventários');
        localStorage.removeItem('redungeon_companheiros');
        const inventarios = Object.keys(localStorage).filter(k => k.startsWith('companheiroInventario_'));
        inventarios.forEach(k => localStorage.removeItem(k));
        console.log(`    └─ ${inventarios.length} inventários de companheiros removidos`);
    }

    limparCompanheiroDados() {
        console.log('    └─ Removendo: redungeon_companheiros');
        localStorage.removeItem('redungeon_companheiros');
    }

    limparCompanheiroInventario() {
        const inventarios = Object.keys(localStorage).filter(k => k.startsWith('companheiroInventario_'));
        inventarios.forEach(k => localStorage.removeItem(k));
        console.log(`    └─ ${inventarios.length} inventários de companheiros removidos`);
    }

    limparCompanheiroHabilidades() {
        const companheiroData = localStorage.getItem('redungeon_companheiros');
        if (companheiroData) {
            try {
                const data = JSON.parse(companheiroData);
                if (Array.isArray(data)) {
                    let count = 0;
                    data.forEach(comp => {
                        if (comp) {
                            comp.arts = [];
                            comp.habilidades = [];
                            count++;
                        }
                    });
                    localStorage.setItem('redungeon_companheiros', JSON.stringify(data));
                    console.log(`    └─ Habilidades de ${count} companheiros removidas`);
                }
            } catch (e) {
                console.warn('    └─ Erro ao limpar habilidades de companheiros:', e.message);
            }
        }
    }

    async limparImgPersonagem() {
        console.log('    └─ Removendo imagem do personagem');
        localStorage.removeItem('redungeon_ficha_personagem_imagem');
        if (window.ImagemStorageManager?.deletarImagem) {
            try {
                await window.ImagemStorageManager.deletarImagem('personagem_imagem');
                console.log('    └─ Imagem do personagem removida');
            } catch (e) {
                console.warn('    └─ Erro ao deletar imagem do personagem:', e.message);
            }
        }
    }

    async limparImgCompanheiros() {
        console.log('    └─ Removendo imagens dos companheiros');
        if (window.ImagemStorageManager?.deletarImagem) {
            const companheiroData = localStorage.getItem('redungeon_companheiros');
            if (companheiroData) {
                try {
                    const data = JSON.parse(companheiroData);
                    let count = 0;
                    if (Array.isArray(data)) {
                        for (const comp of data) {
                            if (comp?.id) {
                                await window.ImagemStorageManager.deletarImagem(`companheiro_${comp.id}`);
                                count++;
                            }
                        }
                    }
                    console.log(`    └─ ${count} imagens de companheiros removidas`);
                } catch (e) {
                    console.warn('    └─ Erro ao deletar imagens de companheiros:', e.message);
                }
            }
        }
    }

    limparCacheSession() {
        console.log('    └─ Limpando sessionStorage...');
        const tamanho = sessionStorage.length;
        sessionStorage.clear();
        console.log(`    └─ ${tamanho} itens removidos do sessionStorage`);
    }

    limparImportTemp() {
        const keys = Object.keys(localStorage).filter(k => 
            k.includes('temp') || k.includes('import') || k.includes('backup')
        );
        keys.forEach(k => localStorage.removeItem(k));
        console.log(`    └─ ${keys.length} arquivos temporários removidos`);
    }

    async limparIndexedDB() {
        try {
            console.log('    ├─ Removendo bancos de dados IndexedDB...');
            if (typeof indexedDB !== 'undefined' && indexedDB.databases) {
                const dbs = await indexedDB.databases();
                let count = 0;
                for (const db of dbs) {
                    indexedDB.deleteDatabase(db.name);
                    count++;
                }
                console.log(`    └─ ${count} bancos de dados removidos`);
            }
        } catch (e) {
            console.warn('    └─ Erro ao limpar IndexedDB:', e.message);
        }
    }

    /**
     * Limpa TODOS os elementos do DOM - Versão Agressiva
     */
    limparDOM() {
        try {
            console.log('🧹 LIMPANDO DOM COMPLETO...');
            
            // ═══════════════════════════════════════════════════════════════
            // 1. ATRIBUTOS PRIMÁRIOS E SECUNDÁRIOS
            // ═══════════════════════════════════════════════════════════════
            console.log('  [1] Limpando Atributos...');
            document.querySelectorAll('[data-atributo]').forEach(el => {
                el.innerHTML = '0<br><span>???</span>';
                el.classList.remove('atributo-alterado', 'atributo-bonus', 'atributo-penalidade');
            });
            
            // Limpar badges de pontos
            ['atributos-total-valor', 'power-combat-valor'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '0';
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 2. INFORMAÇÕES DO PERSONAGEM
            // ═══════════════════════════════════════════════════════════════
            console.log('  [2] Limpando Info do Personagem...');
            const infosPersonagem = {
                'personagem-nome': 'Nome do Personagem',
                'personagem-titulo': 'Título',
                'personagem-classe': 'Classe',
                'personagem-raca': 'Raça'
            };
            
            for (let id in infosPersonagem) {
                const el = document.getElementById(id);
                if (el) {
                    el.textContent = infosPersonagem[id];
                    el.innerHTML = infosPersonagem[id]; // Double-check
                }
            }
            
            // Limpar imagem do personagem
            const imgPersonagem = document.getElementById('personagem-imagem');
            if (imgPersonagem) {
                imgPersonagem.src = 'https://i.imgur.com/aVfMgAq.png';
            }
            
            // ═══════════════════════════════════════════════════════════════
            // 3. BARRAS DE STATUS (HP, ENERGIA, FADIGA)
            // ═══════════════════════════════════════════════════════════════
            console.log('  [3] Limpando Barras de Status...');
            const barsConfig = {
                'hp': { fill: 'hp-fill', text: 'hp-text', percentage: 'hp-percentage', value: 'HP' },
                'energy': { fill: 'energy-fill', text: 'energy-text', percentage: 'energy-percentage', value: 'Energy' },
                'fatigue': { fill: 'fatigue-fill', text: 'fatigue-text', percentage: 'fatigue-percentage', value: 'Fatigue' }
            };
            
            for (let barType in barsConfig) {
                const bar = barsConfig[barType];
                
                const fillEl = document.getElementById(bar.fill);
                if (fillEl) {
                    fillEl.style.width = (barType === 'fatigue' ? '0%' : '100%');
                    fillEl.className = fillEl.className.replace(/\b(hp-|energy-|fatigue-)\w+\b/g, '');
                }
                
                const textEl = document.getElementById(bar.text);
                if (textEl) textEl.textContent = '0 / 0';
                
                const percentEl = document.getElementById(bar.percentage);
                if (percentEl) percentEl.textContent = (barType === 'fatigue' ? '0%' : '0%');
            }
            
            // ═══════════════════════════════════════════════════════════════
            // 4. APTIDÕES
            // ═══════════════════════════════════════════════════════════════
            console.log('  [4] Limpando Aptidões...');
            const containerAptidoes = ['aptidoes-container', 'aptidoes-adquiridas', 'vantagens-desbloqueadas'];
            containerAptidoes.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = '';
            });
            
            document.querySelectorAll('[data-aptidao]').forEach(el => {
                el.remove();
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 5. HABILIDADES / ARTS
            // ═══════════════════════════════════════════════════════════════
            console.log('  [5] Limpando Habilidades...');
            ['rpg-content-habilidades', 'arts-nucleos-list', 'arts-list', 'habilidades-list'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = '';
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 6. INVENTÁRIO
            // ═══════════════════════════════════════════════════════════════
            console.log('  [6] Limpando Inventário...');
            const inventarioIds = [
                'inventario-itens-list',
                'inventario-itens',
                'inventario-armazenamentos-list',
                'inventario-espaco-total',
                'inventario-espaco-usado',
                'inventario-espaco-livre',
                'inventario-status-espaco'
            ];
            
            inventarioIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (id.includes('espaco')) {
                        el.textContent = '0.00';
                    } else if (id.includes('status')) {
                        el.textContent = '✅ OK';
                        el.className = 'status-ok';
                    } else {
                        el.innerHTML = '<div class="inventario-empty">📭 Nenhum item</div>';
                    }
                }
            });
            
            // Barra de espaço
            const barraEspaco = document.getElementById('inventario-barra-espaco');
            if (barraEspaco) {
                const fill = barraEspaco.querySelector('.espaco-barra-fill');
                if (fill) {
                    fill.style.width = '0%';
                    fill.className = 'espaco-barra-fill barra-ok';
                }
            }
            
            // ═══════════════════════════════════════════════════════════════
            // 7. TREINAMENTO
            // ═══════════════════════════════════════════════════════════════
            console.log('  [7] Limpando Treinamento...');
            ['rpg-content-treinamento', 'treinamento-container', 'treinamento-list'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = '';
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 8. COMPANHEIROS
            // ═══════════════════════════════════════════════════════════════
            console.log('  [8] Limpando Companheiros...');
            ['rpg-content-companheiros', 'companheiros-list', 'listCompanheiros', 'companheiros-grid'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.innerHTML = '<div class="companheiros-empty-message">Nenhum companheiro criado ainda</div>';
                }
            });
            
            document.querySelectorAll('[data-companheiro]').forEach(el => {
                el.remove();
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 9. INPUTS E TEXTAREAS (Formulários)
            // ═══════════════════════════════════════════════════════════════
            console.log('  [9] Limpando Inputs/Textareas...');
            document.querySelectorAll('input[type="text"], input[type="number"], textarea').forEach(el => {
                // Não limpar inputs de busca/filtro
                if (!el.id.includes('filtro') && !el.id.includes('busca') && !el.placeholder.includes('Buscar')) {
                    el.value = '';
                }
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 10. REPUTAÇÃO E OUTROS
            // ═══════════════════════════════════════════════════════════════
            console.log('  [10] Limpando Reputação e Outros...');
            ['reputacao-valor', 'fortuna-atual-value', 'sorte-total-value', 'bonus-sorte-display'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '0';
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 11. CORPO IMORTAL
            // ═══════════════════════════════════════════════════════════════
            console.log('  [11] Limpando Corpo Imortal...');
            ['corpo-imortal-container', 'dantian-principal', 'meridianos-list', 'nucleos-list'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = '';
            });
            
            // ═══════════════════════════════════════════════════════════════
            // 12. CULTIVAÇÃO
            // ═══════════════════════════════════════════════════════════════
            console.log('  [12] Limpando Cultivação...');
            ['cultivacao-container', 'cultivacao-estagios', 'cultivacao-info'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = '';
            });
            
            console.log('✅ DOM COMPLETAMENTE LIMPO');
        } catch (e) {
            console.warn('⚠️ Erro ao limpar DOM:', e.message);
            console.warn('Stack:', e.stack);
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════════════════════

console.log('📍 [LimparFichaAvancado] Script carregado. Estado do DOM:', document.readyState);

let instanciaLimparFichaAvancado = null;

function inicializarLimparFichaAvancado() {
    if (!instanciaLimparFichaAvancado) {
        console.log('🚀 [LimparFichaAvancado] Criando instância...');
        instanciaLimparFichaAvancado = new LimparFichaAvancado();
        window.limparFichaAvancado = instanciaLimparFichaAvancado;
    }
}

if (document.body) {
    inicializarLimparFichaAvancado();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('📍 [LimparFichaAvancado] DOMContentLoaded acionado');
    inicializarLimparFichaAvancado();
});

const checkInterval = setInterval(() => {
    if (document.getElementById('btn-limpar-ficha')) {
        console.log('✅ [LimparFichaAvancado] Botão detectado');
        inicializarLimparFichaAvancado();
        clearInterval(checkInterval);
    }
}, 100);

setTimeout(() => {
    clearInterval(checkInterval);
    if (instanciaLimparFichaAvancado) {
        console.log('\n╔════════════════════════════════════════════════════════════╗');
        console.log('║  🧹 LIMPAR FICHA AVANÇADO - PRONTO!                       ║');
        console.log('╚════════════════════════════════════════════════════════════╝\n');
    }
}, 5000);
