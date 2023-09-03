import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';
const citiesRouter = Router()
import read from '../controllers/read.js'

const { getOneCity, createOneCity, updateOneCity, deleteOneCity} = citiesController 

citiesRouter.get('/', read)
citiesRouter.post('/', createOneCity)
citiesRouter.get('/:id', getOneCity)
citiesRouter.put('/:id', updateOneCity)
citiesRouter.delete('/:id', deleteOneCity)

export default citiesRouter