import express from 'express';
import indexrouter from './router/indexrouter.js'

const server = express();

server.use('/api', indexrouter)

server.get('/', (request, response, next)=>{
    response.send('Bienvenido a mi servidor en /')
})

server.listen(3000, ()=> { console.log('Servidor corriendo en puerto 3000') })
