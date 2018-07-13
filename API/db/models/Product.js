const Sequelize = require('sequelize');
const db = require('../db.js')
const Category = require('./Category.js')
const Review = require('./Review')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  cantidad: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
})

//Product.hasMany(Category, { as: 'Categories' });
//Product.hasMany(Review, { as: 'Reviews' });

module.exports = Product;