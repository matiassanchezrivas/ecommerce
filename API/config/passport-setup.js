const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js')
const User = require('../db/models/User');

passport.use(new GoogleStrategy({
    //Opciones de la strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //Passport callback function
    console.log(profile.emails[0].value);
    console.log(profile);
    //creacion del user
    User.find({ where: { email: profile.emails[0].value } })
        .then((user) => {
            if (!user) {
                return User.create({
                    type: 'regular',
                    status: 'active',
                    name: profile.displayName,
                    password: null,
                    email: profile.emails[0].value,
                    googleID: profile.id
                })
            } else {
                return null;
            }
        })
    done();
}))

//accessToken: la recibimos de google
//refreshToken: refrescar cuando se expira la access
//profile: profile info
//done: function when done 