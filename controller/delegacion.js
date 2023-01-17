
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getDelegaciones = async () => {
    const delegaciones = await prisma.delegacion.findMany({
        include: {
            agente: {
                include: {
                    usuario: {
                        select: {
                            correo: true
                        }
                    }
                }
            },
            grado: true,
            delito: {
                include: {
                    seccion: true
                }
            },
            Modalidad: true,
            distrito: {
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
            },
            condicion: true,
            parentesco: true,
            art444: true,
            tiposPeticiones: true,
            detenidosProdInv: true,
        }
    })
    return delegaciones
}

const getDelegacion = async (id) => {
    const delegacion = await prisma.delegacion.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            agente: true,
            grado: true,
            delito: {
                include: {
                    seccion: true
                }
            },
            Modalidad: true,
            distrito: {
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
            },
            condicion: true,
            parentesco: true,
            art444: true,
            tiposPeticiones: true,
            detenidosProdInv: true,
        }
    })
    return delegacion
}

const cosultDelegacion = async (buscar) => {
    const delegacion = await prisma.delegacion.findFirst({
        where: {
            OR: [
                {
                    numInstFiscal: buscar
                },
                {
                    numInvestPrevia: buscar
                }
            ]
        },
        select: {
            cumplimiento: true,
            fechaCumplimiento:true,
            numOficioDescargo:true,
            numVersiones:true,
            recLugarHechos:true,
            detPosibResp:true,
            compareceSospechoso:true,
            peticionFiscalia:true,
            tiposPeticiones: true,
            informeODescargo:true,
            causasIncumplimiento:true,
            detenidosProdInv:true,
            observaciones:true
        }
    })
    return delegacion
}

const saveDelegacion = async (delegacion) => {
    const newDelegacion = await prisma.delegacion.create({
        data: {
            mesIngreso: delegacion.mesIngreso,
            numInvestPrevia: delegacion.numInvestPrevia,
            numInstFiscal: delegacion.numInstFiscal,
            idDistrito: delegacion.idDistrito,
            idAgente: delegacion.idAgente,
            idGrado: delegacion.idGrado,
            idDelito: delegacion.idDelito,
            idModalidad: delegacion.idModalidad,
            fechaInfraccion: delegacion.fechaInfraccion,
            nombreVictima: delegacion.nombreVictima,
            sexoVictima: delegacion.sexoVictima,
            edadVictima: delegacion.edadVictima,
            nombreDetenido: delegacion.nombreDetenido,
            idCondicion: delegacion.idCondicion,
            idParentesco: delegacion.idParentesco,
            nombreFiscal: delegacion.nombreFiscal,
            unidadFiscalia: delegacion.unidadFiscalia,
            fechaDelegacion: delegacion.fechaDelegacion,
            fechaRecepcionPJ: delegacion.fechaRecepcionPJ,
            fechaRecAgente: delegacion.fechaRecAgente,
            numOficioRecAgente: delegacion.numOficioRecAgente,
            plazoOtorgado: delegacion.plazoOtorgado,
            art444: {
                create:
                {
                    no1: delegacion.art444.art1,
                    no2: delegacion.art444.art2,
                    no3: delegacion.art444.art3,
                    no4: delegacion.art444.art4,
                    no5: delegacion.art444.art5,
                    no6: delegacion.art444.art6,
                    no7: delegacion.art444.art7,
                    no8: delegacion.art444.art8,
                    no9: delegacion.art444.art9,
                    no10: delegacion.art444.art10,
                    no11: delegacion.art444.art11,
                    no12: delegacion.art444.art12,
                    no13: delegacion.art444.art13,
                    no14: delegacion.art444.art14,
                }

            },
        }
    })
    return newDelegacion
}

const updateDelegacionByAgente = async (delegacion) => {
    await prisma.tipoPeticion.deleteMany({
        where: {
            idDelegacion: parseInt(delegacion.id)
        }
    })
    await prisma.detenidoProdInves.deleteMany({
        where: {
            idDelegacion: parseInt(delegacion.id)
        }
    })
    const newDelegacion = await prisma.delegacion.update({
        where: {
            id: parseInt(delegacion.id)
        },
        data: {
            cumplimiento: delegacion.cumplimiento,
            fechaCumplimiento: delegacion.fechaCumplimiento,
            numOficioDescargo: delegacion.numOficioDescargo,
            numVersiones: delegacion.numVersiones,
            recLugarHechos: delegacion.recLugarHechos,
            detPosibResp: delegacion.detPosibResp,
            compareceSospechoso: delegacion.compareceSospechoso,
            peticionFiscalia: delegacion.peticionFiscalia,
            tiposPeticiones: {
                create: delegacion.tiposPeticiones
            },
            informeODescargo: delegacion.informeODescargo,
            causasIncumplimiento: delegacion.causasIncumplimiento,
            detenidosProdInv: {
                create: delegacion.detenidosProdInv
            },
            observaciones: delegacion.observaciones,
        }
    })
    return newDelegacion
}

const deleteDelegacion = async (delegacion) => {

    const delArt = prisma.art444.deleteMany({
        where: {
            idDelegacion: parseInt(delegacion.id),
        }
    })

    const delTipoPet = prisma.tipoPeticion.deleteMany({
        where: {
            idDelegacion: parseInt(delegacion.id),
        }
    })

    const delDetenidos = prisma.detenidoProdInves.deleteMany({
        where: {
            idDelegacion: parseInt(delegacion.id),
        }
    })

    const deleteDelegacion = prisma.delegacion.delete({
        where: {
            id: parseInt(delegacion.id),
        },
    })

    const transaction = await prisma.$transaction([delArt, delTipoPet, delDetenidos, deleteDelegacion])
    
    return true

}

export default { getDelegaciones, getDelegacion, cosultDelegacion, saveDelegacion, updateDelegacionByAgente, deleteDelegacion }