const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js')
const Chalk = require('chalk');
const LocalStrategy = require('passport-local').Strategy;

// modelos que voy a usar 
const models = require('../db/models');
const User = models.User;


//Serializando user
passport.serializeUser((user, done) => {
    console.log(Chalk.magenta('Serializo user'))
    console.log(Chalk.magenta('user ID: ', user.dataValues.id))
    done(null, user.dataValues.id);
})

//Deserializando
passport.deserializeUser((id, done) => {
    console.log(Chalk.magenta('Deserializo user'));
    console.log(Chalk.magenta('user ID: ', id));
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


passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function verify(email, password, done) {
        console.log(Chalk.red('Entra a la local strategy con ', email, password));
        User.findOne({ where: { email: email } }).then(
            (currentUser) => {
                console.log(Chalk.red('Encontre al user en local', currentUser))
                if (!currentUser) return done(null, false);
                if (password !== currentUser.password) {
                    console.log(Chalk.red('La password no coincide', password, currentUser.password))
                    return done(null, false)
                } else {
                    done(null, currentUser)
                }
            }
        )
        //(email, function (err, user) {
        //     if (err) return done(err);
        //     if (!user) return done(null, false);
        //     passwordHash.compare(password, user.password, function (err, res) {
        //         if (err) return done(err);
        //         if (!res) return done(null, false);
        //         done(null, user);
        //     });
        // });
    }
));

// passport.use(new LocalStrategy(

//     function (username, password, done) {
//         console.log(Chalk.red('Entra a la local strategy con ', username, password));
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username.' });
//             }
//             if (!user.validPassword(password)) {
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, user);
//         });
//     }
// ));