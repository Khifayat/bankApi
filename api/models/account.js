"use strict";
var mongoose = require("mongoose");
const Account = require("../controllers/accountController");
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  account_number: {
    "pattern": "^[0-9]{8}$",
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

  //added to schema 
  deposits: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Deposits'
    }
  ],
  transacitions: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Transactions'
    }
  ]
});



module.exports = mongoose.model("Accounts", AccountSchema);
