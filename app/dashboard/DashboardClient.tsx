'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Calendar, Dumbbell } from 'lucide-react'
import { useEffect, useState } from 'react'

interface DashboardData {
    clientsCount: number
    totalRevenue: number
    classesCount: number
    routinesCount: number
}

export default function DashboardClient() {
    const { t } = useTranslation()
    const [data, setData] = useState<DashboardData | null>(null)

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const response = await fetch('/api/dashboard')
                if (!response.ok) {
                    throw new Error('Failed to fetch dashboard data')
                }
                const dashboardData = await response.json()
                setData(dashboardData)
            } catch (error) {
                console.error('Error fetching dashboard data:', error)
            }
        }

        fetchDashboardData()
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    const stats = [
        { title: 'totalClients', value: data.clientsCount, icon: Users },
        { title: 'monthlyRevenue', value: `$${data.totalRevenue.toFixed(2)}`, icon: DollarSign },
        { title: 'classesThisWeek', value: data.classesCount, icon: Calendar },
        { title: 'activeRoutines', value: data.routinesCount, icon: Dumbbell },
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('dashboard')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className="overflow-hidden transition-shadow hover:shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {t(stat.title)}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

