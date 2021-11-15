"use strict";
const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();
var routes = require('./api/routes/bankRoutes'); //importing route
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app); //register the route


// Endpoints
// GET HOME
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post('/create-account', () => {
// });


// create an account POST
// get information GET
app.get('/accounts', (req, res) => {
  Account.find({}, (found, err) => {
    if (!err) {
      res.send(found);
      console.log("accounts")
    }
    console.log(err);
    res.send("error occured!")
  })
})

app.get("/deposits", (req, res) => {
  Deposit.find({}, (found, err) => {
    if (!err) {
      res.send(found);
      console.log("deposits");
    }
    console.log(err);
    res.send("error occured!");
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);