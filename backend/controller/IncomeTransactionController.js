const Income = require("../model/IncomeTransactionModel")
const mongoose = require("mongoose")

// always use the routes in try and catch block --> async functions as it gets from db

//@desc: GET all income transactions

const getAllTransactions = async (req , res) => {
    
    try {
        const incomeTransaction = await Income.find({}).sort({ createdAt: -1 });

        return res.status(200).json(incomeTransaction)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

//@desc: POST a transaction

const addTransaction = async (req , res) => {

    const {amount , description , date } = req.body

    try {
        const incomeTransaction = await Income.create({amount , description , date})

        return res.status(200).json(incomeTransaction)


    } catch (error) {
        
        return res.status(400).json({error: error.message})
    }

}

//@desc: DELETE a transaction

const deleteTransaction = async (req , res) => {


    const { id } = req.params;


    try {
        // here we have to pass the id as _id: id to find and remove
        const incomeTransaction = await Income.findOneAndDelete({_id: id})

        return res.status(200).json(incomeTransaction)
    } catch (error) {
        
        return res.status(400).json({error : error.message })
    }
}


//@desc: PATCH a income transaction

const getTransaction = async(req , res) => {


    const { id } = req.params

    try {
        const incomeTransaction = await Income.find({_id: id})

        return res.status(200).json(incomeTransaction)

    } catch (error) {
        
        return res.status(400).json({error: error.message })
    }
}




module.exports = {
    getAllTransactions,
    addTransaction,
    deleteTransaction,
    getTransaction
}