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
      console.log(data);
      const deposit = {
          account_number: data.account_number,
          owner_first_name: data.owner_first_name,
          owner_last_name: data.owner_last_name,
          amount_deposited: data.amount_deposited,
          category:data.category,
      };
      const response = await new Deposit(deposit).save();
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
