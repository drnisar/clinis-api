const router = require("express").Router();
const {
  getDischargeById,
  deleteDischarge,
  createDischarge,
  updateDischarge,
} = require("../controller/dischargeController");

// router.get("/", getAllAppointments);

router.get("/:id", getDischargeById);

router.delete("/:id", deleteDischarge);

router.post("/", createDischarge);

router.put("/:id", updateDischarge);

module.exports = router;
