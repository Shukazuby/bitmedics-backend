const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('hospitals', {
    hospitalName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    facilityUId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
      unique: true
    },
    hospitalSpecialtyId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },

    paymentId: {
      type: dataType.INTEGER,
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
    isEmailVerified: {
      type: dataType.BOOLEAN,
    },
    address: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    phoneNumber: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    }
  });

  return user;
};
