/* ============================================ */
/* APTIDÕES-DB.JS - Banco de Dados de Aptidões */
/* ============================================ */

/**
 * AptidoesDB - Gerenciamento de IndexedDB para Aptidões
 * Armazena:
 * - Catálogo de aptidões do sistema
 * - Aptidões adquiridas pelo personagem
 * - Configurações de bonus
 */

class AptidoesDB {
    constructor() {
        this.dbName = 'ReDungeonDB';
        this.version = 5; // Versão incrementada para forçar recreação do catálogo
        this.db = null;
    }

    /**
     * Inicializa o banco de dados com fallback gracioso
     */
    async init() {
        return new Promise((resolve, reject) => {
            console.log(`📦 Abrindo IndexedDB "${this.dbName}" versão ${this.version}...`);

            // Verificar se IndexedDB está disponível
            if (!window.indexedDB) {
                console.warn(`⚠️ IndexedDB não disponível, continuando sem persistência em DB`);
                this.db = null;
                resolve(); // Resolver sem erro
                return;
            }

            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => {
                console.warn('⚠️ Erro ao abrir IndexedDB, continuando sem persistência:', request.error);
                console.warn('⚠️ Nome do erro:', request.error.name);
                console.warn('⚠️ Mensagem:', request.error.message);
                // NÃO rejeitar - apenas continuar sem BD
                this.db = null;
                resolve(); // Resolver em vez de rejeitar
            };

            request.onblocked = () => {
                console.warn('⚠️ Abertura do IndexedDB bloqueada - fechando outras abas pode ajudar');
            };

            request.onupgradeneeded = (event) => {
                console.log(`📦 Atualizando banco de dados para versão ${this.version}...`);
                const db = event.target.result;

                try {
                    // Criar object stores se não existirem
                    if (!db.objectStoreNames.contains('aptidoesCatalogo')) {
                        db.createObjectStore('aptidoesCatalogo', { keyPath: 'id' });
                        console.log('✅ Object store "aptidoesCatalogo" criado');
                    }

                    if (!db.objectStoreNames.contains('aptidoesPersonagem')) {
                        db.createObjectStore('aptidoesPersonagem', { keyPath: 'id' });
                        console.log('✅ Object store "aptidoesPersonagem" criado');
                    }

                    if (!db.objectStoreNames.contains('aptidoesConfig')) {
                        db.createObjectStore('aptidoesConfig', { keyPath: 'key' });
                        console.log('✅ Object store "aptidoesConfig" criado');
                    }

                    console.log('📦 ✅ Atualização do banco concluída');
                } catch (upgradeError) {
                    console.error('❌ Erro durante upgrade:', upgradeError);
                    reject(upgradeError);
                }
            };

            request.onsuccess = async () => {
                try {
                    this.db = request.result;
                    console.log('✅ AptidoesDB inicializado com sucesso');
                    
                    // Dar tempo para o upgrade completar totalmente
                    await new Promise(r => setTimeout(r, 100));
                    
                    // Verificar se o catálogo está vazio - com retry
                    let tentativas = 0;
                    let catalogoExistente = [];
                    
                    while (tentativas < 3 && catalogoExistente.length === 0) {
                        catalogoExistente = await this.getCatalogo();
                        if (catalogoExistente.length === 0) {
                            console.log(`📦 Tentativa ${tentativas + 1}: Catálogo vazio, inserindo dados...`);
                            const catalogo = this.getCatalogoCompleto();
                            await this.insertCatalogo();
                            tentativas++;
                            await new Promise(r => setTimeout(r, 100));
                        }
                    }
                    
                    if (catalogoExistente.length > 0) {
                        console.log(`📦 ✅ Catálogo pronto com ${catalogoExistente.length} aptidões`);
                    } else {
                        console.warn('⚠️ Catálogo ainda vazio após tentativas');
                    }
                    
                    resolve(this.db); // Sempre resolver, mesmo sem catálogo
                } catch (error) {
                    console.warn('⚠️ Erro ao verificar/inserir catálogo, continuando sem BD:', error);
                    resolve(null); // Resolver com null em vez de rejeitar
                }
            };
        });
    }

    /**
     * Insere o catálogo completo de aptidões
     */
    async insertCatalogo() {
        const catalogo = this.getCatalogoCompleto();
        
        return new Promise((resolve, reject) => {
            // Timeout de segurança
            const insertTimeout = setTimeout(() => {
                reject(new Error('insertCatalogo timeout após 5s'));
            }, 5000);
            
            try {
                const transaction = this.db.transaction(['aptidoesCatalogo'], 'readwrite');
                const store = transaction.objectStore('aptidoesCatalogo');

                // Inserir todas as aptidões em uma única transação
                catalogo.forEach(aptidao => {
                    store.put(aptidao);
                });

                transaction.onerror = () => {
                    clearTimeout(insertTimeout);
                    reject(transaction.error);
                };
                transaction.oncomplete = () => {
                    clearTimeout(insertTimeout);
                    console.log(`✅ Todas as ${catalogo.length} aptidões inseridas com sucesso`);
                    resolve(catalogo.length);
                };
            } catch (error) {
                clearTimeout(insertTimeout);
                reject(error);
            }
        });
    }

    /**
     * Insere uma aptidão no catálogo
     */
    async insertAptidaoCatalogo(aptidao) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesCatalogo'], 'readwrite');
            const store = transaction.objectStore('aptidoesCatalogo');
            const request = store.put(aptidao);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    /**
     * Obtém todas as aptidões do catálogo
     */
    async getCatalogo() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesCatalogo'], 'readonly');
            const store = transaction.objectStore('aptidoesCatalogo');
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    /**
     * Obtém uma aptidão específica do catálogo
     */
    async getAptidaoCatalogo(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesCatalogo'], 'readonly');
            const store = transaction.objectStore('aptidoesCatalogo');
            const request = store.get(id);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    /**
     * Adiciona uma aptidão ao personagem
     */
    async addAptidaoPersonagem(id, nome, nivel = 0, bonus = 0) {
        const aptidao = {
            id: id,
            nome: nome,
            nivel: nivel,
            bonus: bonus,
            timestamp: Date.now()
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesPersonagem'], 'readwrite');
            const store = transaction.objectStore('aptidoesPersonagem');
            const request = store.put(aptidao);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(aptidao);
        });
    }

    /**
     * Obtém todas as aptidões do personagem
     */
    async getAptidoesPersonagem() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesPersonagem'], 'readonly');
            const store = transaction.objectStore('aptidoesPersonagem');
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    /**
     * Obtém uma aptidão do personagem
     */
    async getAptidaoPersonagem(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesPersonagem'], 'readonly');
            const store = transaction.objectStore('aptidoesPersonagem');
            const request = store.get(id);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    /**
     * Atualiza uma aptidão do personagem
     */
    async updateAptidaoPersonagem(id, updates) {
        if (!this.db) {
            console.error('❌ Database não inicializado em updateAptidaoPersonagem');
            throw new Error('Database não inicializado');
        }

        const aptidao = await this.getAptidaoPersonagem(id);
        if (!aptidao) {
            console.warn(`Aptidão não encontrada: ${id}`);
            return null;
        }

        const updated = { ...aptidao, ...updates };

        return new Promise((resolve, reject) => {
            try {
                const transaction = this.db.transaction(['aptidoesPersonagem'], 'readwrite');
                const store = transaction.objectStore('aptidoesPersonagem');
                const request = store.put(updated);

                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve(updated);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Remove uma aptidão do personagem
     */
    async removeAptidaoPersonagem(id) {
        if (!this.db) {
            console.error('❌ Database não inicializado em removeAptidaoPersonagem');
            throw new Error('Database não inicializado');
        }

        return new Promise((resolve, reject) => {
            try {
                const transaction = this.db.transaction(['aptidoesPersonagem'], 'readwrite');
                const store = transaction.objectStore('aptidoesPersonagem');
                const request = store.delete(id);

                request.onerror = () => reject(request.error);
                request.onsuccess = () => resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Salva configuração (Ganhas, etc)
     */
    async setConfig(key, value) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesConfig'], 'readwrite');
            const store = transaction.objectStore('aptidoesConfig');
            const request = store.put({ key, value });

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(true);
        });
    }

    /**
     * Obtém configuração
     */
    async getConfig(key) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['aptidoesConfig'], 'readonly');
            const store = transaction.objectStore('aptidoesConfig');
            const request = store.get(key);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result?.value ?? 0);
        });
    }

    /**
     * Limpa tudo (para reset)
     */
    async clearAll() {
        return Promise.all([
            this.clearStore('aptidoesCatalogo'),
            this.clearStore('aptidoesPersonagem'),
            this.clearStore('aptidoesConfig')
        ]);
    }

    async clearStore(storeName) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.clear();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(true);
        });
    }

    /**
     * Catálogo completo de aptidões do sistema
     */
    /**
     * Retorna o catálogo completo de aptidões
     * Dados baseados em APTIDOES_LISTA.txt
     */
    getCatalogoCompleto() {
        return [
            {
                id: 'acrobacia',
                nome: 'Acrobacia',
                descricao: 'Movimentos ágeis e equilibrados',
                imagem: 'https://i.imgur.com/TAnNSDg.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Agilidade', narrativa: 'Movimentos ágeis' },
                    { nivel: 3, efeito: '+1 Reação', narrativa: 'Reflexos apurados' },
                    { nivel: 5, efeito: '+1 Evasão', narrativa: 'Esquivas ágeis' }
                ]
            },
            {
                id: 'alquimia',
                nome: 'Alquimia',
                descricao: 'Manipulação de elementos alquímicos',
                imagem: 'https://i.imgur.com/PMB9pIt.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 dificuldade ao fabricar itens', narrativa: 'Criações mais fáceis' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Conhecimento alquímico' },
                    { nivel: 5, efeito: '-3 teste descontrole alquímico', narrativa: 'Domínio total' }
                ]
            },
            {
                id: 'ambidestro',
                nome: 'Ambidestro',
                descricao: 'Destreza com ambas as mãos',
                imagem: 'https://i.imgur.com/qJbTuXg.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 Precisão', narrativa: 'Ambas as mãos afiadas' },
                    { nivel: 3, efeito: 'Atacar com ambas as mãos', narrativa: 'Duplo ataque permitido' },
                    { nivel: 5, efeito: 'Segunda mão = ação comum', narrativa: 'Segundo ataque é gratuito' }
                ]
            },
            {
                id: 'arcanismo',
                nome: 'Arcanismo',
                descricao: 'Maestria em magia arcana',
                imagem: 'https://i.imgur.com/Ryug5hL.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 dificuldade casting', narrativa: 'Magias mais fáceis' },
                    { nivel: 3, efeito: '+1 Precisão', narrativa: 'Magia mais precisa' },
                    { nivel: 5, efeito: '-3 descontrole mágico', narrativa: 'Domínio absoluto' }
                ]
            },
            {
                id: 'atletismo',
                nome: 'Atletismo',
                descricao: 'Força e resistência física',
                imagem: 'https://i.imgur.com/AQS5yO6.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Vitalidade', narrativa: 'Corpo resiliente' },
                    { nivel: 3, efeito: '+50 Saúde', narrativa: 'Energia vital aumentada' },
                    { nivel: 5, efeito: '+5 Força', narrativa: 'Força bruta' }
                ]
            },
            {
                id: 'atuacao',
                nome: 'Atuação',
                descricao: 'Interpretação e enganação',
                imagem: 'https://i.imgur.com/5g11BQc.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Criatividade aguçada' },
                    { nivel: 3, efeito: '-3 obstáculo enganação', narrativa: 'Ilusionista magistral' },
                    { nivel: 5, efeito: 'Imitar vozes/gestos', narrativa: 'Imitação perfeita' }
                ]
            },
            {
                id: 'beleza',
                nome: 'Beleza',
                descricao: 'Atratividade e aparência',
                imagem: 'https://i.imgur.com/smmjNh2.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 em testes sociais', narrativa: 'Magnetismo natural' },
                    { nivel: 3, efeito: '+5 Sorte', narrativa: 'Fortuna na beleza' },
                    { nivel: 5, efeito: '-1 Precisão inimigos', narrativa: 'Distração perfeita' }
                ]
            },
            {
                id: 'camuflagem',
                nome: 'Camuflagem',
                descricao: 'Encobrimento e disfarce',
                imagem: 'https://i.imgur.com/mdHhKHO.png',
                vantagens: [
                    { nivel: 1, efeito: '+20% Prontidão', narrativa: 'Colagem perfeita' },
                    { nivel: 3, efeito: '+5 Agilidade', narrativa: 'Movimento imperceptível' },
                    { nivel: 5, efeito: '+1 Reação', narrativa: 'Instinto de sobrevivência' }
                ]
            },
            {
                id: 'canto',
                nome: 'Canto',
                descricao: 'Poder da voz e música',
                imagem: 'https://i.imgur.com/eK4HDSv.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 em testes de encantar/inspirar', narrativa: 'Voz hipnotizante' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Educação musical' },
                    { nivel: 5, efeito: '+1 Reação ou Precisão aliados', narrativa: 'Inspiração épica' }
                ]
            },
            {
                id: 'compreensao',
                nome: 'Compreensão',
                descricao: 'Entendimento profundo',
                imagem: 'https://i.imgur.com/pAlsgmZ.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Mente aguçada' },
                    { nivel: 3, efeito: '+1d4+2 técnicas extras', narrativa: 'Aprendizado rápido' },
                    { nivel: 5, efeito: 'Compreensão de elementos', narrativa: 'Conhecimento supremo' }
                ]
            },
            {
                id: 'controleqi',
                nome: 'Controle do Qi',
                descricao: 'Manipulação de energia vital',
                imagem: 'https://i.imgur.com/bJqRQKW.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Percepção OU Inteligência', narrativa: 'Sensibilidade energética' },
                    { nivel: 3, efeito: '+1 Reação', narrativa: 'Resposta instantânea' },
                    { nivel: 5, efeito: 'Interromper Qi inimigos', narrativa: 'Bloqueio energético' }
                ]
            },
            {
                id: 'conhecimento',
                nome: 'Conhecimento',
                descricao: 'Saber acadêmico vasto',
                imagem: 'https://i.imgur.com/isBYQoe.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Erudição profunda' },
                    { nivel: 3, efeito: '+1d6 decifração/investigação', narrativa: 'Descoberta rápida' },
                    { nivel: 5, efeito: 'Relembrar fatos úteis', narrativa: 'Memória perfeita' }
                ]
            },
            {
                id: 'cultivo',
                nome: 'Cultivo',
                descricao: 'Aperfeiçoamento pessoal',
                imagem: 'https://i.imgur.com/hvCwFfY.png',
                vantagens: [
                    { nivel: 1, efeito: 'Recuperação dobrada em descansos', narrativa: 'Meditação efetiva' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Transcendência' },
                    { nivel: 5, efeito: 'Atravessar barreiras inferiores', narrativa: 'Poder supremo' }
                ]
            },
            {
                id: 'danca',
                nome: 'Dança',
                descricao: 'Movimento rítmico e graça',
                imagem: 'https://i.imgur.com/tjUQLVF.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 Evasão', narrativa: 'Movimentos fluidos' },
                    { nivel: 3, efeito: '+5 Agilidade', narrativa: 'Agilidade de bailarino' },
                    { nivel: 5, efeito: '+1 Reação', narrativa: 'Sincronismo perfeito' }
                ]
            },
            {
                id: 'diplomacia',
                nome: 'Diplomacia',
                descricao: 'Negociação e persuasão',
                imagem: 'https://i.imgur.com/HUld1Fs.png',
                vantagens: [
                    { nivel: 1, efeito: 'Reduzir hostilidade NPCs', narrativa: 'Mediação hábil' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Retórica poderosa' },
                    { nivel: 5, efeito: 'Mediar conflitos', narrativa: 'Paz garantida' }
                ]
            },
            {
                id: 'douqi',
                nome: 'Dou Qi',
                descricao: 'Combate com poder energético',
                imagem: 'https://i.imgur.com/fnPvHMQ.png',
                vantagens: [
                    { nivel: 1, efeito: '+1d6 dano energético', narrativa: 'Poder imbuído' },
                    { nivel: 3, efeito: '+5 Força OU Inteligência', narrativa: 'Maestria energética' },
                    { nivel: 5, efeito: 'Ignora 30% armadura', narrativa: 'Perfuração energética' }
                ]
            },
            {
                id: 'estrategia',
                nome: 'Estratégia',
                descricao: 'Tática e planejamento',
                imagem: 'https://i.imgur.com/kPf9qxU.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Mente estratégica' },
                    { nivel: 3, efeito: '+1d6 eficiência plano', narrativa: 'Planejamento perfeito' },
                    { nivel: 5, efeito: 'Vantagem 3x aliados/combate', narrativa: 'Comandante lendário' }
                ]
            },
            {
                id: 'ferraria',
                nome: 'Ferraria',
                descricao: 'Forja e fabricação de armas',
                imagem: 'https://i.imgur.com/osVYotW.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Força', narrativa: 'Músculos de ferreiro' },
                    { nivel: 3, efeito: 'Metal pode despertar', narrativa: 'Armas vivas' },
                    { nivel: 5, efeito: '+5 Sorte', narrativa: 'Bênção do ferro' }
                ]
            },
            {
                id: 'folego',
                nome: 'Fôlego',
                descricao: 'Resistência à fadiga',
                imagem: 'https://i.imgur.com/2A4Bqsg.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Vitalidade', narrativa: 'Pulmões de ferro' },
                    { nivel: 3, efeito: '-30% fadiga em arts', narrativa: 'Economia de energia' },
                    { nivel: 5, efeito: '+50% fadiga descanso curto', narrativa: 'Recuperação rápida' }
                ]
            },
            {
                id: 'furtividade',
                nome: 'Furtividade',
                descricao: 'Sigilo e dissimulação',
                imagem: 'https://i.imgur.com/7g5y3kK.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 obstáculo avistamento', narrativa: 'Sombra perfeita' },
                    { nivel: 3, efeito: '+5 Agilidade', narrativa: 'Movimento silencioso' },
                    { nivel: 5, efeito: '+1 Precisão', narrativa: 'Ataque das sombras' }
                ]
            },
            {
                id: 'idioma',
                nome: 'Idioma',
                descricao: 'Fluência linguística',
                imagem: 'https://i.imgur.com/ue4snwM.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 nova língua/nível', narrativa: 'Poliglota' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Domínio linguístico' },
                    { nivel: 5, efeito: '-3 testes sociais estrangeiros', narrativa: 'Comunicação perfeita' }
                ]
            },
            {
                id: 'intimidacao',
                nome: 'Intimidação',
                descricao: 'Imposição de vontade',
                imagem: 'https://i.imgur.com/lTMTeMJ.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Presença aterradora' },
                    { nivel: 3, efeito: '+1 vs fracos', narrativa: 'Dominação fácil' },
                    { nivel: 5, efeito: 'Inimigos fracos hesitam 1 rodada', narrativa: 'Medo paralisante' }
                ]
            },
            {
                id: 'intuicao',
                nome: 'Intuição',
                descricao: 'Instinto aguçado',
                imagem: 'https://i.imgur.com/9DIiVwI.png',
                vantagens: [
                    { nivel: 1, efeito: 'Detectar surpresa', narrativa: 'Sexto sentido' },
                    { nivel: 3, efeito: '+5 Percepção', narrativa: 'Intuição sobrenatural' },
                    { nivel: 5, efeito: '+1d4 faltam informações', narrativa: 'Adivinhação perfeita' }
                ]
            },
            {
                id: 'labia',
                nome: 'Lábia',
                descricao: 'Persuasão e retórica',
                imagem: 'https://i.imgur.com/61lChtN.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Orador nato' },
                    { nivel: 3, efeito: 'Culpar outro sucesso', narrativa: 'Manipulação perfeita' },
                    { nivel: 5, efeito: '-3 com autoridades', narrativa: 'Língua de ouro' }
                ]
            },
            {
                id: 'lideranca',
                nome: 'Liderança',
                descricao: 'Comando de grupo',
                imagem: 'https://i.imgur.com/v6L8GZn.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 aliados em plano', narrativa: 'Inspiração natural' },
                    { nivel: 3, efeito: '-3 Sanidade/Vontade', narrativa: 'Protetor confiável' },
                    { nivel: 5, efeito: 'Reorganizar iniciativa 1x', narrativa: 'Comando supremo' }
                ]
            },
            {
                id: 'maestria',
                nome: 'Maestria',
                descricao: 'Perfeição em uma área',
                imagem: 'https://i.imgur.com/fsjkVJb.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 testes área', narrativa: 'Especialista' },
                    { nivel: 3, efeito: '-3 obstáculo área', narrativa: 'Domínio absoluto' },
                    { nivel: 5, efeito: '+5 atributo relacionado', narrativa: 'Mestria lendária' }
                ]
            },
            {
                id: 'matrizes',
                nome: 'Matrizes',
                descricao: 'Símbolos mágicos',
                imagem: 'https://i.imgur.com/ws3E0SX.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Símbolos dominados' },
                    { nivel: 3, efeito: '+20% Prontidão', narrativa: 'Ativação rápida' },
                    { nivel: 5, efeito: 'Ativar matriz como ação bônus', narrativa: 'Maestria runar' }
                ]
            },
            {
                id: 'olhocritico',
                nome: 'Olho Crítico',
                descricao: 'Exploração de fraquezas',
                imagem: 'https://i.imgur.com/0zLdIyX.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 Precisão', narrativa: 'Ponto fraco visto' },
                    { nivel: 3, efeito: '+5 Percepção', narrativa: 'Visão penetrante' },
                    { nivel: 5, efeito: 'Reduzir defesa críticos', narrativa: 'Vulnerabilidade exposta' }
                ]
            },
            {
                id: 'percepcao',
                nome: 'Percepção',
                descricao: 'Observação aguçada',
                imagem: 'https://i.imgur.com/lgzwmFo.png',
                vantagens: [
                    { nivel: 1, efeito: 'Detectar armadilhas/pistas', narrativa: 'Visão perfeita' },
                    { nivel: 3, efeito: '+5 Percepção', narrativa: 'Verdade revelada' },
                    { nivel: 5, efeito: '+1 Reação', narrativa: 'Reflexos instintivos' }
                ]
            },
            {
                id: 'prestidigitacao',
                nome: 'Prestidigitação',
                descricao: 'Habilidade manual',
                imagem: 'https://i.imgur.com/xWFrmoB.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 Precisão', narrativa: 'Mãos ágeis' },
                    { nivel: 3, efeito: '+5 Agilidade', narrativa: 'Destreza perfeita' },
                    { nivel: 5, efeito: 'Re-rolear falha fora combate', narrativa: 'Sorte manual' }
                ]
            },
            {
                id: 'pressentimento',
                nome: 'Pressentimento',
                descricao: 'Antecipação de perigos',
                imagem: 'https://i.imgur.com/uGsb5mG.png',
                vantagens: [
                    { nivel: 1, efeito: '+3 reação pós-evasão falha', narrativa: 'Reflexo defensivo' },
                    { nivel: 3, efeito: '+5 Sorte', narrativa: 'Fortuna natural' },
                    { nivel: 5, efeito: 'Re-rolear falha percepção 1x', narrativa: 'Presságio divino' }
                ]
            },
            {
                id: 'religiao',
                nome: 'Religião',
                descricao: 'Conhecimento espiritual',
                imagem: 'https://i.imgur.com/xwebh3u.png',
                vantagens: [
                    { nivel: 1, efeito: 'Identificar símbolos/maldições', narrativa: 'Erudição sagrada' },
                    { nivel: 3, efeito: '-2 obstáculos relacionados', narrativa: 'Conexão divina' },
                    { nivel: 5, efeito: '+5 Inteligência', narrativa: 'Revelação divina' }
                ]
            },
            {
                id: 'sanidade',
                nome: 'Sanidade',
                descricao: 'Resistência mental',
                imagem: 'https://i.imgur.com/UVtrRca.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 testes sanidade', narrativa: 'Mente forte' },
                    { nivel: 3, efeito: '+5 Vitalidade', narrativa: 'Psique resiliente' },
                    { nivel: 5, efeito: 'Vantagem medo 2x/sessão', narrativa: 'Imune ao terror' }
                ]
            },
            {
                id: 'seducao',
                nome: 'Sedução',
                descricao: 'Atração e charme',
                imagem: 'https://i.imgur.com/Nfdtuqp.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 ações contra vontade', narrativa: 'Magnetismo irresistível' },
                    { nivel: 3, efeito: '+5 Sorte', narrativa: 'Fortuna no amor' },
                    { nivel: 5, efeito: 'Inverter hostilidade', narrativa: 'Conquista perfeita' }
                ]
            },
            {
                id: 'selos',
                nome: 'Selos',
                descricao: 'Armazenamento mágico',
                imagem: 'https://i.imgur.com/RsrKi1t.png',
                vantagens: [
                    { nivel: 1, efeito: 'Armazenar magias em selos', narrativa: 'Reserva mágica' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Selagem perfeita' },
                    { nivel: 5, efeito: '+1 Precisão', narrativa: 'Selos infalíveis' }
                ]
            },
            {
                id: 'sobrevivencia',
                nome: 'Sobrevivência',
                descricao: 'Adaptação ao ambiente',
                imagem: 'https://i.imgur.com/Bu4HLf5.png',
                vantagens: [
                    { nivel: 1, efeito: '-dificuldade área conhecimento', narrativa: 'Adaptação natural' },
                    { nivel: 3, efeito: '+5 Percepção OU Inteligência', narrativa: 'Instinto de sobrevivência' },
                    { nivel: 5, efeito: '+1d6 trilhas', narrativa: 'Rastreador lendário' }
                ]
            },
            {
                id: 'tolerancia',
                nome: 'Tolerância',
                descricao: 'Resistência a adversidades',
                imagem: 'https://i.imgur.com/18Ju21y.png',
                vantagens: [
                    { nivel: 1, efeito: '-3 obstáculos', narrativa: 'Resistência aumentada' },
                    { nivel: 3, efeito: '-1 turno venenos/doenças', narrativa: 'Imunidade parcial' },
                    { nivel: 5, efeito: 'Permanecer de pé 1x/sessão', narrativa: 'Vontade inabalável' }
                ]
            },
            {
                id: 'unicskill',
                nome: 'Unic Skill',
                descricao: 'Habilidade única especial',
                imagem: 'https://i.imgur.com/RATyykD.png',
                vantagens: [
                    { nivel: 1, efeito: 'Núcleo habilidade extra', narrativa: 'Poder único' },
                    { nivel: 3, efeito: '+1 ativação e controle', narrativa: 'Domínio do poder' },
                    { nivel: 5, efeito: '+5 atributo primário', narrativa: 'Poder absoluto' }
                ]
            },
            {
                id: 'vontade',
                nome: 'Vontade',
                descricao: 'Força de caráter',
                imagem: 'https://i.imgur.com/4Lldsnw.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Vitalidade', narrativa: 'Espírito indomável' },
                    { nivel: 3, efeito: '+2 resistências mentais', narrativa: 'Proteção psíquica' },
                    { nivel: 5, efeito: 'Negar efeito mental 1x/dia', narrativa: 'Liberdade absoluta' }
                ]
            },
            {
                id: 'zanjutsu',
                nome: 'Zanjutsu',
                descricao: 'Maestria em lâminas',
                imagem: 'https://i.imgur.com/YvcLwaG.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 Precisão', narrativa: 'Técnica apurada' },
                    { nivel: 3, efeito: '+5 Força', narrativa: 'Lâminas devastadoras' },
                    { nivel: 5, efeito: 'Aparo como Reação (reduz 30% dano)', narrativa: 'Defesa perfeita' }
                ]
            },
            {
                id: 'hoho',
                nome: 'Hoho',
                descricao: 'Arte da velocidade',
                imagem: 'https://i.imgur.com/6y28jyw.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Agilidade', narrativa: 'Velocidade sobrenatural' },
                    { nivel: 3, efeito: '+1 Evasão', narrativa: 'Movimento fulminante' },
                    { nivel: 5, efeito: 'Shunpo: mover-se ao campo de visão 1x/combate', narrativa: 'Teletransporte' }
                ]
            },
            {
                id: 'kido',
                nome: 'Kidō',
                descricao: 'Magia espiritual',
                imagem: 'https://i.imgur.com/NpohIcR.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Controle espiritual' },
                    { nivel: 3, efeito: 'Kidōs nível 30 -3 dificuldade', narrativa: 'Domínio mágico' },
                    { nivel: 5, efeito: 'Eishohaki: conjura como ação bônus 50%', narrativa: 'Magia absoluta' }
                ]
            },
            {
                id: 'hakuda',
                nome: 'Hakuda',
                descricao: 'Combate desarmado',
                imagem: 'https://i.imgur.com/pfttrFQ.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Força', narrativa: 'Punhos de ferro' },
                    { nivel: 3, efeito: '+1 Precisão, ignora 10% armadura', narrativa: 'Técnica devastadora' },
                    { nivel: 5, efeito: '+1 Reação', narrativa: 'Reflexos aprimorados' }
                ]
            },
            {
                id: 'reiatsu',
                nome: 'Reiatsu',
                descricao: 'Pressão espiritual',
                imagem: 'https://i.imgur.com/7WVnHiU.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Vitalidade', narrativa: 'Poder espiritual avassalador' },
                    { nivel: 3, efeito: 'Inimigos -1 Precisão próximos', narrativa: 'Opressão do poder' },
                    { nivel: 5, efeito: 'Libera pressão: inimigos Vontade ou Abalados 1x/combate', narrativa: 'Pressão absoluta' }
                ]
            },
            {
                id: 'reiraku',
                nome: 'Reiraku',
                descricao: 'Detecção espiritual',
                imagem: 'https://i.imgur.com/GJcmYLr.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Percepção', narrativa: 'Visão espiritual' },
                    { nivel: 3, efeito: 'Detecta seres espirituais até 1km', narrativa: 'Rastreamento sobrenatural' },
                    { nivel: 5, efeito: '+1 Reação contra invisíveis', narrativa: 'Sentido perfeito' }
                ]
            },
            {
                id: 'comunicacao_zanpakuto',
                nome: 'Comunicação Zanpakutō',
                descricao: 'Sintonia com arma espiritual',
                imagem: 'https://i.imgur.com/9qzMWbH.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Sorte', narrativa: 'Conexão natural' },
                    { nivel: 3, efeito: 'Shikai -30% custo ativação', narrativa: 'Sincronização perfeita' },
                    { nivel: 5, efeito: 'Re-role ataque/habilidade Zanpakutō 1x/dia', narrativa: 'Harmonia absoluta' }
                ]
            },
            {
                id: 'conhecimento_soul_society',
                nome: 'Conhecimento Soul Society',
                descricao: 'Erudição das 13 Divisões',
                imagem: 'https://i.imgur.com/ibJsQZU.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Inteligência', narrativa: 'Conhecimento profundo' },
                    { nivel: 3, efeito: '+1d6 testes Soul Society', narrativa: 'Pericia absoluta' },
                    { nivel: 5, efeito: 'Identifica fraquezas Hollows automaticamente', narrativa: 'Verdade revelada' }
                ]
            },
            {
                id: 'resistencia_espiritual',
                nome: 'Resistência Espiritual',
                descricao: 'Defesa contra poder espiritual',
                imagem: 'https://i.imgur.com/tbdPa8t.png',
                vantagens: [
                    { nivel: 1, efeito: '+5 Vitalidade', narrativa: 'Fortitude espiritual' },
                    { nivel: 3, efeito: '+10% defesa', narrativa: 'Escudo energético' },
                    { nivel: 5, efeito: 'Reduz dano espiritual em 2 dados', narrativa: 'Imunidade parcial' }
                ]
            },
            {
                id: 'konso',
                nome: 'Konsō',
                descricao: 'Envio de almas',
                imagem: 'https://i.imgur.com/jWJBDse.png',
                vantagens: [
                    { nivel: 1, efeito: '+1 testes sociais com almas', narrativa: 'Afinidade com espíritos' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Canalização espiritual' },
                    { nivel: 5, efeito: 'Purifica almas menores fora combate', narrativa: 'Poder divino' }
                ]
            },
            {
                id: 'meditacao_jinzen',
                nome: 'Meditação Jinzen',
                descricao: 'Comunhão espiritual profunda',
                imagem: 'https://i.imgur.com/nrO3my9.png',
                vantagens: [
                    { nivel: 1, efeito: 'Recuperação Reiryoku dobrada descansos', narrativa: 'Meditação profunda' },
                    { nivel: 3, efeito: '+5 Inteligência', narrativa: 'Harmonia espiritual' },
                    { nivel: 5, efeito: 'Transe: recupera 100% fadiga em 10 min', narrativa: 'Êxtase espiritual' }
                ]
            },
        ];
    }
}

// Instância global
const aptidoesDB = new AptidoesDB();
window.aptidoesDB = aptidoesDB;

// Inicializar banco de dados automaticamente
aptidoesDB.init().catch(err => {
    console.error('[AptidoesDB] Erro ao inicializar:', err);
});
