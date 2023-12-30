import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const CourseLineChart = () => {
  const [data, setData] = useState([]);
  const {user} = useAuthContext()
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/income",{
          headers : {
            'Authorization': `Bearer ${user.token}`
          }
        });

        // json() requires await as it returns promise
        const json = await response.json();

        if (response.ok) {
          setData(json);
        }
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };

    fetchdata();
  }, [user]);

  const income = data.filter((idata) => idata.category === "income");
  const expense = data.filter((edata) => edata.category === "expense");

  //merging the data
   const mergedData = expense.reduce((acc, edata) => {
    const adjacentIncome = income.find((idata) => idata.date === edata.date);

    const existingData = acc.find((data) => data.date === edata.date);

    if (existingData) {
      existingData.expense += edata.amount;

      existingData.income += adjacentIncome ? adjacentIncome.amount : 0;
    } else {
      acc.push({
        date: edata.date,
        expense: edata.amount,
        income: adjacentIncome ? adjacentIncome.amount : 0,
      });
    }
    return acc;
  }, []);
  console.log("mergedata", mergedData);

  mergedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <ResponsiveContainer width="70%" aspect={3}>
      <BarChart
        width={600}
        height={300}
        data={mergedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="expense" fill="red" />
        {/* <Bar dataKey="income" fill="green" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};


export default CourseLineChart;
