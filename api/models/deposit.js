"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DepositsSchema = new Schema({

    account_number: String,
    account_from: String,
    owner_name: String,
    amount_deposited: String,
    category:String
    
});



module.exports = mongoose.model("Deposits", DepositsSchema);

