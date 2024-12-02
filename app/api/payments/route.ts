import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        client: true
      }
    })
    return NextResponse.json(payments)
  } catch (error) {
    console.error('Error fetching payments:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

