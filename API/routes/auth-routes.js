const router = require('express').Router();
const passport = require('passport');


//auth login
router.get('/login', (req, res) => {
    //Acá se llama la página de login
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')

});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

//Obtengo los datos de google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //console.log(req.user);
    res.redirect('/profile')
})

module.exports = router;