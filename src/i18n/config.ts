import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationID from './locales/id.json';
import translationEN from './locales/en.json';
import translationJP from './locales/jp.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';
import translationDE from './locales/de.json';
import translationZH from './locales/zh.json';
import translationAR from './locales/ar.json';
import translationRU from './locales/ru.json';

const resources = {
  id: {
    translation: translationID
  },
  en: {
    translation: translationEN
  },
  jp: {
    translation: translationJP
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  },
  zh: {
    translation: translationZH
  },
  ar: {
    translation: translationAR
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    supportedLngs: ['id', 'en', 'jp', 'es', 'fr', 'de', 'zh', 'ar', 'ru'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
