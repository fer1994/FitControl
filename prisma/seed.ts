import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const adminPassword = await hash('admin123', 10)
  const trainerPassword = await hash('trainer123', 10)
  const clientPassword = await hash('client123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@fitcontrol.com' },
    update: {},
    create: {
      email: 'admin@fitcontrol.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  const trainer = await prisma.user.upsert({
    where: { email: 'trainer@fitcontrol.com' },
    update: {},
    create: {
      email: 'trainer@fitcontrol.com',
      name: 'Trainer User',
      password: trainerPassword,
      role: 'TRAINER',
    },
  })

  const client = await prisma.user.upsert({
    where: { email: 'client@fitcontrol.com' },
    update: {},
    create: {
      email: 'client@fitcontrol.com',
      name: 'Client User',
      password: clientPassword,
      role: 'CLIENT',
    },
  })

  console.log({ admin, trainer, client })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

