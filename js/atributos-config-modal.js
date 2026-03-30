/**
 * Gerenciador de Modal de Configuração de Atributos
 * Similar ao StatusConfigModal, mas para os 6 atributos principais
 * Campos: Base (atual), Total (máximo calculado), Extra, Bônus
 */

class AtributosConfigModal {
    constructor() {
        this.statusType = null;
        this.tempValues = {};
        this.originalValues = {};
        
        this.config = {
            // Código interno que representa o valor base fixo de cada atributo
            internalBaseCode: {
                forca: 10,
                vitalidade: 10,
                agilidade: 10,
                inteligencia: 10,
                percepcao: 10,
                sorte: 10
            }
        };

        this.attributeNames = {
            forca: { nome: 'Força', sigla: 'FOR' },
            vitalidade: { nome: 'Vitalidade', sigla: 'VIT' },
            agilidade: { nome: 'Agilidade', sigla: 'AGI' },
            inteligencia: { nome: 'Inteligência', sigla: 'INT' },
            percepcao: { nome: 'Percepção', sigla: 'PER' },
            sorte: { nome: 'Sorte', sigla: 'SOR' },
            prontidao: { nome: 'Prontidão', sigla: 'PRONT' },
            ataque: { nome: 'Ataque', sigla: 'ATK' },
            defesa: { nome: 'Defesa', sigla: 'DEF' },
            reacao: { nome: 'Reação', sigla: 'REA' },
            precisao: { nome: 'Precisão', sigla: 'PREC' },
            evasao: { nome: 'Evasão', sigla: 'EVA' }
        };

        this.init();
    }

    /**
     * Calcula os valores dos atributos secundários baseado nos primários
     * Implementa exatamente as fórmulas balanceadas
     */
    calcularAtributosSecundarios() {
        const stateManager = window.appState;
        if (!stateManager) {
            console.warn('⚠️ StateManager não disponível para cálculo de secundários');
            return;
        }

        const state = stateManager.getState();
        const primarios = state.atributos?.primarios || {};

        // Obter totais dos primários (ler apenas os TOTAIS já calculados)
        const FOR = primarios.forca?.total || 0;
        const VIT = primarios.vitalidade?.total || 0;
        const AGI = primarios.agilidade?.total || 0;
        const INT = primarios.inteligencia?.total || 0;
        const PER = primarios.percepcao?.total || 0;
        const SOR = primarios.sorte?.total || 0;

        // Garantir estrutura de secundários
        if (!state.atributos.secundarios) {
            state.atributos.secundarios = {};
        }

        // 🔹 PRONTIDÃO
        // soma = (AGI × 0.6) + (PER × 0.3) + (SOR × 0.1)
        // total = ceil((soma / 150) × 315) + (base + extra + bonus)
        if (!state.atributos.secundarios.prontidao) {
            state.atributos.secundarios.prontidao = { base: 0, extra: 0, bonus: 0 };
        }
        const somaProntidao = (AGI * 0.6) + (PER * 0.3) + (SOR * 0.1);
        const prontidaoCalculado = Math.ceil((somaProntidao / 150) * 315);
        const prontidaoAjustes = (state.atributos.secundarios.prontidao.base || 0) +
                                 (state.atributos.secundarios.prontidao.extra || 0) +
                                 (state.atributos.secundarios.prontidao.bonus || 0);
        state.atributos.secundarios.prontidao.total = prontidaoCalculado + prontidaoAjustes;

        // 🔹 ATAQUE
        // soma = (FOR × 0.7) + (INT × 0.3)
        // total = ceil((soma / 150) × 21) + (base + extra + bonus)
        if (!state.atributos.secundarios.ataque) {
            state.atributos.secundarios.ataque = { base: 0, extra: 0, bonus: 0 };
        }
        const somaAtaque = (FOR * 0.7) + (INT * 0.3);
        const ataqueCalculado = Math.ceil((somaAtaque / 150) * 21);
        const ataqueAjustes = (state.atributos.secundarios.ataque.base || 0) +
                              (state.atributos.secundarios.ataque.extra || 0) +
                              (state.atributos.secundarios.ataque.bonus || 0);
        state.atributos.secundarios.ataque.total = ataqueCalculado + ataqueAjustes;

        // 🔹 DEFESA
        // soma = (VIT × 0.6) + (AGI × 0.3) + (SOR × 0.1)
        // total = ceil((soma / 150) × 16) + (base + extra + bonus)
        if (!state.atributos.secundarios.defesa) {
            state.atributos.secundarios.defesa = { base: 0, extra: 0, bonus: 0 };
        }
        const somaDefesa = (VIT * 0.6) + (AGI * 0.3) + (SOR * 0.1);
        const defesaCalculado = Math.ceil((somaDefesa / 150) * 16);
        const defesaAjustes = (state.atributos.secundarios.defesa.base || 0) +
                              (state.atributos.secundarios.defesa.extra || 0) +
                              (state.atributos.secundarios.defesa.bonus || 0);
        state.atributos.secundarios.defesa.total = defesaCalculado + defesaAjustes;

        // 🔹 REAÇÃO
        // soma = (AGI × 0.5) + (PER × 0.3) + (SOR × 0.2)
        // total = ceil((soma / 150) × (12 - 6)) + 6 + (base + extra + bonus)
        if (!state.atributos.secundarios.reacao) {
            state.atributos.secundarios.reacao = { base: 0, extra: 0, bonus: 0 };
        }
        const somaReacao = (AGI * 0.5) + (PER * 0.3) + (SOR * 0.2);
        const reacaoCalculado = Math.ceil((somaReacao / 150) * (12 - 6)) + 6;
        const reacaoAjustes = (state.atributos.secundarios.reacao.base || 0) +
                              (state.atributos.secundarios.reacao.extra || 0) +
                              (state.atributos.secundarios.reacao.bonus || 0);
        state.atributos.secundarios.reacao.total = reacaoCalculado + reacaoAjustes;

        // 🔹 PRECISÃO
        // soma = (AGI × 0.3) + (PER × 0.6) + (SOR × 0.1)
        // total = ceil((soma / 150) × 12) + (base + extra + bonus)
        if (!state.atributos.secundarios.precisao) {
            state.atributos.secundarios.precisao = { base: 0, extra: 0, bonus: 0 };
        }
        const somaPrecisao = (AGI * 0.3) + (PER * 0.6) + (SOR * 0.1);
        const precisaoCalculado = Math.ceil((somaPrecisao / 150) * 12);
        const precisaoAjustes = (state.atributos.secundarios.precisao.base || 0) +
                                (state.atributos.secundarios.precisao.extra || 0) +
                                (state.atributos.secundarios.precisao.bonus || 0);
        state.atributos.secundarios.precisao.total = precisaoCalculado + precisaoAjustes;

        // 🔹 EVASÃO
        // soma = (AGI × 0.5) + (PER × 0.4) + (SOR × 0.1)
        // total = ceil((soma / 150) × 12) + (base + extra + bonus)
        if (!state.atributos.secundarios.evasao) {
            state.atributos.secundarios.evasao = { base: 0, extra: 0, bonus: 0 };
        }
        const somaEvasao = (AGI * 0.5) + (PER * 0.4) + (SOR * 0.1);
        const evasaoCalculado = Math.ceil((somaEvasao / 150) * 12);
        const evasaoAjustes = (state.atributos.secundarios.evasao.base || 0) +
                              (state.atributos.secundarios.evasao.extra || 0) +
                              (state.atributos.secundarios.evasao.bonus || 0);
        state.atributos.secundarios.evasao.total = evasaoCalculado + evasaoAjustes;

        // ✅ Persistir os cálculos
        stateManager.setState(state);

        console.log('✅ Atributos secundários recalculados:', {
            prontidao: state.atributos.secundarios.prontidao.total,
            ataque: state.atributos.secundarios.ataque.total,
            defesa: state.atributos.secundarios.defesa.total,
            reacao: state.atributos.secundarios.reacao.total,
            precisao: state.atributos.secundarios.precisao.total,
            evasao: state.atributos.secundarios.evasao.total
        });
    }

    /**
     * Inicializa o modal
     */
    init() {
        this.createModalHTML();
        this.setupEventListeners();
        console.log('✅ AtributosConfigModal inicializado');
    }

    /**
     * Cria a estrutura HTML do modal
     */
    createModalHTML() {
        const modalHTML = `
            <div id="atributos-config-modal-overlay" class="atributos-config-modal-overlay">
                <div class="atributos-config-modal">
                    <div class="atributos-config-modal__header">
                        <h2 id="atributos-config-title">Configurar Atributo</h2>
                        <button class="atributos-config-modal__close" id="atributos-config-close" aria-label="Fechar modal">✕</button>
                    </div>

                    <div class="atributos-config-modal__content">
                        <!-- Base (Atual) -->
                        <div class="atributos-config-quad">
                            <label class="atributos-config-quad__label">Base</label>
                            <input 
                                type="number" 
                                id="atributos-config-base" 
                                class="atributos-config-quad__input"
                                placeholder="0"
                                min="0"
                            >
                        </div>

                        <!-- Extra -->
                        <div class="atributos-config-quad">
                            <label class="atributos-config-quad__label">Extra</label>
                            <input 
                                type="number" 
                                id="atributos-config-extra" 
                                class="atributos-config-quad__input"
                                placeholder="0"
                                min="0"
                            >
                        </div>

                        <!-- Total (Bloqueado) -->
                        <div class="atributos-config-quad">
                            <div class="atributos-config-quad__header">
                                <label class="atributos-config-quad__label">Total</label>
                                <span class="atributos-config-quad__lock">🔒</span>
                            </div>
                            <input 
                                type="number" 
                                id="atributos-config-total" 
                                class="atributos-config-quad__input atributos-config-quad__input--locked"
                                placeholder="0"
                                readonly
                            >
                        </div>

                        <!-- Bônus (Bloqueado) -->
                        <div class="atributos-config-quad">
                            <div class="atributos-config-quad__header">
                                <label class="atributos-config-quad__label">Bônus</label>
                                <span class="atributos-config-quad__lock">🔒</span>
                            </div>
                            <input 
                                type="number" 
                                id="atributos-config-bonus" 
                                class="atributos-config-quad__input atributos-config-quad__input--locked"
                                data-atributo-bonus="forca"
                                placeholder="0"
                                readonly
                            >
                        </div>
                    </div>

                    <div class="atributos-config-modal__footer">
                        <button class="atributos-config-modal__btn-cancel" id="atributos-config-cancel">Cancelar</button>
                        <button class="atributos-config-modal__btn-save" id="atributos-config-save">Salvar</button>
                    </div>
                </div>
            </div>
        `;

        // Adiciona o modal ao body se não existir
        if (!document.getElementById('atributos-config-modal-overlay')) {
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }
    }

    /**
     * Setup de event listeners
     */
    setupEventListeners() {
        // Botões primários e secundários de atributos
        const atributosButtons = document.querySelectorAll('[id*="atributo"][id*="btn"], .atributo[data-atributo]');
        atributosButtons.forEach(btn => {
            if (btn.closest('button') || btn.classList.contains('atributo')) {
                const atributo = btn.dataset.atributo || this.getAtributoFromButton(btn);
                if (atributo) {
                    btn.addEventListener('click', () => this.open(atributo));
                }
            }
        });

        // Listeners do modal
        document.getElementById('atributos-config-close')?.addEventListener('click', () => {
            console.log('🔴 Botão FECHAR clicado');
            this.close();
        });
        document.getElementById('atributos-config-cancel')?.addEventListener('click', () => {
            console.log('🔴 Botão CANCELAR clicado');
            this.close();
        });
        document.getElementById('atributos-config-save')?.addEventListener('click', () => {
            console.log('🟢 Botão SALVAR clicado');
            this.saveChanges();
        });

        // Input listeners para atualizar Total em tempo real
        document.getElementById('atributos-config-base')?.addEventListener('input', () => this.updateTotal());
        document.getElementById('atributos-config-extra')?.addEventListener('input', () => this.updateTotal());

        // Fechar ao clicar no overlay
        document.getElementById('atributos-config-modal-overlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'atributos-config-modal-overlay') {
                this.close();
            }
        });

        console.log('✅ Event listeners configurados');
    }

    /**
     * Extrai o tipo de atributo do botão
     */
    getAtributoFromButton(btn) {
        // Busca por data-atributo no próprio elemento
        if (btn.dataset.atributo) return btn.dataset.atributo;
        
        // Busca por data-atributo em pais
        let parent = btn;
        while (parent) {
            if (parent.dataset.atributo) return parent.dataset.atributo;
            parent = parent.parentElement;
        }
        
        // Busca por classe (primários e secundários)
        const classes = Array.from(btn.classList);
        const atributos = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte', 'prontidao', 'ataque', 'defesa', 'reacao', 'precisao', 'evasao'];
        return atributos.find(attr => classes.some(cls => cls.includes(attr)));
    }

    /**
     * Abre o modal para um atributo específico
     */
    open(atributoType) {
        this.statusType = atributoType;
        
        // ✅ SINCRONIZAR BÔNUS ANTES DE ABRIR
        // Isso garante que o campo de bônus seja atualizado com os valores de aptidões
        if (window.bonusCalculator && typeof window.bonusCalculator.cicloCompletoAtualizacao === 'function') {
            console.log('🔄 Sincronizando bônus antes de abrir modal...');
            window.bonusCalculator.cicloCompletoAtualizacao();
        }
        
        // Carrega os dados do atributo
        this.loadAtributoData(atributoType);
        
        // Mostra o modal
        const modal = document.getElementById('atributos-config-modal-overlay');
        if (modal) {
            modal.classList.add('active');
            modal.style.display = 'flex';
        }

        console.log(`📂 Modal aberto para: ${atributoType}`);
    }

    /**
     * Alias para open() - compatibilidade com outros scripts
     */
    openModal(atributoType) {
        return this.open(atributoType);
    }

    /**
     * Carrega dados do atributo atual
     * ✅ Carrega base, extra do state-manager
     * ✅ Carrega bonus do AtributosManager (inclui aptidões)
     * ✅ Para secundários: exibe o valor calculado da fórmula + (base+extra+bonus)
     * ✅ Recalcula total na abertura
     */
    loadAtributoData(atributoType) {
        // ✅ Obter instância do state-manager
        const stateManager = window.appState;
        
        let base = 0, extra = 0, bonus = 0, total = 0;
        let formulaCalculado = 0; // Para secundários
        let isSecundario = false;

        // ✅ IMPORTANTE: Ler bônus do AtributosManager (inclui bônus de aptidões)
        let bonusManual = 0;
        let bonusAptidoes = 0;
        if (window.atributosManager && window.atributosManager.personagemData) {
            bonusManual = window.atributosManager.personagemData.atributosBonusManual?.[atributoType] ?? 0;
            bonusAptidoes = window.atributosManager.personagemData.atributosBonusAptidoes?.[atributoType] ?? 0;
            
            console.log(`📂 Bônus do AtributosManager para ${atributoType}:`, {
                bonusManual, bonusAptidoes, total: bonusManual + bonusAptidoes
            });
        }

        if (stateManager) {
            const state = stateManager.getState();
            
            // ✅ Determinar se é primário ou secundário
            const primarios = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte'];
            const secundarios = ['prontidao', 'ataque', 'defesa', 'reacao', 'precisao', 'evasao'];
            const isPrimario = primarios.includes(atributoType);
            isSecundario = secundarios.includes(atributoType);

            if (isPrimario && state.atributos?.primarios?.[atributoType]) {
                // ✅ Carregar primário do estado
                const attr = state.atributos.primarios[atributoType];
                base = attr.base ?? 0;
                extra = attr.extra ?? 0;
                // ✅ CORRIGIDO: Usar bônus total (manual + aptidões) do AtributosManager
                bonus = bonusManual + bonusAptidoes;
                total = base + extra + bonus; // ✅ Recalcular na abertura
                
                console.log(`📂 Atributo Primário "${atributoType}" carregado:`, {
                    base, extra, bonusManual, bonusAptidoes, bonus, total
                });
            } else if (isSecundario && state.atributos?.secundarios?.[atributoType]) {
                // ✅ Carregar secundário do estado
                const attr = state.atributos.secundarios[atributoType];
                
                // Para secundários, leremos a estrutura: base+extra+bonus são ajustes do usuário
                // O total já foi calculado pela fórmula em calcularAtributosSecundarios()
                base = attr.base ?? 0;
                extra = attr.extra ?? 0;
                // ✅ CORRIGIDO: Usar bônus total (manual + aptidões) do AtributosManager
                bonus = bonusManual + bonusAptidoes;
                total = attr.total ?? 0; // ✅ Usar o total já calculado
                
                // Calcular a parte da fórmula (total - ajustes do usuário) para exibição
                formulaCalculado = total - (base + extra + bonus);
                
                console.log(`📂 Atributo Secundário "${atributoType}" carregado:`, {
                    base, extra, bonusManual, bonusAptidoes, bonus, formulaCalculado, total
                });
            } else {
                // ✅ Valores padrão se atributo não existir no estado
                base = isPrimario ? 0 : 0;  // Todos começam com 0
                extra = 0;
                bonus = 0;
                total = base + extra + bonus;
                
                console.log(`⚠️ Atributo "${atributoType}" não encontrado no estado, usando valores padrão:`, {
                    base, extra, bonus, total
                });
            }
        } else {
            // ✅ Fallback se state-manager não existir
            base = 0;
            extra = 0;
            bonus = 0;
            total = base + extra + bonus;
            
            console.warn('⚠️ StateManager não encontrado, usando valores padrão');
        }

        // ✅ Armazenar valores temporários para edição
        this.tempValues = {
            base: base,
            extra: extra,
            bonus: bonus,
            total: total,
            isSecundario: isSecundario,
            formulaCalculado: formulaCalculado
        };

        // ✅ Armazenar valores originais para detectar mudanças (futuro)
        this.originalValues = {
            base: base,
            extra: extra,
            bonus: bonus,
            total: total,
            isSecundario: isSecundario,
            formulaCalculado: formulaCalculado
        };

        // Atualizar UI do modal
        this.updateUI();
    }

    /**
     * Atualiza a interface do modal
     * ✅ Para primários: Base + Extra + Bonus = Total
     * ✅ Para secundários: Fórmula + Base + Extra + Bonus = Total
     */
    updateUI() {
        const title = document.getElementById('atributos-config-title');
        if (title && this.attributeNames[this.statusType]) {
            title.textContent = `Configurar ${this.attributeNames[this.statusType].nome}`;
        }

        const baseInput = document.getElementById('atributos-config-base');
        const extraInput = document.getElementById('atributos-config-extra');
        const bonusInput = document.getElementById('atributos-config-bonus');
        const totalInput = document.getElementById('atributos-config-total');
        
        // ✅ Campo Base é sempre editável
        if (baseInput) {
            baseInput.readOnly = false;
            baseInput.classList.remove('atributos-config-quad__input--locked');
            baseInput.value = this.tempValues.base || 0;
        }

        // ✅ Campo Extra é sempre editável
        if (extraInput) {
            extraInput.readOnly = false;
            extraInput.classList.remove('atributos-config-quad__input--locked');
            extraInput.value = this.tempValues.extra || 0;
        }

        // ✅ Campo Bônus é SOMENTE LEITURA (reservado para futuro)
        if (bonusInput) {
            bonusInput.readOnly = true;
            bonusInput.classList.add('atributos-config-quad__input--locked');
            bonusInput.setAttribute('data-atributo-bonus', this.statusType);
            bonusInput.value = this.tempValues.bonus || 0;
        }

        // ✅ Calcular e exibir Total = Base + Extra + Bônus (ou Fórmula + Base + Extra + Bônus para secundários)
        if (totalInput) {
            totalInput.readOnly = true;
            totalInput.classList.add('atributos-config-quad__input--locked');
            this.updateTotal(); // Atualizar cálculo
        }

        // Adicionar listeners para auto-atualizar em tempo real
        this.setupPrimaryAttributeListeners();
    }

    /**
     * Atualiza o Total calculado
     * ✅ Para Primários: total = base + extra + bonus
     * ✅ Para Secundários: total = formulaCalculado + (base + extra + bonus)
     */
    updateTotal() {
        const baseInput = document.getElementById('atributos-config-base');
        const extraInput = document.getElementById('atributos-config-extra');
        const bonusInput = document.getElementById('atributos-config-bonus');
        const totalInput = document.getElementById('atributos-config-total');

        if (!baseInput || !extraInput || !bonusInput || !totalInput) {
            console.warn('⚠️ Alguns inputs não foram encontrados');
            return;
        }

        // ✅ Ler valores atuais
        const base = parseInt(baseInput.value) || 0;
        const extra = parseInt(extraInput.value) || 0;
        const bonus = parseInt(bonusInput.value) || 0;

        // ✅ Calcular total diferente para primários e secundários
        let total = 0;
        if (this.tempValues.isSecundario) {
            // Para secundários: Fórmula + (base + extra + bonus)
            total = this.tempValues.formulaCalculado + (base + extra + bonus);
            console.log(`🔹 Secundário "${this.statusType}" recalculado:`, {
                formula: this.tempValues.formulaCalculado,
                base,
                extra,
                bonus,
                total
            });
        } else {
            // Para primários: base + extra + bonus
            total = base + extra + bonus;
            console.log(`🔹 Primário "${this.statusType}" recalculado:`, {
                base,
                extra,
                bonus,
                total
            });
        }

        // ✅ Exibir total (sempre como readonly)
        totalInput.value = total;

        // Atualizar tempValues para possível referência futura
        this.tempValues.total = total;
    }

    /**
     * Adiciona listeners para auto-atualizar Total quando campos mudam
     * ✅ Atualiza tempValues em tempo real
     * ✅ Recalcula Total em tempo real (sem salvar)
     */
    setupPrimaryAttributeListeners() {
        const baseInput = document.getElementById('atributos-config-base');
        const extraInput = document.getElementById('atributos-config-extra');
        const bonusInput = document.getElementById('atributos-config-bonus');
        
        // ✅ Listener para Base
        if (baseInput) {
            baseInput.removeEventListener('input', this.baseInputHandler);
            this.baseInputHandler = () => {
                const novoValor = parseInt(baseInput.value) || 0;
                this.tempValues.base = novoValor;
                this.updateTotal();
                console.log(`📝 Base atualizado em tempo real: ${novoValor}`);
            };
            baseInput.addEventListener('input', this.baseInputHandler);
        }

        // ✅ Listener para Extra
        if (extraInput) {
            extraInput.removeEventListener('input', this.extraInputHandler);
            this.extraInputHandler = () => {
                const novoExtra = parseInt(extraInput.value) || 0;
                this.tempValues.extra = novoExtra;
                this.updateTotal();
                console.log(`📝 Extra atualizado em tempo real: ${novoExtra}`);
            };
            extraInput.addEventListener('input', this.extraInputHandler);
        }

        // ✅ Listener para Bônus (somente leitura, mas precisa de listener para referência)
        if (bonusInput) {
            bonusInput.removeEventListener('input', this.bonusInputHandler);
            this.bonusInputHandler = () => {
                const novoBonus = parseInt(bonusInput.value) || 0;
                this.tempValues.bonus = novoBonus;
                this.updateTotal();
                console.log(`📝 Bonus atualizado em tempo real: ${novoBonus}`);
            };
            bonusInput.addEventListener('input', this.bonusInputHandler);
        }
    }

    /**
     * Salva as mudanças de um atributo
     * ✅ Salva base, extra, bonus no state-manager
     * ✅ Nunca salva total (é derivado)
     */
    saveAtributoChanges(atributoType, base, extra, bonus) {
        // Validar dados
        base = parseInt(base) || 0;
        extra = parseInt(extra) || 0;
        bonus = parseInt(bonus) || 0;

        // ✅ Obter instância do state-manager
        const stateManager = window.appState;
        
        if (!stateManager) {
            console.error('❌ StateManager (window.appState) não encontrado');
            console.warn('⚠️ Tentando criar uma nova instância...');
            return;
        }

        // ✅ Obter estado atual completo
        const state = stateManager.getState();
        
        if (!state.atributos) {
            state.atributos = { primarios: {}, secundarios: {} };
        }

        // ✅ Inicializar estrutura se não existir
        if (!state.atributos.primarios) {
            state.atributos.primarios = {};
        }
        if (!state.atributos.secundarios) {
            state.atributos.secundarios = {};
        }

        // ✅ Determinar se é primário ou secundário
        const primarios = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte'];
        const isPrimario = primarios.includes(atributoType);

        if (isPrimario) {
            // ✅ Atributo Primário
            if (!state.atributos.primarios[atributoType]) {
                state.atributos.primarios[atributoType] = {};
            }

            // ✅ Salvar campos editáveis
            state.atributos.primarios[atributoType].base = base;
            state.atributos.primarios[atributoType].extra = extra;
            state.atributos.primarios[atributoType].bonus = bonus;

            // ✅ Calcular e salvar total (DERIVADO, não deve ser editável)
            const total = base + extra + bonus;
            state.atributos.primarios[atributoType].total = total;

            console.log(`✅ Atributo Primário "${atributoType}" salvo no estado:`, {
                base, extra, bonus, total
            });

            // ✅ PERSISTIR E RECALCULAR SECUNDÁRIOS
            stateManager.setState(state);
            // Recalcular todos os secundários que dependem deste primário
            this.calcularAtributosSecundarios();
            // Sincronizar visual dos secundários
            this.syncAllAttributesDisplay();
        } else {
            // ✅ Atributo Secundário
            if (!state.atributos.secundarios[atributoType]) {
                state.atributos.secundarios[atributoType] = {};
            }

            state.atributos.secundarios[atributoType].base = base;
            state.atributos.secundarios[atributoType].extra = extra;
            state.atributos.secundarios[atributoType].bonus = bonus;

            // ✅ Recalcular total do secundário usando fórmulas normalizadas
            const primarios = window.appState.getState().atributos.primarios;
            const FOR = primarios.forca?.total || 0;
            const VIT = primarios.vitalidade?.total || 0;
            const AGI = primarios.agilidade?.total || 0;
            const INT = primarios.inteligencia?.total || 0;
            const PER = primarios.percepcao?.total || 0;
            const SOR = primarios.sorte?.total || 0;

            let calculado = 0;
            const baseEditavel = base + extra + bonus;

            if (atributoType === 'prontidao') {
                const soma = (AGI * 0.6) + (PER * 0.3) + (SOR * 0.1);
                calculado = Math.ceil((soma / 150) * 315);
            } else if (atributoType === 'ataque') {
                const soma = (FOR * 0.7) + (INT * 0.3);
                calculado = Math.ceil((soma / 150) * 21);
            } else if (atributoType === 'defesa') {
                const soma = (VIT * 0.6) + (AGI * 0.3) + (SOR * 0.1);
                calculado = Math.ceil((soma / 150) * 16);
            } else if (atributoType === 'reacao') {
                const soma = (AGI * 0.5) + (PER * 0.3) + (SOR * 0.2);
                calculado = Math.ceil((soma / 150) * (12 - 6)) + 6;
            } else if (atributoType === 'precisao') {
                const soma = (AGI * 0.3) + (PER * 0.6) + (SOR * 0.1);
                calculado = Math.ceil((soma / 150) * 12);
            } else if (atributoType === 'evasao') {
                const soma = (AGI * 0.5) + (PER * 0.4) + (SOR * 0.1);
                calculado = Math.ceil((soma / 150) * 12);
            }

            const total = calculado + baseEditavel;
            state.atributos.secundarios[atributoType].total = total;

            console.log(`✅ Atributo Secundário "${atributoType}" salvo no estado:`, {
                base, extra, bonus, total
            });

            // ✅ Persistir mudanças no state-manager
            stateManager.setState(state);
        }

        // ✅ PERSISTIR EM LOCALSTORAGE
        if (window.localStorageManager) {
            window.localStorageManager.saveAtributos(state.atributos);
            console.log('💾 Atributos salvos em localStorage');
        } else {
            console.warn('⚠️ LocalStorageManager não disponível');
        }

        // ✅ Atualizar visual na aba de atributos
        this.updateVisualDisplay(atributoType, base, extra, bonus);

        // ✅ NOVO: Atualizar a imagem do personagem (sincronizar com mudanças)
        this.atualizarImagemDoPersonagem();

        // ✅ NOVO: Sincronizar AtributosManager com StateManager para garantir dados atualizados
        if (window.atributosManager && typeof window.atributosManager.syncWithState === 'function') {
            console.log('🔄 [AtributosConfigModal] Sincronizando AtributosManager com StateManager...');
            try {
                window.atributosManager.syncWithState();
                console.log('✅ [AtributosConfigModal] Sincronização de AtributosManager concluída');
            } catch (e) {
                console.error('❌ [AtributosConfigModal] Erro ao sincronizar AtributosManager:', e);
            }
        } else {
            console.warn('⚠️ [AtributosConfigModal] AtributosManager.syncWithState não disponível');
        }

        // ✅ NOVO: Notificar AptidoesManager para recalcular máximo de aptidões
        if (window.aptidoesManager && typeof window.aptidoesManager.recalcularEAtualizar === 'function') {
            console.log('🔔 [AtributosConfigModal] Notificando AptidoesManager para recalcular...');
            window.aptidoesManager.recalcularEAtualizar();
        }

        // ✅ NOVO: Atualizar Pontos Disponíveis do Corpo Imortal
        // Recalcula baseado na soma dos atributos primários / 50
        if (window.corpoImortalUI && window.corpoImortalUI.dados) {
            console.log('💎 [AtributosConfigModal] Atualizando Pontos Disponíveis do Corpo Imortal...');
            try {
                window.corpoImortalUI.dados.atualizarPontosDisponiveis();
                console.log('✅ [AtributosConfigModal] Pontos Disponíveis atualizados com sucesso');
            } catch (e) {
                console.error('❌ [AtributosConfigModal] Erro ao atualizar Pontos Disponíveis:', e);
            }
        }
    }

    /**
     * ✅ NOVO: Atualiza a imagem do personagem quando atributos mudam
     * Sincroniza os dados visuais com as mudanças
     */
    atualizarImagemDoPersonagem() {
        try {
            const stateManager = window.appState;
            if (!stateManager) {
                console.warn('⚠️ StateManager não disponível para atualizar imagem');
                return;
            }

            const state = stateManager.getState();
            
            // Se há imagem personalizada salva, ela deve ser mantida
            if (window.personagemImageController && typeof window.personagemImageController.loadSavedImage === 'function') {
                console.log('🖼️ Sincronizando imagem do personagem...');
                window.personagemImageController.loadSavedImage();
            }

            // Atualizar o frame da raça se necessário
            const personagemFrame = document.getElementById('personagem-frame');
            if (personagemFrame && state.personagem?.raca) {
                const novaRaca = state.personagem.raca;
                personagemFrame.setAttribute('data-raca', novaRaca);
                console.log(`🎨 Frame da raça atualizado para: ${novaRaca}`);
            }
        } catch (error) {
            console.warn('⚠️ Erro ao atualizar imagem do personagem:', error);
        }
    }

    /**
     * Atualiza o visual na aba de atributos após salvar
     * ✅ Exibe apenas o TOTAL (nunca exibe base, extra, bonus)
     */
    updateVisualDisplay(atributoType, base = null, extra = null, bonus = null) {
        const stateManager = window.appState;
        if (!stateManager) {
            console.warn('⚠️ StateManager não disponível');
            return;
        }

        const state = stateManager.getState();
        
        // Determinar total baseado no tipo de atributo
        let total = 0;
        const primarios = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte'];
        const isPrimario = primarios.includes(atributoType);

        if (isPrimario) {
            // Para primários: total = base + extra + bonus
            if (base !== null && extra !== null && bonus !== null) {
                total = base + extra + bonus;
            } else {
                const attr = state.atributos?.primarios?.[atributoType];
                total = attr?.total ?? 0;
            }
        } else {
            // Para secundários: ler total do estado (já calculado)
            const attr = state.atributos?.secundarios?.[atributoType];
            total = attr?.total ?? 0;
        }
        
        // ✅ Buscar elemento do atributo na aba
        const atributoElement = document.querySelector(
            `.atributo[data-atributo="${atributoType}"]`
        );

        if (atributoElement) {
            // ✅ Exibir apenas o TOTAL com sua sigla
            const sigla = this.getNomeSigla(atributoType);
            atributoElement.innerHTML = `${total}<br><span>${sigla}</span>`;
            
            console.log(`🎨 Visual atualizado para "${atributoType}": ${total}`);
        } else {
            console.warn(`⚠️ Elemento de atributo "${atributoType}" não encontrado na aba`);
        }
    }

    /**
     * Sincroniza a aba de atributos com o estado atual
     * ✅ Chamado ao inicializar ou ao carregar a página
     * ✅ Garante que todos os atributos exibem o total correto
     */
    syncAllAttributesDisplay() {
        const stateManager = window.appState;
        
        if (!stateManager) {
            console.warn('⚠️ StateManager não disponível para sincronização');
            return;
        }

        const state = stateManager.getState();
        const primarios = ['forca', 'vitalidade', 'agilidade', 'inteligencia', 'percepcao', 'sorte'];
        const secundarios = ['prontidao', 'ataque', 'defesa', 'reacao', 'precisao', 'evasao'];

        // ✅ Sincronizar primários
        primarios.forEach(attr => {
            const attrData = state.atributos?.primarios?.[attr];
            if (attrData) {
                const base = attrData.base ?? 0;
                const extra = attrData.extra ?? 0;
                const bonus = attrData.bonus ?? 0;
                this.updateVisualDisplay(attr, base, extra, bonus);
            } else {
                // Padrão para atributos não salvos
                this.updateVisualDisplay(attr, 0, 0, 0);
            }
        });

        // ✅ RECALCULAR TODOS OS SECUNDÁRIOS
        this.calcularAtributosSecundarios();

        // ✅ Sincronizar secundários (após recálculo)
        secundarios.forEach(attr => {
            const attrData = state.atributos?.secundarios?.[attr];
            if (attrData) {
                // Para secundários, apenas passar o tipo - updateVisualDisplay lerá do estado
                this.updateVisualDisplay(attr);
            } else {
                // Padrão para atributos não salvos
                this.updateVisualDisplay(attr);
            }
        });

        console.log('✅ Todos os atributos sincronizados com o estado');
    }

    /**
     * Retorna a sigla do atributo
     */
    getNomeSigla(atributoType) {
        const siglas = {
            forca: 'FOR',
            vitalidade: 'VIT',
            agilidade: 'AGI',
            inteligencia: 'INT',
            percepcao: 'PER',
            sorte: 'SOR',
            prontidao: 'PRONT',
            ataque: 'ATK',
            defesa: 'DEF',
            reacao: 'REA',
            precisao: 'PREC',
            evasao: 'EVA'
        };
        return siglas[atributoType] || atributoType.toUpperCase();
    }

    /**
     * Salva as mudanças do modal
     * ✅ Chama saveAtributoChanges com os valores temporários
     */
    saveChanges() {
        if (!this.statusType) {
            console.error('❌ Nenhum atributo selecionado');
            this.close();
            return;
        }

        // Obter valores do modal
        const base = parseInt(document.getElementById('atributos-config-base').value) || 0;
        const extra = parseInt(document.getElementById('atributos-config-extra').value) || 0;
        const bonus = parseInt(document.getElementById('atributos-config-bonus').value) || 0;

        // ✅ Salvar no estado
        this.saveAtributoChanges(this.statusType, base, extra, bonus);

        // Fechar modal
        this.close();

        console.log(`✅ Alterações salvas para "${this.statusType}"`);
    }

    /**
     * Fecha o modal
     */
    close() {
        const modal = document.getElementById('atributos-config-modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
        }
        this.statusType = null;
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // ✅ Criar instância do modal
    window.atributosConfigModal = new AtributosConfigModal();
    
    // ✅ Sincronizar visual dos atributos com o estado após carregar
    setTimeout(() => {
        if (window.atributosConfigModal) {
            window.atributosConfigModal.syncAllAttributesDisplay();
            console.log('✅ Sincronização inicial de atributos realizada');
        }
    }, 500);  // Aguardar 500ms para garantir que state-manager esteja pronto
});
