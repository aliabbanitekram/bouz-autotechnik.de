import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './de.json'
import en from './en.json'

const storedLanguage = window.localStorage.getItem('bouz-language')
const browserLanguage = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'de'

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  lng: storedLanguage || browserLanguage || 'de',
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  window.localStorage.setItem('bouz-language', language)
  document.documentElement.lang = language
})

document.documentElement.lang = i18n.language

export default i18n
