"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  account_number: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
  current_balance: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
});

module.exports = mongoose.model("Accounts", AccountSchema);