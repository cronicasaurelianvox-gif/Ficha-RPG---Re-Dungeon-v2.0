/**
 * SISTEMA DE RAÇAS - DADOS ATUALIZADO
 * Estrutura centralizada com habilidades básicas e avançadas
 * Preparado para evolução e especialização
 */

const RACAS_DATABASE = [
  {
    id: "humano",
    nome: "Humano",
    raridade: "comum",
    descricao: "Os humanos são a raça mais flexível e diversa entre as civilizações. Eles surgem e prosperam praticamente em qualquer ambiente, espalhando-se por desertos, florestas, montanhas e cidades costeiras sem dificuldade. Sua moral, tradições e ambições mudam drasticamente de região para região, tornando impossível definir um único 'jeito humano' de existir.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/VAOeAcl.png",
    atributos: {
      forca: "4d6+10",
      vitalidade: "4d6+10",
      agilidade: "4d6+10",
      inteligencia: "5d6+12",
      percepcao: "4d6+10",
      sorte: "5d20"
    },
    habilidadesBasicas: [
      {
        nome: "Adaptabilidade",
        descricao: "O jogador pode ajustar na sua ficha um atributo chave (exceto sua sorte) antes da campanha iniciar, assim se adaptando como qualquer humano do mundo de Re'Dungeon.",
        bonus: [
          "Ajusta um atributo principal antes da campanha",
          "Maior flexibilidade no build do personagem",
          "Sem limitações de especialização"
        ]
      },
      {
        nome: "Versatilidade",
        descricao: "O jogador pode aprender uma categoria de art que possua no sistema, assim se tornando uma especialização única como se fosse uma classe.",
        bonus: [
          "Aprende uma categoria de arte extra",
          "Combina especialidades de forma única",
          "Exemplo: Um mago parradeiro"
        ]
      },
      {
        nome: "Ambição",
        descricao: "O jogador declara uma ambição que esteja de acordo com seu background. Durante eventos e acontecimentos na campanha que estejam com sua ambição em jogo, o jogador recebe o benefício de incentivo.",
        bonus: [
          "Bônus +3 em rolagens relacionadas à ambição",
          "Incentivo narrativo durante a campanha",
          "Conexão com objetivos pessoais"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Vontade Inabalável",
        descricao: "A força do humano não está no corpo, mas na recusa em desistir.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Testes de Resistência mental e emocional contra medo, intimidação, controle mental ou penalidades emocionais",
          "Uma vez por sessão, ao cair abaixo de 30% dos recursos principais, ignora uma penalidade negativa ativa por 1 turno"
        ]
      },
      {
        nome: "Poder Latente",
        descricao: "Quando pressionado ao limite, algo desperta.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Durante 1 turno, escolhe um atributo principal e recebe +3 temporário nele",
          "Se usado abaixo de 25% de HP, o bônus aumenta para +5",
          "Sofre fadiga narrativa após o efeito (descrita pelo mestre)"
        ]
      },
      {
        nome: "Aprendizado",
        descricao: "Humanos aprendem observando erros — próprios e alheios.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Ao falhar um teste em uma Art, perícia ou ação repetível, recebe +1 na próxima tentativa durante o mesmo combate",
          "O bônus não se acumula, mas pode ser aplicado novamente após outra falha diferente"
        ]
      },
      {
        nome: "Adaptação",
        descricao: "Ao sofrer dano de um tipo específico, o humano ajusta seu corpo e mente.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Até o final do próximo turno, recebe redução leve do mesmo tipo de dano ou 2d6 de Defesa contra aquela fonte específica",
          "Não funciona contra o mesmo tipo de dano duas vezes seguidas sem intervalo"
        ]
      }
    ]
  },
  {
    id: "animanos",
    nome: "Animanos",
    raridade: "comum",
    descricao: "Animanos são semelhantes aos humanos à primeira vista, mas carregam no corpo marcas vivas de sua ancestralidade animal — caudas que denunciam emoções antes das palavras, orelhas que reagem ao menor som, padrões de pelagem, garras sutis ou olhos que refletem instinto. Essa fusão entre razão humana e herança selvagem dá a eles uma maneira única de perceber o mundo, guiada tanto pela intuição quanto por tradições próprias desenvolvidas ao longo de séculos de isolamento. Seu modo de viver costuma ser moldado pelo ritmo da natureza, e suas técnicas, crenças e costumes nascem dessa conexão profunda com os animais que vieram antes deles, tornando-os uma raça que transita entre o civilizado e o primal sem perder o equilíbrio.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/SEQK76x.png",
    atributos: {
      forca: "5d6+12",
      vitalidade: "5d6+12",
      agilidade: "5d6+12",
      inteligencia: "4d6+10",
      percepcao: "5d8+10",
      sorte: "5d20"
    },
    habilidadesBasicas: [
      {
        nome: "Instinto Desperto",
        descricao: "Os Animanos não dependem apenas da lógica. Seu corpo está constantemente sintonizado com as ameaças ao seu redor, reagindo instintivamente antes mesmo da mente compreender o perigo.",
        bonus: [
          "Detecta perigo iminente com mais facilidade (+3 em Percepção)",
          "Pequeno bônus em esquiva ou reação (+1)",
          "Em situações de surpresa, chance de agir primeiro"
        ]
      },
      {
        nome: "Sentidos Aguçados",
        descricao: "Seus traços animais amplificam significativamente sua percepção do mundo. Audição e olfato superiores funcionam como uma segunda visão, permitindo navegar em completa escuridão ou detectar presenças invisíveis.",
        bonus: [
          "Audição e olfato superiores ao padrão humano (Vantagem sensorial)",
          "Redução no obstáculo para perceber inimigos ocultos ou mudanças no ambiente",
          "+3 em rastreamento e localização"
        ]
      },
      {
        nome: "Intuição Primal",
        descricao: "Uma percepção que vai além do visível. Os Animanos conseguem captar as intenções hostis próximas e sentir quando algo está fora do equilíbrio natural, um dom ancestral que os protege de emboscadas.",
        bonus: [
          "Capta intenções hostis próximas",
          "+2 de bônus leve contra emboscadas",
          "Pode sentir quando algo está fora do equilíbrio natural"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Instinto Feral",
        descricao: "Quando o instinto assume, o corpo responde antes da mente. Ao ativar esta Art, o Animanos entra em um estado feral, recebendo bônus em Precisão à escolha, +2 em Evasão, ignora penalidades de dor, medo ou intimidação. Ao final do turno, sofre 1 nível leve de exaustão narrativa.",
        tipo: "Sustentada",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 7,
        recarga: 5,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 em Precisão à escolha",
          "+2 em Evasão",
          "Ignora penalidades de dor, medo ou intimidação",
          "Exaustão narrativa ao final do turno"
        ]
      },
      {
        nome: "Olhar do Predador",
        descricao: "O Animanos fixa o olhar no alvo como uma presa marcada. Até o final do turno: +2 em Testes de Percepção, rastreio e leitura de intenção contra esse alvo. O alvo sofre –3 em Evasão contra o próximo ataque. Se tentar fugir, o Animanos sabe exatamente a direção inicial.",
        tipo: "Imediata",
        alcance: "9 m",
        alvos: "1",
        custo: 5,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Percepção e rastreio contra o alvo",
          "-3 em Evasão do alvo contra próximo ataque",
          "Detecção de direção de fuga"
        ]
      },
      {
        nome: "Mutação Primal",
        descricao: "Características bestiais se intensificam: garras, presas, escamas, pelagem densa ou músculos distendidos. Enquanto ativa: +2 dado adicional de defesa, ataques desarmados causam dano de arma leve (3d8), ganha resistência leve ao último tipo de dano sofrido.",
        tipo: "Sustentada",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 13,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 dado adicional de defesa",
          "Ataques desarmados causam 3d8",
          "Resistência leve ao último tipo de dano sofrido"
        ]
      },
      {
        nome: "Frenesi",
        descricao: "O Animanos converte dor e raiva em violência pura. Se já sofreu dano nesta rodada, o ataque recebe +6 dano adicional. Se estiver abaixo de 50% de HP, recebe +12 dano em vez disso. Após o ataque, sofre –1 dado de Defesa até o início do próximo turno.",
        tipo: "Sustentada",
        alcance: "CaC",
        alvos: "1",
        custo: 9,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "+6 dano se sofreu dano nesta rodada",
          "+12 dano se abaixo de 50% de HP",
          "-1 dado de Defesa após o ataque"
        ]
      }
    ]
  },
  {
    id: "mestico",
    nome: "Mestiço",
    raridade: "comum",
    descricao: "Os Mestiços são a raça mais imprevisível e diversificada do mundo. Nascidos da união entre sangues distintos, eles não herdam linhagens puras nem características fixas. Cada Mestiço é uma exceção viva, carregando traços físicos, culturais e espirituais fragmentados de suas origens. Por nunca pertencerem inteiramente a um único povo, aprendem desde cedo a sobreviver na intersecção, desenvolvendo uma capacidade rara de adaptação, conflito interno e criatividade extrema.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/zgts4NC.png",
    atributos: {
      forca: "4d6+12",
      vitalidade: "4d6+12",
      agilidade: "4d6+12",
      inteligencia: "4d6+12",
      percepcao: "4d6+12",
      sorte: "5d20"
    },
    habilidadesBasicas: [
      {
        nome: "Paradigma da Convergência",
        descricao: "O jogador escolhe duas raças de origem. O Mestiço pode selecionar um benefício menor de cada uma, em vez de escolher um benefício completo de uma única raça. Esses benefícios não podem ser efeitos finais ou habilidades máximas — são ecos, não heranças totais.",
        bonus: [
          "Escolhe dois benefícios de raças diferentes",
          "Benefícios menores e ecos das raças",
          "Maior flexibilidade na construção do personagem"
        ]
      },
      {
        nome: "Paradigma da Instabilidade",
        descricao: "Uma vez por cena, após falhar em uma rolagem, o Mestiço pode reagir ao erro, transformando a falha em sucesso parcial ou adicionando um efeito inesperado (dano reduzido, efeito colateral, mudança de posição, etc.). O resultado nunca é perfeito — mas nunca é inútil.",
        bonus: [
          "Transforma falha em sucesso parcial",
          "Adiciona efeito inesperado",
          "Uma vez por cena"
        ]
      },
      {
        nome: "Paradigma da Autoafirmação",
        descricao: "O jogador define uma identidade própria que não pertence a nenhuma das raças de origem (ex: líder errante, mediador, renegado, pioneiro). Sempre que agir diretamente de acordo com essa identidade, recebe +3 nas rolagens relacionadas à ação naquela cena.",
        bonus: [
          "+3 em rolagens da identidade própria",
          "Define identidade única",
          "Conexão com objetivos pessoais"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Corpo Intermediário",
        descricao: "O corpo do Mestiço nunca é totalmente compatível com extremos. Recebe +1 em testes de Resistência geral, sofre menos penalidades por ambientes extremos. Por outro lado, efeitos que dependem de 'afinidade racial pura' não recebem bônus máximos.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 em testes de Resistência geral",
          "Menos penalidades em ambientes extremos",
          "Bônus médios em afinidades raciais puras"
        ]
      },
      {
        nome: "Sinergia Instável",
        descricao: "Ao usar uma Art, o Mestiço pode forçar a convergência de suas heranças, escolhendo um efeito secundário simples de outra Art racial conhecida. Após o uso, sofre –1 em um atributo aleatório até o próximo turno.",
        tipo: "Imediata",
        alcance: "12 m",
        alvos: "1",
        custo: 11,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe efeito secundário de outra Art",
          "Convergência de heranças",
          "-1 em atributo aleatório até próximo turno"
        ]
      },
      {
        nome: "Adaptação Híbrida",
        descricao: "Sob pressão, o corpo híbrido se ajusta. Ao sofrer dano ou efeito negativo, o Mestiço pode ativar esta Art para receber resistência leve ao tipo de dano sofrido ou ignorar uma penalidade negativa leve até o fim do turno.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 9,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "Resistência leve ao dano sofrido ou",
          "Ignora penalidade negativa leve",
          "Até o fim do turno"
        ]
      },
      {
        nome: "Herança Dupla",
        descricao: "O Mestiço carrega traços de duas origens distintas. Ao criar o personagem, escolha duas raças-base. Sempre que uma habilidade, efeito ou teste racial for aplicado, o Mestiço pode escolher qual herança está ativa naquele momento. Essa escolha pode ser alterada uma vez por batalha.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe qual herança está ativa",
          "Flexibilidade em habilidades raciais",
          "Alterável uma vez por batalha",
          "Sem acúmulo de bônus simultâneos"
        ]
      }
    ]
  },
  {
    id: "gnomo",
    nome: "Gnomo",
    raridade: "raro",
    descricao: "Os Gnomos são uma raça pequena, mas perigosamente inteligente. Diferente da imagem cômica que muitos atribuem a eles, os Gnomos são engenheiros da improbabilidade. Onde outras raças veem limites físicos, eles veem desafios temporários. Baixos, de membros compactos, olhos grandes e atentos, sempre parecem estar calculando algo — mesmo quando dormem. Suas mãos são rápidas demais para o tamanho do corpo, e suas vozes costumam alternar entre empolgação e ironia mordaz.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/GdcpsPA.png",
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
        descricao: "Gnomos aprendem com erros em velocidade absurda. Falhas viram melhorias. Repetir o mesmo erro é quase impossível para eles.",
        bonus: [
          "Após falhar em um teste técnico ou intelectual, recebe +2 na próxima tentativa semelhante (1 vez por cena)",
          "Repetir exatamente a mesma ação falha não gera nova penalidade"
        ]
      },
      {
        nome: "Engenharia Improvisada",
        descricao: "Conseguem criar, adaptar ou consertar dispositivos usando recursos mínimos. O resultado nem sempre é bonito, mas quase sempre funciona.",
        bonus: [
          "Pode criar ou adaptar dispositivos simples sem custo de material",
          "Dispositivos improvisados têm –1 durabilidade, mas funcionam plenamente",
          "Arts que envolvam preparação mecânica custam –1 Energia"
        ]
      },
      {
        nome: "Curiosidade Perigosa",
        descricao: "Quando algo novo surge, um Gnomo sente impulso quase físico de mexer, testar ou desmontar. Ignorar isso exige esforço consciente.",
        bonus: [
          "Ao interagir com algo desconhecido, recebe +1 Intelecto temporário por 1 ação",
          "Se ignorar deliberadamente algo novo, sofre –1 em testes intelectuais até o fim da cena"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Dispositivo Improvisado",
        descricao: "O Gnomo cria um artefato funcional usando sucata. Escolha: armadilha, explosivo ou ferramenta. O efeito dura até ser usado ou destruído.",
        tipo: "Duradoura",
        alcance: "3 m",
        alvos: "AOE",
        custo: 9,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "Cria artefato funcional com sucata",
          "Escolhe tipo: armadilha, explosivo ou ferramenta"
        ]
      },
      {
        nome: "Iteração Forçada",
        descricao: "Após falhar em uma Art ou ataque, o Gnomo pode re-rolar o teste, aceitando o novo resultado.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Usuário",
        custo: 0,
        recarga: 5,
        duracao: 0,
        dado: "0",
        bonus: [
          "Re-rola o teste após falha",
          "Aceita o novo resultado obrigatoriamente"
        ]
      },
      {
        nome: "Sobrecarga Experimental",
        descricao: "Um dispositivo entra em modo crítico. Causa 4d12 de dano. Em caso de falha crítica, o usuário sofre metade do dano.",
        tipo: "Imediata",
        alcance: "6 m",
        alvos: "No alcance",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "4d12",
        bonus: [
          "Causa 4d12 de dano",
          "Falha crítica: usuário sofre metade do dano"
        ]
      },
      {
        nome: "Engenharia do Caos",
        descricao: "Dispositivos criados pelo Gnomo nunca falham completamente. Em falhas, o efeito ocorre de forma reduzida.",
        tipo: "Duradoura",
        alcance: "0",
        alvos: "Usuário",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Dispositivos nunca falham completamente",
          "Efeitos reduzidos em falhas"
        ]
      },
      {
        nome: "Botão Vermelho Não Identificado",
        descricao: "Ativa uma função desconhecida. O efeito é poderoso, mas o mestre define uma consequência colateral inevitável.",
        tipo: "Imediata",
        alcance: "5 m",
        alvos: "No alcance",
        custo: 17,
        recarga: "1 p/ Sessão",
        duracao: 0,
        dado: "0",
        bonus: [
          "Ativa função desconhecida",
          "Efeito poderoso",
          "Consequência colateral inevitável"
        ]
      }
    ]
  },
  {
    id: "anao",
    nome: "Anão",
    raridade: "raro",
    descricao: "Anões são seres robustos, persistentes e moldados pela mesma dureza das montanhas que chamam de lar. Baixos e fortes, com músculos compactos e uma resistência lendária, eles prosperam em fortalezas subterrâneas repletas de túneis, forjas e salões ecoando histórias antigas. Sua vida gira em torno da tradição, da honra e do trabalho meticuloso — cada arma, joia ou estrutura criada por um anão carrega séculos de técnica aperfeiçoada.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/lQYaH3k.png",
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
        descricao: "Uma vez por sessão, o anão pode ignorar completamente os efeitos negativos de uma condição física (exaustão, sangramento, dor, empurrão, imobilização leve).",
        bonus: [
          "Ignora efeitos negativos de condição física",
          "Uma vez por sessão",
          "Exaustão, sangramento, dor, empurrão, imobilização leve"
        ]
      },
      {
        nome: "Fundamento da Forja",
        descricao: "O jogador escolhe um tipo de equipamento (arma, armadura, ferramenta ou artefato). Esse item recebe um aprimoramento exclusivo criado pelo próprio anão. Durante a campanha, o anão pode evoluir esse item sem custo extra sempre que houver tempo, recursos ou narrativa adequada.",
        bonus: [
          "Escolhe um tipo de equipamento",
          "Aprimoramento exclusivo pessoal",
          "Evolução sem custo extra"
        ]
      },
      {
        nome: "Fundamento do Juramento",
        descricao: "O jogador declara um juramento (proteger, vingar, construir, preservar, destruir algo específico). Sempre que agir diretamente em favor desse juramento, recebe o benefício de firmeza, garantindo +3 nas rolagens e imunidade a efeitos de medo ou intimidação naquela cena.",
        bonus: [
          "+3 em rolagens relacionadas ao juramento",
          "Imunidade a medo ou intimidação na cena",
          "Juramento declarado pessoalmente"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Nanismo",
        descricao: "O corpo anão é baixo, denso e estável. O personagem recebe +2 em Testes contra empurrões, esquivas, quedas e efeitos de deslocamento forçado. Redução leve em penalidades por terreno irregular ou instável. Efeitos que dependem de 'derrubar' ou 'arremessar' o anão têm dificuldade aumentada.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Testes contra empurrões e deslocamento",
          "Redução em penalidades de terreno",
          "Dificuldade aumentada para ser derrubado"
        ]
      },
      {
        nome: "Percepção Anã",
        descricao: "Anões veem o mundo como estrutura, não como paisagem. O personagem recebe +2 em Testes de Percepção ligados a ambientes subterrâneos, armadilhas, mecanismos, construções e falhas estruturais. Uma vez por sessão, pode identificar pontos fracos em objetos, paredes ou armaduras.",
        tipo: "Duradoura",
        alcance: "15 m",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Percepção de ambientes e estruturas",
          "Detecção de armadilhas e mecanismos",
          "Identificação de pontos fracos uma vez por sessão"
        ]
      },
      {
        nome: "52 Batidas Divinas",
        descricao: "Cada golpe importa. Ao ativar esta Art, o anão entra em um ritmo preciso de golpes calculados. Para cada ataque consecutivo o anão causa dado de dano adicional durante 3 turnos. Se atacar um objeto, arma ou armadura, recebe +2 em testes para quebrar, deformar ou melhorar.",
        tipo: "Sustentada",
        alcance: "CaC",
        alvos: "1",
        custo: 11,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 dado de dano por ataque consecutivo",
          "+2 em testes contra objetos",
          "Efeito por 3 turnos"
        ]
      },
      {
        nome: "Força do Pequeno Homem",
        descricao: "A força anã vem da densidade, não do tamanho. Sempre que o anão estiver defendendo uma posição, usando escudos, armas pesadas ou ferramentas de impacto, ele recebe um dado de Defesa e +1 em testes de Força. Não sofre penalidades por tamanho ao usar armas feitas para criaturas maiores.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 dado de Defesa defensivo",
          "+1 em Testes de Força",
          "Sem penalidade de tamanho com armas grandes"
        ]
      }
    ]
  },
  {
    id: "elfo",
    nome: "Elfo",
    raridade: "raro",
    descricao: "Elfos são seres de graça sobrenatural, longos anos e beleza quase etérea, vivendo em harmonia com a magia e com os ritmos antigos do mundo. Seus corpos são esguios, seus movimentos leves e calculados, e seus sentidos aguçados enxergam nuances que outras raças sequer percebem. Costumam habitar florestas profundas, vales ocultos ou enclaves místicos, preservando culturas que atravessam séculos como se fossem estações do ano.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/MflH60q.png",
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
        descricao: "O jogador pode escolher um efeito passivo permanente ligado a um atributo mental (Intelecto, Vontade ou Percepção). Uma vez por cena, pode ignorar penalidades relacionadas a fadiga mental, confusão, medo ou distração.",
        bonus: [
          "Escolhe efeito passivo mental permanente",
          "Ignora penalidades mentais uma vez por cena",
          "Fadiga mental, confusão, medo ou distração"
        ]
      },
      {
        nome: "Legado da Sintonia",
        descricao: "O jogador escolhe um elemento, escola mágica ou força natural (ex: Água, Vento ou Mana). Sempre que utilizar habilidades ligadas a essa afinidade, recebe +2 nas rolagens e reduz o custo ou tempo de conjuração.",
        bonus: [
          "+2 em rolagens da afinidade eleita",
          "Redução de custo ou tempo de conjuração",
          "Elemento, escola mágica ou força natural"
        ]
      },
      {
        nome: "Legado da Precisão",
        descricao: "Uma vez por turno, o elfo pode re-rolar um dado em ações que envolvam ataque, furtividade ou ações técnicas. Deve manter o novo resultado. Além disso, recebe bônus narrativo ao agir com planejamento, posicionamento ou paciência.",
        bonus: [
          "Re-rola um dado uma vez por turno",
          "Ataque, furtividade ou ações técnicas",
          "Bônus narrativo com planejamento"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Percepção Aguçada",
        descricao: "Os sentidos élficos são treinados desde a infância para perceber o que outros ignoram. O elfo recebe +2 em Testes de Percepção, rastreio e detecção (incluindo armadilhas, emboscadas e presenças ocultas). Uma vez por sessão, pode agir antes do turno normal ao detectar uma ameaça oculta.",
        tipo: "Duradoura",
        alcance: "19 m",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Percepção e detecção",
          "Prioridade de reação uma vez por sessão",
          "Contra ameaças ocultas"
        ]
      },
      {
        nome: "Acrobacia Sobrenatural",
        descricao: "O corpo élfico se move com leveza quase irreal. Ao sofrer um ataque corpo a corpo ou à distância, o elfo pode ativar esta Art para receber +2 em Evasão ou Reação contra aquele ataque. Se o ataque errar, o elfo pode se mover até 3 metros sem provocar reações.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 7,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Evasão contra ataque",
          "Movimento de 3 metros sem reação se acerto errar"
        ]
      },
      {
        nome: "Treinamento com Arco",
        descricao: "O arco é uma extensão natural do corpo élfico. O personagem recebe +1 em Precisão ao usar arcos ou armas de longo alcance similares. Ignora penalidades leves de distância. Uma vez por turno, ao permanecer imóvel, o próximo disparo recebe +2 dado de dano adicional.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 em Precisão com arcos",
          "Ignora penalidades de distância",
          "+2 dado de dano se imóvel"
        ]
      },
      {
        nome: "Longevidade",
        descricao: "A vida longa do elfo permite aperfeiçoamento contínuo. Sempre que o personagem subir o Domínio de uma Art, ele recebe um bônus narrativo adicional, como redução leve de custo ou pequeno bônus secundário (ex: +1 alcance, +1 duração).",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Bônus narrativo ao subir Domínio de Art",
          "Redução leve de custo ou bônus secundário",
          "Uma vez por Art"
        ]
      }
    ]
  },
  {
    id: "animalus",
    nome: "Animalus",
    raridade: "raro",
    descricao: "Os Animalus são seres de aparência nitidamente animalesca, carregando traços físicos completos de suas linhagens — presas, escamas, asas, carapaças, caudas ou guelras. Possuem uma longevidade superior à dos humanos e um intelecto comparável ao dos elfos, embora sejam frequentemente subestimados ou perseguidos devido à sua aparência bestial. Essa hostilidade moldou sua cultura: ao longo das eras, os Animalus desenvolveram técnicas de combate brutais, eficientes e refinadas, tornando-se os mais aptos ao combate marcial direto.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/KLIGWgz.png",
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
        descricao: "O Animalus recebe +2 em rolagens de ataque corpo a corpo e vantagem em ações de emboscada, perseguição ou combate iniciado por ele. Na primeira rodada de combate, causa dano adicional ou recebe bônus equivalente definido pelo sistema.",
        bonus: [
          "+2 em rolagens de ataque corpo a corpo",
          "Vantagem em emboscada, perseguição ou combate iniciado",
          "Dano adicional ou bônus na primeira rodada de combate"
        ]
      },
      {
        nome: "Caminho da Carapaça",
        descricao: "O Animalus recebe redução passiva de dano físico ou bônus constante em Defesa. Uma vez por cena, pode ignorar completamente um efeito físico negativo (empurrão, atordoamento leve, sangramento ou quebra de postura).",
        bonus: [
          "Redução passiva de dano físico ou +1 em Defesa",
          "Ignora efeito físico negativo uma vez por cena",
          "Empurrão, atordoamento, sangramento ou quebra de postura"
        ]
      },
      {
        nome: "Instinto Selvagem",
        descricao: "O Animalus sente perigos por instinto. Recebe +1 em Percepção e nunca sofre penalidades por ataques surpresa. Pode reagir a ataques mesmo que desprevenido, embora com penalidade reduzida.",
        bonus: [
          "+1 em Percepção geral",
          "Nunca sofre penalidade total de surpresa",
          "Reação possível mesmo desprevenido"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Consciência Selvagem",
        descricao: "O Animalus percebe o mundo como um ecossistema vivo. Recebe +2 em Testes de Percepção ligados a ambiente, clima, presença de criaturas e mudanças naturais (cheiros, vibrações, padrões de movimento). Nunca é pego totalmente desprevenido em ambientes naturais, podendo reagir mesmo em emboscadas bem-sucedidas.",
        tipo: "Duradoura",
        alcance: "12 m",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 em Percepção de ambiente e natureza",
          "Detecção de presença de criaturas",
          "Reação mesmo em emboscadas naturais"
        ]
      },
      {
        nome: "Movimento Natural",
        descricao: "O corpo do Animalus se move como nasceu para se mover. Ao se deslocar: ignora penalidades leves de terreno (lama, raízes, neve, pedras), pode se mover até 3 metros adicionais sem provocar reações. Se usado para esquiva, recebe +1 Evasão contra um ataque.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 7,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Ignora penalidades leves de terreno",
          "Movimento adicional de 3 metros sem provocação",
          "+1 Evasão em esquiva"
        ]
      },
      {
        nome: "Forma Adaptativa",
        descricao: "O Animalus ajusta seu corpo ao perigo imediato. Ao ativar, escolhe um benefício de acordo com sua fisiologia: Pele endurecida (+2 dado adicional de defesa), Músculos tensos (+1 Precisão), Reflexos aguçados (+1 Evasão). Enquanto ativa, recebe resistência leve ao último tipo de dano sofrido.",
        tipo: "Sustentada",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 11,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe benefício: defesa, precisão ou evasão",
          "Resistência leve ao último dano sofrido",
          "Adaptação baseada em fisiologia"
        ]
      },
      {
        nome: "Linguagem da Natureza",
        descricao: "O Animalus emite sons, gestos ou feromônios que criaturas naturais reconhecem instintivamente. Pode acalmar animais hostis, alertar aliados animais sobre perigo ou obter uma informação simples do ambiente (predadores, rotas, ameaça recente). Não funciona em criaturas artificiais ou totalmente corrompidas.",
        tipo: "Imediata",
        alcance: "11 m",
        alvos: "No alcance",
        custo: 9,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Acalma animais hostis ou",
          "Alerta aliados sobre perigo ou",
          "Obtém informação simples do ambiente"
        ]
      }
    ]
  },
  {
    id: "homunculo",
    nome: "Homúnculo",
    raridade: "epico",
    descricao: "Os Homúnculos são seres artificiais criados por alquimistas, arcanistas e estudiosos que ousaram imitar o ato primordial da criação. Diferente de construtos comuns, eles não são simples ferramentas: cada Homúnculo nasce a partir de matéria viva, essência mágica e intenção consciente, o que lhes concede vontade própria, memória fragmentada e, em muitos casos, emoções reais. Embora seus corpos sejam moldados em laboratório ou círculos rituais, suas almas não são falsas. Elas surgem incompletas, instáveis ou emprestadas — ecos de algo que poderia ter sido humano, elfo ou algo além. Por isso, Homúnculos vivem em constante busca por identidade, tentando entender se são obra, erro ou evolução. Fisicamente, variam enormemente: alguns são quase indistinguíveis de humanos, outros exibem marcas alquímicas, runas sob a pele, membros artificiais ou olhos que jamais piscam. Eles não envelhecem como raças naturais e raramente adoecem, mas carregam o peso de saber que sua existência foi planejada, não nascida.",
    limiteAtributo: 150,
    imagem: "https://i.imgur.com/MIhOTAl.png",
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
        descricao: "O jogador escolhe um atributo ou perícia. Esse valor recebe +2 permanente. Além disso, entre campanhas ou descansos longos, o Homúnculo pode realocar um pequeno bônus secundário, representando ajustes físicos ou alquímicos.",
        bonus: [
          "Escolhe um atributo para receber +2 permanente",
          "Realoca bônus secundário entre campanhas",
          "Flexibilidade em ajustes físicos ou alquímicos"
        ]
      },
      {
        nome: "Protocolo da Redundância Vital",
        descricao: "Uma vez por combate, quando o Homúnculo sofreria dano crítico, condição grave ou falha fatal, ele pode reduzir drasticamente o efeito, ativando sistemas de reserva alquímica. Após o uso, sofre penalidade temporária até realizar manutenção adequada.",
        bonus: [
          "Ativa sistemas de reserva alquímica uma vez por combate",
          "Reduz drasticamente dano crítico ou falha fatal",
          "Penalidade temporária até manutenção"
        ]
      },
      {
        nome: "Protocolo da Consciência Emergente",
        descricao: "O Homúnculo recebe bônus em resistência mental, força de vontade e efeitos emocionais. Uma vez por cena, pode ignorar medo, controle ou confusão, agindo como se fosse puramente racional — ou puramente decidido.",
        bonus: [
          "Bônus em resistência mental e força de vontade",
          "Ignora medo, controle ou confusão uma vez por cena",
          "Age puramente racional ou decidido"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Corpo Sintético",
        descricao: "O corpo do Homúnculo não segue biologia comum. Recebe resistência leve a venenos, doenças e sangramento. Efeitos biológicos têm duração reduzida. Cura natural é menos eficiente, mas curas artificiais, alquímicas ou mágicas têm efeito ampliado. Não é imune à dor — apenas foi projetado para suportá-la.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Resistência leve a venenos, doenças e sangramento",
          "Duração reduzida de efeitos biológicos",
          "Curas alquímicas ampliadas"
        ]
      },
      {
        nome: "Núcleo Alquímico",
        descricao: "O Homúnculo ativa o núcleo que sustenta sua existência, alterando temporariamente sua composição interna. Escolha um efeito: +2 em Defesa, +2 em Precisão ou Regeneração leve de HP por turno. Ao final da duração, o corpo sofre instabilidade.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 9,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe: +2 Defesa, +2 Precisão ou Regeneração",
          "Instabilidade narrativa ao final"
        ]
      },
      {
        nome: "Reconfiguração Forçada",
        descricao: "O Homúnculo força uma adaptação emergencial. Remove uma condição negativa leve ou moderada. Converte essa instabilidade em vantagem: recebe +1 em uma ação relevante no próximo turno. Não pode ser usado contra efeitos divinos ou absolutos.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 15,
        recarga: "1 p/ Sessão",
        duracao: 0,
        dado: "0",
        bonus: [
          "Remove condição negativa leve ou moderada",
          "+1 em ação relevante no próximo turno",
          "Não funciona contra efeitos divinos"
        ]
      },
      {
        nome: "Auto-Reparo Emergencial",
        descricao: "Quando o Homúnculo sofre dano significativo ou entra em estado crítico, mecanismos alquímicos internos são ativados à força. Recupera HP moderado imediatamente. Ignora penalidades de ferimentos leves até o início do próximo turno. Remove efeitos de sangramento não mágico. Após o uso, o corpo entra em sobrecarga: no próximo turno, sofre –2 em todas as ações físicas.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 13,
        recarga: 6,
        duracao: 0,
        dado: "10d6+20",
        bonus: [
          "Recupera HP moderado imediatamente",
          "Ignora penalidades de ferimentos leves",
          "Remove sangramento não mágico",
          "-2 em ações físicas no próximo turno"
        ]
      },
      {
        nome: "Aprendizado Antinatural",
        descricao: "O Homúnculo aprende com erros de forma antinatural. Sempre que falhar em uma ação importante, recebe um bônus cumulativo pequeno ao repetir uma tentativa semelhante na cena. O bônus se dissipa ao ter sucesso ou ao fim da batalha.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Bônus cumulativo em tentativas semelhantes",
          "Se falhar, acumula +1 na próxima tentativa",
          "Dissipa ao sucesso ou fim da batalha"
        ]
      }
    ]
  },
  {
    id: "lukan",
    nome: "Lukan",
    raridade: "epico",
    descricao: "Os Lukans são uma raça criados pelos Dracólitos, moldados para servir como guardiões de Sultran, o Inferno, e das fronteiras onde a realidade ameaça ruir. À primeira vista, possuem uma aparência majoritariamente humanoide, marcada por traços infernais: chifres de formas variadas, olhos incandescentes, marcas naturais semelhantes a escamas e uma presença intimidadora que denuncia sua origem. Seus corpos são esculpidos para o conflito, resultado direto de uma criação voltada à guerra e à vigilância eterna. Apesar da estética infernal, a essência dos Lukans vai além da aparência. Em suas veias corre uma linhagem draconica latente, herdada diretamente de seus criadores, manifestando-se como força excepcional, resistência incomum e um potencial de combate. Treinados desde a origem para a batalha absoluta.",
    limiteAtributo: 130,
    imagem: "https://i.imgur.com/RgmZnIM.png",
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
        descricao: "O Lukan recebe +2 em rolagens de ataque e intimidação. Na primeira rodada de combate, pode impor pressão absoluta a capacidade de reação dos inimigos próximos por 3 turnos.",
        bonus: [
          "+2 em rolagens de ataque e intimidação",
          "Pressão absoluta nos inimigos na primeira rodada",
          "Reduz reação de inimigos próximos por 3 turnos"
        ]
      },
      {
        nome: "Código da Resistência",
        descricao: "O Lukan recebe redução passiva de dano e bônus contra efeitos de empurrão, medo ou quebra de postura. Uma vez por cena, pode permanecer em pé mesmo ao sofrer um golpe que normalmente o derrubaria. Enquanto houver chão sob seus pés, ele não cai.",
        bonus: [
          "Redução passiva de dano físico",
          "Bônus contra empurrão, medo e quebra de postura",
          "Permanece em pé uma vez por cena"
        ]
      },
      {
        nome: "Código do Despertar Draconico",
        descricao: "O jogador define um traço draconico latente (fogo, energia, força ancestral, presença aterradora). Uma vez por cena, o Lukan pode despertar esse traço, recebendo bônus significativos em combate por um curto período, com custo físico ou narrativo após o uso.",
        bonus: [
          "Define traço draconico latente pessoalmente",
          "Desperta uma vez por cena",
          "Bônus significativos em combate com custo narrativo"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Linhagem Dracônica Latente",
        descricao: "O sangue dos Dracólitos corre adormecido no corpo do Lukan. +5 em FOR e VIT, +1 Resistência Física. Testes contra medo, intimidação ou pressão sobrenatural recebem +2.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+5 em Força e Vitalidade",
          "+1 Resistência Física",
          "+2 contra medo, intimidação e pressão sobrenatural"
        ]
      },
      {
        nome: "Forma Dracônica Reprimida",
        descricao: "Por tradição e controle cultural, a verdadeira forma do Lukan permanece selada. Enquanto não transformado, o Lukan recebe –30% no custo de todas as Arts. Efeitos que drenam mana causam –20% a menos. Habilidades de transformação ficam bloqueadas até liberar o selo.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "-30% custo de todas as Arts",
          "Drenagem de mana reduzida em 20%",
          "Transformações bloqueadas"
        ]
      },
      {
        nome: "Despertar Dracônico",
        descricao: "Utilizando toda sua mana como combustível, o Lukan libera sua forma verdadeira, há muito reprimida. +7 em Ataque, +3 Precisão, +2 Evasão. +2 em todas as ações ofensivas. Pode voar em deslocamentos médios. Imunidade a medo. Ao fim do efeito, o Lukan fica Exausto por 1 turno.",
        tipo: "Sustentada",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 15,
        recarga: "1 p/ Sessão",
        duracao: 0,
        dado: "0",
        bonus: [
          "+7 Ataque, +3 Precisão, +2 Evasão",
          "+2 em ações ofensivas",
          "Voo em deslocamentos médios",
          "Imunidade a medo"
        ]
      },
      {
        nome: "Corpo Forjado para a Guerra",
        descricao: "Criados para vigiar Sultran, os Lukans não quebram fácil. Dano físico recebido sofre redução de 2dn. Ignora penalidades por dor leve ou ferimentos superficiais. Enquanto abaixo de 50% de HP, recebe +1 em Tolerância.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Dano físico reduzido em 2dn",
          "Ignora penalidades de dor leve",
          "+1 Tolerância abaixo de 50% HP"
        ]
      }
    ]
  },
  {
    id: "fada",
    nome: "Fada",
    raridade: "epico",
    descricao: "As Fadas são seres nascidos da interseção entre o mundo físico e os planos sutis da realidade. Seu corpo não é inteiramente material, nem puramente espiritual, o que as torna profundamente ligadas a forças invisíveis como emoções, desejos, memórias e promessas. Essa natureza liminar faz com que o tempo, a moral e a lógica sejam percebidos por elas de forma diferente das demais raças. Embora geralmente pequenas em estatura, as Fadas jamais devem ser subestimadas. Sua longevidade, astúcia e domínio sobre energias sutis as tornam entidades imprevisíveis, capazes de alterar eventos com gestos mínimos, palavras bem colocadas ou acordos que nunca deveriam ser aceitos. Para uma Fada, poder não se mede em força bruta, mas em influência, significado e consequência.",
    limiteAtributo: 150,
    imagem: "https://i.imgur.com/JGRwGxB.png",
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
        descricao: "A Fada recebe +2 em ações sociais, manipulação, persuasão ou engano. Uma vez por cena, pode impor hesitação a um alvo consciente, reduzindo sua próxima ação ou atrasando sua reação.",
        bonus: [
          "+2 em ações sociais e persuasão",
          "Hesitação no alvo uma vez por cena",
          "Reduz próxima ação ou atrasa reação"
        ]
      },
      {
        nome: "Véu da Transição",
        descricao: "A Fada pode ignorar obstáculos leves, atravessar espaços estreitos ou alterar brevemente sua posição como se estivesse parcialmente fora do plano físico. Uma vez por cena, pode redefinir seu posicionamento no campo de batalha ou em uma cena narrativa.",
        bonus: [
          "Ignora obstáculos leves",
          "Atravessa espaços estreitos",
          "Redefine posicionamento uma vez por cena"
        ]
      },
      {
        nome: "Véu do Pacto",
        descricao: "O jogador define um tipo de acordo ou promessa (proteção, segredo, troca, favor). Sempre que um pacto válido estiver ativo, a Fada recebe +3 nas rolagens relacionadas àquele acordo. Quebrar um pacto gera consequências narrativas sérias.",
        bonus: [
          "+3 em rolagens relacionadas ao pacto",
          "Define tipo de acordo pessoalmente",
          "Consequências narrativas por quebra"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Corpo Liminal",
        descricao: "O corpo da Fada existe parcialmente fora do plano físico. Ataques puramente físicos causam dano reduzido (+50% Defesa). A Fada pode atravessar espaços estreitos, frestas e obstáculos leves. Efeitos que afetam espírito, emoção ou mente têm maior eficácia, causando dobro de dano (positivo ou negativo).",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+50% Defesa contra dano físico",
          "Atravessa obstáculos leves",
          "Dobro de dano de efeitos espirituais/emocionais"
        ]
      },
      {
        nome: "Encanto Sutil",
        descricao: "A Fada projeta emoções, desejos ou lembranças suavemente na mente do alvo. Escolha um efeito: Desatenção (penalidade em ações ofensivas), Fascínio (alvo evita atacar a Fada), ou Dúvida (alvo hesita em próxima ação). Criaturas sem mente ou emoções são imunes.",
        tipo: "Imediata",
        alcance: "9 m",
        alvos: "1",
        custo: 9,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe efeito: desatenção, fascínio ou dúvida",
          "Penalidade em ações do alvo",
          "Imune a criaturas sem emoção"
        ]
      },
      {
        nome: "Promessa Vinculante",
        descricao: "A Fada sela uma promessa verbal simples com outra criatura. Enquanto a promessa for mantida, ambos recebem um bônus leve narrativo. Se o alvo quebrar a promessa, sofre uma penalidade significativa. A Fada também é afetada se quebrar o acordo.",
        tipo: "Imediata",
        alcance: "5 m",
        alvos: "1",
        custo: 15,
        recarga: "1 p/ Sessão",
        duracao: 0,
        dado: "0",
        bonus: [
          "Sela promessa verbal simples",
          "Bônus narrativo enquanto mantida",
          "Penalidade por quebra de promessa"
        ]
      },
      {
        nome: "Eco das Emoções",
        descricao: "A Fada percebe emoções residuais no ambiente. Pode identificar emoções fortes recentes (medo, ódio, amor, desespero). Recebe +3 em ações sociais ou mágicas quando age em sintonia com a emoção dominante do local. Ambientes emocionalmente carregados fortalecem suas Arts narrativamente.",
        tipo: "Imediata",
        alcance: "11 m",
        alvos: "No alcance",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Identifica emoções recentes no ambiente",
          "+3 em ações sociais ou mágicas em sintonia",
          "Fortalecimento narrativo em locais emocionados"
        ]
      },
      {
        nome: "Agilidade da Fada",
        descricao: "O corpo leve e a ligação parcial com planos sutis permitem que a Fada se mova com graça antinatural. Recebe +3 em Esquiva e 20% Prontidão. Movimenta-se por terrenos difíceis sem penalidades. Pode realizar pequenos deslocamentos aéreos ou saltos impossíveis como parte do movimento.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 em Esquiva",
          "+20% Prontidão",
          "Terreno difícil sem penalidades",
          "Deslocamentos aéreos e saltos impossíveis"
        ]
      }
    ]
  },
  {
    id: "worgen",
    nome: "Worgen",
    raridade: "epico",
    descricao: "Os Worgen surgiram na Era das Trevas, um período esquecido em que deuses ainda caminhavam entre mortais e a magia era moldada sem medo das consequências. Temendo entidades antigas que escapavam à compreensão divina, magos humanos realizaram um ritual proibido: fundiram um Espírito Antigo predatório a corpos mortais, criando guardiões capazes de caçar aquilo que nem deuses ousavam enfrentar. O resultado foram humanos alterados, dotados de intelecto e percepção élficos, mas ligados à magia de sangue, pois o pacto original jamais poderia ser sustentado sem um preço. Em suas veias corre um sangue vivo, pulsante, capaz de se fortalecer, reagir e se adaptar ao conflito. As presas não são apenas traços físicos — são condutores do pacto, símbolos de que cada Worgen carrega dentro de si uma fome ancestral. Com o fim da Era das Trevas, os rituais foram selados e os deuses se afastaram. Os Worgen sobreviveram como uma raça amaldiçoada e poderosa, dividida entre controle e instinto, razão e ferocidade. Eles não são bestas, mas jamais deixam o mundo esquecer que foram criados para caçar o impossível.",
    limiteAtributo: 150,
    imagem: "https://i.imgur.com/IelhWY0.png",
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
        descricao: "Sempre que o Worgen causar dano direto em combate, ele pode recuperar vitalidade ou reduzir o custo de uma habilidade baseada em sangue. Se o combate se prolongar, ele recebe bônus progressivo em força ou agressividade, mas perde sutileza.",
        bonus: [
          "Recupera vitalidade ao causar dano",
          "Reduz custo de habilidades de sangue",
          "Bônus progressivo em combates longos"
        ]
      },
      {
        nome: "Pacto da Mente Predatória",
        descricao: "O Worgen recebe +2 em percepção, estratégia ou leitura de inimigos. Uma vez por cena, pode antecipar uma ação inimiga, ganhando vantagem defensiva ou ofensiva imediata.",
        bonus: [
          "+2 em Percepção e leitura de inimigos",
          "Antecipa ação inimiga uma vez por cena",
          "Vantagem defensiva ou ofensiva"
        ]
      },
      {
        nome: "Pacto do Legado Profano",
        descricao: "O Worgen carrega fragmentos ativos do ritual ancestral em seu sangue. Uma vez por cena, ele pode invocar um eco do Espírito Antigo, fortalecendo uma ação ofensiva ou defensiva com bônus significativo ou um efeito especial. Após o uso, o Worgen sofre recuo ritual: penalidade leve temporária.",
        bonus: [
          "Invoca eco do Espírito Antigo uma vez por cena",
          "Rompe defesa, atravessa resistência ou ignora medo",
          "Penalidade leve temporária após uso"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Fome Carmesim",
        descricao: "Ao causar dano corpo a corpo, o Worgen pode ativar esta Art para absorver vitalidade do alvo, recuperando HP equivalente a uma fração do dano causado. Se o alvo estiver sangrando, inconsciente ou abaixo de 50% de HP, a recuperação é ligeiramente maior.",
        tipo: "Imediata",
        alcance: "CaC",
        alvos: "1",
        custo: 7,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Absorve vitalidade do alvo",
          "Recuperação maior se alvo enfraquecido",
          "Baseado em fração do dano causado"
        ]
      },
      {
        nome: "Instinto Predatório",
        descricao: "O Worgen percebe fraqueza como um cheiro no ar. Sempre que houver uma criatura ferida ou debilitada a até 9 metros, o personagem recebe: +1 em Percepção e rastreio, +1 Precisão contra alvos abaixo de 50% de HP.",
        tipo: "Sustentada",
        alcance: "9 m",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 em Percepção de alvos feridos",
          "+1 Precisão contra alvos enfraquecidos",
          "Detecta presença de fraqueza"
        ]
      },
      {
        nome: "Metamorfose Bestial",
        descricao: "O Worgen libera parcialmente sua forma amaldiçoada. Ataques desarmados passam a causar dano equivalente a arma média (3d8). Recebe +1 dado de dano e +1 dado de defesa. Sofre –1 em Precisão com armas que exigem técnica fina. Ao encerrar, o personagem fica ofegante.",
        tipo: "Sustentada",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 11,
        recarga: 7,
        duracao: 0,
        dado: "0",
        bonus: [
          "Ataques desarmados causam 3d8",
          "+1 dado de dano e defesa",
          "-1 em Precisão com armas finas"
        ]
      },
      {
        nome: "Regeneração Profana",
        descricao: "Ferimentos se fecham de forma antinatural. No início do turno seguinte à ativação, o Worgen recupera uma quantidade moderada de HP (6d6+12). Ignora penalidades de ferimentos leves durante a duração. Se usado sob fogo sagrado, a cura é reduzida pela metade.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 11,
        recarga: 3,
        duracao: 0,
        dado: "6d6+12",
        bonus: [
          "Recupera HP moderado no turno seguinte",
          "Ignora penalidades de ferimentos leves",
          "Reduzido pela metade contra fogo sagrado"
        ]
      },
      {
        nome: "Fome Worgen",
        descricao: "O personagem possui um atributo especial chamado Fome, variando de 0 a 100, iniciando em 50. Ficar longos períodos sem se alimentar aumenta a Fome. Alimentar-se de uma criatura viva reduz a Fome e recupera HP. Criaturas sem sangue não reduzem Fome nem curam HP.",
        tipo: "Sustentada",
        alcance: "CaC",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Atributo Fome de 0 a 100",
          "Alimentação recupera HP e reduz Fome",
          "Sem alimentação aumenta Fome progressivamente"
        ]
      }
    ]
  },
  {
    id: "murkal",
    nome: "Mur'kal",
    raridade: "epico",
    descricao: "Os Mur’kal são uma raça anfíbia tribal, surgida em costas, pântanos e ruínas submersas. Baixos, de pele escamosa e olhos salientes, emitem sons guturais que soam como grasnados — mas isso é só a camada externa da linguagem. Eles não são burros. São alienígenas ao pensamento terrestre. Cultura e Sociedade A sociedade Mur’kal é baseada em Cardumes-Tribo. Cada grupo é guiado por: um Cantor de Maré (líder espiritual) um Predador Ancião (líder de guerra) Eles acreditam que o mundo terrestre é uma fase temporária do oceano. Tudo, cedo ou tarde, será água novamente. Objetos brilhantes não são tesouros. São iscas sagradas.",
    limiteAtributo: 100,
    imagem: "https://i.imgur.com/FAwwfMj.png",
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
        descricao: "Mur'kal lutam melhor em grupo. Quanto mais aliados próximos, mais coordenadas e agressivas se tornam suas ações. Para cada aliado adjacente (máx. 2), recebe +1 Precisão ou +1 Evasão. Em ações combinadas, o Mur'kal pode agir logo após um aliado, sem custo adicional.",
        bonus: [
          "+1 Precisão ou Evasão por aliado adjacente",
          "Máximo de +2 com dois aliados",
          "Ação livre após aliado em combinação"
        ]
      },
      {
        nome: "Anfíbios Natos",
        descricao: "Movem-se com extrema facilidade em ambientes aquáticos ou alagados, enxergando e lutando quase tão bem quanto em terra. Ignora penalidades de combate e movimento em água. Recebe +2 Evasão contra ataques à distância enquanto submerso.",
        bonus: [
          "Ignora penalidades de água",
          "Visão e combate normais na água",
          "+2 Evasão contra distância submerso"
        ]
      },
      {
        nome: "Linguagem da Maré",
        descricao: "Sua comunicação mistura som, ritmo e gesto. Mur'kal conseguem transmitir intenções complexas rapidamente entre si, mas são difíceis de ler por outras raças. Comunicação tática entre Mur'kal ocorre como ação livre. Inimigos não Mur'kal sofrem –3 Reação ao tentar prever ações do grupo.",
        bonus: [
          "Comunicação tática como ação livre",
          "Inimigos sofrem –3 ao prever ações",
          "Linguagem incompreensível para outros"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Ataque Coordenado",
        descricao: "Se houver um aliado adjacente, o ataque causa +4d8 de dano adicional.",
        tipo: "Imediata",
        alcance: "CaC",
        alvos: "1",
        custo: 13,
        recarga: 2,
        duracao: 0,
        dado: "4d8",
        bonus: [
          "+4d8 dano adicional com aliado adjacente"
        ]
      },
      {
        nome: "Maré de Guerra",
        descricao: "Enquanto ativa, aliados recebem +1 Precisão e ignoram parcialmente penalidades de terreno aquático.",
        tipo: "Sustentada",
        alcance: "8 m",
        alvos: "1 a 4",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 Precisão para aliados",
          "Ignora penalidades de terreno aquático",
          "Alcance de até 4 alvos"
        ]
      },
      {
        nome: "Grito Abissal",
        descricao: "Inimigos sofrem Medo e –2 Precisão.",
        tipo: "Imediata",
        alcance: "6 m",
        alvos: "No alcance",
        custo: 9,
        recarga: 3,
        duracao: 2,
        dado: "0",
        bonus: [
          "Medo nos inimigos",
          "-2 Precisão dos inimigos",
          "Duração de 2 turnos"
        ]
      },
      {
        nome: "Instinto de Cardume Avançado",
        descricao: "Para cada aliado adjacente, o Mur'kal recebe +1 Precisão (máx. +3).",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 Precisão por aliado adjacente",
          "Máximo de +3 com três aliados",
          "Permanente enquanto aliados próximos"
        ]
      },
      {
        nome: "Caçador das Profundezas",
        descricao: "Move-se por água ou terreno difícil e ataca. Ignora Evasão baseada em distância e causa 6d8 de dano.",
        tipo: "Imediata",
        alcance: "Movimentação",
        alvos: "1",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "6d8",
        bonus: [
          "Movimento através de qualquer terreno",
          "Ignora Evasão baseada em distância",
          "Dano aumentado em ambiente aquático"
        ]
      }
    ]
  },
  {
    id: "espirito",
    nome: "Espírito",
    raridade: "lendario",
    descricao: "Os Espíritos são entidades formadas a partir de emoções positivas intensas e da convergência de elementos primordiais do mundo. Eles não possuem uma forma fixa: seu corpo se molda conforme o sentimento que os originou e o elemento ao qual estão ligados. Um Espírito de esperança pode parecer luz em movimento; um de serenidade pode assumir a forma de água calma ou vento suave. Diferente das raças físicas, os Espíritos não veem o mundo como território, mas como fluxo. Eles existem enquanto sua emoção-fonte permanece viva e tendem a se transformar quando o ambiente emocional ou elemental ao redor muda, tornando-os seres mutáveis, raros e profundamente simbólicos.",
    limiteAtributo: 150,
    imagem: "https://i.imgur.com/5FGgXkr.png",
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
        descricao: "Enquanto estiver agindo de forma coerente com sua emoção-fonte, o Espírito recebe +2 em todas as rolagens relacionadas a suporte, proteção ou restauração. Uma vez por cena, pode anular um efeito negativo leve em um aliado ao estabilizar o ambiente emocional da cena.",
        bonus: [
          "+2 em ações de suporte, proteção ou restauração",
          "Anula efeito negativo leve em aliado uma vez por cena",
          "Estabiliza ambiente emocional"
        ]
      },
      {
        nome: "Estado da Fluidez",
        descricao: "O Espírito pode alterar parcialmente sua forma para se adaptar à situação (corpo etéreo, expansão elemental, contornos mutáveis). Recebe bônus em movimentação, evasão ou ações criativas que envolvam ambiente e elemento. Uma vez por cena, pode ignorar um obstáculo físico ou condição restritiva.",
        bonus: [
          "Altera forma parcialmente",
          "Bônus em movimentação e evasão",
          "Ignora obstáculo físico uma vez por cena"
        ]
      },
      {
        nome: "Estado da Inspiração",
        descricao: "Sempre que o Espírito inspirar esperança, coragem ou calma em aliados, concede a eles bônus temporários em suas próximas ações. Uma vez por cena, pode elevar uma falha aliada à sucesso parcial, desde que a ação esteja alinhada a um propósito positivo.",
        bonus: [
          "Concede bônus a aliados inspirados",
          "Eleva falha a sucesso parcial uma vez por cena",
          "Propósitos positivos amplificados"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Corpo Emocional",
        descricao: "O corpo do Espírito não é fixo — ele reage ao estado emocional dominante. Recebe +3 Resistência Mágica, sofre -50% de dano físico direto. Efeitos emocionais positivos têm efeito ampliado no Espírito.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 Resistência Mágica",
          "-50% dano físico direto",
          "Efeitos positivos ampliados"
        ]
      },
      {
        nome: "Forma Fluida",
        descricao: "O Espírito desfaz parcialmente sua forma, tornando-se fluxo elemental. Recebe +5 em Esquiva, ignora agarrões e empurrões físicos. Pode atravessar espaços estreitos ou parcialmente sólidos.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 13,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "+5 em Esquiva",
          "Ignora agarrões e empurrões",
          "Atravessa espaços estreitos"
        ]
      },
      {
        nome: "Ressonância Positiva",
        descricao: "A presença do Espírito amplifica emoções construtivas. Aliados recebem +2 em testes defensivos, remove ou reduz efeitos de medo leve, confusão emocional ou hesitação. Não funciona em criaturas sem emoções.",
        tipo: "Imediata",
        alcance: "5 m",
        alvos: "No alcance",
        custo: 15,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 Defesa para aliados",
          "Remove medo leve ou confusão",
          "Amplifica emoções construtivas"
        ]
      },
      {
        nome: "Existência em Fluxo",
        descricao: "O Espírito se alinha totalmente ao fluxo emocional do ambiente. Pode alterar sua aparência para refletir a emoção predominante da cena. Recebe +3 em todas as ações não ofensivas por 1 cena.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 15,
        recarga: "1 p/ Combate",
        duracao: 0,
        dado: "0",
        bonus: [
          "Altera aparência à emoção da cena",
          "+3 em ações não ofensivas",
          "Vantagens narrativas pela emoção"
        ]
      },
      {
        nome: "Manifestação Elemental",
        descricao: "O Espírito canaliza o elemento ao qual está ligado (luz, água, vento, calor suave, etc.). Causa 12 de dano elemental leve ou aplica um efeito narrativo coerente.",
        tipo: "Imediata",
        alcance: "7 m",
        alvos: "No alcance",
        custo: 17,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Dano elemental leve",
          "Efeito narrativo coerente",
          "Escolhe entre dano ou efeito"
        ]
      }
    ]
  },
  {
    id: "demonoid",
    nome: "Demonoid",
    raridade: "lendario",
    descricao: "Os Demonoids são uma raça nativa de Sultran, nascidos da convergência entre energia caótica, desejo, dor e sobrevivência extrema. Diferente de outras raças infernais, os Demonoids evoluem ao abandonar a monstruosidade. Quanto mais humanoide se torna, sua forma mais estável, inteligente e poderosa a criatura se torna. A forma inicial de um Demonoid é bestial, instintiva e grotesca. No entanto, à medida que absorve energia, experiências ou outros seres infernais, sua estrutura se reorganiza, aproximando-se de um corpo humanoide. Esse processo não é apenas físico — é mental e espiritual. Tornar-se “mais humano” significa adquirir consciência, estratégia e controle absoluto do próprio poder. No Inferno, a aparência não engana: quanto mais humano um Demonoid parece, mais perigoso ele é.",
    limiteAtributo: 130,
    imagem: "https://i.imgur.com/aX1Ifl8.png",
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
        descricao: "Sempre que derrotar inimigos relevantes, o Demonoid pode absorver fragmentos de poder, recebendo bônus temporários ou evoluções graduais a critério do sistema.",
        bonus: [
          "Absorve poder de inimigos derrotados",
          "Bônus temporários progressivos",
          "Evolução gradual permanente"
        ]
      },
      {
        nome: "Vetor da Forma",
        descricao: "O Demonoid pode alterar parcialmente sua forma para combate, defesa ou mobilidade. Quanto mais humanoide for sua forma base, maior o controle e menor o custo dessas alterações.",
        bonus: [
          "Altera forma para combate ou defesa",
          "Controle baseado em humanidade",
          "Custos reduzidos com mais humanoidade"
        ]
      },
      {
        nome: "Vetor da Consciência",
        descricao: "O Demonoid recebe bônus em ações táticas, intimidação e uso consciente de poder. Uma vez por cena, pode antecipar uma ação inimiga, reduzindo seu impacto ou anulando vantagens.",
        bonus: [
          "+2 em ações táticas e intimidação",
          "Antecipa ação inimiga uma vez por cena",
          "Reduz impacto ou anula vantagens"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Forma Bestial Inicial",
        descricao: "O Demonoid nasce como uma criatura instintiva e grotesca. +10 FOR, ataques corpo a corpo causam +9 de dano. Sofre –3 em testes sociais e estratégicos. Essa Art representa o estado primitivo da raça.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+10 Força",
          "+9 dano em ataques corpo a corpo",
          "-3 em testes sociais"
        ]
      },
      {
        nome: "Humanização Progressiva",
        descricao: "Quanto mais o Demonoid se aproxima de uma forma humanoide, mais perigoso ele se torna. Recebe Marcas de Humanização ao absorver poder. A cada 3 Marcas: +1 INT ou PER, reduz penalidades sociais.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Ganha Marcas de Humanização",
          "+1 INT ou PER a cada 3 Marcas",
          "Reduz penalidades sociais progressivamente"
        ]
      },
      {
        nome: "Metabolismo do Caos",
        descricao: "O corpo do Demonoid recicla dor e energia infernal. Sempre que sofre dano, recupera 1d12+4 de Energia. Efeitos caóticos causam –50% de dano. Não funciona contra dano sagrado.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Recupera Energia ao sofrer dano",
          "-50% dano de efeitos caóticos",
          "Conversão de dano em poder"
        ]
      },
      {
        nome: "Aparência do Perigo",
        descricao: "No Inferno, a aparência é um aviso. Quanto mais humanoide o Demonoid se apresenta, maior o respeito gerado. Recebe vantagens narrativas em intimidação ou domínio territorial.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Vantagens em intimidação",
          "Reconhecimento como ameaça",
          "Domínio territorial narrativo"
        ]
      },
      {
        nome: "Olhar do Demônio Civilizado",
        descricao: "Um Demonoid consciente não ameaça — ele calcula. O alvo sofre –3 em ações defensivas, o Demonoid recebe +3 em ações contra esse alvo. Criaturas infernais inferiores podem hesitar.",
        tipo: "Imediata",
        alcance: "7 m",
        alvos: "1",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "-3 Defesa do alvo",
          "+3 Ataque do Demonoid",
          "Hesitação em criaturas inferiores"
        ]
      }
    ]
  },
  {
    id: "drakhen",
    nome: "Drakhen",
    raridade: "lendario",
    descricao: "Os Drakhen são uma raça ancestral cuja existência se desenvolve em dois estágios naturais, não por linhagem, mas por acúmulo de era, poder e significado. Todo dragão nasce inferior. Pouquíssimos sobrevivem tempo suficiente para deixar de ser. Não é título. É metamorfose.",
    limiteAtributo: 200,
    imagem: "https://i.imgur.com/36eTUCw.png",
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
        descricao: "A simples existência de um Drakhen altera o ambiente: animais fogem, o clima reage, e criaturas menores sentem instintivamente sua autoridade. Inimigos de nível inferior sofrem –3 Precisão no primeiro ataque da cena. Testes de intimidação recebem +3.",
        bonus: [
          "-3 Precisão inimigos inferiores",
          "+3 em intimidação",
          "Alteração ambiental narrativa"
        ]
      },
      {
        nome: "Memória Ancestral",
        descricao: "Drakhen carregam fragmentos de lembranças raciais antigas. Mesmo jovens, sabem coisas que nunca viveram — mapas, nomes, erros passados. 1 vez por cena, pode receber +3 em um teste de conhecimento. Contra criaturas antigas, recebe +2 Precisão no primeiro ataque.",
        bonus: [
          "+3 em teste de conhecimento uma vez por cena",
          "+2 Precisão contra criaturas antigas",
          "Memória de ancestrais"
        ]
      },
      {
        nome: "Ascensão Potencial",
        descricao: "Todo Drakhen carrega a possibilidade de transcender. Ao atingir metade dos PV, recebe +1 Precisão e +1 Evasão por 1 rodada (Max +5). Arts de Domínio III+ custam –30% Energia nesse estado.",
        bonus: [
          "+1 Precisão e Evasão abaixo de 50% HP",
          "Máximo de +5 por rodada",
          "-30% custo de Arts avançadas"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Rugido da Linhagem",
        descricao: "Inimigos sofrem –3 Precisão e debuff condicional de Moral.",
        tipo: "Imediata",
        alcance: "8 m",
        alvos: "No alcance",
        custo: 9,
        recarga: 3,
        duracao: 1,
        dado: "0",
        bonus: [
          "-3 Precisão em inimigos",
          "Debuff de Moral",
          "Efeito por 1 turno"
        ]
      },
      {
        nome: "Escamas Reativas",
        descricao: "A cada 5 pontos na defesa base Drakhen adiciona 1 dado adicional em sua defesa durante uso da art.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 7,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 dado por 5 pontos de defesa base",
          "Escamas reativas adaptáveis",
          "Defesa progressiva"
        ]
      },
      {
        nome: "Sangue Ancestral",
        descricao: "Abaixo de 50% PV: +3 Precisão. Abaixo de 25% PV: +3 Evasão adicional.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 Precisão abaixo de 50% HP",
          "+3 Evasão abaixo de 25% HP",
          "Poder crescente na adversidade"
        ]
      },
      {
        nome: "Memória Elemental",
        descricao: "Libera fogo, gelo ou raio. Causa 6d12 de dano elemental, ignorando resistência comum.",
        tipo: "Imediata",
        alcance: "6 m",
        alvos: "No alcance",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "6d12",
        bonus: [
          "Escolhe elemento: fogo, gelo ou raio",
          "Ignora resistência comum",
          "Dano elemental puro"
        ]
      },
      {
        nome: "Limiar da Ascensão",
        descricao: "O Drakhen manifesta sua herança superior. Recebe +1 Precisão, +1 Evasão e ataques causam +3 dados de dano elemental adicional.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 16,
        recarga: "1 p/ Sessão",
        duracao: 3,
        dado: "0",
        bonus: [
          "+1 Precisão e Evasão",
          "+3 dados de dano elemental",
          "Duração de 3 rodadas"
        ]
      }
    ]
  },
  {
    id: "dracolito",
    nome: "Dracólito",
    raridade: "mitico",
    descricao: "Os Dracólitos são Espíritos elevados ao mais alto grau de afinidade elemental. Desde o início dos tempos, eles surgem quando um Espírito alcança perfeita ressonância com seu elemento natural, tornando-se não apenas um usuário desse elemento, mas sua encarnação consciente. Cada elemento primordial do mundo possui um único Dracólitos ativo, e sua existência mantém o equilíbrio e a estabilidade daquela força na realidade. Assim como os Espíritos, os dracólitos não possuem uma forma fixa. Sua aparência é fluida e simbólica, moldada pelo elemento que representam e pelo estado do mundo ao seu redor. Um Dracólitos do Fogo pode parecer uma silhueta viva de chamas conscientes; um da Água, uma entidade em constante fluxo; um do Vento, uma presença quase invisível em movimento eterno. Eles não “controlam” o elemento — eles são o elemento, dotado de vontade, memória e propósito. A sucessão dos dracólitos ocorre por meio de um ritual ancestral de transmissão de poder, no qual um Dracólitos veterano treina e prepara seu sucessor por eras, até que a autoridade elemental seja transferida. Caso um Dracólitos seja destruído sem que a sucessão seja concluída, o elemento correspondente entra em desordem, tornando-se instável e afetando profundamente todos os dracólitos irmãos ligados a elementos correlatos.",
    limiteAtributo: 200,
    imagem: "https://i.imgur.com/eCiyC7m.png",
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
        descricao: "Enquanto o elemento estiver estável no mundo, o Dracólito recebe bônus passivos constantes (defesa, regeneração ou controle ambiental). Pode, uma vez por cena, suprimir instabilidades elementais ou mitigar catástrofes causadas por desequilíbrio.",
        bonus: [
          "Bônus passivo por estabilidade elemental",
          "Suprime instabilidades uma vez por cena",
          "Controle ambiental narrativo"
        ]
      },
      {
        nome: "Estado da Transmissão",
        descricao: "O Dracólito pode investir fragmentos de sua autoridade em discípulos, aliados ou rituais, concedendo poderes temporários ou preparando um sucessor.",
        bonus: [
          "Transmite poder a aliados",
          "Prepara sucessores",
          "Investimento de autoridade elemental"
        ]
      },
      {
        nome: "Ruptura Elemental",
        descricao: "Se um Dracólito for destruído sem que a transmissão seja concluída, o elemento correspondente entra em estado de desordem: fenômenos extremos surgem, a magia se torna instável.",
        bonus: [
          "Consequência de destruição sem sucessão",
          "Desordem elemental narrativa",
          "Efeito cósmico"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Encarnação Elemental",
        descricao: "O Dracólito não manipula o elemento — ele existe como ele. Define 1 Elemento Primordial. Imunidade parcial ao próprio elemento, +3 Resistência Mística. Testes ligados ao elemento recebem +3.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe elemento primordial",
          "Imunidade ao próprio elemento",
          "+3 Resistência Mística e Testes"
        ]
      },
      {
        nome: "Forma Simbólica",
        descricao: "A forma do Dracólito é fluida e responde ao estado do mundo. Pode alterar aparência de forma simbólica. Recebe vantagens narrativas em ambientes alinhados ao elemento.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Altera forma simbolicamente",
          "Vantagens em ambientes alinhados",
          "Reconhecimento instintivo"
        ]
      },
      {
        nome: "Ressonância Absoluta",
        descricao: "A presença do Dracólito impõe o ritmo natural do elemento. Criaturas alinhadas recebem +2, criaturas opostas sofrem –3. Ambientes instáveis se reorganizam temporariamente.",
        tipo: "Imediata",
        alcance: "7 m",
        alvos: "No alcance",
        custo: 15,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 para criaturas alinhadas",
          "-3 para criaturas opostas",
          "Reorganização ambiental"
        ]
      },
      {
        nome: "Sucessão Ancestral",
        descricao: "O Dracólito carrega a responsabilidade da continuidade. Pode treinar ou preparar um sucessor. Compartilha fragmentos de memória e consciência elemental.",
        tipo: "Imediata",
        alcance: "CaC",
        alvos: "1",
        custo: "100% EnR",
        recarga: 1,
        duracao: 0,
        dado: "0",
        bonus: [
          "Treina sucessor",
          "Compartilha poder elemental",
          "Garante continuidade"
        ]
      },
      {
        nome: "Autoridade Elemental",
        descricao: "Enquanto existir, o Dracólito sustenta o equilíbrio do elemento. Dano recebido sofre –12. Tentativas de selar ou corromper o elemento sofrem penalidade. Recebe +2 em todas as defesas.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "-12 dano recebido",
          "-5 selagem/corrupção elemental",
          "+2 todas as defesas"
        ]
      },
      {
        nome: "Manifestação Primordial",
        descricao: "O Dracólito manifesta uma ação direta do elemento (dano contínuo, empurrão, cura, deslocamento).",
        tipo: "Imediata",
        alcance: "5 m",
        alvos: "1",
        custo: 17,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe efeito elemental",
          "Manifesto direto do elemento",
          "Efeito coerente com tipo"
        ]
      }
    ]
  },
  {
    id: "morvak",
    nome: "Morvak",
    raridade: "mitico",
    descricao: "Os Morvak são entidades nascidas do medo do desconhecido, do terror primordial que surge quando a realidade falha em oferecer respostas. Eles não são criados, invocados ou corrompidos — eles emergem sempre que o mundo encara algo que não consegue compreender.Opostos diretos dos Espíritos e dos Dracolitos, os Morvak não representam emoções positivas nem elementos ordenados. Eles personificam o vazio c dúvida, pânico, presságio e a sensação de que algo está errado antes mesmo de acontecer. Assim como os Espíritos, cada Morvak possui uma aparência única e instável, moldada pelo tipo de medo que o originou. Alguns assumem formas distorcidas e fragmentadas, outros parecem sombras com intenção, reflexos errados da realidade ou figuras quase humanoides que causam desconforto apenas por existirem. Onde um Morvak caminha, o mundo não se rompe — ele hesita.",
    limiteAtributo: 200,
    imagem: "https://i.imgur.com/ADeZ9Gn.png",
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
        descricao: "O Morvak recebe +3 em ações de intimidação, percepção e antecipação. Uma vez por cena, pode impor desvantagem ou penalidade leve a um inimigo ao fazê-lo hesitar.",
        bonus: [
          "+3 em intimidação e percepção",
          "Impõe desvantagem uma vez por cena",
          "Hesitação do inimigo"
        ]
      },
      {
        nome: "Núcleo da Distorção",
        descricao: "O Morvak pode alterar sutilmente sua forma ou presença, confundindo percepção, alcance ou posição. Recebe bônus em esquiva, furtividade ou manipulação de ambiente. Uma vez por cena, pode negar uma ação direta.",
        bonus: [
          "Altera forma ou presença",
          "+1 Esquiva e Furtividade",
          "Nega ação uma vez por cena"
        ]
      },
      {
        nome: "Núcleo da Erosão",
        descricao: "Sempre que um inimigo falhar em uma rolagem próximo ao Morvak, ele sofre efeitos cumulativos de desgaste. Uma vez por cena, o Morvak pode enfraquecer defesas ou bônus ativos.",
        bonus: [
          "Desgaste cumulativo em falhas",
          "Enfraquecimento de defesas uma vez por cena",
          "Erosão de resistências"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Existência Incongruente",
        descricao: "A simples presença do Morvak não se encaixa no mundo. +3 Resistência Mística, primeiro ataque recebido sofre –15 de dano. Criaturas que falham ao acertar sentem desconforto.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 Resistência Mística",
          "-15 dano no primeiro ataque",
          "Desconforto em falhas de acerto"
        ]
      },
      {
        nome: "Forma do Medo",
        descricao: "A aparência do Morvak reflete o medo que o originou. Escolhe 1 tipo de medo primário. Recebe vantagens narrativas contra criaturas sensíveis a esse medo.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe tipo de medo",
          "Vantagens contra sensíveis",
          "Alteração sutil de forma"
        ]
      },
      {
        nome: "Presságio Silencioso",
        descricao: "Inimigos sofrem –2 em Reação e -30% em prontidão. Primeira ação ofensiva de cada inimigo tem chance de falha narrativa.",
        tipo: "Imediata",
        alcance: "6 m",
        alvos: "No alcance",
        custo: 13,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "-2 Reação e -30% Prontidão",
          "Falha narrativa em primeira ação",
          "Efeito de presságio"
        ]
      },
      {
        nome: "Reflexo Errado",
        descricao: "Cancela um ataque que acabou de atingir o Morvak. O agressor sofre –5 na próxima ação.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "Cancela ataque recebido",
          "-5 próxima ação do agressor",
          "Erro perceptivo"
        ]
      },
      {
        nome: "Vazio Conceitual",
        descricao: "O alvo não pode usar habilidades reativas ou automáticas. Testes estratégicos sofrem –3. Conjurações complexas têm chance de falha.",
        tipo: "Imediata",
        alcance: "5 m",
        alvos: "1",
        custo: 17,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "Bloqueia habilidades reativas",
          "-3 testes estratégicos",
          "Falha em conjurações"
        ]
      },
      {
        nome: "Onde a Realidade Hesita",
        descricao: "O Morvak força o mundo a questionar a si mesmo. Movimentos rápidos tornam-se comuns. Decisões rápidas exigem testes adicionais.",
        tipo: "Duradoura",
        alcance: "9 m",
        alvos: "No alcance",
        custo: 21,
        recarga: "1 p/ Sessão",
        duracao: 3,
        dado: "0",
        bonus: [
          "Hesitação da realidade",
          "Testes adicionais para ações rápidas",
          "Presságios e eventos estranhos"
        ]
      }
    ]
  },
  {
    id: "celestine",
    nome: "Celestine",
    raridade: "mitico",
    descricao: "Os Celestines são seres alados que não nascem — são consagrados. Cada um deles foi, em vida mortal, responsável por um feito significativo que alterou o curso do mundo de Re’Dungeon. Após a morte, essas almas são elevadas pelos ecos dos deuses antigos e desaparecidos, retornando à existência como Celestines, portadores de um Propósito absoluto. Não possuem uma aparência fixa: sua forma reflete seu propósito, sua história e a lei que passaram a representar. Alguns se assemelham a figuras humanoides aladas, outros a entidades quase abstratas, feitas de luz, símbolos ou conceitos manifestos. Para um Celestine, poder não vem da fé ou da hierarquia, mas da profundidade de seu Propósito — quanto mais fundamental ele é para a ordem do mundo, maior o poder que o Celestine manifesta. Cada Propósito funciona como uma lei viva da realidade. Justiça, Verdade, Vida, Sobrevivência, Esperança ou Domínio não possuem o mesmo peso cósmico, e por isso os Celestines jamais estão no mesmo nível de poder entre si.",
    limiteAtributo: 250,
    imagem: "https://i.imgur.com/bNMxD9E.png",
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
        descricao: "Enquanto agir estritamente de acordo com seu Propósito, o Celestine recebe +3 em todas as rolagens diretamente relacionadas a ele. Uma vez por cena, pode impor seu Propósito sobre a cena ou um alvo.",
        bonus: [
          "+3 em rolagens do Propósito",
          "Impõe Propósito uma vez por cena",
          "Força resolução alinhada"
        ]
      },
      {
        nome: "Manifestação da Autoridade",
        descricao: "O Celestine emana uma aura conceitual ligada ao seu Propósito, concedendo bônus a aliados alinhados e penalidades a inimigos que o desafiem.",
        bonus: [
          "+2 bônus para aliados alinhados",
          "-2 penalidade para inimigos opostos",
          "Aura conceitual do Propósito"
        ]
      },
      {
        nome: "Manifestação da Ascensão",
        descricao: "Uma vez por cena, o Celestine pode despertar sua habilidade latente, elevando temporariamente seu Propósito a um nível quase divino. Após o uso, sofre consequências narrativas.",
        bonus: [
          "Despertar latente uma vez por cena",
          "Elevação divina temporária",
          "Poder absoluto com custo"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Consagração Pós-Morte",
        descricao: "A alma do Celestine foi elevada além da condição mortal. +5 em um atributo ligado ao Propósito, +1 Resistência Mística. Não sofre penalidades por medo, corrupção ou desespero.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+5 em atributo do Propósito",
          "+1 Resistência Mística",
          "Imunidade a medo e corrupção"
        ]
      },
      {
        nome: "Forma do Propósito",
        descricao: "A aparência do Celestine é reflexo direto da lei que ele representa. Pode alterar sua forma coerentemente com o Propósito.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Altera forma com Propósito",
          "Vantagens narrativas relacionadas",
          "Reconhecimento automático"
        ]
      },
      {
        nome: "Autoridade do Propósito",
        descricao: "A simples presença do Celestine impõe a lei que ele encarna. Inimigos sofrem –3 em ações que contrariem o Propósito. Ações alinhadas recebem –30% no custo.",
        tipo: "Imediata",
        alcance: "7 m",
        alvos: "No alcance",
        custo: 15,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "-3 em ações contrárias",
          "-30% custo alinhado",
          "Hesitação em caóticos"
        ]
      },
      {
        nome: "Manifestação da Lei Viva",
        descricao: "O Celestine manifesta sua lei como efeito direto (Justiça: dano verdadeiro, Vida: cura, Verdade: revelar ilusões, Sobrevivência: escudo).",
        tipo: "Imediata",
        alcance: "7 m",
        alvos: "1",
        custo: 13,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Escolhe manifestação do Propósito",
          "Efeito coerente à lei",
          "Poder absoluto limitado"
        ]
      },
      {
        nome: "Existência Consagrada",
        descricao: "O corpo do Celestine não é apenas físico — é um símbolo. Dano recebido sofre –15. Efeitos de selagem sofrem penalidade. Recebe +2 em todas as defesas.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "-15 dano recebido",
          "-5 selagem/corrupção",
          "+2 todas as defesas"
        ]
      },
      {
        nome: "Eco dos Deuses Antigos",
        descricao: "Os ecos dos deuses desaparecidos respondem ao chamado do Celestine. Recebe +3 em todas as ações ligadas ao Propósito por 1 Batalha. Pode alterar sutilmente a realidade.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 21,
        recarga: "1 p/ Sessão",
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 em ações do Propósito",
          "Alteração sutil da realidade",
          "Poder divino residual"
        ]
      }
    ]
  },
  {
    id: "opharos",
    nome: "Opharos",
    raridade: "mitico",
    descricao: "Os Ópharos são uma raça pré-doutrinária. Eles não foram criados para servir, proteger ou louvar. Eles existem para observar. Surgiram quando o mundo ainda não tinha linguagem suficiente para explicar o sagrado — então o sagrado precisou aprender a se ver. Fisicamente, lembram anjos apenas no que é superficial: forma humanoide, asas, halos, luz etérea. Mas isso é só o casco compreensível. A verdadeira natureza deles começa quando você presta atenção demais. Suas asas não são apenas penas: são estruturas sensoriais, cheias de olhos que se abrem conforme o nível de consciência do Ópharo em relação ao Divino, ao Caos ou à Verdade Absoluta. Quanto mais ele entende a realidade, mais olhos surgem. Quanto mais olhos, menos humano ele parece.",
    limiteAtributo: 200,
    imagem: "https://i.imgur.com/lOIcKqW.png",
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
        descricao: "Ópharos percebem ilusões, mentiras grosseiras e distorções da realidade com facilidade anormal. +2 em testes de Percepção visual e Identificação de ilusões. Ignora –2 de penalidade por efeitos visuais. 1 vez por cena, pode reduzir em 1 turno duração de uma ilusão.",
        bonus: [
          "+2 em Percepção visual",
          "Ignora penalidades de ilusão",
          "Reduz duração de ilusões uma vez por cena"
        ]
      },
      {
        nome: "Asas Sensoriais",
        descricao: "As asas funcionam como órgãos de percepção ampliada, detectando magia, intenções hostis ou alterações no destino. +2 Reação contra ataques surpresa. Detecta hostilidade até 1 turno antes. Percebe uso de Arts mágicas a 6 metros.",
        bonus: [
          "+2 Reação contra surpresa",
          "Detecta hostilidade antecipadamente",
          "Percebe magia próxima"
        ]
      },
      {
        nome: "Consciência Gradual",
        descricao: "Ópharos não evoluem por nível, mas por compreensão. Ao subir o Domínio de uma Art, recebe +1 de Precisão ou Evasão. Testes sociais de empatia sofrem –1, enquanto análise recebe +1.",
        bonus: [
          "+1 Precisão ou Evasão por Art elevada",
          "-1 empatia, +1 análise",
          "Compreensão gera poder"
        ]
      }
    ],
    habilidadesAvancadas: [
      {
        nome: "Olhar Revelador Avançado",
        descricao: "O Ópharos foca sua visão além do véu. Ilusões, camuflagens e mentiras mágicas são reveladas. O alvo perde bônus de ocultação e sofre –3 Evasão.",
        tipo: "Sustentada",
        alcance: "10 m",
        alvos: "1",
        custo: 9,
        recarga: 2,
        duracao: 0,
        dado: "0",
        bonus: [
          "Revela ilusões totalmente",
          "-3 Evasão do alvo",
          "Ocultação anulada"
        ]
      },
      {
        nome: "Presságio Imediato",
        descricao: "Ao prever o próximo instante, o Ópharos antecipa um ataque. Ganha +3 Evasão contra uma ação inimiga e ignora efeitos de surpresa.",
        tipo: "Imediata",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 7,
        recarga: 3,
        duracao: 0,
        dado: "0",
        bonus: [
          "+3 Evasão contra ataque",
          "Ignora surpresa",
          "Antecipação perfeita"
        ]
      },
      {
        nome: "Asas da Leitura Etérea",
        descricao: "As asas sensoriais detectam fluxos mágicos e intenção hostil. Aliados recebem +1 Precisão e +1 Percepção enquanto ativa.",
        tipo: "Sustentada",
        alcance: "8 m",
        alvos: "1 a 3",
        custo: 11,
        recarga: 4,
        duracao: 0,
        dado: "0",
        bonus: [
          "+1 Precisão e Percepção para aliados",
          "Detecção ampliada",
          "Amplificação sensorial"
        ]
      },
      {
        nome: "Consciência Deslocada",
        descricao: "A mente do Ópharos não se ancora totalmente no presente. Uma vez por cena, ao falhar em teste de Percepção ou Resistência mental, pode tratar como sucesso parcial.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "Sucesso parcial em falhas uma vez por cena",
          "Deslocamento temporal mental",
          "Evasão de penalidades severas"
        ]
      },
      {
        nome: "Visão que Fragmenta",
        descricao: "O inimigo encara uma verdade impossível de processar (Teste de Vontade Obstáculo 15). Caso falhe, sofre 12d6 de dano psíquico e aplica Desorientado.",
        tipo: "Imediata",
        alcance: "6 m",
        alvos: "1",
        custo: 13,
        recarga: 3,
        duracao: 0,
        dado: "12d6",
        bonus: [
          "Dano psíquico puro",
          "Ignora Defesa",
          "Efeito Desorientado"
        ]
      },
      {
        nome: "Excesso de Consciência",
        descricao: "Sempre que o Ópharos revelar uma ilusão, mentira ou efeito oculto, recebe +2 Precisão ou Evasão até o início do próximo turno.",
        tipo: "Duradoura",
        alcance: "Pessoal",
        alvos: "Você",
        custo: 0,
        recarga: 0,
        duracao: 0,
        dado: "0",
        bonus: [
          "+2 Precisão ou Evasão por revelação",
          "Não acumula",
          "Compreensão gera poder"
        ]
      }
    ]
  }
];

/**
 * Obtém uma raça pelo ID
 * @param {string} id - ID da raça
 * @returns {Object|null} Objeto raça ou null
 */
function obterRacaPorId(id) {
  return RACAS_DATABASE.find(raca => raca.id === id) || null;
}

/**
 * Obtém todas as raças
 * @returns {Array} Array de todas as raças
 */
function obterTodasAsRacas() {
  return RACAS_DATABASE;
}

/**
 * Obtém raças por raridade
 * @param {string} raridade - Raridade (comum, raro, epico, mitico, lendario, celestial)
 * @returns {Array} Raças da raridade especificada
 */
function obterRacasPorRaridade(raridade) {
  return RACAS_DATABASE.filter(raca => raca.raridade === raridade);
}

/**
 * Obtém habilidades básicas de uma raça
 * @param {string} id - ID da raça
 * @returns {Array} Array de habilidades básicas
 */
function obterHabilidadesBasicas(id) {
  const raca = obterRacaPorId(id);
  return raca ? (raca.habilidadesBasicas || []) : [];
}

/**
 * Obtém habilidades avançadas de uma raça
 * @param {string} id - ID da raça
 * @returns {Array} Array de habilidades avançadas
 */
function obterHabilidadesAvancadas(id) {
  const raca = obterRacaPorId(id);
  return raca ? (raca.habilidadesAvancadas || []) : [];
}
