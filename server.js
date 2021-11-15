"use strict";
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const accountRoutes = require('./api/routes/account.routes');
const depositRoutes = require('./api/routes/deposit.routes');
const transactionRoutes = require('./api/routes/transaction.routes');

const Account = require("./api/models/account");
const Deposit = require("./api/models/deposit");
const Transaction = require("./api/models/transaction");

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

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/account", accountRoutes);
app.use("/deposit", depositRoutes);
app.use("/transaction",transactionRoutes);




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);