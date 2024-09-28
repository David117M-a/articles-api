const { Sequelize } = require('sequelize');

const tedious = require('tedious');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 1433,
    dialect: 'mssql',
    dialectModule: tedious
});

module.exports = {
    db
}