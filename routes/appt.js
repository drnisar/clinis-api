const router = require("express").Router();
const {
  getAllAppointments,
  getAppointmentById,
  deleteAppointment,
  createAppointment,
  updateAppointment,
} = require("../controller/appointmentController");

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.delete("/:id", deleteAppointment);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
module.exports = router;
