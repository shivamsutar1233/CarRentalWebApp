import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Verification from "./Verification";
import { useDispatch, useSelector } from "react-redux";
import { updateCompeleteProfileState } from "../../redux/slice/CompleteProfileSlice";
import { toast } from "react-toastify";
const VerifyMobile = ({ handleNext, handleBack, handleReset }) => {
  const { mobile, isMobileVerified } = useSelector((state) => state?.completeProfile);
  const [OTP,setOTP] = useState(null);
  const dispatch = useDispatch()
  const handleSubmit =()=>{
    dispatch(updateCompeleteProfileState({key:"isMobileVerified",value:true}))
    toast.success("Mobile verified successfully")
  }
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your mobile number
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <Verification name={"Mobile number"} value={mobile} disabled={true}  setOTP={setOTP} OTP={OTP} handleSubmit={handleSubmit} isVerified={isMobileVerified}/>
        <section className="col-span-12 flex justify-between">
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </section>
      </section>
    </section>
  );
};

export default VerifyMobile;
