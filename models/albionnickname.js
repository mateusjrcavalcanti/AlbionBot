'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlbionNickname extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AlbionNickname.init({
    nick: DataTypes.STRING,
    discordUser: DataTypes.STRING,
    discordServer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AlbionNickname',
  });
  return AlbionNickname;
};