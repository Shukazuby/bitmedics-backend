const Joi = require('joi');


const appointments = {
    body: Joi.object().keys({
      hospitalId: Joi.number().required(),  
      patientId: Joi.number().required(),
      doctorId: Joi.number().required(),
      medicalConcern: Joi.string().required(),
      appointmentStatus: Joi.enum('Pending','Completed', 'Cancelled').required(),
      appointmentDate: Joi.date().required(),
    }),

  };
  module.exports = {
    appointments
  };