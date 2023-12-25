import React from "react";
import { useState } from "react";
import { useIncomesContext } from "../hooks/useIncomesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const IncomeForm = () => {
  const { dispatch } = useIncomesContext();
  const { user } = useAuthContext()

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  // true --> income
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = "income";
    if(!user)
    {
      setError('You must be logged in')
      return
    }

    const income = { amount, date, description, category };

    const response = await fetch("http://localhost:4000/api/income", {
      method: "POST",
      body: JSON.stringify(income),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError("Please enter valid information in the fields");
    }

    if (response.ok) {
      console.log("new income added");
      setAmount("");
      setDate("");
      setDescription("");
      setError("");
      setEmptyFields([])
      dispatch({ type: "CREATE_INCOMES", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add new Income</h3>

      <label>Income Description</label>
      <input
        type="text"
        required
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className={emptyFields.includes('description') ? 'error':''}
      />

      <label>Amount </label>
      <input
        type="number"
        required
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        value={amount}
        className={emptyFields.includes('amount') ? 'error':''}
      />

      <label>Date</label>
      <input
        type="date"
        required
        onChange={(e) => {
          setDate(e.target.value);
        }}
        value={date}
        lassName={emptyFields.includes('date') ? 'error':''}
      />

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default IncomeForm;
