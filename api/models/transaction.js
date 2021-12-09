"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TransactionsSchema = new Schema({
  category: String,
  amount: {
    type: String,
  },
});
module.exports = mongoose.model("Transactions", TransactionsSchema);

// enum: ["Groceries", "Auto", "Restaurant", "bills", "subscription"],
