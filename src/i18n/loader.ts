// src/lib/i18n/loader.ts
import { addMessages, locale, init } from 'svelte-i18n';

const pageFiles = import.meta.glob('./*/*.json', { eager: true });
const loaded = new Set<string>(); // 🧠 Remember what's already loaded

let initialized = false;

export function loadTranslations(lang: string, page: string) {
  if (!initialized) {
    init({
      fallbackLocale: 'en',
      initialLocale: lang
    });
    initialized = true;
  }

  const pageKey = `./${page}/${lang}.json`;
  const loadKey = `${lang}/${page}`;

  if (loaded.has(loadKey)) {
    locale.set(lang);
    return;
  }

  const pageData = (pageFiles[pageKey] as { default: Record<string, any> })?.default;

  if (pageData) {
    addMessages(lang, pageData);
    loaded.add(loadKey); // ✅ Don't re-add next time
  } else {
    console.warn(`No translation found for ${pageKey}`);
  }

  locale.set(lang);
}
