import React from "react";

function TransactionHistory({ transactions, deleteData }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <div>
        <ul className="ul">
          {transactions.map((data) => (
            <li className="li" key={data.id}>
              {data.name} - ${data.amount}
              <button onClick={() => deleteData(data.id)} className="del">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
