const mongoose = require("mongoose")

// creation of schema
const Schema = mongoose.Schema

const IncomeTransactionSchema = new Schema({

    amount : {
        type: Number,
        required: [true,"Please enter amount"]
    } ,
    description : {
        type : "String",
        required : [true , "Please enter description of the transaction"]
    } ,
    date : {
        type : "String" , 
        required : [true , "Please enter the date of transaction"]
    } ,
    category : {
        type : "String" ,
        required : true
    },
    user_id: {
        type: String,
        required: true
    }


}, { timestamp: true }) // adds ts when created or updated

module.exports = mongoose.model("Income" , IncomeTransactionSchema)