const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Category = models.Category;



router.get('/', function (req, res, next) {
    if (req.isAuthenticated() && req.user.type === 'admin') {
        Category.findAll({

        })
            .then(users => res.status(200).json(users))
            .catch(err => res.send(err))

    } else {
        res.status(401).send('Unauthorized')
    }
});

router.post('/', function (req, res) {
    //console.log('BODY', req.body);

    Category.findOrCreate({
        where: {
            name: req.body.name,

        },
    }).then((data) => {
        //console.log('DATA', data)
        res.status(200).send(data);
    })
});


module.exports = router;


//routers 
