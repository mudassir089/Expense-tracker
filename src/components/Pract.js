// import React, { useEffect, useState } from "react";
// import uniqueId from "./utils";

// function Pract() {
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [inputName, setInputName] = useState("");
//   const [inputAmount, setInputAmount] = useState("");
//   const [transaction, setTransaction] = useState([
//     {
//       id: uniqueId(),
//       name: "salary",
//       amount: 20,
//       type: "income",
//     },
//   ]);
//   const calculate = () => {
//     let incomes = 0;
//     let expenses = 0;
//     transaction.map((data) => {
//       if (data.type === "income") {
//         incomes += data.amount;
//       } else {
//         expenses += data.amount;
//       }
//     });

//     setIncome(incomes);
//     setExpense(expenses);
//   };

//   useEffect(() => {
//     calculate();
//   }, [transaction]);

//   const addNewTransaction = (item) => {
//     setTransaction([...transaction, item]);
//   };

//   const addIncome = (type) => {
//     const data = {
//       id: uniqueId(),
//       name: inputName,
//       amount: parseInt(inputAmount),
//       type: type,
//     };
//     addNewTransaction(data);
//     setInputAmount("");
//     setInputName("");
//   };

//   const addExpense = () => {
//     const exp = {
//       id: uniqueId(),
//       name: inputName,
//       amount: parseInt(inputAmount),
//     };
//     addNewTransaction(exp);

//     setInputAmount("");
//     setInputName("");
//   };

//   return (
//     <div>
//       <div>
//         <h1>Balance</h1>
//         <p>{income - expense}</p>
//       </div>
//       <div>
//         <h2>income</h2>
//         <p>{income}</p>
//       </div>
//       <div>
//         <h2>expense</h2>
//         <p>{expense}</p>
//       </div>
//       <div>
//         <h1>History</h1>
//         <ul>
//           {transaction.map((item) => {
//             return (
//               <div key={item.id}>
//                 <li> {item.name} </li>
//                 <li> {item.amount} </li>
//               </div>
//             );
//           })}
//         </ul>
//       </div>

//       <br />
//       <input
//         onChange={(e) => setInputName(e.target.value)}
//         value={inputName}
//         type="text"
//       />
//       <input
//         onChange={(e) => setInputAmount(e.target.value)}
//         value={inputAmount}
//         type="number"
//       />
//       <button onClick={() => addIncome("income")}>add income</button>
//       <button onClick={addExpense}>add expense</button>
//     </div>
//   );
// }

// export default Pract;
