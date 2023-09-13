import Itinerary from "../models/Itinerary.js";
import City from "../models/City.js";

const itinerariesController = {
  createItinerary: async (req, res) => {
    console.log(req.body.city)
    try {
      if (req.body.city) {
        let cityQuery = {name: { $regex: req.body.city.trim(), $options: "i" } }
        const city = await City.findOne(cityQuery)
        if (city) {
          let aux = { ...req.body }
          aux.city = city._id
          const newItinerary = await Itinerary.create(aux)
          await City.findOneAndUpdate({ _id: city._id },{ $push: { itinerary: newItinerary._id } })
          res.status(201).json(newItinerary)
        }
      } else {
        res.json({ error: "La city es requerida" })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default itinerariesController
