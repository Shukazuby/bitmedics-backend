const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const appointments = sequelize.define('appointments', {
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
      doctorId: {
        type: dataType.INTEGER,
        allowNull: false,
        trim: true,
      },
      medicalConcern: {
        type: dataType.STRING,
      },
      appointmentStatus: {
        type: dataType.ENUM('Pending','Completed', 'Cancelled'),
        allowNull: false,
        trim: true,
      },
      appointmentDate: {
        type: dataType.DATE,
        allowNull: false,
        trim: true,
      },
  });

  return appointments;
};
