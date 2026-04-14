import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)
const storageKey = 'portfolio-language'

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLanguage = window.localStorage.getItem(storageKey)

  return savedLanguage === 'fr' ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(storageKey, language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((previousLanguage) => (previousLanguage === 'en' ? 'fr' : 'en'))
  }

  const t = (key) => {
    return translations[language]?.[key] ?? key
  }

  const value = useMemo(
    () => ({
      language,
      nextLanguageLabel: language === 'en' ? 'FR' : 'EN',
      toggleLanguage,
      t,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider')
  }

  return context
}
