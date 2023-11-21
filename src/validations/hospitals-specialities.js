const Joi = require('joi');

const hospitalSpecialties = {
  body: Joi.object().keys({
    hospitalSpecialties: Joi.string().required(),
    SpecialtyDescription: Joi.string(),
  }),
};
module.exports = {
  hospitalSpecialties,
};
