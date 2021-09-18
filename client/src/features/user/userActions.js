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
  async token => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/active`,
        { token },
        config
      );
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
  async signupData => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/googleSignUp`,
        signupData,
        config
      );

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

      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
