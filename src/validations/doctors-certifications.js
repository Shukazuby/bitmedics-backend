const Joi = require('joi');

const doctors = {
  body: Joi.object().keys({
    doctorsId: Joi.number().required(),
    certificationName: Joi.string().required(),
    certificationIssuingAuthority: Joi.string().required(),
    certificationExpiryDate: Joi.date(),
    certificationDate: Joi.date().required(),
    certificationComment: Joi.string(),
  }),
};
module.exports = {
  doctors,
};


    