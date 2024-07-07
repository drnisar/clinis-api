const Joi = require("joi");

function validateAppt(appt) {
  const schema = Joi.object({
    reg: Joi.string(),
    apptDate: Joi.date(),
    apptTimeEnd: Joi.date(),
    duration: Joi.number(),
    apptType: Joi.string().optional().allow(""),
    disease: Joi.string().optional().allow(""),
    comorbids: Joi.string().optional().allow(""),
    apptPlan: Joi.string(),
    apptNotes: Joi.string().optional().allow(""),
    socialConnect: Joi.string().optional().allow(""),
    created: Joi.date(),
    completed: Joi.boolean(),
  });

  return schema.validate(appt);
}

module.exports = { validateAppt };
