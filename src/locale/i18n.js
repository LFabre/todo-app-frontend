import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EN from './en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: EN },      
    },
    lng: 'en',
    fallbackLng: 'en',

    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.',

    interpolation: {
      escapeValue: false
    },
  });

export default i18n