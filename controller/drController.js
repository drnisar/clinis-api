const { validateDr } = require("../validator/drValidator");
const Dr = require("../models/drModel");

exports.getAllDrs = async (req, res) => {
  const drs = await Dr.find().sort("name");
  res.send(drs);
};

exports.createDr = async (req, res) => {
  const { error } = validateDr(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let dr = new Dr({
    name: req.body.name,
    designation: req.body.designation,
  });

  try {
    dr = await dr.save();
    res.send(dr);
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};
