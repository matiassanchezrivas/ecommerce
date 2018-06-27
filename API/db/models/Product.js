const Sequelize = require('sequelize');
const db = require('../db.js')

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
  }

})



module.exports = Product;

// Nombre
// Descripción
// Imagen [ ]
// Review [ ] FK
// Stock
// Disponibilidad
// Categorías [ ] FK