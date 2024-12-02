'use client'

import { useTranslation } from '@/components/LanguageProvider'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'
import { Routine } from '@prisma/client'

interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
}

interface RoutineWithParsedExercises extends Omit<Routine, 'exercises'> {
    exercises: Exercise[];
}

export default function RoutinesClient() {
    const { t } = useTranslation()
    const [routines, setRoutines] = useState<RoutineWithParsedExercises[]>([])

    useEffect(() => {
        async function fetchRoutines() {
            const response = await fetch('/api/routines')
            const data: Routine[] = await response.json()
            const parsedRoutines = data.map(routine => ({
                ...routine,
                exercises: JSON.parse(routine.exercises as string) as Exercise[]
            }))
            setRoutines(parsedRoutines)
        }
        fetchRoutines()
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{t('routines')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {routines.map((routine) => (
                    <Card key={routine.id}>
                        <CardHeader>
                            <CardTitle>{routine.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{routine.description}</p>
                            <h3 className="font-semibold mb-2">{t('exercises')}:</h3>
                            <ul className="list-disc pl-5">
                                {routine.exercises.map((exercise, index) => (
                                    <li key={index}>
                                        {exercise.name}: {exercise.sets} x {exercise.reps}
                                        {exercise.weight ? ` @ ${exercise.weight}kg` : ''}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

