const Chalk = require('chalk')
const router = require('express').Router();

//import rutas
const usersRouter = require('./user');
const productRouter = require('./product');
const orderRouter = require('./order');
const categoryRouter = require('./category');
const reviewRouter = require('./review');
const authRouter = require('./auth-routes')
const singleProductRouter = require('./SingleProduct')

// uso routes
router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use('/category', categoryRouter);
router.use('/review', reviewRouter);
router.use('/user', usersRouter);
router.use('/auth', authRouter)
router.use('/singleproduct', singleProductRouter)

module.exports = router;
