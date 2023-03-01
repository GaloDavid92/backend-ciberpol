import { Router } from 'express';
import usuariosController from '../controller/usuarios.js';

const authRoute = Router();

authRoute.post('/login', async (req, res) => {
    const dataLogin = req.body
    console.log("🚀 ~ file: auth.js:8 ~ authRoute.post ~ dataLogin:", dataLogin)
    const userLogin = await usuariosController.login(dataLogin)
    req.session.usuario = userLogin
    res.json(userLogin)
})

authRoute.get('/login', (req, res) => {
    if (req.session.usuario) {
        res.json(req.session.usuario)
    } else {
        res.status(400, res.json(null))
    }
})

authRoute.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/') 
    })
})

export default authRoute