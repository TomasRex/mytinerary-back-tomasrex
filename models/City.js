import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String, required: true},
}, {
    timestamps: true
})

const City = mongoose.model('city', citySchema)

export default City