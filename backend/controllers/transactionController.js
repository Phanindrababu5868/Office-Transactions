import Transaction from "../models/transaction.model.js";

export const addTransaction = async (req, res) => {
  try {
    const { type, amount, description, runningBalance } = req.body;
    const newTransaction = new Transaction({
      type,
      amount,
      description,
      runningBalance,
    });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
