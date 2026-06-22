/**
 * SISTEMA DE VEIAS ASTRAIS - REFATORAÇÃO COMPLETA
 * Gerenciamento de árvores, nós, conexões e interações
 * Mapa expansivo (5000x5000), navegável, com múltiplas constelações
 */

class VeiasAstraisSystem {
  constructor() {
    // Elementos DOM
    this.modal = document.getElementById("veias-astrais-modal");
    this.viewport = document.getElementById("astral-viewport");
    this.map = document.getElementById("astral-map");
    this.linksCanvas = document.getElementById("astral-links-canvas");
    this.nodesContainer = document.getElementById("astral-nodes-container");
    this.sidebar = document.querySelector(".veias-astrais-sidebar");

    // Dados do Sistema
    this.trees = {};
    this.nodes = [];
    this.connections = [];
    this.selectedNode = null;

    // Recursos - Agora usando Power Combat em vez de Mana Points
    this.powerCombat = 0;
    this.maxPowerCombat = 0;
    this.resonance = 45;
    this.maxResonance = 100;

    // Bônus Ativos
    this.activeBonuses = [];

    // Navegação
    this.navigation = null;

    // Ativação de Linhas (será inicializada depois)
    this.lineActivation = null;

    // Estado
    this.initialized = false;

    // Configuração de animações
    this.particleManager = new ParticleManager();
  }

  /**
   * NOTIFICAÇÃO - Exibir mensagem no canto superior direito
   */
  showNotification(message, type = "info", duration = 3000) {
    const container = document.getElementById("notification-container");
    if (!container) {
      console.warn("⚠️ Container de notificações não encontrado");
      return;
    }

    // Criar elemento da notificação
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Estilos inline para garantir visibilidade
    notification.style.cssText = `
            padding: 12px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            animation: slideInRight 0.3s ease-out;
            display: flex;
            align-items: center;
            gap: 8px;
            backdrop-filter: blur(10px);
        `;

    // Cores baseadas no tipo
    const colors = {
      success: {
        bg: "rgba(102, 221, 102, 0.15)",
        text: "#66dd66",
        border: "#66dd66",
      },
      error: {
        bg: "rgba(255, 68, 68, 0.15)",
        text: "#ff6b6b",
        border: "#ff4444",
      },
      warning: {
        bg: "rgba(255, 221, 68, 0.15)",
        text: "#ffdd44",
        border: "#ffbb00",
      },
      info: {
        bg: "rgba(68, 119, 221, 0.15)",
        text: "#4477dd",
        border: "#4477dd",
      },
    };

    const color = colors[type] || colors.info;
    notification.style.backgroundColor = color.bg;
    notification.style.color = color.text;
    notification.style.borderLeft = `3px solid ${color.border}`;

    // Adicionar ao container
    container.appendChild(notification);

    // Remover após duração
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease-out forwards";
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  /**
   * INICIALIZAÇÃO
   */
  async init() {
    if (this.initialized) return;

    try {
      this.generateTrees();
      this.generateNodes();

      // 🔄 Carregar estados salvos se existirem
      this.loadSavedStates();

      this.generateConnections();
      this.renderUI();
      this.createCoreParticles();

      // Inicializar navegação
      if (!this.navigation) {
        this.navigation = new VeiasAstraisNavigation(this);
      }

      // ⚔️ Configurar sincronização de Power Combat
      this.setupPowerCombatListener();

      // Ativar bônus dos nós já desbloqueados
      this.nodes.forEach((node) => {
        if (
          (node.state === "unlocked" || node.state === "maxed") &&
          node.bonus
        ) {
          this.activateBonus(node.bonus);
        }
      });

      this.initialized = true;
      console.log("✨ VeiasAstraisSystem inicializado completamente");
    } catch (error) {
      console.error("❌ Erro ao inicializar VeiasAstraisSystem:", error);
    }
  }

  /**
   * SINCRONIZAR POWER COMBAT COM ATRIBUTOS
   * Obtém o valor atual de Power Combat do PowerCombatCalculator
   * Atualiza o máximo sempre que houver mudança
   */
  syncPowerCombatFromAppState() {
    if (!window.powerCombatCalculator) {
      console.warn(
        "⚠️ PowerCombatCalculator não disponível para sincronização",
      );
      return;
    }

    try {
      // Obter o Power Combat calculado
      const novoMaxPowerCombat = window.powerCombatCalculator.valorPC || 0;

      // SEMPRE atualizar o máximo - pode ter aumentado!
      const maxMudou = this.maxPowerCombat !== novoMaxPowerCombat;

      if (maxMudou) {
        const antigoMaxPowerCombat = this.maxPowerCombat;
        console.log(
          `📈 Máximo Power Combat atualizado: ${this.maxPowerCombat} → ${novoMaxPowerCombat}`,
        );

        // 🔥 NOVO: Se o máximo aumentou, adicionar o incremento ao valor atual
        if (novoMaxPowerCombat > antigoMaxPowerCombat) {
          const incremento = novoMaxPowerCombat - antigoMaxPowerCombat;
          const novoPC = this.powerCombat + incremento;
          console.log(
            `⬆️ Máximo aumentou! Adicionando incremento de ${incremento} ao PC atual`,
          );
          console.log(
            `   PC anterior: ${this.powerCombat} → PC novo: ${novoPC}`,
          );
          this.powerCombat = novoPC;
        }
        // Se o máximo diminuiu e PC ficaria acima do limite, reduzir
        else if (this.powerCombat > novoMaxPowerCombat) {
          console.log(
            `📉 PC atual reduzido de ${this.powerCombat} para ${novoMaxPowerCombat} (excedia o máximo)`,
          );
          this.powerCombat = novoMaxPowerCombat;
        }

        this.maxPowerCombat = novoMaxPowerCombat;

        // Se é a primeira sincronização (PC = 0), usar o máximo como atual
        if (this.powerCombat === 0 && this.maxPowerCombat > 0) {
          this.powerCombat = this.maxPowerCombat;
          console.log(
            `✨ Primeira sincronização: Power Combat definido como ${this.powerCombat}`,
          );
        }

        console.log(
          `⚔️ Power Combat: ${this.powerCombat} / ${this.maxPowerCombat}`,
        );
        this.updateUI();
      }
    } catch (error) {
      console.error("❌ Erro ao sincronizar Power Combat:", error);
    }
  }

  /**
   * INICIAR MONITORAMENTO DE POWER COMBAT
   * Registra callback para atualização imediata quando Power Combat muda
   * + polling como fallback
   */
  setupPowerCombatListener() {
    // Sincronizar imediatamente
    this.syncPowerCombatFromAppState();

    // 🔔 Registrar callback para mudanças imediatas
    if (window.powerCombatCalculator) {
      window.powerCombatCalculator.onChange((novoValor) => {
        console.log(
          `🔥 Power Combat mudou para ${novoValor}! Sincronizando imediatamente...`,
        );
        this.syncPowerCombatFromAppState();
      });
      console.log(
        "✅ Callback de Power Combat registrado para atualização imediata",
      );
    }

    // Monitorar mudanças periodicamente (polling) como fallback
    this.powerCombatInterval = setInterval(() => {
      this.syncPowerCombatFromAppState();
    }, 500); // Aumentei para 500ms já que temos callback imediato

    console.log(
      "👁️ Listener de Power Combat ativado (imediato + polling 500ms)",
    );
  }

  /**
   * PARAR MONITORAMENTO DE POWER COMBAT
   */
  stopPowerCombatListener() {
    if (this.powerCombatInterval) {
      clearInterval(this.powerCombatInterval);
      this.powerCombatInterval = null;
      console.log("⏹️ Listener de Power Combat parado");
    }
  }
  generateTrees() {
    this.trees = {
      arty: {
        id: "arty",
        name: "⚔️ Arty",
        divinity: "Divindade do Caos",
        color: "#ff4444",
        accentColor: "#ff4444",
        icon: "⚔️",
        symbol: "⚡",
        description:
          "A Entidade do Caos e Destruição - Poder bruto, violência e colapso cósmico",
        loreDescription:
          "Arty sussurra através das Veias Astrais do poder destrutivo. Seus seguidores canalizam agressividade pura e energia descontrolada.",
        imageUrl: "https://i.imgur.com/hcKHg7q.png",
        unlockedNodes: 0,
        totalNodes: 8,
      },
      aune: {
        id: "aune",
        name: "✨ Aune",
        divinity: "Divindade do Destino",
        color: "#ffdd44",
        accentColor: "#ffdd44",
        icon: "✨",
        symbol: "★",
        description:
          "A Entidade do Destino e Fortuna - Coincidência cósmica e inevitabilidade",
        loreDescription:
          "Aune tece os fios da inevitabilidade. Quem recebe sua bênção comanda a probabilidade e o destino cósmico.",
        imageUrl: "https://i.imgur.com/RnxW8Lu.png",
        unlockedNodes: 0,
        totalNodes: 8,
      },
      ephelias: {
        id: "ephelias",
        name: "📚 Ephelias",
        divinity: "Divindade da Compreensão",
        color: "#4477dd",
        accentColor: "#4477dd",
        icon: "📚",
        symbol: "◆",
        description:
          "A Entidade da Sabedoria - Inteligência infinita e conhecimento arcano proibido",
        loreDescription:
          "Ephelias revela segredos antigos. Seus aprendizes ganham acesso ao conhecimento infinito e manipulação arcana.",
        imageUrl: "https://i.imgur.com/tbgx546.png",
        unlockedNodes: 0,
        totalNodes: 8,
      },
      nishi: {
        id: "nishi",
        name: "🌀 Nishi",
        divinity: "Divindade do Equilíbrio",
        color: "#9966ff",
        accentColor: "#9966ff",
        icon: "🌀",
        symbol: "◇",
        description:
          "A Entidade do Equilíbrio - Precisão, harmonia e fluxo perfeito",
        loreDescription:
          "Nishi mantém a harmonia entre forças opostas. Seus seguidores alcançam velocidade, precisão e fluxo perfeito do cosmos.",
        imageUrl: "https://i.imgur.com/gsPqh8R.png",
        unlockedNodes: 0,
        totalNodes: 8,
      },
      hestia: {
        id: "hestia",
        name: "🌿 Hestia",
        divinity: "Divindade da Criação",
        color: "#66dd66",
        accentColor: "#66dd66",
        icon: "🌿",
        symbol: "❖",
        description:
          "A Entidade da Criação - Vitalidade, regeneração e sustentação cósmica",
        loreDescription:
          "Hestia nutre toda a existência. Seus eleitos canalizam vida, proteção divina e crescimento sem limites.",
        imageUrl: "https://i.imgur.com/3r6oZV9.png",
        unlockedNodes: 0,
        totalNodes: 8,
      },
    };

    console.log(
      "✨ Constelações Divinas geradas:",
      Object.keys(this.trees).length,
    );
  }

  /**
   * GERAÇÃO DE NÓS - SISTEMA ORGÂNICO HIERÁRQUICO
   * 10 nós por constelação com tamanho variável e posicionamento natural
   * Estrutura: Básico → Intermediário → Avançado → Supremo
   */
  generateNodes() {
    this.nodes = [];
    let nodeId = 0;

    const centerX = 0;
    const centerY = 0;

    // Configuração das constelações
    const treeConfigs = [
      { id: "arty", angle: 0, color: "#ff4444", name: "Arty", rarity: 1 },
      { id: "aune", angle: 72, color: "#ffdd44", name: "Aune", rarity: 2 },
      {
        id: "ephelias",
        angle: 144,
        color: "#4477dd",
        name: "Ephelias",
        rarity: 3,
      },
      { id: "nishi", angle: 216, color: "#9966ff", name: "Nishi", rarity: 4 },
      { id: "hestia", angle: 288, color: "#66dd66", name: "Hestia", rarity: 5 },
    ];

    // Para cada constelação
    treeConfigs.forEach((treeConfig) => {
      const mainAngleRad = (treeConfig.angle * Math.PI) / 180;

      // ESTRUTURA: 10 nós por constelação
      // 1 nó próximo (L1) + 3 nós básicos (L2) + 3 nós intermediários (L3) + 2 nós avançados (L4) + 1 nó supremo (L5)

      // L1: Nó próximo ao cristal central (conexão direta)
      let l1Names = {
        arty: "Centelha do Caos",
        aune: "Fio do Destino",
        ephelias: "Primeiro Insight",
        nishi: "Centro Interior",
        hestia: "Semente Primordial",
      };
      let node = new AstralNode({
        id: nodeId++,
        treeId: treeConfig.id,
        name: l1Names[treeConfig.id],
        rune: "◆",
        x: centerX + Math.cos(mainAngleRad) * 180,
        y: centerY + Math.sin(mainAngleRad) * 180,
        level: 1,
        cost: 10,
        effect: `Conexão com ${treeConfig.name}`,
        description: `Essência primária de ${treeConfig.name}`,
        color: treeConfig.color,
        state: "locked",
        layer: 1,
        size: "small",
        parentId: "core",
        rarity: 1,
        // ✨ Bônus associado ao nó
        bonus: {
          id: `bonus-${treeConfig.id}-l1`,
          name: `Bênção de ${treeConfig.name}`,
          effect: `Ganhe acesso aos poderes de ${treeConfig.name}`,
          stats: {
            forca: treeConfig.id === "arty" ? 2 : 0,
            inteligencia: treeConfig.id === "ephelias" ? 2 : 0,
            agilidade: treeConfig.id === "nishi" ? 2 : 0,
            vitalidade: treeConfig.id === "hestia" ? 2 : 0,
            sorte: treeConfig.id === "aune" ? 2 : 0,
            ataque: treeConfig.id === "arty" ? 1 : 0,
            defesa: treeConfig.id === "hestia" ? 1 : 0,
          },
        },
      });
      this.nodes.push(node);
      const layer1NodeId = node.id;

      // L2: 3 nós básicos (pequenos)
      let l2Names = {
        arty: ["Fúria Emergente", "Ruptura Violenta", "Sangue Ardente"],
        aune: ["Visão do Amanhã", "Caminho Traçado", "Escolha Inevitável"],
        ephelias: ["Conhecimento Oculto", "Mente Aberta", "Fluxo Arcano"],
        nishi: ["Fluxo Balanceado", "Harmonia Dual", "Equilíbrio Espiritual"],
        hestia: ["Broto da Vida", "Crescimento Natural", "Fluxo Vital"],
      };

      for (let i = 0; i < 3; i++) {
        const spreadAngle = -40 + i * 40;
        const subAngle = mainAngleRad + (spreadAngle * Math.PI) / 180;
        const distance = 420 + Math.random() * 40;

        // Definir effect específico por constelação e índice
        let l2Effect = "";
        if (treeConfig.id === "arty") {
          l2Effect = [
            "+5% de Dano de Ataque",
            "+3% de Velocidade de Ataque",
            "+2 de Força",
          ][i];
        } else if (treeConfig.id === "aune") {
          l2Effect = [
            "+1 de Sorte",
            "+3% de Chance de Crítico",
            "+2% de Ganho de Experiência",
          ][i];
        } else if (treeConfig.id === "ephelias") {
          l2Effect = [
            "+2 de Inteligência",
            "+5% de Resistência Mágica",
            "+1 de Compreensão",
          ][i];
        } else if (treeConfig.id === "nishi") {
          l2Effect = [
            "+2 de Agilidade",
            "+4% de Esquiva",
            "+3% de Velocidade de Movimento",
          ][i];
        } else if (treeConfig.id === "hestia") {
          l2Effect = [
            "+3 de Vitalidade",
            "+10% de Regeneração de HP",
            "+5% de Resistência Física",
          ][i];
        }

        node = new AstralNode({
          id: nodeId++,
          treeId: treeConfig.id,
          name: l2Names[treeConfig.id][i],
          rune: "●",
          x: centerX + Math.cos(subAngle) * distance,
          y: centerY + Math.sin(subAngle) * distance,
          level: 2,
          cost: 15,
          effect: `Habilidade básica`,
          description: `Poder básico de ${treeConfig.name}`,
          color: treeConfig.color,
          state: "locked",
          layer: 2,
          size: "small",
          parentId: layer1NodeId,
          rarity: 1,
          // ✨ Bônus associado ao nó L2
          bonus: {
            id: `bonus-${treeConfig.id}-l2-${i}`,
            name: `Poder Básico de ${treeConfig.name}`,
            effect: l2Effect,
            stats: {},
          },
        });
        this.nodes.push(node);
      }

      // L3: 3 nós intermediários (médios)
      let l3Names = {
        arty: ["Colapso Brutal", "Guerra Primordial", "Instinto Destrutivo"],
        aune: ["Trama Celestial", "Eco das Possibilidades", "Linha Temporal"],
        ephelias: ["Percepção Astral", "Sabedoria Antiga", "Eco da Memória"],
        nishi: ["Convergência Interna", "Ordem Cósmica", "Pulso Sereno"],
        hestia: ["Renascimento", "Essência Viva", "Raiz Celestial"],
      };

      const layer2Nodes = this.nodes.filter(
        (n) => n.treeId === treeConfig.id && n.layer === 2,
      );

      // Mapeamento explícito de qual nó L2 é pai de cada nó L3 (por índice)
      // ephelias: Conhecimento Oculto(0)→Percepção Astral(0), Mente Aberta(1)→Sabedoria Antiga(1), Fluxo Arcano(2)→Eco da Memória(2)
      const l3ParentIdxMap = {
        arty: [0, 1, 2],
        aune: [0, 1, 2],
        ephelias: [0, 1, 2],
        nishi: [0, 1, 2],
        hestia: [0, 1, 2],
      };

      for (let i = 0; i < 3; i++) {
        const spreadAngle = -50 + i * 50;
        const subAngle = mainAngleRad + (spreadAngle * Math.PI) / 180;
        const distance = 700 + Math.random() * 60;

        // Definir effect específico por constelação e índice
        let l3Effect = "";
        if (treeConfig.id === "arty") {
          l3Effect = [
            "+15% de Dano de Ataque e +2 de Força",
            "+12% de Velocidade de Ataque",
            "+20% de Dano Crítico",
          ][i];
        } else if (treeConfig.id === "aune") {
          l3Effect = [
            "+3 de Sorte e +5% de Luck Rolls",
            "+15% de Chance de Crítico",
            "+10% de Bônus de Experiência",
          ][i];
        } else if (treeConfig.id === "ephelias") {
          l3Effect = [
            "+5 de Inteligência e +15% de Resistência Mágica",
            "+8% de Velocidade de Lançamento de Magia",
            "+3 de Compreensão Arcana",
          ][i];
        } else if (treeConfig.id === "nishi") {
          l3Effect = [
            "+5 de Agilidade e +12% de Esquiva",
            "+15% de Velocidade de Movimento",
            "+8% de Redução de Cooldown",
          ][i];
        } else if (treeConfig.id === "hestia") {
          l3Effect = [
            "+8 de Vitalidade e +25% de Regeneração de HP",
            "+20% de Resistência Física e Mágica",
            "+15% de Cura Recebida",
          ][i];
        }

        node = new AstralNode({
          id: nodeId++,
          treeId: treeConfig.id,
          name: l3Names[treeConfig.id][i],
          rune: "◇",
          x: centerX + Math.cos(subAngle) * distance,
          y: centerY + Math.sin(subAngle) * distance,
          level: 3,
          cost: 25,
          effect: `Habilidade intermediária`,
          description: `Poder intermediário de ${treeConfig.name}`,
          color: treeConfig.color,
          state: "locked",
          layer: 3,
          size: "medium",
          parentId: layer2Nodes[l3ParentIdxMap[treeConfig.id][i]].id,
          rarity: 2,
          // ✨ Bônus associado ao nó L3
          bonus: {
            id: `bonus-${treeConfig.id}-l3-${i}`,
            name: `Poder Intermediário de ${treeConfig.name}`,
            effect: l3Effect,
            stats: {},
          },
        });
        this.nodes.push(node);
      }

      // L4: 2 nós avançados (grandes)
      let l4Names = {
        arty: ["Eco da Devastação", "Domínio do Caos"],
        aune: ["Mão do Destino", "Convergência Suprema"],
        ephelias: ["Verdade Universal", "Compreensão Suprema"],
        nishi: ["Sintonia Universal", "Controle Absoluto"],
        hestia: ["Pulso da Criação", "Gênese Suprema"],
      };

      const layer3Nodes = this.nodes.filter(
        (n) => n.treeId === treeConfig.id && n.layer === 3,
      );

      // Mapeamento explícito de qual nó L3 é pai de cada nó L4 (por índice)
      // ephelias[1] = Compreensão Suprema → deve herdar de Eco da Memória (índice 2)
      const l4ParentIdxMap = {
        arty: [0, 1],
        aune: [2, 0],
        ephelias: [1, 2],
        nishi: [0, 1],
        hestia: [2, 0],
      };

      for (let i = 0; i < 2; i++) {
        const spreadAngle = -45 + i * 90;
        const subAngle = mainAngleRad + (spreadAngle * Math.PI) / 180;
        const distance = 950 + Math.random() * 80;

        // Definir effect específico por constelação e índice
        let l4Effect = "";
        if (treeConfig.id === "arty") {
          l4Effect = [
            "Desbloqueie: Multiplicador de Dano +50% e Fúria Berserker",
            "Desbloqueie: Ataque Duplo Automático ao Criticar",
          ][i];
        } else if (treeConfig.id === "aune") {
          l4Effect = [
            "Desbloqueie: Sorte Extrema - +20% em todos os rolls",
            "Desbloqueie: Destino Reescrito - Reroll uma vez por combate",
          ][i];
        } else if (treeConfig.id === "ephelias") {
          l4Effect = [
            "Desbloqueie: Visão Infinita - Veja todos os inimigos",
            "Desbloqueie: Mágica Suprema - -50% custo de magia",
          ][i];
        } else if (treeConfig.id === "nishi") {
          l4Effect = [
            "Desbloqueie: Dança Cósmica - +100% de Esquiva por 5s",
            "Desbloqueie: Sincronização Perfeita - Ataque sincronizado a cada turno",
          ][i];
        } else if (treeConfig.id === "hestia") {
          l4Effect = [
            "Desbloqueie: Imortalidade Momentânea - Invulnerabilidade ativa",
            "Desbloqueie: Cura Suprema - HP totalmente restaurado periodicamente",
          ][i];
        }

        node = new AstralNode({
          id: nodeId++,
          treeId: treeConfig.id,
          name: l4Names[treeConfig.id][i],
          rune: "★",
          x: centerX + Math.cos(subAngle) * distance,
          y: centerY + Math.sin(subAngle) * distance,
          level: 4,
          cost: 40,
          effect: `Habilidade avançada`,
          description: `Poder avançado de ${treeConfig.name}`,
          color: treeConfig.color,
          state: "locked",
          layer: 4,
          size: "large",
          parentId: layer3Nodes[l4ParentIdxMap[treeConfig.id][i]].id,
          rarity: 3,
          // ✨ Bônus associado ao nó L4
          bonus: {
            id: `bonus-${treeConfig.id}-l4-${i}`,
            name: `Poder Avançado de ${treeConfig.name}`,
            effect: l4Effect,
            stats: {},
          },
        });
        this.nodes.push(node);
      }

      // L5: 1 nó supremo (muito grande - estrela divina)
      let l5Names = {
        arty: "Avatar de Arty",
        aune: "Avatar de Aune",
        ephelias: "Avatar de Ephelias",
        nishi: "Avatar de Nishi",
        hestia: "Avatar de Hestia",
      };

      // Definir effect específico por constelação
      let l5Effect = "";
      if (treeConfig.id === "arty") {
        l5Effect =
          "PODER DIVINO SUPREMO: Transformação em Entidade de Caos - Dano +500%, Ataque Duplo Permanente";
      } else if (treeConfig.id === "aune") {
        l5Effect =
          "PODER DIVINO SUPREMO: Encarnação do Destino - Controle Total da Probabilidade, Impossível Falhar";
      } else if (treeConfig.id === "ephelias") {
        l5Effect =
          "PODER DIVINO SUPREMO: Onisciência Cósmica - Conhecimento Infinito, Prevê todos os ataques";
      } else if (treeConfig.id === "nishi") {
        l5Effect =
          "PODER DIVINO SUPREMO: Perfeição Universal - Sincronização com o Cosmos, Poder Ilimitado";
      } else if (treeConfig.id === "hestia") {
        l5Effect =
          "PODER DIVINO SUPREMO: Essência da Criação - Vida Infinita, Regeneração Absoluta, Gênesis";
      }

      const layer4Nodes = this.nodes.filter(
        (n) => n.treeId === treeConfig.id && n.layer === 4,
      );

      // Mapeamento explícito de qual nó L4 é pai do nó L5 (por índice)
      // ephelias: Avatar herda de Compreensão Suprema (índice 1) para seguir a cadeia correta
      const l5ParentIdxMap = {
        arty: 0,
        aune: 0,
        ephelias: 0,
        nishi: 0,
        hestia: 0,
      };

      const supremeAngle = mainAngleRad;
      const supremeDistance = 1200;

      node = new AstralNode({
        id: nodeId++,
        treeId: treeConfig.id,
        name: l5Names[treeConfig.id],
        rune: "✦",
        x: centerX + Math.cos(supremeAngle) * supremeDistance,
        y: centerY + Math.sin(supremeAngle) * supremeDistance,
        level: 5,
        cost: 100,
        effect: `Poder Divino Supremo`,
        description: `Poder supremo e divino de ${treeConfig.name}`,
        color: treeConfig.color,
        state: "locked",
        layer: 5,
        size: "large",
        parentId: layer4Nodes[l5ParentIdxMap[treeConfig.id]].id,
        rarity: 5,
        // ✨ Bônus associado ao nó L5
        bonus: {
          id: `bonus-${treeConfig.id}-l5`,
          name: `Avatar Divino de ${treeConfig.name}`,
          effect: l5Effect,
          stats: {},
        },
      });
      this.nodes.push(node);

      // Atualizar contagem
      if (this.trees[treeConfig.id]) {
        this.trees[treeConfig.id].totalNodes = 10;
      }
    });

    console.log(
      `✨ ${this.nodes.length} nós orgânicos gerados em hierarquia 5 camadas`,
    );
  }

  /**
   * GERAÇÃO DE CONEXÕES - VEIAS ENERGÉTICAS ORGÂNICAS
   * Sistema de linhas vivas com fluxo de energia e estilo único por constelação
   */
  generateConnections() {
    this.connections = [];

    // Agrupar nós por camada
    const layerNodes = {};
    for (let layer = 1; layer <= 5; layer++) {
      layerNodes[layer] = this.nodes.filter((n) => n.layer === layer);
    }

    // 1. CONEXÕES PRIMÁRIAS: Core → L1
    layerNodes[1].forEach((node) => {
      this.connections.push({
        from: "core",
        to: node.id,
        state: "unlocked",
        type: "primary",
        intensity: "high",
      });
    });

    // 2. CONEXÕES L1 → L2 (nós básicos)
    layerNodes[2].forEach((node) => {
      const parentNode = layerNodes[1].find((n) => n.treeId === node.treeId);
      if (parentNode) {
        this.connections.push({
          from: parentNode.id,
          to: node.id,
          state: node.state,
          type: "secondary",
          intensity: "medium",
        });
      }
    });

    // 3. CONEXÕES L2 → L3 (intermediários)
    layerNodes[3].forEach((node, idx) => {
      const layer2Same = layerNodes[2].filter((n) => n.treeId === node.treeId);
      if (layer2Same.length > 0) {
        // Conectar em padrão cruzado para parecer mais orgânico
        const parentIdx = idx % layer2Same.length;
        this.connections.push({
          from: layer2Same[parentIdx].id,
          to: node.id,
          state: node.state,
          type: "tertiary",
          intensity: "medium",
        });
      }
    });

    // 4. CONEXÕES L3 → L4 (avançados)
    layerNodes[4].forEach((node, idx) => {
      const layer3Same = layerNodes[3].filter((n) => n.treeId === node.treeId);
      if (layer3Same.length > 0) {
        const closestIdx = idx % layer3Same.length;
        this.connections.push({
          from: layer3Same[closestIdx].id,
          to: node.id,
          state: node.state,
          type: "quaternary",
          intensity: "medium-high",
        });
      }
    });

    // 5. CONEXÕES L4 → L5 (supremo)
    layerNodes[5].forEach((node) => {
      const layer4Same = layerNodes[4].filter((n) => n.treeId === node.treeId);
      if (layer4Same.length > 0) {
        // Conectar ao primeiro nó avançado (deve ser apenas 2)
        this.connections.push({
          from: layer4Same[0].id,
          to: node.id,
          state: node.state,
          type: "supreme",
          intensity: "very-high",
        });
      }
    });

    // 6. CONEXÕES LATERAIS (intra-camada para coesão visual)
    for (let layer = 2; layer <= 4; layer++) {
      const sameLayerNodes = this.nodes.filter((n) => n.layer === layer);

      // Agrupar por constelação
      const constellations = {};
      sameLayerNodes.forEach((node) => {
        if (!constellations[node.treeId]) {
          constellations[node.treeId] = [];
        }
        constellations[node.treeId].push(node);
      });

      // Conectar nós adjacentes da mesma constelação em padrão orgânico
      Object.values(constellations).forEach((nodes) => {
        if (nodes.length >= 2) {
          for (let i = 0; i < nodes.length - 1; i++) {
            const dist = Math.hypot(
              nodes[i].x - nodes[i + 1].x,
              nodes[i].y - nodes[i + 1].y,
            );

            // Conectar se forem próximos (cria teia local)
            if (dist < 700 && Math.random() > 0.3) {
              this.connections.push({
                from: nodes[i].id,
                to: nodes[i + 1].id,
                state: "locked",
                type: "lateral",
                intensity: "low",
                isDashed: true,
              });
            }
          }
        }
      });
    }

    console.log(
      `✨ ${this.connections.length} veias energéticas orgânicas geradas`,
    );
  }

  /**
   * RENDER DA UI
   */
  renderUI() {
    this.renderSidebar();
    this.renderNodes();
    this.renderConnections();
  }

  renderSidebar() {
    const treesList = document.getElementById("trees-categories");
    if (!treesList) return;

    treesList.innerHTML = "";

    Object.values(this.trees).forEach((tree) => {
      const treeItem = document.createElement("div");
      treeItem.className = "tree-item trees-list-item";
      treeItem.setAttribute("data-tree", tree.id);
      treeItem.style.borderLeftColor = tree.color || "#4a9eff";
      treeItem.innerHTML = `
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                    <div class="constellation-image-wrapper" style="flex-shrink: 0;">
                        ${tree.imageUrl ? `<img src="${tree.imageUrl}" alt="${tree.name}" class="constellation-image">` : `<div class="constellation-image placeholder">${tree.icon}</div>`}
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 1px;">
                        <span style="font-weight: bold; font-size: 0.85rem; color: #e2e8f0;">${tree.name}</span>
                        <span style="font-size: 0.7rem; opacity: 0.7; color: #cbd5e0;">${tree.divinity}</span>
                    </div>
                    <span style="font-weight: 600; font-size: 0.7rem; white-space: nowrap; flex-shrink: 0;">${tree.unlockedNodes}/${tree.totalNodes}</span>
                </div>
            `;

      // ⚠️ NAVEGAÇÃO AUTOMÁTICA DESATIVADA
      // Descomentar a linha abaixo para reativar navegação ao clicar em constelação
      // treeItem.addEventListener('click', () => {
      //     this.focusTree(tree.id);
      // });

      treesList.appendChild(treeItem);
    });
  }

  renderNodes() {
    this.nodesContainer.innerHTML = "";

    this.nodes.forEach((node) => {
      const nodeEl = document.createElement("div");
      // Adicionar classe de tamanho
      const sizeClass = `size-${node.size || "medium"}`;
      nodeEl.className = `astral-node node-${node.state} branch-${node.treeId} ${sizeClass}`;
      nodeEl.style.left = `${node.x}px`;
      nodeEl.style.top = `${node.y}px`;
      nodeEl.style.transform = "translate(-50%, -50%)";
      nodeEl.setAttribute("data-name", node.name);
      nodeEl.setAttribute("data-tree-id", node.treeId);
      nodeEl.id = `node-${node.id}`;

      // Aplicar cor específica da constelação
      const treeColors = {
        arty: "#ff4444",
        aune: "#ffdd44",
        ephelias: "#4477dd",
        nishi: "#9966ff",
        hestia: "#66dd66",
      };

      nodeEl.style.color = treeColors[node.treeId] || "#ffffff";

      // Conteúdo
      let content = "";
      if (node.state === "locked") {
        content = '<span class="node-lock-icon">🔒</span>';
      } else if (node.state === "maxed") {
        content =
          '<span class="node-crown">👑</span><span class="node-rune">' +
          node.rune +
          "</span>";
      } else {
        content = '<span class="node-rune">' + node.rune + "</span>";
      }

      nodeEl.innerHTML = content;

      nodeEl.addEventListener("click", () => this.selectNode(node));

      this.nodesContainer.appendChild(nodeEl);
    });

    console.log("✨ Nós orgânicos renderizados com cores por constelação");
  }

  renderConnections() {
    const svgNS = "http://www.w3.org/2000/svg";
    this.linksCanvas.innerHTML = "";

    // Configurar SVG com viewBox para escala responsiva
    this.linksCanvas.setAttribute("preserveAspectRatio", "xMidYMid meet");
    this.linksCanvas.setAttribute("viewBox", "-2500 -2500 5000 5000");

    // Criar grupo para as linhas
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "astral-links-group");

    // Log para debug
    console.log(`Renderizando ${this.connections.length} conexões`);

    this.connections.forEach((conn, idx) => {
      let startNode, endNode;

      if (conn.from === "core") {
        startNode = { x: 0, y: 0 };
        endNode = this.nodes.find((n) => n.id === conn.to);
      } else {
        startNode = this.nodes.find((n) => n.id === conn.from);
        endNode = this.nodes.find((n) => n.id === conn.to);
      }

      if (!startNode || !endNode) {
        console.warn(`Conexão ${idx} inválida:`, conn);
        return;
      }

      // Criar linha com curvatura suave
      const line = document.createElementNS(svgNS, "path");

      // Calcular ponto de controle para curvatura suave (Bézier)
      const midX = (startNode.x + endNode.x) / 2;
      const midY = (startNode.y + endNode.y) / 2;

      // Adicionar offset perpendicular para mais curvatura orgânica
      const dx = endNode.x - startNode.x;
      const dy = endNode.y - startNode.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Ponto de controle com curva suave
      const offsetX = (-dy / distance) * (distance * 0.15);
      const offsetY = (dx / distance) * (distance * 0.15);

      const pathData = `M ${startNode.x} ${startNode.y} Q ${midX + offsetX} ${midY + offsetY} ${endNode.x} ${endNode.y}`;

      line.setAttribute("d", pathData);
      line.setAttribute("data-from", conn.from);
      line.setAttribute("data-to", conn.to);

      // ✨ NOVA LÓGICA: Determinar padrão baseado no estado ATUAL dos nós
      // Se AMBOS os nós estão desbloqueados/maxed = linha SÓLIDA
      // Se algum está bloqueado = linha TRACEJADA
      const startUnlocked =
        conn.from === "core" ||
        startNode.state === "unlocked" ||
        startNode.state === "maxed";
      const endUnlocked =
        endNode.state === "unlocked" || endNode.state === "maxed";
      const isUnlockedPath = startUnlocked && endUnlocked;

      // Aplicar classes
      const classes = ["astral-link", `link-${conn.state}`];
      if (conn.type) {
        classes.push(`link-${conn.type}`);
      }
      // Usar tracejado para linhas de nós bloqueados, sólido para desbloqueados
      if (!isUnlockedPath || conn.isDashed) {
        classes.push("link-dashed");
      } else {
        classes.push("link-unlocked");
      }
      line.setAttribute("class", classes.join(" "));

      // Mapear cores por constelação
      const constellationColors = {
        arty: "#ff4444", // Vermelho vibrante
        aune: "#ffdd44", // Dourado astral
        ephelias: "#4477dd", // Azul arcano
        nishi: "#9966ff", // Roxo/Índigo
        hestia: "#66dd66", // Verde vital
      };

      // Mapear larguras de stroke por tipo
      const strokeWidths = {
        primary: 6,
        secondary: 4,
        tertiary: 3,
        quaternary: 2.5,
        supreme: 5,
        lateral: 2,
      };

      // Mapear opacidades: desbloqueadas = mais opacas, bloqueadas = transparentes
      const typeOpacities = isUnlockedPath
        ? {
            primary: "1",
            secondary: "0.98",
            tertiary: "0.95",
            quaternary: "0.92",
            supreme: "1",
            lateral: "0.85",
          }
        : {
            primary: "0.5",
            secondary: "0.48",
            tertiary: "0.45",
            quaternary: "0.42",
            supreme: "0.5",
            lateral: "0.3",
          };

      // Definir atributos de stroke inline
      const connConstellation = startNode?.treeId || endNode?.treeId;
      const baseColor = constellationColors[connConstellation] || "#ffffff";

      line.setAttribute("stroke", baseColor);
      line.setAttribute("stroke-width", strokeWidths[conn.type] || 2);
      line.setAttribute("stroke-linecap", "round");
      line.setAttribute("stroke-linejoin", "round");
      line.setAttribute("fill", "none");
      line.setAttribute("opacity", typeOpacities[conn.type] || "0.6");

      // PADRÕES VISUAIS
      // Linhas DESBLOQUEADAS: sólidas e brilhantes
      // Linhas BLOQUEADAS: tracejadas e opacas
      if (!isUnlockedPath) {
        // Linha tracejada para nós que podem desbloquear
        line.setAttribute("stroke-dasharray", "12,8");
      }
      // Se for lateral (conexão intra-camada), sempre tracejado
      if (conn.isDashed) {
        line.setAttribute("stroke-dasharray", "8,4");
      }

      g.appendChild(line);
    });

    this.linksCanvas.appendChild(g);
    console.log(
      `✨ ${this.connections.length} veias energéticas renderizadas com padrões distintos`,
    );
  }

  /**
   * INTERAÇÃO COM NÓS
   */
  selectNode(node) {
    this.selectedNode = node;
    this.renderNodeDetails();

    // Mostrar painel de detalhes
    const panel = document.getElementById("node-detail-panel");
    if (panel) {
      panel.classList.remove("hidden");
    }
  }

  /**
   * VALIDAÇÃO DE DESBLOQUEIO
   * Verifica se há PC suficiente para desbloquear todo o caminho até o nó
   */
  canUnlockNode(node) {
    if (node.state !== "locked") return false;

    const caminho = this.findPathToNode(node);
    const pcNecessario = this.calcularPCNecessarioParaCaminho(caminho);
    return this.powerCombat >= pcNecessario;
  }

  /**
   * OBTER MOTIVO DO BLOQUEIO
   * Retorna mensagem explicando por que o nó não pode ser desbloqueado
   */
  getUnlockBlockReason(node) {
    if (node.state !== "locked") return null;

    const caminho = this.findPathToNode(node);
    const pcNecessario = this.calcularPCNecessarioParaCaminho(caminho);

    if (this.powerCombat < pcNecessario) {
      const bloqueados = caminho.filter((n) => n.state === "locked");
      const nomes = bloqueados.map((n) => n.name).join(" → ");
      return `❌ PC insuficiente (${this.powerCombat}/${pcNecessario}) para desbloquear: ${nomes}`;
    }

    return null; // Sem bloqueios
  }

  renderNodeDetails() {
    if (!this.selectedNode) return;

    const node = this.selectedNode;
    const panel = document.getElementById("node-detail-panel");
    if (!panel) return;

    // Aplicar classe de constelação ao painel para mudar cores
    panel.className = "node-detail-panel";
    panel.classList.add(`node-detail-panel--${node.treeId}`);

    // Atualizar título
    const titleEl = document.getElementById("node-detail-name");
    if (titleEl) titleEl.textContent = node.name;

    // Descrição
    const descEl = document.getElementById("node-detail-description");
    if (descEl) descEl.textContent = node.description;

    // Aprimoramento (bonus effect)
    const enhancementEl = document.getElementById("node-detail-enhancement");
    if (enhancementEl) {
      console.log("nó:", node);
      if (node.bonus && node.bonus.effect) {
        enhancementEl.textContent = node.bonus.effect;
      } else {
        enhancementEl.textContent = "—";
      }
    }

    // Custo
    const costEl = document.getElementById("node-detail-cost");
    if (costEl) costEl.textContent = `${node.cost} PC`;

    // Nível
    const levelEl = document.getElementById("node-detail-level");
    if (levelEl) levelEl.textContent = node.level;

    // Estado
    const stateEl = document.getElementById("node-detail-state");
    if (stateEl) {
      const stateMap = {
        locked: "🔒 Bloqueado",
        unlocked: "🔓 Desbloqueado",
        active: "⭐ Ativo",
        maxed: "👑 Máximo",
      };
      stateEl.textContent = stateMap[node.state] || node.state;
    }

    // ✨ NOVO: Mostrar motivo do bloqueio se aplicável
    const blockReasonSection = document.getElementById(
      "node-block-reason-section",
    );
    const blockReasonEl = document.getElementById("node-block-reason");
    if (blockReasonSection && blockReasonEl) {
      const reason = this.getUnlockBlockReason(node);
      if (reason && node.state === "locked") {
        blockReasonEl.textContent = reason.replace("❌ ", "");
        blockReasonSection.style.display = "block";
      } else {
        blockReasonSection.style.display = "none";
      }
    }

    // Botão de desbloqueio
    const unlockBtn = document.getElementById("unlock-node-btn");
    if (unlockBtn) {
      const canUnlock = node.state === "locked" && this.canUnlockNode(node);

      if (canUnlock) {
        unlockBtn.disabled = false;
        unlockBtn.textContent = `🔓 Desbloquear`;
        unlockBtn.style.opacity = "1";
        unlockBtn.onclick = () => this.unlockNode(node);
      } else {
        unlockBtn.disabled = true;
        unlockBtn.style.opacity = "0.5";

        if (node.state !== "locked") {
          unlockBtn.textContent = "Desbloqueado";
        } else {
          unlockBtn.textContent = "Indisponível";
        }
      }
    }

    // ✨ NOVO: Botão de bloquear (para nós desbloqueados)
    const lockBtn = document.getElementById("lock-node-btn");
    if (lockBtn) {
      if (node.state === "unlocked" || node.state === "maxed") {
        lockBtn.style.display = "block";
        lockBtn.disabled = false;
        lockBtn.textContent = `🔒 Bloquear`;
        lockBtn.onclick = () => this.lockNode(node);
      } else {
        lockBtn.style.display = "none";
      }
    }
  }

  /**
   * ENCONTRAR CAMINHO LINEAR ATÉ UM NÓ
   * Retorna array com o caminho completo do cristal central até o nó alvo
   * Inclui apenas o nó, seu pai, avó, etc. até raiz
   */
  findPathToNode(node, visited = new Set()) {
    if (visited.has(node.id)) return [];
    visited.add(node.id);

    const path = [node];

    // Se tem parentId e não é 'core', encontrar o pai
    if (node.parentId != null && node.parentId !== "core") {
      const parentNode = this.nodes.find((n) => n.id === node.parentId);
      if (parentNode) {
        path.unshift(...this.findPathToNode(parentNode, visited));
      }
    }

    return path;
  }

  /**
   * CALCULAR PC NECESSÁRIO PARA DESBLOQUEAR UM CAMINHO
   * Soma o custo de todos os nós no caminho até o nó alvo
   */
  calcularPCNecessarioParaCaminho(caminho) {
    return caminho.reduce((total, no) => {
      return total + (no.state === "locked" ? no.cost : 0);
    }, 0);
  }

  unlockNode(node) {
    if (node.state !== "locked") {
      console.warn("⚠️ Nó já foi desbloqueado");
      return;
    }

    // Encontrar caminho completo (pais bloqueados + nó alvo)
    const caminho = this.findPathToNode(node);
    const pcNecessario = this.calcularPCNecessarioParaCaminho(caminho);

    if (this.powerCombat < pcNecessario) {
      const faltam = pcNecessario - this.powerCombat;
      console.warn(`❌ PC insuficiente: faltam ${faltam} PC`);
      this.showNotification(
        `❌ PC insuficiente! Faltam ${faltam} PC`,
        "error",
        3000,
      );
      return;
    }

    // Desbloquear todos os nós bloqueados no caminho (pais + nó alvo)
    const nosDesbloqueados = [];
    let pcGasto = 0;
    caminho.forEach((no) => {
      if (no.state === "locked") {
        this.powerCombat -= no.cost;
        pcGasto += no.cost;
        no.state = "unlocked";
        nosDesbloqueados.push(no.name);

        if (no.bonus) this.activateBonus(no.bonus);

        const tree = this.trees[no.treeId];
        if (tree) {
          tree.unlockedNodes = this.nodes.filter(
            (n) => n.treeId === tree.id && n.state !== "locked",
          ).length;
        }
      }
    });

    // Efeito visual do nó alvo
    const nodeEl = document.getElementById(`node-${node.id}`);
    if (nodeEl) {
      nodeEl.style.animation = "node-unlock-glow 0.6s ease-out";
    }

    // Ativar linhas conectadas ao nó desbloqueado
    if (this.lineActivation) {
      this.lineActivation.activateNodePath(node.id);
    }

    // 💾 Salvar estado dos nós
    this.saveState();

    if (nosDesbloqueados.length > 1) {
      console.log(
        `🔓 Caminho desbloqueado: ${nosDesbloqueados.join(" → ")}. PC gasto: ${pcGasto}`,
      );
      this.showNotification(
        `🔓 ${nosDesbloqueados.join(" → ")} desbloqueados! -${pcGasto} PC`,
        "success",
        4000,
      );
    } else {
      console.log(`🔓 Nó "${node.name}" desbloqueado. PC gasto: ${pcGasto}`);
      this.showNotification(
        `✅ ${node.name} desbloqueado. -${pcGasto} PC`,
        "success",
        3000,
      );
    }

    this.updateUI();
    this.renderNodes();
    this.renderConnections();
    this.renderNodeDetails();
    this.renderSidebar();
  }

  /**
   * ENCONTRAR TODOS OS NÓS DESCENDENTES
   * Retorna um array com todos os nós que dependem do nó fornecido (via parentId)
   */
  findDescendantNodes(node, visited = new Set()) {
    if (visited.has(node.id)) return [];
    visited.add(node.id);

    const descendants = [];

    // Encontrar filhos diretos via parentId (ignora conexões laterais)
    const directChildren = this.nodes.filter(
      (n) => n.parentId === node.id && n.state !== "locked",
    );

    directChildren.forEach((child) => {
      descendants.push(child);
      descendants.push(...this.findDescendantNodes(child, visited));
    });

    return descendants;
  }

  /**
   * BLOQUEAR NÓ - Volta o nó ao estado locked
   * Se houver nós posteriores desbloqueados, bloqueia toda a sequência
   */
  lockNode(node) {
    if (node.state === "locked") {
      console.warn("⚠️ Nó já está bloqueado");
      return;
    }

    // 🔥 NOVO: Encontrar todos os descendentes desbloqueados
    const descendentes = this.findDescendantNodes(node);

    // Array para rastrear todos os nós que serão bloqueados (incluindo o nó principal)
    const nodosABloquear = [node, ...descendentes];

    let pcRecuperado = 0;
    const nomesNosDesbloqueados = [];

    // Bloquear o nó principal e todos seus descendentes
    nodosABloquear.forEach((no) => {
      if (no.state !== "locked") {
        // Recuperar PC
        this.powerCombat = Math.min(
          this.maxPowerCombat,
          this.powerCombat + no.cost,
        );
        pcRecuperado += no.cost;

        // Desativar bônus do nó
        if (no.bonus) {
          this.deactivateBonus(no.bonus.id);
        }

        no.state = "locked";
        nomesNosDesbloqueados.push(no.name);
      }
    });

    // 💾 Salvar estado
    this.saveState();

    // Log e notificação
    if (descendentes.length > 0) {
      console.log(
        `🔒 Nó "${node.name}" bloqueado. ${descendentes.length} nó(s) posterior(es) também bloqueado(s).`,
      );
      console.log(`   Nós bloqueados: ${nomesNosDesbloqueados.join(", ")}`);
      console.log(`   Total de PC recuperado: ${pcRecuperado}`);
      this.showNotification(
        `🔒 ${nomesNosDesbloqueados.length} nó(s) bloqueado(s). +${pcRecuperado} PC`,
        "warning",
        4000,
      );
    } else {
      console.log(
        `🔒 Nó "${node.name}" bloqueado. PC recuperado: ${pcRecuperado}`,
      );
      this.showNotification(
        `✅ ${node.name} bloqueado. +${pcRecuperado} PC`,
        "success",
        3000,
      );
    }

    this.updateUI();
    this.renderNodes();
    this.renderConnections();
    this.renderNodeDetails();

    // Atualizar contagem de árvore
    const tree = this.trees[node.treeId];
    if (tree) {
      tree.unlockedNodes = this.nodes.filter(
        (n) => n.treeId === tree.id && n.state !== "locked",
      ).length;
    }

    this.renderSidebar();
  }

  /**
   * ATIVAR BÔNUS
   */
  activateBonus(bonus) {
    if (!bonus || !bonus.id) return;

    // Evitar duplicatas
    const jaAtivo = this.activeBonuses.find((b) => b.id === bonus.id);
    if (jaAtivo) return;

    this.activeBonuses.push(bonus);
    console.log(`✅ Bônus ativado: ${bonus.name} — ${bonus.effect}`);
  }

  /**
   * DESATIVAR BÔNUS
   */
  deactivateBonus(bonusId) {
    const index = this.activeBonuses.findIndex((b) => b.id === bonusId);
    if (index !== -1) {
      const bonus = this.activeBonuses[index];
      console.log(`❌ Bônus desativado: ${bonus.name}`);
      this.activeBonuses.splice(index, 1);
    }
  }

  /**
   * ATUALIZAR UI
   */
  updateUI() {
    // Power Combat
    const powerCombatCounter = document.getElementById("power-combat-counter");
    const powerCombatFill = document.getElementById("power-combat-fill");
    const powerCombatMax = document.getElementById("power-combat-max");

    if (powerCombatCounter) powerCombatCounter.textContent = this.powerCombat;
    if (powerCombatMax) powerCombatMax.textContent = `/ ${this.maxPowerCombat}`;
    if (powerCombatFill)
      powerCombatFill.style.width = `${(this.powerCombat / this.maxPowerCombat) * 100}%`;

    // Ressonância
    const resonanceCounter = document.getElementById("resonance-counter");
    const resonanceFill = document.getElementById("resonance-fill");

    if (resonanceCounter) resonanceCounter.textContent = this.resonance;
    if (resonanceFill)
      resonanceFill.style.width = `${(this.resonance / this.maxResonance) * 100}%`;
  }

  /**
   * SETUP EVENT LISTENERS
   */
  setupEventListeners() {
    // Nenhum listener global necessário
    // Todos os listeners são adicionados durante renderUI
  }

  /**
   * UTILITÁRIOS
   */
  generateNodeName(treeId, index) {
    const names = {
      arty: [
        "Instinto Primitivo",
        "Primeira Destruição",
        "Aura Caótica",
        "Cólera Divina",
        "Fúria Cósmica",
        "Ruptura da Realidade",
        "Poder do Caos",
        "Arty Supremo",
      ],
      aune: [
        "Presságio Suave",
        "Linha do Destino",
        "Tecelã Celestial",
        "Sincronicidade",
        "Trilho Inevitável",
        "Fortuna Cósmica",
        "Vontade do Universo",
        "Aune Absoluta",
      ],
      ephelias: [
        "Revelação Primeira",
        "Símbolo Arcano",
        "Grimório Antigo",
        "Conhecimento Proibido",
        "Verdade Oculta",
        "Sabedoria Infinita",
        "Consciência Cósmica",
        "Ephelias Suprema",
      ],
      nishi: [
        "Respiração Cósmica",
        "Fluxo Perfeito",
        "Movimento Celeste",
        "Sincronismo",
        "Ritmo do Universo",
        "Harmonia Plena",
        "Dança das Esferas",
        "Nishi Absoluta",
      ],
      hestia: [
        "Semente da Vida",
        "Bênção Vital",
        "Energia Criadora",
        "Florescimento",
        "Raiz Profunda",
        "Força Regenerativa",
        "Abraço do Universo",
        "Hestia Suprema",
      ],
    };
    return names[treeId]?.[index] || `Nó ${index + 1}`;
  }

  getRune(treeId, index) {
    const runes = {
      arty: ["⚡", "⚙", "⚔", "✕", "▲", "█", "◈", "⚡"],
      aune: ["★", "✦", "✧", "✪", "✫", "✬", "✭", "★"],
      ephelias: ["◆", "⬠", "⬡", "✻", "✴", "◊", "◇", "◆"],
      nishi: ["◇", "○", "◉", "◎", "⊙", "◐", "◑", "◒"],
      hestia: ["❖", "♦", "♣", "♥", "♠", "✿", "❀", "❖"],
    };
    return runes[treeId]?.[index] || "◆";
  }

  generateNodeEffect(treeId, index) {
    const effects = {
      arty: "+5% Dano Bruto | +3% Penetração",
      aune: "+5% Taxa de Sorte | +3% Bônus Crítico",
      ephelias: "+5% Inteligência Arcana | +2% Controle Mágico",
      nishi: "+5% Velocidade | +3% Precisão",
      hestia: "+5% Vida Máxima | +3% Regeneração",
    };
    return effects[treeId] || "Bênção da Divindade";
  }

  generateNodeDescription(treeId, index) {
    const descriptions = {
      arty: "Arty sussurra poder destrutivo através de suas Veias Astrais.",
      aune: "Aune tece os fios de seu destino e fortuna.",
      ephelias: "Ephelias abre sua mente para conhecimento infinito.",
      nishi: "Nishi flui através de você em perfeita harmonia.",
      hestia: "Hestia nutre sua existência com energia vital.",
    };
    return (
      descriptions[treeId] ||
      "Uma bênção divina flui através das Veias Astrais."
    );
  }

  focusTree(treeId) {
    // Calcular o centro da constelação (média de todas as posições dos nós)
    const treeNodes = this.nodes.filter((n) => n.treeId === treeId);
    if (treeNodes.length > 0) {
      // Calcular o centróide da constelação
      let avgX = 0;
      let avgY = 0;

      treeNodes.forEach((node) => {
        avgX += node.x;
        avgY += node.y;
      });

      avgX /= treeNodes.length;
      avgY /= treeNodes.length;

      // Focar nesse ponto com zoom para ver toda a constelação
      this.navigation.focusOn(avgX, avgY, 1.2);
    }
  }

  /**
   * PARTÍCULAS DO NÚCLEO
   */
  createCoreParticles() {
    const container = document.getElementById("core-particles");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 6; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.animationDelay = `${i * 1}s`;
      particle.style.left = "0";
      particle.style.top = "0";

      container.appendChild(particle);
    }
  }

  /**
   * PERSISTÊNCIA - SALVAR ESTADO
   */
  saveState() {
    try {
      if (window.localStorageManager) {
        window.localStorageManager.saveVeiasAstrais(this.nodes);
        console.log("💾 Estado das Veias Astrais salvo");
      }
    } catch (error) {
      console.warn("⚠️ Erro ao salvar estado:", error);
    }
  }

  /**
   * PERSISTÊNCIA - CARREGAR ESTADO SALVO
   */
  loadSavedStates() {
    try {
      if (!window.localStorageManager) {
        console.warn("⚠️ LocalStorageManager não disponível");
        return;
      }

      const savedData = window.localStorageManager.loadVeiasAstrais();
      if (!savedData || !Array.isArray(savedData)) {
        console.log("ℹ️ Nenhum estado salvo para Veias Astrais");
        return;
      }

      // Aplicar estados salvos aos nós
      savedData.forEach((savedNode) => {
        const node = this.nodes.find((n) => n.id === savedNode.id);
        if (node) {
          node.state = savedNode.state;
          node.level = savedNode.level;
          console.log(`📥 Nó ${node.name} restaurado: ${node.state}`);
        }
      });

      console.log("✅ Estados restaurados com sucesso");
    } catch (error) {
      console.error("❌ Erro ao carregar estados:", error);
    }
  }

  /**
   * CONTROLE MODAL
   */
  open() {
    if (this.modal) {
      this.modal.classList.remove("hidden");
      if (!this.initialized) {
        this.init();
      }
      this.updateUI();
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.add("hidden");
    }

    // ⏹️ Parar o monitoramento de Power Combat
    this.stopPowerCombatListener();
  }
}

/**
 * CLASSE DE NÓ
 */
class AstralNode {
  constructor(config) {
    this.id = config.id;
    this.treeId = config.treeId;
    this.name = config.name;
    this.rune = config.rune;
    this.x = config.x;
    this.y = config.y;
    this.level = config.level;
    this.cost = config.cost;
    this.effect = config.effect;
    this.description = config.description;
    this.color = config.color;
    this.state = config.state || "locked";
    this.layer = config.layer || 1; // Camada hierárquica (1, 2, 3)
    this.parentId = config.parentId != null ? config.parentId : null; // ID do nó pai na hierarquia
    this.bonus = config.bonus || null; // Bônus/aprimoramento do nó
    this.size = config.size || "medium";
    this.rarity = config.rarity || 1;
  }
}

/**
 * GERENCIADOR DE PARTÍCULAS
 */
class ParticleManager {
  constructor() {
    this.particles = [];
  }

  createOrbitalParticles(container, count = 6) {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        angle: (i / count) * Math.PI * 2,
        distance: 50,
        speed: 0.02 + Math.random() * 0.01,
      });
    }
    return particles;
  }
}

/**
 * INSTÂNCIA GLOBAL
 */
let veiasAstraisSystem = null;

function initVeiasAstrais() {
  if (!veiasAstraisSystem) {
    veiasAstraisSystem = new VeiasAstraisSystem();
  }
  return veiasAstraisSystem;
}

// Inicializar sistema se não existir
if (!veiasAstraisSystem) {
  veiasAstraisSystem = new VeiasAstraisSystem();
}

// Exportar para uso global
window.VeiasAstraisSystem = VeiasAstraisSystem;
window.AstralNode = AstralNode;
window.initVeiasAstrais = initVeiasAstrais;
window.veiasAstraisSystem = veiasAstraisSystem;
