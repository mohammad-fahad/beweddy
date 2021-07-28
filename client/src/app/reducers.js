import { questionReducer } from '@features/question/questionSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  question: questionReducer,
});
