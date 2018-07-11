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

module.exports = router;