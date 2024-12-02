'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Class } from '@prisma/client'

interface ClassesClientProps {
    classes: Class[]
}

export default function ClassesClient({ classes }: ClassesClientProps) {
    const { t } = useTranslation()

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('classes')}</h2>
            <Card>
                <CardHeader>
                    <CardTitle>{t('classesList')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('name')}</TableHead>
                                <TableHead>{t('description')}</TableHead>
                                <TableHead>{t('instructor')}</TableHead>
                                <TableHead>{t('schedule')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classes.map((classItem) => (
                                <TableRow key={classItem.id}>
                                    <TableCell>{classItem.name}</TableCell>
                                    <TableCell>{classItem.description}</TableCell>
                                    <TableCell>{classItem.instructor}</TableCell>
                                    <TableCell>{classItem.schedule.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

