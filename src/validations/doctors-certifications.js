const Joi = require('joi');

const doctors = {
  body: Joi.object().keys({
    doctorsId: Joi.number().required(),
    certificationName: Joi.string().required(),
    certificationIssuingAuthority: Joi.string().required(),
    certificationExpiryDate: Joi.date(),
    certificationDate: Joi.date().required(),
    certificationComment: Joi.string(),
  }),
};
module.exports = {
  doctors,
};

const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const doctorCertifications = sequelize.define('doctorCertifications', {
    doctorId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
      unique: true,
    },
    certificationName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    certificationIssuingAuthority: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    certificationExpiryDate: {
      type: dataType.DATE,
      allowNull: true,
      trim: true,
    },
    certificationDate: {
      type: dataType.DATE,
      allowNull: false,
      trim: true,
    },
    certificationComment: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
  });

  return doctorCertifications;
};
