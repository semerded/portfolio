import { addMessages, locale, init } from 'svelte-i18n';

// Glob all page translations and general ones
const pageFiles = import.meta.glob('./*/*.json', { eager: true });
const generalFiles = import.meta.glob('./*.json', { eager: true });

const loadedPages = new Set<string>();
const loadedGenerals = new Set<string>();

let initialized = false;

export function loadTranslations(lang: string, page: string) {
  if (!initialized) {
    init({
      fallbackLocale: 'en',
      initialLocale: lang
    });
    initialized = true;
  }

  // Load general translation if not already loaded
  if (!loadedGenerals.has(lang)) {
    const generalKey = `./${lang}.json`;
    const generalData = (generalFiles[generalKey] as { default: Record<string, any> })?.default;

    if (generalData) {
      addMessages(lang, generalData);
      loadedGenerals.add(lang);
    } else {
      console.warn(`No general translation found for ${generalKey}`);
    }
  }

  // Load page-specific translation if not already loaded
  const pageKey = `./${page}/${lang}.json`;
  const loadKey = `${lang}/${page}`;

  if (!loadedPages.has(loadKey)) {
    const pageData = (pageFiles[pageKey] as { default: Record<string, any> })?.default;

    if (pageData) {
      addMessages(lang, pageData);
      loadedPages.add(loadKey);
    } else {
      console.warn(`No page translation found for ${pageKey}`);
    }
  }

  locale.set(lang);
}
