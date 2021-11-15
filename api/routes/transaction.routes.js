"use strict";
const express = require("express");
const router = express.Router();
const transactionsList = require("../controllers/transactionContorller");

router.get("/transactions", transactionsList.GetAllTransactions);
router.post("/create-transaction", transactionsList.CreateTransaction);

module.exports = router;
