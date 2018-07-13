import { RECEIVE_CATEGORIES } from '../constants';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};