import { authReducer } from '@features/auth/authSlice';
import { countryReducer } from '@features/country/countrySlice';
import { questionReducer } from '@features/question/questionSlice';
import { userReducer } from '@features/user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  question: questionReducer,
  auth: authReducer,
  user: userReducer,
  countryList: countryReducer,
});
