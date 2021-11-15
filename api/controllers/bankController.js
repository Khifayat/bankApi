"use strict";

var mongoose = require("mongoose"),
  Account = mongoose.model("Accounts");

exports.list_all_accounts = function (req, res) {
  Account.find({}, function (err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.create_an_account = function (req, res) {
  var new_account = new Account(req.body);
  new_account.save(function (err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.read_an_account = function (req, res) {
  Account.findById(req.params.accountnum, function (err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.update_an_account = function (req, res) {
  Account.findOneAndUpdate(
    { _id: req.params.accountnum },
    req.body,
    { new: true },
    function (err, account) {
      if (err) res.send(err);
      res.json(account);
    }
  );
};

exports.delete_an_account = function (req, res) {
  Account.remove(
    {
      _id: req.params.accountnum,
    },
    function (err, account) {
      if (err) res.send(err);
      res.json({ message: "Account successfully deleted" });
    }
  );
};
