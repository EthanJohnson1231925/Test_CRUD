const mongoose = require("mongoose");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Transaction = require("../models/transactionModel");
const ErrorHandler = require("../utils/errorHandler");

exports.getAllTransactions = catchAsyncErrors(async (req, res, next) => {
  const data = await Transaction.find();
  return res.json({
    success: true,
    data,
  });
});
exports.getTransactionById = catchAsyncErrors(async (req, res, next) => {
  const transactionId = req?.params?.id;
  const data = await Transaction.findOne({ _id: transactionId });
  if (!data) return next(new ErrorHandler("No Transaction found."));
  return res.json({
    success: true,
    data,
  });
});
exports.createTransaction = catchAsyncErrors(async (req, res, next) => {
  const { amount, description, date } = req.body || {};
  const payload = { amount, description, date };
  const transaction1 = new Transaction(payload);
  const transaction = await transaction1.save();
  return res.json({
    success: true,
    message: "Transaction created successfully",
    data: transaction
  });
});

exports.updateTransaction = catchAsyncErrors(async (req, res, next) => {
  const transactionId = req?.params?.id;
  const { description, amount, date } = req?.body || {};
  if (!transactionId || !mongoose.Types.ObjectId.isValid(transactionId)) throw new ErrorHandler("Transaction Id is invalid", 400);
  const transaction = await Transaction.findOne({
    _id: transactionId
  });

  if (!transaction) {
    throw new ErrorHandler(
      `Transaction not found`,
      404
    );
  }

  await Transaction.findByIdAndUpdate(transactionId, {
    description,
    amount,
    date
  });

  return res.json({
    success: true,
    message: "Transaction updated successfully",
  });
});

exports.deleteTransaction = catchAsyncErrors(async (req, res, next) => {
  const id = req?.params?.id;
  const removed = await Transaction.deleteOne({ _id: id });
  if (removed?.deletedCount) {
    return res.json({
      id,
      success: true,
      message: "Transaction deleted successfully",
    });
  }
  return res.json({
    success: false,
    message: "Transaction not found",
  });
});


