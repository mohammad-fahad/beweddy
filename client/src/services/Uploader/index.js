import axios from 'axios';

export const fileUploader = async (file, type = '/image') => {
  const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}${type}/upload`;

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'beweddy_csfhgnsu');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const { data } = await axios.post(URL, formData, config);
    const { public_id, format, height, width, secure_url, url, version } = data;
    return { public_id, format, height, width, secure_url, url, version };
  } catch (err) {
    console.error(err);
  }
};
