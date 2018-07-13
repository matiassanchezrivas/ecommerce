import axios from '../config/axios';
import { ADD_TO_CART } from '../constants';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

