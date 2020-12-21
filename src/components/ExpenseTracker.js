import React, { useState, useEffect } from "react";
import Expenses from "./Expenses";
import TransactionHistory from "./TransactionHistory";
import TransactionForm from "./TransactionForm";
import uniqueId from "./utils";
import "../App.css";

function ExpenseTracker() {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [transactions, setTransactions] = useState([
    {
      id: uniqueId(),
      name: "Sales",
      amount: 2000,
      type: "expense",
    },
  ]);

  const calculateExpenses = () => {
    let income = 0;
    let expense = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;
      }
    });

    setIncome(income);
    setExpense(expense);
  };
  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  const addNewTransaction = (item) => {
    setTransactions([...transactions, item]);
  };

  const deleteData = (id) => {
    const deleteTransaction = transactions.filter((item) => item.id !== id);
    setTransactions(deleteTransaction);
  };

  return (
    <div>
      <h1>Expense Tracker By Mudassir</h1>
      <Expenses income={income} expense={expense} />
      <TransactionHistory transactions={transactions} deleteData={deleteData} />
      <TransactionForm addNewTransaction={addNewTransaction} />
    </div>
  );
}

export default ExpenseTracker;
