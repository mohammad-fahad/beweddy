import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  // error: null,
  questions: {
    coupleName: {},
    weddingDay: {},
    weddingAnnouncement: {},
    sentInvitation: {},
    couplePictures: [],
    venueId: null,
  },
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addCoupleName: (state, action) => {
      state.questions.coupleName = action.payload;
    },
    addWeddingDay: (state, action) => {
      state.questions.weddingDay = action.payload;
    },
    addWeddingAnnouncement: (state, action) => {
      state.questions.weddingAnnouncement = action.payload;
    },
    addSentInvitation: (state, action) => {
      state.questions.sentInvitation = action.payload;
    },
    addCouplePictures: (state, action) => {
      state.questions.couplePictures = action.payload;
    },
    addSelectVenue: (state, action) => {
      state.questions.venueId = action.payload;
    },
    resetQuestions: (state, action) => {
      return initialState;
    },
  },
});

export const {
  addCoupleName,
  addWeddingDay,
  addWeddingAnnouncement,
  addSentInvitation,
  addCouplePictures,
  resetQuestions,
  addSelectVenue,
} = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
