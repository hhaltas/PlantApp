import {GET_QUESTIONS, GET_QUESTIONS_ERROR} from '../types';
import axios from 'axios';
import {API, ApiQuestions} from '../../config/config';

export const getQuestions = questions => async (dispatch, getState) => {
  try {
    dispatch({type: GET_QUESTIONS});
    const {data} = await axios.get(API + ApiQuestions);
    dispatch({
      type: GET_QUESTIONS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_QUESTIONS_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
