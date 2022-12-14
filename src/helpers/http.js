import axios from 'axios';

const url = 'https://dicurre.vercel.app/';
// const url = 'http://192.168.1.10:8787/';
// const url = 'http://localhost:8787';
// const url = 'https://fazzpay.herokuapp.com/';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: url,
    // baseURL: process.env.REACT_NATIVE_APP_URL,
  });
};

export default http;
