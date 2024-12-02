import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const clientsCount = await prisma.client.count()
    const totalRevenue = await prisma.payment.aggregate({
      _sum: {
        amount: true,
      },
    })
    const classesCount = await prisma.class.count()
    const routinesCount = await prisma.routine.count()

    return NextResponse.json({
      clientsCount,
      totalRevenue: totalRevenue._sum.amount || 0,
      classesCount,
      routinesCount,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

