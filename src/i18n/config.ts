import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationID from './locales/id.json';
import translationEN from './locales/en.json';
import translationJP from './locales/jp.json';

const resources = {
  id: {
    translation: translationID
  },
  en: {
    translation: translationEN
  },
  jp: {
    translation: translationJP
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    supportedLngs: ['id', 'en', 'jp'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
