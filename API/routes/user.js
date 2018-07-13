const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const User = models.User;
const Order = models.Order;
const Product = models.Product;
const Category = models.Category;


router.get('/', function (req, res, next) {
    if (req.isAuthenticated() && req.user.type === 'admin') {
        User.findAll({
            // include: [
            //     {
            //         model: Category,
            //         as: 'category'
            //     }
            // ]
        })
            .then(users => res.status(200).json(users))
            .catch(err => res.send(err))

    } else {
        res.status(401).send('Unauthorized')
    }
});

router.get('/me', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.status(200).json(
            {
                name: req.user.dataValues.name,
                email: req.user.dataValues.email,
                profilePicture: req.user.dataValues.profilePicture,
                type: req.user.dataValues.type,
                id: req.user.id
            }
        )
        //next();
    } else {
        res.status(401).send('Unauthorized')
    }
})

router.get('/:userId', function (req, res, next) {
    User.findOne({
        where: {
            id: req.params.userId
        }
    })
        .then(
            (user) => {
                res.json(user)
            }
        )
})

router.get('/:userId/orders', function (req, res, next) {
    Order.findAll({
        where: { ownerId: req.params.userId },
        include: [
            {
                model: Product,
                as: "product"
            }
        ]
    }).then(
        (ordenes) => {
            res.json(ordenes)
        }
    )
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
