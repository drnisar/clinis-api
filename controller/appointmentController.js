const { Appt } = require("../models/appointmentModel");
const { validateAppt } = require("../validator/appointmentValidator");

const getAllAppointments = async (req, res) => {
  const appt = await Appt.find().populate("reg").sort({ apptDate: -1 });
  res.send(appt);
};

const getAppointmentById = async (req, res) => {
  const appt = await Appt.findById(req.params.id);
  if (!appt)
    return res
      .status(404)
      .send("The appointment with the given ID was not found.");
  res.send(appt);
};

const deleteAppointment = async (req, res) => {
  const appt = await Appt.findByIdAndDelete(req.params.id);
  if (!appt)
    return res
      .status(404)
      .send("The appointment with the given ID was not found.");

  res.send(appt);
};

const createAppointment = async (req, res) => {
  const { error } = validateAppt(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const appt = new Appt({
    ...fields,
  });

  await appt.save();

  res.send(appt);
};

const updateAppointment = async (req, res) => {
  const { error } = validateAppt(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { ...fields } = req.body;

  const appt = await Appt.findByIdAndUpdate(
    req.params.id,
    {
      ...fields,
    },
    { new: true }
  );

  if (!appt)
    return res
      .status(404)
      .send("The appointment with the given ID was not found.");

  res.send(appt);
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  createAppointment,
  updateAppointment,
};
