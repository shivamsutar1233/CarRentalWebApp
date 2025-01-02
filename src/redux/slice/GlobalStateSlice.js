import { createSlice } from "@reduxjs/toolkit";

const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState: { isProfileCompleted: false },
  reducers: {
    setIsLoggedIn: (state, action) => {
      return { ...state, isLoggedIn: action.payload };
    },
    setIsProfileComplted: (state, action) => {
      return { ...state, isProfileCompleted: action.payload };
    },
    clearGlobalState: (state) => {
      return {};
    },
  },
});

export const { setIsLoggedIn, clearGlobalState, setIsProfileComplted } =
  GlobalStateSlice.actions;

export default GlobalStateSlice.reducer;
