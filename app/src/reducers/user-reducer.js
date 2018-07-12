import { SET_CURRENT_USER } from '../constants';
import { RECEIVE_USERS } from '../constants';

const initialState = {
  currentUser: {
  },
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};