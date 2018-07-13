const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Order = models.Order
const Product = models.Product
const User = models.User

router.get('/', function (req, res, next) {
    Order.findAll({
        include: [
            {
                model: Product,
                as: "product"
            },
            {
                model: User,
                as: "owner"
            },
            
        ]
    }).then(
        (ordenes) => {
            res.json(ordenes)
        }
    )
});



router.get('/:orderId', function(req, res, next){
    Order.findOne({
        where: { id: req.params.orderId },
        include: [
            {
                model: Product,
                as: "product"
            }
        ]
    }).then(
        (orden) => {
            res.json(orden)
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
