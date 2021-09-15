import { errorAlert, handleErrorMessage, successAlert } from '@helpers/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@utils/index';
import axios from 'axios';
import { client } from 'pages/_app';

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
      await client.invalidateQueries('guests');
      successAlert(data.message);
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
