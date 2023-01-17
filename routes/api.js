import {Router} from 'express';
import ubicacionesController from '../controller/ubicaciones.js';
import agentesContoller from '../controller/agentes.js';
import delitosContoller from '../controller/delitos.js';
import detenidoContoller from '../controller/detenido.js';
import delegacionController from '../controller/delegacion.js';
import reporteController from '../controller/reportes.js'

const apiRoute = Router();

apiRoute.get('/zonas', async (req, res) => {
    const zonas = await ubicacionesController.getZonas()    
    res.json(zonas)
})

apiRoute.get('/provincia/:idz', async (req, res) => {
    const {idz} = req.params
    const provincias = await ubicacionesController.getProvincias(idz)    
    res.json(provincias)
})

apiRoute.get('/cantones/:idp', async (req, res) => {
    const {idp} = req.params
    const cantones = await ubicacionesController.getCantones(idp)    
    res.json(cantones)
})

apiRoute.get('/distritos/:idc', async (req, res) => {
    const {idc} = req.params
    const distritos = await ubicacionesController.getDistritos(idc)    
    res.json(distritos)
})

apiRoute.get('/ubicacion/:idd', async (req, res) => {
    const {idz: idd} = req.params
    const ubicacion = await ubicacionesController.getUbicacion(idd)    
    res.json(ubicacion)
})

apiRoute.get('/agentes', async (req, res) => {
    const agentes = await agentesContoller.getAgentes()
    res.json(agentes)
})

apiRoute.get('/grados', async (req, res) => {
    const grados = await agentesContoller.getGrados()
    res.json(grados)
})

apiRoute.get('/correos', async (req, res) => {
    const correos = await agentesContoller.getCorreos()
    res.json(correos)
})

apiRoute.get('/agente/:ida', async (req, res) => {
    const {ida} = req.params
    const agente = await agentesContoller.getAgente(ida)    
    res.json(agente)
})

apiRoute.post('/agente', async (req, res) => {
    try{
        const newAgente = req.body
        const agente = await agentesContoller.saveAgente(newAgente)    
        res.json(agente)
    } catch (error){
        console.error(error.message)
        res.status(400).send({
            error: error.message
        })
    }
})

apiRoute.put('/agente', async (req, res) => {
    const udtAgente = req.body
    const agente = await agentesContoller.updateAgente(udtAgente)    
    res.json(agente)
})

apiRoute.delete('/agente', async (req, res) => {

    try {
        const delAgente = req.body
        const agente = await agentesContoller.deleteAgente(delAgente)    
        res.json(agente)
        
    } catch (error) {
        console.error(error.message)
        res.status(400).send({
            error: error.message
        })
    }

})

apiRoute.get('/delitos', async (req, res) => {
    const delitos = await delitosContoller.getDelitos()    
    res.json(delitos)
})

apiRoute.get('/modalidades', async (req, res) => {
    const modalidades = await delitosContoller.getModalidades()    
    res.json(modalidades)
})

apiRoute.get('/condiciones', async (req, res) => {
    const condiciones = await detenidoContoller.getCondiciones()    
    res.json(condiciones)
})

apiRoute.get('/parentescos', async (req, res) => {
    const parentescos = await detenidoContoller.getParentesco()    
    res.json(parentescos) 
})

apiRoute.get('/delegaciones', async (req, res) => {
    const delegaciones = await delegacionController.getDelegaciones()    
    res.json(delegaciones) 
})

apiRoute.get('/delegacion/:idd', async (req, res) => {
    const {idd} = req.params
    const delegacion = await delegacionController.getDelegacion(idd)    
    res.json(delegacion)
})

apiRoute.get('/consultar/:idd', async (req, res) => {
    const {idd} = req.params
    const delegacion = await delegacionController.cosultDelegacion(idd)    
    res.json(delegacion)
})

apiRoute.post('/delegacion', async (req, res) => {
    const delegacion = req.body
    console.log("🚀 ~ file: authRoute.js ~ line 96 ~ authRoute.post ~ delegacion", delegacion)    
    const newDeleg = await delegacionController.saveDelegacion(delegacion)    
    res.json(newDeleg)
})

apiRoute.put('/agente/delegacion', async (req, res) => {
    const delegacion = req.body   
    const newDeleg = await delegacionController.updateDelegacionByAgente(delegacion)    
    res.json(newDeleg)
})

apiRoute.get('/report', async (req, res) => {
    const data = await reporteController.reportes()
    res.json(data)
})

apiRoute.get('/reportdelito', async (req, res) => {
    const data = await reporteController.reportesDelitos()
    res.json(data)
})

apiRoute.delete('/delegacion', async (req, res) => {

    try {
        const delDelegacion = req.body
        const agente = await delegacionController.deleteDelegacion(delDelegacion)
        res.json(agente)
        
    } catch (error) {
        console.error(error.message)
        res.status(400).send({
            error: error.message
        })
    }

})

export default apiRoute