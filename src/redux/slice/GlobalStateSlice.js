import { createSlice } from "@reduxjs/toolkit";

const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState: {},
  reducers: {
    setIsLoggedIn: (state, action) => {
      return { ...state, isLoggedIn: action.payload };
    },
    clearGlobalState: (state) => {
      return {};
    },
  },
});

export const { setIsLoggedIn, clearGlobalState } = GlobalStateSlice.actions;

export default GlobalStateSlice.reducer;
