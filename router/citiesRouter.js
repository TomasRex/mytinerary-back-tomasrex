import { Router } from 'express';
import eventsController from '../controllers/eventsController.js';
const citiesRouter = Router()
import read from '../controllers/read.js'

const { getAllEvents, getEvents, getOneEvent, createOneEvent, updateOneEvent, deleteOneEvent} = eventsController 

citiesRouter.get('/', read)
citiesRouter.post('/', createOneEvent)
citiesRouter.get('/:id', getOneEvent)
citiesRouter.put('/:id', updateOneEvent)
citiesRouter.delete('/:id', deleteOneEvent)

export default citiesRouter