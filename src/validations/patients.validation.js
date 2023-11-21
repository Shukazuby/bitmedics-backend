const joi = require('joi');


const patients = {
    body: Joi.object().keys({
      firstName: Joi.string().required(),  
      email: Joi.string().required().email(),
      lastName: Joi.string().required(),
      middleName: Joi.string().required(),
      gender: Joi.string().required(),
      dOB: Joi.number().required(),
      phoneNumber: Joi.number().required(),
      occupation: Joi.string(),
    }),
  };
  module.exports = {
    patients
  };