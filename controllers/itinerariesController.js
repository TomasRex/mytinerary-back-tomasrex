import Itinerary from "../models/Itinerary.js";
import City from "../models/City.js";

const itinerariesController = {
  // getItineraries: async (req, res) => {
  //   console.log(req);
  //   let { name, city } = req.query;
  //   let query = {};
  //   if (name) {
  //     query.name = { $regex: name.trim(), $options: "i" };
  //   }
  //   try {
  //     const itineraries = await Itinerary.find().populate("city");
  //     res.json(itineraries);
  //   } catch (error) {
  //     res.status(500).json({ error: error });
  //   }
  // },

  //   getItinerary: async (req,res) => {
  //     let itineraries;
  //     const { id } = request.params
  //     try {
  //         itineraries = await Itinerary.city.findById(id)
  //     } catch (error) {
  //         console.log(error)
  //     }
  //   },

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
