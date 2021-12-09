"use strict";
const express = require("express");
const router = express.Router();
const depositsList = require("../controllers/depositController");

router.get("/deposits", depositsList.GetAllDeposits);
router.get("/find", depositsList.findDeposit);
router.post("/create-deposit", depositsList.AddDeposit);

module.exports = router;
