"use strict";
var mongoose = require("mongoose");
const Account = require("../controllers/accountController");
var Schema = mongoose.Schema;
const Deposit = require("../models/deposit");

var AccountSchema = new Schema({
  account_number: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  current_balance: {
    type: String,
    default: "0.0",
  },
  deposits: [
    {
      account_number: String,
      account_from: String,
      owner_name: String,
      amount_deposited: String,
      category: String,
    }],
  transactions: [
    {
      category: String,
      amount: {
        type: String,
      }
    }]
});

module.exports = mongoose.model("Accounts", AccountSchema);
