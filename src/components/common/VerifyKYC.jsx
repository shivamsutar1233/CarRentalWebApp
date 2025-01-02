import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Verification from "./Verification";

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
            sx={{ width: "22rem" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select preffered proof type"
                className="col-span-12 sm:col-span-6"
              />
            )}
          />
        </section>
        <Verification name={"KYC document number"} />
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
