const Joi = require('joi');


const patients = {
    body: Joi.object().keys({
      firstName: Joi.string().required(),  
      email: Joi.string().required().email(),
      lastName: Joi.string().required(),
      middleName: Joi.string().required(),
      gender: Joi.string().required(),
      dOB: Joi.date().required(),
      phoneNumber: Joi.number().required(),
      allergies: Joi.string(),
      occupation: Joi.string(),
      insuranceStatus: Joi.enum('YES','NO'),
      guardianName: Joi.string().required(),  
      guardianEmail: Joi.string().required().email(),  
      guardianPhoneNumber: Joi.number().required(),
    }),
  };
  module.exports = {
    patients,
  };