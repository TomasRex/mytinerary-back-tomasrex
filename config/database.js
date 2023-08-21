import mongoose from "mongoose";


mongoose.connect("mongodb+srv://tomaserex:11092643Tr-@cluster0.wnmfdcf.mongodb.net/cities")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("Database connection failed")
})

