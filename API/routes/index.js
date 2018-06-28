const Chalk = require('chalk')

const router = require('express').Router();
module.exports = router;


// import routes
router.use('/product', require('./product'));
router.use('/order', require('./order'));
router.use('/category', require('./category'));
router.use('/review', require('./review'));
router.use('/user', require('./user'));




// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});

