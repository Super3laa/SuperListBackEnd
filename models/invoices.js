'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoices.init({
    client: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.FLOAT,
    status: DataTypes.ENUM('Overdue','Unpaid','Paid','Draft')
  }, {
    sequelize,
    modelName: 'invoices',
  });
  return invoices;
};