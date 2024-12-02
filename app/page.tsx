'use client'

import Link from 'next/link'
import { useTranslation } from '@/components/LanguageProvider'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">{t('welcome')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/register" className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center hover:bg-primary/90 transition-colors">
          {t('register')}
        </Link>
        <Link href="/login" className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-center hover:bg-secondary/90 transition-colors">
          {t('login')}
        </Link>
      </div>
    </main>
  )
}

