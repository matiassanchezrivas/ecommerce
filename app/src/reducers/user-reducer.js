import { SET_CURRENT_USER } from '../constants';

const initialState = {
  currentUser: {
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    default:
      return state;
  }
};