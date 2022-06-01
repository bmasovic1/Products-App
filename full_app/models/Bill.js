const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    "bill",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      FiscalNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      FiscalDate: {
        type: Sequelize.STRING,
        allowNull: true
      },
      FiscalTime: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
    { freezeTableName: true }
  );
  return Bill;
};
