import express from "express";

const router = express.Router();

import {
  addTransaction,
  getTransactions,
} from "../controllers/transactionController.js";

router.post("/", addTransaction);
router.get("/", getTransactions);

export default router;
