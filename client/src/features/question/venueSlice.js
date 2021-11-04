import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  // error: null,
  questions: {
    businessName: "",
    businessLink: "",
    businessAnnouncement: {},
    plan: "",
  },
};

const venueSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addBusinessName: (state, action) => {
      state.questions.businessName = action.payload;
    },
    addBusinessLink: (state, action) => {
      state.questions.businessLink = action.payload;
    },
    addBusinessAnnouncement: (state, action) => {
      state.questions.businessAnnouncement = action.payload;
    },
    addplan: (state, action) => {
      state.questions.plan = action.payload;
    },
    resetQuestions: (state, action) => {
      return initialState;
    },
  },
});

export const {
  addBusinessName,
  addBusinessLink,
  addBusinessAnnouncement,
  addplan,
  resetQuestions,
} = venueSlice.actions;
export const venueReducer = venueSlice.reducer;
