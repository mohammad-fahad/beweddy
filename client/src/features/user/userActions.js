import { resetQuestions } from '@features/question/questionSlice';
import { errorAlert, handleErrorMessage, successAlert } from '@helpers/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@utils/index';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptActivation = createAsyncThunk(
  'auth/attemptActivation',
  async ({ token, session_id }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/active`,
        { token },
        config
      );

      if (data.url && !session_id) {
        return (window.location.href = data.url);
      }
      localStorage.setItem('beweddy_token', JSON.stringify(data));
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptLogin = createAsyncThunk(
  'auth/attemptLogin',
  async loginData => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/login`,
        loginData,
        config
      );
      if (data.url) {
        return (window.location.href = data.url);
      }
      successAlert(data.message);
      errorAlert(data.error);

      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptUpdateUserProfile = createAsyncThunk(
  'auth/attemptUpdateUserProfile',
  async (updatedData, { getState }) => {
    try {
      const { user } = getState().user;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `${API_URL}/users/updateUserProfile`,
        updatedData,
        config
      );
      successAlert(data.message);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptGoogleSignUp = createAsyncThunk(
  'auth/attemptGoogleSignUp',
  async (signupData, { dispatch }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/googleSignUp`,
        signupData,
        config
      );
      dispatch(resetQuestions());

      if (data.url) {
        return (window.location.href = data.url);
      }
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptGoogleSignIn = createAsyncThunk(
  'auth/attemptGoogleSignIn',
  async signInData => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/googleSignIn`,
        signInData,
        config
      );

      if (data.url) {
        return (window.location.href = data.url);
      }

      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
