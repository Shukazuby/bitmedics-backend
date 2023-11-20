const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('doctors', {
    hospitalId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    userId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    yearsOfExperience: {
      type: dataType.DATE,
      allowNull: false,
      trim: true,
    },
    specialization: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    licensedUId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    }

  });

  return user;
};
