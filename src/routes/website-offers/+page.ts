import { loadTranslations } from '../../i18n/loader';
import { lang } from '$stores/lang.store';



export function load() {
  lang.subscribe(value => {
    loadTranslations(value, 'website-offers');
  });
  return {};
}