const Sequelize = require('sequelize');
const Chalk = require('chalk')

const express = require('express')
const db = require('./db/db.js')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)


app.use((err, req, res, next) => {
    res.status(500).send(err);
});



db.sync()
    .then(() => app.listen(3001, () => console.log(Chalk.green('Escuchando en el puerto 3001'))));