import React, { useState } from "react";
import uniqueId from "./utils";

function TransactionForm({ addNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, e) => {
    e.preventDefault();
    if (nameValue || amountValue !== "") {
      const data = {
        id: uniqueId(),
        name: nameValue,
        amount: parseInt(amountValue),
        type: type,
      };
      addNewTransaction(data);
    }
    setNameValue("");
    setAmountValue("");
  };

  return (
    <>
      <div>
        <h3>Add New Transaction</h3>
        <form>
          <div>
            <label htmlFor="text">Text</label>
            <br />
            <input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <br />
            <input
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
              type="number"
              placeholder="Amount"
            />
          </div>

          <br />
          <div>
            <button
              className="btn inc"
              onClick={(e) => addTransaction("income", e)}
            >
              Add Income
            </button>
            <br />
            <br />
            <button
              className="btn exp"
              onClick={(e) => addTransaction("expense", e)}
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TransactionForm;
