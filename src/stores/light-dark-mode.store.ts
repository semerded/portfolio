import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

type ThemeMode = 'light' | 'dark';

function setThemeMode(isDarkMode: boolean): void {
    if (!browser) return;

    const mode: ThemeMode = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('themeMode', mode);
}

// Store to hold dark mode state
export const darkMode = writable<boolean>(false, (set) => {
    if (!browser) return;

    const saved = localStorage.getItem('themeMode') as ThemeMode | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = saved ? saved === 'dark' : systemDark;

    set(initialMode);
    setThemeMode(initialMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
        set(e.matches);
        setThemeMode(e.matches);
    };
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
});

// Toggle dark/light mode
export function toggleTheme() {
    darkMode.update(current => {
        const newMode = !current;
        setThemeMode(newMode);
        return newMode;
    });
}

// Derived store: 'dark' | 'light'
export const themeMode = derived(darkMode, $dark => $dark ? 'dark' : 'light');
