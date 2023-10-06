const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: String,
  items: {
    type: [Object],
  },
  totalAmount: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["active", "completed", "cancelled"],
    default: "active",
  },
});

module.exports = mongoose.model("order", OrderSchema);
