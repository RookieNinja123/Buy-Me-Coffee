const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: "Anonymous" },
    message: { type: String, trim: true, default: "" },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["esewa"], required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled", "refunded"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Support = mongoose.model("Support", supportSchema);
module.exports = Support;
