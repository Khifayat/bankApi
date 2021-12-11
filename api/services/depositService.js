const Deposit = require("../models/deposit");

module.exports = class DepositService {
  static async getAllDeposits() {
    try {
      const allDeposits = await Deposit.find();
      return allDeposits;
    } catch (error) {
      console.error(`could not fetch the deposits ${error}`);
    }
  }
  static async createDeposit(data) {
    try {
      const deposit = {
          account_number: data.account_number,
          account_from: data.account_from,
          owner_name: data.owner_name,
          amount_deposited: data.amount_deposited,
          category:data.category,
      };
      const response = await new Deposit(deposit).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
