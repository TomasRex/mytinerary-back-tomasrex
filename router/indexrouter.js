import {Router} from 'express';
import eventscontroller from '../controllers/eventscontroller.js';

const indexrouter = Router();

indexrouter.get('/', (request, response, next) => {
    console.log(request.params)
    response.send('Bienvenido a mi servidor en /api')
})
indexrouter.get('events', eventscontroller.getEvents)


export default indexrouter