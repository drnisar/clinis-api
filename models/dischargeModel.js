const { Schema, model } = require("mongoose");

const dischargeSchema = new Schema({
  regId: {
    type: Schema.Types.ObjectId,
    ref: "reg",
  },
  admissionDate: Date,
  admissionMode: String,
  dischargeDate: Date,
  dischargeTime: Date,
  dischargeType: String,
  dischargeSummary: String,
  dischargeMeds: Array,
});

const Discharge = model("discharge", dischargeSchema);

module.exports = { Discharge };
