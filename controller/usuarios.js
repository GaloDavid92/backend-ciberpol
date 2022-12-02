
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const login = async (data) => {
    const usuario = await prisma.usuario.findFirst({
        where:{
            correo: data.correo,
            clave: data.clave
        },
        select:{
            id: true,
            correo:true,
            tipo: true
        }
    })
    
    return usuario
}

export default { login }