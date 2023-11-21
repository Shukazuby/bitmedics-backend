const Joi = require('joi');


const payments = {
    body: Joi.object().keys({
      hospitalId: Joi.number().required(),  
      patientId: Joi.number().required(),
      appointmentId: Joi.number().required(),
    }),
  };
  module.exports = {
    payments
  };