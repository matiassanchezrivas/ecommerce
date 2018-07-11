import { combineReducers } from 'redux';
import ordersReducer from './orders-reducer';
import usersReducer from './user-reducer';
import productReducer from './product-reducer';
import cartReducer from './cart-reducer';


export default combineReducers({
  orders: ordersReducer,
  users: usersReducer,
  items: productReducer,
  cart: cartReducer,
});