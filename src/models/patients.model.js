const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const patients = sequelize.define('patients', {
    firstName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    lastName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    middleName: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
      },
    email: {
      type: dataType.STRING,
      allowNull: false,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    phoneNumber: {
        type: dataType.INTEGER,
        allowNull: false,
        unique: true,
        trim: true,
    },
    gender: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
    },
    dOB: {
        type: dataType.DATE,
        allowNull: false,
        trim: true,
    },
    allergies:{
      type: dataType.TEXT,
      trim: true,
  },
  occupation: {
    type: dataType.STRING,
    allowNull: false,
    trim: true,
},

insuranceStatus: {
  type: dataType.ENUM('YES','NO'),
  allowNull: false,
  trim: true,
},
guardianName: {
  type: dataType.STRING,
  allowNull: false,
  trim: true,
},
guardianPhone: {
  type: dataType.INTEGER,
  allowNull: false,
  trim: true,
},
guardianEmail: {
  type: dataType.STRING,
  allowNull: false,
  trim: true,
},





  });

  return patients;
};
