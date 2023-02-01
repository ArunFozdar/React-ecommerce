import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    signin: false,
    inputData: [
      {
        name: "arun",
        password: "arun@",
      },
    ],
  },
  reducers: {
    signIn: (state, action) => {
      state.signin = action.payload;
    },
    signOut: (state, action) => {
      state.signin = action.payload;
    },
    inputData: (state, action) => {
      state.inputData.push(action.payload);
    },
  },
});
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
