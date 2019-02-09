const Sequelize = require("sequelize");

//For cloud9 db
// const connection = new Sequelize('ubuntu', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false,
// });

//For my local db
const connection = new Sequelize('sequelizedemo', 'Alex', '', {
    dialect: 'postgres',
    logging: false
})

//Exports the db connection
module.exports = connection;
