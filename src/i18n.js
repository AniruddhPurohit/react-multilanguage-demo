import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
.use(LanguageDetector)
.use(HttpApi)
.use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: { escapeValue: false, formatSeparator: ',' },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json'
    },
    supportedLngs: ['en', 'gu'],
    ns: ['common', 'login'],
    react: { wait: true, useSuspense: false }
  });

export default i18n;
