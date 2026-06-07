/**
 * GERENCIADOR DE PATCH NOTES
 * Sistema para exibir atualizações e mudanças da ficha
 */

class PatchNotesManager {
    constructor() {
        this.modal = document.getElementById('modalPatchNotes');
        this.content = document.getElementById('patch-notes-content');
        this.btnClose = document.getElementById('btn-fechar-patch-notes');
        this.btnConfirm = document.getElementById('btn-fechar-patch-notes-confirm');
        this.checkbox = document.getElementById('chk-nao-mostrar-patch-notes');
        this.currentVersion = 'V2.3 Pre-Release'; // Versão atual dos patch notes
        this.storageKey = 'ultima-versao-patch-notes-vista';
        
        this.init();
    }

    init() {
        // Configurar listeners
        if (this.btnClose) {
            this.btnClose.addEventListener('click', () => this.fecharModal());
        }
        if (this.btnConfirm) {
            this.btnConfirm.addEventListener('click', () => this.fecharModal());
        }
        if (this.checkbox) {
            this.checkbox.addEventListener('change', () => {
                if (this.checkbox.checked) {
                    localStorage.setItem(this.storageKey, this.currentVersion);
                }
            });
        }

        console.log('✅ PatchNotesManager inicializado');
    }

    /**
     * Verificar e exibir patch notes se necessário
     */
    verificarEExibir() {
        const ultimaVersaoVista = localStorage.getItem(this.storageKey);
        
        // Se a versão vista for diferente da atual, mostrar patch notes
        if (ultimaVersaoVista !== this.currentVersion) {
            setTimeout(() => {
                this.exibirModal();
            }, 500); // Pequeno delay para garantir que DOM está pronto
        }
    }

    /**
     * Exibir o modal de patch notes
     */
    exibirModal() {
        if (!this.modal) {
            console.warn('⚠️ Modal de patch notes não encontrado');
            return;
        }

        // Carregar conteúdo dos patch notes
        this.carregarConteudo();

        // Mostrar modal
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        console.log('📝 Patch Notes exibido');
    }

    /**
     * Carregar e renderizar conteúdo dos patch notes
     */
    carregarConteudo() {
        const html = `
            <div style="color: #d4af37; margin-bottom: 20px;">
                <h3 style="margin-top: 0; color: #d4af37;">✨ Versão ${this.currentVersion}</h3>
                <p style="font-size: 0.9em; color: #888; margin: 0;">24 de Maio de 2026</p>
            </div>

            <!-- SEÇÃO: CORREÇÕES -->
            <div style="margin-bottom: 20px;">
                <h4 style="color: #4ade80; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                    ✅ Correções
                </h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e0e0e0;">
                    <li>🔧 <strong>Sistema de Habilidades (Arts):</strong> Corrigido bug onde campos de Custo (PM) e Recarga não eram salvos corretamente</li>
                    <li>🎯 <strong>Campos de Entrada:</strong> Agora aceitam valores textuais como "1d6+5", "3 FaD" e expressões personalizadas</li>
                    <li>📊 <strong>Exibição de Cards:</strong> Removidos sufixos " MP" e " turnos" para melhor flexibilidade de valores</li>
                    <li>🛡️ <strong>Validação:</strong> Sistema agora suporta valores numéricos E textuais sem rejeitar</li>
                    <li>🚪 <strong>Modais de Habilidades:</strong> Agora só fecham via botão X, Cancelar ou ESC (clique fora não fecha mais)</li>
                </ul>
            </div>

            <!-- SEÇÃO: NOVIDADES -->
            <div style="margin-bottom: 20px;">
                <h4 style="color: #60a5fa; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                    🆕 Novidades
                </h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e0e0e0;">
                    <li>💡 <strong>Notificação de Veias Astrais:</strong> Sistema de dica ao abrir Veias Astrais (em desenvolvimento)</li>
                    <li>📝 <strong>Patch Notes:</strong> Este modal que você está vendo! Receba atualizações importantes</li>
                    <li>♻️ <strong>Preferências do Usuário:</strong> Opção de não mostrar patch notes novamente (até nova versão)</li>
                </ul>
            </div>

            <!-- SEÇÃO: MELHORIAS -->
            <div style="margin-bottom: 20px;">
                <h4 style="color: #fbbf24; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                    ⚡ Melhorias
                </h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e0e0e0;">
                    <li>⌨️ <strong>Atributos primarios, secundarios e status</strong> agora salvam com Enter</li>
                    <li>🎨 Interface mais consistente com validação aprimorada</li>
                    <li>📱 Melhor suporte para diferentes tipos de entrada de dados</li>
                    <li>🔔 Sistema de notificações para novidades da ficha</li>
                </ul>
            </div>

            <!-- SEÇÃO: PRÓXIMOS PASSOS -->
            <div style="background: rgba(216, 180, 254, 0.1); padding: 16px; border-left: 3px solid #d8b4fe; border-radius: 4px;">
                <h4 style="color: #d8b4fe; margin-top: 0;">🚀 Próximos Passos</h4>
                <p style="margin: 0; color: #b0b8c1; font-size: 0.95em;">
                    Estamos trabalhando em melhorias para o sistema de <strong>Veias Astrais</strong>, novas <strong>integrações de companheiros</strong> e muito mais!
                </p>
            </div>
        `;

        if (this.content) {
            this.content.innerHTML = html;
        }
    }

    /**
     * Fechar o modal de patch notes
     */
    fecharModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Se checkbox marcada, salvar versão vista
        if (this.checkbox && this.checkbox.checked) {
            localStorage.setItem(this.storageKey, this.currentVersion);
            console.log('✅ Preferência salva: Patch notes não será mostrado novamente até nova versão');
        }

        console.log('✨ Modal de patch notes fechado');
    }
}

// Inicializar ao carregar documento
document.addEventListener('DOMContentLoaded', () => {
    const patchNotesManager = new PatchNotesManager();
    patchNotesManager.verificarEExibir();
    
    // Exportar para uso global se necessário
    window.patchNotesManager = patchNotesManager;
});

// Exportar classe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PatchNotesManager;
}
