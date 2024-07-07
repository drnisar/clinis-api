const router = require("express").Router();
const { getAllDrs, createDr } = require("../controller/drController");

router.get("/", getAllDrs).post("/", createDr);
module.exports = router;
