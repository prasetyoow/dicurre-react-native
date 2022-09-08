import axios from 'axios';

const url = 'http://192.168.1.3:8888/';
// const url = 'http://localhost:8888';
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
