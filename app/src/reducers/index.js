import { combineReducers } from 'redux';
import ordersReducer from './orders-reducer';
import usersReducer from './user-reducer';

export default combineReducers({
  orders: ordersReducer,
  users: usersReducer,
});