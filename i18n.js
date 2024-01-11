import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de idioma
import translationEN from './translations/en.json';
import translationES from './translations/es.json';

// Configuración de i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo en caso de no encontrar una traducción
  interpolation: {
    escapeValue: false, // Permite el uso de HTML en las traducciones
  },
});

export default i18n;
