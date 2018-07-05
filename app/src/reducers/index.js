import { combineReducers } from 'redux';
import ordersReducer from './orders-reducer';

export default combineReducers({
  orders: ordersReducer,
});