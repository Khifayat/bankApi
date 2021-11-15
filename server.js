"use strict";
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const accountRoutes = require('./api/routes/account.routes');
const depositRoutes = require('./api/routes/deposit.routes');

const Account = require("./api/models/account");
const Deposit = require("./api/models/deposit");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => {
  console.error(err)
});

const dummyAccount = new Account({
  account_number: '123455',
  created_date: Date.now,
  current_balance: 50.50
});

const dummyDeposit = new Deposit({
  account_from: {
    account_number: "123455",
    account_owner: {
      first_name: "Dummy",
      last_name: "Owner",
    },
  },
  amount_deposited: 100.0,
  category: {
    type: "direct_deposit",
  },
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/account", accountRoutes);
app.use("/deposit", depositRoutes);




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);