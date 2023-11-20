const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const payments = sequelize.define('payments', {
    hospitalId: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    paymentGateway: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    amountPaid: {
      type: dataType.INTEGER,
      allowNull: false,
      trim: true,
    },
    autoRenewal: {
      type: dataType.BOOLEAN,
      allowNull: true,
      trim: true,
    },
    startDate: {
      type: dataType.DATETIME,
      allowNull: false,
      trim: true,
    },
    endDate: {
      type: dataType.DATETIME,
      allowNull: true,
      trim: true,
    },
    transactionStatus: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
    transactionDetails: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
  });

  return payments;
};
