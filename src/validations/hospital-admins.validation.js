const Joi = require('joi');

const hospitalAdmins = {
  body: Joi.object().keys({
    hospitalId: Joi.number().required(),
    userId: Joi.number().required(),
  }),
};
module.exports = {
  hospitalAdmins,
};
