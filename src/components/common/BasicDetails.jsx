import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const BasicDetails = ({ handleNext, handleBack, handleReset }) => {
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Please help us to understand your basic details
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <TextField
          label="First name"
          className="col-span-12 md:col-span-6 lg:col-span-6"
        />
        <TextField
          label="Last name"
          className="col-span-12 md:col-span-6 lg:col-span-6"
        />
        <TextField
          label="Email"
          className="col-span-12 md:col-span-6 lg:col-span-6"
        />
        <TextField
          label="Mobile number"
          className="col-span-12 md:col-span-6 lg:col-span-6"
        />
        {/* <Button onClick={handleBack}>Back</Button> */}
        <section className="col-span-12 flex justify-end">
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </section>
      </section>
    </section>
  );
};

export default BasicDetails;
