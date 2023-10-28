import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
//Reducer List
import categoryReducer from './reducers/categoryReducer';
import questionReducer from './reducers/questionReducer';

const reducer = {
  categories: categoryReducer,
  questions: questionReducer,
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
