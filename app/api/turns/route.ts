import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const turns = await prisma.turn.findMany({
      include: {
        client: true,
        class: true
      }
    })
    return NextResponse.json(turns)
  } catch (error) {
    console.error('Error fetching turns:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

