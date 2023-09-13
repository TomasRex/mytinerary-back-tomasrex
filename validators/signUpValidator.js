import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const passwordOptions = {
    min: 8,
    max: 60,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
}

export const signUpSchema = joi.object({
    email: joi.string().required(),
    password: joiPwd(passwordOptions),
    name: joi.string().min(3).max(30),
    photo: joi.string().uri(),
    country: joi.string()
})