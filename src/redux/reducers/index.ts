import {combineReducers} from 'redux';
import categoriesReducer from './categoryReducer';
import questionReducer from './questionReducer';
export default combineReducers({
  categoriesReducer: categoriesReducer,
  questionReducer: questionReducer,
});
