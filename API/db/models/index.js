const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Order = require('./Order');
const Review = require('./Review');

Review.belongsTo(Product, { as: 'product' })
Review.belongsTo(User, { as: 'User' })

Order.belongsTo(User, { as: 'owner' })

Category.belongsToMany(Product, { as: 'product', through: 'category_products' })
Product.belongsToMany(Category, { as: 'category', through: 'category_products' })

Product.belongsToMany(Order, { as: 'order', through: 'order_products' })
Order.belongsToMany(Product, { as: 'product', through: 'order_products' })

module.exports = { Product, Category, User, Order, Review };