import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const createPrivetRegistry = async ({ payload, token }) => {
  // const [_key] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/privetRegistries/create`,
      payload,
      config
    );
    successAlert(data.message);
  } catch (err) {
    console.error(err);
  }
};
