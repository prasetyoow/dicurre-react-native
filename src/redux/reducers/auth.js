import {createSlice} from '@reduxjs/toolkit';
import {login} from '../asyncActions/auth';

const initialState = {
  token: '',
  id: '',
  errorMsg: '',
  successMsg: '',
  email: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  logout: () => {
    return initialState;
  },
  extraReducers: build => {
    // build.addCase(authAction.login.rejected, (state, action) => {
    // })
    // build.addCase(login.fulfilled, (state, action) => {
    //   if (action.payload.success) {
    //     state.token = action.payload.results.token;
    //   } else {
    //     console.log(action.payload);
    //     state.token = null;
    //     state.errorMsg = action.payload.message;
    //   }
    // });
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.data?.token;
      const id = action.payload?.data?.id;
      state.errorMsg = action.payload?.error;
      if (token) {
        state.token = token;
        state.id = id;
      }
    });
  },
});

export const {logout} = auth.actions;
export {login};
export default auth.reducer;
