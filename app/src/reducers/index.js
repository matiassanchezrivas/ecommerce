import { combineReducers } from 'redux';
import ordersReducer from './orders-reducer';
import usersReducer from './user-reducer';
import productsReducer from './product-reducer';
import cartReducer from './cart-reducer';
import categoryReducer from './category-reducer';

export default combineReducers({
  orders: ordersReducer,
  users: usersReducer,
  products: productsReducer,
  cart: cartReducer,
  categories: categoryReducer
});