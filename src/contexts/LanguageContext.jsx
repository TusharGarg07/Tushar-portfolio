import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en'
  }
  
  const savedLanguage = localStorage.getItem('portfolio_language')
  if (savedLanguage) {
    return savedLanguage
  }
  
  const browserLanguage = window.navigator.language || window.navigator.languages?.[0] || 'en'
  return browserLanguage.startsWith('ja') ? 'jp' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    // Save language preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_language', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLanguage = prev === 'en' ? 'jp' : 'en'
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_language', newLanguage)
      }
      return newLanguage
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
