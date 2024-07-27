import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["Credit", "Debit"], required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  runningBalance: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionSchema);
