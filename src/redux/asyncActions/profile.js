import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getUserLogin = createAsyncThunk(
  'auntheticated/login',
  async token => {
    const results = {};
    try {
      const {data} = await http(token).get('auth/profile');
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
