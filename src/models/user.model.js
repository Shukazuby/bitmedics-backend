const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('users', {
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
    password: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
    },
    isEmailVerified: {
      type: dataType.BOOLEAN,
    },
    phoneNumber: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    dOB: {
      type: dataType.DATE,
      allowNull: false,
      trim: true,
    },
    address: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    profilePicture: {
      type: dataType.STRING,
      trim: true,
    },
    gender: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    userType: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    roleId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },

  });

  return user;
};
