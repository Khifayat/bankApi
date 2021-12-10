const Account = require("../models/account");
const Deposit = require("../models/deposit");
const Transaction = require("../models/transaction");

module.exports = class AccountService {
    static async getAllAccounts() {
        try {
            const allAccounts = await Account.find();
            return allAccounts;
        } catch (error) {
            console.error(`could not fetch the accounts ${error}`);
        }
    }
    static async addDeposit(data) {
        try {
            const filter = { account_number: data.account_number };

            const account = await Account.find(filter)
            const currentAmount = account[0].current_balance 
            const total = parseFloat(data.amount_deposited) + parseFloat(currentAmount)
            const newBalance =  total.toString()

            const addedAccount = await Account.findOneAndUpdate(filter, {
                current_balance: newBalance,
                $push :  {  deposits: [ data ]  }
            ,});
            
        } catch (error) {
            console.error(`could not add deposit the accounts ${error}`);
        }
    }



    static async addTransaction(data) {
        try {
            const filter = { account_number: data.account_number };
            const account = await Account.find(filter) 
            const currentAmount = account[0].current_balance
            const total = parseFloat(currentAmount) - parseFloat(data.amount)
            const newBalance =  total.toString()

            if(total > 0){
            const addedAccount = await Account.findOneAndUpdate(filter, {
                current_balance: newBalance,
                $push :{ transactions: [
                    data
                ]
            }});
       }
    } catch (error) {
            console.error(`could not add transaction the accounts ${error}`);
        }
    }

    static async createAccount(data) {
        try {
            const account = {
                account_number: data.account_number,
                owner_name: data.owner_name,
                current_balance: data.current_balance,
                deposits: data.deposits,
                transactions: data.transactions
            };
            const response = await new Account(account).save();
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}