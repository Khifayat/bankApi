var TransactionsSchema = new Schema({
  type: {
    type: String,
    enum: ["Groceries", "Auto", "Restaurant", "bills", "subscription"],
  },
  amount: {
    type: Schema.Types.Decimal128,
  },
});
module.exports = mongoose.model("Transactions", TransactionsSchema);
