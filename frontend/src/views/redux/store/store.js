import { configureStore } from '@reduxjs/toolkit'
import login from '../reducers/login';
import signUp from '../reducers/SignUp';
import masterData from '../reducers/masterdata';

export default configureStore({
  reducer: {
    login: login,
    signUp: signUp,
    masterData: masterData
  },
}) 