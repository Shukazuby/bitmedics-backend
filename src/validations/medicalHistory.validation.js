const joi = require('joi');


const medicalHistory = {
    body: Joi.object().keys({
      hospitalId: Joi.number().required(),  
      patientId: Joi.number().required(),
      appointmentId: Joi.number().required(),
    }),
  };
  module.exports = {
    medicalHistory
  };