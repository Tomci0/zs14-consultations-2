(() => {
    'use strict'
  
    document.addEventListener('DOMContentLoaded', () => {
        const getStoredTheme = () => localStorage.getItem('theme');
        const setStoredTheme = theme => localStorage.setItem('theme', theme);
  
        const getPreferredTheme = () => {
            const storedTheme = getStoredTheme();
            
            if (storedTheme) {
                return storedTheme;
            }
  
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };
  
        const setTheme = theme => {
            document.documentElement.setAttribute('data-bs-theme', theme);

            $('.change-theme').each((i, el) => {
                const btn = $(el)

                const $icon = btn.find('.iconify')

                if ($icon) {
                    $icon.attr('data-icon', theme === 'dark'?'bi:sun-fill' : 'bi:moon-fill');
                }
            });
        }
  
        const updateTheme = () => {
            const currentTheme = getStoredTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setStoredTheme(newTheme);
            setTheme(newTheme);
        };
    
        const showActiveTheme = () => {
            const currentTheme = getStoredTheme() || getPreferredTheme();
            setTheme(currentTheme);
        };
    
        // each document query selector
    
        $('.change-theme').each((i, el) => {
            const $btn = $(el);

            $btn.on('click', () => {
                updateTheme();
            })
        });
    
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const storedTheme = getStoredTheme();
            if (!storedTheme) {
            showActiveTheme();
            }
        });
    
        showActiveTheme();
    });
})()