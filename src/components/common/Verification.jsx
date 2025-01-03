import { Button, TextField } from "@mui/material";
import React, { Fragment } from "react";

const Verification = ({ name, disabled, value }) => {
  return (
    <Fragment>
      <section className="grid grid-cols-12 col-span-12 gap-1">
        <TextField
          label={name}
          // helperText="We have sent you an OTP"
          disabled={disabled}
          value={value}
          className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6"
        />

        <Button
          variant="outlined"
          onClick={() => {}}
          size="small"
          className="col-start-1 col-span-4 sm:col-span-3 md:col-span-2"
        >
          resend otp
        </Button>
      </section>
      <section className="grid grid-cols-12 col-span-12 gap-1">
        <TextField
          label="OTP"
          className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6"
        />
        <Button
          variant="outlined"
          onClick={() => {}}
          size="small"
          className="col-start-1 col-span-4 sm:col-span-3 md:col-span-2"
        >
          Verify otp
        </Button>
      </section>
    </Fragment>
  );
};

export default Verification;
