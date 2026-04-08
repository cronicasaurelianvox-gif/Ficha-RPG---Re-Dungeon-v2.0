// Raças convertidas do JSON - Auto-gerado
const RACAS_CONVERTIDAS = [
{
  id: "gnomo",
  nome: "Gnomo",
  raridade: "raro",
  descricao: "Os Gnomos são uma raça pequena, mas perigosamente inteligente. Diferente da imagem cômica que muitos atribuem a eles, os Gnomos são engenheiros da improbabilidade. Onde outras raças veem limites físicos, eles veem desafios temporários.  Baixos, de me...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/JdgTpNU.png",
  atributos: {
    forca: "2d4+4",
    vitalidade: "3d6+6",
    agilidade: "4d6+10",
    inteligencia: "6d6+14",
    percepcao: "5d6+12",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Mente Iterativa",
      descricao: "Gnomos aprendem com erros em velocidade absurda. Falhas viram melhorias. Repetir o mesmo erro é quase impossível para eles. Bônus: Após falhar em um teste técnico ou intelectual, r...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Engenharia Improvisada",
      descricao: "Conseguem criar, adaptar ou consertar dispositivos usando recursos mínimos. O resultado nem sempre é bonito, mas quase sempre funciona. Bônus: Pode criar ou adaptar dispositivos si...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Curiosidade Perigosa",
      descricao: "Quando algo novo surge, um Gnomo sente impulso quase físico de mexer, testar ou desmontar. Ignorar isso exige esforço consciente. Bônus: Ao interagir com algo desconhecido, recebe ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Dispositivo Improvisado",
      tipo: "Duradoura",
      alcance: "3 m",
      alvos: "AOE",
      custo: "9 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "O Gnomos cria um artefato funcional usando sucata. Escolha: armadilha, explosivo ou ferramenta. O efeito dura até ser usado ou destruído....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Iteração Forçada",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "0",
      recarga: "5",
      duracao: "0",
      descricao: "Após falhar em uma Art ou ataque, o Gnomos pode re-rolar o teste, aceitando o novo resultado....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Sobrecarga Experimental",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "no alcance",
      custo: "13 EnR & 5 FaD",
      recarga: "4",
      duracao: "0",
      descricao: "Um dispositivo entra em modo crítico. Causa 4d12 de dano. Em caso de falha crítica, o usuário sofre metade do dano....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Engenharia do Caos",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Dispositivos criados pelo Gnomos nunca falham completamente. Em falhas, o efeito ocorre de forma reduzida....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Botão Vermelho Não Identificado",
      tipo: "Imediata",
      alcance: "5 m",
      alvos: "no alcance",
      custo: "17 EnR",
      recarga: "1 p/ Sessao",
      duracao: "0",
      descricao: "Ativa uma função desconhecida. O efeito é poderoso, mas o mestre define uma consequência colateral inevitável....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "homunculo",
  nome: "Homúnculo",
  raridade: "epica",
  descricao: "Os Homúnculos são seres artificiais criados por alquimistas, arcanistas e estudiosos que ousaram imitar o ato primordial da criação. Diferente de construtos comuns, eles não são simples ferramentas: cada Homúnculo nasce a partir de matéria viva, essê...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/wgCFjPr.png",
  atributos: {
    forca: "4d6+12",
    vitalidade: "5d6+14",
    agilidade: "4d6+12",
    inteligencia: "5d6+12",
    percepcao: "4d6+12",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Protocolo da Otimização",
      descricao: "O jogador escolhe um atributo ou perícia. Esse valor recebe +2 (Atributo +20) permanente. Além disso, entre campanhas ou descansos longos, o Homúnculo pode realocar um pequeno bônu...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Protocolo da Redundância Vital",
      descricao: "Uma vez por combate, quando o Homúnculo sofreria dano crítico, condição grave ou falha fatal, ele pode reduzir drasticamente o efeito, ativando sistemas de reserva alquímica. Após ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Protocolo da Consciência Emergente",
      descricao: "O Homúnculo recebe bônus em resistência mental, força de vontade e efeitos emocionais. Uma vez por cena, pode ignorar medo, controle ou confusão, agindo como se fosse puramente rac...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Corpo Sintético",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo do Homúnculo não segue biologia comum. - Recebe resistência leve a venenos, doenças e sangramento - Efeitos biológicos têm duração reduzida - ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Núcleo Alquímico",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "9 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "O Homúnculo ativa o núcleo que sustenta sua existência, alterando temporariamente sua composição interna. Escolha um efeito ao ativar: - +2 em Defesa ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Reconfiguração Forçada",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "15 EnR",
      recarga: "1 p/ Sessão",
      duracao: "0",
      descricao: "O Homúnculo força uma adaptação emergencial. - Remove uma condição negativa leve ou moderada - Converte essa instabilidade em vantagem: recebe +1 em u...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Auto-Reparo Emergencial",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "13 EnR",
      recarga: "6",
      duracao: "0",
      descricao: "Quando o Homúnculo sofre dano significativo ou entra em estado crítico, mecanismos alquímicos internos são ativados à força. - Recupera HP moderado im...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Auto-Reparo Emergencial",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "13 EnR",
      recarga: "6",
      duracao: "0",
      descricao: "O Homúnculo aprende com erros de forma antinatural. - Sempre que falhar em uma ação importante, recebe um bônus cumulativo pequeno ao repetir uma tent...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "espirito",
  nome: "Espirito",
  raridade: "lendario",
  descricao: "Os Espíritos são entidades formadas a partir de emoções positivas intensas e da convergência de elementos primordiais do mundo. Eles não possuem uma forma fixa: seu corpo se molda conforme o sentimento que os originou e o elemento ao qual estão ligad...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/6zAbgHP.png",
  atributos: {
    forca: "3d4+6",
    vitalidade: "4d6+10",
    agilidade: "5d8+12",
    inteligencia: "5d6+12",
    percepcao: "5d8+10",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Estado da Harmonia",
      descricao: "Enquanto estiver agindo de forma coerente com sua emoção-fonte, o Espírito recebe +2 em todas as rolagens relacionadas a suporte, proteção ou restauração. Uma vez por cena, pode an...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Estado da Fluidez",
      descricao: "O Espírito pode alterar parcialmente sua forma para se adaptar à situação (corpo etéreo, expansão elemental, contornos mutáveis). Recebe bônus em movimentação, evasão ou ações cria...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Estado da Inspiração",
      descricao: "Sempre que o Espírito inspirar esperança, coragem ou calma em aliados, concede a eles bônus temporários em suas próximas ações. Uma vez por cena, pode elevar uma falha aliada à suc...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Corpo Emocional",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo do Espírito não é fixo — ele reage ao estado emocional dominante. - Recebe +3 Resistência Mágica - Sofre - 50% de dano fisico direto - Efeitos...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma Fluida",
      tipo: "Imediata",
      alcance: "Jogador",
      alvos: "1",
      custo: "13 EnR",
      recarga: "2",
      duracao: "Imediato",
      descricao: "O Espírito desfaz parcialmente sua forma, tornando-se fluxo elemental. - Recebe +5 em Esquiva - Ignora agarrões e empurrões físicos - Pode atravessar ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Ressonância Positiva",
      tipo: "Imediata",
      alcance: "5 m ",
      alvos: "no alcance",
      custo: "15 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "A presença do Espírito amplifica emoções construtivas. - Aliados recebem +2 em testes defensivos - Remove ou reduz efeitos de medo leve, confusão emoc...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Existência em Fluxo",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "15 EnR",
      recarga: "1 p/ Combate",
      duracao: "0",
      descricao: "O Espírito se alinha totalmente ao fluxo emocional do ambiente. - Pode alterar sua aparência para refletir a emoção predominante da cena - Recebe +3 e...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Manifestação Elemental",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "No alcance",
      custo: "17 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O Espírito canaliza o elemento ao qual está ligado (luz, água, vento, calor suave, etc.). - Causa 12 de dano elemental leve OU - Aplica um efeito narr...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "dracolitos",
  nome: "Dracólitos",
  raridade: "mitica",
  descricao: "Os Dracólitos são Espíritos elevados ao mais alto grau de afinidade elemental. Desde o início dos tempos, eles surgem quando um Espírito alcança perfeita ressonância com seu elemento natural, tornando-se não apenas um usuário desse elemento, mas sua ...",
  limiteAtributo: 200,
  imagem: "https://i.imgur.com/543EZm2.png",
  atributos: {
    forca: "4d10+30",
    vitalidade: "4d10+30",
    agilidade: "4d10+30",
    inteligencia: "4d10+30",
    percepcao: "4d10+30",
    sorte: "3d20+40"
  },
  habilidadesBasicas: [
    {
      nome: "Estado da Harmonia Primordial",
      descricao: "Enquanto o elemento estiver estável no mundo, o Dracolito recebe bônus passivos constantes (defesa, regeneração ou controle ambiental, conforme o sistema). Pode, uma vez por cena, ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: " Estado da Transmissão",
      descricao: "O Dracolito pode investir fragmentos de sua autoridade em discípulos, aliados ou rituais, concedendo poderes temporários ou preparando um sucessor. ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Ruptura Elemental",
      descricao: "Se um Dracolito for destruído sem que a transmissão seja concluída, o elemento correspondente entra em estado de desordem: fenômenos extremos surgem, a magia se torna instável e to...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Encarnação Elemental",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O Dracólitos não manipula o elemento — ele existe como ele. - Define 1 Elemento Primordial (Fogo, Água, Vento, Terra, Luz, etc.) - Imunidade parcial a...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma Simbólica",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A forma do Dracólitos é fluida e responde ao estado do mundo. - Pode alterar aparência de forma simbólica e não ilusória - Recebe vantagens narrativas...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Ressonância Absoluta",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "no alcance",
      custo: "15 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "A presença do Dracólitos impõe o ritmo natural do elemento. - Criaturas alinhadas ao elemento recebem +2 em ações - Criaturas opostas sofrem –3 em açõ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Sucessão Ancestral",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "100% EnR",
      recarga: "1",
      duracao: "0",
      descricao: "O Dracólitos carrega a responsabilidade da continuidade. - Pode treinar ou preparar um sucessor - Compartilha fragmentos de memória, controle e consci...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Autoridade Elemental",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Enquanto existir, o Dracólitos sustenta o equilíbrio do elemento. - Dano recebido sofre –12   - Tentativas de selar, roubar ou corromper o elemento so...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Manifestação Primordial",
      tipo: "Imediata",
      alcance: "5 m",
      alvos: "1",
      custo: "17 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O Dracólitos manifesta uma ação direta do elemento. Exemplos: - Fogo: dano contínuo leve ou pressão térmica - Água: empurrão fluido, aprisionamento ou...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "morvak",
  nome: "Morvak",
  raridade: "mitica",
  descricao: "Os Morvak são entidades nascidas do medo do desconhecido, do terror primordial que surge quando a realidade falha em oferecer respostas. Eles não são criados, invocados ou corrompidos — eles emergem sempre que o mundo encara algo que não consegue com...",
  limiteAtributo: 200,
  imagem: "https://i.imgur.com/TEDrmlw.png",
  atributos: {
    forca: "4d6+18",
    vitalidade: "4d10+25",
    agilidade: "4d8+20",
    inteligencia: "4d6+18",
    percepcao: "5d8+25",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Núcleo do Presságio",
      descricao: "O Morvak recebe +3 em ações de intimidação, percepção e antecipação. Uma vez por cena, pode impor desvantagem ou penalidade leve a um inimigo ao fazê-lo hesitar ou duvidar de sua p...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Núcleo da Distorção",
      descricao: "O Morvak pode alterar sutilmente sua forma ou presença, confundindo percepção, alcance ou posição. Recebe bônus em esquiva, furtividade ou manipulação de ambiente. Uma vez por cena...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Núcleo da Erosão",
      descricao: "Sempre que um inimigo falhar em uma rolagem próxima ao Morvak, ele sofre efeitos cumulativos de desgaste (medo, instabilidade, perda de foco). Uma vez por cena, o Morvak pode enfra...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Existência Incongruente",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A simples presença do Morvak não se encaixa no mundo. +3 Resistência Mística O primeiro ataque recebido em cada combate sofre –15 de dano Criaturas qu...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma do Medo",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A aparência do Morvak reflete o medo que o originou. Escolha 1 tipo de medo primário (escuridão, abandono, desconhecido, perda de controle, etc.) Rece...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Presságio Silencioso",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "No alcance",
      custo: "13 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "Antes do erro, vem a sensação de que algo vai dar errado. - Inimigos sofrem –2 em Reação e -30% em prontidão - A primeira ação ofensiva de cada inimig...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Reflexo Errado",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "4",
      duracao: "0",
      descricao: "O ataque parece acertar… mas não do jeito esperado. Cancela um ataque que acabou de atingir o Morvak O agressor sofre –5 na próxima ação O efeito se m...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Vazio Conceitual",
      tipo: "Imediata",
      alcance: "5 m",
      alvos: "1",
      custo: "17 EnR",
      recarga: "3",
      duracao: "Imediato",
      descricao: "O Morvak nega temporariamente a certeza. O alvo não pode usar habilidades reativas ou automáticas Testes estratégicos do alvo sofrem –3 Conjurações co...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Onde a Realidade Hesita",
      tipo: "Duradoura",
      alcance: "9 m",
      alvos: "no alcance",
      custo: "21 EnR",
      recarga: "1 p/ Sessão",
      duracao: "3",
      descricao: "O Morvak força o mundo a questionar a si mesmo. Movimentos na área de acao rapidas são considerados comuns. Decisões rápidas exigem testes adicionais ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "anao",
  nome: "Anão",
  raridade: "raro",
  descricao: "Anões são seres robustos, persistentes e moldados pela mesma dureza das montanhas que chamam de lar. Baixos e fortes, com músculos compactos e uma resistência lendária, eles prosperam em fortalezas subterrâneas repletas de túneis, forjas e salões eco...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/d3wwJyv.png",
  atributos: {
    forca: "5d8+12",
    vitalidade: "5d8+12",
    agilidade: "5d8+12",
    inteligencia: "3d4+6",
    percepcao: "4d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Fundamento da Tenacidade",
      descricao: "Uma vez por sessão, o anão pode ignorar completamente os efeitos negativos de uma condição física (exaustão, sangramento, dor, empurrão, imobilização leve). ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Fundamento da Forja",
      descricao: "O jogador escolhe um tipo de equipamento (arma, armadura, ferramenta ou artefato). Esse item recebe um aprimoramento exclusivo criado pelo próprio anão. Durante a campanha, o anão ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Fundamento do Juramento",
      descricao: "O jogador declara um juramento (proteger, vingar, construir, preservar, destruir algo específico). Sempre que agir diretamente em favor desse juramento, recebe o benefício de firme...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Nanismo",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo anão é baixo, denso e estável. O personagem recebe: +2 em Testes contra empurrões, esquivas, quedas e efeitos de deslocamento forçado Redução ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Percepção Anã",
      tipo: "Duradoura",
      alcance: "15 m",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Anões veem o mundo como estrutura, não como paisagem. O personagem recebe +2 em Testes de Percepção ligados a ambientes subterrâneos, armadilhas, meca...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "52 Batidas Divinas",
      tipo: "Sustentada",
      alcance: "CaC",
      alvos: "1",
      custo: "11 FaD",
      recarga: "3",
      duracao: "0",
      descricao: "Cada golpe importa. Ao ativar esta Art, o anão entra em um ritmo preciso de golpes calculados.  Durante a duração: Para cada ataque consecutivo o anão...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forca do Pequeno Homen",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A força anã vem da densidade, não do tamanho. Sempre que o anão estiver: Defendendo uma posição. Usando escudos, armas pesadas ou ferramentas de impac...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "elfo",
  nome: "Elfo",
  raridade: "raro",
  descricao: "Elfos são seres de graça sobrenatural, longos anos e beleza quase etérea, vivendo em harmonia com a magia e com os ritmos antigos do mundo. Seus corpos são esguios, seus movimentos leves e calculados, e seus sentidos aguçados enxergam nuances que out...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/jyqUTTa.png",
  atributos: {
    forca: "3d6+10",
    vitalidade: "3d6+10",
    agilidade: "5d8+10",
    inteligencia: "5d8+10",
    percepcao: "5d8+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Legado da Eternidade",
      descricao: "O jogador pode escolher um efeito passivo permanente ligado a um atributo mental (Intelecto, Vontade ou Percepção). Uma vez por cena, pode ignorar penalidades relacionadas a fadiga...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Legado da Sintonia",
      descricao: "O jogador escolhe um elemento, escola mágica ou força natural (ex: Água, Vento ou Mana). Sempre que utilizar habilidades ligadas a essa afinidade, recebe +2 nas rolagens e reduz o ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Legado da Precisão",
      descricao: "Uma vez por turno, o elfo pode re-rolar um dado em ações que envolvam ataque, furtividade ou ações técnicas. Deve manter o novo resultado. Além disso, recebe bônus narrativo ao agi...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Percepção Aguçada",
      tipo: "Duradoura",
      alcance: "19 m",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Os sentidos élficos são treinados desde a infância para perceber o que outros ignoram. O elfo recebe +2 em Testes de Percepção, rastreio e detecção (i...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Acrobacia Sobrenatural",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "7 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O corpo élfico se move com leveza quase irreal. Ao sofrer um ataque corpo a corpo ou à distância, o elfo pode ativar esta Art para receber +2 em Evasã...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Treinamento com Arco",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O arco é uma extensão natural do corpo élfico. O personagem recebe: +1 em Precisão ao usar arcos ou armas de longo alcance similares. Ignora penalidad...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Longevidade",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A vida longa do elfo permite aperfeiçoamento contínuo. Sempre que o personagem subir (Adaptação 1d4+1) o Domínio de uma Art, ele recebe um bônus narra...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "animalus",
  nome: "Animalus",
  raridade: "raro",
  descricao: "Os Animalus são seres de aparência nitidamente animalesca, carregando traços físicos completos de suas linhagens — presas, escamas, asas, carapaças, caudas ou guelras. Possuem uma longevidade superior à dos humanos e um intelecto comparável ao dos el...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/SgXW9h0.png",
  atributos: {
    forca: "5d6+8",
    vitalidade: "5d6+12",
    agilidade: "5d8+8",
    inteligencia: "5d6+10",
    percepcao: "5d8+8",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Caminho da Predação",
      descricao: "O Animalus recebe +2 em rolagens de ataque corpo a corpo e vantagem em ações de emboscada, perseguição ou combate iniciado por ele. Na primeira rodada de combate, causa dano adicio...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Caminho da Carapaça",
      descricao: "O Animalus recebe redução passiva de dano físico ou bônus constante em Defesa. Uma vez por cena, pode ignorar completamente um efeito físico negativo (empurrão, atordoamento leve, ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Consciência Selvagem",
      tipo: "Duradoura",
      alcance: "12 m",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O Animalus percebe o mundo como um ecossistema vivo. Recebe +2 em Testes de Percepção ligados a ambiente, clima, presença de criaturas e mudanças natu...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Movimento Natural",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "7 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O corpo do Animalus se move como nasceu para se mover. Ao se deslocar: - Ignora penalidades leves de terreno (lama, raízes, neve, pedras) -  Pode se m...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma Adaptativa",
      tipo: "Sustentada",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "11 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "O Animalus ajusta seu corpo ao perigo imediato. Ao ativar, escolhe um benefício, de acordo com sua fisiologia: - Pele endurecida: +2 dado adicional de...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Linguagem da Natureza",
      tipo: "Imediata",
      alcance: "11  m",
      alvos: "no alcance",
      custo: "9 EnR",
      recarga: "0",
      duracao: "0",
      descricao: "O Animalus emite sons, gestos ou feromônios que criaturas naturais reconhecem instintivamente. Pode: - Acalmar animais hostis ou - Alertar aliados ani...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "lukan",
  nome: "Lukan",
  raridade: "epica",
  descricao: "Os Lukans são uma raça criados pelos Dracólitos, moldados para servir como guardiões de Sultran, o Inferno, e das fronteiras onde a realidade ameaça ruir. À primeira vista, possuem uma aparência majoritariamente humanoide, marcada por traços infernai...",
  limiteAtributo: 130,
  imagem: "https://i.imgur.com/MOVG1Xv.png",
  atributos: {
    forca: "5d8+12",
    vitalidade: "5d8+12",
    agilidade: "4d6+10",
    inteligencia: "4d6+12",
    percepcao: "4d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Código da Supremacia",
      descricao: "O Lukan recebe +2 em rolagens de ataque e intimidação. Na primeira rodada de combate, pode impor pressão absoluta a capacidade de reação dos inimigos próximos 3 turnos. ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Código da Resistência",
      descricao: "O Lukan recebe redução passiva de dano e bônus contra efeitos de empurrão, medo ou quebra de postura. Uma vez por cena, pode permanecer em pé mesmo ao sofrer um golpe que normalmen...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Código do Despertar Draconico",
      descricao: "O jogador define um traço draconico latente (fogo, energia, força ancestral, presença aterradora).  Uma vez por cena, o Lukan pode despertar esse traço, recebendo bônus significati...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Linhagem Dracônica Latente",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "Duradoura",
      descricao: "O sangue dos Dracólitos corre adormecido no corpo do Lukan. - +5 em FOR e VIT - +1 Resistência Física  Testes contra medo, intimidação ou pressão sobr...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma Dracônica Reprimida",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "Duradoura",
      descricao: " Por tradição e controle cultural, a verdadeira forma do Lukan permanece selada. - Enquanto não transformado, o Lukan recebe –30% no custo de todas as...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Despertar Dracônico",
      tipo: "Sustentada",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "15 EnR",
      recarga: "1 p/ Sessão",
      duracao: "0",
      descricao: "Utilizando toda sua mana como combustível, o Lukan libera sua forma verdadeira, há muito reprimida. Durante a transformação: -  +7 AtK, +3 PreC e +2 E...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Corpo Forjado para a Guerra",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Criados para vigiar Sultran, os Lukans não quebram fácil. - Dano físico recebido sofre 2dn adicional. - Ignora penalidades por dor leve ou ferimentos ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "celestine",
  nome: "Celestine",
  raridade: "mitica",
  descricao: "Os Celestines são seres alados que não nascem — são consagrados. Cada um deles foi, em vida mortal, responsável por um feito significativo que alterou o curso do mundo de Re’Dungeon. Após a morte, essas almas são elevadas pelos ecos dos deuses antigo...",
  limiteAtributo: 250,
  imagem: "https://i.imgur.com/F99CkI4.png",
  atributos: {
    forca: "3d20+35",
    vitalidade: "3d20+35",
    agilidade: "3d20+35",
    inteligencia: "3d20+35",
    percepcao: "3d20+35",
    sorte: "3d20+40"
  },
  habilidadesBasicas: [
    {
      nome: "Manifestação do Dogma",
      descricao: "Enquanto agir estritamente de acordo com seu Propósito, o Celestine recebe +3 em todas as rolagens diretamente relacionadas a ele. Uma vez por cena, pode impor seu Propósito sobre ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Manifestação da Autoridade",
      descricao: "O Celestine emana uma aura conceitual ligada ao seu Propósito, concedendo bônus a aliados alinhados e penalidades a inimigos que o desafiem. Quanto mais profundo o Propósito, maior...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Manifestação da Ascensão",
      descricao: "Uma vez por cena, o Celestine pode despertar sua habilidade latente, elevando    temporariamente seu Propósito a um nível quase divino. Após o uso, o Celestine sofre consequências ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Consagração Pós-Morte",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "Duradoura",
      descricao: "A alma do Celestine foi elevada além da condição mortal. - +5 em um atributo ligado ao Propósito (FOR, INT, AGI, etc.) - +1 Resistência Mística  Não s...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma do Propósito",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A aparência do Celestine é reflexo direto da lei que ele representa. - Pode alterar sua forma de maneira coerente com o Propósito - Recebe vantagens n...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Autoridade do Propósito",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "no alcance",
      custo: "15 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "A simples presença do Celestine impõe a lei que ele encarna. - Inimigos sofrem –3 em ações que contrariem o Propósito - Ações alinhadas ao Propósito r...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Manifestação da Lei Viva",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "1",
      custo: "13 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O Celestine manifesta sua lei como efeito direto. Exemplos (escolher 1 ao criar):  - Justiça: dano verdadeiro leve ou imobilização curta - Vida: cura ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Existência Consagrada",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo do Celestine não é apenas físico — é um símbolo. - Dano recebido sofre –15 - Efeitos que tentam apagar, selar ou corromper sua existência sofr...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Eco dos Deuses Antigos",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "21 EnR",
      recarga: "1 p/ Sessão",
      duracao: "0",
      descricao: "Os ecos dos deuses desaparecidos respondem ao chamado do Celestine. - Recebe +3 em todas as ações ligadas ao Propósito por 1 Batalha. - Pode alterar l...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "fada",
  nome: "Fada",
  raridade: "epica",
  descricao: "As Fadas são seres nascidos da interseção entre o mundo físico e os planos sutis da realidade. Seu corpo não é inteiramente material, nem puramente espiritual, o que as torna profundamente ligadas a forças invisíveis como emoções, desejos, memórias e...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/Lc4g8Wa.png",
  atributos: {
    forca: "3d4+6",
    vitalidade: "3d4+6",
    agilidade: "5d8+12",
    inteligencia: "5d6+12",
    percepcao: "5d8+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Véu do Encanto",
      descricao: "A Fada recebe +2 em ações sociais, manipulação, persuasão ou engano. Uma vez por cena, pode impor hesitação a um alvo consciente, reduzindo sua próxima ação ou atrasando sua reação...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Véu da Transição",
      descricao: "A Fada pode ignorar obstáculos leves, atravessar espaços estreitos ou alterar brevemente sua posição como    se estivesse parcialmente fora do plano físico. Uma vez por cena, pode ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Véu do Pacto",
      descricao: "O jogador define um tipo de acordo ou promessa (proteção, segredo, troca, favor). Sempre que um pacto válido estiver ativo, a Fada recebe +3 nas rolagens relacionadas àquele acordo...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Corpo Liminal",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo da Fada existe parcialmente fora do plano físico. - Ataques puramente físicos causam dano reduzido (+50% Defesa) - A Fada pode atravessar espa...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Encanto Sutil",
      tipo: "Imediata",
      alcance: "9 m",
      alvos: "1",
      custo: "9 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "A Fada projeta emoções, desejos ou lembranças suavemente na mente do alvo.Escolha um efeito: - Desatenção: penalidade leve em ações ofensivas (-7 Obst...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Promessa Vinculante",
      tipo: "Imediata",
      alcance: "5 m",
      alvos: "1",
      custo: "15 EnR",
      recarga: "1 p/ Sessão",
      duracao: "0",
      descricao: "A Fada sela uma promessa verbal simples com outra criatura. - Enquanto a promessa for mantida, ambos recebem um bônus leve narrativo - Se o alvo quebr...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Eco das Emoções",
      tipo: "Imediata",
      alcance: "11 m",
      alvos: "no alcance",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A Fada percebe emoções residuais no ambiente. - Pode identificar emoções fortes recentes (medo, ódio, amor, desespero) - Recebe +3 em ações sociais ou...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Agilidade da Fada",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo leve e a ligação parcial com planos sutis permitem que a Fada se mova com graça antinatural. - Recebe +3 em Esquiva e 20% Prontidão - Moviment...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "demonoid",
  nome: "Demonoid",
  raridade: "lendario",
  descricao: "Os Demonoids são uma raça nativa de Sultran, nascidos da convergência entre energia caótica, desejo, dor e sobrevivência extrema. Diferente de outras raças infernais, os Demonoids evoluem ao abandonar a monstruosidade. Quanto mais humanoide se torna,...",
  limiteAtributo: 130,
  imagem: "https://i.imgur.com/CqWi4r9.png",
  atributos: {
    forca: "5d8+14",
    vitalidade: "5d8+12",
    agilidade: "4d8+12",
    inteligencia: "4d6+8",
    percepcao: "4d6+10",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Vetor da Assimilação",
      descricao: "Sempre que derrotar inimigos relevantes, o Demonoid pode absorver fragmentos de poder, recebendo bônus temporários ou evoluções graduais a critério do sistema....",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Vetor da Forma",
      descricao: "O Demonoid pode alterar parcialmente sua forma para combate, defesa ou mobilidade. Quanto mais humanoide for sua forma base, maior o controle e menor o custo dessas alterações....",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Vetor da Consciência",
      descricao: "O Demonoid recebe bônus em ações táticas, intimidação e uso consciente de poder. Uma vez por cena, pode antecipar uma ação inimiga, reduzindo seu impacto ou anulando vantagens. ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Forma Bestial Inicial",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O Demonoid nasce como uma criatura instintiva e grotesca. - +10 FOR - Ataques corpo a corpo causam +9 de dano - Sofre –3 em testes sociais e estratégi...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Humanização Progressiva",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Quanto mais o Demonoid se aproxima de uma forma humanoide, mais perigoso ele se torna. -  Sempre que absorve energia, experiência narrativa ou derrota...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Metabolismo do Caos",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo do Demonoid recicla dor e energia infernal. - Sempre que sofre dano, recupera 1d12+4 de Energia - Efeitos caóticos, infernais ou instáveis cau...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Aparência do Perigo",
      tipo: "Duradoura",
      alcance: "Pessoal",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "No Inferno, a aparência é um aviso. - Quanto mais humanoide o Demonoid se apresenta, maior o respeito (ou medo) gerado - Recebe vantagens narrativas e...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Olhar do Demônio Civilizado",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "1",
      custo: "13 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "Um Demonoid consciente não ameaça — ele calcula. O alvo sofre –3 em ações defensivas O Demonoid recebe +3 em ações contra esse alvo Criaturas infernai...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "worgen",
  nome: "Worgen",
  raridade: "epica",
  descricao: "Os Worgen surgiram na Era das Trevas, um período esquecido em que deuses ainda caminhavam entre mortais e a magia era moldada sem medo das consequências. Temendo entidades antigas que escapavam à compreensão divina, magos humanos realizaram um ritual...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/MuJSdtP.png",
  atributos: {
    forca: "4d6+14",
    vitalidade: "5d6+12",
    agilidade: "4d6+14",
    inteligencia: "5d6+10",
    percepcao: "5d8+12",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Pacto da Fome Ancestral",
      descricao: "Sempre que o Worgen causar dano direto em combate, ele pode recuperar vitalidade ou reduzir o custo de uma habilidade baseada em sangue. Se o combate se prolongar, ele recebe bônus...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Pacto da Mente Predatória",
      descricao: "O Worgen recebe +2 em percepção, estratégia ou leitura de inimigos.  Uma vez por cena, pode antecipar uma ação inimiga, ganhando vantagem defensiva ou ofensiva imediata...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Pacto do Legado Profano",
      descricao: "O Worgen carrega fragmentos ativos do ritual ancestral em seu sangue. Uma vez por cena, ele pode invocar um eco do Espírito Antigo, fortalecendo uma ação ofensiva ou defensiva com ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Fome Carmesim",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "7 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "Ao causar dano corpo a corpo, o Worgen pode ativar esta Art para absorver vitalidade do alvo, recuperando HP equivalente a uma fração do dano causado ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Instinto Predatório",
      tipo: "Sustentada",
      alcance: "9 m",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O Worgen percebe fraqueza como um cheiro no ar. Sempre que houver uma criatura ferida ou debilitada a até 9 metros, o personagem recebe: - +1 em Perce...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Metamorfose Bestial",
      tipo: "Sustentada",
      alcance: "CaC",
      alvos: "Jogador",
      custo: "11 EnR",
      recarga: "7",
      duracao: "0",
      descricao: "O Worgen libera parcialmente sua forma amaldiçoada. Enquanto ativa: - Ataques desarmados passam a causar dano equivalente a arma média (3d8) - Recebe ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Regeneração Profana",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "Jogador",
      custo: "11 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "Ferimentos se fecham de forma antinatural. No início do turno seguinte à ativação, o Worgen: - Recupera uma quantidade moderada de HP (6d6+12) - Ignor...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Fome Worgen",
      tipo: "Sustentada",
      alcance: "CaC",
      alvos: "Jogador",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O personagem possui um atributo especial chamado Fome, variando de 0 a 100, iniciando em 50. - Ficar longos períodos sem se alimentar ou ativar Art’s ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "drakhen",
  nome: "Drakhen",
  raridade: "lendario",
  descricao: "Os Drakhen são uma raça ancestral cuja existência se desenvolve em dois estágios naturais, não por linhagem, mas por acúmulo de era, poder e significado. Todo dragão nasce inferior. Pouquíssimos sobrevivem tempo suficiente para deixar de ser.  Não é ...",
  limiteAtributo: 200,
  imagem: "https://i.imgur.com/tfFHpEZ.png",
  atributos: {
    forca: "6d8+15",
    vitalidade: "6d8+15",
    agilidade: "3d6+8",
    inteligencia: "5d6+12",
    percepcao: "5d6+10",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Presença Dracônica",
      descricao: "A simples existência de um Drakhen altera o ambiente: animais fogem, o clima reage, e criaturas menores sentem instintivamente sua autoridade. Bônus: Inimigos de nível inferior sof...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Memória Ancestral",
      descricao: "Drakhen carregam fragmentos de lembranças raciais antigas. Mesmo jovens, sabem coisas que nunca viveram — mapas, nomes, erros passados. Bônus: 1 vez por cena, pode receber +3 em um...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Ascensão Potencial",
      descricao: "Todo Drakhen carrega a possibilidade de transcender. A raça inteira vive sob a sombra do que pode se tornar, e isso molda decisões, alianças e conflitos. Bônus: Ao atingir metade d...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Rugido da Linhagem",
      tipo: "Imediata",
      alcance: "8 m",
      alvos: "no alcance",
      custo: "9 FaD",
      recarga: "3",
      duracao: "1",
      descricao: "Inimigos sofrem –3 Precisão e  debuff condicional de Moral....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Escamas Reativas",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "7 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "A cada 5 pontos na defesa base Drakhen adiciona 1 dado adicional em sua defesa durante uso da art escamas reativas....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Sangue Ancestral",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Abaixo de 50% PV: +3 Precisão. Abaixo de 25% PV: +3 Evasão adicional....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Memória Elemental",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "no alcance",
      custo: "13 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "Libera fogo, gelo ou raio. Causa 6d12 de dano elemental, ignorando resistência comum....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Limiar da Ascensão",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "16 EnR & 7 FaD",
      recarga: "1 p/ Sessão",
      duracao: "3",
      descricao: "O Drakhen manifesta sua herança superior. Recebe +1 Precisão, +1 Evasão e ataques causam +3 dados de dano elemental adicional....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "opharos",
  nome: "Opharos",
  raridade: "mitica",
  descricao: "Os Ópharos são uma raça pré-doutrinária. Eles não foram criados para servir, proteger ou louvar. Eles existem para observar. Surgiram quando o mundo ainda não tinha linguagem suficiente para explicar o sagrado — então o sagrado precisou aprender a se...",
  limiteAtributo: 200,
  imagem: "https://i.imgur.com/4egj34P.png",
  atributos: {
    forca: "3d6+8",
    vitalidade: "4d6+10",
    agilidade: "5d8+12",
    inteligencia: "6d6+15",
    percepcao: "6d6+15",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Olhar Revelador",
      descricao: "Ópharos percebem ilusões, mentiras grosseiras e distorções da realidade com facilidade anormal. Quanto maior a concentração visual, mais profunda é a leitura — às vezes profunda de...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Asas Sensoriais",
      descricao: "As asas não servem apenas para voo. Elas funcionam como órgãos de percepção ampliada, detectando magia, intenções hostis ou alterações no destino próximo. Bônus: +2 Reação contra a...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Consciência Gradual",
      descricao: "Ópharos não “evoluem” por nível, mas por compreensão. Quanto mais entendem o mundo, mais estranhos se tornam — ganhando poder, mas perdendo empatia mortal. Bônus: Ao subir o Domíni...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Olhar Revelador",
      tipo: "Sustentada",
      alcance: "10 m",
      alvos: "1",
      custo: "9 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O Ópharos foca sua visão além do véu da realidade. Enquanto sustentada, ilusões, camuflagens e mentiras mágicas são reveladas. O alvo perde bônus de o...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Presságio Imediato",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "7 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "Ao prever o próximo instante, o Ópharos antecipa um ataque. Ganha +3 Evasão contra uma ação inimiga e ignora efeitos de surpresa....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Asas da Leitura Etérea",
      tipo: "Sustentada",
      alcance: "8 m",
      alvos: "1 a 3",
      custo: "11 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "As asas sensoriais detectam fluxos mágicos e intenção hostil. Aliados recebem +1 Precisão e +1 Percepção enquanto a Art estiver ativa....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Consciência Deslocada",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A mente do Ópharos não se ancora totalmente no presente. Uma vez por cena, ao falhar em um teste de Percepção, Vontade ou Resistência mental, pode tra...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Visão que Fragmenta",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "1",
      custo: "13 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "O inimigo encara uma verdade impossível de processar (Teste de Obstáculo -13 de Sanidade Vontade Obstáculo se torna 15). Caso o jogador passe ele sofr...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Excesso de Consciência",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Sempre que o Ópharos revelar uma ilusão, mentira ou efeito oculto através de uma Art ou teste, recebe +2 Precisão ou +2 Evasão (à escolha) até o iníci...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "mur’kal",
  nome: "Mur’kal",
  raridade: "epica",
  descricao: "Os Mur’kal são uma raça anfíbia tribal, surgida em costas, pântanos e ruínas submersas. Baixos, de pele escamosa e olhos salientes, emitem sons guturais que soam como grasnados — mas isso é só a camada externa da linguagem.  Eles não são burros. São ...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/mtfVBks.png",
  atributos: {
    forca: "3d6+6",
    vitalidade: "4d6+8",
    agilidade: "6d6+14",
    inteligencia: "3d6+6",
    percepcao: "5d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Instinto de Cardume",
      descricao: "Mur’kal lutam melhor em grupo. Quanto mais aliados próximos, mais coordenadas e agressivas se tornam suas ações. Bônus: Para cada aliado adjacente (máx. 2), recebe +1 Precisão ou +...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Anfíbios Natos",
      descricao: "Movem-se com extrema facilidade em ambientes aquáticos ou alagados, enxergando e lutando quase tão bem quanto em terra. Bônus: Ignora penalidades de combate e movimento em água Rec...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Linguagem da Maré",
      descricao: "Sua comunicação mistura som, ritmo e gesto. Mur’kal conseguem transmitir intenções complexas rapidamente entre si, mas são difíceis de ler por outras raças. Bônus: Comunicação táti...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Ataque Coordenado",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "13 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "Se houver um aliado adjacente, o ataque causa +4d8 de dano adicional....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Maré de Guerra",
      tipo: "Sustentada",
      alcance: "8 m",
      alvos: "1 a 4",
      custo: "13 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "Enquanto ativa, aliados recebem +1 Precisão e ignoram parcialmente penalidades de terreno aquático....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Grito Abissal",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "no alcance",
      custo: "9 EnR",
      recarga: "3",
      duracao: "2",
      descricao: "Inimigos sofrem Medo e –2 Precisão....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Instinto de Cardume",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Para cada aliado adjacente, o Mur’kal recebe +1 Precisão (máx. +3)....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Caçador das Profundezas",
      tipo: "Imediata",
      alcance: "movimentação",
      alvos: "13 EnR",
      custo: "0",
      recarga: "4",
      duracao: "0",
      descricao: "Move-se por água ou terreno difícil e ataca. Ignora Evasão baseada em distância e causa 6d8 de dano....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "umbros",
  nome: "Umbros",
  raridade: "epica",
  descricao: "Os Umbros não são criaturas no sentido tradicional. Eles são sobras de perguntas que nunca tiveram resposta, resíduos ontológicos deixados quando a realidade falha em justificar um evento, uma existência ou uma causalidade. Invisíveis à maioria dos s...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/B6lTMcX.png",
  atributos: {
    forca: "3d8+12",
    vitalidade: "5d8+12",
    agilidade: "4d6+18",
    inteligencia: "3d8+12",
    percepcao: "5d8+12",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Existência Incompleta",
      descricao: "Umbros não ocupam totalmente o espaço físico nem o conceitual. Eles estão e não estão. Umbros recebem bônus (+3) em ações de furtividade, ocultação ou evasão conceitual Bônus: +2 E...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Campo de Ruído Cognitivo",
      descricao: "A presença de um Umbro interfere nos sistemas naturais de previsão e instinto. Criaturas próximas sofrem leve penalidade em ações de reação, antecipação ou tomada de decisão rápida...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Limiar da Emergência",
      descricao: "Umbros vivem à beira de se tornarem algo mais — ou desaparecerem. O Umbro pode acumular Marcas de Coerência ao longo da cena (falhas inimigas próximas, eventos estranhos, rupturas ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Falha de Existência",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Si mesmo",
      custo: "9 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "O Umbro desfoca sua própria presença por um instante, como se a realidade não conseguisse confirmar sua posição exata.  Ao ativar:  Recebe +4 Evasão c...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Ruído de Causalidade",
      tipo: "Duradoura",
      alcance: "6 m",
      alvos: "3 m AOE",
      custo: "15 EnR",
      recarga: "4",
      duracao: "2",
      descricao: "O Umbro intensifica o ruído ontológico ao redor, fazendo com que ações deixem de seguir expectativas normais.  Enquanto a área estiver ativa:  Inimigo...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Deslocamento Inconfirmável",
      tipo: "Imediata",
      alcance: "8 m",
      alvos: "Si mesmo",
      custo: "13 EnR / 2 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "O Umbro se move entre dois pontos sem que o espaço registre corretamente o trajeto.  Ao usar:  Teleporta-se até 8 metros para um local visível  Recebe...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Pré-Emergência Morvak",
      tipo: "Sustentada",
      alcance: "Pessoal",
      alvos: "Si mesmo",
      custo: "17 EnR / 5 FaD",
      recarga: "5",
      duracao: "0",
      descricao: "O Umbro força sua coerência além do limite seguro, assumindo traços incompletos de um Morvak.  Enquanto ativa:  Recebe +2 Precisão, +2 Evasão e +2 Int...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "batrakos",
  nome: "Batrakos",
  raridade: "raro",
  descricao: "Os Batrakos não vieram das margens. Vieram do intervalo entre a superfície e o abismo, onde a luz morre devagar e o som aprende a se comportar.  Eles são humanoides anfíbios altos e esguios, com pele lisa em tons azul-escuros, cinza-perolados ou verd...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/653YYqB.png",
  atributos: {
    forca: "5d6+10",
    vitalidade: "6d6+14",
    agilidade: "5d6+10",
    inteligencia: "3d6+6",
    percepcao: "4d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Corpo de Dupla Pressão",
      descricao: "Batrakos funcionam perfeitamente tanto em terra quanto em ambientes aquáticos profundos. Seu corpo se adapta automaticamente à pressão, temperatura e densidade do meio. Efeito:  Po...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Salto Predatório",
      descricao: "Eles sentem vibrações na água e no ar úmido, detectando movimento, presença e intenção hostil mesmo sem visão direta. Efeito: Pode realizar saltos longos ou verticais muito acima d...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Mente Abissal",
      descricao: "A mente Thalyssen é resistente a medo, pânico e efeitos de confusão. Quanto mais silencioso o ambiente, mais focados e perigosos eles se tornam. Efeito:  Criaturas que acertarem at...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "🐸 Impulso do Brejo",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "7 FaD",
      recarga: "1",
      duracao: "0",
      descricao: "Descrição: O Batrakos concentra força nas pernas e executa um salto explosivo, cobrindo grande distância ou alcançando posições elevadas. Pode atraves...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "☠️ Secreção Paralisante",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "13 EnR",
      recarga: "4",
      duracao: "2",
      descricao: "O usuário intensifica as toxinas naturais da pele. O próximo ataque corpo a corpo aplica um veneno que reduz mobilidade, reflexos ou força do alvo por...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "🌫️ Névoa do Mangue",
      tipo: "Imediata",
      alcance: "5 m",
      alvos: "5 m AOE",
      custo: "17 EnR",
      recarga: "5",
      duracao: "3",
      descricao: "O Batrakos libera uma névoa úmida e densa, dificultando visão, mira e percepção dentro da área. Criaturas acostumadas a ambientes secos sofrem penalid...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Instinto Ancestral do Pântano",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Enquanto estiver em ambientes naturais alagados, o Batrakos recebe bônus em furtividade, percepção e sobrevivência. Além disso, não pode ser surpreend...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "khrull",
  nome: "Khrull ",
  raridade: "raro",
  descricao: "Os Khrull são uma raça insetoide humanoide, com exoesqueletos quitinosos, membros segmentados e olhos compostos que refletem a luz de forma inquietante. Sua aparência varia conforme a casta, mas todos compartilham a mesma base: corpos eficientes, exp...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/uHvvENg.png",
  atributos: {
    forca: "4d6+10",
    vitalidade: "5d6+12",
    agilidade: "6d6+12",
    inteligencia: "3d6+6",
    percepcao: "6d6+14",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Exoesqueleto Quitinoso",
      descricao: "Armadura natural passiva (3d6+9) Recebe +2 dados em Defesa / Redução de dano físico leve Resistência aumentada contra cortes superficiais e impactos moderados (dobra a rolagem) Sof...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Mente de Colmeia",
      descricao: "Recebe +3 em testes de Agilidade/ Tática quando aliado a outro Khrull Não sofre penalidades por medo comum ou intimidação Comunicação silenciosa básica com outros Khrull próximos (...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Fisiologia Insetoide",
      descricao: "Resistência natural a venenos e doenças (+3 em testes contra efeitos biológicos) Não necessita dormir como outras raças; entra em estados breves de repouso Pode sobreviver com alim...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "🐜 Marcha da Colmeia",
      tipo: "Duradoura",
      alcance: "5 m",
      alvos: "no alcance",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Quando em combate ao lado de outro Khrull, o usuário recebe bônus de posicionamento, reduz penalidades de flanco e aumenta a eficiência em ações coord...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "🦂 Golpe Quitinoso",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "5 EnR",
      recarga: "3",
      duracao: "2",
      descricao: "O Khrull endurece partes do exoesqueleto e executa um ataque brutal, aumentando dano físico e ignorando parte da defesa natural do alvo. - 3 dados de ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "☣️ Exsudação Ácida",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "11 EnR",
      recarga: "5",
      duracao: "2",
      descricao: "O usuário secreta um fluido corrosivo capaz de enfraquecer armaduras, armas ou causar dano contínuo ao alvo atingido. - Dano Acido: 4d8+6...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "🧠 Pulso da Colmeia",
      tipo: "Imediata",
      alcance: "7 m",
      alvos: "no alcance",
      custo: "7 FaD",
      recarga: "7",
      duracao: "3",
      descricao: "O Khrull emite um pulso feromonal que melhora reação, foco e resistência mental dos aliados da mesma raça, sincronizando ações por alguns turnos. - +3...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "leukos",
  nome: "Leukos ",
  raridade: "lendario",
  descricao: "Os Marcados do Colapso Arcano  Os Leukos surgiram após um cataclisma mágico absoluto ocorrido em uma antiga cidade arcana. O evento não destruiu apenas prédios — ele reprogramou a existência de quem estava ali. Corpos, almas e magia se fundiram de fo...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/8S3jPGs.png",
  atributos: {
    forca: "4d6+12",
    vitalidade: "6d8+15",
    agilidade: "3d6+6",
    inteligencia: "5d6+12",
    percepcao: "6d6+15",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Corpo Desaturado",
      descricao: "Resistência elevada a magia bruta e efeitos elementais (+3 em testes contra magia) Vulnerabilidade leve a magia de purificação ou energia vital Temperatura corporal baixa, não sofr...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Eco do Cataclisma",
      descricao: "Pode sentir distorções mágicas, áreas instáveis ou artefatos corrompidos (+3) Recebe +3 em testes de Percepção arcana / Ocultismo Emoções intensas podem causar efeitos colaterais m...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Existência Instável",
      descricao: "Não envelhece de forma convencional Resistência a efeitos mentais comuns (+5 contra medo, confusão, charme) Cura mágica é menos eficiente; descanso e métodos alternativos funcionam...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Pulso de Brancura",
      tipo: "Imediata",
      alcance: "3 m",
      alvos: "AOE",
      custo: "9 EnR",
      recarga: "3",
      duracao: "1",
      descricao: "O Leukos libera uma onda de energia pálida que reduz intensidade mágica, enfraquece efeitos ativos e causa dano arcano moderado em criaturas sensíveis...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Forma Desbotada",
      tipo: "Imediata",
      alcance: "Pessoal",
      alvos: "Usuario",
      custo: "5 EnR",
      recarga: "2",
      duracao: "1",
      descricao: "O corpo do Leukos perde definição temporariamente, reduzindo dano recebido e dificultando que inimigos o fixem visualmente ou magicamente. - 3 dados d...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Memória do Dia Branco",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "no alcance",
      custo: "15 EnR",
      recarga: "7",
      duracao: "3",
      descricao: "O usuário acessa ecos do cataclisma presentes no local ou no alvo, revelando fragmentos de eventos passados ligados à explosão arcana. - Por 3 turnos ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Persistência Pálida",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Quando reduzido a condições críticas, o Leukos não cai imediatamente. Permanece ativo por alguns instantes adicionais, agindo mesmo quando outros sucu...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "repteis",
  nome: "Répteis ",
  raridade: "raro",
  descricao: "Os Répteis são uma raça antiga, surgida antes da maioria das civilizações. Enquanto outros povos construíam cidades, eles aprendiam a esperar. São frios no cálculo, pacientes no combate e extremamente conectados ao ambiente.  Sua aparência varia entr...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/7PROMpt.png",
  atributos: {
    forca: "5d6+10",
    vitalidade: "6d6+14",
    agilidade: "4d6+10",
    inteligencia: "2d6+6",
    percepcao: "6d6+14",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Sangue Frio Adaptativo",
      descricao: "Bônus: +2 em resistência a venenos e doenças Regenera lentamente quando exposto a calor natural  Debuff: –1 em ações físicas em ambientes frios ou sem fonte de calor...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Escamas Naturais",
      descricao: "Bônus: Redução fixa de dano físico (+30% DeF) Não sofre penalidade por armaduras médias  Debuff: Magia elétrica e perfurante ignora parte da proteção...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Instinto Predador",
      descricao: "Bônus: +2 em Percepção e Sobrevivência Vantagem ao atacar alvos feridos ou desprevenidos  Debuff: Testes sociais complexos sofrem penalidade em ambientes urbanos formais...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Postura do Sol Parado",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Enquanto permanecer imóvel ou em posição defensiva, o Réptil recupera vigor (2d12+5% HP) e reduz dano recebido (+3 dados defesa)....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Bote Ancestral",
      tipo: "Imediata",
      alcance: "0",
      alvos: "1",
      custo: "9 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "Um ataque explosivo após curta preparação. Causa dano aumentado se o alvo estiver ferido ou distraído.  Dano causado de 4 dados de dano adicional....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Termorregulação Forçada",
      tipo: "Imediata",
      alcance: "0",
      alvos: "Usuario",
      custo: " 5 FaD",
      recarga: "4",
      duracao: "2",
      descricao: "O Réptil força o corpo a se aquecer ou esfriar, anulando penalidades ambientais temporariamente. - Fica imune a condições de ambiente ou magicas por u...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Herdeiro das Eras",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Efeitos de medo, intimidação ou pressão psicológica têm eficácia reduzida (-3). O tempo já tentou matar esse povo antes....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "mamiferos",
  nome: "Mamíferos",
  raridade: "comum",
  descricao: "Os Sangue-Quente  Os Mamíferos são a raça da adaptação acelerada. Onde outros esperam eras, eles improvisam. Onde outros seguem instinto, eles testam limites. Incluem humanos, símios, felinos, canídeos e outras variações de sangue quente.  Fisicament...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/lFfL0KW.png",
  atributos: {
    forca: "4d6+8",
    vitalidade: "4d6+10",
    agilidade: "4d6+10",
    inteligencia: "5d6+12",
    percepcao: "4d6+8",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Sangue Quente",
      descricao: "Bônus: +2 em ações físicas repetidas Recuperação mais eficiente com descanso curto (Dobro)  Debuff: Sofre penalidades maiores por exaustão e fome...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Aprendizado Rápido",
      descricao: "Bônus: Ganha +2 em perícias recém-adquiridas Pode adaptar estratégias no meio do combate  Debuff: Magias ou efeitos mentais têm maior impacto emocional...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Emoção Intensa",
      descricao: "Bônus: Pode receber bônus extras de inspiração, coragem ou fúria Excelente sinergia com efeitos de liderança  Debuff: Falhas críticas sociais ou emocionais são mais severas...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Improviso Instintivo",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Reage a uma situação inesperada, anulando penalidade ou convertendo falha em sucesso parcial....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Pico Adrenal",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "3",
      duracao: "0",
      descricao: "Ganha bônus temporários em força, velocidade ou resistência, seguido de leve exaustão. +3 acao correlata...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Laço Tribal",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "2",
      duracao: "0",
      descricao: "Concede bônus de cooperação a aliados próximos por curto período. +1 de bônus ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Sobrevivente Adaptável",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Reduz efeitos cumulativos de condições físicas ao longo do tempo. ...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "fantasmas",
  nome: "Fantasmas",
  raridade: "epica",
  descricao: "Os Ecos que Recusam o Fim Os Fantasmas não são mortos-vivos comuns. São consciências presas por trauma, promessa, ódio ou falha. Não possuem carne — possuem pendências.  A aparência varia entre silhuetas translúcidas, sombras densas ou formas incompl...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/aK9UcVI.png",
  atributos: {
    forca: "1d4+2",
    vitalidade: "3d6+6",
    agilidade: "5d6+12",
    inteligencia: "6d6+14",
    percepcao: "6d8+15",
    sorte: "4d20+20"
  },
  habilidadesBasicas: [
    {
      nome: "Forma Etérea",
      descricao: "Bônus: Ignora terreno físico e obstáculos comuns Imunidade a venenos, doenças e sangramento  Debuff: Não pode interagir fisicamente sem esforço Vulnerável a magia espiritual ou de ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Âncora Emocional",
      descricao: "Bônus: Ganha força perto de locais, pessoas ou objetos ligados à sua história Resistência elevada a controle mental comum  Debuff: Distanciar-se da âncora enfraquece suas ARTs...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Existência Incompleta",
      descricao: "Bônus: Não sofre fadiga física Pode resistir à destruição completa  Debuff: Cura espiritual é complexa Algumas áreas sagradas causam dano passivo...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Manifestação Parcial",
      tipo: "Imediata",
      alcance: "CaC",
      alvos: "1",
      custo: "9 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "Permite interação física limitada por curto período. +3 Evasão e Reação....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Passagem Silenciosa",
      tipo: "Imediata",
      alcance: "11 m",
      alvos: "0",
      custo: "17 EnR",
      recarga: "2",
      duracao: "0",
      descricao: "Move-se instantaneamente por sombras ou paredes próximas. +9 metros extras. +5 Reacao....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Sussurros do Inacabado",
      tipo: "Sustentada",
      alcance: "15 m",
      alvos: "no alcance",
      custo: "15 EnR",
      recarga: "4",
      duracao: "0",
      descricao: "Afeta a mente de vivos com medo, culpa ou lembranças distorcidas. Obstáculo Sanidade -11 (-15 Vontade)...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Recusa do Fim",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Ao ser dissipado, o Fantasma pode retornar após um tempo se sua âncora ainda existir....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "necrofagomortovivo",
  nome: "Necrófago (Morto Vivo)",
  raridade: "raro",
  descricao: "Necrófagos são seres que atravessaram a fronteira da morte e retornaram ao mundo material. Diferente de cadáveres animados sem mente, eles preservam consciência, memória ou ao menos fragmentos de quem foram em vida. Sua existência é sustentada por en...",
  limiteAtributo: 120,
  imagem: "https://i.imgur.com/KuHj0g6.png",
  atributos: {
    forca: "4d6+10",
    vitalidade: "5d6+14",
    agilidade: "3d6+8",
    inteligencia: "4d6+10",
    percepcao: "4d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Persistência da Morte",
      descricao: "O corpo de um Necrófago não reage à dor ou fadiga da mesma forma que os vivos. Mesmo gravemente danificado, ele continua se movendo impulsionado pela energia necromântica que suste...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Essência Necromântica",
      descricao: "A energia que sustenta o Necrófago reage naturalmente à magia da morte, espíritos e forças do além.  Bônus: Recebe +2 em rolagens relacionadas a necromancia, espíritos ou magia som...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Eco da Existência",
      descricao: "Fragmentos da vida passada ainda ecoam dentro da mente do Necrófago. Esses vestígios podem surgir como lembranças repentinas, reflexos de habilidade ou impulsos instintivos.  Bônus...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Persistência da Morte",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O corpo do Necrófago é sustentado por energia necromântica e não reage à dor como o de um ser vivo. Quando receber dano que normalmente o derrubaria o...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Essência Necromântica",
      tipo: "Duradoura",
      alcance: "Proprio",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "O Necrófago possui uma ligação natural com energias da morte e do além.  Ele recebe:  • +2 em rolagens envolvendo necromancia, espíritos ou rituais fu...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Drenagem Sepulcral",
      tipo: "Imediata",
      alcance: "Corpo A Corpo",
      alvos: "1",
      custo: "9 EnR",
      recarga: "0",
      duracao: "0",
      descricao: "O Necrófago canaliza energia necromântica através do contato físico, drenando vitalidade do inimigo.  Causa 4d8 de dano necrótico e recupera metade do...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Eco da Vida Passada",
      tipo: "Imediata",
      alcance: "Proprio",
      alvos: "usuario",
      custo: "7 EnR",
      recarga: "0",
      duracao: "0",
      descricao: "Fragmentos da vida passada do Necrófago ainda existem em sua mente, surgindo em momentos inesperados.  Uma vez por cena, após falhar em um teste de pe...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "felarynfelinos",
  nome: "Felaryn (Felinos)",
  raridade: "comum",
  descricao: "Os Felinos são predadores naturais que existem em inúmeras formas e tamanhos pelo mundo. De pequenos caçadores silenciosos das florestas até gigantes majestosos das planícies ou montanhas, todos compartilham o mesmo conjunto de instintos refinados qu...",
  limiteAtributo: 100,
  imagem: "https://i.imgur.com/3fxrfD0.png",
  atributos: {
    forca: "4d6+10",
    vitalidade: "4d6+10",
    agilidade: "5d8+14",
    inteligencia: "2d6+4",
    percepcao: "5d8+14",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Sentidos Aguçados",
      descricao: "Os Felinos possuem visão adaptada à penumbra, audição extremamente sensível e um olfato eficiente para detectar presas.  Efeito:  • +2 em testes de Percepção • podem detectar movim...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Corpo Flexível",
      descricao: "A estrutura corporal dos Felinos é extremamente flexível e adaptada para saltos, escaladas e movimentos rápidos.  Efeito:  • bônus em movimento, escalada e salto • recebem redução ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Instinto Territorial",
      descricao: "Felinos possuem forte instinto de território e sobrevivência, reagindo rapidamente a invasores ou ameaças.  Efeito:  • bônus em rastreamento e caça dentro de seu território • vanta...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Instinto de Caça",
      tipo: "Duradoura",
      alcance: "0",
      alvos: "0",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "Felinos possuem sentidos naturais extremamente desenvolvidos.  Recebem:  • +2 em rastreamento, percepção e detecção de presas • bônus narrativo ao ide...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Salto Predador",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "1",
      custo: "7 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "O Felino avança em um salto explosivo contra sua presa. Ele pode saltar rapidamente até o alvo, ignorando pequenos obstáculos, causando 4d8+12 de dano...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Movimento Silencioso",
      tipo: "Sustentada",
      alcance: "Proprio",
      alvos: "Todos",
      custo: "2 Fad p/ T",
      recarga: "3",
      duracao: "0",
      descricao: "As patas macias do Felino permitem movimentação quase silenciosa.  Enquanto ativa, a criatura recebe:  • +3 em furtividade • vantagem narrativa para a...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Reflexos Instintivos",
      tipo: "Imediata",
      alcance: "Proprio",
      alvos: "0",
      custo: "11 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "O Felino reage com reflexos extremamente rápidos a ataques inesperados.  Uma vez ativada, pode reduzir pela metade o dano de um ataque físico ou proje...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "lithorgolem",
  nome: "Lithor (Golem)",
  raridade: "raro",
  descricao: "Os Lithor são entidades vivas formadas a partir da própria matéria do mundo. Diferente de construtos artificiais, eles nascem quando energia primordial se acumula por eras dentro de montanhas, cavernas profundas ou veios minerais extremamente antigos...",
  limiteAtributo: 120,
  imagem: "https://i.imgur.com/67FAioa.png",
  atributos: {
    forca: "5d8+14",
    vitalidade: "6d8+16",
    agilidade: "2d4+4",
    inteligencia: "3d6+8",
    percepcao: "4d6+10",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Corpo Mineral",
      descricao: "O corpo do Lithor é formado por rocha viva extremamente resistente. Efeito: • redução passiva de dano físico leve (-20%) • resistência natural contra empurrões e impactos ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Peso da Montanha",
      descricao: "A estrutura do Lithor é extremamente pesada e estável.  Efeito: • dificilmente pode ser derrubado ou deslocado (Obstaculo -15) • bônus em testes de resistência física (+5)...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Sentido Geológico",
      descricao: "Lithor conseguem sentir vibrações através do solo.  Efeito: • podem detectar movimentos no chão próximos • bônus em percepção subterrânea ou cavernas...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Punho de Granito",
      tipo: "Imediata",
      alcance: "Proprio",
      alvos: "AOE",
      custo: "11 FaD",
      recarga: "2",
      duracao: "0",
      descricao: "O Lithor canaliza sua massa mineral em um golpe devastador.  Causa 6d8 de dano físico e pode empurrar o alvo alguns metros se ele falhar em um teste d...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Pele de Pedra",
      tipo: "Duradoura",
      alcance: "Proprio",
      alvos: "Usuario",
      custo: "0",
      recarga: "0",
      duracao: "0",
      descricao: "A superfície do corpo do Lithor endurece ainda mais.  Enquanto ativa:  • recebe +3d10 defesa • reduz dano físico recebido...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Tremor Terrestre",
      tipo: "Imediata",
      alcance: "15 m",
      alvos: "no alcance",
      custo: "19 FaD",
      recarga: "5",
      duracao: "0",
      descricao: "O Lithor golpeia o chão liberando um tremor curto. Inimigos próximos sofrem 2d6 dano e podem ser desequilibrados ou derrubados....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Regeneração Mineral",
      tipo: "Sustentada",
      alcance: "Proprio",
      alvos: "Usuario",
      custo: "5 EnR p/ T",
      recarga: "3",
      duracao: "5",
      descricao: "O Lithor absorve minerais do ambiente para reparar sua estrutura. Recupera 2d10+6 vitalidade por turno durante 5 turnos....",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
{
  id: "mytharbestasfantasticas",
  nome: "Mythar ( Bestas Fantasticas)",
  raridade: "epica",
  descricao: "Os Mythar são criaturas nascidas da própria essência da magia que permeia o mundo. Diferente de animais comuns, sua existência está profundamente ligada às forças sobrenaturais da natureza e às correntes arcanas que moldam a realidade.  Essas criatur...",
  limiteAtributo: 150,
  imagem: "https://i.imgur.com/qZUJGy2.png",
  atributos: {
    forca: "5d8+12",
    vitalidade: "5d8+12",
    agilidade: "4d8+10",
    inteligencia: "3d6+8",
    percepcao: "5d8+12",
    sorte: "5d20"
  },
  habilidadesBasicas: [
    {
      nome: "Essência Mágica",
      descricao: "Mythar são naturalmente conectados às energias mágicas do mundo. Efeito: • resistência natural contra efeitos mágicos fracos (+1) • bônus em testes envolvendo magia ou fenômenos ar...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Presença Primordial",
      descricao: "A presença de uma Besta Fantástica impõe respeito ou medo nas criaturas ao redor. Efeito: • criaturas comuns podem demonstrar hesitação ou cautela • bônus narrativo em intimidação ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    },
    {
      nome: "Corpo Sobrenatural",
      descricao: "O corpo de um Mythar é mais resistente que o de animais normais. Efeito: • leve resistência contra dano físico e elemental (+20% Defesa) • maior tolerância a ambientes hostis ...",
      bonus: [
        { tipo: "geral", valor: 1 }
      ]
    }
  ],
  habilidadesAvancadas: [
    {
      nome: "Investida Bestial",
      tipo: "Imediata",
      alcance: "8 m",
      alvos: "1",
      custo: "11 FaD",
      recarga: "2 T",
      duracao: "0",
      descricao: "O Mythar avança com ferocidade sobrenatural contra o inimigo. Causa 6d8 de dano físico e pode derrubar o alvo caso ele falhe em um teste de resistênci...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Rugido Primordial",
      tipo: "Imediata",
      alcance: "6 m",
      alvos: "1",
      custo: "8 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "A criatura solta um rugido carregado de energia primordial. Inimigos próximos podem sofrer desorientação ou hesitação momentânea, reduzindo sua capaci...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Instinto Místico",
      tipo: "Imediata",
      alcance: "Proprio",
      alvos: "Usuario",
      custo: "5 EnR",
      recarga: "2 t",
      duracao: "0",
      descricao: "A criatura amplia seus sentidos mágicos. Durante a duração: • pode sentir presença de magia próxima (+3) • recebe bônus em percepção sobrenatural (+1)...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    },
    {
      nome: "Fúria Arcana",
      tipo: "Duradoura",
      alcance: "Proprio",
      alvos: "1",
      custo: "15 EnR",
      recarga: "3",
      duracao: "0",
      descricao: "O Mythar libera sua energia mágica interior. Durante a habilidade: • aumenta força e agressividade em combate (Condição Aumento de Forca) • ataques ca...",
      dado: "1d20",
      bonus: [
        { tipo: "geral", valor: 2 }
      ]
    }
  ]
},
];
