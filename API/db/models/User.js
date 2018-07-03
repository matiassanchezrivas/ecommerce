const Sequelize = require('sequelize');
const db = require('../db.js')

const User = db.define('User', {
  type: {
    type: Sequelize.ENUM('admin', 'regular'),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  googleID: {
    type: Sequelize.STRING
  }
})



module.exports = User;


// type {Admin|Regular|}
// status {activo|inactivo|}
// name
// password
// email
// ordenes [ ] FK