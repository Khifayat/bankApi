const Account = require("../models/account");

module.exports = class AccountService {
    static async getAllAccounts() {
        try {
            const allAccounts = await Account.find();
            return allAccounts;
        } catch (error) {
            console.error(`could not fetch the accounts ${error}`);
        }
    }
    static async createAccount(data) {
        try {
            const account = {
                account_number: data.account_number,
                owner_name:data.owner_name,
                current_balance: data.current_balance,
            };
            const response = await new Account(account).save();
            return response;
        } catch (error) {
            console.log(error);
        }

    }
}