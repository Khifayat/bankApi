const DepositService = require("../services/depositService");

module.exports = class Deposit {
  static async GetAllDeposits(req, res, next) {
    try {
      const deposits = await DepositService.getAllDeposits();
      if (!deposits) {
        res.status(404).json("There are no deposits in the database!");
      }
      res.json(deposits);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
    static async AddDeposit(req, res, next) {
      try {
        const deposit = await DepositService.createDeposit(req.body);
        res.status(200).json("Deposit added successfully!!");
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
};
