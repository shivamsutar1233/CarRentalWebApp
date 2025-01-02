import { Button } from "@mui/material";
import React from "react";

const VerifyKYC = ({handleNext, handleBack, handleReset}) => {
  return <div>VerifyKYC
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
  </div>;
};

export default VerifyKYC;
