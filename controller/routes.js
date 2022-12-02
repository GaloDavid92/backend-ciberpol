import {Router} from 'express';

const rutas = Router();

rutas.get('/test', (req, res) => {
    return res.send("Test")
})

export default rutas