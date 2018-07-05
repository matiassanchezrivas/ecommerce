import axios from 'axios';
import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../constants';

const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders,
});

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  album,
});

export const fetchOrders = () => dispatch =>
  axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)));

export const fetchOrder = id => dispatch =>
  axios.get(`/api/albums/${id}`)
    .then(res => res.data)
    .then(order => dispatch(receiveOrder(order)));