const Sequelize = require('sequelize');
const db = require('../db.js')

const Category = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }

})



module.exports = Category;