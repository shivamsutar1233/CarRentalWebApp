import { Button } from "@mui/material";
import React from "react";

const VerifyEmail = ({ handleNext, handleBack, handleReset }) => {
  return (
    <div>
      VerifyEmail
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default VerifyEmail;
