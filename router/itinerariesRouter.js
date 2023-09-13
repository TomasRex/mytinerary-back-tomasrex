import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router()

const { createItinerary } = itinerariesController 

itinerariesRouter.post('/', createItinerary)

export default itinerariesRouter