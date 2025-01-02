import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import Verification from "./Verification";
const VerifyMobile = ({ handleNext, handleBack, handleReset }) => {
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your mobile number
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <Verification name={"Mobile number"} />
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
