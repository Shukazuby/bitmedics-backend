const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('hospital-admins', {
    hospitalId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    userId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    }
  });

  return user;
};
