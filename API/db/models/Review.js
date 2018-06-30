const Sequelize = require('sequelize');
const db = require('../db.js')

const Review = db.define('review', {
  review: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  rate: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 1
    }
  }
}, )

module.exports = Review;
