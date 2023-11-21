const Joi = require('joi');


const doctors = {
    body: Joi.object().keys({
      hospitalId: Joi.number().required(),  
      userId: Joi.number().required(),
      licenseUId: Joi.number().required(),
      specialization: Joi.number().required(),
      yearOfExperience:  Joi.date().required(),
    }),
  };
  module.exports = {
    doctors
  };