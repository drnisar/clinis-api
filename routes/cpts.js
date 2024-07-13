const router = require("express").Router();
const { getAllCPTs } = require("../controller/cptController");
router.get("/", getAllCPTs);

module.exports = router;
