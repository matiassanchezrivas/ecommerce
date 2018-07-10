const Chalk = require('chalk')
const express = require('express')
const db = require('./db/db.js')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express();
const seed = require('./seed')
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('./config/keys.js')
const passport = require('passport')

const allowCrossOrigin = (req, res, next) => {
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.set({
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin',
            'Content-Type': 'application/json; charset=UTF-8',
        });
        return res.sendStatus(200);
    }
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'header, Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since',
        'Access-Control-Allow-Credentials': true,
    });
    return next();
};


app.use(allowCrossOrigin)

//passport cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

// express config
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

//error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Sync de BD y listen de express
db.sync({ force: true })
    .then(() => {
        seed();
        app.listen(3002, () => console.log(Chalk.green('Escuchando en el puerto 3002')))
    });