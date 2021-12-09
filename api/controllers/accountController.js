const AccountService = require("../services/accountService");

module.exports = class Account {
    static async GetAllAccounts(req, res, next) {
        try {
            const accounts = await AccountService.getAllAccounts();
            if (!accounts) {
                res.status(404).json("There are no accounts in the database!");
            }
            res.json(accounts);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    static async CreateAccount(req, res, next) {
        try {
            const account = await AccountService.createAccount(req.body);
            // Account.findOne({_id:'xxxxxxx'}).populate('deposits', ' account_number account_from owner_name amount_deposited').exec(function(err,deposits){})
            res.status(200).json("Account added successfully!!");
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async AddDeposit (req, res, next) {

        try {
            const updatedAccount = await AccountService.updateAccountWithDeposit(req.body)
            res.status(200).json("account updated!!");
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    // static async getAccount(req, res, next) {
    //     try {
    //         const Account = await AccountService.getAccount({account: req.params.account_number});
    //         return Account;
    //     } catch (error) {
    //         console.error(`could not fetch the account ${error}`);
    //     }
    // }
}