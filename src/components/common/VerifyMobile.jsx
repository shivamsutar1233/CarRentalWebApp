import { Button } from "@mui/material";
import React from "react";

const VerifyMobile = ({ handleNext, handleBack, handleReset }) => {
  return (
    <div>
      VerifyMobile <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default VerifyMobile;
