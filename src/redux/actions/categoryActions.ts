import {GET_CATEGORIES, GET_CATEGORIES_ERROR} from '../types';
import axios from 'axios';
import {API, ApiCategories} from '../../config/config';

export const getCategories = categories => async (dispatch, getState) => {
  try {
    dispatch({type: GET_CATEGORIES});
    const {data} = await axios.get(API + ApiCategories);
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_ERROR,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
