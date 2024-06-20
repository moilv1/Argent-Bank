import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  userName: "",
  connected: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.connected = true;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.firstName = "";
      state.lastName ="";
      state.email = "";
      state.userName = "";
      state.connected = false;
      localStorage.clear();
    },
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.userName = action.payload.userName
      state.connected = true;
    },
  },
});



export const { loginSuccess, logoutSuccess, setUser, } = userSlice.actions;
export default userSlice.reducer;

