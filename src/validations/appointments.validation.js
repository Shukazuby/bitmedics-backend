const joi = require('joi');


const appointments = {
    body: Joi.object().keys({
      hospitalId: Joi.number().required(),  
      patientId: Joi.number().required(),
      doctorId: Joi.number().required(),
      medicalConcern: Joi.string().required(),
    }),
  };
  module.exports = {
    appointments
  };