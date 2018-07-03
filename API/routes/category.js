const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Category = models.Category;


router.get('/', function (req, res, next) {
    res.send('hola desde Category');
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
