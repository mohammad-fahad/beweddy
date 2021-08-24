import { createSlice } from '@reduxjs/toolkit';
import { attemptCreateGuest } from './guestActions';

const initialState = {
  loading: false,
  success: false,
  guest: null,
  guests: [],
  message: null,
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    addGuest: (state, { payload }) => {
      state.loading = true;
      state.guest = payload;
      state.loading = false;
    },
    resetGuest: state => {
      state.loading = true;
      state.guest = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(attemptCreateGuest.pending, state => {
        state.loading = true;
      })
      .addCase(attemptCreateGuest.fulfilled, state => {
        state.loading = false;
        state.error = payload.error;
      })
      .addCase(attemptCreateGuest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { addGuest, resetGuest } = guestSlice.actions;

export const guestReducer = guestSlice.reducer;
