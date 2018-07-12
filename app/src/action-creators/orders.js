import axios from 'axios';
import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../constants';

const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders,
});

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order,
});

export const fetchOrders = userId => dispatch =>
{
  console.log(userId, 'userID')
  if(userId){
    console.log('entra en /order/userid/orders')
    axios.get(`/user/${userId}/orders`)
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)));
  }else {
    console.log('entra en /order')
    axios.get('/order')
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)));
  }
}
  

export const fetchOrder = id => dispatch =>
  axios.get(`/order/${id}`)
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)));