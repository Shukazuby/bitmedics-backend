const joi = require('joi');

const hospitals = {
  body: Joi.object().keys({
    hospitalName: joi.string().required(),
    facilityUId: joi.string().required(),
    hospitalSpecialityId: joi.string().required(),
    paymentId: joi.string().required(),
    email: joi.string().email().required(),
    isEmailVerified: joi.boolean(),
    address: joi.string().required(),
    phoneNumber: joi.number().required(),
  }),
};
module.exports = {
  hospitals,
};
