const { Reg } = require("../models/regModel");
const { validateReg } = require("../validator/regValidator");

const getAllRegs = async (req, res) => {
  const reg = await Reg.find().sort({ regDate: -1 });
  res.send(reg);
};

const getRegById = async (req, res) => {
  const id = req.params.id;
  const reg = await Reg.findById(id);
  if (!reg)
    return res
      .status(404)
      .send("The registration with the given ID was not found.");
  res.send(reg);
};

const deleteRegById = async (req, res) => {
  const id = req.params.id;
  const reg = await Reg.findByIdAndDelete(id);
  if (!reg)
    return res
      .status(404)
      .send("The registration with the given ID was not found.");
  res.send(reg);
};

const createReg = async (req, res) => {
  const { error } = validateReg(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, age, gender, email, phone, MRN } = req.body;

  const reg = new Reg({
    name: name,
    age: age,
    gender: gender,
    email: email,
    phone: phone,
    MRN: MRN,
  });

  await reg.save();
  res.send(reg);
};

const updateReg = async (req, res) => {
  const id = req.params.id;
  const { error } = validateReg(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, age, gender, email, phone, MRN } = req.body;

  const reg = await Reg.findByIdAndUpdate(
    id,
    {
      name: name,
      age: age,
      gender: gender,
      email: email,
      phone: phone,
      MRN: MRN,
    },
    { new: true }
  );
  if (!reg)
    return res
      .status(404)
      .send("The registration with the given ID was not found.");

  res.send(reg);
};

module.exports = {
  getAllRegs,
  getRegById,
  deleteRegById,
  createReg,
  updateReg,
};
