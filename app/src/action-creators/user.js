import axios from 'axios';
import { SET_CURRENT_USER } from '../constants';

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser
});