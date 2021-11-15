"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DepositsSchema = new Schema({
  account_from: {
      account_number: String,
      account_owner:{
        first_name: String,
        last_name: String,
      },
  },
  amount_deposited: {
    type: Schema.Types.Decimal128,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["direct_deposit", "transfer", "eft"], //Eft = eclectronic funds transfer (cash app/ vendmo/ zelle) )
      },
    ],
  },
});

module.exports = mongoose.model("Deposits", DepositsSchema);