const mongoose = require("mongoose");
const transactionsSchema = mongoose.Schema(
  {
    amount: {
      required: true,
      type: Number,
      min: 0,
      default: 0,
    },
    description: { 
      type: String, 
      trim: true, 
      required: false
    },
    date: {
      type: Date
    },    
  },
  { timestamps: true }
);
const Transaction = mongoose.model("transactions", transactionsSchema);
module.exports = Transaction;
