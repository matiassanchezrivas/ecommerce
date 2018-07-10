const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const User = models.User;


router.get('/', function (req, res, next) {
    res.send('hola desde user');
});

router.get('/userLog', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.status(200).json(
            {
                name: req.user.dataValues.name,
                email: req.user.dataValues.email,
                profilePicture: req.user.dataValues.profilePicture
            }
        )
        next();
    } else {
        res.send('Unauthorized')
    }
})


router.post('/', function (req, res) {
    console.log('body', req.body);

    User.findOrCreate({
        where: {
            type: req.body.type,
            status: req.body.status,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }
    }).then((data) => {
        res.status(200).send(data);
    })
});





module.exports = router;


//routers 
