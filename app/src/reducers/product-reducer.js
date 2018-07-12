import { RECEIVE_PRODUCTS, SET_CURRENT_PRODUCT } from '../constants';

const initialState = {
<<<<<<< HEAD
  cart: [],
=======
  product: {

  },
  products: []
>>>>>>> 7951e91b098435b9501fe5c2120ca043d955dd61

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