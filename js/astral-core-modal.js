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
