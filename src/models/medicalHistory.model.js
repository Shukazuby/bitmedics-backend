const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const medicalHistory = sequelize.define('medicalHistory', {
    patientId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    hospitalId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
      },
      appointmentId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
      },
  });

  return medicalHistory;
};
