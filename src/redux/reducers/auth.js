import {createSlice} from '@reduxjs/toolkit';
import {createpin, login, register} from '../asyncActions/auth';

const initialState = {
  token: null,
  id: '',
  errorMsg: '',
  successMsg: '',
  email: '',
  tempEmail: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setTempEmail: (state, action) => {
      state.tempEmail = action.payload;
    },
    resetTempEmail: state => {
      state.tempEmail = null;
    },
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
    build.addCase(register.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.error;
      state.successMsg = action.payload?.success;
    });

    build.addCase(createpin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(createpin.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.error;
      state.successMsg = action.payload?.success;
    });

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

export const {logout, resetTempEmail, setTempEmail} = auth.actions;
export {login, register};
export default auth.reducer;
