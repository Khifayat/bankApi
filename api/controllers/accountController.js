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

    static async AddDeposit(req, res, next) {
        try {
            const updateAccount = await AccountService.addDeposit(req.body);
            res.status(200).json("Deposit was added successfully to the account!!");
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async AddTransaction(req, res, next) {
        try {
            const updateAccount = await AccountService.addTransaction(req.body);
            res.status(200).json("Transaction was added successfully to the account!!");
          catch (error) {
            res.status(500).json({ error: error });
        }
    }
}