import {Router} from 'express';
import usuariosController from '../controller/usuarios.js';

const authRoute = Router();

authRoute.post('/login', async (req, res) => {
    const dataLogin = req.body    
    const userLogin = await usuariosController.login(dataLogin) 
    req.session.usuario = userLogin
    res.json(userLogin)
})

authRoute.get('/login', (req, res) => {
    if(req.session.usuario){
        res.json(req.session.usuario)
    } else{
        res.status(400, res.json(null))
    }
})

export default authRoute