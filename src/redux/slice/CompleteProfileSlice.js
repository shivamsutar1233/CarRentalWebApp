import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  kycNumber: "",
  kycType: "",
  addharNumber: "",
  panNumber: "",
  voterNumber: "",
  drivingLicenseNumber: "",
  isEmailVerified: false,
  isMobileVerified:false
};

const CompleteProfileSlice = createSlice({
  name: "CompleteProfile",
  initialState: {...initialState, isProfileCompleted: false },
  reducers: {
    updateCompeleteProfileState: (state, action) => {
      return { ...state, [action.payload.key]: action.payload.value };
    },
    clearCompleteProfile: () => {
      return { ...initialState };
    },
  },
});

export const { updateCompeleteProfileState, clearCompleteProfile } =
  CompleteProfileSlice.actions;

export default CompleteProfileSlice.reducer;
