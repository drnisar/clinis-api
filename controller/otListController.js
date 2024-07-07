const OTList = require("../models/otListModel");
const { validateOtList } = require("../validator/otListValidator");

const getOtList = async (req, res) => {
  const otList = await OTList.find().populate("reg").sort({ surgDate: -1 });
  res.send(otList);
  if (!otList)
    return res.status(404).send("The surgery schedule was not found.");
};

const getOtListById = async (req, res) => {
  const ot = await OTList.findById(req.params.id);
  if (!ot)
    return res
      .status(404)
      .send("The surgery schedule with the given ID was not found.");
  res.send(ot);
};

const deleteOtListById = async (req, res) => {
  const ot = await OTList.findByIdAndDelete(req.params.id);
  if (!ot)
    return res
      .status(404)
      .send("The surgery schedule with the given ID was not found.");
  res.send(ot);
};

const createOtList = async (req, res) => {
  const { error } = validateOtList(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const ot = new OTList({
    ...fields,
    completed: false,
  });

  await ot.save();

  res.send(ot);
};
const updateOtList = async (req, res) => {
  const { error } = validateOtList(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const ot = await OTList.findByIdAndUpdate(
    req.params.id,
    {
      ...fields,
    },
    { new: true }
  );

  if (!ot)
    return res
      .status(404)
      .send("The surgery schedule with the given ID was not found.");
};

module.exports = {
  getOtList,
  getOtListById,
  deleteOtListById,
  createOtList,
  updateOtList,
};
