"use client"

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement registration logic
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('register')}</h2>
        <input
          type="text"
          placeholder={t('name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder={t('email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="password"
          placeholder={t('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <button type="submit" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg px-4 py-2 text-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
          {t('register')}
        </button>
      </form>
    </div>
  )
}

