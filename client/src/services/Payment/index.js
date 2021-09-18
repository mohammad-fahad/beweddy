import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const attemptPayment = async payload => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/create-checkout-session`,
      payload,
      config
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
