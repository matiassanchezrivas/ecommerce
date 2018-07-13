import axios from '../config/axios';
import { SET_CURRENT_PRODUCT } from '../constants';
import { RECEIVE_PRODUCTS } from '../constants';

export const setCurrentProduct = (currentProduct) => ({
  type: SET_CURRENT_PRODUCT,
  currentProduct
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const fetchProducts = () => dispatch =>
  axios.get('/product')
    .then(res => res.data)
    .then(products => {
      dispatch(receiveProducts(products))
    });

export const fetchProduct = (id) => dispatch =>
  axios.get(`/product/${id}`)
    .then(res => res.data)
    .then(product => {
      dispatch(setCurrentProduct(product))
    });