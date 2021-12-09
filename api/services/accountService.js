const Account = require("../models/account");
const Deposit = require("../models/deposit");

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
            const addedAccount = await Account.findOneAndUpdate(filter, {
                deposits: [
                    data
                ]
            });
        } catch (error) {
            console.error(`could not add deposit the accounts ${error}`);
        }
    }
    static async createAccount(data) {
        try {
            const account = {
                account_number: data.account_number,
                owner_name: data.owner_name,
                current_balance: data.current_balance,
                deposits: data.deposits
            };
            const response = await new Account(account).save();
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}