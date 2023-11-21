const Joi = require('joi');

const roles = {
  body: Joi.object().keys({
    roleType: Joi.string().required(),
    roleName: Joi.string().required(),
    roleDescription: Joi.string(),
  }),
};
module.exports = {
  roles,
};
