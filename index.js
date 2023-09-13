import 'dotenv/config.js'
import express from 'express';
import indexRouter from './router/indexRouter.js';
import cors from 'cors'
import './config/database.js'
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFound.js';

const server = express();

server.use(cors())
server.use(express.json())
server.use('/api', indexRouter)

server.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor en /')
})

server.use(notFoundHandler)
//server.use(errorHandler)

server.listen(process.env['PORT'], ()=> { console.log('Servidor corriendo en puerto ' + process.env['PORT']) })
