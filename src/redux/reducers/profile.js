import {createSlice} from '@reduxjs/toolkit';
import {getUserLogin} from '../asyncActions/profile';

const initialState = {
  data: [],
  errorMsg: '',
  successMsg: '',
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getUserLogin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getUserLogin.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export default profile.reducer;
export {getUserLogin};
export const {resetMsg} = profile.actions;
