
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getDelitos = async () => {
    const delitos = await prisma.seccionDelito.findMany({
        include: {
            delitos: true
        },
    })
    return delitos
}

const getModalidades = async () => {
    const modalidades = await prisma.modalidadDelito.findMany()
    return modalidades
}

export default { getDelitos, getModalidades }