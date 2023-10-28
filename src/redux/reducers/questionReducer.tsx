import {GET_QUESTIONS, GET_QUESTIONS_ERROR} from '../types';

const initialState = {
  questions: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case GET_QUESTIONS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
