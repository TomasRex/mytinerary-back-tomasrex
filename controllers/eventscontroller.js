import City from "../models/City.js";
import cities from "../cities.js"

const eventsController = {
    getAllEvents: async(request, response, next) => {
        const allCities = await City.find()
        response.json({
            response: allCities,
            success: true,
            error: null
        })
    },
    getEvents : async (request, response, next) =>{
        try {
            const allEvents = await Event.find()
        } catch (error) {
            response.json({
                response: '',
                success: true,
                error: null
            })
        }
    },
    getOneEvent: async(request, response, next) => {
        let cities;
        const { id } = request.params
        try {
            cities = await City.findById(id)
        } catch (error) {
            console.log(error)
        }
        response.json({
            response: cities,
            success: true,
            error: null
        })
    },
    createOneEvent: (req, res, next)=>{
        try{
            const city = City.create(req.body)
            console.log(req.body)
        } catch(error){
            console.log(error)
            success = false
            error = null
        }
        res.json({
            response: City,
            success: true,
            error: null
        })
    },
    updateOneEvent: async(req, res, next) => {
        const { id } = req.params
        try {
            const city = await City.findOneAndUpdate({_id: id}, req.body, { new: true })
        } catch (error) {
            console.log(error)
            success = false
            error = null
        }
        res.json({
            response: City,
            success: true,
            error: null
        })
    },
    deleteOneEvent: async(req, res, next) => {
        const { id } = req.params
        try {
            const City = await City.findOneAndDelete({_id: id})
            res.json({
                response: City,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error)
            success = false
            error = null
            next(error)
        }
    }
}


export default eventsController