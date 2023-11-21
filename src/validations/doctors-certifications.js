const joi = require('joi');

const doctors = {
  body: Joi.object().keys({
    doctorsId: joi.number().required(),
    certificationName: joi.string().required(),
    certificationIssuingAuthority: joi.string().required(),
    certificationExpiryDate: joi.date(),
    certificationDate: joi.date().required(),
    certificationComment: joi.string(),
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
