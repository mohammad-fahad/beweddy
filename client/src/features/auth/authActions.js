import { errorAlert, handleErrorMessage, successAlert } from '@helpers/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@utils/index';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptSignup = createAsyncThunk(
  'auth/attemptSignup',
  async signupData => {
    try {
      const { data } = await axios.post(
        `${API_URL}/users/register`,
        signupData,
        config
      );
      successAlert(data.message);
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return err.response && err.response.data;
    }
  }
);

