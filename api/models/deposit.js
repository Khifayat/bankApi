"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DepositsSchema = new Schema({
    account_number: String,
    owner_first_name: String,
    owner_last_name: String,
    amount_deposited: Schema.Types.Decimal128,
    category:String,
});

module.exports = mongoose.model("Deposits", DepositsSchema);

