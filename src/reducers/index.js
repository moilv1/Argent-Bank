import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;