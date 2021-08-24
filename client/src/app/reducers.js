import { authReducer } from '@features/auth/authSlice';
import { countryReducer } from '@features/country/countrySlice';
import { guestReducer } from '@features/guest/guestSlice';
import { questionReducer } from '@features/question/questionSlice';
import { todosReducer } from '@features/todo/todoSlice';
import { userReducer } from '@features/user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  question: questionReducer,
  auth: authReducer,
  user: userReducer,
  rsvp: guestReducer,
  todoList: todosReducer,
  countryList: countryReducer,
});
