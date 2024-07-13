const { CPT } = require("../models/cptModel");

const getAllCPTs = async (req, res) => {
  const cpts = await CPT.find().sort({ CPT: 1 });
  res.send(cpts);
};
