import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getAllProfile = createAsyncThunk('profile', async param => {
  const results = {};
  try {
    const {data} = await http().get(
      `profile?search=${param.search}&orderBy=${param.orderBy}&sortType=${param.sortType}&limit=${param.limit}&page=${param.page}`,
    );
    console.log(data);
    results.data = data.results;
    results.pageInfo = data.pageInfo;
    results.message = data.message;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const getHistoryTransaction = createAsyncThunk(
  'auth/historyTransactions',
  async ({token, param}) => {
    const results = {};
    try {
      const {data} = await http(token).get(
        `auth/historyTransactions?sortType=${param.sortType}&limit=${param.limit}&page=${param.page}`,
      );
      results.data = data.results;
      results.pageInfoHistory = data.pageInfo;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const topUp = createAsyncThunk(
  'auth/topup',
  async ({token, request}) => {
    const results = {};
    console.log(token + 'ini token');
    console.log(request.toString() + 'ini request');
    try {
      const send = qs.stringify(request);
      console.log(send + 'ini send');
      const {data} = await http(token).post('auth/topUp', send);
      console.log(data);
      results.data = data.message;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const transfer = createAsyncThunk(
  'auth/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      console.log(data + ' ini data');
      console.log(send + ' ini log send');
      const {data} = await http(token).post('auth/transfer', send);
      console.log(data + ' ini data');
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e + ' apakah ini errornya gaes?');
      results.error = e.response.data.message;
      return results;
    }
  },
);
