const Sequelize = require('sequelize');
const db = require('../db.js')
const { hash } = require('../../config/passwords.js')

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
  },
  profilePicture: {
    type: Sequelize.TEXT
  },
}, {
    hooks: {
      beforeValidate: (user, options) => {
        user.password = hash(user.password);
      }
    }
  });

// User.hook('beforeValidate', (user, options) => {

//   return user.password = hash(user.password);

// });



module.exports = User;


// type {Admin|Regular|}
// status {activo|inactivo|}
// name
// password
// email
// ordenes [ ] FK



module.exports = User;


// type {Admin|Regular|}
// status {activo|inactivo|}
// name
// password
// email
// ordenes [ ] FK