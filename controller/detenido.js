
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getCondiciones = async () => {
    const condiciones = await prisma.condicion.findMany()
    return condiciones
}

const getParentesco = async () => {
    const condiciones = await prisma.parentesco.findMany()
    return condiciones
}

export default { getCondiciones, getParentesco }