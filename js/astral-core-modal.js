/* ============================================================================
   ASTRAL-CORE-MODAL.JS
   Gerenciador da modal de visualização do Núcleo Astral
   Modal vazia e pronta para conteúdo customizado
   ============================================================================ */

class AstralCoreModalManager {
  constructor() {
    this.modal = document.getElementById("astral-core-modal");
    this.overlay = document.getElementById("astral-core-modal-overlay");
    this.closeBtn = document.getElementById("btn-fechar-astral-core-modal");
    this.body = document.getElementById("astral-core-modal-body");
    this.title = document.getElementById("astral-core-modal-title");
    this.coreImage = document.querySelector(".core-crystal-image");

    this.init();
  }

  /**
   * Inicializa o gerenciador de modal
   */
  init() {
    if (!this.modal) {
      console.warn("❌ Modal de núcleo astral não encontrada");
      return;
    }

    // Event listeners
    if (this.coreImage) {
      this.coreImage.addEventListener("click", () => this.open());
    }
    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", () => this.close());

    // Fechar ao pressionar Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.close();
      }
    });

    console.log("✅ AstralCoreModalManager inicializado com sucesso");
  }

  /**
   * Abre a modal
   */
  open() {
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
    this.renderBonusSummary();
    console.log("🌟 Modal de Núcleo Astral aberta");
  }

  /**
   * Fecha a modal
   */
  close() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
    console.log("🌟 Modal de Núcleo Astral fechada");
  }

  /**
   * Coleta e renderiza um resumo de todos os aprimoramentos dos nós
   */
  renderBonusSummary() {
    // Verificar se o sistema de Veias Astrais está inicializado
    if (!window.veiasAstraisSystem) {
      this.setContent("<p>❌ Sistema de Veias Astrais não inicializado</p>");
      return;
    }

    // Coletar todos os nós com bonuses
    const nodes = window.veiasAstraisSystem.nodes || [];
    const nodesWithBonus = nodes.filter(
      (node) => node.bonus && node.bonus.effect,
    );

    // Organizar por constelação (treeId)
    const bonusesByTree = {};
    nodesWithBonus.forEach((node) => {
      if (!bonusesByTree[node.treeId]) {
        bonusesByTree[node.treeId] = [];
      }
      bonusesByTree[node.treeId].push({
        nodeName: node.name,
        level: node.level,
        effect: node.bonus.effect,
        state: node.state,
        layer: node.layer,
      });
    });

    // Mapeamento de nomes de constelações
    const treeNames = {
      arty: "⚔️ Arty",
      aune: "✨ Aune",
      ephelias: "📚 Ephelias",
      nishi: "🌀 Nishi",
      hestia: "🌿 Hestia",
    };

    // Cores das constelações
    const treeColors = {
      arty: "#ff4444",
      aune: "#ffdd44",
      ephelias: "#4477dd",
      nishi: "#9966ff",
      hestia: "#66dd66",
    };

    // Gerar HTML do resumo
    let html = `
      <div class="bonus-summary-container">
        <h3 style="text-align: center; margin-bottom: 20px; color: #e0c3fc;">
          📜 Aprimoramentos dos Nós Astrais
        </h3>
        <p style="text-align: center; font-size: 12px; color: #aaa; margin-bottom: 20px;">
          Resumo de todos os efeitos ganhos pelos nós ativados
        </p>
    `;

    // Iterar sobre cada constelação
    Object.keys(bonusesByTree).forEach((treeId) => {
      const bonuses = bonusesByTree[treeId];
      const treeName = treeNames[treeId] || treeId;
      const treeColor = treeColors[treeId] || "#ccc";

      // Contar bonuses ativos
      const activeBonuses = bonuses.filter(
        (b) => b.state === "active" || b.state === "maxed",
      );

      html += `
        <div class="bonus-tree-section" style="
          border-left: 4px solid ${treeColor};
          padding-left: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        ">
          <h4 style="color: ${treeColor}; margin: 0 0 10px 0; font-size: 14px;">
            ${treeName}
            <span style="color: #aaa; font-size: 12px;">
              (${activeBonuses.length}/${bonuses.length} ativos)
            </span>
          </h4>
          <div class="bonus-list">
      `;

      // Agrupar bonuses por camada
      const bonusesByLayer = {};
      bonuses.forEach((bonus) => {
        if (!bonusesByLayer[bonus.layer]) {
          bonusesByLayer[bonus.layer] = [];
        }
        bonusesByLayer[bonus.layer].push(bonus);
      });

      // Renderizar bonuses por camada
      Object.keys(bonusesByLayer)
        .sort()
        .forEach((layer) => {
          const layerBonuses = bonusesByLayer[layer];
          layerBonuses.forEach((bonus) => {
            const stateIcon =
              {
                active: "⭐",
                maxed: "👑",
                unlocked: "🔓",
                locked: "🔒",
              }[bonus.state] || "•";

            const isActive =
              bonus.state === "active" || bonus.state === "maxed";
            const opacity = isActive ? "1" : "0.6";

            html += `
              <div class="bonus-item" style="
                margin-bottom: 10px;
                padding: 8px 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 4px;
                border-left: 2px solid ${treeColor};
                opacity: ${opacity};
              ">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                  <div style="flex: 1;">
                    <div style="font-size: 12px; color: ${treeColor}; font-weight: 500;">
                      ${stateIcon} ${bonus.nodeName}
                      <span style="color: #888; font-size: 11px;">
                        (Nível ${bonus.level})
                      </span>
                    </div>
                    <div style="font-size: 12px; color: #ccc; margin-top: 4px;">
                      ➜ ${bonus.effect}
                    </div>
                  </div>
                </div>
              </div>
            `;
          });
        });

      html += `
          </div>
        </div>
      `;
    });

    // Resumo total
    const totalBonuses = nodesWithBonus.length;
    const activeBonusesTotal = nodesWithBonus.filter(
      (n) => n.state === "active" || n.state === "maxed",
    ).length;

    html += `
      <div class="bonus-summary-footer" style="
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        text-align: center;
        font-size: 12px;
        color: #aaa;
      ">
        <strong style="color: #e0c3fc;">
          Total: ${activeBonusesTotal} / ${totalBonuses} aprimoramentos ativos
        </strong>
      </div>
      </div>
    `;

    this.setContent(html);
  }

  /**
   * Alterna a modal
   */
  toggle() {
    if (this.modal.classList.contains("active")) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Define o título da modal
   * @param {string} title - Novo título
   */
  setTitle(title) {
    this.title.textContent = title;
  }

  /**
   * Define o conteúdo da modal
   * @param {string|HTMLElement} content - Conteúdo HTML ou elemento
   */
  setContent(content) {
    if (typeof content === "string") {
      this.body.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      this.body.innerHTML = "";
      this.body.appendChild(content);
    } else {
      console.warn("⚠️ Conteúdo inválido para setContent");
    }
  }

  /**
   * Limpa o conteúdo da modal
   */
  clearContent() {
    this.body.innerHTML = "";
  }

  /**
   * Retorna o elemento body para manipulação direta
   */
  getContentElement() {
    return this.body;
  }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    const manager = new AstralCoreModalManager();
    window.astralCoreModal = manager;

    // Attach também ao container pai (.astral-core) para garantir que pega o clique
    setTimeout(() => {
      const coreContainer = document.getElementById("astral-core");
      if (coreContainer) {
        coreContainer.style.cursor = "pointer";
        coreContainer.addEventListener("click", () => {
          console.log("🖱️ Clique no #astral-core!");
          manager.open();
        });
        console.log("✅ Listener anexado ao #astral-core");
      }
    }, 100);
  });
} else {
  const manager = new AstralCoreModalManager();
  window.astralCoreModal = manager;

  // Attach também ao container pai (.astral-core) para garantir que pega o clique
  setTimeout(() => {
    const coreContainer = document.getElementById("astral-core");
    if (coreContainer) {
      coreContainer.style.cursor = "pointer";
      coreContainer.addEventListener("click", () => {
        console.log("🖱️ Clique no #astral-core!");
        manager.open();
      });
      console.log("✅ Listener anexado ao #astral-core");
    }
  }, 100);
}
