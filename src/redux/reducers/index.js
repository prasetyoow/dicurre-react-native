import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

// reducer
import auth from './auth';

const authConfig = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
});

export default reducer;
