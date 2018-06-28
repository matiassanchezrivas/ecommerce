const Sequelize = require('sequelize');
const express = require('express');
var router = express.Router();

// modelos que voy a usar 
var Product = require('../db/models');


router.get('/', function(req, res, next) {
    res.send('hola desde productos');
});


module.exports = router;


//routers 