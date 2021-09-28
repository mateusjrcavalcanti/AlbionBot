const Sequelize = require('sequelize');
const { config } = require("dotenv");
config({
    path: __dirname + "/.env"
});

const sequelize = new Sequelize(process.env.DBDATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'mysql',
});

module.exports = sequelize;