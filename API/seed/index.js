const Chalk = require('chalk')
const Models = require('../db/models');

const { Product, Category, User, Order, Review } = Models;

module.exports = () => {

    console.log(Chalk.bold.bgMagenta('Creando Seed BD'));
    //USUARIOS
    var users = [];
    users[0] = {
        type: 'admin',
        status: 'active',
        name: 'matias',
        password: 'todobien',
        email: 'matiassanchezrivas@hotmail.com',
        profilePicture: 'https://www.thersa.org/globalassets/profile-images/staff/jake-thorold-312.jpg'
    }
    users[1] = {
        type: 'regular',
        status: 'active',
        name: 'nico',
        password: 'todobien2',
        email: 'nicobernal@gmail.com',
        profilePicture: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'
    }

    //PRODUCTOS
    var products = [];
    products[0] = {
        name: 'Skis salomon',
        description: 'Capa única de fibra preimpregnada que consta de un tejido de carbono y lino a lo largo del esquí. Combina la increíble fuerza y el peso mínimo de la fibra de carbono para ofrecer estabilidad y refuerzo, con un nivel de amortiguación y absorción de vibraciones que rebasa ampliamente a otras construcciones tradicionales de esquís ligeros y de carbono. Patentada y exclusiva de Salomon.',
        images: ['https://www.extremevital.com/catalog/images/salomon/2016/Z12_SPEED_l.jpg', 'https://www.extremevital.com/catalog/images/salomon/2017/x_race_sw_z12speed_1_l.jpg', 'https://www.extremevital.com/catalog/images/salomon/2018/x-race_sw_2018_l.jpg'],
        stock: 1,
        available: true,
        price: 50,

    }
    products[1] = {
        name: 'Snowboard burton',
        description: 'Snowboard clash v-rocker 155',
        images: ['https://cdn.luxedb.com/wp-content/uploads/2011/11/Star-Wars-Inspired-Products-from-Burton-Snowboards-4.jpg', 'url2'],
        stock: 1,
        available: true,
        price: 200,
    }
    products[2] = {
        name: 'DC Focus Snowboard 2017',
        description: 'Snowboard clash v-rocker 155',
        images: ['https://i.pinimg.com/originals/d4/ef/78/d4ef78ebe0e01369d9e162afcf88b16f.jpg', 'url2'],
        stock: 1,
        available: true,
        price: 200,
    }
    products[3] = {
        name: 'Snowboard burton',
        description: 'Snowboard clash v-rocker 155',
        images: ['http://img0.biker-boarder.de/detail_oxp1/atomic17_an5105326_savor_otg_photo_black_photochromic.jpg', 'url2'],
        stock: 1,
        available: true,
        price: 200,
    }
    //REVIEWS
    var reviews = [];
    reviews[0] = {
        review: 'texto del review sobre snowboard',
        rate: 5,
    }

    //CATEGORIES
    var categories = []
    categories[0] = { name: 'nieve' };
    categories[1] = { name: 'skis' };
    categories[2] = { name: 'snowboard' };

    //CREO USUARIOS
    var promisesUsers = users.map((user) => {
        return User.create(user).
            then(() => {
                console.log(Chalk.bgGreen('Nuevo usuario creado', user.name))
            })
    });

    //CREO ORDENES

    var ordenes = []
    ordenes[0] = {
        status: 'creado',
        date: '1980-06-17T00:00:00.000Z',
        total: '50'
    }
    ordenes[1] = {
        status: 'procesando',
        date: '1991-04-15T00:00:00.000Z',
        total: '66'
    }



    //CREO PRODUCTOS
    var promisesProducts = products.map((product) => {
        return Product.create(product).
            then(() => {
                console.log(Chalk.bgGreen('Nuevo producto creado', product.name))
            })
    });

    var promiseSeed = Promise.all([...promisesUsers, ...promisesProducts]).then((data) => {
        console.log(Chalk.bgMagenta('Base de datos seedeada'))
    })

    promiseSeed.then(() => {
        var pProduct = Product.findOne({ where: { name: 'Snowboard burton' } });
        var pUser = User.findOne({ where: { email: 'matiassanchezrivas@hotmail.com' } });
        //CREO REVIEW
        var pUserAndProduct = Promise.all([pUser, pProduct])
            .then((data) => {
                const user = data[0];
                const product = data[1]
                Review.create(reviews[0])
                    .then((review) => {
                        review.setUser(user)
                        return review;
                    })
                    .then((review) => {
                        review.setProduct(product);
                        //console.log(Chalk.bgMagenta('Review seedeado'), reviewWithProduct.review)
                    })

            })
            .catch((err) => console.log(err))
        //CREO CATEGORIAS
        pProduct
            .then((product) => {
                Category.create(categories[0])
                    .then((category) => {
                        category.addProduct(product)
                            .then(() => { console.log(Chalk.bgGreen('Producto ', product.name, 'asociada a categoria', category.name)) })
                    })

                Category.create(categories[2])
                    .then((category) => {
                        product.addCategory(category)
                            .then(() =>
                                console.log(Chalk.bgGreen('Nueva categoria ', category.name, 'asociada a', product.name))
                            )
                            .catch((err) => console.log(Chalk.magenta(err)));
                    })
            })
            .catch((err) => console.log(chalk.magenta(err)));
        //CREO ORDEN    
        pUser
            .then((user) => {
                Order.create(ordenes[0])
                    .then((order) => {
                        order.setOwner(user)
                            .then(() => console.log(Chalk.bgGreen('Nueva orden ', order, 'asociada a', user.name)))
                        pProduct
                            .then((product) => {
                                order.addProduct(product)
                                    .then(() => { console.log(Chalk.bgGreen('Producto ', product.name, 'asociado a orden', order.fecha)) })
                            })

                    })

                Order.create(ordenes[1])
                    .then((order) => {
                        order.setOwner(user)
                            .then(() => console.log(Chalk.bgGreen('Nueva orden ', order, 'asociada a', user.name)))
                        pProduct
                            .then((product) => {
                                order.addProduct(product)
                                    .then(() => { console.log(Chalk.bgGreen('Producto ', product.name, 'asociado a orden', order.fecha)) })
                            })

                    })
            })



    })


}





