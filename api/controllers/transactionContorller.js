const TransactionService = require("../services/transactionService");

module.exports = class Transaction {
  static async GetAllTransactions(req, res, next) {
    try {
      const transactions = await TransactionService.getAllTransactions();
      if (!transactions) {
        res.status(404).json("There are no transactions in the database!");
      }
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async CreateTransaction(req, res, next) {
    try {
      const transaction = await TransactionService.createTransaction(req.body);
      res.status(200).json("Transaction added successfully!!");
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
