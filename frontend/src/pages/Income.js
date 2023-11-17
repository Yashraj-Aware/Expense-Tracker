import React from 'react'
import {useEffect  } from "react"
import { useIncomesContext } from "../hooks/useIncomesContext"
// importing components
import IncomeDetails from '../components/IncomeDetails'
import IncomeForm from '../components/IncomeForm'



const Income = () => {



  // const [incomes , setIncomes] = useState(null)

  const {incomes , dispatch} = useIncomesContext()

    // const arr = ["mayu" , "ruchu"]

    // to retrieve the data when component is rendered

    let totamount = 0

    incomes && incomes.filter((income) => income.category === "income").map(filter => (totamount+=filter.amount))

    // console.log(amounttot);

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

<h1>Total Income: <span style = {{color : '#1aac83'}}>{totamount}</span> </h1>
</div>
    <div className='home'>
      
      <div className="workouts">

        {incomes && incomes.filter((income) => income.category === "income").map(filteredIncome => (
            
            
            

             <IncomeDetails income = {filteredIncome} key={filteredIncome._id}/>

            
            
        ))}
        
      </div>
        <IncomeForm />

    </div>
    </div>
  )
}

export default Income
