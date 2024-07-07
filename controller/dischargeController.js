const { get } = require("mongoose");
const { Discharge } = require("../models/dischargeModel");
const { validateDischarge } = require("../validator/dischargeValidator");

const getDischargeById = async (req, res) => {
  const discharge = await Discharge.findById(req.params.id);
  if (!discharge)
    return res
      .status(404)
      .send("The Discharge with the given ID was not found.");
  res.send(discharge);
};

const deleteDischarge = async (req, res) => {
  const discharge = await Discharge.findByIdAndDelete(req.params.id);
  if (!discharge)
    return res
      .status(404)
      .send("The appointment with the given ID was not found.");

  res.send(discharge);
};

const createDischarge = async (req, res) => {
  const { error } = validateDischarge(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const discharge = new discharge({
    ...fields,
  });

  await discharge.save();

  res.send(discharge);
};

const updateDischarge = async (req, res) => {
  const { error } = validateDischarge(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const discharge = await discharge.findByIdAndUpdate(
    req.params.id,
    {
      ...fields,
    },
    { new: true }
  );

  if (!discharge)
    return res
      .status(404)
      .send("The appointment with the given ID was not found.");

  res.send(discharge);
};

module.exports = {
  getDischargeById,
  deleteDischarge,
  createDischarge,
  updateDischarge,
};
