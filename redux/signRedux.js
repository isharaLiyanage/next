import { createSlice } from "@reduxjs/toolkit";

const SignSlice = createSlice({
  name: "Sign",
  initialState: {
    currentSign: null,
    isFetching: false,
    error: false,
  },
  reducers: {},
});

export const { SignStart, SignSuccess, SignFailure } = SignSlice.actions;
export default SignSlice.reducer;
