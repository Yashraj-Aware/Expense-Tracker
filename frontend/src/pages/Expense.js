import React from 'react'
import {useEffect  } from "react"
import { useIncomesContext } from "../hooks/useIncomesContext"
// importing components
import IncomeDetails from '../components/IncomeDetails'
import ExpenseForm from '../components/ExpenseForm'

const Expense = () => {


    const {incomes , dispatch} = useIncomesContext()

    let totamount = 0
    incomes && incomes.filter((income) => income.category === "expense").map(filteredIncome => (totamount+=filteredIncome.amount))


    useEffect(() => {
        const fetchIncomes = async () => {

            const response = await fetch('http://localhost:4000/api/income')

            // json() requires await as it returns promise
            const json = await response.json()


            if(response.ok)
            {
                dispatch({type:'SET_INCOMES' , payload: json })
            }
        }

        fetchIncomes()
    }, [dispatch])

  return (
    <div className="total">

        <div className="total-contents">

            <h1>Total Expense: <span style = {{color : '#e7195a'}}>{totamount}</span> </h1>
        </div>

    <div className='home'>
        <div className="expenses">

          {incomes && incomes.filter((income) => income.category === "expense").map(filteredIncome => (
              
              <IncomeDetails income = {filteredIncome} key={filteredIncome._id}/>
    
        ))}
       
     </div>
       <ExpenseForm />
      
    </div>
    </div>
  )
}

export default Expense
