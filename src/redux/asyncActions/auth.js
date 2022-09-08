import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({email, password}) => {
//     try {
//       const body = new URLSearchParams({email, password}).toString();
//       const {data} = http().post('/auth/login', body);
//       return data;
//     } catch (e) {
//       return e.response.data;
//     }
//   },
// );

export const login = createAsyncThunk('auth/login', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('auth/login', send);
    console.log(data);
    results.data = data.results;
    results.message = data.message;
    return results;
  } catch (e) {
    results.error = e.response.data.message;
    return results;
  }
});