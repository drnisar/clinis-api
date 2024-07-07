const Joi = require("joi");

validateDr = (dr) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    designation: Joi.string().min(5).max(50).required(),
  });
  return schema.validate(dr);
};

module.exports = { validateDr };
