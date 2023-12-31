const express = require("express")

const { 
    getAllTransactions,
    addTransaction,
    deleteTransaction,
    getTransaction,
    
 } = require("../controller/IncomeTransactionController")
 const requireAuth = require('../middleware/requireAuth')

// const router = express.Router()

const router = express.Router()
// require auth for all workout routes
router.use(requireAuth)




// GET all transactions
router.get("/" , getAllTransactions)



//GET a single transaction
router.get("/:id" , getTransaction)

//POST a transaction
router.post("/" , addTransaction)

//DELETE a transaction
router.delete("/:id", deleteTransaction)

//GET a limited trnasction




module.exports = router;