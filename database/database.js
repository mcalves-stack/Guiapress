const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','userdb','passworddb',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;