const Chalk = require('chalk')
const router = require('express').Router();

//import rutas
var usersRouter = require('./user');
var productRouter = require('./product');
var orderRouter = require('./order');
var categoryRouter = require('./category');
var reviewRouter = require('./review');



// uso routes
router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use('/category', categoryRouter);
router.use('/review', reviewRouter);
router.use('/user', usersRouter);




module.exports = router;
