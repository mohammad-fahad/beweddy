import { createSlice } from '@reduxjs/toolkit';
import { attemptActivation, attemptLogin } from './userActions';

const initialState = {
  loading: false,
  // error: null,
  success: false,
  user: null,
  message: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(attemptActivation.pending, state => {
        state.loading = true;
      })
      .addCase(attemptActivation.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.user = payload.user;
        state.error = payload.error;
      })
      .addCase(attemptActivation.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(attemptLogin.pending, state => {
        state.loading = true;
      })
      .addCase(attemptLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.user = payload.user;
        state.error = payload.error;
      })
      .addCase(attemptLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // .addCase(attemptGoogleSignIn.pending, state => {
    //   state.loading = true;
    // })
    // .addCase(attemptGoogleSignIn.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.success = true;
    //   state.user = payload.user;
    //   state.error = payload.error;
    // })
    // .addCase(attemptGoogleSignIn.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // })
    // .addCase(attemptFacebookSignIn.pending, state => {
    //   state.loading = true;
    // })
    // .addCase(attemptFacebookSignIn.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.success = true;
    //   state.user = payload.user;
    //   state.error = payload.error;
    // })
    // .addCase(attemptFacebookSignIn.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // });
  },
});

export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
