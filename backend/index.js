import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import AuthRouter from "./routes/auth.js"



const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()


const port = process.env.PORT || 5000
app.listen(port, function(){
    console.log("Server listen on port " + port)
})

try{
    await mongoose.connect(process.env.DB_URL, {autoIndex: true});
    console.log("connected to mongodb atlas")

    //routes          
    app.use("/api/auth", AuthRouter)
}
catch(err){
    console.log({err})
}


