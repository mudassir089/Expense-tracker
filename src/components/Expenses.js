import React from "react";

function Expenses({ income, expense }) {
  return (
    <div>
      <div>
        <h2>Your Balance</h2>
        <h2>${income - expense}</h2>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
