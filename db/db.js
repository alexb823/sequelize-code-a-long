const Sequelize = require("sequelize");

//exports the db connection
module.exports = new Sequelize('ubuntu', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

