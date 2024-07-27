import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TransactionsState } from "../context";

const Transactions = () => {
  const { transactions, initialBalance } = TransactionsState();
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Calculate pagination indexes
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">
      <h1>Office Transactions</h1>
      <div className="container">
        <div className="balance-container">
          <div>Current Balance: {initialBalance.toFixed(2)}</div>
          <Link
            to="/add-transaction"
            className="add-transaction-link"
            title="add New Transaction"
          >
            + Add Transaction
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Running Balance</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.length > 0 &&
              currentTransactions.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {new Date(transaction?.date).toLocaleDateString() || ""}
                    </td>
                    <td>{transaction?.description || ""}</td>
                    <td>
                      {transaction.type === "Credit" ? transaction.amount : ""}
                    </td>
                    <td>
                      {transaction.type === "Debit" ? transaction.amount : ""}
                    </td>
                    <td>{transaction.runningBalance}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Transactions;
