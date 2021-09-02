import { errorAlert, handleErrorMessage, successAlert } from '@helpers/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@utils/index';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptCreateGuest = createAsyncThunk(
  'auth/attemptCreateGuest',
  async (guestInfo, { getState }) => {
    try {
      const { user } = getState().user;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `${API_URL}/guests/create`,
        guestInfo,
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
