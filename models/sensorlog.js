'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sensor_log.init({
    sensor_id: DataTypes.INTEGER,
    humidity: DataTypes.DOUBLE,
    temperature: DataTypes.DOUBLE,
    up_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sensor_log',
  });
  return Sensor_log;
};