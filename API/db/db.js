const Sequelize = require('sequelize')
const Chalk = require('chalk')

const db = new Sequelize('postgres://localhost:5432/ecommerce');
module.exports = db;

db
    .authenticate()
    .then(() => {
        console.log(Chalk.green('Conexión con la base de datos correcta'));
    })
    .catch(err => {
        console.error(Chalk.red('No se pudo conectar a la base de datos'));
    });