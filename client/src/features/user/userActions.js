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
