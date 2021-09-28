const { config } = require("dotenv");
config({
    path: __dirname + "/.env"
});

module.exports = {
    development: {
        username: 'fancisquin_dev',
        password: 'FnuJzZ+KAm@xN9yT',
        database: 'fancisquin_dev',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.DBDATABASE,
        host: process.env.DBHOST,
        port: process.env.DPPORT,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
        }
    }
};