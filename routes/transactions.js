const express = require("express");
const transactionController = require("../controllers/transactionController");
const router = express.Router();
router
  .get("/transactions", transactionController.getAllTransactions)
  .get("/transactions/:id", transactionController.getTransactionById)
  .post("/transactions", transactionController.createTransaction)
  .put("/transactions/:id", transactionController.updateTransaction)
  .delete("/transactions/:id", transactionController.deleteTransaction)
module.exports = router;
