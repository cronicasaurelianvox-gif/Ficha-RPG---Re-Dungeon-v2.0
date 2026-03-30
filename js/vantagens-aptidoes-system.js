/* ============================================ */
/* VANTAGENS-APTIDOES-SYSTEM.JS                 */
/* Sistema de Tipos e Aplicação de Vantagens   */
/* ============================================ */

/**
 * VantagensAptidoesSystem
 * Gerencia todos os tipos de vantagens (bonus, bonus-percentual, bonus-opcional, efeito)
 * Responsável por:
 * - Aplicar bônus corretos por nível
 * - Gerenciar estado de bônus opcionais
 * - Renderizar efeitos narrativos
 * - Validar aplicação de bônus
 */

const VantagensAptidoesSystem = (() => {
  /**
   * Definição de vantagens por aptidão
   * Cada nível contém um objeto com:
   * - tipo: "bonus" | "bonus-percentual" | "bonus-opcional" | "efeito"
   * - valor: string do bônus principal
   * - valorOpcional?: string do bônus alternativo (apenas para bonus-opcional)
   * 
   * Regra de níveis:
   * - Níveis ímpares (1, 3, 5) = EFEITOS
   * - Níveis pares (2, 4, 6) = BÔNUS
   */
  const vantagensAptidoes = {
    'acrobacia': {
      1: { tipo: 'bonus', valor: '+5 Agilidade' },
      3: { tipo: 'bonus', valor: '+1 Reação' },
      5: { tipo: 'bonus', valor: '+1 Evasão' }
    },
    'alquimia': {
      1: { tipo: 'efeito', valor: 'Reduz dificuldade ao fabricar itens alquímicos em -3' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Reduz teste para descontrole alquímico em -3' }
    },
    'ambidestro': {
      1: { tipo: 'bonus', valor: '+1 Precisão' },
      3: { tipo: 'efeito', valor: 'Permite atacar com ambas as mãos' },
      5: { tipo: 'efeito', valor: 'Ataque com segunda mão conta como ação comum' }
    },
    'arcanismo': {
      1: { tipo: 'efeito', valor: 'Casting com magias reduz dificuldade em -3' },
      3: { tipo: 'bonus', valor: '+1 Precisão' },
      5: { tipo: 'efeito', valor: 'Reduz teste de descontrole mágico em -3' }
    },
    'atletismo': {
      1: { tipo: 'bonus', valor: '+5 Vitalidade' },
      3: { tipo: 'bonus', valor: '+50 Saúde' },
      5: { tipo: 'bonus', valor: '+5 Força' }
    },
    'atuacao': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: 'Aplica obstáculo em alvos por atuar/enganar em -3' },
      5: { tipo: 'efeito', valor: 'Pode imitar vozes ou gestos com precisão' }
    },
    'beleza': {
      1: { tipo: 'efeito', valor: '+1 em testes sociais onde aparência impacta' },
      3: { tipo: 'bonus', valor: '+5 Sorte' },
      5: { tipo: 'efeito', valor: 'Pode distrair inimigos que falham em percepção (-1 Precisão)' }
    },
    'camuflagem': {
      1: { tipo: 'bonus-percentual', valor: '+20% Prontidão' },
      3: { tipo: 'bonus', valor: '+5 Agilidade' },
      5: { tipo: 'bonus', valor: '+1 Reação' }
    },
    'canto': {
      1: { tipo: 'efeito', valor: '+1 em testes de encantar/inspirar/acalmar' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'bonus-opcional', valor: '+1 Reação', valorOpcional: '+1 Precisão' }
    },
    'compreensao': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: 'Aprenda técnicas extras rolando 1d4+2' },
      5: { tipo: 'efeito', valor: 'Compreenda elementos com efeitos narrativos poderosos' }
    },
    'controleqi': {
      1: { tipo: 'bonus-opcional', valor: '+5 Percepção', valorOpcional: '+5 Inteligência' },
      3: { tipo: 'bonus', valor: '+1 Reação' },
      5: { tipo: 'efeito', valor: 'Interrompa circulação de Qi de inimigos com toque' }
    },
    'conhecimento': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: 'Dados extras (+1d6) em testes de decifração e investigação' },
      5: { tipo: 'efeito', valor: 'Relembre fatos úteis sobre locais, criaturas e eventos' }
    },
    'cultivo': {
      1: { tipo: 'efeito', valor: 'Recuperação de energia em descansos curtos dobrada' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Atravesse barreiras ou resista a campos de supressão inferiores' }
    },
    'danca': {
      1: { tipo: 'bonus', valor: '+1 Evasão' },
      3: { tipo: 'bonus', valor: '+5 Agilidade' },
      5: { tipo: 'bonus', valor: '+1 Reação' }
    },
    'diplomacia': {
      1: { tipo: 'efeito', valor: 'Reduz hostilidade de NPCs com sucesso bem-sucedido' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Aja como mediador entre grupos em conflito' }
    },
    'douqi': {
      1: { tipo: 'efeito', valor: 'Um dado adicional de dano em habilidades com custo de energia' },
      3: { tipo: 'bonus-opcional', valor: '+5 Força', valorOpcional: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Ataques imbuídos ignoram 30% de armadura' }
    },
    'estrategia': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: '+1d6 adicional para aumentar eficiência do plano' },
      5: { tipo: 'efeito', valor: 'Aliados que seguem plano ganham vantagem 3x por combate' }
    },
    'ferraria': {
      1: { tipo: 'bonus', valor: '+5 Força' },
      3: { tipo: 'efeito', valor: 'Metal pode despertar sob martelo' },
      5: { tipo: 'bonus', valor: '+5 Sorte' }
    },
    'folego': {
      1: { tipo: 'bonus', valor: '+5 Vitalidade' },
      3: { tipo: 'efeito', valor: 'Reduz custo de arts que usam fadiga em 30%' },
      5: { tipo: 'efeito', valor: 'Recupere 50% da fadiga em descanso curto' }
    },
    'furtividade': {
      1: { tipo: 'efeito', valor: '-3 de obstáculo adicional em alvos tentando avistar' },
      3: { tipo: 'bonus', valor: '+5 Agilidade' },
      5: { tipo: 'bonus', valor: '+1 Precisão' }
    },
    'idioma': {
      1: { tipo: 'efeito', valor: 'Compreenda uma nova língua por nível' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Diminui -3 custo de testes sociais com povos estrangeiros' }
    },
    'intimidacao': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: '+1 em testes contra inimigos ou oponentes fracos' },
      5: { tipo: 'efeito', valor: 'Inimigos fracos hesitam/falham em atacar por 1 rodada' }
    },
    'intuicao': {
      1: { tipo: 'efeito', valor: 'Detecte situações de surpresa com antecipação' },
      3: { tipo: 'bonus', valor: '+5 Percepção' },
      5: { tipo: 'efeito', valor: 'Dados extras (+1d4) quando faltam informações' }
    },
    'labia': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: 'Inverta acusação ou coloque culpa em outro com sucesso' },
      5: { tipo: 'efeito', valor: 'Reduz dificuldade social em -3 contra figuras de autoridade' }
    },
    'lideranca': {
      1: { tipo: 'efeito', valor: 'Aliados recebem bônus de +1 em ações seguindo plano' },
      3: { tipo: 'efeito', valor: 'Redução em testes de Sanidade ou Vontade em -3' },
      5: { tipo: 'efeito', valor: 'Reorganize iniciativa do grupo 1x por combate' }
    },
    'maestria': {
      1: { tipo: 'bonus', valor: '+1 em testes ligados à área de maestria' },
      3: { tipo: 'efeito', valor: 'Reduz obstáculo da área em -3' },
      5: { tipo: 'bonus', valor: '+5 em atributo relacionado à área escolhida' }
    },
    'matrizes': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'bonus-percentual', valor: '+20% Prontidão' },
      5: { tipo: 'efeito', valor: 'Ative uma matriz previamente desenhada como ação bônus 1x' }
    },
    'olhocritico': {
      1: { tipo: 'bonus', valor: '+1 Precisão' },
      3: { tipo: 'bonus', valor: '+5 Percepção' },
      5: { tipo: 'efeito', valor: 'Reduza defesa do alvo com ataques críticos' }
    },
    'percepcao': {
      1: { tipo: 'efeito', valor: 'Detecte armadilhas, pistas ou emboscadas sem rolagem' },
      3: { tipo: 'bonus', valor: '+5 Percepção' },
      5: { tipo: 'bonus', valor: '+1 Reação' }
    },
    'prestidigitacao': {
      1: { tipo: 'bonus', valor: '+1 Precisão' },
      3: { tipo: 'bonus', valor: '+5 Agilidade' },
      5: { tipo: 'efeito', valor: 'Re-role um dado falho em ações fora de combate' }
    },
    'pressentimento': {
      1: { tipo: 'efeito', valor: 'Aumente reação em +3 após evasão falha no turno seguinte' },
      3: { tipo: 'bonus', valor: '+5 Sorte' },
      5: { tipo: 'efeito', valor: 'Re-role uma falha em percepção/reação 1x por combate' }
    },
    'religiao': {
      1: { tipo: 'efeito', valor: 'Identifique símbolos sagrados, maldições e eventos espirituais' },
      3: { tipo: 'efeito', valor: 'Reduza obstáculos relacionados em -2 pontos' },
      5: { tipo: 'bonus', valor: '+5 Inteligência' }
    },
    'sanidade': {
      1: { tipo: 'efeito', valor: 'Reduz dificuldade de testes de sanidade em -3' },
      3: { tipo: 'bonus', valor: '+5 Vitalidade' },
      5: { tipo: 'efeito', valor: 'Ganhe vantagem contra medo 2x por sessão' }
    },
    'seducao': {
      1: { tipo: 'efeito', valor: 'Interessados sofrem -3 em ações contra sua vontade' },
      3: { tipo: 'bonus', valor: '+5 Sorte' },
      5: { tipo: 'efeito', valor: 'Inverta hostilidade de um alvo para neutralidade' }
    },
    'selos': {
      1: { tipo: 'efeito', valor: 'Armazene magias em selos (1 por nível)' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'bonus', valor: '+1 Precisão' }
    },
    'sobrevivencia': {
      1: { tipo: 'efeito', valor: 'Reduz dificuldade em ações de seu conhecimento' },
      3: { tipo: 'bonus-opcional', valor: '+5 Percepção', valorOpcional: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Detecte trilhas com vantagem (+1d6)' }
    },
    'tolerancia': {
      1: { tipo: 'efeito', valor: 'Reduz dificuldade de obstáculos em -3' },
      3: { tipo: 'efeito', valor: 'Reduz duração de venenos/queimaduras/doenças em 1 turno' },
      5: { tipo: 'efeito', valor: 'Permaneça em pé apesar de golpe derrubador 1x por sessão' }
    },
    'unicskill': {
      1: { tipo: 'efeito', valor: 'Núcleo Habilidade Extra' },
      3: { tipo: 'bonus', valor: '+1 em testes de ativação e controle' },
      5: { tipo: 'bonus', valor: '+5 no atributo primário do poder' }
    },
    'vontade': {
      1: { tipo: 'bonus', valor: '+5 Vitalidade' },
      3: { tipo: 'efeito', valor: '+2 resistências contra efeitos mentais' },
      5: { tipo: 'efeito', valor: 'Negue um efeito mental 1x por dia com sucesso automático' }
    },
    'zanjutsu': {
      1: { tipo: 'bonus', valor: '+1 Precisão' },
      3: { tipo: 'bonus', valor: '+5 Força' },
      5: { tipo: 'efeito', valor: 'Permite realizar um aparo (parry) como Reação, reduzindo dano físico em 30%' }
    },
    'hoho': {
      1: { tipo: 'bonus', valor: '+5 Agilidade' },
      3: { tipo: 'bonus', valor: '+1 Evasão' },
      5: { tipo: 'efeito', valor: 'Shunpo: mover-se para qualquer ponto no campo de visão como ação bônus 1x por combate' }
    },
    'kido': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: 'Kidōs até nível 30 têm dificuldade reduzida em -3' },
      5: { tipo: 'efeito', valor: 'Eishohaki: conjura Kidō como ação bônus com 50% de potência' }
    },
    'hakuda': {
      1: { tipo: 'bonus', valor: '+5 Força' },
      3: { tipo: 'efeito', valor: 'Ataques desarmados ganham +1 Precisão e ignoram 10% de armadura' },
      5: { tipo: 'bonus', valor: '+1 Reação' }
    },
    'reiatsu': {
      1: { tipo: 'bonus', valor: '+5 Vitalidade' },
      3: { tipo: 'efeito', valor: 'Inimigos com Inteligência menor sofrem -1 Precisão quando próximos' },
      5: { tipo: 'efeito', valor: 'Liberação de Pressão: 1x por combate, inimigos testam Vontade ou ficam Abalados' }
    },
    'reiraku': {
      1: { tipo: 'bonus', valor: '+5 Percepção' },
      3: { tipo: 'efeito', valor: 'Detecta localização e força de seres espirituais em até 1km' },
      5: { tipo: 'bonus', valor: '+1 Reação contra inimigos ocultos ou invisíveis' }
    },
    'comunicacao_zanpakuto': {
      1: { tipo: 'bonus', valor: '+5 Sorte' },
      3: { tipo: 'efeito', valor: '-30% custo de ativação da Shikai' },
      5: { tipo: 'efeito', valor: 'Sincronia: re-role um ataque ou habilidade da Zanpakutō 1x por dia' }
    },
    'conhecimento_soul_society': {
      1: { tipo: 'bonus', valor: '+5 Inteligência' },
      3: { tipo: 'efeito', valor: '+1d6 em testes sobre as 13 Divisões' },
      5: { tipo: 'efeito', valor: 'Identifica fraquezas de Hollows comuns automaticamente' }
    },
    'resistencia_espiritual': {
      1: { tipo: 'bonus', valor: '+5 Vitalidade' },
      3: { tipo: 'bonus-percentual', valor: '+10% defesa' },
      5: { tipo: 'efeito', valor: 'Reduz dano espiritual recebido em 2 dados adicionais' }
    },
    'konso': {
      1: { tipo: 'efeito', valor: '+1 em testes sociais com almas ou espíritos errantes' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Purifica almas menores instantaneamente fora de combate sem gastar ação' }
    },
    'meditacao_jinzen': {
      1: { tipo: 'efeito', valor: 'Recuperação de Reiryoku em descanso curto é dobrada' },
      3: { tipo: 'bonus', valor: '+5 Inteligência' },
      5: { tipo: 'efeito', valor: 'Transe: recupera 100% da fadiga em 10 minutos' }
    }
   
  };

  /**
   * Estado de bônus opcionais
   * Estrutura: { "aptidaoId_nivel": "valor" | "valorOpcional" }
   * DESATIVADO - Persistência foi removida
   */
  let estadoBonusOpcionais = {};

  /**
   * REATIVADO: carregarEstadoBonusOpcionais()
   * Carrega estado de bônus opcionais do localStorage
   */
  function carregarEstadoBonusOpcionais() {
    try {
      const salvo = localStorage.getItem('estadoBonusOpcionais');
      if (salvo) {
        estadoBonusOpcionais = JSON.parse(salvo);
        console.log('✅ Estado de bônus opcionais carregado do localStorage:', estadoBonusOpcionais);
      } else {
        estadoBonusOpcionais = {};
        console.log('ℹ️ Nenhum estado anterior de bônus opcionais, começando vazio');
      }
    } catch (e) {
      console.error('❌ Erro ao carregar estado de bônus opcionais:', e);
      estadoBonusOpcionais = {};
    }
  }

  /**
   * REATIVADO: salvarEstadoBonusOpcionais()
   * Salva estado de bônus opcionais no localStorage
   */
  function salvarEstadoBonusOpcionais() {
    try {
      localStorage.setItem('estadoBonusOpcionais', JSON.stringify(estadoBonusOpcionais));
      console.log('💾 Estado de bônus opcionais salvo no localStorage:', estadoBonusOpcionais);
    } catch (e) {
      console.error('❌ Erro ao salvar estado de bônus opcionais:', e);
    }
  }

  /**
   * Limpa todos os bônus opcionais de uma aptidão removida
   * Evita resquícios quando uma aptidão é excluída
   */
  function limparBonusOpcionalDaAptidao(aptidaoId) {
    console.log(`🗑️ Limpando bônus opcionais da aptidão: ${aptidaoId}`);
    
    carregarEstadoBonusOpcionais();
    
    let foiRemovido = false;
    // Remover todas as chaves que começam com o aptidaoId_
    for (const chave in estadoBonusOpcionais) {
      if (chave.startsWith(`${aptidaoId}_`)) {
        delete estadoBonusOpcionais[chave];
        console.log(`  ✓ Removido: ${chave}`);
        foiRemovido = true;
      }
    }
    
    if (foiRemovido) {
      salvarEstadoBonusOpcionais();
      console.log(`✅ Bônus opcionais de "${aptidaoId}" foram limpos`);
    }
  }

  /**
   * Obtém a chave para bônus opcional
   */
  function getChaveBonusOpcional(aptidaoId, nivel) {
    return `${aptidaoId}_${nivel}`;
  }

  /**
   * Obtém qual bônus opcional está ativo
   */
  function getBonusOpcionalAtivo(aptidaoId, nivel) {
    // ✅ Garantir que estado foi carregado
    if (Object.keys(estadoBonusOpcionais).length === 0) {
      carregarEstadoBonusOpcionais();
    }
    
    const chave = getChaveBonusOpcional(aptidaoId, nivel);
    return estadoBonusOpcionais[chave] || 'valor'; // Default: valor principal
  }

  /**
   * Alterna entre bônus opcional principal e alternativo
   */
  function alternarBonusOpcional(aptidaoId, nivel) {
    // ✅ GARANTIR que estado está carregado ANTES de usar
    carregarEstadoBonusOpcionais();
    
    const chave = getChaveBonusOpcional(aptidaoId, nivel);
    const atual = estadoBonusOpcionais[chave] || 'valor';
    const novo = atual === 'valor' ? 'valorOpcional' : 'valor';
    estadoBonusOpcionais[chave] = novo;
    salvarEstadoBonusOpcionais();
    console.log(`🔁 Bônus opcional alternado: ${aptidaoId} nível ${nivel} -> ${novo}`);
    return novo;
  }

  /**
   * Mapeia atributos simples
   * Exemplo: "+5 Força" -> { atributo: "forca", valor: 5 }
   */
  function mapearAtributoSimples(texto) {
    const mapa = {
      'força': 'forca', 'for': 'forca',
      'vitalidade': 'vitalidade', 'vit': 'vitalidade',
      'agilidade': 'agilidade', 'agi': 'agilidade',
      'inteligência': 'inteligencia', 'int': 'inteligencia',
      'percepção': 'percepcao', 'per': 'percepcao',
      'sorte': 'sorte', 'sor': 'sorte',
      'prontidão': 'prontidao', 'pront': 'prontidao',
      'ataque': 'ataque', 'atk': 'ataque',
      'defesa': 'defesa', 'def': 'defesa',
      'reação': 'reacao', 'rea': 'reacao',
      'precisão': 'precisao', 'prec': 'precisao',
      'evasão': 'evasao', 'eva': 'evasao',
      'saúde': 'saude', 'hp': 'saude',
      'energia': 'energia',
      'fadiga': 'fadiga'
    };

    const regex = /([+-])(\d+)\s+([a-zçãêóú]+)/i;
    const match = texto.match(regex);

    if (!match) return null;

    const [, sinal, valor, atributoTexto] = match;
    const atributoNorm = atributoTexto.toLowerCase().trim();
    const atributo = mapa[atributoNorm];

    if (!atributo) {
      console.warn(`⚠️ Atributo não mapeado: ${atributoTexto}`);
      return null;
    }

    return {
      atributo,
      valor: parseInt(sinal + valor)
    };
  }

  /**
   * Mapeia bônus duplo
   * Exemplo: "+3 Força & Agilidade" -> [{ atributo: "forca", valor: 3 }, { atributo: "agilidade", valor: 3 }]
   */
  function mapearBonusDuplo(texto) {
    const partes = texto.split('&').map(p => p.trim());
    const bônus = [];

    partes.forEach(parte => {
      const mapeado = mapearAtributoSimples(parte);
      if (mapeado) {
        bônus.push(mapeado);
      }
    });

    return bônus.length === 2 ? bônus : null;
  }

  /**
   * Mapeia bônus percentual
   * Exemplo: "+20% Prontidão" -> { atributo: "prontidao", percentual: 20 }
   */
  function mapearBonusPercentual(texto) {
    console.log(`🔤 [mapearBonusPercentual] Processando: "${texto}"`);
    
    const mapa = {
      'força': 'forca', 'for': 'forca',
      'vitalidade': 'vitalidade', 'vit': 'vitalidade',
      'agilidade': 'agilidade', 'agi': 'agilidade',
      'inteligência': 'inteligencia', 'int': 'inteligencia',
      'percepção': 'percepcao', 'per': 'percepcao',
      'sorte': 'sorte', 'sor': 'sorte',
      'prontidão': 'prontidao', 'pront': 'prontidao',
      'ataque': 'ataque', 'atk': 'ataque',
      'defesa': 'defesa', 'def': 'defesa',
      'reação': 'reacao', 'rea': 'reacao',
      'precisão': 'precisao', 'prec': 'precisao',
      'evasão': 'evasao', 'eva': 'evasao'
    };

    const regex = /([+-])(\d+)%\s+([a-zçãêóú]+)/i;
    const match = texto.match(regex);

    if (!match) {
      console.warn(`⚠️ [mapearBonusPercentual] Regex não encontrou padrão em: "${texto}"`);
      return null;
    }

    const [, sinal, valor, atributoTexto] = match;
    console.log(`  📦 Sinal: "${sinal}", Valor: "${valor}", Atributo: "${atributoTexto}"`);
    
    const atributoNorm = atributoTexto.toLowerCase().trim();
    const atributo = mapa[atributoNorm];

    if (!atributo) {
      console.warn(`⚠️ Atributo percentual não mapeado: ${atributoTexto} (normalizado: ${atributoNorm})`);
      return null;
    }

    return {
      atributo,
      percentual: parseInt(sinal + valor)
    };
  }

  /**
   * Obtém o valor base de um atributo
   * Tenta múltiplas fontes para encontrar o valor correto
   * Se nenhuma fonte tiver o valor, usa valores padrão
   */
  function obterValorBaseAtributo(atributo) {
    console.log(`🔍 [obterValorBaseAtributo] Procurando valor base para "${atributo}"...`);
    
    // Prioridade 1: AtributosManager.personagemData
    if (window.atributosManager && window.atributosManager.personagemData) {
      const data = window.atributosManager.personagemData;
      const primarios = data.atributos || {};
      const secundarios = data.secundarios || {};
      
      console.log(`  📌 Primários disponíveis:`, Object.keys(primarios));
      console.log(`  📌 Secundários disponíveis:`, Object.keys(secundarios));
      console.log(`  📌 Valor em primarios[${atributo}]:`, primarios[atributo]);
      console.log(`  📌 Valor em secundarios[${atributo}]:`, secundarios[atributo]);
      
      // Verificar primários primeiro
      if (primarios[atributo] && primarios[atributo] > 0) {
        console.log(`  ✅ Valor de "${atributo}": ${primarios[atributo]} (primário)`);
        return primarios[atributo];
      }
      
      // Verificar secundários
      if (secundarios[atributo] && secundarios[atributo] > 0) {
        console.log(`  ✅ Valor de "${atributo}": ${secundarios[atributo]} (secundário)`);
        return secundarios[atributo];
      }
    }

    // Prioridade 2: StateManager
    if (window.appState) {
      const state = window.appState.getState();
      const primarios = state.atributos?.primarios || {};
      const secundarios = state.atributos?.secundarios || {};
      
      console.log(`  📌 StateManager primários:`, Object.keys(primarios));
      console.log(`  📌 StateManager secundários:`, Object.keys(secundarios));
      
      let valor = primarios[atributo]?.total || secundarios[atributo]?.total;
      if (valor && valor > 0) {
        console.log(`  ✅ Valor de "${atributo}": ${valor} (StateManager)`);
        return valor;
      }
    }

    // Fallback 3: Usar valores padrão conhecidos
    const valoresPadrao = {
      // Primários padrão (conforme ReDungeon)
      'forca': 10,
      'vitalidade': 10,
      'agilidade': 10,
      'inteligencia': 10,
      'percepcao': 10,
      'sorte': 10,
      // Secundários padrão (conforme ReDungeon)
      'prontidao': 8,
      'ataque': 10,
      'defesa': 20,
      'reacao': 16,
      'precisao': 12,
      'evasao': 14
    };

    const valorPadrao = valoresPadrao[atributo];
    if (valorPadrao !== undefined) {
      console.warn(`⚠️ [VantagensAptidoesSystem] Usando valor padrão para "${atributo}": ${valorPadrao}`);
      return valorPadrao;
    }

    // Fallback final
    console.warn(`⚠️ [VantagensAptidoesSystem] Valor base não encontrado para "${atributo}" - usando 0`);
    return 0;
  }

  /**
   * Aplica um bônus simples
   */
  function aplicarBonus(atributo, valor, bonusAptidoes) {
    if (!bonusAptidoes.hasOwnProperty(atributo)) {
      console.warn(`⚠️ Atributo não reconhecido: ${atributo}`);
      return;
    }
    bonusAptidoes[atributo] = (bonusAptidoes[atributo] || 0) + valor;
  }

  /**
   * Aplica bônus de uma vantagem
   */
  function aplicarBonusVantagem(vantagem, aptidaoId, nivel, bonusAptidoes) {
    if (!vantagem || !vantagem.tipo) return;

    const tipo = vantagem.tipo;
    const valor = vantagem.valor;

    console.log(`📌 Aplicando ${tipo}: ${valor} (${aptidaoId} nível ${nivel})`);

    switch (tipo) {
      case 'bonus': {
        const mapeado = mapearAtributoSimples(valor);
        if (mapeado) {
          aplicarBonus(mapeado.atributo, mapeado.valor, bonusAptidoes);
        }
        break;
      }

      case 'bonus-duplo': {
        const mapeados = mapearBonusDuplo(valor);
        if (mapeados) {
          mapeados.forEach(m => aplicarBonus(m.atributo, m.valor, bonusAptidoes));
        }
        break;
      }

      case 'bonus-percentual': {
        const mapeado = mapearBonusPercentual(valor);
        if (mapeado) {
          console.log(`  🔢 Mapeamento: ${valor} -> atributo="${mapeado.atributo}", percentual=${mapeado.percentual}%`);
          const base = obterValorBaseAtributo(mapeado.atributo);
          const bonusAbsoluto = Math.round(base * (mapeado.percentual / 100));
          console.log(`  🔢 Cálculo: ${base} * ${mapeado.percentual}% = ${base * (mapeado.percentual / 100)} ≈ ${bonusAbsoluto}`);
          aplicarBonus(mapeado.atributo, bonusAbsoluto, bonusAptidoes);
          console.log(`  ✅ Bônus aplicado: +${bonusAbsoluto} para ${mapeado.atributo}`);
        } else {
          console.error(`  ❌ Falha ao mapear bonus-percentual: ${valor}`);
        }
        break;
      }

      case 'bonus-opcional': {
        const ativo = getBonusOpcionalAtivo(aptidaoId, nivel);
        const bonusTexto = ativo === 'valor' ? valor : vantagem.valorOpcional;
        const mapeado = mapearAtributoSimples(bonusTexto);
        if (mapeado) {
          aplicarBonus(mapeado.atributo, mapeado.valor, bonusAptidoes);
          console.log(`  🔁 Ativo: ${ativo} -> ${bonusTexto}`);
        }
        break;
      }

      case 'efeito':
        // Apenas renderiza, não aplica bônus
        console.log(`  📝 Efeito narrativo: ${valor}`);
        break;
    }
  }

  /**
   * FUNÇÃO CENTRAL: Recalcula todos os bônus a partir das aptidões
   * Deve ser chamada sempre que:
   * - Uma aptidão sobe de nível
   * - Uma aptidão é removida
   * - Uma aptidão é resetada
   * - Bônus opcional é alternado
   * - Ficha é carregada
   * - Ficha é importada
   */
  function recalcularBonusAptidoesAPartirDasAptidoes() {
    console.log('🧮 [VantagensAptidoesSystem] Recalculando bônus a partir das aptidões...');

    // 1️⃣ Zerar bônus
    const bonusAptidoes = {
      forca: 0, vitalidade: 0, agilidade: 0, inteligencia: 0, percepcao: 0, sorte: 0,
      prontidao: 0, ataque: 0, defesa: 0, reacao: 0, precisao: 0, evasao: 0,
      saude: 0, energia: 0, fadiga: 0
    };

    // 2️⃣ Carregar estado de bônus opcionais
    carregarEstadoBonusOpcionais();

    // 3️⃣ Obter aptidões do personagem
    let aptidoes = [];
    if (window.aptidoesManager && window.aptidoesManager.aptidoesPersonagem) {
      aptidoes = window.aptidoesManager.aptidoesPersonagem;
    } else if (window.atributosManager && window.atributosManager.personagemData?.aptidoesPersonagem) {
      aptidoes = window.atributosManager.personagemData.aptidoesPersonagem;
    }

    if (!aptidoes || aptidoes.length === 0) {
      console.log('ℹ️ Nenhuma aptidão para processar');
      return bonusAptidoes;
    }

    console.log(`📌 Processando ${aptidoes.length} aptidões`);

    // 4️⃣ Percorrer cada aptidão até seu nível atual
    aptidoes.forEach(apt => {
      if (!apt || !apt.nivel || apt.nivel <= 0) return;

      const aptidaoId = apt.id;
      const nivelAtual = apt.nivel;

      console.log(`\n🎯 ${aptidaoId.toUpperCase()} - Nível ${nivelAtual}`);

      // Obter vantagens desta aptidão
      const vantagens = vantagensAptidoes[aptidaoId];
      if (!vantagens) {
        console.warn(`⚠️ Aptidão não tem vantagens definidas: ${aptidaoId}`);
        return;
      }

      // Aplicar todas as vantagens até o nível atual
      for (let nivel = 1; nivel <= nivelAtual; nivel++) {
        const vantagem = vantagens[nivel];
        if (!vantagem) {
          console.log(`  ⊘ Nível ${nivel}: sem vantagem definida`);
          continue;
        }

        aplicarBonusVantagem(vantagem, aptidaoId, nivel, bonusAptidoes);
      }
    });

    console.log('\n✅ Bônus recalculados:', bonusAptidoes);
    return bonusAptidoes;
  }

  /**
   * Retorna todas as vantagens desbloqueadas
   * Nota: Mostra APENAS os níveis 1, 3 e 5 (efeitos narrativos)
   * Para renderização na box "Vantagens Desbloqueadas"
   */
  function obterVantagensDesbloqueadas() {
    const vantagens = [];

    let aptidoes = [];
    if (window.aptidoesManager && window.aptidoesManager.aptidoesPersonagem) {
      aptidoes = window.aptidoesManager.aptidoesPersonagem;
    } else if (window.atributosManager && window.atributosManager.personagemData?.aptidoesPersonagem) {
      aptidoes = window.atributosManager.personagemData.aptidoesPersonagem;
    }

    aptidoes.forEach(apt => {
      if (!apt || !apt.nivel || apt.nivel <= 0) return;

      const aptidaoId = apt.id;
      const nivelAtual = apt.nivel;
      const aptidaoVantagens = vantagensAptidoes[aptidaoId];

      if (!aptidaoVantagens) return;

      // Apenas mostrar níveis 1, 3, 5 (efeitos narrativos)
      const niveisAMostrar = [1, 3, 5].filter(n => n <= nivelAtual);

      niveisAMostrar.forEach(nivel => {
        const vantagem = aptidaoVantagens[nivel];
        if (!vantagem) return;

        vantagens.push({
          aptidaoId,
          aptidaoNome: apt.nome,
          nivel,
          tipo: vantagem.tipo,
          valor: vantagem.valor,
          valorOpcional: vantagem.valorOpcional,
          narrativa: vantagem.narrativa || false
        });
      });
    });

    return vantagens;
  }

  /**
   * 💾 Exporta estado de bônus opcionais
   * Retorna um objeto com todas as seleções de bônus opcionais
   */
  function exportarEstadoBonusOpcionais() {
    carregarEstadoBonusOpcionais();
    return { ...estadoBonusOpcionais };
  }

  /**
   * 📥 Importa estado de bônus opcionais
   * Restaura as seleções de bônus opcionais
   */
  function importarEstadoBonusOpcionais(estado) {
    if (!estado || typeof estado !== 'object') {
      console.warn('⚠️ Estado inválido para importação de bônus opcionais');
      return;
    }
    
    estadoBonusOpcionais = { ...estado };
    salvarEstadoBonusOpcionais();
    console.log('✅ Estado de bônus opcionais importado:', estado);
  }

  // ============================================
  // API Pública
  // ============================================
  return {
    vantagensAptidoes,
    recalcularBonusAptidoesAPartirDasAptidoes,
    obterVantagensDesbloqueadas,
    alternarBonusOpcional,
    getBonusOpcionalAtivo,
    carregarEstadoBonusOpcionais,
    salvarEstadoBonusOpcionais,
    exportarEstadoBonusOpcionais, // ✨ NOVO
    importarEstadoBonusOpcionais, // ✨ NOVO
    limparBonusOpcionalDaAptidao,
    getChaveBonusOpcional,
    mapearAtributoSimples,
    mapearBonusDuplo,
    mapearBonusPercentual
  };
})();

// Garantir que está disponível globalmente
if (typeof window !== 'undefined') {
  window.vantagensAptidoesSystem = VantagensAptidoesSystem;
}
