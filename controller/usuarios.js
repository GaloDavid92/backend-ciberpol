
import { PrismaClient } from '@prisma/client'
import enviarMail from '../utils/sendMail.js'
import generatePassword from '../utils/generatePassword.js'

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

const saveUsuario = async (newUsuario) => {
    const usuario = await prisma.usuario.create({
        data: {
            nombre: newUsuario.nombre,
            correo: newUsuario.correo,
            clave: generatePassword(),
            tipo: newUsuario.tipo
        }
    })
    
    const body = `Se ha creado el usuario para el ${usuario.tipo} ${usuario.nombre}, ingrese a la plataforma utilizando el correo con la <strong>clave: </strong>${usuario.clave}`
    enviarMail(newUsuario.correo, "CREACIÓN DE CUENTA", body)
    return usuario
}

const getUsers = async () =>{
    const users = await prisma.usuario.findMany({
        include: {
            agente: true
        }        
    })
    return users;
}

const updateUser = async (UserUpd) => {
    const usuario = await prisma.usuario.update({
        where: {
            id: parseInt(UserUpd.id)
        },
        data: {
            nombre: UserUpd.nombre,
            correo: UserUpd.correo,
            clave: generatePassword()
        }
    })
    console.log(usuario)
    const body = `Se ha actualizado el usuario para el  ${usuario.tipo} ${usuario.nombre}, ingrese a la plataforma utilizando el correo con la <strong>clave: </strong>${usuario.clave}`
    enviarMail(UserUpd.correo, "ACTUALIZACIÓN DE DATOS", body)
    return usuario
    
}

export default { login, saveUsuario, getUsers, updateUser }