import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        translation: require('./translations.json')
      }
    },
    en : {
        translation: {
            translation: require('./translations.json')
          }
    }
  },
  lng: 'es',
  lng: 'en',
  fallbackLng: 'es'
});