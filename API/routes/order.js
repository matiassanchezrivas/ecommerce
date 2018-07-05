const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Order = models.Order
const Product = models.Product

router.get('/', function (req, res, next) {
    Order.findAll().then(
        (ordenes) => {
            res.json(ordenes)
        }
    )
});

router.get('/:userId', function(req, res, next){
    Order.findAll({
        where: {ownerId: req.params.userId}, 
        include: [
            {
                model: Product,
                as: "product"
            }
        ]
    }).then(
        (ordenes) =>{
            res.json(ordenes)
        }
    )
})

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
