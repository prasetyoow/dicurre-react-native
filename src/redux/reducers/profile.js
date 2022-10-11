import {createSlice} from '@reduxjs/toolkit';
import {
  editPhoneNumber,
  editPicture,
  editProfile,
  getUserLogin,
} from '../asyncActions/profile';

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
    build.addCase(editProfile.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editProfile.fulfilled, (state, action) => {
      state.data.fullname = action.payload?.data.fullname;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(editPhoneNumber.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editPhoneNumber.fulfilled, (state, action) => {
      state.data.phone_number = action.payload?.data.phone_number;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(editPicture.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editPicture.fulfilled, (state, action) => {
      state.data.picture = action.payload?.data?.picture;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
  },
});

export default profile.reducer;
export {getUserLogin};
export const {resetMsg} = profile.actions;
