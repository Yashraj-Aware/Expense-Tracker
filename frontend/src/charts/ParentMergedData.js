import React, { useState, useEffect } from "react";
import CourseLineChart from "./CourseLineChart";

const ParentMergedData = () => {
  const [data, setData] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your data here
        const response = await fetch("http://localhost:4000/api/income");
        const jsonData = await response.json();

        if (response.ok) {
          setData(jsonData);
        }
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const incomeData = data.filter((idata) => idata.category === "income");
    const expenseData = data.filter((edata) => edata.category === "expense");

    const merged = expenseData.reduce((acc, edata) => {
      const adjacentIncome = incomeData.find(
        (idata) => idata.date === edata.date
      );

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

    merged.sort((a, b) => new Date(a.date) - new Date(b.date));
    setMergedData(merged);
  }, [data]);

  return (
    <div>
      {/* <h1>Parent Component</h1> */}
      <CourseLineChart mergedData={mergedData} />
    </div>
  );
};

export default ParentMergedData;
