require("dotenv").config

const express = require("express")
const mongoose = require("mongoose")

const app = express()


//middlewares
app.use(express.json())

// log of all the actions
app.use((req,res,next) => {
    console.log(req.path , req.method)
    next()
})


// connection to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log('Db connected successfully') })
    .cath((error) => {
        console.log(`error-message: ${error}`);
    })


// listening on the port
app.listen(() => {
    console.log(`server is listening on port ${process.env.PORT}`);
})