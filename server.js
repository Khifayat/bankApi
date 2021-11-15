"use strict";
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const accountRoutes = require('./api/routes/account.routes');
const Account = require("./api/models/account");

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

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/account", accountRoutes);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);