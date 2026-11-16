import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './Data/FR/global.json';
import translationEN from './Data/EN/global.json';
import translationES from './Data/ES/global.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: { global: translationFR },
            en: { global: translationEN },
            es: { global: translationES }
        },

        ns: ['global'],
        defaultNS: 'global',
        fallbackLng: 'en',
        supportedLngs: ['fr', 'en', 'es'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        },

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;