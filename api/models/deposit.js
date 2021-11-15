var DepositsSchema = new Schema({
  account_from: {
    type: String,
  },
  amount_deposited: {
    type: Schema.Types.Decimal128,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["direct_deposit", "transfer", "eft"], //Eft = eclectronic funds transfer (cash app/ vendmo/ zelle) )
      },
    ],
  },
});

module.exports = mongoose.model("Deposits", DepositsSchema);