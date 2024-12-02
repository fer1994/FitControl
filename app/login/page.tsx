'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/components/LanguageProvider'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      // In a real application, you would call an API endpoint here
      // For this example, we'll use dummy authentication
      if (email === 'user@example.com' && password === 'password') {
        // Simulate successful login
        console.log('Login successful')
        router.push('/dashboard')
      } else {
        setError(t('invalidCredentials'))
      }
    } catch (err) {
      setError(t('loginError'))
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{t('login')}</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('password')}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg px-4 py-2 text-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {t('login')}
        </button>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          {t('noAccount')}{' '}
          <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
            {t('registerHere')}
          </Link>
        </p>
      </form>
    </div>
  )
}

