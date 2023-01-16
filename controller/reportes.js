
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const reportes = async () => {
    const agentes = prisma.agente.findMany({
        include: {
            _count:{
                select:{ delegaciones:true}
            }
        }
    })

    return agentes
}

const reportesDelitos = async () => {
    const delitos = prisma.delito.findMany({
        include: {
            _count:{
                select:{ delegaciones:true}
            }
        }
    })

    return delitos
}

export default { reportes, reportesDelitos}