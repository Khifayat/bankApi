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
                first_name: data.first_name,
                last_name: data.last_name,
                current_balance: data.current_balance,
                deposits: data.deposits
            };
            const response = await new Account(account).save();
            return response;
        } catch (error) {
            console.log(error);
        }
    }


   

    // static async updateAccountWithDeposit(data) {
    //     const accountTo = data.account_number;
    //     const filter = { account_number: accountTo }
    //     // const updateDeposit = {
    //     //     deposits: [{
    //     //         account_number: data.account_number,
    //     //         account_from: data.account_from,
    //     //         owner_name: data.account_number,
    //     //         amount_deposited: data.amount_deposited,
    //     //         category: data.category
    //     //     }]
    //     // }
    //     // console.log(updateDeposit);
    //     const accountFound = Account.findOne(filter, () => {})
    //     console.log(accountFound);
    // }
}



