import express from 'express';
import session from 'express-session';

import cors from 'cors';
import morgan from 'morgan';
import authRoute from './routes/auth.js';
import apiRoute from './routes/api.js';

const app = express()

app.use(session({
    secret: 'password1234',
    resave: true,
    saveUninitialized: true
}))

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(morgan("dev"));
app.use(express.json())

app.use('/', express.static('public'))
app.use('/auth', authRoute)
app.use('/api', apiRoute)

app.listen(3000, ()=>{
    console.log('Listening on http://127.0.0.1:3000')
})
