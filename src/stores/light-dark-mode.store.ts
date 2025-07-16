import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

type ThemeMode = 'light' | 'dark';

// Core theme setting function (your original implementation)
function setThemeMode(isDarkMode: boolean, root?: HTMLElement): void {
    if (!browser) return;
    
    const mode: ThemeMode = isDarkMode ? 'dark' : 'light';
    const targetRoot = root || document.documentElement;
    const suffix = isDarkMode ? '-dark' : '-light';

    const colorVariables = [
        'primary',
        'secondary',
        'nav',
        'card',
        'bg',
        'box-shadow',
        'text',
        'text-placeholder'
    ];

    // Update CSS variables
    targetRoot.style.setProperty('--gradient', `var(--gradient-${mode})`);
    
    colorVariables.forEach(variable => {
        const computedValue = getComputedStyle(targetRoot)
            .getPropertyValue(`--${variable}${suffix}`)
            .trim();
        targetRoot.style.setProperty(`--${variable}`, computedValue);
    });

    if (browser) {
        localStorage.setItem('themeMode', mode);
    }
}

// 1. Create the store
export const darkMode = writable<boolean>(false, (set) => {
    if (!browser) return;

    // Initialize
    const saved = localStorage.getItem('themeMode');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = saved ? saved === 'dark' : systemDark;
    
    set(initialMode);
    setThemeMode(initialMode);

    // Watch system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
        set(e.matches);
        setThemeMode(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    
    return () => mediaQuery.removeEventListener('change', listener);
});

// 2. Toggle action
export function toggleTheme() {
    darkMode.update(current => {
        const newMode = !current;
        setThemeMode(newMode);
        return newMode;
    });
}

// 3. Derived values
export const themeMode = derived(darkMode, $dark => $dark ? 'dark' : 'light');