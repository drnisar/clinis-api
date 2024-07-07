const router = require("express").Router();
const {
  getOtList,
  getOtListById,
  deleteOtListById,
  createOtList,
  updateOtList,
} = require("../controller/otListController");
router.get("/", getOtList);
router.get("/:id", getOtListById);
router.delete("/:id", deleteOtListById);
router.post("/", createOtList);
router.put("/:id", updateOtList);
module.exports = router;
