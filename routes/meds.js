const { Schema, model } = require("mongoose");
const Joi = require("joi");
const router = require("express").Router();

const medSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  brand: String,
  generic: String,
  details: {
    type: Array,
  },
});

const Med = model("Med", medSchema);

router.post("/", async (req, res) => {
  const med = new Med({
    name: req.body.name,
    brand: req.body.brand,
    generic: req.body.generic,
    details: req.body.details,
  });

  const { error } = validateMed(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  await med.save();
  res.send(med);
});

router.get("/", async (req, res) => {
  const meds = await Med.find().sort("name");
  if (!meds) return res.status(404).send("No meds found");
  res.send(meds);
});

function validateMed(med) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    brand: Joi.string(),
    generic: Joi.string().allow(""),
    details: Joi.array(),
  });

  return schema.validate(med);
}

module.exports = router;
