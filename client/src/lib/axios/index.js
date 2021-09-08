import axios from 'axios';

const Token = JSON.parse(localStorage.getItem(''));

const axiosInstance = axios.create({
  baseURL: 'https://viralsnare.com/api',
  headers: {
    Accept: 'application/json',
    Authorization: Token ? `Bearer ${Token}` : '',
  },
});

export default axiosInstance;
