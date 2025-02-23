import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './reducer/categoriesSlice';
import questionsReducer from './reducer/questionsSlice';
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
