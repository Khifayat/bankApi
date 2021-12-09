"use strict";
const express = require("express");
const router = express.Router();
const accountsList = require("../controllers/accountController");

router.get("/accounts", accountsList.GetAllAccounts);
router.post("/create-account", accountsList.CreateAccount);
router.put("/add-deposit", accountsList.AddDeposit);
// router.get("/accounts/:account" ,accountsList.getAccount)

module.exports = router;

// module.exports = function (app) {
//   app.route("/accounts")
//   .get(accountsList.list_all_accounts)
//   .post(accountsList.create_an_account);

//   app.route("/accounts/:accountnum")
//   .get(accountsList.read_an_account)
//   .put(accountsList.update_an_account)
//   .delete(accountsList.delete_an_account);



//   todoList Routes
//   app.route("/tasks").get(todoList.list_all_tasks).post(todoList.create_a_task);

//   app
//     .route("/tasks/:taskId")
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
// };
