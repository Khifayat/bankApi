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
            res.status(200).json("Account added successfully!!");
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}