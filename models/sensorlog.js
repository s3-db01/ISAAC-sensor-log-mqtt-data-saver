'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SensorLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SensorLog.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }, 
    sensor_id: DataTypes.STRING,
    humidity: DataTypes.DOUBLE,
    temperature: DataTypes.DOUBLE,
    up_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'SensorLog',
  });
  return SensorLog;
};