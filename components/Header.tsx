"use client"

import { useTranslation } from 'react-i18next'
import { useTheme } from 'next-themes'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FitControl</h1>
      <div>
        <button
          onClick={toggleLanguage}
          className="mr-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {t('changeLanguage')}
        </button>
        <button
          onClick={toggleTheme}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {t('toggleTheme')}
        </button>
      </div>
    </header>
  )
}

