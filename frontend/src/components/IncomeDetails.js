import React from 'react'
import { useIncomesContext } from '../hooks/useIncomesContext'

const IncomeDetails = ({ income }) => {

  const { dispatch} = useIncomesContext()

  const handleClick = async () => {
      const response = await fetch('http://localhost:4000/api/income/' + income._id , {
        method : 'DELETE'
      })

      const json =  await response.json()

      if(response.ok)
      {
        dispatch({type:'DELETE_INCOMES' , payload: json})
      }

  }


  return (
    <div className={income.category === "expense" ? 'expense-details' : 'income-details'}>
      <h4>{income.description}</h4>
      <p><strong>Amount:</strong> {income.amount}</p>
      <p><strong>Date:</strong> {income.date}</p>
      <span className='material-symbols-outlined trash' onClick={handleClick}>delete</span>
    </div>
  )
}

export default IncomeDetails
