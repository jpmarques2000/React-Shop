import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    isLoggedIn: false,
  },
  reducers: {
    userLogin(state, action) {
      state.username = action.username;
      state.isLoggedIn = true;
    },
    userLogout(state) {
      state.username = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
