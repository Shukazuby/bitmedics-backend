const joi = require('joi');

const hospitalSpecialties = {
  body: joi.object().keys({
    hospitalSpecialties: joi.string().required(),
    SpecialityDescription: joi.string().required(),
  }),
};
module.exports = {
  hospitalSpecialties,
};
