import axios from '../config/axios';
import { RECEIVE_ORDERS, RECEIVE_ORDER, SET_ORDER } from '../constants';

const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders,
});

const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order,
});

const setOrder = (order) => ({
  type: SET_ORDER,
  order,
});

export const fetchOrders = () => dispatch =>
  axios.get('/order')
    .then(res => res.data)
    .then(orders => dispatch(receiveOrders(orders)));

export const fetchOrder = id => dispatch =>
  axios.get(`/api/orders/${id}`)
    .then(res => res.data)
    .then(order => dispatch(receiveOrder(order)));

export const putOrder = (id, contents) => dispatch =>
  axios.put(`/api/orders/${id}`, contents)
    .then(res => res.data)
    .then(order => dispatch(setOrder(order)));


