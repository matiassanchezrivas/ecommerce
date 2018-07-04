const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Order = models.Order

<<<<<<< HEAD

router.get('/', function(req, res, next) {
    //res.send('hola desde Order');
    Order.findAll().then(
        (ordenes) =>{
            res.json(ordenes)
        }
    )
=======
router.get('/', function (req, res, next) {
    res.send('hola desde Order');
>>>>>>> 3969fbcae9d19bd714ca4ef4c35d943bbb14f33f
});

router.post('/', function (req, res) {
    console.log('BODY', req.body);

    Order.findOrCreate({
        where: {
            status: req.body.status,
            total: req.body.total,
            fecha: req.body.fecha
        },
    }).then((data) => {
        console.log('DATA', data)
        res.status(200).send(data);
    })
});


module.exports = router;


//routers 
