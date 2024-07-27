import React, { useState } from "react";
import axios from "axios";
import { TransactionsState } from "../context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const [type, setType] = useState("Credit");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { transactions, initialBalance, setInitialBalance, setTransactions } =
    TransactionsState();

  const navigate = useNavigate();

  //makes api call to add new transaction in db and in context
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newTransaction = {
        type,
        amount: parseFloat(amount),
        description,
        runningBalance:
          type === "Credit"
            ? initialBalance + parseFloat(amount)
            : initialBalance - parseFloat(amount),
      };

      await axios.post(`${import.meta.env.VITE_API_URL}`, newTransaction);

      setTransactions([newTransaction, ...transactions]);
      setInitialBalance(newTransaction.runningBalance);
      navigate("/");
    } catch (error) {
      alert("something went Please try again !!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "100px 30px 30px 30px",
      }}
    >
      <div className="container">
        <h1>Add Transaction</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            className="add-transaction-link"
            style={{ justifySelf: "flex-end" }}
            title="to Home"
          >
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
