import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  kycNumber: "",
  kycType: "",
};

const CompleteProfileSlice = createSlice({
  name: "CompleteProfile",
  initialState: { isProfileCompleted: false },
  reducers: {
    updateCompeleteProfileState: (state, action) => {
      return { ...state, [action.payload.key]: action.payload.value };
    },
    clearCompleteProfile: (state) => {
      return { ...initialState };
    },
  },
});

export const { updateCompeleteProfileState, clearCompleteProfile } =
  CompleteProfileSlice.actions;

export default CompleteProfileSlice.reducer;
