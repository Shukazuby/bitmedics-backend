const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define('roles', {
    roleType: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    roleName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    roleDescription: {
      type: dataType.STRING,
      trim: true,
    }
  });

  return user;
};
