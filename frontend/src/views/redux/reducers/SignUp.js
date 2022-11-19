import { createSlice } from "@reduxjs/toolkit";

export const signUp = createSlice({
  name: "signUp",
  initialState: {
    registrationData: {
      fullName: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      email: "",
      address: "",
      city: "",
      provience: "AL",
      country: "US",
      errorMsg: "",
      language: "English",
      userType: ""
    },
  },
  reducers: {
    stateChangeHandler: (state, payload) => {
      const data = payload.payload;
      state.registrationData[data.name] = data.value;
    },
  },
});

export const { stateChangeHandler } = signUp.actions;

export default signUp.reducer;
