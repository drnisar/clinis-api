const router = require("express").Router();
const {
  getAllRegs,
  getRegById,
  deleteRegById,
  createReg,
  updateReg,
} = require("../controller/regController");
router.get("/", getAllRegs);
router.get("/:id", getRegById);
router.delete("/:id", deleteRegById);
router.post("/", createReg);
router.put("/:id", updateReg);
module.exports = router;
