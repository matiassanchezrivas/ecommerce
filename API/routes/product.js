const express = require('express');
const router = express.Router();

// modelos que voy a usar 
const models = require('../db/models');
const Product = models.Product


router.get('/', function (req, res, next) {
    Product.findAll()
    .then(function(data){
        res.send(data)
    })
});

router.post('/', function (req, res) {
    console.log('BODY', req.body);
    
    Product.findOrCreate({
        where: {
            name: req.body.name,
            description: req.body.description,
            images: req.body.images,
            stock: req.body.stock,
            available: req.body.available

        },
    }).then((data) => {
        console.log('DATA', data)
        res.status(200).send(data);
    })
});


// name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   images: {
//     type: Sequelize.ARRAY(Sequelize.STRING)
//   },
//   stock: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     validate: {
//       min: 0
//     }
//   },
//   available: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false
//   }

module.exports = router;


//routers 