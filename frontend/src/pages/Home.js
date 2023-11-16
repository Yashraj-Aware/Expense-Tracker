import React from 'react'
import {useEffect  } from "react"
import { useIncomesContext } from "../hooks/useIncomesContext"
// importing components
import IncomeDetails from '../components/IncomeDetails'
import IncomeForm from '../components/IncomeForm'



const Home = () => {



  // const [incomes , setIncomes] = useState(null)

  const {incomes , dispatch} = useIncomesContext()

    // const arr = ["mayu" , "ruchu"]

    // to retrieve the data when component is rendered

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
    
    <div className='home'>
      
      <div className="workouts">

        {incomes && incomes.map((income) => (
            
            
            

             <IncomeDetails income = {income} key={income._id}/>

            
            
        ))}
        
      </div>
        <IncomeForm />

    </div>
  )
}

export default Home
