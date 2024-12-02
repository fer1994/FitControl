import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    // TODO: Replace this with actual user authentication
    const userId = 'example-user-id'

    const payments = await prisma.payment.findMany({
      where: {
        userId: userId
      },
      include: {
        client: true
      }
    })
    return NextResponse.json(payments)
  } catch (error) {
    console.error('Error fetching my payments:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

