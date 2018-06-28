const Chalk = require('chalk')
const express = require('express')
const db = require('./db/db.js')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express();


// express config
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes)



//error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
  

// Sync de BD y listen de express
db.sync()
    .then(() => app.listen(3002, () => console.log(Chalk.green('Escuchando en el puerto 3002'))));