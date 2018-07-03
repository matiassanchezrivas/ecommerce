const router = require('express').Router();
const passport = require('passport');


//auth login
router.get('/login', (req, res) => {
    //Acá se llama la página de login
});

router.get('/logout', (req, res) => {

});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

//Obtengo los datos de google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('sdfsdf')
})

module.exports = router;