const joi = require('joi');

const doctors = {
  body: Joi.object().keys({
    doctorsId: joi.number().required(),
    certificationName: joi.string().required(),
    certificationIssuingAuthority: joi.string().required(),
    certificationExpiryDate: joi.date(),
    certificationDate: joi.date().required(),
    certificationComment: joi.string(),
  }),
};
module.exports = {
  doctors,
};


    