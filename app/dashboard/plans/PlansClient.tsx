'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'
import { Plan } from '@prisma/client'

export default function PlansClient() {
    const { t } = useTranslation()
    const [plans, setPlans] = useState<Plan[]>([])

    useEffect(() => {
        async function fetchPlans() {
            const response = await fetch('/api/plans')
            const data = await response.json()
            setPlans(data)
        }
        fetchPlans()
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('plans')}</h2>
            <Card>
                <CardHeader>
                    <CardTitle>{t('plansList')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('name')}</TableHead>
                                <TableHead>{t('description')}</TableHead>
                                <TableHead>{t('price')}</TableHead>
                                <TableHead>{t('duration')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {plans.map((plan) => (
                                <TableRow key={plan.id}>
                                    <TableCell>{plan.name}</TableCell>
                                    <TableCell>{plan.description}</TableCell>
                                    <TableCell>${plan.price.toFixed(2)}</TableCell>
                                    <TableCell>{plan.duration} {t('days')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

