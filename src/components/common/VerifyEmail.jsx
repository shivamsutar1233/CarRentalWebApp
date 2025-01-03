import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Verification from "./Verification";
import { useDispatch, useSelector } from "react-redux";

const VerifyEmail = ({ handleNext, handleBack, handleReset }) => {
  const { email } = useSelector((state) => state?.completeProfile);
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your email address
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <Verification name={"Email"} value={email} disabled={true} />
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

export default VerifyEmail;
