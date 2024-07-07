const Joi = require("joi");

const validateDischarge = (discharge) => {
  return Joi.object({
    regId: Joi.string().required(),
    admissionDate: Joi.date().required(),
    admissionMode: Joi.string().required(),
    dischargeDate: Joi.date().required(),
    dischargeTime: Joi.date().required(),
    dischargeType: Joi.string().required(),
    dischargeSummary: Joi.string().required(),
    dischargeMeds: Joi.array().optional().allow([]),
  }).validate(discharge);
};

module.exports = { validateDischarge };
