import Axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return Axios.create({
    headers,
    baseURL: 'http://192.168.1.4:8888',
    // baseURL: process.env.REACT_NATIVE_APP_URL,
  });
};

export default http;
