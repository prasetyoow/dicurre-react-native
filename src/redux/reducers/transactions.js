import {createSlice} from '@reduxjs/toolkit';
import {
  getAllProfile,
  topUp,
  transfer,
  getHistoryTransaction,
} from '../asyncActions/transactions';

const initialState = {
  name: '',
  phone: '',
  image: '',
  receiver: '',
  amount: '',
  notes: '',
  date: '',
  errorMsg: '',
  successMsg: '',
  getAllProfile: [],
  resultsHistory: {},
  pageInfo: {},
  nextPage: [],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getname: (state, action) => {
      state.name = action.payload;
    },
    getphone: (state, action) => {
      state.phone = action.payload;
    },
    getimage: (state, action) => {
      state.image = action.payload;
    },
    getreceiver: (state, action) => {
      state.receiver = action.payload;
    },
    getamount: (state, action) => {
      state.amount = action.payload;
    },
    getnotes: (state, action) => {
      state.notes = action.payload;
    },
    getdate: (state, action) => {
      state.time = action.payload;
    },
    resetmsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
    resetDataContact: state => {
      state.nextPage = [];
    },
  },
  extraReducers: build => {
    build.addCase(topUp.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(topUp.fulfilled, (state, action) => {
      state.successMsg = action.payload?.message;
    });
    build.addCase(transfer.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.successMsg = action.payload?.message;
      state.errorMsg = action.payload?.error;
    });
    build.addCase(getAllProfile.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllProfile.fulfilled, (state, action) => {
      state.results = action.payload?.data;
      state.pageInfo = action.payload.pageInfo;
      state.nextPage.push(...action.payload.data);
    });
    build.addCase(getHistoryTransaction.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getHistoryTransaction.fulfilled, (state, action) => {
      state.resultsHistory = action.payload?.data;
      state.pageInfo = action.payload?.pageInfo;
    });
  },
});

export default transactions.reducer;
export {getAllProfile};
export const {
  getimage,
  getname,
  getphone,
  getreceiver,
  getamount,
  getnotes,
  getdate,
  resetmsg,
  resetDataContact,
} = transactions.actions;
