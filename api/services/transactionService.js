const Transaction = require("../models/transaction");

module.exports = class TransactionService {
  static async getAllTransactions() {
    try {
      const allTransactions = await Transaction.find();
      return allTransactions;
    } catch (error) {
      console.error(`could not fetch the transactions ${error}`);
    }
  }
  static async createTransaction(data) {
    try {
      const transaction = {
        category: data.category,
        amount: data.amount,
      };
      const response = await new Transaction(transaction).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
