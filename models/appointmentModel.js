const { Schema, model } = require("mongoose");

const apptSchema = new Schema({
  reg: {
    type: Schema.Types.ObjectId,
    ref: "reg",
  },
  apptDate: Date,
  apptTimeEnd: Date,
  duration: Number,
  apptType: String,
  disease: String,
  comorbids: String,
  apptPlan: String,
  apptNotes: String,
  socialConnect: String,
  created: { type: Date, default: Date.now },
  completed: Boolean,
});

const Appt = model("appt", apptSchema);

module.exports = { Appt };
