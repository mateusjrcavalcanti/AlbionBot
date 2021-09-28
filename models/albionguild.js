'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AlbionGuild extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    AlbionGuild.init({
        name: DataTypes.STRING,
        guildId: DataTypes.STRING,
        discordServer: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'AlbionGuild',
    });
    return AlbionGuild;
};