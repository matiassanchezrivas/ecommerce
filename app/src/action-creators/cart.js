import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, EMPTY_CART, UPDATE_QUANT_CART, SET_TOTAL_CART, SET_ORDER_FROM_CART, CHECKOUT_CART } from '../constants';

// add product to cart

export const addProductCart = (product) => ({
        type: ADD_PRODUCT_CART,
        product
});


// remove product from cart
export const RemoveProductCart = (product) => ({
        type: REMOVE_PRODUCT_CART,
        product
});

// empty cart
export const emptyCart = (cart) => ({
        type: EMPTY_CART,
        cart
});


// update quantity
export const updateQuantCart = (index, value) => ({
        type: UPDATE_QUANT_CART,
        index,
        value
});


// calcular precio
export const setTotalCart = (index, value) => ({
        type: SET_TOTAL_CART,
        index,
        value
});


// crear orden a partir de carrito 'cuando est'a loggeado un user
export const NewOrderFromCart = (cart, owner) => ({
        type: SET_ORDER_FROM_CART,
        cart,
        owner
});


//cambiar status de la orden de carrito a activa cuando hay checkout con usuario loggeado
export const checkoutCart = (cart, owner) => ({
        type: CHECKOUT_CART,
        cart,
        owner
});






