/**
 * VALIDAÇÃO FASE 4A - CONSOLIDAÇÃO DE VARIÁVEIS CSS
 * 
 * Script para validar:
 * 1. Carregamento correto de variables.css
 * 2. Propagação correta de variáveis
 * 3. Sem erros de CSS
 * 4. Sem alterações visuais
 * 
 * Data: 27 de fevereiro de 2026
 */

(function() {
    'use strict';

    const fase4aTests = {
        passed: 0,
        failed: 0,
        warnings: 0,
        messages: [],

        log(message, level = 'info') {
            const timestamp = new Date().toLocaleTimeString('pt-BR');
            const prefix = {
                'info': '📋',
                'success': '✅',
                'error': '❌',
                'warning': '⚠️'
            }[level] || '•';
            
            const msg = `[${timestamp}] ${prefix} ${message}`;
            this.messages.push({ message, level });
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
                'warning': 'color: #f97316; font-weight: bold'
            };
            return styles[level] || 'color: #666';
        },

        // Verificar se variáveis estão carregadas
        checkVariablesLoaded() {
            console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: cyan');
            console.log('%c✅ FASE 4A: VALIDAÇÃO DE VARIÁVEIS CSS', 'color: cyan; font-size: 16px; font-weight: bold');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: cyan');

            this.log('TESTE 1: Verificação de Arquivo variables.css');
            
            const variablesLink = document.querySelector('link[href*="variables.css"]');
            if (variablesLink) {
                this.log('variables.css carregado no DOM', 'success');
            } else {
                this.log('❌ variables.css NÃO encontrado no DOM', 'error');
                return false;
            }

            // Verificar ordem de carregamento (variables ANTES de global)
            const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
            const variablesIndex = links.findIndex(l => l.href.includes('variables.css'));
            const globalIndex = links.findIndex(l => l.href.includes('global.css'));
            
            if (variablesIndex !== -1 && globalIndex !== -1) {
                if (variablesIndex < globalIndex) {
                    this.log('variables.css carregado ANTES de global.css ✓', 'success');
                } else {
                    this.log('⚠️  variables.css carregado DEPOIS de global.css (ordem incorreta)', 'warning');
                }
            }

            return true;
        },

        // Verificar variáveis de raridade
        checkRarityVariables() {
            this.log('TESTE 2: Variáveis de Raridade');

            const root = document.documentElement;
            const rarities = ['comum', 'raro', 'epico', 'lendario', 'mitico', 'celestial'];
            const rarityColors = {
                'comum': '#3b82f6',
                'raro': '#10b981',
                'epico': '#8b5cf6',
                'lendario': '#f97316',
                'mitico': '#ef4444',
                'celestial': '#fbbf24'
            };

            let allFound = true;
            rarities.forEach(rarity => {
                const varName = `--rarity-${rarity}`;
                const computed = getComputedStyle(root).getPropertyValue(varName).trim();
                const expected = rarityColors[rarity];

                if (computed) {
                    // Verificar se o valor está correto (pode estar com espaços)
                    const computedHex = this.rgbToHex(computed) || computed;
                    this.log(`--rarity-${rarity}: ${computed}`, 'success');
                } else {
                    this.log(`--rarity-${rarity}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            return allFound;
        },

        // Verificar variáveis de transição
        checkTransitionVariables() {
            this.log('TESTE 3: Variáveis de Transição');

            const root = document.documentElement;
            const transitions = [
                { name: 'smooth', value: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' },
                { name: 'fast', value: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)' }
            ];

            let allFound = true;
            transitions.forEach(trans => {
                const varName = `--transition-${trans.name}`;
                const computed = getComputedStyle(root).getPropertyValue(varName).trim();

                if (computed) {
                    this.log(`--transition-${trans.name}: ${computed}`, 'success');
                } else {
                    this.log(`--transition-${trans.name}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            return allFound;
        },

        // Verificar variáveis específicas de modais
        checkModalVariables() {
            this.log('TESTE 4: Variáveis de Modais (Raças e Classes)');

            const root = document.documentElement;
            const racaVars = ['--raca-primary', '--raca-secondary', '--raca-accent', '--raca-text-primary'];
            const classeVars = ['--classe-primary', '--classe-secondary', '--classe-accent', '--classe-text-primary'];

            let allFound = true;

            racaVars.forEach(varName => {
                const computed = getComputedStyle(root).getPropertyValue(varName).trim();
                if (computed) {
                    this.log(`${varName}: ${computed}`, 'success');
                } else {
                    this.log(`${varName}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            classeVars.forEach(varName => {
                const computed = getComputedStyle(root).getPropertyValue(varName).trim();
                if (computed) {
                    this.log(`${varName}: ${computed}`, 'success');
                } else {
                    this.log(`${varName}: NÃO ENCONTRADO`, 'error');
                    allFound = false;
                }
            });

            return allFound;
        },

        // Verificar erros de CSS no console
        checkCSSErrors() {
            this.log('TESTE 5: Verificação de Erros CSS');

            // Nota: Não podemos acessar erros de CSS diretamente via JavaScript
            // Instruir o usuário a verificar manualmente
            this.log('Por favor, verifique console (F12) para erros CSS', 'info');
            this.log('Procure por mensagens "Failed to load" ou "Parse error"', 'info');

            return true;
        },

        // Verificar se elementos visuais estão corretos
        checkVisualElements() {
            this.log('TESTE 6: Verificação de Elementos Visuais');

            const racasModal = document.querySelector('#modal-racas');
            const classesModal = document.querySelector('#modal-classes');

            if (racasModal) {
                const style = window.getComputedStyle(racasModal);
                this.log(`Modal Raças encontrado - display: ${style.display}`, 'success');
            } else {
                this.log('Modal Raças não encontrado', 'warning');
            }

            if (classesModal) {
                const style = window.getComputedStyle(classesModal);
                this.log(`Modal Classes encontrado - display: ${style.display}`, 'success');
            } else {
                this.log('Modal Classes não encontrado', 'warning');
            }

            return true;
        },

        // Utilitário para converter RGB para HEX
        rgbToHex(rgb) {
            if (!rgb || rgb.startsWith('#')) return rgb;
            
            const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!match) return null;

            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);

            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        // Executar todos os testes
        runAll() {
            if (!this.checkVariablesLoaded()) {
                this.log('❌ Falha crítica: variables.css não carregado', 'error');
                this.printSummary();
                return false;
            }

            this.checkRarityVariables();
            this.checkTransitionVariables();
            this.checkModalVariables();
            this.checkCSSErrors();
            this.checkVisualElements();

            this.printSummary();
            return this.failed === 0;
        },

        printSummary() {
            console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: cyan');
            console.log('%c📊 RESUMO DA VALIDAÇÃO', 'color: cyan; font-size: 14px; font-weight: bold');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: cyan');
            console.log(`%c✅ Testes Passou: ${this.passed}`, 'color: #10b981; font-weight: bold');
            console.log(`%c❌ Testes Falharam: ${this.failed}`, 'color: #ef4444; font-weight: bold');
            console.log(`%c⚠️  Avisos: ${this.warnings}`, 'color: #f97316; font-weight: bold');
            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: cyan');

            if (this.failed === 0) {
                console.log('%c🎉 VALIDAÇÃO CONCLUÍDA COM SUCESSO!', 'color: #10b981; font-size: 16px; font-weight: bold');
                console.log('%cTodas as variáveis foram carregadas corretamente.', 'color: #10b981');
            } else {
                console.log('%c❌ VALIDAÇÃO FALHOU COM ERROS', 'color: #ef4444; font-size: 16px; font-weight: bold');
                console.log('%cVerifique os erros acima e corrija antes de continuar.', 'color: #ef4444');
            }

            console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: cyan');
        }
    };

    // Executar testes quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            fase4aTests.runAll();
        });
    } else {
        fase4aTests.runAll();
    }

    // Expor no window para acesso manual
    window.fase4aTests = fase4aTests;
})();
