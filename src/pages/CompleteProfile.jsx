import { Divider, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import BasicDetails from "../components/common/BasicDetails";
import { completeProfileStages } from "../util/UIConstants";
import VerifyEmail from "../components/common/VerifyEmail";
import VerifyMobile from "../components/common/VerifyMobile";
import VerifyKYC from "../components/common/VerifyKYC";
import ProfileCompleteStep from "../components/common/ProfileCompleteStep";
const CompleteProfile = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const completedProfileSteps = [
    "Basic details",
    "Verify email",
    "Verify mobile",
    "Verify kyc",
  ];

  const getActiveBuildStep = (step) => {
    switch (step) {
      case completeProfileStages.basicDetails:
        return (
          <BasicDetails
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case completeProfileStages.verifyEmail:
        return (
          <VerifyEmail
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case completeProfileStages.verifyMobile:
        return (
          <VerifyMobile
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case completeProfileStages.verifyKyc:
        return (
          <VerifyKYC
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case completeProfileStages.profileCompleted:
        return <ProfileCompleteStep />;
    }
  };

  return (
    <section className="pt-20 px-6 2xl:px-96 py-6 flex flex-col justify-center gap-6">
      <section className="hidden md:block w-full 2xl:px-48">
        <Stepper activeStep={activeStep}>
          {completedProfileSteps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </section>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        className="hidden md:block"
      />
      <section className="flex justify-center items-center md:px-48">
        {getActiveBuildStep(activeStep)}
      </section>
    </section>
  );
};

export default CompleteProfile;
