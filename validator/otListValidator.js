const Joi = require("joi");

function validateOtList(otEntry) {
  const schema = Joi.object({
    reg: Joi.string().required(),
    surgDate: Joi.date().required(),
    otNumber: Joi.number().required(),
    surgType: Joi.string().required(),
    disease: Joi.string().required(),
    surgery: Joi.string().required(),
    anaesthesia: Joi.string().required(),
    surgeon: Joi.string().required(),
    ptType: Joi.string().required(),
    comments: Joi.string().optional().allow(""),
    created: Joi.date(),
    completed: Joi.boolean().default(false),
  });

  return schema.validate(otEntry);
}

module.exports = { validateOtList };
