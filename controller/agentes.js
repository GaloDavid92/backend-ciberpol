
import { PrismaClient } from '@prisma/client'
import enviarMail from '../utils/sendMail.js'
import generatePassword from '../utils/generatePassword.js'

const prisma = new PrismaClient()

const getAgentes = async () => {
    const agentes = await prisma.agente.findMany({
        include: {
            usuario: {
                select: {
                    correo: true,
                    tipo: true
                }
            }
        }
    })
    return agentes
}

const getGrados = async () => {
    const grado = await prisma.grado.findMany()
    return grado
}

const getCorreos = async () => {
    const correos = await prisma.usuario.findMany({
        select:{
            correo: true
        }
    })
    return correos
    
}

const getAgente = async (id) => {
    const agentes = await prisma.agente.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return agentes
}

const saveAgente = async (newAgente) => {
    const agente = await prisma.agente.create({
        data: {
            nombre: newAgente.nombre,
            usuario: {
                create: {
                    correo: newAgente.correo,
                    clave: generatePassword(),
                    tipo: "Agente"
                }
            }
        },
        include: {
            usuario: true
        }
    })
    const body = `Se ha creado el usuario para el agente ${agente.nombre}, ingrese a la plataforma utilizando el correo con la <strong>clave: </strong>${agente.usuario.clave}`
    enviarMail(newAgente.correo, "CREACIÓN DE CUENTA", body)
    return agente
}

const updateAgente = async (agenteUpd) => {
    const agente = await prisma.agente.update({
        where: {
            id: parseInt(agenteUpd.id)
        },
        data: {
            nombre: agenteUpd.nombre,
            usuario: {
                update: {
                    correo: agenteUpd.correo,
                    clave: generatePassword()
                }
            }
        },
        include: {
            usuario: true
        }
    })
    console.log(agente)
    const body = `Se ha actualizado el usuario para el agente ${agente.nombre}, ingrese a la plataforma utilizando el correo con la <strong>clave: </strong>${agente.usuario.clave}`
    enviarMail(agenteUpd.correo, "ACTUALIZACIÓN DE DATOS", body)
    return agente
    
}

const deleteAgente = async (agenteDel) => {
    const agente = await prisma.agente.delete({
        where: {
            id: parseInt(agenteDel.id)
        }
    })
    const usuario = await prisma.usuario.deleteMany({
        where: {
            id: agenteDel.idUsuario
        }
    })
}

export default { getGrados, getAgentes, getAgente, saveAgente, updateAgente, deleteAgente, getCorreos}