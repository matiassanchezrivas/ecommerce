const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Review = models.Review

router.get('/', function (req, res, next) {
    res.send('hola desde review');
});

router.post('/', function (req, res) {
    console.log('BODY', req.body);

    Review.findOrCreate({
        where: {
            review: req.body.review,
            rate: req.body.rate
        },
    }).then((data) => {
        console.log('DATA', data)
        res.status(200).send(data);
    })
})


module.exports = router;


//routers 
