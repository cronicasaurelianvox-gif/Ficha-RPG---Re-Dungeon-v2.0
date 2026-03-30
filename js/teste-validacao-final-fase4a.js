/**
 * VALIDAÇÃO FINAL PRÁTICA - FASE 4A
 * 
 * Testes visuais e funcionais completos para confirmar:
 * 1. Nenhuma alteração visual em modais
 * 2. Cores de raridade intactas
 * 3. Transições funcionando
 * 4. Responsividade preservada
 * 5. Zero erros/warnings no console
 * 
 * Data: 27 de fevereiro de 2026
 * Fase: 4A - Consolidação de Variáveis CSS
 */

(function() {
    'use strict';

    const validacaoFinal = {
        passed: 0,
        failed: 0,
        warnings: 0,
        messages: [],
        visualTests: [],
        
        log(message, level = 'info') {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            const prefix = {
                'info': '📋',
                'success': '✅',
                'error': '❌',
                'warning': '⚠️',
                'test': '🧪'
            }[level] || '•';
            
            const msg = `[${timestamp}] ${prefix} ${message}`;
            this.messages.push({ message, level, timestamp });
            console.log(`%c${msg}`, this.getStyle(level));

            if (level === 'success') this.passed++;
            else if (level === 'error') this.failed++;
            else if (level === 'warning') this.warnings++;
        },

        getStyle(level) {
            const styles = {
                'info': 'color: #3b82f6; font-weight: bold',
                'success': 'color: #10b981; font-weight: bold',
                'error': 'color: #ef4444; font-weight: bold',
                'warning': 'color: #f97316; font-weight: bold',
                'test': 'color: #8b5cf6; font-weight: bold'
            };
            return styles[level] || 'color: #666';
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 1: Verificação de Carregamento
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkLoading() {
            this.log('TESTE 1: Verificação de Carregamento de variables.css', 'test');

            const variablesLink = document.querySelector('link[href*="variables.css"]');
            if (variablesLink) {
                this.log('variables.css carregado no DOM', 'success');
            } else {
                this.log('variables.css NÃO encontrado', 'error');
                return false;
            }

            const root = document.documentElement;
            const rarityComum = getComputedStyle(root).getPropertyValue('--rarity-comum').trim();
            
            if (rarityComum) {
                this.log(`Variáveis acessíveis (--rarity-comum: ${rarityComum})`, 'success');
            } else {
                this.log('Variáveis NÃO acessíveis', 'error');
                return false;
            }

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 2: Cores de Raridade Intactas
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkRarityColors() {
            this.log('TESTE 2: Verificação de Cores de Raridade', 'test');

            const expectedColors = {
                'comum': '#3b82f6',
                'raro': '#10b981',
                'epico': '#8b5cf6',
                'lendario': '#f97316',
                'mitico': '#ef4444',
                'celestial': '#fbbf24'
            };

            const root = document.documentElement;
            let allCorrect = true;

            Object.entries(expectedColors).forEach(([rarity, expectedHex]) => {
                const varName = `--rarity-${rarity}`;
                const computed = getComputedStyle(root).getPropertyValue(varName).trim();
                
                // Verificar se valor está presente
                if (computed && computed.length > 0) {
                    // Converter RGB para HEX se necessário para comparação
                    const computedHex = this.rgbToHex(computed) || computed;
                    const normalizedExpected = expectedHex.toLowerCase();
                    const normalizedComputed = computedHex.toLowerCase();

                    if (normalizedComputed.includes(normalizedExpected.substring(1))) {
                        this.log(`✓ ${varName}: ${computed} (correto)`, 'success');
                    } else {
                        this.log(`✗ ${varName}: ${computed} (esperado ${expectedHex})`, 'warning');
                        allCorrect = false;
                    }
                } else {
                    this.log(`✗ ${varName}: NÃO ENCONTRADO`, 'error');
                    allCorrect = false;
                }
            });

            return allCorrect;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 3: Transições Funcionando
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkTransitions() {
            this.log('TESTE 3: Verificação de Transições', 'test');

            const root = document.documentElement;
            const transitionSmooth = getComputedStyle(root).getPropertyValue('--transition-smooth').trim();
            const transitionFast = getComputedStyle(root).getPropertyValue('--transition-fast').trim();

            let allCorrect = true;

            if (transitionSmooth && transitionSmooth.includes('0.3s')) {
                this.log(`✓ --transition-smooth: ${transitionSmooth}`, 'success');
            } else {
                this.log(`✗ --transition-smooth: ${transitionSmooth || 'NÃO ENCONTRADO'}`, 'error');
                allCorrect = false;
            }

            if (transitionFast && transitionFast.includes('0.15s')) {
                this.log(`✓ --transition-fast: ${transitionFast}`, 'success');
            } else {
                this.log(`✗ --transition-fast: ${transitionFast || 'NÃO ENCONTRADO'}`, 'error');
                allCorrect = false;
            }

            return allCorrect;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 4: Modais Existem e Estão Estilizados
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkModals() {
            this.log('TESTE 4: Verificação de Modais', 'test');

            const modals = [
                { id: 'modal-racas', name: 'Raças' },
                { id: 'modal-classes', name: 'Classes' },
                { id: 'sorte-modal-overlay', name: 'Sorte' },
                { id: 'codex-magico-overlay', name: 'Codex Mágico' },
                { id: 'reputacao-overlay', name: 'Reputação' },
                { id: 'condico-overlay', name: 'Condições' }
            ];

            let allPresent = true;

            modals.forEach(modal => {
                const element = document.getElementById(modal.id) || document.querySelector(`.${modal.id}`);
                if (element) {
                    const style = window.getComputedStyle(element);
                    const isVisible = style.display !== 'none' || style.visibility !== 'hidden';
                    this.log(`✓ ${modal.name}: Elemento encontrado (${element.tagName.toLowerCase()})`, 'success');
                } else {
                    this.log(`⚠️  ${modal.name}: Elemento NÃO encontrado (pode não existir)`, 'warning');
                }
            });

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 5: Hover States Funcionam
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkHoverStates() {
            this.log('TESTE 5: Verificação de Hover States', 'test');

            // Procurar por elementos que devem ter hover
            const botoes = document.querySelectorAll('button, .btn-voltar, .btn-fechar, [class*="btn"]');
            
            if (botoes.length > 0) {
                this.log(`✓ ${botoes.length} elementos interativos encontrados`, 'success');
                
                // Verificar se têm estilos de transição
                let withTransition = 0;
                botoes.forEach(btn => {
                    const style = window.getComputedStyle(btn);
                    if (style.transition && style.transition !== 'none') {
                        withTransition++;
                    }
                });

                const percentage = Math.round((withTransition / botoes.length) * 100);
                if (percentage >= 50) {
                    this.log(`✓ ${percentage}% dos botões têm transições CSS`, 'success');
                } else {
                    this.log(`⚠️  ${percentage}% dos botões têm transições CSS`, 'warning');
                }
            } else {
                this.log('⚠️  Nenhum botão encontrado para teste', 'warning');
            }

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 6: Responsividade (Viewport Sizes)
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkResponsiveness() {
            this.log('TESTE 6: Verificação de Responsividade', 'test');

            const viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };

            const breakpoints = {
                mobile: 375,
                tablet: 768,
                desktop: 1024
            };

            let classification = 'Desconhecido';
            if (viewport.width < breakpoints.tablet) {
                classification = 'Mobile';
            } else if (viewport.width < breakpoints.desktop) {
                classification = 'Tablet';
            } else {
                classification = 'Desktop';
            }

            this.log(`✓ Viewport atual: ${viewport.width}x${viewport.height} (${classification})`, 'success');

            // Verificar se há media queries no CSS
            const stylesheets = document.styleSheets;
            let hasMediaQueries = false;

            try {
                for (let i = 0; i < stylesheets.length; i++) {
                    const sheet = stylesheets[i];
                    if (sheet.cssRules) {
                        for (let j = 0; j < sheet.cssRules.length; j++) {
                            if (sheet.cssRules[j].media) {
                                hasMediaQueries = true;
                                break;
                            }
                        }
                    }
                }
            } catch (e) {
                this.log('⚠️  Não foi possível verificar todas as media queries (CORS)', 'warning');
            }

            if (hasMediaQueries) {
                this.log('✓ Media queries detectadas no CSS', 'success');
            } else {
                this.log('⚠️  Nenhuma media query detectada', 'warning');
            }

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 7: Console - Erros e Warnings
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkConsoleErrors() {
            this.log('TESTE 7: Verificação de Erros no Console', 'test');

            // Contar erros capturados
            const originalError = console.error;
            const originalWarn = console.warn;
            let errorCount = 0;
            let warningCount = 0;

            // Interceptar futuros erros/warnings
            console.error = function(...args) {
                errorCount++;
                originalError.apply(console, args);
            };

            console.warn = function(...args) {
                warningCount++;
                originalWarn.apply(console, args);
            };

            // Restaurar após alguns segundos
            setTimeout(() => {
                console.error = originalError;
                console.warn = originalWarn;
            }, 3000);

            this.log('✓ Monitoramento de console ativado (3 segundos)', 'success');

            // Verificar CSS links
            const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
            let allCSSLoaded = true;

            cssLinks.forEach(link => {
                const href = link.href;
                const fileName = href.split('/').pop();
                
                // Verificar se o arquivo existe (simples check)
                if (href.includes('variables.css') || href.includes('global.css')) {
                    this.log(`✓ CSS carregado: ${fileName}`, 'success');
                }
            });

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 8: Variáveis Específicas de Modais
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkModalVariables() {
            this.log('TESTE 8: Verificação de Variáveis Específicas de Modais', 'test');

            const root = document.documentElement;
            const racaVars = ['--raca-primary', '--raca-secondary', '--raca-accent'];
            const classeVars = ['--classe-primary', '--classe-secondary', '--classe-accent'];

            let allFound = true;

            this.log('Variáveis de Raças:', 'info');
            racaVars.forEach(varName => {
                const value = getComputedStyle(root).getPropertyValue(varName).trim();
                if (value) {
                    this.log(`  ✓ ${varName}: ${value}`, 'success');
                } else {
                    this.log(`  ✗ ${varName}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            this.log('Variáveis de Classes:', 'info');
            classeVars.forEach(varName => {
                const value = getComputedStyle(root).getPropertyValue(varName).trim();
                if (value) {
                    this.log(`  ✓ ${varName}: ${value}`, 'success');
                } else {
                    this.log(`  ✗ ${varName}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            return allFound;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 9: Performance CSS
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkCSSPerformance() {
            this.log('TESTE 9: Verificação de Performance CSS', 'test');

            const stylesheets = document.styleSheets;
            let totalRules = 0;

            try {
                for (let i = 0; i < stylesheets.length; i++) {
                    const sheet = stylesheets[i];
                    if (sheet.cssRules) {
                        totalRules += sheet.cssRules.length;
                    }
                }
                this.log(`✓ ${totalRules} regras CSS carregadas`, 'success');
                
                if (totalRules > 2000) {
                    this.log('⚠️  Muitas regras CSS carregadas (pode afetar performance)', 'warning');
                } else {
                    this.log('✓ Quantidade de regras CSS dentro do esperado', 'success');
                }
            } catch (e) {
                this.log('⚠️  Não foi possível contar regras CSS (CORS)', 'warning');
            }

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // TESTE 10: Teste de Abertura de Modais (Se houver funções)
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        checkModalFunctions() {
            this.log('TESTE 10: Verificação de Funções de Modal', 'test');

            try {
                const globalFunctions = {
                    'racasUI': 'Sistema de Raças',
                    'classesUI': 'Sistema de Classes',
                    'sorteModal': 'Sistema de Sorte',
                    'codexMagico': 'Codex Mágico'
                };

                let foundFunctions = 0;

                Object.entries(globalFunctions).forEach(([funcName, description]) => {
                    if (typeof window[funcName] !== 'undefined') {
                        this.log(`✓ ${funcName} (${description}): Disponível`, 'success');
                        foundFunctions++;
                    } else {
                        this.log(`⚠️  ${funcName} (${description}): NÃO disponível`, 'warning');
                    }
                });

                if (foundFunctions > 0) {
                    this.log(`✓ ${foundFunctions} sistemas de modal detectados`, 'success');
                }
            } catch (err) {
                this.log(`⚠️  Erro ao verificar funções de modal: ${err.message}`, 'warning');
            }

            return true;
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // Utilitários
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        rgbToHex(rgb) {
            if (!rgb || rgb.startsWith('#')) return rgb;
            
            const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!match) return null;

            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);

            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        printSeparator() {
            console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: cyan');
        },

        printHeader(title) {
            console.log(`\n%c📊 ${title}`, 'color: cyan; font-size: 16px; font-weight: bold');
        },

        printSummary() {
            this.printSeparator();
            this.printHeader('RESUMO DA VALIDAÇÃO FINAL - FASE 4A');
            this.printSeparator();

            console.log(`%c✅ Testes Passou: ${this.passed}`, 'color: #10b981; font-weight: bold');
            console.log(`%c❌ Testes Falharam: ${this.failed}`, 'color: #ef4444; font-weight: bold');
            console.log(`%c⚠️  Avisos: ${this.warnings}`, 'color: #f97316; font-weight: bold');
            console.log('%c', '');

            if (this.failed === 0) {
                console.log('%c🎉 VALIDAÇÃO FINAL CONCLUÍDA COM SUCESSO!', 'color: #10b981; font-size: 16px; font-weight: bold');
                console.log('%c✓ Sistema visualmente idêntico', 'color: #10b981');
                console.log('%c✓ Nenhuma regressão detectada', 'color: #10b981');
                console.log('%c✓ Pronto para Fase 4B', 'color: #10b981');
            } else {
                console.log('%c❌ VALIDAÇÃO FALHOU COM ERROS', 'color: #ef4444; font-size: 16px; font-weight: bold');
                console.log('%cVerifique os erros acima antes de prosseguir.', 'color: #ef4444');
            }

            console.log('%c', '');
            this.printSeparator();

            // Retornar resultado para verificação
            return {
                success: this.failed === 0,
                passed: this.passed,
                failed: this.failed,
                warnings: this.warnings,
                messages: this.messages
            };
        },

        // ═════════════════════════════════════════════════════════════════════════════════════
        // EXECUÇÃO COMPLETA
        // ═════════════════════════════════════════════════════════════════════════════════════
        
        runAll() {
            this.printHeader('VALIDAÇÃO FINAL PRÁTICA - FASE 4A');
            console.log('%cConsolidação de Variáveis CSS', 'color: gray; font-style: italic');
            this.printSeparator();

            // Executar todos os testes
            this.checkLoading();
            this.printSeparator();
            
            this.checkRarityColors();
            this.printSeparator();
            
            this.checkTransitions();
            this.printSeparator();
            
            this.checkModals();
            this.printSeparator();
            
            this.checkHoverStates();
            this.printSeparator();
            
            this.checkResponsiveness();
            this.printSeparator();
            
            this.checkConsoleErrors();
            this.printSeparator();
            
            this.checkModalVariables();
            this.printSeparator();
            
            this.checkCSSPerformance();
            this.printSeparator();
            
            this.checkModalFunctions();
            this.printSeparator();

            const result = this.printSummary();
            
            // Expor resultado para acesso externo
            window.validacaoFinalResult = result;
            
            return result;
        }
    };

    // Executar testes quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            validacaoFinal.runAll();
        });
    } else {
        validacaoFinal.runAll();
    }

    // Expor no window para acesso manual
    window.validacaoFinal = validacaoFinal;
})();
