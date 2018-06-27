const Sequelize = require('sequelize');
const db = require('../db.js')

const Review = db.define('product', {
    review: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  valoracion: {
    type: Sequelize.INTEGER,
    validate:{
        max:5,
        min:1
    }
  }
})



module.exports = Review;