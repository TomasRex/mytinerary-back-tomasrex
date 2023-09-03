import City from "../models/City.js";

const citiesController = {
    getAllCities: async(request, response, next) => {
        const allCities = await City.find()
        response.json({
            response: allCities,
            success: true,
            error: null
        })
    },
    getCities : async (request, response, next) =>{
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
    getOneCity: async(request, response, next) => {
        let cities;
        const { id } = request.params
        try {
            cities = await City.findById(id).populate('itinerary')
        } catch (error) {
            console.log(error)
        }
        response.json({
            response: cities,
            success: true,
            error: null
        })
    },
    createOneCity: (req, res, next)=>{
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
    updateOneCity: async(req, res, next) => {
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
    deleteOneCity: async(req, res, next) => {
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


export default citiesController