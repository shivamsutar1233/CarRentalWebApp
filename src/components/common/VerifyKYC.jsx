import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";

const VerifyKYC = ({ handleNext, handleBack, handleReset }) => {
  const kycOptions = [
    {
      id: 100,
      label: "Addhar Id",
    },
    {
      id: 101,
      label: "Pan Id",
    },
    {
      id: 102,
      label: "Driving license",
    },
    {
      id: 103,
      label: "Voter Id",
    },
  ];
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">Let's quickly verify your kyc</Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <section>
          <Autocomplete
            disablePortal
            options={kycOptions}
            sx={{ width: 375 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select preffered proof type"
                className="col-span-6"
              />
            )}
          />
        </section>
        <section className="grid grid-cols-12 col-span-12 gap-1">
          <TextField label="KYC number" className="col-span-6" />

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
            Finish
          </Button>
        </section>
      </section>
    </section>
  );
};

export default VerifyKYC;
