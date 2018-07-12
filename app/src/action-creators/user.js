import axios from '../config/axios';
import { SET_CURRENT_USER } from '../constants';
import { RECEIVE_USERS } from '../constants';

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch =>
  axios.get('/user')
    .then(res => res.data)
    .then(users => {
      console.log(users)
      dispatch(receiveUsers(users))
    });