import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  MobileStepper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import BasicDetails from "../components/common/BasicDetails";
import { completeProfileStages } from "../util/UIConstants";
import VerifyEmail from "../components/common/VerifyEmail";
import VerifyMobile from "../components/common/VerifyMobile";
import VerifyKYC from "../components/common/VerifyKYC";
import { useDispatch } from "react-redux";
import { setIsProfileComplted } from "../redux/slice/GlobalStateSlice";
import VerifiedIcon from "@mui/icons-material/Verified";
import CircularProgress from "@mui/material/CircularProgress";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
const CompleteProfile = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const theme = useTheme();

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
        return getProfileCOmpletedStep();
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const getProfileCOmpletedStep = () => {
    setTimeout(() => {
      setIsLoading(false);
      // dispatch(setIsProfileComplted(true));
    }, 2000);
    setTimeout(() => {
      // setIsLoading(false);
      dispatch(setIsProfileComplted(true));
    }, 3000);
    return (
      <section className="flex flex-1 items-center justify-center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <IconButton>
            <TaskAltIcon fontSize="large" />
          </IconButton>
        )}
      </section>
    );
  };
  return (
    <section className="pt-20 px-6 lg:px-48 py-6 flex flex-col md:flex-row justify-between gap-6">
      <section className="hidden md:block">
        <Stepper activeStep={activeStep} orientation="vertical">
          {completedProfileSteps.map((label, index) => (
            <Step>
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
      <section className="flex flex-1">
        {getActiveBuildStep(activeStep)}
      </section>
    </section>
  );
};

export default CompleteProfile;
