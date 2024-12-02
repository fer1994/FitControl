'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'
import { Payment } from '@prisma/client'

interface PaymentWithClient extends Payment {
    client: {
        name: string;
    }
}

export default function MyPaymentsClient() {
    const { t } = useTranslation()
    const [payments, setPayments] = useState<PaymentWithClient[]>([])

    useEffect(() => {
        async function fetchMyPayments() {
            const response = await fetch('/api/my-payments')
            const data = await response.json()
            setPayments(data)
        }
        fetchMyPayments()
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('myPayments')}</h2>
            <Card>
                <CardHeader>
                    <CardTitle>{t('myPaymentsList')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('amount')}</TableHead>
                                <TableHead>{t('date')}</TableHead>
                                <TableHead>{t('client')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                                    <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                                    <TableCell>{payment.client.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
