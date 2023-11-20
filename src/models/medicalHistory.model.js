const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const medicalHistory = sequelize.define('medicalHistory', {
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
      appointmentId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
        unique: true,
      },
  });

  return medicalHistory;
};
