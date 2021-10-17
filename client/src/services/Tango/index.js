import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const attemptSendGiftCardEmail = async payload => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(`${API_URL}/tango`, payload, config);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const attemptToGiftCardRedeem = async payload => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/tango/redeem`,
      payload,
      config
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
