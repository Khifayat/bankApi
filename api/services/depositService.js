const { db } = require("../models/deposit");
const Deposit = require("../models/deposit");
const Account = require("../models/account");
const AccountService = require("./accountService");

module.exports = class DepositService {
  static async getAllDeposits() {
    try {
      const allDeposits = await Deposit.find();
      return allDeposits;
    } catch (error) {
      console.error(`could not fetch the deposits ${error}`);
    }
  }


  static async findDepositAccount() {
    console.log("attempt")
    try{
     const foundDeposits = await Deposit.findOne( {account_number: "0000000"},{ account_number:1, account_from:1, owner_name:1, amount_deposited:1, category:1 , _id:0})
     console.log("account ", foundDeposits.account_from , " deposited ", foundDeposits.amount_deposited, " into account number " , foundDeposits.account_number)
     const account = await Account.findOne({account_number: foundDeposits.account_number})
     console.log("reciver ", account)
     db.Account.update({account_number:foundDeposits.account_number}, {deposits:foundDeposits})
     console.log(account)

     
     return found
    } catch(error){
      console.log("this didnt work")
    }
}
  static async createDeposit(data) {
    try {
      console.log(data);
      const deposit = {
          account_number: data.account_number,
          account_from: data.account_from,
          owner_name: data.owner_name,
          amount_deposited: data.amount_deposited,
          category:data.category,
      };
      const response = await new Deposit(deposit).save();
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }

};
