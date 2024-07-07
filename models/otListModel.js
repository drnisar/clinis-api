const { Schema, model } = require("mongoose");

const otListSchema = new Schema({
  reg: {
    type: Schema.Types.ObjectId,
    ref: "reg",
  },
  surgDate: Date,
  otNumber: Number,
  surgType: String,
  disease: String,
  surgery: String,
  anaesthesia: String,
  surgeon: String,
  ptType: String,
  comments: String,
  created: { type: Date, default: Date.now },
  completed: Boolean,
});

const OTList = model("otList", otListSchema);

module.exports = OTList;
