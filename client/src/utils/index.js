import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * @param  {String} imageData
 */
export const attemptImageUpload = async imageData => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const { data } = await axios.post(`${API_URL}/upload`, imageData, config);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * @param  {String} public_id
 */
export const removeImage = async public_id => {
  try {
    const { data } = await axios.post(
      `${API_URL}/upload/delete`,
      {
        public_id,
      },
      config
    );
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
