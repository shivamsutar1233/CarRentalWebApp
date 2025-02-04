import { createSlice } from "@reduxjs/toolkit";

const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState: { isProfileCompleted: false, userPreferences: {} },
  reducers: {
    setIsLoggedIn: (state, action) => {
      return { ...state, isLoggedIn: action.payload };
    },
    setIsProfileComplted: (state, action) => {
      return { ...state, isProfileCompleted: action.payload };
    },
    setUserPreferences: (state, action) => {
      return { ...state, userPreferences: { ...action.payload } };
    },
    setProfileElementAnchor: (state, action) => {
      return { ...state, profileAnchor: action.payload };
    },
    clearGlobalState: () => {
      return {};
    },
  },
});

export const {
  setIsLoggedIn,
  clearGlobalState,
  setIsProfileComplted,
  setUserPreferences,
  setProfileElementAnchor,
} = GlobalStateSlice.actions;

export default GlobalStateSlice.reducer;
