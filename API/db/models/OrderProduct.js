
const Sequelize = require('sequelize');
const db = require('../db.js')

const OrderProduct = db.define('orderProduct', {
    cantidad: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = OrderProduct;