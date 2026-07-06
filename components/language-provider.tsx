'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Language, type Translation } from '@/lib/translations'

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
