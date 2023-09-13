import { Schema, model } from "mongoose";

const userSchema = Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String},
    photo: {type: String, default: "https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"},
    country: {type: String}
},
{
    timestamps: true
}
)

const User = model('user', userSchema)

export default User