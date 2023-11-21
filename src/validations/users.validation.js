const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const users = {
    body: Joi.object().keys({
      firstName: Joi.string().required(),  
      email: Joi.string().required().email(),
      lastName: Joi.string().required(),
      // middleName: Joi.string().required(),
      gender: Joi.string().required(),
      dOB: Joi.date().required(),
      phoneNumber: Joi.number().integer().required(),
      occupation: Joi.string().required(),
      address: Joi.string().required(),
      password: Joi.string().required().custom(password),
      roleId: Joi.number().integer(),
      profilePicture: Joi.string(),
    }),
  };
  module.exports = {
    users
  };