'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'
import { Turn, Client, Class } from '@prisma/client'

interface TurnWithRelations extends Turn {
    client: Client;
    class: Class;
}

export default function TurnsClient() {
    const { t } = useTranslation()
    const [turns, setTurns] = useState<TurnWithRelations[]>([])

    useEffect(() => {
        async function fetchTurns() {
            const response = await fetch('/api/turns')
            const data = await response.json()
            setTurns(data)
        }
        fetchTurns()
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('turns')}</h2>
            <Card>
                <CardHeader>
                    <CardTitle>{t('turnsList')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('date')}</TableHead>
                                <TableHead>{t('client')}</TableHead>
                                <TableHead>{t('class')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {turns.map((turn) => (
                                <TableRow key={turn.id}>
                                    <TableCell>{new Date(turn.date).toLocaleString()}</TableCell>
                                    <TableCell>{turn.client.name}</TableCell>
                                    <TableCell>{turn.class.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

