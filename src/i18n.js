// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import faTranslation from './locales/fa/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            fa: {
                translation: faTranslation
            }
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language if the current language is missing translations
        interpolation: {
            escapeValue: false // React already does escaping
        }
    });

export default i18n;
