"use client"

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/dashboard', label: 'dashboard' },
  { href: '/dashboard/clients', label: 'clients' },
  { href: '/dashboard/payments', label: 'payments' },
  { href: '/dashboard/turns', label: 'turns' },
  { href: '/dashboard/plans', label: 'plans' },
  { href: '/dashboard/classes', label: 'classes' },
  { href: '/dashboard/my-payments', label: 'myPayments' },
  { href: '/dashboard/routines', label: 'routines' },
]

export default function Sidebar() {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link
                href={item.href}
                className={`block p-2 rounded-lg ${
                  pathname === item.href
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

