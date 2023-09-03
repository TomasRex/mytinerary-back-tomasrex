import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router()

const { createItinerary } = itinerariesController 

itinerariesRouter.post('/', createItinerary)
//itinerariesRouter.get('/', getItineraries)
//itinerariesRouter.get('/:id', getItinerary)
//citiesRouter.put('/:id', updateOneEvent)
//citiesRouter.delete('/:id', deleteOneEvent)

export default itinerariesRouter