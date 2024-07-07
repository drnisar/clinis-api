const Joi = require("joi");

function validateReg(reg) {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number(),
    gender: Joi.string().required().valid("male", "female", "other"),
    email: Joi.string().email().allow(""),
    phone: Joi.string().allow(""),
    MRN: Joi.string().allow(""),
  });
  return schema.validate(reg);
}

module.exports = { validateReg };
