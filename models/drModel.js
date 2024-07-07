const { Schema, model } = require("mongoose");

const drSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  designation: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Dr = model("Dr", drSchema);

module.exports = Dr;
