const { Schema, model } = require("mongoose");

const regSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  MRN: String,
  regDate: { type: Date, default: Date.now },
});

const Reg = model("reg", regSchema);

module.exports = { Reg };
