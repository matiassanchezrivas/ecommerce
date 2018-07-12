import { ADD_TO_CART } from '../constants';

const initialState = {
  cart: [],

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.product )
      };    
    default:
      return state;
  }
};