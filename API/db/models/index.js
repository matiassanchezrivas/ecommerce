const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Order = require('./Order');
const Review = require('./Review');

Product.hasMany(Category, {as: 'categories'})
Product.hasMany(Review, {as: 'reviews'})
User.hasMany(Order, {as: 'orders'})
Order.hasMany(Product, {as: 'products'})
Review.belongsTo(User)


Product.create({
        id: 1,
        name: 'Chair',
        description: 'descrpicon',
        images: ['1', '2'],
        stock: 12,
        available: true,
        categories: [
            { name: 'Alpha' },
            { name: 'Beta' }
        ]
    }, {
            include: ['categories'],

        }).then(function(value) {
            console.log(value.categories)
        })


module.exports = {Product, Category, User, Order, Review};