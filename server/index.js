//new way
//update json  by adding
//"type":"module",
import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
//old way
// const express = require('express')
//------------------------------------------------

import postRoutes from  "./routes/posts.js"


const app = express()



app.use('/posts',postRoutes)






app.use(bodyParser.json({limit:"30mb", extended:true}))//mb for the for large images
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

const CONNECTION_URL ="mongodb+srv://admin:admin@contacts.zignsm8.mongodb.net/test"
const  PORT = process.env.THEPORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=> console.log(`server is running at port: ${PORT}`)))
.catch((err)=> console.log(err.message))

