import { RECEIVE_PRODUCTS, SET_CURRENT_PRODUCT } from '../constants';

const initialState = {
  product: {

  },
  products: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product,
      };
    default:
      return state;
  }
};