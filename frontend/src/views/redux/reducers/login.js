import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
  name: 'login',
  initialState: {
    loginData: {
      mobileNumber: '',
      password:'',
      userType: ''
    }
  },
  reducers: {
    setMobileNumber: (state, mobileNumber) => {
      state.loginData.mobileNumber = mobileNumber
    },
    setPassword: (state, password)=>{
      state.loginData.password = password
    },
    setUserType: (state, userType)=>{
      state.loginData.userType = userType
    }
  },
})

export const { setMobileNumber, setPassword, setUserType } = login.actions;

export default login.reducer