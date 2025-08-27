import express from "express"
import jwt from "jsonwebtoken"
import UserModel from "../models/User.js"
import bcrypt from "bcrypt"

import Validator from "../validation/validator.js"
import AuthSchema from "../validation/validationSchema/AuthSchema.js" 
import passwordHasher from "../middlewares/passwordHasher.js"
import usernameGenerator from "../middlewares/usernameGenerator.js"



const router = express.Router()


router.post("/signup", Validator(AuthSchema), passwordHasher, usernameGenerator ,async (req, res) => {
    try{
        const {email, fullname, password, username} = req.body
    
        if(await UserModel.findOne({"personal_info.email": email})){
            return res.status(400).json({errors: "email address already exists"})
        }
        
        const user = await new UserModel({
            personal_info: {email, fullname, username, password},
        })
        await user.save()

        //access token to verify the user request
        const access_token = jwt.sign({id: user._id}, process.env.SECRET_ACCESS_KEY)

        return res.status(201).json({user: {
            access_token,
            fullname: user.personal_info.fullname, 
            username: user.personal_info.username, 
            profile_img: user.personal_info.profile_img,
        }})
    }
    catch(err){
        console.log({err})
        return res.status(500).json({serverError: "Something goes wrong, please contact the developper"})
    }
})



router.post("/signin", Validator({email:AuthSchema.email, password: AuthSchema.password}), async (req, res) => {
    try{
        const {email, password} = req.body
    
        const user = await UserModel.findOne({"personal_info.email": email})
        if(!user){
            return res.status(401).json({errors: "Invalid credentials"})
        }
        
        const isValid = await bcrypt.compare(password, user.personal_info.password)
        if(!isValid){
            return res.status(401).json({errors: "Invalid credentials"})
        }

        const access_token = jwt.sign({id: user._id}, process.env.SECRET_ACCESS_KEY)
        return res.status(200).json({user: {
            access_token,
            fullname: user.personal_info.fullname, 
            username: user.personal_info.username, 
            profile_img: user.personal_info.profile_img,
        }})
    }
    catch(err){
        console.log({err})
        return res.status(500).json({serverError: "Something goes wrong, please contact the developper"})
    }
})


export default router
