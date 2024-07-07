const { Schema, model } = require("mongoose");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const surgNotesSchema = new Schema({
  procedureName: String,
  surgeon: String,
  surgeryType: String,
  surgeryDate: Date,
  surgeryTimeStart: String,
  surgeryTimeEnd: String,
  assistants: String,
  anesthetist: String,
  anestheticType: String,
  findings: String,
  incision: String,
  procedureDetails: String,
  closure: String,
  drains: String,
  instructions: String,
  OTId: {
    type: Schema.Types.ObjectId,
    ref: "otList",
  },
  reg: {
    type: Schema.Types.ObjectId,
    ref: "reg",
  },
});

const SurgNotes = model("surgNotes", surgNotesSchema);

router.get("/", async (req, res) => {
  const surgNotes = await SurgNotes.find()
    .populate("reg")
    .populate("OTId")
    .sort({ surgeryDate: -1 });
  res.send(surgNotes);
});

router.get("/:id", async (req, res) => {
  try {
    const surgNotes = await SurgNotes.find({ OTId: req.params.id })
      .populate("reg")
      .populate("OTId");
    if (!surgNotes)
      return res
        .status(404)
        .send("The surgNotes with the given ID was not found.");
    res.send(surgNotes);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const { error } = validateSurgNotes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const surgNote = new SurgNotes({
    ...fields,
  });
  await surgNote.save();
  res.send(surgNote);
});

function validateSurgNotes(surgNotes) {
  const schema = Joi.object({
    procedureName: Joi.string().required(),
    surgeon: Joi.string().required(),
    surgeryType: Joi.string().required(),
    surgeryDate: Joi.date().required(),
    surgeryTimeStart: Joi.string().required(),
    surgeryTimeEnd: Joi.string().required(),
    assistants: Joi.string().required(),
    anesthetist: Joi.string().required(),
    anestheticType: Joi.string().required(),
    findings: Joi.string().required(),
    incision: Joi.string().required(),
    procedureDetails: Joi.string().required(),
    closure: Joi.string().required(),
    drains: Joi.string().required(),
    instructions: Joi.string().required(),
    OTId: Joi.string().required(),
    reg: Joi.string().required(),
  });

  return schema.validate(surgNotes);
}

module.exports = router;
