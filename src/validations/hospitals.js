const Joi = require('joi');

const hospitals = {
  body: Joi.object().keys({
    hospitalName: Joi.string().required(),
    facilityUId: Joi.string().required(),
    hospitalSpecialtyId: Joi.string().required(),
    paymentId: Joi.string().required(),
    email: Joi.string().email().required(),
    isEmailVerified: Joi.boolean(),
    address: Joi.string().required(),
    phoneNumber: Joi.number().required(),
  }),
};
module.exports = {
  hospitals,
};
