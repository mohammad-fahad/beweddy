import axios from 'axios';
import moment from 'moment';

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

export const downloadQRCode = () => {
  // return pngUrl;
};

export function isoToUtcDateTime(date) {
  if (!date) {
    return '';
  }

  date = new Date(date);
  return date.toLocaleString();
}

export function isoToUtcDate(date) {
  if (!date) {
    return '';
  }
  date = moment(date);
  return date.utc().format('MM|DD|YYYY');
}

export const prependHttp = url => {
  if (!url?.startsWith('http' || 'https')) {
    return `http://${url}`;
  }
  return url;
};
