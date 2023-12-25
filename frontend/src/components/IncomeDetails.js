import React from "react";
import { useIncomesContext } from "../hooks/useIncomesContext";
import { useAuthContext } from "../hooks/useAuthContext";
const IncomeDetails = ({ income }) => {
  const { dispatch } = useIncomesContext();
  const { user } = useAuthContext()

  const handleClick = async () => {
    if(!user)
    {
      return
    }
    const response = await fetch(
      "http://localhost:4000/api/income/" + income._id,
      {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }
    );

    const json = await response.json();
                                  
    if (response.ok) {
      dispatch({ type: "DELETE_INCOMES", payload: json });
    }
  };

  return (
    <div
      className={
        income.category === "expense" ? "expense-details" : "income-details"
      }
    >
      <h4>{income.description}</h4>
      <p>
        <strong>Amount:</strong> {income.amount}
      </p>
      <p>
        <strong>Date:</strong> {income.date}
      </p>
      <span className="material-symbols-outlined trash" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default IncomeDetails;
