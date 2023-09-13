import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

const authController = {
    signUp: async(req, res, next) => {
        try {

                const passwordHash = bcrypt.hashSync(req.body.password, 10)
                let body = {...req.body}
                body.password = passwordHash
                const newUser = await User.create(body)
                const token = jwt.sign( {name: newUser.name, email: newUser.email, photo: newUser.photo}, process.env.secretkey )

                return res.status(201).json({
                    success: true,
                    userData: newUser, 
                    token: token,
                    message: 'Sign up successfully'
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },

    signIn: async (req, res, next) => {
        try {
            let { email:emailBody, password } = req.body
            const userInDB = await User.findOne({email:emailBody})
            if(!userInDB){
                throw new Error("No user exists with this email")
            }
            let passwordValidated = bcrypt.compareSync(password, userInDB.password)
            if(!passwordValidated){
                throw new Error("Password is incorrect")
            }

            let {name, email, photo} = userInDB
            const token = jwt.sign( {name, email, photo}, process.env.secretkey )

            return res.status(200).json({
                success: true,
                userData: {name, email, photo},
                token : token,
                message: "Sign in succesfully"
            })

        } catch (error) {
            console.log(error)
            next(error)
        }
    },
    loginWithToken: (req, res) => {
        const {name, email, photo} = req.user
        res.status(200).json({
            success: true,
            userData: {name, email, photo},
            message: "Sign in succesfully"
        })
    },
}

export default authController