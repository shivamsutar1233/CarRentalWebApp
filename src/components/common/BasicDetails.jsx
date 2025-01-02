import { Button } from "@mui/material";
import React from "react";

const BasicDetails = ({ handleNext, handleBack, handleReset }) => {
  return (
    <div>
      BasicDetails
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default BasicDetails;
