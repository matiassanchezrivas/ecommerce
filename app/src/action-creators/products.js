import axios from 'axios';
import { ADD_TO_CART } from '../constants';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

