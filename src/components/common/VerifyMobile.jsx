import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import Verification from "./Verification";
import { useSelector } from "react-redux";
const VerifyMobile = ({ handleNext, handleBack, handleReset }) => {
  const { mobile } = useSelector((state) => state?.completeProfile);
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your mobile number
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <Verification name={"Mobile number"} value={mobile} disabled={true} />
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
