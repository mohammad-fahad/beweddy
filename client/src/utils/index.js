import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * @param  {String} public_id
 */
export const removeImage = async public_id => {
  try {
    const { data } = await axios.post(
      `/api/cloudinary/remove`,
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
