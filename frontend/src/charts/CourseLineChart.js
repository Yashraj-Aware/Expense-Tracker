import React, {useEffect} from 'react'

import { ResponsiveContainer, LineChart, Line , XAxis, Tooltip, YAxis} from "recharts";

const Data = [
    {
      subject: "React js",
      topics: 50,
      fees: 120
    },
    {
      subject: "CSS",
      topics: 75,
      fees: 20
    },
    {
      subject: "javaScript",
      topics: 65,
      fees: 140
    },
    {
      subject: "HTML",
      topics: 90,
      fees: 40
    
    },
    {
      subject: "Node.js",
      topics: 70,
      fees : 150
    },
    {
      subject: "Python",
      topics: 250,
      fees: 180
    }
  ];

  let data =[]


  const CourseLineChart = () => {
    useEffect(() => {

        const fetchIncomes = async () => {

            const response = await fetch('http://localhost:4000/api/income')

            // json() requires await as it returns promise
            const json = await response.json()

           
            if(response.ok)
            {
              data.push(json)
                // dispatch({type:'SET_INCOMES' , payload: json })
            }
        }

        fetchIncomes()
    },[])
  return (
    <ResponsiveContainer width="70%" aspect={3}>
      <LineChart data = {Data}>
        <Tooltip contentStyle={{backgroundColor: "lightgray"}}/>
        <XAxis dataKey=""/>
        <Line dataKey="topics" stroke='green' activeDot={{r:10}} type="monotone" />
        <Line dataKey="fees" stroke='red' activeDot={{r:10}} type="monotone"/>
        <YAxis />
        
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CourseLineChart
