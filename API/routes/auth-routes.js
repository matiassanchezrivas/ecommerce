const router = require('express').Router();
const passport = require('passport');
const Chalk = require('chalk')

// modelos que voy a usar 
const models = require('../db/models');
const User = models.User;


//auth login
router.get('/login', (req, res) => {
    //Acá se llama la página de login
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
});

router.post('/register', function (req, res, next) {
    console.log(Chalk.green('registering user local'));
    //console.log(req.body)
    console.log(Chalk.green(req.body.email));
    console.log(Chalk.green(req.body.password));
    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (user) {
                res.send('usuarioYaCreado')
            } else {
                //El user no existe
                User.create({
                    type: 'regular',
                    status: 'active',
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email,
                    googleID: null
                }).then((newUser) => {
                    console.log('Nuevo usuario creado local', newUser)
                    res.redirect('/auth/login')
                })
            }
        })
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.send('holis');
});

//auth with google
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    }));

//Obtengo los datos de google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //console.log(req.user);
    res.redirect('/profile')
})

//auth with local
router.get('/local',
    passport.authenticate('local'),
    function (req, res) {
        // Si está función se invocó entonces el proceso de autenticación funcionó correctamente.
        // `req.user` contiene al usuario autenticado.
        res.redirect('/profile/' + req.user.username);
    });

module.exports = router;