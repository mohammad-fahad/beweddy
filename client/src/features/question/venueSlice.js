import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  // error: null,
  questions: {
    businessName: "",
    websiteLink: "",
    customWebsite: false,
    logo: {},
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
      state.questions.websiteLink = action.payload;
    },
    addBusinessAnnouncement: (state, action) => {
      state.questions.logo = action.payload;
    },
    addplan: (state, action) => {
      state.questions.plan = action.payload;
    },
    buildCustomWebsite: (state, action) => {
      state.questions.customWebsite = action.payload;
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
  buildCustomWebsite,
  resetQuestions,
} = venueSlice.actions;
export const venueReducer = venueSlice.reducer;
