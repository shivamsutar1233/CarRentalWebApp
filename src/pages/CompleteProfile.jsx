import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
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
const CompleteProfile = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

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
    <section className="pt-20 px-6 py-6 flex justify-between gap-2">
      <section className="">
        <Stepper activeStep={activeStep} orientation="vertical">
          {completedProfileSteps.map((label, index) => (
            <Step>
              <StepLabel>{label}</StepLabel>
              {/* <StepContent>
                        <Typography>{label}</Typography>
                            <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === completedProfileSteps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box></StepContent> */}
            </Step>
          ))}
        </Stepper>
      </section>
      <Divider orientation="vertical" variant="middle" flexItem />
      <section className="flex flex-1">
        {getActiveBuildStep(activeStep)}
      </section>
    </section>
  );
};

export default CompleteProfile;
