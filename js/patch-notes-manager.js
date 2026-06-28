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
        this.currentVersion = 'V2.3'; // Versão atual dos patch notes
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
                <p style="font-size: 0.9em; color: #888; margin: 0;">27 de Junho de 2026</p>
            </div>

            <!-- SEÇÃO: CORREÇÕES -->
            <div style="margin-bottom: 20px;">
                <h4 style="color: #4ade80; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                    ✅ Correções
                </h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e0e0e0;">
                    <li>🔧 <strong>Sistema de Habilidades (Arts):</strong> Correções de salvamento em campos de Custo (PM) e Recarga</li>
                    <li>🎯 <strong>Validação de Entradas:</strong> Melhor suporte para valores textuais e numéricos, incluindo expressões personalizadas</li>
                    <li>📊 <strong>Exibição de Cards:</strong> Ajustes visuais e de formatação para mostrar valores de forma mais limpa</li>
                    <li>🛡️ <strong>Estabilidade:</strong> Correções gerais de interface e comportamento de modais</li>
                </ul>
            </div>

            <!-- SEÇÃO: NOVIDADES -->
            <div style="margin-bottom: 20px;">
                <h4 style="color: #60a5fa; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                    🆕 Novidades
                </h4>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e0e0e0;">
                    <li>💫 <strong>Lançamento das Veias Astrais:</strong> novo sistema localizado no centro da aba de Atributos</li>
                    <li>🧬 <strong>Aptidões mais narrativas e adaptativas:</strong> agora estão alinhadas com o sistema de emparelhamento, tornando a progressão mais imersiva</li>
                    <li>📊 <strong>Balanceamento de atributos secundários:</strong> ajustes para melhorar coesão e equilíbrio</li>
                    <li>⚙️ <strong>Otimização da ficha:</strong> melhorias gerais de performance, cálculo e interface</li>
                    <li>📚 <strong>Novas Raças e Classes:</strong> adição das raças e classes de <em>A Crônica dos Varkhan</em></li>
                    <li>🌀 <strong>Atualizações de Raças:</strong> melhorias no conteúdo de <em>The Chaotical Gate</em> e <em>A Crônica dos Varkhan</em></li>
                    <li>📝 <strong>Patch Notes:</strong> este modal exibe as novidades da versão</li>
                    <li>♻️ <strong>Preferências do Usuário:</strong> opção de não exibir novamente até nova versão</li>
                    <li>🎛️ <strong>Melhorias de UI:</strong> ajustes em diversos pontos da interface para melhor usabilidade e organização</li>
                    <li>🧭 <strong>Atualizações de Raças (A Crônica dos Varkhan):</strong>
                        <ul style="margin-top:6px; padding-left:18px; margin-bottom:6px;">
                            <li>🖼️ Atualizadas as imagens das sub-raças (Refugiado, Estudante, Periferia, Atleta, Criminoso, Professor, Sobrevivente, Filho do Herói, Gênio, Herdeiro de Clã, Escolhido, Humano Perfeito).</li>
                            <li>🆕 Novas raças adicionadas: <em>Psicoplásmica</em>, <em>Anaplásmata</em> e <em>Akónis</em>.</li>
                            <li>🛠️ Alterações e reworks nas habilidades básicas: Refugiado (Adaptação → Engenhosidade), Aprendiz (Treinável reworked: Aptidão +3 no início), Estudante (Adaptável → Teoria Aplicada), Filho do Herói (Marca do Legado rework), Gênio (Aptidão Inata & Eureka), Criança Milagrosa (Domínio de Fluxo), Humano Perfeito (Potencial Máximo rework).</li>
                            <li>🔁 Substituição: habilidade <strong>Reserva Anômala</strong> foi trocada por <strong>Catalisador Genético</strong> no Akónis.</li>
                            <li>🔧 Correção: erros de sintaxe em <code>js/racas-data.js</code> corrigidos para garantir carregamento seguro das funções de raça.</li>
                            <li>🎛️ UI: Modal de Raças — itens bloqueados permanecem clicáveis (removido bloqueio por pointer-events) e cards de habilidades básicas agora exibidos 2 por linha em telas grandes.</li>
                        </ul>
                    </li>
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
                    <li>✨ <strong>Ajuste Visual:</strong> Atualização no visual dos cards de classes/habilidades para maior simetria e legibilidade</li>
                </ul>
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
