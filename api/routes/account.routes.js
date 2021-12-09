"use strict";
const express = require("express");
const router = express.Router();
const accountsList = require("../controllers/accountController");

router.get("/accounts", accountsList.GetAllAccounts);
router.post("/create-account", accountsList.CreateAccount);
router.put("/add-deposit", accountsList.AddDeposit);
router.put("/add-transaction", accountsList.AddTransaction);


module.exports = router;
