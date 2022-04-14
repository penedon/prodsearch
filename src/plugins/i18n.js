import { createI18n } from 'vue-i18n'

import en from '@/locales/en'
import es from '@/locales/es'
import pt from '@/locales/pt'

const messages = {
    'en': en,
    'es': es,
    'pt': pt
};

const i18n = new createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  globalInjection: true,
  messages, // set locale messages
})

export {
    i18n
};