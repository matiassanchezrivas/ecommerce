const Sequelize = require('sequelize');
const db = require('../db.js')
const Product = require('./Product')

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('carrito', 'creado', 'procesando', 'cancelado', 'completado'),
        allowNull: false
    },
    date: {
        type: Sequelize.DATE
    },
    total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }


})




module.exports = Order;