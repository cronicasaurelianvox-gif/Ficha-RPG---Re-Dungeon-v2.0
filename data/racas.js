/**
 * RACAS.JS - Sistema de Raças
 * Contém todas as raças disponíveis no jogo com bônus e habilidades
 */

const RACAS_SISTEMA = {
  humano: {
    id: 'humano',
    nome: 'Humano',
    tipo: "Re'Geron",
    descricao: 'Versáteis e adaptáveis, os humanos se destacam pela capacidade de aprendizado rápido e flexibilidade',
    bonus: {
      forca: 0,
      vitalidade: 1,
      agilidade: 0,
      inteligencia: 0,
      percepcao: 0
    },
    habilidadesRaciais: [
      'Polivalência (Pode treinar qualquer habilidade 10% mais rápido)',
      'Aprendizado Rápido (Ganha +10% experiência)'
    ],
    imagem: '🧑',
    cor: '#d4a574'
  },

  elfo: {
    id: 'elfo',
    nome: 'Elfo',
    tipo: "Re'Geron",
    descricao: 'Elegantes e mágicos, os elfos possuem afinidade natural com a magia e visão aguçada',
    bonus: {
      forca: -1,
      vitalidade: 0,
      agilidade: 2,
      inteligencia: 1,
      percepcao: 1
    },
    habilidadesRaciais: [
      'Visão Noturna (Vê 50% melhor na escuridão)',
      'Afinidade Mágica (+15% dano mágico)'
    ],
    imagem: '🧝',
    cor: '#90ee90'
  },

  anao: {
    id: 'anao',
    nome: 'Anão',
    tipo: "Re'Geron",
    descricao: 'Fortes e resistentes, os anões são mestres da forja e resistem bem a magia',
    bonus: {
      forca: 2,
      vitalidade: 2,
      agilidade: -1,
      inteligencia: 0,
      percepcao: -1
    },
    habilidadesRaciais: [
      'Resistência à Magia (+20% resistência mágica)',
      'Maestria em Ferramentas (Fabrica itens 25% mais rápido)'
    ],
    imagem: '👨',
    cor: '#cd853f'
  },

  orc: {
    id: 'orc',
    nome: 'Orc',
    tipo: "Re'Geron",
    descricao: 'Selvagens e poderosos, os orcs são guerreiros natos com força bruta incomparável',
    bonus: {
      forca: 3,
      vitalidade: 1,
      agilidade: 0,
      inteligencia: -1,
      percepcao: -1
    },
    habilidadesRaciais: [
      'Fúria Tribal (+25% dano em ataques corpo-a-corpo)',
      'Vitalidade Selvagem (+15% regeneração de HP)'
    ],
    imagem: '👹',
    cor: '#228b22'
  },

  goblin: {
    id: 'goblin',
    nome: 'Goblin',
    tipo: "Re'Geron",
    descricao: 'Pequenos mas astutos, os goblins são ágeis e engenhosos em combate',
    bonus: {
      forca: -1,
      vitalidade: 0,
      agilidade: 2,
      inteligencia: 1,
      percepcao: 1
    },
    habilidadesRaciais: [
      'Astúcia Goblin (+20% ganho de ouro)',
      'Reflexos Rápidos (+10% evasão)'
    ],
    imagem: '👺',
    cor: '#32cd32'
  },

  tiefling: {
    id: 'tiefling',
    nome: 'Tiefling',
    tipo: "Re'Geron",
    descricao: 'Descendentes de seres infernais, possuem afinidade com magia sombria',
    bonus: {
      forca: 0,
      vitalidade: -1,
      agilidade: 1,
      inteligencia: 2,
      percepcao: 1
    },
    habilidadesRaciais: [
      'Herança Infernal (+20% dano com magia sombria)',
      'Resistência ao Fogo (+25% resistência ao fogo)'
    ],
    imagem: '😈',
    cor: '#8b008b'
  },

  draconico: {
    id: 'draconico',
    nome: 'Dracônico',
    tipo: "Re'Geron",
    descricao: 'Herdeiros do poder dos dragões, combinam força e magia em harmonia',
    bonus: {
      forca: 1,
      vitalidade: 2,
      agilidade: 0,
      inteligencia: 1,
      percepcao: 1
    },
    habilidadesRaciais: [
      'Herança Dracônica (+30% resistência a magia elemental)',
      'Sopro de Dragão (Habilidade de ataques em área)'
    ],
    imagem: '🐉',
    cor: '#ff4500'
  },

  felinido: {
    id: 'felinido',
    nome: 'Felinído',
    tipo: "Re'Geron",
    descricao: 'Felinos humanoides, ágeis e predadores por natureza',
    bonus: {
      forca: 1,
      vitalidade: 0,
      agilidade: 3,
      inteligencia: 0,
      percepcao: 2
    },
    habilidadesRaciais: [
      'Reflexos de Felino (+15% velocidade de ataque)',
      'Visão Aguçada (Detecta inimigos ocultos +25%)'
    ],
    imagem: '🐱',
    cor: '#ff8c00'
  },

  naga: {
    id: 'naga',
    nome: 'Naga',
    tipo: "Re'Geron",
    descricao: 'Seres serpentinos com domínio sobre a água e magia natural',
    bonus: {
      forca: 0,
      vitalidade: 1,
      agilidade: 1,
      inteligencia: 2,
      percepcao: 1
    },
    habilidadesRaciais: [
      'Domínio da Água (+20% dano com magia de água)',
      'Enrolamento Serpentino (Pode imobilizar inimigos)'
    ],
    imagem: '🐍',
    cor: '#00ced1'
  }
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RACAS_SISTEMA };
}
