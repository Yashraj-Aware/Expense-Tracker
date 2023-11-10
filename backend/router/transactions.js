const express = require("express")

const { 
    getAllTransactions,
    addTransaction,
    deleteTransaction,
    getTransaction
 } = require("../controller/IncomeTransactionController")

const router = express.Router()



// GET all transactions
router.get("/" , getAllTransactions)



//GET a single transaction
router.get("/:id" , getTransaction)

//POST a transaction
router.post("/" , addTransaction)

//DELETE a transaction
router.delete("/:id", deleteTransaction)



module.exports = router;