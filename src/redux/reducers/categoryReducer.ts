import {GET_CATEGORIES, GET_CATEGORIES_ERROR} from '../types';

const initialState = {
  categories: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case GET_CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
