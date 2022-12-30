
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUbicacion = async (idDistrito) =>{
    const ubicacion = await prisma.distrito.findFirst({
        where:{
            id:idDistrito
        },
        include: {
            canton: {
                include: {
                    provincia: {
                        include: {
                            zona: true
                        }
                    }
                }
            }
        }
    })
    return ubicacion
}

const getZonas = async () => {
    const zonas = await prisma.zona.findMany()
    return zonas
}

const getProvincias = async (idZona) => {
    const provincias = await prisma.provincia.findMany({
        where: {
            idZona: parseInt(idZona)
        }
    })
    return provincias
}

const getCantones = async (idProv) => {
    const cantones = await prisma.canton.findMany({
        where: {
            idProvincia: parseInt(idProv)
        }
    })
    return cantones
}

const getDistritos = async (idCanton) => {
    const distritos = await prisma.distrito.findMany({
        where: {
            idCanton: parseInt(idCanton)
        }
    })
    return distritos
}

export default {getUbicacion, getZonas, getProvincias, getCantones, getDistritos }