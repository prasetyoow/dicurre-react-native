import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

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

export const editProfile = createAsyncThunk(
  'auth/editProfile',
  async request => {
    const results = {};
    const token = request.token;
    console.log(qs.stringify(results) + ' ini results');
    console.log(qs.stringify(request) + ' ini request');
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('auth/profile', send);
      console.log(data + ' ini data async');
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const editPicture = createAsyncThunk(
  'auth/editPicture',
  async request => {
    const results = {};
    const token = request.token;
    console.log(token);
    try {
      const addPicture = new FormData();
      console.log(request);
      addPicture.append('picture', {
        uri: request.uri,
        name: request.fileName,
        type: request.type,
      });
      // const send = qs.stringify(request);
      const {data} = await http(token).patch('auth/profile', addPicture, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      console.log(data + ' ini data async');
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
