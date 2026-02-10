import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('portfolio_language')
    if (savedLanguage) {
      return savedLanguage
    }
    
    // Auto-detect browser language
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
    return browserLanguage.startsWith('ja') ? 'jp' : 'en'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('portfolio_language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLanguage = prev === 'en' ? 'jp' : 'en'
      localStorage.setItem('portfolio_language', newLanguage)
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
