import mongoose from 'mongoose';

const itinerarySchema = mongoose.Schema({
    title: {type: 'string', required: true},
    duration: {type: 'number', required: true},
    price: {type: 'number', required: true},
    city: {type: mongoose.Types.ObjectId, ref:'City', required: true},
    tags: {type: 'Array', required: false},
    photo: { type: 'string', required: true},
    name: { type: 'string', required: true},
}, {
    timestamps: true
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary