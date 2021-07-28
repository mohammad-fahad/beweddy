import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  // error: null,
  questions: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestion: (state, action) => ({
      questions: { ...state.questions, ...action.payload },
    }),
  },
});

export const { addQuestion } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
