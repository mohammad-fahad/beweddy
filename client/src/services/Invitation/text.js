import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const sendTextInvites = async payload => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/invitation/sms`,
      payload,
      config
    );
    successAlert(data.message);
  } catch (err) {
    console.error(err);
  }
};
