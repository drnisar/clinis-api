const { Schema, model } = require("mongoose");

const schema = new Schema({
  category: String,
  CPT: Number,
  Descriptions: String,
});

const CPT = model("CPT", schema);

module.exports = { CPT };
