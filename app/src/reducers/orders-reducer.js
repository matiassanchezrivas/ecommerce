import { RECEIVE_ORDERS, RECEIVE_ORDER, ADD_ORDER,  } from '../constants';


const initialState = {
  orders: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case RECEIVE_ORDER:
      return {
        ...state,
        selected: action.order,
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    default:
      return state;
  }
};