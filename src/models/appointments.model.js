const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const appointments = sequelize.define('appointments', {
    patientId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
      unique: true,
    },
    hospitalId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
        unique: true,
      },
      doctorId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
        unique: true,
      },
  });

  return appointments;
};
