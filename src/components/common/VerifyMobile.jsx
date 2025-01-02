import React from "react";
import { Button, TextField, Typography } from "@mui/material";
const VerifyMobile = ({ handleNext, handleBack, handleReset }) => {
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your mobile number
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <section className="grid grid-cols-12 col-span-12 gap-1">
          <TextField
            label="Mobile number"
            // helperText="We have sent you an OTP"
            className="col-span-6"
          />

          <Button
            variant="outlined"
            onClick={() => {}}
            size="small"
            className=" col-end-7 col-span-2"
          >
            resend otp
          </Button>
        </section>
        <section className="grid grid-cols-12 col-span-12 gap-1">
          <TextField label="OTP" className="col-span-6" />
          <Button
            variant="outlined"
            onClick={() => {}}
            size="small"
            className=" col-end-7 col-span-2"
          >
            Verify otp
          </Button>
        </section>
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
