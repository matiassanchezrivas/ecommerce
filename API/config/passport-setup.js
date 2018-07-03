const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js')
const User = require('../db/models/User');
const Chalk = require('chalk');


//Serializando user
passport.serializeUser((user, done) => {
    console.log(Chalk.magenta('Serializo user'))
    console.log(Chalk.magenta('user ID: ', user.dataValues.id))
    console.log(user)

    done(null, user.dataValues.id);
})

//Deserializando
passport.deserializeUser((id, done) => {
    console.log(Chalk.magenta('Deserializo user'));

    User.findById(id).then((user) => {
        console.log(Chalk.magenta('Encuentro user'));
        done(null, user);
    });
})


passport.use(new GoogleStrategy({
    //Opciones de la strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //Passport callback function
    //console.log(profile.emails[0].value);
    //console.log(profile);
    //creacion del user
    User.find({ where: { email: profile.emails[0].value } })
        .then((currentUser) => {
            if (currentUser) {
                //El user existe
                console.log('Usuario encontrado ', currentUser)
                //Paso el usuario
                done(null, currentUser);
            } else {
                //El user no existe
                User.create({
                    type: 'regular',
                    status: 'active',
                    name: profile.displayName,
                    password: null,
                    email: profile.emails[0].value,
                    googleID: profile.id
                }).then((newUser) => {
                    console.log('Nuevo usuario creado ', newUser)
                    //Paso el usuario
                    done(null, newUser);
                })
            }
        })
}))


//accessToken: la recibimos de google
//refreshToken: refrescar cuando se expira la access
//profile: profile info
//done: function when done 