const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('hospital-specialties', {
    hospitalSpecialties: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    SpecialtyDescription: {
      type: dataType.STRING,
      trim: true,
    }
  });

  return user;
};
