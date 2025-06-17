// src/lib/i18n/loader.ts
import { addMessages, locale, init } from 'svelte-i18n';

// Import all JSON files in immediate subfolders, e.g. 'index/en.json'
const pageFiles = import.meta.glob('./*/*.json', { eager: true });

export function loadTranslations(lang: string, page: string) {
  const pageKey = `./${page}/${lang}.json`;

  init({
    fallbackLocale: 'en',
    initialLocale: lang
  });

  console.log('pageFiles:', Object.keys(pageFiles));
  console.log('pageKey:', pageKey);

  const pageData = (pageFiles[pageKey] as { default: Record<string, any> })?.default;

  if (pageData) {
    addMessages(lang, pageData);
  } else {
    console.warn(`No translation found for ${pageKey}`);
  }

  locale.set(lang);
}
