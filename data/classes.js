/**
 * CLASSES.JS - Sistema de Classes
 * Contém todas as classes disponíveis no jogo com habilidades base e bônus
 */

const CLASSES_SISTEMA = {
  guerreiro: {
    id: 'guerreiro',
    nome: 'Guerreiro',
    descricao: 'Mestre do combate corporal, especializado em armas e armaduras pesadas',
    atributosPrimarios: ['Força', 'Vitalidade'],
    habilidadesBase: [
      'Golpe Pesado',
      'Bloqueio',
      'Grito de Guerra'
    ],
    bonus: {
      ataque: 2,
      defesa: 1,
      magia: -1
    },
    imagem: '⚔️',
    cor: '#b22222'
  },

  mago: {
    id: 'mago',
    nome: 'Mago',
    descricao: 'Manipulador das arcanas, especializado em magia elementar e projeções',
    atributosPrimarios: ['Inteligência', 'Percepção'],
    habilidadesBase: [
      'Bola de Fogo',
      'Escudo Mágico',
      'Telecinese'
    ],
    bonus: {
      ataque: -1,
      defesa: 0,
      magia: 2
    },
    imagem: '🧙',
    cor: '#4169e1'
  },

  arqueiro: {
    id: 'arqueiro',
    nome: 'Arqueiro',
    descricao: 'Especialista em combate à distância com precisão letal',
    atributosPrimarios: ['Agilidade', 'Percepção'],
    habilidadesBase: [
      'Tiro Certeiro',
      'Barrage',
      'Flecha Penetrante'
    ],
    bonus: {
      ataque: 1,
      defesa: 0,
      magia: 0
    },
    imagem: '🏹',
    cor: '#ffd700'
  },

  clerigo: {
    id: 'clerigo',
    nome: 'Clérigo',
    descricao: 'Curandeiro abençoado com poder divino, suporta aliados',
    atributosPrimarios: ['Inteligência', 'Vitalidade'],
    habilidadesBase: [
      'Cura Divina',
      'Bênção',
      'Luz Sagrada'
    ],
    bonus: {
      ataque: 0,
      defesa: 1,
      magia: 1
    },
    imagem: '⛪',
    cor: '#ffd700'
  },

  ladrao: {
    id: 'ladrao',
    nome: 'Ladrão',
    descricao: 'Discreto e rápido, especialista em furtividade e críticos',
    atributosPrimarios: ['Agilidade', 'Inteligência'],
    habilidadesBase: [
      'Golpe Furtivo',
      'Evasão',
      'Invisibilidade'
    ],
    bonus: {
      ataque: 1,
      defesa: -1,
      magia: 0
    },
    imagem: '🗡️',
    cor: '#2f4f4f'
  },

  paladino: {
    id: 'paladino',
    nome: 'Paladino',
    descricao: 'Guerreiro sagrado que combina força com magia divina',
    atributosPrimarios: ['Força', 'Inteligência'],
    habilidadesBase: [
      'Golpe Divino',
      'Escudo Sagrado',
      'Justiça Celestial'
    ],
    bonus: {
      ataque: 1,
      defesa: 2,
      magia: 1
    },
    imagem: '⚡',
    cor: '#ffd700'
  },

  xamã: {
    id: 'xama',
    nome: 'Xamã',
    descricao: 'Conectado com espíritos da natureza, controla elementos naturais',
    atributosPrimarios: ['Inteligência', 'Percepção'],
    habilidadesBase: [
      'Invocação de Espíritos',
      'Controle de Natureza',
      'Cura Natureza'
    ],
    bonus: {
      ataque: 0,
      defesa: 1,
      magia: 2
    },
    imagem: '🌿',
    cor: '#228b22'
  },

  assassino: {
    id: 'assassino',
    nome: 'Assassino',
    descricao: 'Mestre do combate letal, especializado em eliminar alvos únicos',
    atributosPrimarios: ['Agilidade', 'Inteligência'],
    habilidadesBase: [
      'Execução',
      'Sombras',
      'Veneno Letal'
    ],
    bonus: {
      ataque: 2,
      defesa: -2,
      magia: -1
    },
    imagem: '🔪',
    cor: '#000000'
  },

  cavaleiro: {
    id: 'cavaleiro',
    nome: 'Cavaleiro',
    descricao: 'Nobre protetor, defende aliados com honra e coragem',
    atributosPrimarios: ['Força', 'Vitalidade'],
    habilidadesBase: [
      'Guarda Protetora',
      'Carga Montada',
      'Escudo Unido'
    ],
    bonus: {
      ataque: 1,
      defesa: 3,
      magia: -1
    },
    imagem: '🛡️',
    cor: '#696969'
  }
};

// Exportar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLASSES_SISTEMA };
}
